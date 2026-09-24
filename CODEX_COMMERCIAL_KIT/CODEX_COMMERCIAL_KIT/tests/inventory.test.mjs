import test from 'node:test';
import assert from 'node:assert/strict';
import {MemoryStockStore,stockBalance} from '../reference/inventory.mjs';
const actor={email:'owner@example.test',active:true,role:'OWNER'};
const items=['I1'],warehouses=['W1','W2'];
const receive={requestId:'req_receipt_001',kind:'RECEIVE',itemId:'I1',quantityMilli:10000,toWarehouseId:'W1'};
const issue=(id,quantityMilli)=>({requestId:id,kind:'ISSUE',itemId:'I1',quantityMilli,fromWarehouseId:'W1'});
test('idempotent receiving and conflicting reuse',async()=>{
 const s=new MemoryStockStore(); await s.transact(receive,actor,items,warehouses);
 assert.equal((await s.transact(receive,actor,items,warehouses)).replayed,true);
 assert.equal(stockBalance(s.events,'I1','W1'),10000);
 await assert.rejects(()=>s.transact({...receive,quantityMilli:9999},actor,items,warehouses),/IDEMPOTENCY_CONFLICT/);
});
test('two requests compete for last stock under serialized adapter',async()=>{
 const s=new MemoryStockStore(); await s.transact(receive,actor,items,warehouses);
 const r=await Promise.allSettled([s.transact(issue('request_issue_a',7000),actor,items,warehouses),s.transact(issue('request_issue_b',7000),actor,items,warehouses)]);
 assert.equal(r.filter(x=>x.status==='fulfilled').length,1);assert.equal(stockBalance(s.events,'I1','W1'),3000);
});
test('transfer is one journal event and conserves total stock',async()=>{
 const s=new MemoryStockStore(); await s.transact(receive,actor,items,warehouses);
 await s.transact({requestId:'transfer_001',kind:'TRANSFER',itemId:'I1',quantityMilli:3000,fromWarehouseId:'W1',toWarehouseId:'W2'},actor,items,warehouses);
 assert.equal(s.events.length,2);assert.equal(stockBalance(s.events,'I1','W1'),7000);assert.equal(stockBalance(s.events,'I1','W2'),3000);
});
test('staff cannot post, manager cannot post outside warehouse grant',async()=>{
 const s=new MemoryStockStore();
 await assert.rejects(()=>s.transact(receive,{...actor,role:'STAFF'},items,warehouses),/FORBIDDEN/);
 await assert.rejects(()=>s.transact(receive,{...actor,role:'MANAGER',warehouseIds:['W2']},items,warehouses),/FORBIDDEN_WAREHOUSE/);
});
test('same warehouse transfer and unknown item rejected',async()=>{
 const s=new MemoryStockStore();
 await assert.rejects(()=>s.transact({...receive,itemId:'missing'},actor,items,warehouses),/UNKNOWN_ITEM/);
 await assert.rejects(()=>s.transact({...receive,kind:'TRANSFER',fromWarehouseId:'W1'},actor,items,warehouses),/INVALID_ROUTE/);
});
test('journal replay rebuilds balances and retry does not post twice',async()=>{
 const s=new MemoryStockStore();await s.transact(receive,actor,items,warehouses);await s.transact(issue('request_issue_c',4000),actor,items,warehouses);
 const recovered=new MemoryStockStore(); recovered.events=JSON.parse(JSON.stringify(s.events));
 await recovered.transact(issue('request_issue_c',4000),actor,items,warehouses);
 assert.equal(stockBalance(recovered.events,'I1','W1'),6000);
});
