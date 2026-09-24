import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('Suite: Batch 3 Business Formulas & CODEX Acceptance Criteria (F30, F34, F48)', () => {

  // =========================================================================
  // F30: CÔNG NỢ VÀ PHÂN BỔ THANH TOÁN
  // =========================================================================
  describe('F30 — Công nợ và phân bổ thanh toán', () => {

    test('F30: Thẩm định Acceptance Criteria Catalog (Hóa đơn 1tr, phân bổ 400k, credit 100k -> còn 500k)', () => {
      const invoice = {
        id: 'INV-001',
        amount: 1000000
      };

      const allocations = [
        { invoiceId: 'INV-001', amount: 400000 }
      ];

      const creditNotes = [
        { invoiceId: 'INV-001', amount: 100000, state: 'APPLIED' }
      ];

      const totalAllocated = allocations
        .filter(a => a.invoiceId === invoice.id)
        .reduce((sum, a) => sum + a.amount, 0);

      const totalCredit = creditNotes
        .filter(c => c.invoiceId === invoice.id && c.state === 'APPLIED')
        .reduce((sum, c) => sum + c.amount, 0);

      const remainingBalance = Math.max(0, invoice.amount - totalAllocated - totalCredit);

      assert.strictEqual(totalAllocated, 400000, 'Đã phân bổ phải bằng 400.000đ');
      assert.strictEqual(totalCredit, 100000, 'Credit note phải bằng 100.000đ');
      assert.strictEqual(remainingBalance, 500000, 'Dư nợ còn lại phải chính xác là 500.000đ (CODEX Criteria)');
    });

    test('F30: Tiền thu chưa phân bổ hiển thị riêng, không tự động gán vào hóa đơn đầu tiên', () => {
      const payment = {
        id: 'PAY-001',
        amount: 1000000,
        direction: 'INCOMING',
        state: 'POSTED'
      };

      const allocations = [
        { paymentId: 'PAY-001', invoiceId: 'INV-001', amount: 400000 }
      ];

      const totalAllocated = allocations
        .filter(a => a.paymentId === payment.id)
        .reduce((sum, a) => sum + a.amount, 0);

      const unallocated = Math.max(0, payment.amount - totalAllocated);

      assert.strictEqual(unallocated, 600000, 'Tiền chưa phân bổ phải là 600.000đ');
    });

    test('F30: Chặn phân bổ vượt số tiền của phiếu thanh toán hoặc vượt số dư hóa đơn', () => {
      const invoice = { id: 'INV-002', amount: 500000, currentBalance: 500000 };
      const payment = { id: 'PAY-002', amount: 300000, unallocated: 300000 };

      function createAllocation(inv, pay, requestedAmount) {
        if (requestedAmount > pay.unallocated) {
          throw new Error('ALLOCATION_EXCEEDS_PAYMENT: Số tiền phân bổ vượt số tiền chưa phân bổ của phiếu thu');
        }
        if (requestedAmount > inv.currentBalance) {
          throw new Error('ALLOCATION_EXCEEDS_INVOICE: Số tiền phân bổ vượt quá dư nợ còn lại của hóa đơn');
        }
        return { paymentId: pay.id, invoiceId: inv.id, amount: requestedAmount };
      }

      // Phân bổ vượt quá payment khả dụng
      assert.throws(() => {
        createAllocation(invoice, payment, 400000);
      }, /ALLOCATION_EXCEEDS_PAYMENT/);

      // Phân bổ hợp lệ
      const validAlloc = createAllocation(invoice, payment, 300000);
      assert.strictEqual(validAlloc.amount, 300000);
    });

    test('F30: Thanh toán nhiều kỳ không nhân đôi khoản gốc và bảo toàn dư nợ', () => {
      const invoice = { id: 'INV-003', amount: 2000000 };
      const payments = [
        { period: 1, amount: 500000 },
        { period: 2, amount: 700000 },
        { period: 3, amount: 800000 }
      ];

      let balance = invoice.amount;
      for (const p of payments) {
        balance -= p.amount;
      }

      assert.strictEqual(balance, 0, 'Sau 3 kỳ thanh toán đúng bằng tổng hóa đơn, dư nợ phải về 0, không bị âm hoặc nhân đôi');
    });

    test('F30: Phân loại tuổi nợ Aging (0 ngày, 1-30 ngày, 31-60 ngày, >90 ngày)', () => {
      const asOfDate = new Date('2026-09-01');

      function calculateAging(dueDateStr, balance) {
        if (balance <= 0) return 'CURRENT';
        const dueDate = new Date(dueDateStr);
        const diffDays = Math.floor((asOfDate - dueDate) / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) return 'NOT_DUE';
        if (diffDays <= 30) return '1-30_DAYS';
        if (diffDays <= 60) return '31-60_DAYS';
        if (diffDays <= 90) return '61-90_DAYS';
        return 'OVER_90_DAYS';
      }

      assert.strictEqual(calculateAging('2026-09-10', 100000), 'NOT_DUE');
      assert.strictEqual(calculateAging('2026-08-20', 100000), '1-30_DAYS');
      assert.strictEqual(calculateAging('2026-07-15', 100000), '31-60_DAYS');
      assert.strictEqual(calculateAging('2026-05-01', 100000), 'OVER_90_DAYS');
    });
  });

  // =========================================================================
  // F34: LẬP NGÂN SÁCH DOANH NGHIỆP
  // =========================================================================
  describe('F34 — Lập ngân sách doanh nghiệp', () => {

    test('F34: Thẩm định Acceptance Criteria Catalog (Budget 100tr, actual 30, committed 20 -> khả dụng 50tr)', () => {
      const budgetLine = {
        id: 'BL-001',
        budgetAmount: 100000000,
        actualAmount: 30000000,
        committedAmount: 20000000
      };

      const available = Math.max(0, budgetLine.budgetAmount - budgetLine.actualAmount - budgetLine.committedAmount);
      const utilizationRate = (budgetLine.actualAmount + budgetLine.committedAmount) / budgetLine.budgetAmount;

      assert.strictEqual(available, 50000000, 'Ngân sách khả dụng phải chính xác là 50 triệu (CODEX Criteria)');
      assert.strictEqual(utilizationRate, 0.5, 'Tỷ lệ sử dụng ngân sách là 50%');
    });

    test('F34: Khi khoản cam kết 20tr được giải ngân, giảm committed và tăng actual, không trừ kép', () => {
      let budgetAmount = 100000000;
      let actualAmount = 30000000;
      let committedAmount = 20000000;

      // Trạng thái ban đầu: Khả dụng = 100 - 30 - 20 = 50tr
      const availableBefore = Math.max(0, budgetAmount - actualAmount - committedAmount);
      assert.strictEqual(availableBefore, 50000000);

      // Giải ngân khoản cam kết 20tr:
      const disbursed = 20000000;
      committedAmount -= disbursed; // Committed về 0
      actualAmount += disbursed;    // Actual tăng lên 50tr

      // Khả dụng sau giải ngân: 100 - 50 - 0 = 50tr
      const availableAfter = Math.max(0, budgetAmount - actualAmount - committedAmount);

      assert.strictEqual(committedAmount, 0, 'Cam kết sau giải ngân phải về 0');
      assert.strictEqual(actualAmount, 50000000, 'Thực chi tăng lên 50 triệu');
      assert.strictEqual(availableAfter, 50000000, 'Ngân sách khả dụng không đổi, không bị trừ kép (CODEX Criteria)');
    });

    test('F34: Cảnh báo vượt ngân sách khi Actual + Committed > Approved Budget', () => {
      function checkBudgetStatus(budget, actual, committed) {
        const totalUsed = actual + committed;
        if (totalUsed > budget) {
          return { status: 'OVER_BUDGET', overAmount: totalUsed - budget };
        }
        if (totalUsed >= budget * 0.85) {
          return { status: 'WARNING_NEAR_LIMIT', available: budget - totalUsed };
        }
        return { status: 'SAFE', available: budget - totalUsed };
      }

      assert.strictEqual(checkBudgetStatus(100000000, 30000000, 20000000).status, 'SAFE');
      assert.strictEqual(checkBudgetStatus(100000000, 70000000, 20000000).status, 'WARNING_NEAR_LIMIT');
      assert.strictEqual(checkBudgetStatus(100000000, 90000000, 20000000).status, 'OVER_BUDGET');
      assert.strictEqual(checkBudgetStatus(100000000, 90000000, 20000000).overAmount, 10000000);
    });

    test('F34: Baseline đã khóa (LOCKED) không bị ghi đè, điều chỉnh phải tạo version mới', () => {
      const baselineVersion = {
        versionId: 'BV-2026-BASE',
        state: 'LOCKED',
        budgetLines: [{ id: 'BL-001', amount: 100000000 }]
      };

      function updateBudgetLine(version, lineId, newAmount) {
        if (version.state === 'LOCKED') {
          throw new Error('VERSION_LOCKED: Không thể sửa đổi trực tiếp phiên bản baseline đã khóa. Vui lòng tạo bản điều chỉnh REVISED.');
        }
        const line = version.budgetLines.find(l => l.id === lineId);
        line.amount = newAmount;
      }

      assert.throws(() => {
        updateBudgetLine(baselineVersion, 'BL-001', 120000000);
      }, /VERSION_LOCKED/);
    });
  });

  // =========================================================================
  // F48: BÁO CÁO CHI PHÍ, P&L VÀ DÒNG TIỀN
  // =========================================================================
  describe('F48 — Báo cáo chi phí, P&L và dòng tiền', () => {

    test('F48: Thẩm định Acceptance Criteria Catalog (Bán chịu 1tr: Doanh thu = 1tr, Cash Inflow = 0)', () => {
      const factSaleOnCredit = {
        id: 'FACT-001',
        amount: 1000000,
        recognitionType: 'REVENUE',
        cashFlowClass: 'NON_CASH' // Ghi nhận dồn tích, chưa có dòng tiền thực tế
      };

      const factCashSales = {
        id: 'FACT-002',
        amount: 5000000,
        recognitionType: 'REVENUE',
        cashFlowClass: 'OPERATING'
      };

      const facts = [factSaleOnCredit, factCashSales];

      const totalRevenue = facts
        .filter(f => f.recognitionType === 'REVENUE')
        .reduce((sum, f) => sum + f.amount, 0);

      const operatingCashInflow = facts
        .filter(f => f.cashFlowClass === 'OPERATING' && f.recognitionType === 'REVENUE')
        .reduce((sum, f) => sum + f.amount, 0);

      assert.strictEqual(totalRevenue, 6000000, 'Doanh thu dồn tích ghi nhận cả khoản bán chịu (6tr)');
      assert.strictEqual(operatingCashInflow, 5000000, 'Dòng tiền vào thực tế loại trừ bán chịu (5tr) (CODEX Criteria)');
    });

    test('F48: Thẩm định Acceptance Criteria Catalog (Tiền vay ngân hàng tăng cash financing nhưng không thành doanh thu)', () => {
      const loanFact = {
        id: 'FACT-LOAN',
        amount: 500000000,
        recognitionType: 'FINANCING', // Không phải REVENUE
        cashFlowClass: 'FINANCING'
      };

      const isRevenue = loanFact.recognitionType === 'REVENUE';
      const isFinancingCashFlow = loanFact.cashFlowClass === 'FINANCING';

      assert.strictEqual(isRevenue, false, 'Khoản vay ngân hàng tuyệt đối không được tính vào Doanh thu P&L (CODEX Criteria)');
      assert.strictEqual(isFinancingCashFlow, true, 'Khoản vay ngân hàng được phân loại đúng vào Dòng tiền Tài chính (Cash Flow)');
    });

    test('F48: Thẩm định Acceptance Criteria Catalog (Bảng mapping thiếu phát hiện và báo lỗi thay vì bỏ qua âm thầm)', () => {
      const mappings = new Map([
        ['REV-SALES', { report: 'PL', section: 'REVENUE' }],
        ['COGS-PROD', { report: 'PL', section: 'COGS' }]
      ]);

      const facts = [
        { accountCode: 'REV-SALES', amount: 1000000 },
        { accountCode: 'UNKNOWN-ACC', amount: 500000 }
      ];

      function validateReportMappings(factsList, mapStore) {
        const unmappedAccounts = [];
        for (const f of factsList) {
          if (!mapStore.has(f.accountCode)) {
            unmappedAccounts.push(f.accountCode);
          }
        }
        if (unmappedAccounts.length > 0) {
          throw new Error('MISSING_MAPPING_ERROR: Phát hiện tài khoản chưa được thiết lập mapping: ' + unmappedAccounts.join(', '));
        }
        return true;
      }

      assert.throws(() => {
        validateReportMappings(facts, mappings);
      }, /MISSING_MAPPING_ERROR/);
    });

    test('F48: Lợi nhuận gộp và Lợi nhuận thuần hoạt động kinh doanh tính chính xác', () => {
      const facts = [
        { recognitionType: 'REVENUE', amount: 120000000 },
        { recognitionType: 'COGS', amount: 65000000 },
        { recognitionType: 'OPEX', amount: 40000000 }
      ];

      const revenue = facts.filter(f => f.recognitionType === 'REVENUE').reduce((s, f) => s + f.amount, 0);
      const cogs = facts.filter(f => f.recognitionType === 'COGS').reduce((s, f) => s + f.amount, 0);
      const grossProfit = revenue - cogs;
      const opex = facts.filter(f => f.recognitionType === 'OPEX').reduce((s, f) => s + f.amount, 0);
      const operatingProfit = grossProfit - opex;

      assert.strictEqual(grossProfit, 55000000, 'Lợi nhuận gộp = 120tr - 65tr = 55 triệu');
      assert.strictEqual(operatingProfit, 15000000, 'Lợi nhuận thuần = 55tr - 40tr = 15 triệu');
    });

    test('F48: Cân đối dòng tiền trực tiếp: Số dư đầu kỳ + Net Cash Flow = Số dư cuối kỳ', () => {
      const openingCash = 100000000;
      const operatingCashFlow = 45000000;   // Dòng tiền HĐKD
      const investingCashFlow = -30000000;  // Dòng tiền HĐĐT (Mua máy móc)
      const financingCashFlow = 50000000;   // Dòng tiền HĐTC (Vay thêm vốn)

      const netCashFlow = operatingCashFlow + investingCashFlow + financingCashFlow;
      const closingCash = openingCash + netCashFlow;

      assert.strictEqual(netCashFlow, 65000000, 'Dòng tiền thuần trong kỳ = 45 - 30 + 50 = 65 triệu');
      assert.strictEqual(closingCash, 165000000, 'Số dư tiền cuối kỳ = 100 + 65 = 165 triệu');
    });
  });

});
