/**
 * Tầng 2: Formulas & Engine Test (Kiểm tra công thức Google Sheets và Ca nghiệm thu riêng của F01)
 */

const { TestReporter } = require('../assertions');
const { calculateTaskKPIs, calculateDaysLate } = require('../../../domain/src/f01');
const { FORMULA_TEMPLATES } = require('../../../sheets/src/compiler');

/**
 * Formula engine simulator that emulates exact Google Sheets calculation semantics
 */
class SheetFormulaEngine {
  constructor(tasks = [], today = new Date('2026-09-07T00:00:00.000Z')) {
    this.tasks = tasks; // Array of row objects
    this.today = today;
  }

  // Simulates: =IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)
  evaluateCompletionRate() {
    let doneCount = 0;
    let notCancelledCount = 0;

    for (const t of this.tasks) {
      if (!t.ID) continue; // Tasks!A2:A10001,"<>"
      if (t.Status === 'DONE') doneCount++;
      if (t.Status !== 'CANCELLED') notCancelledCount++;
    }

    if (notCancelledCount === 0) {
      return 0.0; // IFERROR handles division by zero and returns 0
    }
    return Number((doneCount / notCancelledCount).toFixed(4));
  }

  // Simulates: =COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")
  evaluateOverdueCount() {
    let count = 0;
    const todayMs = new Date(this.today).setHours(0, 0, 0, 0);

    for (const t of this.tasks) {
      if (!t.ID) continue;
      // DueDate must be valid date > 0 (F2:F10001,">0")
      if (!t.DueDate) continue;
      const dueMs = new Date(t.DueDate).setHours(0, 0, 0, 0);
      if (isNaN(dueMs) || dueMs <= 0) continue;

      // DueDate < TODAY
      if (dueMs < todayMs && t.Status !== 'DONE' && t.Status !== 'CANCELLED') {
        count++;
      }
    }
    return count;
  }

  // Simulates DaysLate formula for a single row
  evaluateDaysLate(row) {
    if (!row.ID || !row.DueDate || row.Status === 'CANCELLED') {
      return '';
    }
    const todayMs = new Date(this.today).setHours(0, 0, 0, 0);
    const dueMs = new Date(row.DueDate).setHours(0, 0, 0, 0);
    const MS_PER_DAY = 24 * 60 * 60 * 1000;

    if (row.Status === 'DONE') {
      if (!row.CompletedAt) return '';
      const compMs = new Date(row.CompletedAt).setHours(0, 0, 0, 0);
      return Math.max(0, Math.round((compMs - dueMs) / MS_PER_DAY));
    }

    return Math.max(0, Math.round((todayMs - dueMs) / MS_PER_DAY));
  }
}

function runFormulaTests() {
  const reporter = new TestReporter('TẦNG 2: FORMULAS & ENGINE TESTS (F01)');
  console.log('\n======================================================================');
  console.log('BẮT ĐẦU CHẠY: TẦNG 2 - FORMULAS & ENGINE TESTS');
  console.log('======================================================================\n');

  // -------------------------------------------------------------
  // 1. Kiểm tra syntax công thức biên dịch
  // -------------------------------------------------------------
  const fDaysLate = FORMULA_TEMPLATES.DAYS_LATE(2);
  reporter.assert({
    description: 'Biên dịch công thức DaysLate khớp hợp đồng tham chiếu',
    expected: '=IF(OR(A2="",F2="",G2="CANCELLED"),"",IF(G2="DONE",IF(I2="","",MAX(0,INT(I2)-F2)),MAX(0,TODAY()-F2)))',
    actual: fDaysLate
  });

  const fOverdue = FORMULA_TEMPLATES.OVERDUE_COUNT('Tasks', 10001);
  reporter.assert({
    description: 'Biên dịch công thức Overdue Count chống đếm việc chưa có hạn chót',
    expected: '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
    actual: fOverdue
  });

  const fCompRate = FORMULA_TEMPLATES.COMPLETION_RATE('Tasks', 10001);
  reporter.assert({
    description: 'Biên dịch công thức Tỷ lệ hoàn thành có bọc IFERROR chống lỗi #DIV/0!',
    expected: '=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)',
    actual: fCompRate
  });

  // -------------------------------------------------------------
  // 2. Kiểm tra an toàn: Bảng rỗng & Toàn bộ bị hủy (Không có lỗi #DIV/0!, #REF!)
  // -------------------------------------------------------------
  const emptyEngine = new SheetFormulaEngine([], '2026-09-07');
  reporter.assert({
    description: 'Khi bảng Tasks rỗng: Tỷ lệ hoàn thành trả về 0.0 (Không bị lỗi #DIV/0!)',
    expected: 0.0,
    actual: emptyEngine.evaluateCompletionRate()
  });
  reporter.assert({
    description: 'Khi bảng Tasks rỗng: Số việc quá hạn trả về 0',
    expected: 0,
    actual: emptyEngine.evaluateOverdueCount()
  });

  const allCancelledTasks = [
    { ID: 'T-1', Title: 'Task 1', DueDate: '2026-09-01', Status: 'CANCELLED' },
    { ID: 'T-2', Title: 'Task 2', DueDate: '2026-09-02', Status: 'CANCELLED' }
  ];
  const cancelledEngine = new SheetFormulaEngine(allCancelledTasks, '2026-09-07');
  reporter.assert({
    description: 'Khi 100% công việc bị CANCELLED: Mẫu số loại bỏ toàn bộ việc hủy, IFERROR trả về 0.0 an toàn',
    expected: 0.0,
    actual: cancelledEngine.evaluateCompletionRate()
  });

  // -------------------------------------------------------------
  // 3. CA NGHIỆM THU RIÊNG CỦA F01 (THE MANDATORY ACCEPTANCE TEST)
  // Quy định tại Mục 11:
  // "Fixture ngày cố định có 3 việc: một DONE đúng hạn, một TODO quá hạn, một CANCELLED;
  //  tỷ lệ hoàn thành bằng 50%, việc đang quá hạn bằng 1. Việc không hạn không bị đếm trễ."
  // -------------------------------------------------------------
  const FIXED_EVALUATION_DATE = '2026-09-07T00:00:00.000Z';

  const f01AcceptanceFixture = [
    {
      ID: 'AC-TASK-001',
      Title: 'Việc 1: Hoàn thành đúng hạn',
      DueDate: '2026-09-05',
      CompletedAt: '2026-09-05T14:00:00.000Z',
      Status: 'DONE'
    },
    {
      ID: 'AC-TASK-002',
      Title: 'Việc 2: Chưa xong và quá hạn',
      DueDate: '2026-09-01', // Quá hạn so với 2026-09-07
      CompletedAt: null,
      Status: 'TODO'
    },
    {
      ID: 'AC-TASK-003',
      Title: 'Việc 3: Đã hủy bỏ',
      DueDate: '2026-09-02',
      CompletedAt: null,
      Status: 'CANCELLED'
    }
  ];

  // Run through Sheet Formula Engine
  const sheetEngine = new SheetFormulaEngine(f01AcceptanceFixture, FIXED_EVALUATION_DATE);
  const actualSheetCompRate = sheetEngine.evaluateCompletionRate();
  const actualSheetOverdueCount = sheetEngine.evaluateOverdueCount();

  // Run through Domain Calculation Engine
  const domainKPIs = calculateTaskKPIs(f01AcceptanceFixture, FIXED_EVALUATION_DATE);

  reporter.assert({
    description: '[CA NGHIỆM THU F01] Tỷ lệ hoàn thành trên Sheet Formula Engine = 50.0% (0.5)',
    expected: 0.5,
    actual: actualSheetCompRate
  });

  reporter.assert({
    description: '[CA NGHIỆM THU F01] Tỷ lệ hoàn thành trên Domain Engine = 50.0% (0.5)',
    expected: 0.5,
    actual: domainKPIs.completionRate
  });

  reporter.assert({
    description: '[CA NGHIỆM THU F01] Số việc đang quá hạn trên Sheet Formula Engine = 1',
    expected: 1,
    actual: actualSheetOverdueCount
  });

  reporter.assert({
    description: '[CA NGHIỆM THU F01] Số việc đang quá hạn trên Domain Engine = 1',
    expected: 1,
    actual: domainKPIs.overdueCount
  });

  // Khẳng định: Việc không có hạn chót (DueDate = null) không bị tính vào danh sách trễ
  const tasksWithNoDue = [
    ...f01AcceptanceFixture,
    {
      ID: 'AC-TASK-004',
      Title: 'Việc 4: Không có hạn chót',
      DueDate: null,
      CompletedAt: null,
      Status: 'TODO'
    }
  ];
  const engineWithNoDue = new SheetFormulaEngine(tasksWithNoDue, FIXED_EVALUATION_DATE);
  reporter.assert({
    description: '[CA NGHIỆM THU F01] Bổ sung việc không có DueDate -> Số việc quá hạn vẫn giữ nguyên = 1',
    expected: 1,
    actual: engineWithNoDue.evaluateOverdueCount()
  });

  reporter.printSummary();
  return reporter;
}

if (require.main === module) {
  runFormulaTests();
}

module.exports = {
  runFormulaTests,
  SheetFormulaEngine
};
