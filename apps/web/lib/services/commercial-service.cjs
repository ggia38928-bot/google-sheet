'use strict';

const engine = require('../../../../packages/core-engine/src/kd_bao_gia_don_hang.js');
const { buildDashboard } = require('../view-models/dashboard.cjs');

const clone = value => JSON.parse(JSON.stringify(value));
const nextId = (rows, key, prefix) => {
  const number = rows.reduce((max, row) => Math.max(max, Number(String(row[key]).replace(/\D/g, '')) || 0), 0) + 1;
  return `${prefix}-${String(number).padStart(3, '0')}`;
};

function createCommercialService(repository, clock = () => new Date()) {
  function enrich() {
    const data = repository.snapshot();
    const customers = Object.fromEntries(data.KHACH_HANG.map(item => [item.MA_KHACH_HANG, item]));
    const products = Object.fromEntries(data.SAN_PHAM.map(item => [item.MA_SAN_PHAM, item]));
    const quoteTotals = engine.calculateQuoteTotals(data.BAO_GIA, data.CHI_TIET_BAO_GIA);
    const receivables = engine.calculateReceivables(data.DON_HANG, data.CHI_TIET_DON_HANG, data.THANH_TOAN);
    return { data, customers, products, quoteTotals, receivables };
  }

  function customers() {
    const { data, receivables } = enrich();
    return data.KHACH_HANG.map(customer => ({
      ...customer,
      CONG_NO: data.DON_HANG.filter(order => order.MA_KHACH_HANG === customer.MA_KHACH_HANG)
        .reduce((sum, order) => sum + receivables[order.MA_DON_HANG].receivable, 0)
    }));
  }

  function customer(id) {
    const profile = customers().find(item => item.MA_KHACH_HANG === id);
    if (!profile) return null;
    return { ...profile, quotes: quotes().filter(item => item.MA_KHACH_HANG === id), orders: orders().filter(item => item.MA_KHACH_HANG === id) };
  }

  function quotes() {
    const { data, customers: customerMap, quoteTotals } = enrich();
    return data.BAO_GIA.map(quote => ({ ...quote, TEN_KHACH_HANG: customerMap[quote.MA_KHACH_HANG]?.TEN_KHACH_HANG, TONG_TIEN: quoteTotals[quote.MA_BAO_GIA_REVISION] }));
  }

  function quote(id) {
    const { data, customers: customerMap, products, quoteTotals } = enrich();
    const found = data.BAO_GIA.find(item => item.MA_BAO_GIA_REVISION === id);
    if (!found) return null;
    const lines = data.CHI_TIET_BAO_GIA.filter(item => item.MA_BAO_GIA_REVISION === id).map(line => ({
      ...line,
      TEN_SAN_PHAM: products[line.MA_SAN_PHAM]?.TEN_SAN_PHAM,
      ...engine.calculateQuoteLine(line.SO_LUONG, line.DON_GIA, line.TY_LE_CHIET_KHAU, line.THUE_SUAT)
    }));
    return { ...found, TEN_KHACH_HANG: customerMap[found.MA_KHACH_HANG]?.TEN_KHACH_HANG, TONG_TIEN: quoteTotals[id], lines };
  }

  function createQuote(input) {
    const data = repository.snapshot();
    if (!data.KHACH_HANG.some(item => item.MA_KHACH_HANG === input.MA_KHACH_HANG)) throw new Error('Khách hàng không tồn tại.');
    if (!Array.isArray(input.lines) || input.lines.length === 0) throw new Error('Báo giá phải có ít nhất một dòng hàng.');
    const baseId = nextId(data.BAO_GIA, 'MA_BAO_GIA', 'BG');
    const revisionId = `${baseId}-R1`;
    const date = input.NGAY_BAO_GIA || clock().toISOString().slice(0, 10);
    const header = {
      MA_BAO_GIA_REVISION: revisionId, MA_BAO_GIA: baseId, REVISION: 1, LA_REVISION_MOI_NHAT: true,
      MA_KHACH_HANG: input.MA_KHACH_HANG, NGAY_BAO_GIA: date, HAN_HIEU_LUC: input.HAN_HIEU_LUC || date,
      TRANG_THAI: 'NHÁP', NGUOI_PHU_TRACH: input.NGUOI_PHU_TRACH || 'Chưa phân công'
    };
    input.lines.forEach(line => {
      if (!data.SAN_PHAM.some(item => item.MA_SAN_PHAM === line.MA_SAN_PHAM)) throw new Error('Sản phẩm không tồn tại.');
      engine.calculateQuoteLine(line.SO_LUONG, line.DON_GIA, line.TY_LE_CHIET_KHAU, line.THUE_SUAT);
    });
    repository.append('BAO_GIA', header);
    input.lines.forEach((line, index) => {
      repository.append('CHI_TIET_BAO_GIA', { MA_DONG_BAO_GIA: `${revisionId}-D${index + 1}`, MA_BAO_GIA_REVISION: revisionId, ...line });
    });
    return quote(revisionId);
  }

  function updateQuote(id, input) {
    const allowed = ['HAN_HIEU_LUC', 'TRANG_THAI', 'NGUOI_PHU_TRACH'];
    const change = Object.fromEntries(allowed.filter(key => input[key] !== undefined).map(key => [key, input[key]]));
    const result = repository.update('BAO_GIA', item => item.MA_BAO_GIA_REVISION === id, change);
    if (!result) throw new Error('Không tìm thấy báo giá.');
    return quote(id);
  }

  function convertQuote(id) {
    const data = repository.snapshot();
    const conversion = engine.convertAcceptedQuote(data.BAO_GIA, data.DON_HANG, id);
    if (!conversion.created) return conversion;
    const today = clock().toISOString().slice(0, 10);
    const due = new Date(`${today}T00:00:00Z`); due.setUTCDate(due.getUTCDate() + 30);
    repository.append('DON_HANG', { ...conversion.order, NGAY_DAT: today, HAN_THANH_TOAN: due.toISOString().slice(0, 10), KENH_BAN: 'WEB APP', NGUOI_PHU_TRACH: 'Chưa phân công' });
    data.CHI_TIET_BAO_GIA.filter(line => line.MA_BAO_GIA_REVISION === id).forEach((line, index) => repository.append('CHI_TIET_DON_HANG', {
      MA_DONG_DON_HANG: `${conversion.order.MA_DON_HANG}-D${index + 1}`, MA_DON_HANG: conversion.order.MA_DON_HANG,
      MA_SAN_PHAM: line.MA_SAN_PHAM, SO_LUONG: line.SO_LUONG, DON_GIA: engine.calculateQuoteLine(line.SO_LUONG, line.DON_GIA, line.TY_LE_CHIET_KHAU, line.THUE_SUAT).total / line.SO_LUONG
    }));
    return { created: true, order: orders().find(item => item.MA_DON_HANG === conversion.order.MA_DON_HANG) };
  }

  function orders() {
    const { data, customers: customerMap, receivables } = enrich();
    return data.DON_HANG.map(order => ({ ...order, TEN_KHACH_HANG: customerMap[order.MA_KHACH_HANG]?.TEN_KHACH_HANG, ...receivables[order.MA_DON_HANG] }));
  }

  function addPayment(orderId, amount) {
    const data = repository.snapshot();
    const current = engine.calculateReceivables(data.DON_HANG, data.CHI_TIET_DON_HANG, data.THANH_TOAN)[orderId];
    const value = Number(amount);
    if (!current) throw new Error('Đơn hàng không tồn tại.');
    if (!Number.isFinite(value) || value <= 0 || value > current.receivable) throw new Error('Số tiền phải dương và không vượt công nợ còn lại.');
    return repository.append('THANH_TOAN', { MA_THANH_TOAN: nextId(data.THANH_TOAN, 'MA_THANH_TOAN', 'TT'), MA_DON_HANG: orderId, NGAY_THANH_TOAN: clock().toISOString().slice(0, 10), SO_TIEN: value, HINH_THUC: 'CHUYỂN KHOẢN', TRANG_THAI: 'ĐÃ XÁC NHẬN' });
  }

  function addShipment(orderId, quantity) {
    const data = repository.snapshot();
    const ordered = data.CHI_TIET_DON_HANG.filter(line => line.MA_DON_HANG === orderId).reduce((sum, line) => sum + Number(line.SO_LUONG), 0);
    if (!data.DON_HANG.some(order => order.MA_DON_HANG === orderId)) throw new Error('Đơn hàng không tồn tại.');
    const existing = data.GIAO_HANG.filter(item => item.MA_DON_HANG === orderId).map(item => item.SO_LUONG);
    engine.calculateDelivery(ordered, [...existing, Number(quantity)]);
    return repository.append('GIAO_HANG', { MA_GIAO_HANG: nextId(data.GIAO_HANG, 'MA_GIAO_HANG', 'GH'), MA_DON_HANG: orderId, NGAY_GIAO: clock().toISOString().slice(0, 10), SO_LUONG: Number(quantity), TRANG_THAI: 'ĐÃ GIAO' });
  }

  function dashboard(filters = {}) {
    const data = repository.snapshot();
    const filteredQuotes = data.BAO_GIA.filter(item =>
      (!filters.tuNgay || item.NGAY_BAO_GIA >= filters.tuNgay) &&
      (!filters.denNgay || item.NGAY_BAO_GIA <= filters.denNgay) &&
      (!filters.trangThai || item.TRANG_THAI === filters.trangThai));
    if (!filters.tuNgay && !filters.denNgay && !filters.trangThai) return buildDashboard(data, clock().toISOString().slice(0, 10));
    const quoteIds = new Set(filteredQuotes.map(item => item.MA_BAO_GIA_REVISION));
    const filteredOrders = data.DON_HANG.filter(item => quoteIds.has(item.MA_BAO_GIA_REVISION));
    const orderIds = new Set(filteredOrders.map(item => item.MA_DON_HANG));
    return buildDashboard({ ...data, BAO_GIA: filteredQuotes, CHI_TIET_BAO_GIA: data.CHI_TIET_BAO_GIA.filter(item => quoteIds.has(item.MA_BAO_GIA_REVISION)), DON_HANG: filteredOrders, CHI_TIET_DON_HANG: data.CHI_TIET_DON_HANG.filter(item => orderIds.has(item.MA_DON_HANG)), THANH_TOAN: data.THANH_TOAN.filter(item => orderIds.has(item.MA_DON_HANG)) }, clock().toISOString().slice(0, 10));
  }

  return {
    dataset: () => clone(repository.snapshot()), customers, customer, quotes, quote, createQuote, updateQuote, convertQuote, orders,
    payments: () => repository.payments(), shipments: () => repository.shipments(), addPayment, addShipment,
    dashboard
  };
}

module.exports = { createCommercialService };
