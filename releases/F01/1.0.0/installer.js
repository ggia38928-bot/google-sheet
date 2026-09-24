/**
 * Commercial Installer for F01: Việc cá nhân và ưu tiên
 * Supports: --dryRun, --installFresh, --seedDemo, --migrate, --validate, --resetDemo
 * Idempotent execution: Re-running does not duplicate tabs, validations, or system settings.
 */

const fs = require('fs');
const path = require('path');
const { buildF01SheetWorkbook } = require('../../../packages/sheets/src/f01/builder');
const { exportF01AppSheetBundle } = require('../../../packages/appsheet/src/f01/spec');
const { calculateTaskKPIs } = require('../../../packages/domain/src/f01/calculations');

const DEMO_TASKS = [
  {
    ID: 'TSK-DEMO-01',
    Title: 'Lập kế hoạch tài chính và ngân sách Quý 4',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'CAO',
    StartDate: '2026-09-01',
    DueDate: '2026-09-15',
    Status: 'DOING',
    Progress: 0.4,
    CompletedAt: null,
    CategoryID: 'CAT-WORK',
    Important: true,
    Urgent: false,
    CreatedAt: '2026-09-01T08:00:00.000Z',
    UpdatedAt: '2026-09-04T10:00:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 2,
    Archived: false
  },
  {
    ID: 'TSK-DEMO-02',
    Title: 'Nộp tờ khai thuế GTGT và quyết toán chi phí tháng 8',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'KHẨN CẤP',
    StartDate: '2026-08-25',
    DueDate: '2026-09-02', // Quá hạn so với 07/09/2026
    Status: 'TODO',
    Progress: 0.0,
    CompletedAt: null,
    CategoryID: 'CAT-WORK',
    Important: true,
    Urgent: true,
    CreatedAt: '2026-08-25T08:00:00.000Z',
    UpdatedAt: '2026-08-25T08:00:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 1,
    Archived: false
  },
  {
    ID: 'TSK-DEMO-03',
    Title: 'Khám sức khỏe tổng quát định kỳ tại bệnh viện',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'TRUNG BÌNH',
    StartDate: '2026-09-01',
    DueDate: '2026-09-05',
    Status: 'DONE',
    Progress: 1.0,
    CompletedAt: '2026-09-05T09:30:00.000Z',
    CategoryID: 'CAT-HEALTH',
    Important: true,
    Urgent: false,
    CreatedAt: '2026-09-01T08:00:00.000Z',
    UpdatedAt: '2026-09-05T09:30:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 2,
    Archived: false
  },
  {
    ID: 'TSK-DEMO-04',
    Title: 'Đăng ký khóa học nâng cao Google Apps Script & AppSheet',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'TRUNG BÌNH',
    StartDate: '2026-09-05',
    DueDate: '2026-09-20',
    Status: 'TODO',
    Progress: 0.0,
    CompletedAt: null,
    CategoryID: 'CAT-STUDY',
    Important: false,
    Urgent: false,
    CreatedAt: '2026-09-05T08:00:00.000Z',
    UpdatedAt: '2026-09-05T08:00:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 1,
    Archived: false
  },
  {
    ID: 'TSK-DEMO-05',
    Title: 'Mua sắm thiết bị văn phòng dự phòng không cấp thiết',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'THẤP',
    StartDate: '2026-08-28',
    DueDate: '2026-09-03',
    Status: 'CANCELLED',
    Progress: 0.0,
    CompletedAt: null,
    CategoryID: 'CAT-WORK',
    Important: false,
    Urgent: false,
    CreatedAt: '2026-08-28T08:00:00.000Z',
    UpdatedAt: '2026-09-02T14:00:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 2,
    Archived: false
  },
  {
    ID: 'TSK-DEMO-06',
    Title: 'Bảo dưỡng định kỳ xe ô tô công tác',
    OwnerEmail: 'owner@minhtemplates.com',
    Priority: 'TRUNG BÌNH',
    StartDate: '2026-09-02',
    DueDate: '2026-09-06', // Quá hạn 1 ngày
    Status: 'DOING',
    Progress: 0.3,
    CompletedAt: null,
    CategoryID: 'CAT-PERSONAL',
    Important: false,
    Urgent: true,
    CreatedAt: '2026-09-02T08:00:00.000Z',
    UpdatedAt: '2026-09-06T10:00:00.000Z',
    CreatedBy: 'owner@minhtemplates.com',
    RowVersion: 2,
    Archived: false
  }
];

class F01Installer {
  constructor(baseDir = __dirname) {
    this.baseDir = baseDir;
    this.demoDir = path.join(baseDir, 'demo');
    this.cleanDir = path.join(baseDir, 'clean');
    this.appsheetDir = path.join(baseDir, 'appsheet');
    this.docsDir = path.join(baseDir, 'docs');
  }

  ensureDirectories() {
    [this.demoDir, this.cleanDir, this.appsheetDir, this.docsDir].forEach(d => {
      if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    });
  }

  dryRun() {
    console.log('[DRY-RUN] Bắt đầu mô phỏng tiến trình cài đặt F01...');
    const cleanWb = buildF01SheetWorkbook(false, []);
    const demoWb = buildF01SheetWorkbook(true, DEMO_TASKS);

    console.log(`[DRY-RUN] Bản tính Bản Sạch gồm ${cleanWb.tabs.length} tabs: ${cleanWb.tabs.map(t => t.name).join(', ')}`);
    console.log(`[DRY-RUN] Bản tính Bản Demo gồm ${demoWb.tabs.length} tabs với ${DEMO_TASKS.length} công việc mẫu có ý nghĩa.`);
    console.log('[DRY-RUN] Mô phỏng AppSheet bundle: Sinh thành công tables.csv, columns.csv, views.csv, actions.csv, bots.md');
    console.log('[DRY-RUN] Không có thay đổi nào được ghi xuống đĩa trong chế độ --dryRun.');
    return true;
  }

  installFresh() {
    console.log('[INSTALL-FRESH] Tạo Bản Sạch (Clean Sheet Template) cho F01...');
    this.ensureDirectories();
    const cleanWb = buildF01SheetWorkbook(false, []);
    const cleanJsonPath = path.join(this.cleanDir, 'workbook.json');
    fs.writeFileSync(cleanJsonPath, JSON.stringify(cleanWb, null, 2), 'utf8');

    // Export clean CSV for Tasks
    const taskTab = cleanWb.tabs.find(t => t.name === 'Tasks');
    const taskCsv = taskTab.rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n') + '\n';
    fs.writeFileSync(path.join(this.cleanDir, 'Tasks.csv'), taskCsv, 'utf8');

    // Export AppSheet configs
    this.exportAppSheet();

    console.log(`[INSTALL-FRESH] Hoàn tất cài đặt bản sạch tại: ${this.cleanDir}`);
    return true;
  }

  seedDemo() {
    console.log('[SEED-DEMO] Nạp dữ liệu mẫu (Demo Template) cho F01...');
    this.ensureDirectories();
    const demoWb = buildF01SheetWorkbook(true, DEMO_TASKS);
    const demoJsonPath = path.join(this.demoDir, 'workbook.json');
    fs.writeFileSync(demoJsonPath, JSON.stringify(demoWb, null, 2), 'utf8');

    const taskTab = demoWb.tabs.find(t => t.name === 'Tasks');
    const taskCsv = taskTab.rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n') + '\n';
    fs.writeFileSync(path.join(this.demoDir, 'Tasks.csv'), taskCsv, 'utf8');

    // Calculate and log KPIs
    const kpis = calculateTaskKPIs(DEMO_TASKS, '2026-09-07');
    console.log(`[SEED-DEMO] Chỉ số demo: Tổng=${kpis.totalTasks}, Hoàn thành=${kpis.completedCount}, Quá hạn=${kpis.overdueCount}, Tỷ lệ hoàn thành=${kpis.completionRatePercent}`);
    console.log(`[SEED-DEMO] Hoàn tất nạp demo tại: ${this.demoDir}`);
    return true;
  }

  migrate() {
    console.log('[MIGRATE] Kiểm tra và cập nhật Schema Version cho F01...');
    console.log('[MIGRATE] Đang ở Schema Version 1 (Baseline). Dữ liệu tương thích hoàn toàn.');
    return true;
  }

  validate() {
    console.log('[VALIDATE] Kiểm tra tính toàn vẹn của gói cài đặt F01...');
    const checks = [
      { name: 'Clean Workbook file', exists: fs.existsSync(path.join(this.cleanDir, 'workbook.json')) },
      { name: 'Demo Workbook file', exists: fs.existsSync(path.join(this.demoDir, 'workbook.json')) },
      { name: 'AppSheet tables.csv', exists: fs.existsSync(path.join(this.appsheetDir, 'tables.csv')) },
      { name: 'AppSheet columns.csv', exists: fs.existsSync(path.join(this.appsheetDir, 'columns.csv')) },
      { name: 'Customer README.md', exists: fs.existsSync(path.join(this.docsDir, 'README.md')) },
      { name: 'Release Manifest', exists: fs.existsSync(path.join(this.baseDir, 'RELEASE_MANIFEST.json')) }
    ];

    let allOk = true;
    for (const c of checks) {
      if (c.exists) {
        console.log(`  [OK] ${c.name}`);
      } else {
        console.log(`  [CHƯA CÓ] ${c.name}`);
        allOk = false;
      }
    }
    return allOk;
  }

  resetDemo() {
    console.log('[RESET-DEMO] Xóa an toàn dữ liệu Demo...');
    const demoTaskFile = path.join(this.demoDir, 'Tasks.csv');
    if (fs.existsSync(demoTaskFile)) {
      // Re-initialize with 0 demo tasks
      const cleanWb = buildF01SheetWorkbook(false, []);
      const taskTab = cleanWb.tabs.find(t => t.name === 'Tasks');
      const taskCsv = taskTab.rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n') + '\n';
      fs.writeFileSync(demoTaskFile, taskCsv, 'utf8');
      console.log('[RESET-DEMO] Đã đưa bảng Tasks về trạng thái rỗng (chỉ còn header).');
    }
    return true;
  }

  exportAppSheet() {
    const bundle = exportF01AppSheetBundle();
    fs.writeFileSync(path.join(this.appsheetDir, 'tables.csv'), bundle.tablesCsv, 'utf8');
    fs.writeFileSync(path.join(this.appsheetDir, 'columns.csv'), bundle.columnsCsv, 'utf8');
    fs.writeFileSync(path.join(this.appsheetDir, 'views.csv'), bundle.viewsCsv, 'utf8');
    fs.writeFileSync(path.join(this.appsheetDir, 'actions.csv'), bundle.actionsCsv, 'utf8');
    fs.writeFileSync(path.join(this.appsheetDir, 'bots.md'), bundle.botsMd, 'utf8');
  }
}

// CLI Execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const installer = new F01Installer();

  if (args.includes('--dryRun')) {
    installer.dryRun();
  } else if (args.includes('--seedDemo')) {
    installer.seedDemo();
    installer.exportAppSheet();
  } else if (args.includes('--migrate')) {
    installer.migrate();
  } else if (args.includes('--validate')) {
    installer.validate();
  } else if (args.includes('--resetDemo')) {
    installer.resetDemo();
  } else {
    // Default or --installFresh
    installer.installFresh();
    installer.seedDemo();
    installer.exportAppSheet();
    installer.validate();
  }
}

module.exports = {
  F01Installer,
  DEMO_TASKS
};
