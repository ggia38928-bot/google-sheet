// Generated from reference/inventory.mjs.
var Inventory=(function(){
var DomainError=Domain.DomainError, normalizeActor=Domain.normalizeActor, safeInteger=Domain.safeInteger;
const fail = code => {throw new DomainError(code);};
function stockBalance(events,itemId,warehouseId) {
  let balance=0;
  for (const e of events) {
    if (e.itemId!==itemId) continue;
    if (e.toWarehouseId===warehouseId) balance+=e.quantityMilli;
    if (e.fromWarehouseId===warehouseId) balance-=e.quantityMilli;
    if (!Number.isSafeInteger(balance)) fail('QUANTITY_OVERFLOW');
  }
  return balance;
}
function prepareStockEvent(events,input,actor,validItems,validWarehouses) {
  const a=normalizeActor(actor);
  if (!['OWNER','MANAGER'].includes(a.role)) fail('FORBIDDEN');
  if (!input || !/^[A-Za-z0-9_-]{8,80}$/.test(input.requestId||'')) fail('INVALID_REQUEST_ID');
  if (!validItems.includes(input.itemId)) fail('UNKNOWN_ITEM');
  if (!['RECEIVE','ISSUE','TRANSFER'].includes(input.kind)) fail('INVALID_KIND');
  safeInteger(input.quantityMilli,'QUANTITY',1,1000000000000);
  const from=input.fromWarehouseId||null, to=input.toWarehouseId||null;
  if (input.kind==='RECEIVE' && (from!==null || to===null)) fail('INVALID_ROUTE');
  if (input.kind==='ISSUE' && (from===null || to!==null)) fail('INVALID_ROUTE');
  if (input.kind==='TRANSFER' && (!from || !to || from===to)) fail('INVALID_ROUTE');
  for (const w of [from,to].filter(Boolean)) {
    if (!validWarehouses.includes(w)) fail('UNKNOWN_WAREHOUSE');
    if (a.role!=='OWNER' && !a.warehouseIds?.includes(w)) fail('FORBIDDEN_WAREHOUSE');
  }
  const payload={kind:input.kind,itemId:input.itemId,fromWarehouseId:from,toWarehouseId:to,
    quantityMilli:input.quantityMilli,actorEmail:a.email};
  const fingerprint=JSON.stringify(payload);
  const old=events.find(e=>e.requestId===input.requestId);
  if (old) {
    if (old.fingerprint!==fingerprint) fail('IDEMPOTENCY_CONFLICT');
    return {event:old,replayed:true};
  }
  if (from && stockBalance(events,input.itemId,from)<input.quantityMilli) fail('INSUFFICIENT_STOCK');
  if (to) safeInteger(stockBalance(events,input.itemId,to)+input.quantityMilli,'BALANCE');
  return {event:{requestId:input.requestId,...payload,fingerprint},replayed:false};
}

return {stockBalance,prepareStockEvent};
})();
