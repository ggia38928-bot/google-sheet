import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
test('generated Apps Script namespaces parse and preserve reference calculation',()=>{
 const sandbox={};vm.createContext(sandbox);
 for(const f of ['Domain.gs','Inventory.gs','Code.gs','FormulaQA.gs'])
   vm.runInContext(fs.readFileSync(new URL('../gas/'+f,import.meta.url),'utf8'),sandbox,{filename:f});
 assert.equal(sandbox.Domain.calculateLine({quantityMilli:2000,unitPriceVnd:100000,discountBps:1000,taxBps:800}).total,194400);
 assert.equal(typeof sandbox.postInventoryMovement,'function');
 // Google services are deliberately not mocked as integration proof.
 assert.throws(()=>sandbox.postInventoryMovement({}),/LockService/);
});
