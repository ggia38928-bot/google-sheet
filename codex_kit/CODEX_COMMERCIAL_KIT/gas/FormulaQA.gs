/** Run createAndRunFormulaFixture_ from a separate test project.
 * This intentionally creates a new QA spreadsheet, never edits an existing customer file.
 * Not executed on Google as part of this kit's local verification.
 */
function createAndRunFormulaFixture_() {
  var ss=SpreadsheetApp.create('QA_ONLY_Formula_Contracts');
  ss.setSpreadsheetLocale('en_US');
  ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');
  var tasks=ss.insertSheet('Tasks');
  tasks.getRange('A1:D4').setValues([
    ['ID','Status','DueDate','CompletedAt'],
    ['T1','DONE',new Date('2026-09-05T05:00:00Z'),new Date('2026-09-05T04:00:00Z')],
    ['T2','TODO',new Date('2026-09-05T05:00:00Z'),''],
    ['T3','CANCELLED',new Date('2026-09-04T05:00:00Z'),'']
  ]);
  var deals=ss.insertSheet('Deals');
  deals.getRange('A1:B6').setValues([['ID','Stage'],['D1','WON'],['D2','WON'],['D3','LOST'],['D4','NEW'],['D5','PROPOSAL']]);
  var lines=ss.insertSheet('OrderLines');
  lines.getRange('A1:F2').setValues([['Qty','Price','DiscountRate','TaxRate','Net','Total'],[2,100000,0.1,0.08,'','']]);
  lines.getRange('E2').setFormula('=ROUND(A2*B2,0)-ROUND(ROUND(A2*B2,0)*C2,0)');
  lines.getRange('F2').setFormula('=E2+ROUND(E2*D2,0)');
  var cash=ss.insertSheet('Cash');
  cash.getRange('A1:D4').setValues([['Type','From','To','Amount'],['RECEIVE','','A',10000000],['TRANSFER','A','B',5000000],['PAY','B','',1000000]]);
  var qa=ss.insertSheet('QA');
  qa.getRange('A1:D7').setValues([
    ['Case','Actual','Expected','Pass'],['Task completion','','0.5',''],['Overdue as of fixed date','','1',''],
    ['CRM win rate','',2/3,''],['Quote total','',194400,''],['Wallet A','',5000000,''],['Wallet B','',4000000,'']
  ]);
  qa.getRange('B2').setFormula('=IFERROR(COUNTIF(Tasks!B2:B4,"DONE")/COUNTIFS(Tasks!A2:A4,"<>",Tasks!B2:B4,"<>CANCELLED"),0)');
  qa.getRange('B3').setFormula('=COUNTIFS(Tasks!A2:A4,"<>",Tasks!B2:B4,"<>DONE",Tasks!B2:B4,"<>CANCELLED",Tasks!C2:C4,">0",Tasks!C2:C4,"<"&DATE(2026,9,7))');
  qa.getRange('B4').setFormula('=IFERROR(COUNTIF(Deals!B2:B6,"WON")/(COUNTIF(Deals!B2:B6,"WON")+COUNTIF(Deals!B2:B6,"LOST")),0)');
  qa.getRange('B5').setFormula('=OrderLines!F2');
  qa.getRange('B6').setFormula('=SUMIF(Cash!C2:C4,"A",Cash!D2:D4)-SUMIF(Cash!B2:B4,"A",Cash!D2:D4)');
  qa.getRange('B7').setFormula('=SUMIF(Cash!C2:C4,"B",Cash!D2:D4)-SUMIF(Cash!B2:B4,"B",Cash!D2:D4)');
  qa.getRange('C2:C3').setValues([[0.5],[1]]);
  qa.getRange('D2:D7').setFormulas(Array.from({length:6},function(_,i){var n=i+2;return ['=ABS(B'+n+'-C'+n+')<0.000000001'];}));
  SpreadsheetApp.flush();
  var formulaErrors=[];
  ss.getSheets().forEach(function(sheet) {
    var range=sheet.getDataRange(), values=range.getDisplayValues(), formulas=range.getFormulas();
    for(var r=0;r<values.length;r++) for(var c=0;c<values[r].length;c++)
      if(formulas[r][c] && /^#(REF!|DIV\/0!|VALUE!|N\/A|NAME\?|NUM!|ERROR!|SPILL!)/.test(values[r][c]))
        formulaErrors.push(sheet.getName()+'!R'+(r+1)+'C'+(c+1)+':'+values[r][c]);
  });
  var checks=qa.getRange('A2:D7').getValues();
  var failed=checks.filter(function(row){return row[3]!==true;});
  var report={url:ss.getUrl(),locale:ss.getSpreadsheetLocale(),checks:checks,formulaErrors:formulaErrors,passed:!failed.length&&!formulaErrors.length};
  console.log(JSON.stringify(report));
  if(!report.passed) throw new Error('FORMULA_INTEGRATION_FAILED: '+ss.getUrl());
  return report;
}
