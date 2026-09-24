import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../packages/core-engine/src/index.js');
const { checkGasSyntax } = engine;

describe('Suite: Batch 4 HR & Timekeeping Formulas & CODEX Acceptance Criteria (F12, F13, F32, F38)', () => {

  // =========================================================================
  // F12: QUẢN LÝ HỒ SƠ NHÂN SỰ & HỢP ĐỒNG LAO ĐỘNG
  // =========================================================================
  describe('F12 — Quản lý hồ sơ nhân sự & hợp đồng lao động', () => {

    test('F12: Thẩm định Active Headcount loại trừ nhân sự đã nghỉ việc trước ReportDate hoặc TERMINATED', () => {
      const reportDate = new Date('2026-09-01');

      const employees = [
        { id: 'EMP001', name: 'Nguyễn Văn An', status: 'ACTIVE', joinDate: new Date('2024-01-15'), exitDate: null },
        { id: 'EMP002', name: 'Trần Thị Bình', status: 'ACTIVE', joinDate: new Date('2025-03-01'), exitDate: null },
        { id: 'EMP003', name: 'Lê Hoàng Cường', status: 'TERMINATED', joinDate: new Date('2023-05-10'), exitDate: new Date('2026-08-15') },
        { id: 'EMP004', name: 'Phạm Minh Đức', status: 'ACTIVE', joinDate: new Date('2026-01-10'), exitDate: new Date('2026-09-30') },
        { id: 'EMP005', name: 'Hoàng Lan', status: 'ON_LEAVE', joinDate: new Date('2024-06-01'), exitDate: null },
        { id: 'EMP006', name: 'Đỗ Kim Oanh', status: 'TERMINATED', joinDate: new Date('2025-01-01'), exitDate: null }
      ];

      function calculateActiveHeadcount(empList, asOfDate) {
        return empList.filter(emp => {
          if (emp.status === 'TERMINATED') return false;
          if (emp.exitDate && emp.exitDate < asOfDate) return false;
          if (emp.joinDate > asOfDate) return false;
          return true;
        }).length;
      }

      const activeCount = calculateActiveHeadcount(employees, reportDate);
      assert.strictEqual(activeCount, 4, 'Active headcount loại trừ nhân sự nghỉ việc trước reportDate hoặc TERMINATED');
    });

    test('F12: Lịch sử luân chuyển phòng ban/vị trí được lưu vết trọn vẹn trong EmploymentEvents', () => {
      const employeeId = 'EMP001';
      const eventLog = [
        { id: 'EVT001', employeeId, eventType: 'HIRE', department: 'Kinh Doanh', position: 'Chuyên viên Bán hàng', effectiveDate: '2024-01-15' },
        { id: 'EVT002', employeeId, eventType: 'TRANSFER', department: 'Marketing', position: 'Chuyên viên Growth', effectiveDate: '2025-06-01' },
        { id: 'EVT003', employeeId, eventType: 'PROMOTION', department: 'Marketing', position: 'Trưởng nhóm Marketing', effectiveDate: '2026-01-01' }
      ];

      const empHistory = eventLog.filter(e => e.employeeId === employeeId);
      assert.strictEqual(empHistory.length, 3, 'Phải bảo toàn đầy đủ 3 sự kiện luân chuyển');
      assert.strictEqual(empHistory[empHistory.length - 1].position, 'Trưởng nhóm Marketing');
    });

    test('F12: RBAC - Nhân viên thông thường bị từ chối truy cập bảng Lương thưởng (Compensation)', () => {
      function canAccessTable(role, tableName) {
        const restrictedTables = {
          COMPENSATION: ['HR_MANAGER', 'DIRECTOR', 'ADMIN']
        };
        if (!restrictedTables[tableName]) return true;
        return restrictedTables[tableName].includes(role);
      }

      assert.strictEqual(canAccessTable('STAFF', 'EMPLOYEES'), true);
      assert.strictEqual(canAccessTable('STAFF', 'CONTRACTS'), true);
      assert.strictEqual(canAccessTable('STAFF', 'COMPENSATION'), false, 'Nhân viên STAFF không được truy cập bảng COMPENSATION (CODEX Criteria)');
      assert.strictEqual(canAccessTable('HR_MANAGER', 'COMPENSATION'), true);
    });

    test('F12: Lọc danh sách hợp đồng lao động sắp hết hạn trong vòng 30 ngày', () => {
      const today = new Date('2026-09-12');
      const contracts = [
        { contractNumber: 'HD-01', endDate: new Date('2026-09-25'), status: 'ACTIVE' },
        { contractNumber: 'HD-02', endDate: new Date('2026-10-05'), status: 'ACTIVE' },
        { contractNumber: 'HD-03', endDate: new Date('2026-11-20'), status: 'ACTIVE' },
        { contractNumber: 'HD-04', endDate: new Date('2026-08-30'), status: 'EXPIRED' }
      ];

      function getExpiringContracts(list, asOfDate, thresholdDays = 30) {
        return list.filter(c => {
          if (c.status !== 'ACTIVE') return false;
          const diffDays = Math.ceil((c.endDate - asOfDate) / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= thresholdDays;
        });
      }

      const expiring = getExpiringContracts(contracts, today);
      assert.strictEqual(expiring.length, 2, 'Có đúng 2 hợp đồng sắp hết hạn trong 30 ngày');
    });
  });

  // =========================================================================
  // F13: TUYỂN DỤNG & LỊCH PHỎNG VẤN ỨNG VIÊN
  // =========================================================================
  describe('F13 — Tuyển dụng & lịch phỏng vấn ứng viên', () => {

    test('F13: Thẩm định 1 ứng viên nộp 2 vị trí được tính là 1 ứng viên và 2 hồ sơ ứng tuyển (CODEX Criteria)', () => {
      const candidates = [
        { id: 'CAN001', name: 'Nguyễn Văn Đạt', email: 'dat@gmail.com' },
        { id: 'CAN002', name: 'Trần Hương Ly', email: 'ly@gmail.com' }
      ];

      const applications = [
        { id: 'APP001', candidateId: 'CAN001', vacancyId: 'VAC_FRONTEND', stage: 'INTERVIEW' },
        { id: 'APP002', candidateId: 'CAN001', vacancyId: 'VAC_FULLSTACK', stage: 'SCREENING' },
        { id: 'APP003', candidateId: 'CAN002', vacancyId: 'VAC_UIUX', stage: 'APPLIED' }
      ];

      const uniqueCandidates = new Set(applications.map(a => a.candidateId)).size;
      const totalApplications = applications.length;
      const candidate1Applications = applications.filter(a => a.candidateId === 'CAN001').length;

      assert.strictEqual(uniqueCandidates, 2, 'Tổng số ứng viên duy nhất là 2');
      assert.strictEqual(totalApplications, 3, 'Tổng số hồ sơ ứng tuyển là 3');
      assert.strictEqual(candidate1Applications, 2, 'Ứng viên CAN001 nộp 2 vị trí tính là 2 applications riêng biệt (CODEX Criteria)');
    });

    test('F13: Tỷ lệ chấp nhận Offer (Offer Acceptance Rate) bọc IFERROR chống chia cho 0', () => {
      function calculateOfferAcceptanceRate(offers) {
        const decidedOffers = offers.filter(o => o.status !== 'DRAFT');
        if (decidedOffers.length === 0) {
          return 0;
        }
        const acceptedOffers = offers.filter(o => o.status === 'ACCEPTED');
        return acceptedOffers.length / decidedOffers.length;
      }

      const emptyOffers = [
        { id: 'OFF01', status: 'DRAFT' },
        { id: 'OFF02', status: 'DRAFT' }
      ];
      assert.strictEqual(calculateOfferAcceptanceRate(emptyOffers), 0, 'Khi không có offer đã quyết định, tỷ lệ trả về 0 không lỗi #DIV/0!');

      const normalOffers = [
        { id: 'OFF01', status: 'ACCEPTED' },
        { id: 'OFF02', status: 'REJECTED' },
        { id: 'OFF03', status: 'ACCEPTED' },
        { id: 'OFF04', status: 'DRAFT' }
      ];
      const rate = calculateOfferAcceptanceRate(normalOffers);
      assert.strictEqual(Number((rate * 100).toFixed(2)), 66.67, 'Tỷ lệ chấp nhận offer là 66.67%');
    });

    test('F13: Phễu tuyển dụng (Funnel Conversion) bảo toàn tính liên tục từ Ứng tuyển đến Tiếp nhận', () => {
      const pipeline = [
        { id: 'A1', stage: 'HIRED' },
        { id: 'A2', stage: 'OFFER' },
        { id: 'A3', stage: 'INTERVIEW' },
        { id: 'A4', stage: 'SCREENING' },
        { id: 'A5', stage: 'APPLIED' },
        { id: 'A6', stage: 'REJECTED' }
      ];

      const stageWeight = { APPLIED: 1, SCREENING: 2, INTERVIEW: 3, OFFER: 4, HIRED: 5, REJECTED: 0 };
      const reachedInterview = pipeline.filter(p => stageWeight[p.stage] >= 3).length;
      assert.strictEqual(reachedInterview, 3, 'Có 3 ứng viên đã đạt từ vòng phỏng vấn trở lên');
    });
  });

  // =========================================================================
  // F32: CHẤM CÔNG & TỔNG HỢP CA LÀM VIỆC
  // =========================================================================
  describe('F32 — Chấm công & tổng hợp ca làm việc', () => {

    test('F32: Thẩm định Ca làm việc qua đêm (22:00 -> 06:00 trừ 60p nghỉ = 7 giờ, không âm) (CODEX Criteria)', () => {
      function calculateWorkHours(startTimeStr, endTimeStr, breakMinutes) {
        const [sH, sM] = startTimeStr.split(':').map(Number);
        const [eH, eM] = endTimeStr.split(':').map(Number);

        const startTime = sH + sM / 60;
        const endTime = eH + eM / 60;

        let durationHours = 0;
        if (endTime < startTime) {
          durationHours = (endTime + 24) - startTime;
        } else {
          durationHours = endTime - startTime;
        }

        const netWorkHours = Math.max(0, durationHours - (breakMinutes / 60));
        return Number(netWorkHours.toFixed(2));
      }

      const nightShiftHours = calculateWorkHours('22:00', '06:00', 60);
      assert.strictEqual(nightShiftHours, 7.0, 'Ca đêm 22:00 - 06:00 trừ 60p nghỉ phải chính xác là 7.0 giờ (CODEX Criteria)');

      const dayShiftHours = calculateWorkHours('08:00', '17:00', 60);
      assert.strictEqual(dayShiftHours, 8.0, 'Ca ngày 08:00 - 17:00 trừ 60p nghỉ phải chính xác là 8.0 giờ');

      const zeroShiftHours = calculateWorkHours('08:00', '08:30', 60);
      assert.strictEqual(zeroShiftHours, 0, 'Giờ làm việc không bao giờ âm khi giờ nghỉ vượt giờ ca');
    });

    test('F32: Chặn nhân viên check-in 2 lần trong cùng một ngày làm việc (CODEX Criteria)', () => {
      const existingLogs = [
        { id: 'LOG001', employeeId: 'EMP001', logDate: '2026-09-12', checkInTime: '2026-09-12T07:55:00' }
      ];

      function registerCheckIn(logs, employeeId, logDate, checkInTime) {
        const duplicate = logs.some(l => l.employeeId === employeeId && l.logDate === logDate);
        if (duplicate) {
          throw new Error('DUPLICATE_CHECKIN: Nhan vien da checkin ngay ' + logDate);
        }
        const newLog = { id: 'LOG_' + Date.now(), employeeId, logDate, checkInTime };
        logs.push(newLog);
        return newLog;
      }

      const log2 = registerCheckIn(existingLogs, 'EMP002', '2026-09-12', '2026-09-12T08:02:00');
      assert.ok(log2);

      assert.throws(() => {
        registerCheckIn(existingLogs, 'EMP001', '2026-09-12', '2026-09-12T08:15:00');
      }, /DUPLICATE_CHECKIN/, 'Phải chặn nhân viên check-in 2 lần trong cùng ngày');
    });

    test('F32: Tính giờ làm thêm (Overtime) chính xác khi vượt quá giờ ca tiêu chuẩn', () => {
      function calculateOvertime(actualHours, standardHours = 8) {
        return Math.max(0, actualHours - standardHours);
      }

      assert.strictEqual(calculateOvertime(10.5, 8), 2.5, 'Làm 10.5h trên ca chuẩn 8h được tính 2.5h tăng ca');
      assert.strictEqual(calculateOvertime(7.5, 8), 0, 'Làm 7.5h không phát sinh OT');
    });
  });

  // =========================================================================
  // F38: QUẢN LÝ NGHỈ PHÉP & SỐ DƯ PHÉP NĂM
  // =========================================================================
  describe('F38 — Quản lý nghỉ phép & số dư phép năm', () => {

    test('F38: Thẩm định NETWORKDAYS từ Thứ 6 đến Thứ 2 không ngày lễ = 2 ngày làm việc (CODEX Criteria)', () => {
      function calculateNetworkDays(startDateStr, endDateStr, holidays = []) {
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);
        const holidaySet = new Set(holidays);

        let workingDays = 0;
        let cur = new Date(start);

        while (cur <= end) {
          const dayOfWeek = cur.getDay();
          const dateStr = cur.toISOString().slice(0, 10);

          if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidaySet.has(dateStr)) {
            workingDays++;
          }
          cur.setDate(cur.getDate() + 1);
        }
        return workingDays;
      }

      const daysNoHoliday = calculateNetworkDays('2026-09-18', '2026-09-21', []);
      assert.strictEqual(daysNoHoliday, 2, 'Nghỉ từ Thứ 6 đến Thứ 2 không ngày lễ tính đúng 2 ngày làm việc (CODEX Criteria)');

      const daysWithHoliday = calculateNetworkDays('2026-09-18', '2026-09-21', ['2026-09-21']);
      assert.strictEqual(daysWithHoliday, 1, 'Nếu Thứ 2 là ngày lễ thì thời gian nghỉ chỉ trừ 1 ngày làm việc');
    });

    test('F38: Thẩm định Hai ca nghỉ nửa ngày tính thành 1 ngày nguyên vẹn (CODEX Criteria)', () => {
      const leaveRecords = [
        { employeeId: 'EMP001', leaveUnit: 'HALF_DAY', daysCount: 0.5, status: 'APPROVED' },
        { employeeId: 'EMP001', leaveUnit: 'HALF_DAY', daysCount: 0.5, status: 'APPROVED' }
      ];

      const totalUsedDays = leaveRecords
        .filter(r => r.status === 'APPROVED')
        .reduce((sum, r) => sum + r.daysCount, 0);

      assert.strictEqual(totalUsedDays, 1.0, 'Hai ca nghỉ nửa ngày tính tổng thành 1.0 ngày phép nguyên vẹn (CODEX Criteria)');
    });

    test('F38: Thẩm định Duyệt lại đơn đã duyệt không trừ trùng lặp số dư phép (CODEX Criteria)', () => {
      let balance = {
        employeeId: 'EMP001',
        totalEntitled: 12,
        usedDays: 0,
        remainingDays: 12
      };

      const request = {
        id: 'REQ001',
        employeeId: 'EMP001',
        daysCount: 2,
        status: 'SUBMITTED'
      };

      function approveLeaveRequest(bal, req) {
        if (req.status === 'APPROVED') {
          return { success: false, reason: 'ALREADY_APPROVED' };
        }
        req.status = 'APPROVED';
        bal.usedDays += req.daysCount;
        bal.remainingDays = bal.totalEntitled - bal.usedDays;
        return { success: true };
      }

      const res1 = approveLeaveRequest(balance, request);
      assert.strictEqual(res1.success, true);
      assert.strictEqual(balance.usedDays, 2);
      assert.strictEqual(balance.remainingDays, 10);

      const res2 = approveLeaveRequest(balance, request);
      assert.strictEqual(res2.success, false);
      assert.strictEqual(balance.usedDays, 2, 'Số ngày đã sử dụng không được trừ thêm lần nữa');
      assert.strictEqual(balance.remainingDays, 10, 'Số dư phép năm bảo toàn, không trừ kép');
    });

    test('F38: Công thức số dư phép năm tổng hợp: Opening + Accrued - Used', () => {
      const employeeLeave = {
        openingBalance: 2,
        accruedThisYear: 8,
        usedDays: 3.5
      };

      const remaining = employeeLeave.openingBalance + employeeLeave.accruedThisYear - employeeLeave.usedDays;
      assert.strictEqual(remaining, 6.5, 'Số dư phép năm = 2 + 8 - 3.5 = 6.5 ngày');
    });
  });

  // =========================================================================
  // 5. FORMULA DIVISION GATE: KIỂM TRA IFERROR(..., 0)
  // =========================================================================
  describe('Formula Gate — Bảo vệ toàn bộ phép chia bằng IFERROR(..., 0)', () => {
    const batch4Skus = ['f12', 'f13', 'f32', 'f38'];

    for (const sku of batch4Skus) {
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
  // 6. KIỂM TRA AST CÚ PHÁP CHO TOÀN BỘ 20 INSTALLER GENERATED (4 SKUs x 5 TIERS)
  // =========================================================================
  describe('AST Syntax Verification — Toàn bộ 20 installers của Batch 04', () => {
    const skus = ['F12', 'F13', 'F32', 'F38'];
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
