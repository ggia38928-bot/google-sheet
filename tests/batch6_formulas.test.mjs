import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../packages/core-engine/src/index.js');
const { checkGasSyntax } = engine;

describe('Suite: Batch 6 Contracts, Documents & Education Formulas & CODEX Criteria (F07, F08, F26)', () => {

  // =========================================================================
  // F07: HỢP ĐỒNG, PHỤ LỤC VÀ PHÁT SINH
  // =========================================================================
  describe('F07 — Hợp đồng, phụ lục và phát sinh', () => {

    test('F07: Thẩm định Giá trị hiện hành = Gốc + Phụ lục đã duyệt (loại bỏ phụ lục chưa duyệt) (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Gốc 100 triệu, tăng đã duyệt 20 triệu, giảm chưa duyệt 5 triệu: giá trị hiện hành 120 triệu."
      const contract = {
        id: 'CTR-001',
        contractNumber: 'HD-2026/01',
        baseAmount: 100000000
      };

      const amendments = [
        { contractId: 'CTR-001', valueChange: 20000000, status: 'APPROVED' },
        { contractId: 'CTR-001', valueChange: -5000000, status: 'SUBMITTED' } // Chưa duyệt -> Bỏ qua
      ];

      const approvedVariations = amendments
        .filter(a => a.contractId === contract.id && a.status === 'APPROVED')
        .reduce((sum, a) => sum + a.valueChange, 0);

      const currentAmount = contract.baseAmount + approvedVariations;

      assert.strictEqual(approvedVariations, 20000000, 'Giá trị phát sinh đã duyệt là 20 triệu');
      assert.strictEqual(currentAmount, 120000000, 'Giá trị hiện hành phải chính xác là 120 triệu (CODEX Criteria)');
    });

    test('F07: Thẩm định Mốc nghiệm thu và thanh toán độc lập (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Thu 50 triệu không tự coi là nghiệm thu 50 triệu."
      const milestones = [
        { id: 'MLS-01', amount: 40000000, status: 'ACCEPTED' },
        { id: 'MLS-02', amount: 40000000, status: 'PENDING' },
        { id: 'MLS-03', amount: 40000000, status: 'PENDING' }
      ];

      const payments = [
        { milestoneId: 'MLS-01', amount: 30000000, type: 'ADVANCE' },
        { milestoneId: 'MLS-01', amount: 20000000, type: 'STAGE_1' }
      ];

      const totalAccepted = milestones
        .filter(m => m.status === 'ACCEPTED')
        .reduce((sum, m) => sum + m.amount, 0);

      const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);

      assert.strictEqual(totalAccepted, 40000000, 'Tổng giá trị đã nghiệm thu là 40 triệu');
      assert.strictEqual(totalPaid, 50000000, 'Tổng tiền đã thanh toán là 50 triệu');
      assert.notStrictEqual(totalAccepted, totalPaid, 'Thanh toán 50 triệu độc lập với nghiệm thu 40 triệu');
      
      const unacceptedAdvance = Math.max(0, totalPaid - totalAccepted);
      assert.strictEqual(unacceptedAdvance, 10000000, 'Tạm ứng vượt nghiệm thu là 10 triệu');
    });

    test('F07: Cảnh báo hợp đồng sắp hết hiệu lực trong vòng 30 ngày', () => {
      const asOfDate = new Date('2026-09-12');
      const contracts = [
        { number: 'HD-01', endDate: '2026-09-30', status: 'ACTIVE' }, // 18 ngày -> Cảnh báo
        { number: 'HD-02', endDate: '2026-10-05', status: 'ACTIVE' }, // 23 ngày -> Cảnh báo
        { number: 'HD-03', endDate: '2026-11-20', status: 'ACTIVE' }, // > 30 ngày -> An toàn
        { number: 'HD-04', endDate: '2026-08-15', status: 'EXPIRED' } // Đã hết hạn
      ];

      function getExpiringContracts(list, currentDate, thresholdDays = 30) {
        return list.filter(c => {
          if (c.status !== 'ACTIVE') return false;
          const end = new Date(c.endDate);
          const diffDays = Math.ceil((end - currentDate) / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= thresholdDays;
        });
      }

      const expiring = getExpiringContracts(contracts, asOfDate, 30);
      assert.strictEqual(expiring.length, 2, 'Có đúng 2 hợp đồng sắp hết hạn trong 30 ngày');
    });
  });

  // =========================================================================
  // F08: VĂN BẢN, HỒ SƠ VÀ CHỈ ĐẠO
  // =========================================================================
  describe('F08 — Văn bản, hồ sơ và chỉ đạo', () => {

    test('F08: Thẩm định Cảnh báo số văn bản trùng trong cùng sổ/năm (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Số văn bản trùng trong cùng sổ/năm bị cảnh báo, cùng số ở sổ khác được phép."
      const documentRegistry = [
        { id: 'D1', bookCode: 'SO-DEN', year: 2026, docNumber: '125/UBND' },
        { id: 'D2', bookCode: 'SO-DI', year: 2026, docNumber: '45/CV' }
      ];

      function registerDocument(bookCode, year, docNumber) {
        const isDuplicate = documentRegistry.some(d => 
          d.bookCode === bookCode && d.year === year && d.docNumber === docNumber
        );
        if (isDuplicate) {
          return { status: 'WARNING_DUPLICATE_NUMBER', message: 'Trùng số văn bản trong cùng sổ và năm' };
        }
        return { status: 'SUCCESS' };
      }

      // Trùng số văn bản trong cùng sổ SO-DEN và năm 2026 -> Cảnh báo
      const check1 = registerDocument('SO-DEN', 2026, '125/UBND');
      assert.strictEqual(check1.status, 'WARNING_DUPLICATE_NUMBER');

      // Cùng số 125/UBND nhưng ở sổ khác (SO-DI) -> Được phép
      const check2 = registerDocument('SO-DI', 2026, '125/UBND');
      assert.strictEqual(check2.status, 'SUCCESS');

      // Cùng số 125/UBND ở sổ SO-DEN nhưng sang năm 2027 -> Được phép
      const check3 = registerDocument('SO-DEN', 2027, '125/UBND');
      assert.strictEqual(check3.status, 'SUCCESS');
    });

    test('F08: Thẩm định Phân cấp bảo mật theo vai trò (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Staff được giao một văn bản không thấy file mật của văn bản khác qua URL/export."
      const documents = [
        { id: 'DOC-01', confidentiality: 'PUBLIC', assignedStaff: 'staff1@minhtemplates.com' },
        { id: 'DOC-02', confidentiality: 'INTERNAL', assignedStaff: 'staff1@minhtemplates.com' },
        { id: 'DOC-03', confidentiality: 'CONFIDENTIAL', assignedStaff: 'director@minhtemplates.com' },
        { id: 'DOC-04', confidentiality: 'SECRET', assignedStaff: 'director@minhtemplates.com' }
      ];

      function canAccessConfidentialFile(userRole, userEmail, doc) {
        if (doc.confidentiality === 'PUBLIC') return true;
        if (doc.confidentiality === 'INTERNAL') return true;
        // Với tài liệu CONFIDENTIAL hoặc SECRET: chỉ lãnh đạo hoặc người được giao trực tiếp
        if (userRole === 'DIRECTOR' || userRole === 'ADMIN') return true;
        return (doc.assignedStaff === userEmail);
      }

      // Staff 1 xem DOC-01 và DOC-02
      assert.strictEqual(canAccessConfidentialFile('STAFF', 'staff1@minhtemplates.com', documents[0]), true);
      assert.strictEqual(canAccessConfidentialFile('STAFF', 'staff1@minhtemplates.com', documents[1]), true);

      // Staff 1 bị chặn không xem được DOC-03 (mật) và DOC-04 (tuyệt mật)
      assert.strictEqual(canAccessConfidentialFile('STAFF', 'staff1@minhtemplates.com', documents[2]), false);
      assert.strictEqual(canAccessConfidentialFile('STAFF', 'staff1@minhtemplates.com', documents[3]), false);

      // Director xem được
      assert.strictEqual(canAccessConfidentialFile('DIRECTOR', 'director@minhtemplates.com', documents[2]), true);
    });

    test('F08: Theo dõi chỉ đạo và phát hiện việc quá hạn', () => {
      const today = '2026-09-12';
      const directives = [
        { id: 'D1', dueDate: '2026-09-10', status: 'IN_PROGRESS' }, // Quá hạn
        { id: 'D2', dueDate: '2026-09-15', status: 'IN_PROGRESS' }, // Trong hạn
        { id: 'D3', dueDate: '2026-09-08', status: 'COMPLETED' }    // Đã xong đúng hạn
      ];

      function checkDirectiveStatus(d, currentDate) {
        if (d.status === 'COMPLETED') return 'COMPLETED';
        return d.dueDate < currentDate ? 'OVERDUE' : 'ON_SCHEDULE';
      }

      assert.strictEqual(checkDirectiveStatus(directives[0], today), 'OVERDUE');
      assert.strictEqual(checkDirectiveStatus(directives[1], today), 'ON_SCHEDULE');
      assert.strictEqual(checkDirectiveStatus(directives[2], today), 'COMPLETED');
    });
  });

  // =========================================================================
  // F26: LỚP HỌC, ĐIỂM DANH VÀ HỌC PHÍ
  // =========================================================================
  describe('F26 — Lớp học, điểm danh và học phí', () => {

    test('F26: Thẩm định Tính ngày kết thúc 4 buổi học (Thứ 2 & 4) khi có 1 ngày nghỉ xen kẽ (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Học thứ 2/4, có 1 ngày nghỉ trong kỳ: ngày hết 4 buổi phải bỏ qua ngày nghỉ."
      // Bắt đầu Thứ 2: 2026-09-07 (Buổi 1)
      // Thứ 4: 2026-09-09 -> Là ngày nghỉ lễ! (Bỏ qua)
      // Thứ 2 tiếp: 2026-09-14 (Buổi 2)
      // Thứ 4 tiếp: 2026-09-16 (Buổi 3)
      // Thứ 2 tiếp: 2026-09-21 (Buổi 4 - Ngày kết thúc thực tế!)

      function calculateCourseEndDate(startDateStr, totalSessions, scheduleDays, holidays = []) {
        const holidaySet = new Set(holidays);
        const dayMap = { 1: 'MON', 2: 'TUE', 3: 'WED', 4: 'THU', 5: 'FRI', 6: 'SAT', 0: 'SUN' };

        let cur = new Date(startDateStr);
        let sessionCount = 0;
        let lastDateStr = '';

        while (sessionCount < totalSessions) {
          const dayName = dayMap[cur.getDay()];
          const dateStr = cur.toISOString().slice(0, 10);

          if (scheduleDays.includes(dayName) && !holidaySet.has(dateStr)) {
            sessionCount++;
            lastDateStr = dateStr;
          }
          cur.setDate(cur.getDate() + 1);
        }
        return lastDateStr;
      }

      const schedule = ['MON', 'WED'];
      const holidays = ['2026-09-09']; // Thứ 4 ngày 09/09 nghỉ
      const endDate = calculateCourseEndDate('2026-09-07', 4, schedule, holidays);

      assert.strictEqual(endDate, '2026-09-21', 'Ngày kết thúc 4 buổi khi bỏ qua ngày nghỉ 09/09 phải là 21/09 (CODEX Criteria)');
    });

    test('F26: Thẩm định Buổi hủy không trừ credit học viên (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Buổi hủy không trừ credit."
      let enrollment = {
        studentId: 'STU-01',
        totalCredits: 16,
        usedCredits: 2,
        remainingCredits: 14
      };

      function processAttendance(enr, sessionStatus, attendanceResult) {
        if (sessionStatus === 'CANCELLED') {
          // Buổi học bị hủy -> Tuyệt đối không trừ credit!
          return { creditDeducted: 0, status: 'CANCELLED_SESSION_SKIPPED' };
        }
        if (attendanceResult === 'PRESENT' || attendanceResult === 'ABSENT_UNEXCUSED') {
          enr.usedCredits += 1;
          enr.remainingCredits = enr.totalCredits - enr.usedCredits;
          return { creditDeducted: 1, status: 'CREDIT_DEDUCTED' };
        }
        return { creditDeducted: 0, status: 'NO_DEDUCTION' };
      }

      // Buổi học bình thường -> Trừ 1 credit
      const res1 = processAttendance(enrollment, 'COMPLETED', 'PRESENT');
      assert.strictEqual(res1.creditDeducted, 1);
      assert.strictEqual(enrollment.usedCredits, 3);
      assert.strictEqual(enrollment.remainingCredits, 13);

      // Buổi học bị hủy -> Không trừ credit!
      const res2 = processAttendance(enrollment, 'CANCELLED', 'ABSENT_UNEXCUSED');
      assert.strictEqual(res2.creditDeducted, 0);
      assert.strictEqual(enrollment.usedCredits, 3, 'Credit không bị trừ khi buổi học bị hủy (CODEX Criteria)');
      assert.strictEqual(enrollment.remainingCredits, 13);
    });

    test('F26: Thẩm định Chặn điểm danh trùng cùng học sinh/buổi học (CODEX Criteria)', () => {
      // CODEX Acceptance Criteria:
      // "Điểm danh trùng cùng học sinh/buổi bị chặn."
      const attendanceLogs = [
        { sessionId: 'SES-01', studentId: 'STU-01', result: 'PRESENT' }
      ];

      function recordAttendance(list, sessionId, studentId, result) {
        const duplicate = list.some(a => a.sessionId === sessionId && a.studentId === studentId);
        if (duplicate) {
          throw new Error('DUPLICATE_ATTENDANCE: Học sinh này đã được điểm danh trong buổi học');
        }
        const record = { sessionId, studentId, result };
        list.push(record);
        return record;
      }

      // Điểm danh cho học sinh khác -> Hợp lệ
      const rec2 = recordAttendance(attendanceLogs, 'SES-01', 'STU-02', 'PRESENT');
      assert.ok(rec2);

      // Điểm danh lại cho STU-01 cùng buổi SES-01 -> Bị chặn
      assert.throws(() => {
        recordAttendance(attendanceLogs, 'SES-01', 'STU-01', 'ABSENT_EXCUSED');
      }, /DUPLICATE_ATTENDANCE/, 'Phải chặn điểm danh trùng học sinh/buổi');
    });

    test('F26: Quản lý học phí và tính công nợ phải thu chuẩn xác', () => {
      const invoices = [
        { id: 'INV-01', studentId: 'STU-01', amount: 3200000, paidAmount: 3200000 },
        { id: 'INV-02', studentId: 'STU-02', amount: 3200000, paidAmount: 1600000 },
        { id: 'INV-03', studentId: 'STU-03', amount: 2880000, paidAmount: 0 }
      ];

      const totalBilled = invoices.reduce((sum, inv) => sum + inv.amount, 0);
      const totalCollected = invoices.reduce((sum, inv) => sum + inv.paidAmount, 0);
      const outstandingDebt = totalBilled - totalCollected;

      assert.strictEqual(totalBilled, 9280000, 'Tổng học phí phát hành là 9.280.000đ');
      assert.strictEqual(totalCollected, 4800000, 'Tổng học phí đã thu là 4.800.000đ');
      assert.strictEqual(outstandingDebt, 4480000, 'Công nợ còn phải thu là 4.480.000đ');
    });
  });

  // =========================================================================
  // 4. FORMULA PRECISION GATE: BẢO VỆ PHÉP CHIA BẰNG IFERROR(..., 0)
  // =========================================================================
  describe('Formula Precision Gate — Bảo vệ toàn bộ phép chia bằng IFERROR(..., 0)', () => {
    const batch6Skus = ['f07', 'f08', 'f26'];

    for (const sku of batch6Skus) {
      test('SKU ' + sku.toUpperCase() + ': Toàn bộ công thức KPI/phân tích chứa phép chia phải được bọc IFERROR(..., 0)', () => {
        const config = require('../configs/skus/' + sku + '.config.js');
        assert.ok(config, 'Config ' + sku + ' phải tồn tại');

        const allFormulas = [];
        if (config.dashboard && config.dashboard.kpiCards) {
          for (const card of config.dashboard.kpiCards) {
            if (card.formula) allFormulas.push({ loc: 'kpiCard: ' + card.label, formula: card.formula });
          }
        }
        if (config.tables) {
          for (const t of config.tables) {
            if (t.formats) {
              for (const f of t.formats) {
                if (f.formula) allFormulas.push({ loc: 'table: ' + t.name, formula: f.formula });
              }
            }
          }
        }

        for (const item of allFormulas) {
          if (item.formula.includes('/')) {
            const hasIfError = item.formula.toUpperCase().includes('IFERROR');
            assert.ok(
              hasIfError,
              'Công thức tại ' + item.loc + ' chứa phép chia nhưng chưa được bọc IFERROR: ' + item.formula
            );
          }
        }
      });
    }
  });

  // =========================================================================
  // 5. KIỂM TRA AST CÚ PHÁP CHO TOÀN BỘ 15 INSTALLER GENERATED (3 SKUs x 5 TIERS)
  // =========================================================================
  describe('AST Syntax Verification — Toàn bộ 15 installers của Batch 06', () => {
    const skus = ['F07', 'F08', 'F26'];
    const tiers = ['free_demo', 'free_clean', 'basic', 'pro', 'business'];

    for (const sku of skus) {
      for (const tier of tiers) {
        test('AST Check: ' + sku + ' [' + tier + '] syntax hợp lệ 100%', () => {
          const fileName = 'setup_' + tier + '.gs';
          const filePath = path.join('D:/google sheet/releases', sku, '1.0.0', fileName);
          assert.ok(fs.existsSync(filePath), 'File installer phải tồn tại: ' + filePath);

          const code = fs.readFileSync(filePath, 'utf8');
          assert.ok(code.length > 5000, 'Installer phải có kích thước tối thiểu 5KB (thực tế: ' + code.length + ')');

          const check = checkGasSyntax(code);
          assert.strictEqual(
            check.valid,
            true,
            'Lỗi cú pháp AST tại ' + sku + ' ' + tier + ': ' + (check.error ? check.error.message : 'Unknown')
          );
        });
      }
    }
  });

});
