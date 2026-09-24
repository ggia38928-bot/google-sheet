// Reference transport abstraction; persist SENDING before calling a real provider.
// The provider may accept a message then lose the response. Do not auto-resend UNKNOWN.
export async function deliverOutbox(job,transport,{dryRun=true}={}) {
  if (job.state==='SENT') return {...job,replayed:true};
  if (job.state!=='PENDING') throw new Error('MANUAL_RECONCILIATION_REQUIRED');
  if (dryRun) return {...job,dryRun:true};
  job.state='SENDING';
  try {
    const result=await transport.send({id:job.id,to:job.to,subject:job.subject,body:job.body});
    job.providerId=result.id;
    job.state='SENT';
  } catch (error) {
    job.state='UNKNOWN';
    job.lastError=String(error.message||error);
  }
  return {...job};
}
export function recoverInterrupted(job) {
  return job.state==='SENDING'?{...job,state:'UNKNOWN',lastError:'Interrupted while sending'}:{...job};
}
