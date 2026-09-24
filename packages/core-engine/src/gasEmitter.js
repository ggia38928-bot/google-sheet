/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * gasEmitter.js: Trình sinh mã nguồn Google Apps Script (setup.gs) chuẩn hóa 100%
 */

function emitGasInstaller(config) {
  const sku = config.sku;
  const functionName = `install_${sku}_SHEET`;
  const initFuncName = `init${sku}Workbook`;

  let code = `/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: ${sku} — ${config.name}
 * Phiên bản: ${config.version || '1.0.0'} | Gói: ${config.tierName || 'PRO'}
 * Tự động sinh bởi Core Generator Engine
 */

function ${functionName}() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  ${initFuncName}(true);
}

function setupCleanTemplate() {
  ${initFuncName}(false);
}
`;

  // Menu tùy chỉnh onOpen
  if (config.hasCustomMenu) {
    const menuTitle = config.menuTitle || `⚡ MINH TEMPLATES ${sku}`;
    code += `
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('${escapeString(menuTitle)}')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}
`;
  }

  // Trigger tự động cho gói Business
  if (config.hasTriggers) {
    code += `
function onEdit(e) {
  if (!e || !e.range) return;
  const sheet = e.range.getSheet();
  const sheetName = sheet.getName();
  const row = e.range.getRow();
  const col = e.range.getColumn();
  
  // Tự động ghi nhật ký thay đổi cho gói Business
  try {
    const ss = e.source || SpreadsheetApp.getActiveSpreadsheet();
    const auditSheet = ss.getSheetByName('AUDIT_LOG');
    if (auditSheet && sheetName !== 'AUDIT_LOG' && row > 1) {
      const timestamp = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm:ss');
      const userEmail = Session.getActiveUser().getEmail() || 'User';
      auditSheet.appendRow([
        'LOG-' + Utilities.getUuid().substring(0, 8),
        timestamp,
        userEmail,
        sheetName + ' R' + row + 'C' + col,
        'Value: ' + String(e.value || '')
      ]);
    }
  } catch(err) {}
}
`;
  }

  // Hàm khởi tạo chính initWorkbook
  const tabNamesList = ['START_HERE', 'DASHBOARD'];
  config.tables.forEach(t => tabNamesList.push(t.name));
  if (config.settings) tabNamesList.push('SETTINGS');

  code += `
function ${initFuncName}(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ${JSON.stringify(tabNamesList)};
  const sheets = {};

  tabNames.forEach(function(name) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    sheets[name] = sheet;
  });

  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Trang tính 1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch(e) {}
  }
`;

  // 1. Sinh TAB START_HERE
  code += emitStartHereSheet(config);

  // 2. Sinh các Data Tables
  config.tables.forEach(table => {
    code += emitDataTable(table, config);
  });

  // 3. Sinh Settings (nếu có)
  if (config.settings) {
    code += emitSettingsSheet(config.settings);
  }

  // 4. Sinh TAB DASHBOARD
  code += emitDashboardSheet(config);

  // Bảo vệ dải ô công thức (nếu tier yêu cầu)
  if (config.hasProtection) {
    code += `
  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}
`;
  }

  code += `
  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}
`;

  return code;
}

function emitStartHereSheet(config) {
  const sku = config.sku;
  const name = config.name;
  const tierName = config.tierName || 'PRO';

  let code = `
  // =========================================================================
  // TAB 1: START_HERE (HƯỚNG DẪN KHỞI ĐỘNG)
  // =========================================================================
  const startSheet = sheets['START_HERE'];
  startSheet.clear();
  startSheet.setTabColor('#1A73E8');
  try { startSheet.setHiddenGridlines(true); } catch(e) {}

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — ${escapeString(name.toUpperCase())} (${sku})')
    .setFontSize(15).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  startSheet.setRowHeight(1, 42);

  const startData = [
    ['Phiên bản: ${config.version || '1.0.0'} | Gói: ${escapeString(tierName)} | Thương hiệu: Minh Templates', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['QUY TRÌNH VẬN HÀNH HIỆU QUẢ:', '', '', '', '', ''],
    ['Bước 1: Tạo bản sao', 'Nhấn Tệp (File) > Tạo bản sao (Make a copy) để lưu về Google Drive cá nhân của bạn.', '', '', '', ''],
    ['Bước 2: Cấu hình ban đầu', 'Truy cập các bảng danh mục để chỉnh sửa hoặc bổ sung thông tin ban đầu phù hợp.', '', '', '', ''],
    ['Bước 3: Nhập dữ liệu phát sinh', 'Nhập liệu vào các bảng tương ứng. Hệ thống sẽ tự động tổng hợp.', '', '', '', ''],
    ['Bước 4: Theo dõi Dashboard', 'Xem các chỉ số KPI, biểu đồ trực quan tự động cập nhật thời gian thực tại tab DASHBOARD.', '', '', '', ''],
    ['Bước 5: Xuất báo cáo & Lưu trữ', 'Dữ liệu được lưu trữ vĩnh viễn trên tài khoản Google của bạn, an toàn tuyệt đối.', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['LƯU Ý QUẢN TRỊ BẢN QUYỀN:', '', '', '', '', ''],
    ['- Bản quyền thuộc Minh Templates. Bảng tính chạy công thức tự động 100%.', '', '', '', '', ''],
    ['- Dữ liệu hoàn toàn riêng tư trên Google Drive của bạn, không gửi ra ngoài.', '', '', '', '', '']
  ];
  startSheet.getRange(2, 1, startData.length, 6).setValues(startData);
  startSheet.getRange('A3').setFontWeight('bold').setFontColor('#0D47A1');
  startSheet.getRange('A4:A8').setFontWeight('bold').setFontColor('#1565C0');
  startSheet.getRange('A10').setFontWeight('bold').setFontColor('#C62828');
  startSheet.setColumnWidth(1, 260);
  startSheet.setColumnWidth(2, 640);
`;
  return code;
}

function emitDataTable(table, config) {
  const tblName = table.name;
  const headers = table.headers;
  const colCount = headers.length;
  const headerBg = table.color || '#01579B';

  let code = `
  // =========================================================================
  // TAB: ${tblName}
  // =========================================================================
  const sheet_${tblName} = sheets['${tblName}'];
  sheet_${tblName}.clear();
  sheet_${tblName}.setTabColor('${headerBg}');
  sheet_${tblName}.setFrozenRows(1);

  const headers_${tblName} = ${JSON.stringify(headers)};
  sheet_${tblName}.getRange(1, 1, 1, ${colCount}).setValues([headers_${tblName}])
    .setFontWeight('bold').setBackground('${headerBg}').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_${tblName}.setRowHeight(1, 32);
`;

  // Độ rộng cột
  if (table.colWidths && Array.isArray(table.colWidths)) {
    table.colWidths.forEach((w, idx) => {
      code += `  sheet_${tblName}.setColumnWidth(${idx + 1}, ${w});\n`;
    });
  }

  // Dữ liệu mẫu (Demo vs Clean)
  if (table.demoRows && table.demoRows.length > 0) {
    code += `
  const demoData_${tblName} = ${JSON.stringify(table.demoRows)};
  if (isDemo && demoData_${tblName}.length > 0) {
    sheet_${tblName}.getRange(2, 1, demoData_${tblName}.length, ${colCount}).setValues(demoData_${tblName});
  }
`;
  }

  // Công thức trên từng cột nếu có
  if (table.rowFormulas && Array.isArray(table.rowFormulas)) {
    code += `
  // Áp dụng công thức dòng
  if (isDemo && demoData_${tblName}.length > 0) {
    for (let r = 2; r <= demoData_${tblName}.length + 1; r++) {
`;
    table.rowFormulas.forEach(f => {
      // f: { col: 5, formulaGenerator: '(r) => `=...`' }
      code += `      sheet_${tblName}.getRange(r, ${f.col}).setFormula(${f.formulaFn});\n`;
    });
    code += `    }\n  }\n`;
  }

  // Định dạng số & Date
  if (table.formats && Array.isArray(table.formats)) {
    table.formats.forEach(fmt => {
      code += `  sheet_${tblName}.getRange('${fmt.range}').setNumberFormat('${escapeString(fmt.format)}');\n`;
    });
  }

  // Data validations
  if (table.validations && Array.isArray(table.validations)) {
    table.validations.forEach(val => {
      if (val.type === 'list') {
        code += `
  const rule_${tblName}_${val.range.replace(/[^a-zA-Z0-9]/g, '')} = SpreadsheetApp.newDataValidation()
    .requireValueInList(${JSON.stringify(val.values)}, true).build();
  sheet_${tblName}.getRange('${val.range}').setDataValidation(rule_${tblName}_${val.range.replace(/[^a-zA-Z0-9]/g, '')});
`;
      } else if (val.type === 'range') {
        code += `
  const rule_${tblName}_${val.range.replace(/[^a-zA-Z0-9]/g, '')} = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['${val.refSheet}'].getRange('${val.refRange}'), true).build();
  sheet_${tblName}.getRange('${val.range}').setDataValidation(rule_${tblName}_${val.range.replace(/[^a-zA-Z0-9]/g, '')});
`;
      }
    });
  }

  return code;
}

function emitSettingsSheet(settings) {
  let code = `
  // =========================================================================
  // TAB: SETTINGS
  // =========================================================================
  const setSheet = sheets['SETTINGS'];
  setSheet.clear();
  setSheet.setTabColor('#616161');
  try { setSheet.setHiddenGridlines(true); } catch(e) {}
  setSheet.getRange('A1:B1').merge().setValue('THIẾT LẬP THAM SỐ HỆ THỐNG')
    .setFontWeight('bold').setBackground('#424242').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  
  const setRows = ${JSON.stringify(settings.rows || [])};
  if (setRows.length > 0) {
    setSheet.getRange(2, 1, setRows.length, 2).setValues(setRows);
    setSheet.getRange('A2:A' + (setRows.length + 1)).setFontWeight('bold');
  }
  setSheet.setColumnWidth(1, 240);
  setSheet.setColumnWidth(2, 340);
`;
  return code;
}

function emitDashboardSheet(config) {
  const dash = config.dashboard;
  const title = dash.title;
  const subtitle = dash.subtitle || 'Số liệu tổng hợp tự động theo thời gian thực';
  const kpiCards = dash.kpiCards || [];

  let code = `
  // =========================================================================
  // TAB 2: DASHBOARD PRO
  // =========================================================================
  const dashSheet = sheets['DASHBOARD'];
  dashSheet.clear();
  dashSheet.setTabColor('#2E7D32');
  try { dashSheet.setHiddenGridlines(true); } catch(e) {}

  try {
    dashSheet.getCharts().forEach(function(c) { dashSheet.removeChart(c); });
  } catch(e) {}

  // Banner Header
  dashSheet.getRange('A1:J1').merge().setValue('${escapeString(title)}')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('${escapeString(subtitle)}')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);
`;

  // KPI Scorecards (Hàng 4-6)
  const colPairs = [
    { label: 'A4:B4', val: 'A5:B5', note: 'A6:B6' },
    { label: 'C4:D4', val: 'C5:D5', note: 'C6:D6' },
    { label: 'E4:F4', val: 'E5:F5', note: 'E6:F6' },
    { label: 'G4:H4', val: 'G5:H5', note: 'G6:H6' },
    { label: 'I4:J4', val: 'I5:J5', note: 'I6:J6' },
    { label: 'K4:L4', val: 'K5:L5', note: 'K6:L6' }
  ];

  kpiCards.forEach((card, idx) => {
    if (idx >= colPairs.length) return;
    const pos = colPairs[idx];
    const bg = card.bg || '#E8F5E9';
    const textCol = card.textColor || '#1B5E20';
    const valCol = card.valColor || '#2E7D32';

    code += `
  // Card ${idx + 1}: ${escapeString(card.label)}
  dashSheet.getRange('${pos.label}').merge().setValue('${escapeString(card.label)}')
    .setFontSize(9).setFontWeight('bold').setFontColor('${textCol}').setHorizontalAlignment('center').setBackground('${bg}');
  dashSheet.getRange('${pos.val}').merge().setValue('${escapeFormula(card.formula)}')
    .setFontSize(16).setFontWeight('bold').setFontColor('${valCol}').setHorizontalAlignment('center').setBackground('${bg}')
`;
    if (card.format) {
      code += `    .setNumberFormat('${escapeString(card.format)}')`;
    }
    code += `;\n`;

    if (card.note) {
      code += `  dashSheet.getRange('${pos.note}').merge().setValue('${escapeString(card.note)}')
    .setFontSize(8).setFontStyle('italic').setFontColor('${textCol}').setHorizontalAlignment('center').setBackground('${bg}');\n`;
    }
  });

  code += `
  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);
`;

  // Bảng con trên Dashboard (nếu có)
  if (dash.subTables && Array.isArray(dash.subTables)) {
    dash.subTables.forEach(st => {
      code += emitDashboardSubTable(st);
    });
  }

  // Biểu đồ trên Dashboard (nếu có)
  if (dash.charts && Array.isArray(dash.charts)) {
    dash.charts.forEach(ch => {
      code += emitDashboardChart(ch);
    });
  }

  return code;
}

function emitDashboardSubTable(st) {
  let code = `
  // SubTable: ${escapeString(st.title)}
  dashSheet.getRange('${st.titleRange}').merge().setValue('${escapeString(st.title)}')
    .setFontWeight('bold').setFontColor('${st.headerTextColor || '#0D47A1'}').setBackground('${st.headerBg || '#BBDEFB'}');
  dashSheet.getRange(${st.startRow}, ${st.startCol}, 1, ${st.headers.length}).setValues([${JSON.stringify(st.headers)}])
    .setFontWeight('bold').setBackground('${st.colHeaderBg || '#1976D2'}').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(${st.startRow}, 26);
`;

  if (st.rowFormulas && Array.isArray(st.rowFormulas)) {
    st.rowFormulas.forEach(rf => {
      code += `  for (let i = ${rf.fromIdx}; i <= ${rf.toIdx}; i++) {\n`;
      code += `    const r = i + ${rf.rowOffset};\n`;
      rf.cells.forEach(c => {
        code += `    dashSheet.getRange(r, ${c.col}).setFormula(${c.formulaFn});\n`;
      });
      code += `    dashSheet.setRowHeight(r, 22);\n  }\n`;
    });
  }

  if (st.formats && Array.isArray(st.formats)) {
    st.formats.forEach(f => {
      code += `  dashSheet.getRange('${f.range}').setNumberFormat('${escapeString(f.format)}');\n`;
    });
  }

  return code;
}

function emitDashboardChart(ch) {
  let code = `
  // Chart: ${escapeString(ch.title)}
  try {
    const chart = dashSheet.newChart()
      .setChartType(${ch.type})
`;
  ch.ranges.forEach(r => {
    code += `      .addRange(dashSheet.getRange('${r}'))\n`;
  });
  code += `      .setPosition(${ch.row}, ${ch.col}, 0, 0)
      .setOption('title', '${escapeString(ch.title)}')
      .setOption('width', ${ch.width || 520})
      .setOption('height', ${ch.height || 260})
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}
`;
  return code;
}

function escapeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escapeFormula(formula) {
  if (typeof formula !== 'string') return '';
  return formula.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

module.exports = {
  emitGasInstaller
};
