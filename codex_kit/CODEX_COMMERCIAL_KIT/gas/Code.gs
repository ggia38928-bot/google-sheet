/** Reference stock RPC. Requires generated Domain.gs and Inventory.gs.
 * Scope: one customer, one Apps Script project, one controlled writer.
 * Never grant staff edit access to Users or StockJournal.
 */
function appSpreadsheet_() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('SETUP_REQUIRED');
  return SpreadsheetApp.openById(id);
}
function tableObjects_(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) throw new Error('MISSING_TABLE_' + name);
  var values = sheet.getDataRange().getValues();
  var header = values.shift();
  if (new Set(header).size !== header.length) throw new Error('DUPLICATE_HEADER');
  return values.filter(function(row) { return row.some(function(v) { return v !== ''; }); })
    .map(function(row) {
      var item = {};
      header.forEach(function(key,i) { item[key] = row[i]; });
      return item;
    });
}
function activeActor_(ss) {
  var email = String(Session.getActiveUser().getEmail() || '').trim().toLowerCase();
  if (!email) throw new Error('IDENTITY_UNAVAILABLE');
  var matches = tableObjects_(ss, 'Users').filter(function(u) {
    return String(u.Email).trim().toLowerCase() === email;
  });
  if (matches.length !== 1) throw new Error('UNAUTHORIZED');
  var user = matches[0];
  return Domain.normalizeActor({email:email,role:String(user.Role),active:user.Active === true,
    teamId:String(user.TeamID || ''),
    warehouseIds:String(user.AllowedWarehouses || '').split(',').map(function(x) {return x.trim();}).filter(Boolean)});
}
function loadStockEvents_(ss) {
  var sheet = ss.getSheetByName('StockJournal');
  if (!sheet || sheet.getRange('A1').getValue() !== 'EventJSON') throw new Error('JOURNAL_SCHEMA');
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2,1,sheet.getLastRow()-1,1).getValues().map(function(row) {
    // A malformed event is a blocker; skipping it could overstate available stock.
    var e;
    try { e=JSON.parse(row[0]); } catch (_) { throw new Error('JOURNAL_CORRUPT'); }
    if (!e.requestId || !e.fingerprint || !e.itemId || !Number.isSafeInteger(e.quantityMilli) || e.quantityMilli <= 0)
      throw new Error('JOURNAL_CORRUPT');
    return e;
  });
}
function postInventoryMovement(input) {
  var lock=LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    var ss=appSpreadsheet_();
    var actor=activeActor_(ss);
    var events=loadStockEvents_(ss);
    var items=tableObjects_(ss,'Products').filter(function(x){return x.Active===true;}).map(function(x){return x.ID;});
    var warehouses=tableObjects_(ss,'Warehouses').filter(function(x){return x.Active===true;}).map(function(x){return x.ID;});
    var prepared=Inventory.prepareStockEvent(events,input,actor,items,warehouses);
    if (!prepared.replayed) {
      prepared.event.id=Utilities.getUuid();
      prepared.event.postedAt=new Date().toISOString();
      var serialized=JSON.stringify(prepared.event);
      if (serialized.length > 20000) throw new Error('EVENT_TOO_LARGE');
      // One append is the posting record for both sides of a transfer.
      // Derived dashboard/projection updates must happen separately and be rebuildable.
      ss.getSheetByName('StockJournal').appendRow([serialized]);
      SpreadsheetApp.flush();
    }
    return {ok:true,replayed:prepared.replayed,eventId:prepared.event.id,requestId:prepared.event.requestId};
  } finally { lock.releaseLock(); }
}
function setupReferenceProject_() {
  // Run deliberately from the Apps Script editor, never expose as a public RPC.
  var props=PropertiesService.getScriptProperties();
  if (props.getProperty('SPREADSHEET_ID')) throw new Error('ALREADY_CONFIGURED');
  var email=String(Session.getActiveUser().getEmail()||'').trim().toLowerCase();
  if (!email) throw new Error('IDENTITY_UNAVAILABLE');
  var ss=SpreadsheetApp.create('QA_ONLY_Stock_Reference');
  ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');
  var definitions={
    Users:[['Email','Role','Active','TeamID','AllowedWarehouses'],[email,'OWNER',true,'TEAM1','W1,W2']],
    Products:[['ID','Active'],['I1',true]],
    Warehouses:[['ID','Active'],['W1',true],['W2',true]],
    StockJournal:[['EventJSON']]
  };
  Object.keys(definitions).forEach(function(name) {
    var sheet=ss.insertSheet(name), rows=definitions[name];
    sheet.getRange(1,1,rows.length,rows[0].length).setValues(rows);sheet.setFrozenRows(1);
  });
  props.setProperty('SPREADSHEET_ID',ss.getId());
  return {spreadsheetId:ss.getId(),url:ss.getUrl(),note:'Reference QA only; configure deployment and access before real use.'};
}
