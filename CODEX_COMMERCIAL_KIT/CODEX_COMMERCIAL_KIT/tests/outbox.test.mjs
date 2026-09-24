import test from 'node:test';
import assert from 'node:assert/strict';
import {deliverOutbox,recoverInterrupted} from '../reference/outbox.mjs';
const job=()=>({id:'mail_1',to:'test@example.test',subject:'Demo',body:'Demo',state:'PENDING'});
test('mail dry run does not call provider',async()=>{
 let sent=0;const j=job();await deliverOutbox(j,{send:async()=>{sent++;}});assert.equal(sent,0);assert.equal(j.state,'PENDING');
});
test('already sent job is not resent',async()=>{
 let sent=0;const j=job(),transport={send:async()=>{sent++;return{id:'provider_1'};}};
 await deliverOutbox(j,transport,{dryRun:false}); await deliverOutbox(j,transport,{dryRun:false});assert.equal(sent,1);
});
test('ambiguous provider failure requires reconciliation',async()=>{
 const j=job();await deliverOutbox(j,{send:async()=>{throw new Error('response lost');}},{dryRun:false});
 assert.equal(j.state,'UNKNOWN');await assert.rejects(()=>deliverOutbox(j,{send:async()=>({id:'x'})},{dryRun:false}),/MANUAL_RECONCILIATION/);
});
test('interrupted SENDING is recovered as UNKNOWN',()=>assert.equal(recoverInterrupted({...job(),state:'SENDING'}).state,'UNKNOWN'));
