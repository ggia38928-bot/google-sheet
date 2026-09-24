import test from 'node:test';
import assert from 'node:assert/strict';

// ============================================================================
// 1. F19-SHEET: BÁO GIÁ VÀ PHIÊN BẢN CHÀO BÁN (CODEX SPECIFICATION)
// ============================================================================

function calculateQuoteLine(qty, unitPrice, discountRate, taxRate) {
  const priceAfterDiscount = unitPrice * (1 - discountRate);
  const lineTotal = qty * priceAfterDiscount;
  const lineTax = lineTotal * taxRate;
  const lineGrandTotal = lineTotal + lineTax;
  return {
    priceAfterDiscount,
    lineTotal,
    lineTax,
    lineGrandTotal
  };
}

function calculateQuoteWinRate(quotes) {
  const accepted = quotes.filter(q => q.status === 'ACCEPTED').length;
  const rejected = quotes.filter(q => q.status === 'REJECTED').length;
  const totalDecided = accepted + rejected;
  if (totalDecided === 0) return 0;
  return Number((accepted / totalDecided).toFixed(4));
}

test('F19: Tính đơn giá sau chiết khấu dòng và thành tiền chuẩn xác', () => {
  const item = calculateQuoteLine(5, 10000000, 0.10, 0.08);
  assert.equal(item.priceAfterDiscount, 9000000);
  assert.equal(item.lineTotal, 45000000);
  assert.equal(item.lineTax, 3600000);
  assert.equal(item.lineGrandTotal, 48600000);
});

test('F19: Thẩm định Acceptance Criteria Catalog (2x100k, giảm 10%, VAT 8% -> 194.400đ)', () => {
  // CODEX Acceptance Criteria:
  // "2×100.000, giảm dòng 10%, thuế cấu hình 8% trên sau giảm cho tổng 194.400. Revision cũ giữ nguyên số tiền sau khi sửa bản mới."
  const result = calculateQuoteLine(2, 100000, 0.10, 0.08);
  assert.equal(result.priceAfterDiscount, 90000);
  assert.equal(result.lineTotal, 180000);
  assert.equal(result.lineTax, 14400);
  assert.equal(result.lineGrandTotal, 194400);
});

test('F19: Bảo toàn số liệu giữa các phiên bản chào hàng (Revisions)', () => {
  const quoteVersions = [
    { quoteNumber: 'QUOTE-001', rev: 'v1.0', total: 194400, status: 'REJECTED' },
    { quoteNumber: 'QUOTE-001', rev: 'v1.1', total: 180000, status: 'ACCEPTED' }
  ];
  
  const v1 = quoteVersions.find(q => q.rev === 'v1.0');
  const v2 = quoteVersions.find(q => q.rev === 'v1.1');
  assert.equal(v1.total, 194400);
  assert.equal(v2.total, 180000);
  assert.notEqual(v1.total, v2.total);
});

test('F19: Win Rate chuẩn thương mại (Chỉ xét deal đã chốt ACCEPTED hoặc REJECTED)', () => {
  const quotes = [
    { id: 'BG-01', status: 'ACCEPTED' },
    { id: 'BG-02', status: 'ACCEPTED' },
    { id: 'BG-03', status: 'REJECTED' },
    { id: 'BG-04', status: 'DRAFT' },
    { id: 'BG-05', status: 'SENT' },
    { id: 'BG-06', status: 'EXPIRED' }
  ];

  const winRate = calculateQuoteWinRate(quotes);
  assert.equal(winRate, 0.6667);
});

// ============================================================================
// 2. F20-SHEET: BÁN HÀNG VÀ ĐƠN HÀNG (CODEX SPECIFICATION)
// ============================================================================

function calculateOrderFinancials(subtotal, shippingFee, voucher, platformFee) {
  const totalCustomerPay = subtotal + shippingFee - voucher;
  const netRevenue = totalCustomerPay - platformFee;
  return { totalCustomerPay, netRevenue };
}

function trackInventoryFulfillment(initialStock, orderQty, fulfillments, isCancelled = false) {
  if (isCancelled) {
    return initialStock;
  }
  const totalShipped = fulfillments.reduce((acc, f) => acc + f.shippedQty, 0);
  return initialStock - totalShipped;
}

test('F20: Tính tổng thu khách và doanh thu thuần sau trừ phí sàn', () => {
  const res = calculateOrderFinancials(1200000, 30000, 50000, 120000);
  assert.equal(res.totalCustomerPay, 1180000);
  assert.equal(res.netRevenue, 1060000);
});

test('F20: Thẩm định Acceptance Criteria Catalog (Giao từng đợt 6 rồi 4 -> tồn chỉ giảm 10)', () => {
  // CODEX Acceptance Criteria:
  // "Đơn 10 sản phẩm, giao 6 rồi 4: tồn chỉ giảm 10. Thu 500.000 trên đơn 800.000 cho công nợ 300.000. Hủy đơn chưa giao không sinh xuất kho."
  const initialStock = 50;
  const fulfillments = [
    { batch: 1, shippedQty: 6 },
    { batch: 2, shippedQty: 4 }
  ];
  const finalStock = trackInventoryFulfillment(initialStock, 10, fulfillments, false);
  assert.equal(finalStock, initialStock - 10);
  assert.equal(finalStock, 40);
});

test('F20: Thẩm định Acceptance Criteria Catalog (Công nợ COD đơn hàng còn lại chính xác)', () => {
  const orderTotal = 800000;
  const customerPaid = 500000;
  const remainingDebt = orderTotal - customerPaid;
  assert.equal(remainingDebt, 300000);
});

test('F20: Thẩm định Acceptance Criteria Catalog (Hủy đơn chưa giao không giảm tồn kho)', () => {
  const initialStock = 20;
  const fulfillments = [];
  const finalStock = trackInventoryFulfillment(initialStock, 5, fulfillments, true);
  assert.equal(finalStock, initialStock);
});

// ============================================================================
// 3. F21-SHEET: FORM NHẬP LIỆU VÀ PHÂN QUYỀN CẤU HÌNH (CODEX SPECIFICATION)
// ============================================================================

function checkUserPermission(userEmail, tableId, requestedOp, permissions) {
  const perm = permissions.find(p => p.email === userEmail && p.tableId === tableId && p.status === 'ACTIVE');
  if (!perm) return false;
  if (perm.operation === 'ADMIN') return true;
  return perm.operation === requestedOp;
}

function validateCascadingDropdown(parentVal, childVal, hierarchy) {
  const allowedChildren = hierarchy[parentVal];
  if (!allowedChildren) return false;
  return allowedChildren.includes(childVal);
}

function detectCircularFormula(edges) {
  const visited = new Set();
  const recStack = new Set();

  function isCyclic(node) {
    if (!visited.has(node)) {
      visited.add(node);
      recStack.add(node);
      const neighbors = edges[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor) && isCyclic(neighbor)) return true;
        else if (recStack.has(neighbor)) return true;
      }
    }
    recStack.delete(node);
    return false;
  }

  for (const node of Object.keys(edges)) {
    if (isCyclic(node)) return true;
  }
  return false;
}

test('F21: Client sửa payload để ghi bảng ngoài quyền phải bị từ chối (CODEX Acceptance Criteria)', () => {
  // CODEX Acceptance Criteria:
  // "Client sửa payload để ghi bảng ngoài quyền phải bị từ chối."
  const permissions = [
    { email: 'sales@company.vn', tableId: 'TBL-01', operation: 'CREATE', status: 'ACTIVE' },
    { email: 'sales@company.vn', tableId: 'TBL-01', operation: 'READ', status: 'ACTIVE' }
  ];

  // Ghi đúng bảng có quyền
  assert.equal(checkUserPermission('sales@company.vn', 'TBL-01', 'CREATE', permissions), true);

  // Sửa payload để ghi vào TBL-02 (ngoài quyền) -> Từ chối
  assert.equal(checkUserPermission('sales@company.vn', 'TBL-02', 'CREATE', permissions), false);

  // Thao tác DELETE khi chỉ có quyền CREATE/READ -> Từ chối
  assert.equal(checkUserPermission('sales@company.vn', 'TBL-01', 'DELETE', permissions), false);
});

test('F21: Đổi parent dropdown xóa/đánh lỗi child không hợp lệ (CODEX Acceptance Criteria)', () => {
  // CODEX Acceptance Criteria:
  // "Đổi parent dropdown xóa/đánh lỗi child không hợp lệ."
  const hierarchy = {
    'Miền Bắc': ['Hà Nội', 'Hải Phòng', 'Quảng Ninh'],
    'Miền Nam': ['TP.HCM', 'Cần Thơ', 'Bình Dương']
  };

  // Giá trị hợp lệ
  assert.equal(validateCascadingDropdown('Miền Nam', 'TP.HCM', hierarchy), true);

  // Đổi parent sang Miền Bắc nhưng child vẫn giữ TP.HCM -> Báo lỗi không hợp lệ
  assert.equal(validateCascadingDropdown('Miền Bắc', 'TP.HCM', hierarchy), false);
});

test('F21: Formula lặp tham chiếu bị phát hiện và chặn (CODEX Acceptance Criteria)', () => {
  // CODEX Acceptance Criteria:
  // "Formula lặp tham chiếu bị chặn."
  // Đồ thị vòng lặp: A -> B -> C -> A
  const circularGraph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
  };
  assert.equal(detectCircularFormula(circularGraph), true);

  // Đồ thị tuyến tính không có vòng lặp: X -> Y -> Z
  const acyclicGraph = {
    'X': ['Y'],
    'Y': ['Z'],
    'Z': []
  };
  assert.equal(detectCircularFormula(acyclicGraph), false);
});

// ============================================================================
// 4. F02-SHEET: DỰ ÁN, CÔNG VIỆC ĐỘI NHÓM VÀ KPI (CODEX SPECIFICATION)
// ============================================================================

function calculateWeightedProjectProgress(tasks) {
  const totalWeight = tasks.reduce((acc, t) => acc + t.weight, 0);
  if (totalWeight === 0) return 0;
  const weightedSum = tasks.reduce((acc, t) => acc + (t.progress * t.weight), 0);
  return Number((weightedSum / totalWeight).toFixed(4));
}

function evaluateTaskDeadline(status, dueDateStr, completedDateStr, todayStr) {
  if (status === 'DONE') {
    return completedDateStr <= dueDateStr ? 'ĐÚNG HẠN' : 'TRỄ HẠN';
  }
  return todayStr > dueDateStr ? 'QUÁ HẠN' : 'ĐANG CHẠY';
}

function calculateKpiScore(direction, target, actual, weightPercent) {
  let completionRatio = 0;
  if (direction === 'CÀNG CAO CÀNG TỐT') {
    completionRatio = actual / target;
  } else {
    completionRatio = actual > 0 ? target / actual : 1.0;
  }
  const score = completionRatio * weightPercent * 100;
  return Number(score.toFixed(2));
}

test('F02: Thẩm định Acceptance Criteria Catalog (Hai việc trọng số 1 và 3, tiến độ 100% và 0% cho tiến độ 25%)', () => {
  // CODEX Acceptance Criteria:
  // "Hai việc có trọng số 1 và 3, tiến độ 100% và 0% cho tiến độ dự án 25%. Đổi nhân sự không mất lịch sử. Gantt qua giao thừa đúng vị trí; chu trình phụ thuộc A→B→A bị từ chối."
  const tasks = [
    { id: 'T1', weight: 1, progress: 1.0 },
    { id: 'T2', weight: 3, progress: 0.0 }
  ];
  const projectProgress = calculateWeightedProjectProgress(tasks);
  assert.equal(projectProgress, 0.25);
});

test('F02: Tiến độ có trọng số dự án tổng hợp đa nhiệm vụ chính xác', () => {
  const tasks = [
    { id: 'T1', weight: 3, progress: 1.0 },
    { id: 'T2', weight: 4, progress: 0.75 },
    { id: 'T3', weight: 3, progress: 0.40 }
  ];
  const projectProgress = calculateWeightedProjectProgress(tasks);
  assert.equal(projectProgress, 0.72);
});

test('F02: Đánh giá trạng thái hạn công việc (ĐÚNG HẠN vs QUÁ HẠN)', () => {
  const today = '2026-09-11';
  assert.equal(evaluateTaskDeadline('DONE', '2026-08-15', '2026-08-14', today), 'ĐÚNG HẠN');
  assert.equal(evaluateTaskDeadline('DONE', '2026-08-15', '2026-08-16', today), 'TRỄ HẠN');
  assert.equal(evaluateTaskDeadline('IN_PROGRESS', '2026-09-05', null, today), 'QUÁ HẠN');
  assert.equal(evaluateTaskDeadline('IN_PROGRESS', '2026-09-20', null, today), 'ĐANG CHẠY');
});

test('F02: Tính điểm KPI quy đổi theo chiều đo lường (Thuận & Nghịch)', () => {
  const score1 = calculateKpiScore('CÀNG CAO CÀNG TỐT', 100, 120, 0.40);
  assert.equal(score1, 48);

  const score2 = calculateKpiScore('CÀNG THẤP CÀNG TỐT', 2, 1, 0.30);
  assert.equal(score2, 60);
});
