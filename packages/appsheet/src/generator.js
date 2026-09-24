/**
 * AppSheet Configuration Generator
 * Generates tables.csv, columns.csv, views.csv, actions.csv, and bots.md for AppSheet applications.
 */

function escapeCsv(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function generateTablesCsv(tables) {
  const header = ['TableName', 'SheetSource', 'PrimaryKey', 'LabelColumn', 'Permissions', 'SecurityFilter'];
  const rows = tables.map(t => [
    t.name,
    t.sheetSource || t.name,
    t.primaryKey,
    t.labelColumn || t.primaryKey,
    t.permissions || 'ADDS_AND_UPDATES_AND_DELETES',
    t.securityFilter || ''
  ]);
  return [header, ...rows].map(row => row.map(escapeCsv).join(',')).join('\n') + '\n';
}

function generateColumnsCsv(columns) {
  const header = [
    'TableName', 'ColumnName', 'Type', 'Required', 'IsKey', 'IsLabel',
    'InitialValue', 'AppFormula', 'ValidIf', 'EditableIf', 'RefTable'
  ];
  const rows = columns.map(c => [
    c.tableName,
    c.columnName,
    c.type,
    c.required ? 'Y' : 'N',
    c.isKey ? 'Y' : 'N',
    c.isLabel ? 'Y' : 'N',
    c.initialValue || '',
    c.appFormula || '',
    c.validIf || '',
    c.editableIf || '',
    c.refTable || ''
  ]);
  return [header, ...rows].map(row => row.map(escapeCsv).join(',')).join('\n') + '\n';
}

function generateViewsCsv(views) {
  const header = ['ViewName', 'TableOrSlice', 'ViewType', 'Position', 'SortBy', 'GroupBy', 'DisplayColumns'];
  const rows = views.map(v => [
    v.viewName,
    v.tableOrSlice,
    v.viewType,
    v.position,
    v.sortBy || '',
    v.groupBy || '',
    (v.displayColumns || []).join(';')
  ]);
  return [header, ...rows].map(row => row.map(escapeCsv).join(',')).join('\n') + '\n';
}

function generateActionsCsv(actions) {
  const header = ['ActionName', 'TableName', 'ActionType', 'Condition', 'TargetColumn', 'ValueFormula', 'Navigation'];
  const rows = actions.map(a => [
    a.actionName,
    a.tableName,
    a.actionType,
    a.condition || '',
    a.targetColumn || '',
    a.valueFormula || '',
    a.navigation || ''
  ]);
  return [header, ...rows].map(row => row.map(escapeCsv).join(',')).join('\n') + '\n';
}

module.exports = {
  generateTablesCsv,
  generateColumnsCsv,
  generateViewsCsv,
  generateActionsCsv
};
