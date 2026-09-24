import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {checkRelease,profiles} from '../tools/release-gate.mjs';
function fixture(t) {
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'release-gate-test-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
 fs.writeFileSync(path.join(dir,'test-evidence.txt'),'Synthetic evidence for gate unit test only.');
 const sha=crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,'test-evidence.txt'))).digest('hex');
 return {dir,report:{sku:'SYNTHETIC-SHEET',version:'0.0.0-test',buildHash:'synthetic_hash',platform:'SHEET',productType:'REPORT',openBugs:[],
 tests:profiles.SHEET.map(id=>({id,result:'PASS',buildHash:'synthetic_hash',evidencePath:'test-evidence.txt'})),
 artifacts:[{path:'test-evidence.txt',sha256:sha}],uat:{result:'PASS',evidencePath:'test-evidence.txt'}}};
}
test('gate: structurally complete synthetic evidence passes',t=>{const{dir,report}=fixture(t);assert.equal(checkRelease(report,dir).decision,'GO');});
test('gate: NOT_RUN is not PASS',t=>{const{dir,report}=fixture(t);report.tests[0].result='NOT_RUN';assert.equal(checkRelease(report,dir).decision,'NO-GO');});
test('gate: stale build and missing evidence rejected',t=>{const{dir,report}=fixture(t);report.tests[0].buildHash='old';report.tests[1].evidencePath='missing';assert.equal(checkRelease(report,dir).reasons.length,2);});
test('gate: P1 and tampered artifact rejected',t=>{const{dir,report}=fixture(t);report.openBugs=[{id:'BUG1',severity:'P1',status:'OPEN'}];report.artifacts[0].sha256='incorrect';assert.equal(checkRelease(report,dir).decision,'NO-GO');});
test('gate: evidence cannot escape its root',t=>{const{dir,report}=fixture(t);report.tests[0].evidencePath='../outside';assert.equal(checkRelease(report,dir).decision,'NO-GO');});
test('gate: transactional product requires additional live tests',t=>{const{dir,report}=fixture(t);report.productType='TRANSACTIONAL';assert.equal(checkRelease(report,dir).decision,'NO-GO');});
