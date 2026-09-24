import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {computeCosts} from '../tools/cost-model.mjs';
const c=JSON.parse(fs.readFileSync(new URL('../config/costs.json',import.meta.url),'utf8'));
test('cost: one-off effort includes QA once, not double-counted per variant',()=>{
 const r=computeCosts(c);assert.equal(r.delivery.lowHours,440);assert.equal(r.delivery.highHours,735);
 assert.equal(r.delivery.lowLaborVnd,66000000);assert.equal(r.delivery.highLaborVnd,110250000);
});
test('cost: customer licences are separate from seller monthly budget',()=>{
 const r=computeCosts(c);assert.equal(r.customerCore.find(x=>x.paidUsers===5).vnd,1300000);
 assert.equal(r.seller[0].totalIncludingExistingVnd-r.seller[0].incrementalVnd,520000);
});
test('cost: contribution and nonpositive economics',()=>{
 assert.equal(computeCosts(c).economics.contributionVnd,379080);
 assert.equal(computeCosts({...c,unitEconomicsExample:{...c.unitEconomicsExample,salePriceVnd:10000}}).economics.ordersToCoverMonthlyFixed,null);
});
test('cost: full portfolio is an alternative estimate',()=>{
 const r=computeCosts(c);assert.equal(r.portfolio.lowHours,3445);assert.equal(r.portfolio.highHours,6460);
});
test('cost: invalid rate is rejected',()=>assert.throws(()=>computeCosts({...c,qaDocsRate:-0.1}),/INVALID_COST_RATE/));
