'use strict';

const engine = require('../../../../packages/core-engine/src/kd_bao_gia_don_hang.js');

const money = value => Math.round(Number(value || 0) * 100) / 100;

function buildDashboard(data, today = new Date().toISOString().slice(0, 10)) {
  const quoteTotals = engine.calculateQuoteTotals(data.BAO_GIA, data.CHI_TIET_BAO_GIA);
  const receivables = engine.calculateReceivables(data.DON_HANG, data.CHI_TIET_DON_HANG, data.THANH_TOAN);
  const latestQuotes = data.BAO_GIA.filter(item => item.LA_REVISION_MOI_NHAT);
  const activeOrders = data.DON_HANG.filter(item => item.TRANG_THAI !== 'HỦY');
  const base = engine.calculateDashboard(data);
  const overdue = activeOrders.filter(order => order.HAN_THANH_TOAN < today && receivables[order.MA_DON_HANG].receivable > 0);

  const kpis = [
    ['Khách hàng hoạt động', data.KHACH_HANG.filter(item => item.TRANG_THAI === 'ĐANG HOẠT ĐỘNG').length, 'số'],
    ['Báo giá hiện hành', latestQuotes.length, 'số'],
    ['Giá trị báo giá đã gửi', base.sentQuoteValue, 'tiền'],
    ['Tỷ lệ chuyển đổi', base.conversionRate, 'tỷ lệ'],
    ['Đơn hàng đang theo dõi', activeOrders.length, 'số'],
    ['Giá trị đơn hàng', base.confirmedOrderValue, 'tiền'],
    ['Đã thu xác nhận', base.confirmedCollected, 'tiền'],
    ['Còn phải thu', base.receivable, 'tiền'],
    ['Đơn hàng quá hạn', overdue.length, 'số'],
    ['Giá trị quá hạn', money(overdue.reduce((sum, order) => sum + receivables[order.MA_DON_HANG].receivable, 0)), 'tiền']
  ].map(([label, value, format]) => ({ label, value, format }));

  const statusMap = {};
  for (const quote of latestQuotes) statusMap[quote.TRANG_THAI] = (statusMap[quote.TRANG_THAI] || 0) + 1;
  const customerMap = {};
  for (const order of activeOrders) customerMap[order.MA_KHACH_HANG] = money((customerMap[order.MA_KHACH_HANG] || 0) + receivables[order.MA_DON_HANG].receivable);
  const monthMap = {};
  for (const quote of latestQuotes) {
    const month = quote.NGAY_BAO_GIA.slice(0, 7);
    monthMap[month] = money((monthMap[month] || 0) + quoteTotals[quote.MA_BAO_GIA_REVISION]);
  }
  const customerNames = Object.fromEntries(data.KHACH_HANG.map(item => [item.MA_KHACH_HANG, item.TEN_KHACH_HANG]));

  return {
    kpis,
    charts: [
      { title: 'Báo giá theo trạng thái', format: 'số', values: Object.entries(statusMap).map(([label, value]) => ({ label, value })) },
      { title: 'Công nợ theo khách hàng', format: 'tiền', values: Object.entries(customerMap).map(([id, value]) => ({ label: customerNames[id] || id, value })) },
      { title: 'Giá trị báo giá theo tháng', format: 'tiền', values: Object.entries(monthMap).sort().map(([label, value]) => ({ label, value })) }
    ]
  };
}

module.exports = { buildDashboard };
