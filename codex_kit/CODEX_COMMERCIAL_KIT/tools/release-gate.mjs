import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
export const profiles={
 SHEET:['business_rules','clean_install','docs','backup_restore','sharing_ownership','formula_live','locale_live'],
 WEB:['business_rules','clean_install','docs','backup_restore','identity_live','permissions_live','persistence_live','idempotency_live','e2e_live'],
 APPSHEET:['business_rules','clean_install','docs','backup_restore','identity_live','permissions_live','appsheet_sync_live','automation_live','license_review','ownership_handover']
};
export function checkRelease(report,root) {
 const reasons=[];
 if(!profiles[report.platform]) return {decision:'NO-GO',reasons:['UNKNOWN_PLATFORM']};
 if(!report.sku||!report.version||!report.buildHash) reasons.push('MISSING_RELEASE_IDENTITY');
 if(!Array.isArray(report.tests)) reasons.push('MISSING_TESTS');
 if(!Array.isArray(report.openBugs)) reasons.push('MISSING_BUG_REVIEW');
 if(report.productType==='TRANSACTIONAL') {
   for(const id of ['concurrency_live','recovery_live','reconciliation_live'])
     if(!report.tests?.some(t=>t.id===id)) reasons.push('MISSING_'+id);
 }
 const required=[...profiles[report.platform],...(report.productType==='TRANSACTIONAL'?['concurrency_live','recovery_live','reconciliation_live']:[])];
 const safeFile=(rel)=>{
   if(typeof rel!=='string'||!rel||path.isAbsolute(rel)) return null;
   const base=fs.realpathSync(root), resolved=path.resolve(base,rel);
   if(!resolved.startsWith(base+path.sep)||!fs.existsSync(resolved)||!fs.statSync(resolved).isFile()) return null;
   const real=fs.realpathSync(resolved);
   return real.startsWith(base+path.sep)?real:null;
 };
 const ids=(report.tests||[]).map(t=>t.id);
 if(new Set(ids).size!==ids.length) reasons.push('DUPLICATE_TEST_ID');
 for(const id of required) {
   const t=report.tests?.find(t=>t.id===id);
   if(!t||t.result!=='PASS') {reasons.push('NOT_PASS_'+id);continue;}
   if(t.buildHash!==report.buildHash) reasons.push('STALE_BUILD_'+id);
   if(!safeFile(t.evidencePath)) reasons.push('MISSING_EVIDENCE_'+id);
 }
 for(const bug of report.openBugs||[]) if(['P0','P1'].includes(bug.severity)&&bug.status!=='CLOSED') reasons.push('OPEN_'+bug.severity+'_'+bug.id);
 if(!Array.isArray(report.artifacts)||report.artifacts.length===0) reasons.push('MISSING_ARTIFACTS');
 for(const a of report.artifacts||[]) {
   const file=safeFile(a.path);
   if(!file) {reasons.push('MISSING_ARTIFACT_'+a.path);continue;}
   const digest=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
   if(digest!==a.sha256) reasons.push('ARTIFACT_HASH_MISMATCH_'+a.path);
 }
 if(report.uat?.result!=='PASS'||!safeFile(report.uat?.evidencePath)) reasons.push('UAT_NOT_VERIFIED');
 return {decision:reasons.length?'NO-GO':'GO',reasons,
   note:'Structural evidence gate only. Review truth of evidence and obtain release authorization separately.'};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 if(!process.argv[2]) {console.error('Usage: node tools/release-gate.mjs path/to/report.json [evidence-root]');process.exit(2);}
 const report=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
 const result=checkRelease(report,path.resolve(process.argv[3]||process.cwd()));
 console.log(JSON.stringify(result,null,2));
 if(result.decision!=='GO') process.exitCode=1;
}
