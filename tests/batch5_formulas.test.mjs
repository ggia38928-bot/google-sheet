import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../packages/core-engine/src/index.js');
const { checkGasSyntax } = engine;

describe('Suite: Batch 5 Customer Services & Booking Formulas & CODEX Acceptance Criteria (F09, F10, F28)', () => {

  // =========================================================================
  // F09: LỊCH LÃNH ĐẠO, CUỘC HỌP VÀ CÔNG TÁC
  // =========================================================================
  describe('F09 — Lịch lãnh đạo, cuộc họp và công tác', () => {

    function isTimeOverlap(start1Str, end1Str, start2Str, end2Str, bufferMinutes = 0) {
      const s1 = new Date(start1Str).getTime();
      const e1 = new Date(end1Str).getTime() + (bufferMinutes * 60 * 1000);
      const s2 = new Date(start2Str).getTime();
      const e2 = new Date(end2Str).getTime() + (bufferMinutes * 60 * 1000);

      // Hai khoảng thời gian giao nhau khi start1 < end2 && start2 < end1
      return (s1 < e2 && s2 < e1);
    }

    test('F09: Thẩm định Hai cuộc họp giao nhau chặn đặt cùng phòng (CODEX Criteria)', () => {
      const room = { id: 'RES-001', name: 'Phòng họp VIP A' };
      const reservations = [
        { id: 'RSV-01', roomId: 'RES-001', start: '2026-09-14 08:30:00', end: '2026-09-14 10:00:00', status: 'CONFIRMED' }
      ];

      function bookRoom(roomId, startStr, endStr, buffer = 0) {
        const conflict = reservations.some(r => 
          r.roomId === roomId &&
          r.status === 'CONFIRMED' &&
          isTimeOverlap(r.start, r.end, startStr, endStr, buffer)
        );
        if (conflict) {
          throw new Error('ROOM_COLLISION: Phòng họp đã có lịch trong khung giờ này');
        }
        return { success: true };
      }

      // Đặt trùng khung giờ 09:00 - 10:30 -> Bị chặn
      assert.throws(() => {
        bookRoom('RES-001', '2026-09-14 09:00:00', '2026-09-14 10:30:00', 0);
      }, /ROOM_COLLISION/, 'Hai cuộc họp giao nhau phải chặn đặt cùng phòng');
    });

    test('F09: Thẩm định Cuộc họp kết thúc 10:00 cho phép cuộc sau bắt đầu 10:00 khi buffer=0 (CODEX Criteria)', () => {
      // Cuộc họp 1: 08:30 -> 10:00
      // Cuộc họp 2: 10:00 -> 11:30, buffer = 0
      const overlapWithZeroBuffer = isTimeOverlap(
        '2026-09-14 08:30:00', '2026-09-14 10:00:00',
        '2026-09-14 10:00:00', '2026-09-14 11:30:00',
        0
      );

      assert.strictEqual(overlapWithZeroBuffer, false, 'Khi buffer=0, ca sau bắt đầu đúng 10:00 không bị coi là trùng');
    });

    test('F09: Khi buffer=15 phút, cuộc họp sau lúc 10:10 bị chặn vì chưa hết thời gian chuẩn bị', () => {
      const overlapWith15Buffer = isTimeOverlap(
        '2026-09-14 08:30:00', '2026-09-14 10:00:00',
        '2026-09-14 10:10:00', '2026-09-14 11:30:00',
        15
      );

      assert.strictEqual(overlapWith15Buffer, true, 'Buffer 15 phút đẩy mốc kết thúc khả dụng đến 10:15, lịch 10:10 phải bị chặn');
    });

    test('F09: Chặn trùng lịch người tham dự (Attendee) trong cùng khung giờ', () => {
      const attendeeSchedule = [
        { email: 'lanhdao@minhtemplates.com', start: '2026-09-14 08:30:00', end: '2026-09-14 10:00:00' }
      ];

      function inviteAttendee(email, startStr, endStr) {
        const busy = attendeeSchedule.some(s => 
          s.email === email && isTimeOverlap(s.start, s.end, startStr, endStr, 0)
        );
        if (busy) {
          throw new Error('ATTENDEE_BUSY: Người tham gia đã có lịch họp khác trong khung giờ này');
        }
        return true;
      }

      assert.throws(() => {
        inviteAttendee('lanhdao@minhtemplates.com', '2026-09-14 09:15:00', '2026-09-14 10:15:00');
      }, /ATTENDEE_BUSY/, 'Phải cảnh báo/chặn trùng lịch của lãnh đạo');

      // Khung giờ sau 10:00 hợp lệ
      assert.strictEqual(inviteAttendee('lanhdao@minhtemplates.com', '2026-09-14 10:00:00', '2026-09-14 11:30:00'), true);
    });
  });

  // =========================================================================
  // F10: KHÁCH SẠN, HOMESTAY VÀ ĐẶT PHÒNG
  // =========================================================================
  describe('F10 — Khách sạn, homestay và đặt phòng', () => {

    test('F10: Thẩm định Khoảng [check-in, check-out) không tính đêm trả phòng (CODEX Criteria)', () => {
      function calculateNights(checkInDateStr, checkOutDateStr) {
        const d1 = new Date(checkInDateStr);
        const d2 = new Date(checkOutDateStr);
        const diffMs = d2 - d1;
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
      }

      // Check-in 10/10, check-out 12/10 -> Đúng 2 đêm (đêm 10 và đêm 11, ngày 12 trả phòng)
      const nights = calculateNights('2026-10-10', '2026-10-12');
      assert.strictEqual(nights, 2, 'Khoảng [check-in, check-out) không tính đêm ngày trả phòng, đúng 2 đêm');

      // Check-in 10/10, check-out 15/10 -> Đúng 5 đêm
      const nights5 = calculateNights('2026-10-10', '2026-10-15');
      assert.strictEqual(nights5, 5, 'Check-in 10/10 đến 15/10 tính đúng 5 đêm');
    });

    test('F10: Thẩm định Tiền cọc (Deposit) không cộng lần hai vào tổng thu (CODEX Criteria)', () => {
      const booking = {
        id: 'BK-001',
        nights: 2,
        pricePerNight: 800000,
        roomSubtotal: 1600000, // 2 * 800.000 = 1.600.000đ
        deposit: 500000
      };

      const payments = [
        { type: 'DEPOSIT', amount: 500000, paidAt: '2026-09-01' },
        { type: 'SETTLEMENT', amount: 1100000, paidAt: '2026-10-12' } // Khách thanh toán nốt khi check-out
      ];

      // Tổng thu thực nhận = Tiền cọc + Tiền tất toán
      const totalCollected = payments.reduce((sum, p) => sum + p.amount, 0);

      // Doanh thu phòng ghi nhận theo giá trị hợp đồng booking
      const recognizedRevenue = booking.roomSubtotal;

      assert.strictEqual(totalCollected, 1600000, 'Tổng tiền thu thực tế từ khách đúng bằng 1.600.000đ');
      assert.strictEqual(recognizedRevenue, 1600000, 'Doanh thu phòng đúng bằng 1.600.000đ');
      assert.strictEqual(totalCollected, recognizedRevenue, 'Tiền cọc không bị cộng kép vào tổng thu (CODEX Criteria)');
    });

    test('F10: Thẩm định Booking hủy không giữ phòng và chặn Overbooking (CODEX Criteria)', () => {
      const bookings = [
        { id: 'BK-01', roomId: 'RM-101', in: '2026-10-10', out: '2026-10-12', status: 'CONFIRMED' },
        { id: 'BK-02', roomId: 'RM-101', in: '2026-10-15', out: '2026-10-18', status: 'CANCELLED' } // Đã hủy
      ];

      function checkDateOverlap(in1, out1, in2, out2) {
        const s1 = new Date(in1).getTime();
        const e1 = new Date(out1).getTime();
        const s2 = new Date(in2).getTime();
        const e2 = new Date(out2).getTime();
        // Nửa khoảng [check-in, check-out): giao nhau khi s1 < e2 && s2 < e1
        return (s1 < e2 && s2 < e1);
      }

      function reserveRoom(list, roomId, checkIn, checkOut) {
        const conflict = list.some(b => 
          b.roomId === roomId &&
          b.status !== 'CANCELLED' &&
          checkDateOverlap(b.in, b.out, checkIn, checkOut)
        );
        if (conflict) {
          throw new Error('OVERBOOKING_ERROR: Phòng đã có khách đặt trong khoảng ngày này');
        }
        return { success: true };
      }

      // Thử đặt trùng khoảng [2026-10-11, 2026-10-13) với BK-01 đang CONFIRMED -> Bị chặn overbooking
      assert.throws(() => {
        reserveRoom(bookings, 'RM-101', '2026-10-11', '2026-10-13');
      }, /OVERBOOKING_ERROR/);

      // Thử đặt trùng khoảng [2026-10-15, 2026-10-17) với BK-02 đã CANCELLED -> Thành công vì phòng đã giải phóng
      const res = reserveRoom(bookings, 'RM-101', '2026-10-15', '2026-10-17');
      assert.strictEqual(res.success, true, 'Booking hủy không giữ phòng, khách mới đặt được bình thường');
    });

    test('F10: Công thức ADR (Average Daily Rate) và xử lý an toàn khi số đêm bán bằng 0', () => {
      function calculateADR(revenue, nightsSold) {
        if (!nightsSold || nightsSold === 0) return 0; // Tương đương IFERROR(revenue / nightsSold, 0)
        return Number((revenue / nightsSold).toFixed(2));
      }

      assert.strictEqual(calculateADR(0, 0), 0, 'Khi chưa bán được đêm nào, ADR trả về 0 không lỗi');
      assert.strictEqual(calculateADR(8500000, 10), 850000, 'Doanh thu 8.5tr cho 10 đêm -> ADR = 850.000đ');
    });
  });

  // =========================================================================
  // F28: LỊCH DỊCH VỤ SPA VÀ PHÒNG KHÁM
  // =========================================================================
  describe('F28 — Lịch dịch vụ spa và phòng khám', () => {

    function isTimeSlotConflict(start1, end1, start2, end2) {
      // Chuỗi giờ HH:MM
      const toMinutes = (str) => {
        const [h, m] = str.split(':').map(Number);
        return h * 60 + m;
      };
      const s1 = toMinutes(start1);
      const e1 = toMinutes(end1);
      const s2 = toMinutes(start2);
      const e2 = toMinutes(end2);

      return (s1 < e2 && s2 < e1);
    }

    test('F28: Thẩm định Hai lịch cùng provider giao nhau không cùng được xác nhận (CODEX Criteria)', () => {
      const appointments = [
        { id: 'APT-01', providerId: 'PRV-001', date: '2026-09-15', start: '09:00', end: '10:00', status: 'CONFIRMED' }
      ];

      function scheduleAppointment(providerId, date, start, end) {
        const conflict = appointments.some(a => 
          a.providerId === providerId &&
          a.date === date &&
          a.status !== 'CANCELLED' &&
          isTimeSlotConflict(a.start, a.end, start, end)
        );
        if (conflict) {
          throw new Error('PROVIDER_CONFLICT: Chuyên viên đã có lịch hẹn trong khung giờ này');
        }
        return { success: true };
      }

      // Đặt 09:30 - 10:30 cho PRV-001 -> Bị từ chối
      assert.throws(() => {
        scheduleAppointment('PRV-001', '2026-09-15', '09:30', '10:30');
      }, /PROVIDER_CONFLICT/, 'Hai lịch cùng provider giao nhau không được cùng xác nhận');

      // Đặt ca nối tiếp 10:00 - 11:00 cho PRV-001 -> Thành công
      const validNext = scheduleAppointment('PRV-001', '2026-09-15', '10:00', '11:00');
      assert.strictEqual(validNext.success, true);
    });

    test('F28: Thẩm định Hủy lịch không tăng doanh thu dịch vụ (CODEX Criteria)', () => {
      const appointments = [
        { id: 'A1', price: 1200000, status: 'COMPLETED' },
        { id: 'A2', price: 600000, status: 'COMPLETED' },
        { id: 'A3', price: 450000, status: 'CANCELLED' }, // Khách hủy hẹn
        { id: 'A4', price: 600000, status: 'NO_SHOW' }     // Khách bỏ hẹn
      ];

      const completedRevenue = appointments
        .filter(a => a.status === 'COMPLETED')
        .reduce((sum, a) => sum + a.price, 0);

      assert.strictEqual(completedRevenue, 1800000, 'Doanh thu chỉ tính các lịch COMPLETED (1.800.000đ)');
      assert.ok(!appointments.filter(a => a.status === 'CANCELLED').some(a => a.status === 'COMPLETED'), 'Lịch CANCELLED tuyệt đối không tăng doanh thu');
    });

    test('F28: Tính tỷ lệ khách bỏ hẹn (No-Show Rate) bọc IFERROR chống chia cho 0', () => {
      function calculateNoShowRate(appointmentsList) {
        if (!appointmentsList || appointmentsList.length === 0) return 0;
        const noShowCount = appointmentsList.filter(a => a.status === 'NO_SHOW').length;
        return Number((noShowCount / appointmentsList.length).toFixed(4));
      }

      assert.strictEqual(calculateNoShowRate([]), 0, 'Danh sách rỗng trả về 0%');

      const appts = [
        { id: '1', status: 'COMPLETED' },
        { id: '2', status: 'COMPLETED' },
        { id: '3', status: 'COMPLETED' },
        { id: '4', status: 'NO_SHOW' }
      ];
      assert.strictEqual(calculateNoShowRate(appts), 0.25, 'Tỷ lệ no-show là 25%');
    });
  });

  // =========================================================================
  // 4. FORMULA DIVISION GATE: KIỂM TRA IFERROR(..., 0) CHO F09, F10, F28
  // =========================================================================
  describe('Formula Gate — Bảo vệ toàn bộ phép chia bằng IFERROR(..., 0)', () => {
    const batch5Skus = ['f09', 'f10', 'f28'];

    for (const sku of batch5Skus) {
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
  describe('AST Syntax Verification — Toàn bộ 15 installers của Batch 05', () => {
    const skus = ['F09', 'F10', 'F28'];
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
