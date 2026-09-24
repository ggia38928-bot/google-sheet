import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateLine,allocateFunds,remainingDebt,overlap,localDate,canReadContact,transitionOpportunity,winRate,safeCsvCell} from '../reference/domain.mjs';
const staff={email:'a@example.test',role:'STAFF',active:true,teamId:'T1'};
const deal={id:'D1',ownerEmail:staff.email,teamId:'T1',stage:'PROPOSAL',version:3};
test('money: integer VND and explicit per-line rounding',()=>{
 assert.deepEqual(calculateLine({quantityMilli:2000,unitPriceVnd:100000,discountBps:1000,taxBps:800}),
 {gross:200000,discount:20000,taxable:180000,tax:14400,total:194400});
});
test('money: fractional quantity rounds once at gross',()=>assert.equal(calculateLine({quantityMilli:1250,unitPriceVnd:12345}).total,15431));
test('money: rejects negative qty, NaN and excess discount',()=>{
 for (const patch of [{quantityMilli:-1},{unitPriceVnd:NaN},{discountBps:10001}])
 assert.throws(()=>calculateLine({quantityMilli:1000,unitPriceVnd:1,...patch}));
});
test('money: overflow is rejected rather than silently rounded',()=>assert.throws(()=>calculateLine({quantityMilli:Number.MAX_SAFE_INTEGER,unitPriceVnd:Number.MAX_SAFE_INTEGER}),/OVERFLOW/));
test('allocation: conserves each dong including residuals',()=>{
 const values=allocateFunds(1000001,[5500,1000,1000,1000,1000,500]);
 assert.deepEqual(values,[550001,100000,100000,100000,100000,50000]);
 for(let amount=0;amount<1000;amount++) assert.equal(allocateFunds(amount,[3333,3333,3334]).reduce((a,b)=>a+b,0),amount);
});
test('allocation: sum other than 100% is invalid',()=>assert.throws(()=>allocateFunds(100,[5000,3000]),/WEIGHTS_SUM/));
test('receivable: partial payment and credit',()=>assert.equal(remainingDebt(1000000,[400000],[100000]),500000));
test('receivable: over-allocation blocked',()=>assert.throws(()=>remainingDebt(100,[101]),/OVERALLOCATED/));
test('booking: half-open intervals permit exact checkout/checkin',()=>{
 assert.equal(overlap('2026-09-01T07:00:00Z','2026-09-01T08:00:00Z','2026-09-01T08:00:00Z','2026-09-01T09:00:00Z'),false);
 assert.equal(overlap('2026-09-01T07:00:00Z','2026-09-01T08:01:00Z','2026-09-01T08:00:00Z','2026-09-01T09:00:00Z'),true);
});
test('booking: invalid intervals rejected',()=>assert.throws(()=>overlap('bad','bad','bad','bad'),/INVALID_INTERVAL/));
test('timezone: Vietnam date crosses UTC midnight boundary',()=>assert.equal(localDate('2026-09-06T18:30:00Z'),'2026-09-07'));
test('CRM access: staff cannot read other owner and viewer cannot write',()=>{
 assert.equal(canReadContact(staff,{...deal,ownerEmail:'b@example.test'}),false);
 assert.throws(()=>transitionOpportunity(deal,{stage:'WON',expectedVersion:3,now:'2026-09-07T00:00:00Z'},{...staff,role:'VIEWER'}),/FORBIDDEN/);
});
test('CRM access: manager must have matching nonblank team',()=>{
 assert.equal(canReadContact({...staff,role:'MANAGER'}, {...deal,ownerEmail:'b@example.test'}),true);
 assert.equal(canReadContact({...staff,role:'MANAGER',teamId:''}, {...deal,ownerEmail:'b@example.test',teamId:''}),false);
});
test('CRM access: inactive account is rejected',()=>assert.throws(()=>canReadContact({...staff,active:false},deal),/UNAUTHENTICATED/));
test('CRM access: read-only sharing must not grant write access',()=>{
 const shared={...deal,ownerEmail:'other@example.test',sharedWith:[staff.email]};
 assert.equal(canReadContact(staff,shared),true);
 assert.throws(()=>transitionOpportunity(shared,{stage:'WON',expectedVersion:3,now:'2026-09-07T00:00:00Z'},staff),/FORBIDDEN/);
});
test('CRM access: explicit edit grant also permits reading',()=>{
 const shared={...deal,ownerEmail:'other@example.test',editSharedWith:[staff.email]};
 assert.equal(canReadContact(staff,shared),true);
 assert.equal(transitionOpportunity(shared,{stage:'WON',expectedVersion:3,now:'2026-09-07T00:00:00Z'},staff).stage,'WON');
});
test('CRM stage: stale edit blocked, successful close records time',()=>{
 assert.throws(()=>transitionOpportunity(deal,{stage:'WON',expectedVersion:2,now:'2026-09-07T00:00:00Z'},staff),/VERSION_CONFLICT/);
 const updated=transitionOpportunity(deal,{stage:'WON',expectedVersion:3,now:'2026-09-07T00:00:00Z'},staff);
 assert.equal(updated.version,4); assert.equal(updated.closedAt,'2026-09-07T00:00:00Z'); assert.equal(deal.stage,'PROPOSAL');
});
test('CRM stage: disallowed transitions rejected',()=>assert.throws(()=>transitionOpportunity({...deal,stage:'NEW'},{stage:'WON',expectedVersion:3,now:'2026-09-07T00:00:00Z'},staff),/INVALID_TRANSITION/));
test('CRM KPI: denominator is closed deals',()=>{
 assert.equal(winRate(['WON','WON','LOST','NEW','PROPOSAL']),2/3);assert.equal(winRate(['NEW']),null);
});
test('CSV: injection prefix escaped, quotes and line breaks preserved',()=>{
 assert.equal(safeCsvCell('=1+1'),'"\'=1+1"');
 assert.equal(safeCsvCell(' \t@SUM(1)'),'"\' \t@SUM(1)"');
 assert.equal(safeCsvCell('a"b\nc'),'"a""b\nc"');
});
