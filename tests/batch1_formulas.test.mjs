import test from 'node:test';
import assert from 'node:assert/strict';

// ============================================================================
// 1. F17-SHEET: SỔ THU CHI & DÒNG TIỀN STARTUP TEST SUITE
// ============================================================================
function calculateAccountBalance(opening, receiveLines, payLines) {
  const sumIn = receiveLines
    .filter(line => line.state === 'POSTED')
    .reduce((acc, line) => acc + line.amount, 0);
  const sumOut = payLines
    .filter(line => line.state === 'POSTED')
    .reduce((acc, line) => acc + line.amount, 0);
  return opening + sumIn - sumOut;
}

function calculateRunway(totalCash, totalIncome, totalExpense) {
  const netBurn = totalExpense - totalIncome;
  if (netBurn > 0) {
    return Number((totalCash / netBurn).toFixed(1));
  }
  return 'DƯƠNG TIỀN';
}

test('F17: Số dư tài khoản chính xác theo Opening + Thu - Chi (chỉ POSTED)', () => {
  const opening = 15000000;
  const inLines = [
    { amount: 10000000, state: 'POSTED' },
    { amount: 5000000, state: 'DRAFT' },     // Không được cộng
    { amount: 2000000, state: 'CANCELLED' } // Không được cộng
  ];
  const outLines = [
    { amount: 4000000, state: 'POSTED' },
    { amount: 1000000, state: 'DRAFT' }      // Không được trừ
  ];
  const balance = calculateAccountBalance(opening, inLines, outLines);
  assert.equal(balance, 15000000 + 10000000 - 4000000);
  assert.equal(balance, 21000000);
});

test('F17: Chuyển khoản nội bộ bảo toàn tổng tiền hệ thống và không tạo doanh thu/chi phí', () => {
  const accountA = { opening: 85000000, in: [], out: [{ amount: 5000000, state: 'POSTED' }] };
  const accountB = { opening: 15000000, in: [{ amount: 5000000, state: 'POSTED' }], out: [] };

  const balanceA = calculateAccountBalance(accountA.opening, accountA.in, accountA.out);
  const balanceB = calculateAccountBalance(accountB.opening, accountB.in, accountB.out);

  assert.equal(balanceA, 80000000);
  assert.equal(balanceB, 20000000);
  assert.equal(balanceA + balanceB, 85000000 + 15000000); // Bảo toàn 100.000.000đ
});

test('F17: Tính Runway an toàn khi burn dương và khi dòng tiền thặng dư', () => {
  // Đốt tiền: Cash 120tr, Thu 30tr, Chi 50tr -> Net burn = 20tr -> Runway = 6.0 tháng
  assert.equal(calculateRunway(120000000, 30000000, 50000000), 6.0);
  // Dòng tiền dương: Thu 60tr, Chi 40tr -> Net burn = -20tr -> Runway an toàn 'DƯƠNG TIỀN'
  assert.equal(calculateRunway(120000000, 60000000, 40000000), 'DƯƠNG TIỀN');
  // Hòa vốn: Thu 50tr, Chi 50tr -> Runway 'DƯƠNG TIỀN'
  assert.equal(calculateRunway(120000000, 50000000, 50000000), 'DƯƠNG TIỀN');
});

// ============================================================================
// 2. F18-SHEET: QUẢN LÝ KHO & NHẬP XUẤT TỒN TEST SUITE
// ============================================================================
function calculateCurrentStock(opening, movements, sku) {
  let inQty = 0;
  let outQty = 0;
  let adjQty = 0;

  for (const m of movements) {
    if (m.sku !== sku || m.state !== 'POSTED') continue;
    if (m.type === 'NHẬP') inQty += m.qty;
    else if (m.type === 'XUẤT') outQty += m.qty;
    else if (m.type === 'ĐIỀU CHỈNH') adjQty += m.qty;
  }
  return opening + inQty - outQty + adjQty;
}

function getStockStatus(currentStock, minStock) {
  if (currentStock <= 0) return 'HẾT HÀNG';
  if (currentStock <= minStock) return 'CẦN NHẬP';
  return 'ĐỦ TỒN';
}

test('F18: Tồn cuối kỳ = Tồn đầu + Nhập - Xuất ± Điều chỉnh', () => {
  const opening = 10;
  const movements = [
    { sku: 'SKU-01', type: 'NHẬP', qty: 15, state: 'POSTED' },
    { sku: 'SKU-01', type: 'XUẤT', qty: 8, state: 'POSTED' },
    { sku: 'SKU-01', type: 'ĐIỀU CHỈNH', qty: -1, state: 'POSTED' },
    { sku: 'SKU-01', type: 'XUẤT', qty: 5, state: 'DRAFT' } // Bị bỏ qua
  ];
  const stock = calculateCurrentStock(opening, movements, 'SKU-01');
  assert.equal(stock, 10 + 15 - 8 - 1);
  assert.equal(stock, 16);
});

test('F18: Chuyển kho nội bộ bảo toàn tổng lượng hàng tồn', () => {
  const wh1 = { opening: 20, movements: [{ sku: 'SKU-01', type: 'XUẤT', qty: 5, state: 'POSTED' }] };
  const wh2 = { opening: 0, movements: [{ sku: 'SKU-01', type: 'NHẬP', qty: 5, state: 'POSTED' }] };

  const stock1 = calculateCurrentStock(wh1.opening, wh1.movements, 'SKU-01');
  const stock2 = calculateCurrentStock(wh2.opening, wh2.movements, 'SKU-01');

  assert.equal(stock1, 15);
  assert.equal(stock2, 5);
  assert.equal(stock1 + stock2, 20); // Tổng không đổi
});

test('F18: Phân loại trạng thái tồn kho (HẾT HÀNG, CẦN NHẬP, ĐỦ TỒN)', () => {
  const minStock = 10;
  assert.equal(getStockStatus(15, minStock), 'ĐỦ TỒN');
  assert.equal(getStockStatus(10, minStock), 'CẦN NHẬP');
  assert.equal(getStockStatus(7, minStock), 'CẦN NHẬP');
  assert.equal(getStockStatus(0, minStock), 'HẾT HÀNG');
  assert.equal(getStockStatus(-2, minStock), 'HẾT HÀNG');
});

// ============================================================================
// 3. F05-SHEET: CRM KHÁCH HÀNG & PIPELINE BÁN HÀNG TEST SUITE
// ============================================================================
function calculateCrmMetrics(deals) {
  let wonCount = 0;
  let lostCount = 0;
  let openCount = 0;
  let openPipelineValue = 0;
  let weightedPipelineValue = 0;

  for (const d of deals) {
    if (d.stage === 'THẮNG') {
      wonCount++;
    } else if (d.stage === 'THUA') {
      lostCount++;
    } else {
      openCount++;
      openPipelineValue += d.value;
      weightedPipelineValue += Math.round(d.value * d.prob);
    }
  }

  const closedCount = wonCount + lostCount;
  const winRate = closedCount > 0 ? wonCount / closedCount : 0;

  return { wonCount, lostCount, openCount, winRate, openPipelineValue, weightedPipelineValue };
}

test('F05: Win Rate chuẩn thương mại (Mẫu số chỉ tính deal đã đóng WON + LOST)', () => {
  const deals = [
    { id: 'D1', stage: 'THẮNG', value: 50000000, prob: 1.0 },
    { id: 'D2', stage: 'THẮNG', value: 40000000, prob: 1.0 },
    { id: 'D3', stage: 'THUA', value: 20000000, prob: 0.0 },
    { id: 'D4', stage: 'MỚI', value: 30000000, prob: 0.1 },
    { id: 'D5', stage: 'BÁO GIÁ', value: 60000000, prob: 0.6 }
  ];
  const metrics = calculateCrmMetrics(deals);

  // Thắng 2, Thua 1, Mở 2 -> Win Rate = 2 / (2 + 1) = 2/3 (66.7%), KHÔNG PHẢI 2/5 (40%)
  assert.equal(metrics.wonCount, 2);
  assert.equal(metrics.lostCount, 1);
  assert.equal(metrics.openCount, 2);
  assert.equal(Number(metrics.winRate.toFixed(4)), Number((2/3).toFixed(4)));

  // Pipeline mở: 30tr + 60tr = 90tr
  assert.equal(metrics.openPipelineValue, 90000000);
  // Trọng số: 30tr * 0.1 + 60tr * 0.6 = 3tr + 36tr = 39tr
  assert.equal(metrics.weightedPipelineValue, 39000000);
});

test('F05: Xử lý an toàn khi chưa có deal đóng nào (mẫu số = 0)', () => {
  const deals = [
    { id: 'D1', stage: 'MỚI', value: 10000000, prob: 0.1 },
    { id: 'D2', stage: 'TIẾP CẬN', value: 20000000, prob: 0.3 }
  ];
  const metrics = calculateCrmMetrics(deals);
  assert.equal(metrics.winRate, 0); // Không văng lỗi chia 0
});

// ============================================================================
// 4. F24-SHEET: MINI ERP QUẢN TRỊ KHÉP KÍN TEST SUITE
// ============================================================================
function calculateRemainingDebt(total, paid) {
  return Math.max(0, total - paid);
}

function calculateGrossProfit(salesOrders, cogsOutLines) {
  const totalRevenue = salesOrders.reduce((acc, so) => acc + so.total, 0);
  const totalCogs = cogsOutLines.reduce((acc, line) => acc + line.cogs, 0);
  return totalRevenue - totalCogs;
}

test('F24: Công nợ phải thu và phải trả giảm trừ chính xác, không âm', () => {
  // Khách mua 50tr, trả 20tr -> nợ 30tr
  assert.equal(calculateRemainingDebt(50000000, 20000000), 30000000);
  // Khách trả đủ 50tr -> nợ 0
  assert.equal(calculateRemainingDebt(50000000, 50000000), 0);
  // Khách trả dư 60tr -> nợ kẹp tối thiểu 0
  assert.equal(calculateRemainingDebt(50000000, 60000000), 0);
});

test('F24: Lợi nhuận gộp ước tính = Doanh số - Giá vốn hàng xuất bán', () => {
  const salesOrders = [
    { id: 'SO-01', total: 52000000 },
    { id: 'SO-02', total: 78000000 }
  ];
  const cogsLines = [
    { soId: 'SO-01', cogs: 35000000 }, // 10 cái * 3.5tr
    { soId: 'SO-02', cogs: 44000000 }  // 5 * 3.5tr + 5 * 1.8tr + ...
  ];
  const profit = calculateGrossProfit(salesOrders, cogsLines);
  const expectedProfit = (52000000 + 78000000) - (35000000 + 44000000);
  assert.equal(profit, expectedProfit);
  assert.equal(profit, 51000000);
});

test('F24: Tính toàn vẹn luồng dữ liệu khép kín (Đơn bán -> Thu tiền -> Số dư quỹ)', () => {
  let customerDebt = 52000000;
  let cashBalance = 10000000;

  // Khách thanh toán 52tr
  const paymentAmount = 52000000;
  customerDebt = calculateRemainingDebt(customerDebt, paymentAmount);
  cashBalance += paymentAmount;

  assert.equal(customerDebt, 0);
  assert.equal(cashBalance, 62000000);
});
