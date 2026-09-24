/**
 * Generator script to create PRODUCT_CATALOG.json and SOURCE_MAP.csv
 * from BUILD_ALL_TEMPLATES_CODEX.md
 */

const fs = require('fs');
const path = require('path');

const codexContent = fs.readFileSync('BUILD_ALL_TEMPLATES_CODEX.md', 'utf8');
const lines = codexContent.split(/\r?\n/);

// ==========================================
// 1. Parse Section 14: SOURCE_MAP.csv
// ==========================================
const startSection14 = lines.findIndex(l => l.includes('## 14. Bảng đối chiếu'));
const startSection15 = lines.findIndex(l => l.includes('## 15. Checklist'));

const sourceMapRows = [];
for (let i = startSection14; i < startSection15; i++) {
  const line = lines[i];
  const match = line.match(/^\|\s*([TGX]\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
  if (match) {
    const [, code, rawNameLink, rawTarget, evidence] = match;
    let title = rawNameLink;
    let url = '';
    const linkMatch = rawNameLink.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      title = linkMatch[1];
      url = linkMatch[2];
    }
    // Extract target code, e.g. [F04](#f04) or [F08](#f08) + [F12](#f12)
    const targets = [];
    const targetMatches = rawTarget.matchAll(/\[([FU]\d{2})\]/g);
    for (const tm of targetMatches) {
      targets.push(tm[1]);
    }
    const cleanTarget = targets.join('+') || rawTarget.replace(/\[|\]|\(#.*?\)/g, '').trim();

    sourceMapRows.push({
      code,
      title: title.trim(),
      url: url.trim(),
      target: cleanTarget,
      evidence: evidence.trim(),
      status: cleanTarget.includes('F01') ? 'implemented_local' : 'mapped'
    });
  }
}

console.log(`Extracted ${sourceMapRows.length} rows for SOURCE_MAP.csv`);

// Write SOURCE_MAP.csv
function escapeCsv(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const csvHeader = 'SourceID,Title,SourceURL,TargetFamily,EvidenceLevel,Status,Notes\n';
const csvContent = csvHeader + sourceMapRows.map(r => 
  [r.code, escapeCsv(r.title), escapeCsv(r.url), r.target, escapeCsv(r.evidence), r.status, r.code.startsWith('X') ? 'Bổ sung ngoài danh mục shop' : 'Danh mục công khai'].join(',')
).join('\n') + '\n';

fs.writeFileSync('SOURCE_MAP.csv', csvContent, 'utf8');
console.log('Saved SOURCE_MAP.csv');

// ==========================================
// 2. Parse Section 11 & 12: PRODUCT_CATALOG.json
// ==========================================
const catalogItems = [];
let currentItem = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const headerMatch = line.match(/^###\s+([FU]\d{2})\s+[—–-]\s+(.*)$/);
  if (headerMatch) {
    if (currentItem) catalogItems.push(currentItem);
    const id = headerMatch[1];
    const name = headerMatch[2].trim();
    currentItem = {
      familyId: id,
      name,
      type: id.startsWith('F') ? 'family' : 'utility',
      wave: id.startsWith('F') ? 1 : 4,
      variants: id.startsWith('F') ? ['SHEET', 'WEB', 'APPSHEET'] : ['UTILITY'],
      skus: [],
      status: id === 'F01' ? 'implemented_local' : 'planned',
      locale: 'vi-VN',
      timeZone: 'Asia/Ho_Chi_Minh',
      currency: 'VND',
      sourceMapIds: [],
      tables: [],
      kpis: [],
      dataSpec: [],
      acceptanceCriteria: ''
    };
    continue;
  }
  if (!currentItem) continue;

  const varMatch = line.match(/\*\*Biến thể:\*\*\s*([^.*]+)/);
  if (varMatch) {
    const rawVars = varMatch[1].split(/[,;]/).map(s => s.trim().toUpperCase());
    const mappedVars = [];
    if (rawVars.some(v => v.includes('S'))) mappedVars.push('SHEET');
    if (rawVars.some(v => v.includes('W'))) mappedVars.push('WEB');
    if (rawVars.some(v => v.includes('A'))) mappedVars.push('APPSHEET');
    if (mappedVars.length > 0) currentItem.variants = mappedVars;
  }

  const waveMatch = line.match(/\*\*Đợt:\*\*\s*(\d+)/);
  if (waveMatch) {
    currentItem.wave = parseInt(waveMatch[1], 10);
  }

  const dataMatch = line.match(/\*\*Dữ liệu nghiệp vụ:\*\*/);
  if (dataMatch) {
    for (let j = i + 1; j < lines.length; j++) {
      const dLine = lines[j].trim();
      if (!dLine) continue;
      if (dLine.startsWith('**') || dLine.startsWith('###') || dLine.startsWith('<a')) break;
      if (dLine.startsWith('- ')) {
        currentItem.dataSpec.push(dLine.slice(2));
      }
    }
  }

  const kpiMatch = line.match(/\*\*Báo cáo\/KPI:\*\*\s*(.*)$/);
  if (kpiMatch) {
    currentItem.kpis = kpiMatch[1].split(/[,;]/).map(s => s.trim()).filter(Boolean);
  }

  const acMatch = line.match(/\*\*Ca nghiệm thu riêng:\*\*\s*(.*)$/);
  if (acMatch) {
    currentItem.acceptanceCriteria = acMatch[1].trim();
  }
}
if (currentItem) catalogItems.push(currentItem);

// Associate sourceMapIds from sourceMapRows
for (const item of catalogItems) {
  const matchedSources = sourceMapRows.filter(r => r.target.split('+').includes(item.familyId));
  item.sourceMapIds = matchedSources.map(s => s.code);
  
  // Define SKUs
  if (item.type === 'family') {
    item.skus = [
      `${item.familyId}-SHEET`,
      `${item.familyId}-WEB`,
      `${item.familyId}-APPSHEET`
    ];
    if (item.familyId === 'F01') {
      item.presets = ['F01-LITE', 'F01-PRO', 'F01-BILINGUAL'];
    }
  } else {
    item.skus = [`${item.familyId}-UTIL`];
  }
}

// Special detail for F01 tables in catalog
const f01 = catalogItems.find(it => it.familyId === 'F01');
if (f01) {
  f01.tables = [
    {
      name: 'Tasks',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'Title', type: 'text', required: true },
        { name: 'OwnerEmail', type: 'email', required: false },
        { name: 'Priority', type: 'enum', values: ['THẤP', 'TRUNG BÌNH', 'CAO', 'KHẨN CẤP'] },
        { name: 'StartDate', type: 'date', required: false },
        { name: 'DueDate', type: 'date', required: false },
        { name: 'Status', type: 'enum', values: ['TODO', 'DOING', 'DONE', 'CANCELLED'] },
        { name: 'Progress', type: 'percent', required: false },
        { name: 'CompletedAt', type: 'datetime', required: false },
        { name: 'DaysLate', type: 'formula', formula: '=IF(OR(A2="",F2="",G2="CANCELLED"),"",IF(G2="DONE",IF(I2="","",MAX(0,INT(I2)-F2)),MAX(0,TODAY()-F2)))' },
        { name: 'CategoryID', type: 'ref', targetTable: 'Categories' },
        { name: 'Important', type: 'yesno', required: false },
        { name: 'Urgent', type: 'yesno', required: false },
        { name: 'CreatedAt', type: 'datetime', required: true, immutable: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'CreatedBy', type: 'email', required: true },
        { name: 'RowVersion', type: 'number', required: true },
        { name: 'Archived', type: 'yesno', required: true }
      ]
    },
    {
      name: 'Categories',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'Name', type: 'text', required: true },
        { name: 'Color', type: 'text', required: false },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'CreatedBy', type: 'email', required: true },
        { name: 'RowVersion', type: 'number', required: true },
        { name: 'Archived', type: 'yesno', required: true }
      ]
    },
    {
      name: 'TaskEvents',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'EventType', type: 'enum', values: ['CREATE', 'START', 'COMPLETE', 'CANCEL', 'REOPEN', 'UPDATE'], required: true },
        { name: 'EventAt', type: 'datetime', required: true },
        { name: 'ActorEmail', type: 'email', required: true },
        { name: 'Notes', type: 'text', required: false },
        { name: 'CreatedAt', type: 'datetime', required: true }
      ]
    },
    {
      name: 'TaskChecklist',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'Title', type: 'text', required: true },
        { name: 'Done', type: 'yesno', required: true },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'RowVersion', type: 'number', required: true }
      ]
    },
    {
      name: 'RecurrenceRules',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true },
        { name: 'TaskTemplateID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'Frequency', type: 'enum', values: ['DAILY', 'WEEKLY', 'MONTHLY'], required: true },
        { name: 'Interval', type: 'number', required: true },
        { name: 'Weekdays', type: 'text', required: false },
        { name: 'MonthDay', type: 'number', required: false },
        { name: 'TimeZone', type: 'text', required: true },
        { name: 'Active', type: 'yesno', required: true },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true }
      ]
    },
    {
      name: 'GeneratedOccurrences',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true },
        { name: 'RuleID', type: 'ref', targetTable: 'RecurrenceRules', required: true },
        { name: 'ScheduledDate', type: 'date', required: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'CreatedAt', type: 'datetime', required: true }
      ]
    }
  ];
}

const catalogOutput = {
  catalogVersion: '1.0.0',
  generatedDate: new Date().toISOString(),
  brand: 'Minh Templates',
  totalItems: catalogItems.length,
  familiesCount: catalogItems.filter(i => i.type === 'family').length,
  utilitiesCount: catalogItems.filter(i => i.type === 'utility').length,
  items: catalogItems
};

fs.writeFileSync('PRODUCT_CATALOG.json', JSON.stringify(catalogOutput, null, 2), 'utf8');
console.log(`Saved PRODUCT_CATALOG.json with ${catalogItems.length} items.`);
