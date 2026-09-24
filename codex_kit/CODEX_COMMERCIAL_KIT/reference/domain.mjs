// Reference domain implementation. No Google services or production persistence.
export class DomainError extends Error {
  constructor(code, message = code) { super(message); this.code = code; }
}
const fail = code => { throw new DomainError(code); };
export function safeInteger(value, name, min = 0, max = Number.MAX_SAFE_INTEGER) {
  if (!Number.isSafeInteger(value) || value < min || value > max) fail(`INVALID_${name}`);
  return value;
}
function halfUp(numerator, denominator) {
  if (numerator < 0n || denominator <= 0n) fail('INVALID_RATIO');
  const n = (numerator + denominator / 2n) / denominator;
  if (n > BigInt(Number.MAX_SAFE_INTEGER)) fail('MONEY_OVERFLOW');
  return Number(n);
}
export function calculateLine({quantityMilli, unitPriceVnd, discountBps = 0, taxBps = 0}) {
  safeInteger(quantityMilli, 'QUANTITY', 1);
  safeInteger(unitPriceVnd, 'PRICE');
  safeInteger(discountBps, 'DISCOUNT', 0, 10000);
  safeInteger(taxBps, 'TAX', 0, 10000);
  const gross = halfUp(BigInt(quantityMilli) * BigInt(unitPriceVnd), 1000n);
  const discount = halfUp(BigInt(gross) * BigInt(discountBps), 10000n);
  const taxable = gross - discount;
  const tax = halfUp(BigInt(taxable) * BigInt(taxBps), 10000n);
  const total = safeInteger(taxable + tax, 'TOTAL');
  return {gross, discount, taxable, tax, total};
}
export function allocateFunds(amount, weightsBps) {
  safeInteger(amount, 'AMOUNT');
  if (!Array.isArray(weightsBps) || weightsBps.length === 0) fail('INVALID_WEIGHTS');
  weightsBps.forEach(w => safeInteger(w, 'WEIGHT', 0, 10000));
  if (weightsBps.reduce((a,b) => a+b, 0) !== 10000) fail('WEIGHTS_SUM');
  const raw = weightsBps.map((w,index) => ({index,
    value: Number(BigInt(amount) * BigInt(w) / 10000n),
    remainder: BigInt(amount) * BigInt(w) % 10000n}));
  let left = amount - raw.reduce((a,x) => a+x.value, 0);
  const ranked = [...raw].sort((a,b) => a.remainder === b.remainder
    ? a.index-b.index : a.remainder > b.remainder ? -1 : 1);
  for (let i=0; i<left; i++) ranked[i].value++;
  return raw.map(x=>x.value);
}
export function remainingDebt(invoice, allocations, credits = []) {
  safeInteger(invoice, 'INVOICE');
  [...allocations,...credits].forEach(x=>safeInteger(x,'PAYMENT'));
  const remaining = BigInt(invoice) - [...allocations,...credits].reduce((s,x)=>s+BigInt(x),0n);
  if (remaining < 0n) fail('OVERALLOCATED');
  return Number(remaining);
}
export function overlap(aStart, aEnd, bStart, bEnd) {
  const values=[aStart,aEnd,bStart,bEnd].map(x=>Date.parse(x));
  if (values.some(x=>!Number.isFinite(x)) || values[0]>=values[1] || values[2]>=values[3]) fail('INVALID_INTERVAL');
  return values[0]<values[3] && values[2]<values[1];
}
export function localDate(instant, timeZone = 'Asia/Ho_Chi_Minh') {
  const d = new Date(instant);
  if (!Number.isFinite(d.valueOf())) fail('INVALID_DATE');
  const parts = new Intl.DateTimeFormat('en-GB',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d);
  const get = type=>parts.find(p=>p.type===type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function normalizeActor(actor) {
  if (!actor || actor.active !== true || typeof actor.email !== 'string' || !actor.email.trim()) fail('UNAUTHENTICATED');
  if (!['OWNER','MANAGER','STAFF','VIEWER'].includes(actor.role)) fail('FORBIDDEN');
  return {...actor,email:actor.email.trim().toLowerCase()};
}
export function canReadContact(actor, contact) {
  const a=normalizeActor(actor);
  return a.role==='OWNER' || contact.ownerEmail.toLowerCase()===a.email ||
    (Array.isArray(contact.sharedWith) && contact.sharedWith.map(x=>x.toLowerCase()).includes(a.email)) ||
    (Array.isArray(contact.editSharedWith) && contact.editSharedWith.map(x=>x.toLowerCase()).includes(a.email)) ||
    (a.role==='MANAGER' && !!a.teamId && a.teamId===contact.teamId);
}
export function canEditContact(actor, contact) {
  const a=normalizeActor(actor);
  if (a.role==='VIEWER') return false;
  return a.role==='OWNER' || contact.ownerEmail.toLowerCase()===a.email ||
    (Array.isArray(contact.editSharedWith) && contact.editSharedWith.map(x=>x.toLowerCase()).includes(a.email)) ||
    (a.role==='MANAGER' && !!a.teamId && a.teamId===contact.teamId);
}
export function transitionOpportunity(record, patch, actor) {
  const a=normalizeActor(actor);
  if (!canEditContact(a,record)) fail('FORBIDDEN');
  if (!Number.isSafeInteger(patch.expectedVersion) || patch.expectedVersion!==record.version) fail('VERSION_CONFLICT');
  const edges={NEW:['QUALIFIED','LOST'],QUALIFIED:['PROPOSAL','LOST'],PROPOSAL:['WON','LOST'],WON:[],LOST:[]};
  if (!edges[record.stage]?.includes(patch.stage)) fail('INVALID_TRANSITION');
  if (!patch.now || !Number.isFinite(Date.parse(patch.now))) fail('INVALID_DATE');
  return {...record, stage:patch.stage, version:record.version+1,
    updatedAt:patch.now, closedAt:['WON','LOST'].includes(patch.stage)?patch.now:null};
}
export function winRate(stages) {
  const won=stages.filter(x=>x==='WON').length;
  const closed=stages.filter(x=>x==='WON'||x==='LOST').length;
  return closed===0?null:won/closed;
}
export function safeCsvCell(value) {
  let text=String(value ?? '');
  // Protect exported *text*. Numeric fields should use a typed export separately.
  if (/^[\s\u0000-\u001f]*[=+@-]/u.test(text)) text="'"+text;
  return '"'+text.replaceAll('"','""')+'"';
}
