import { escapeHtml } from './security.js';

const app = document.querySelector('#app');
const title = document.querySelector('#page-title');
const pageSize = 8;
const state = { page: 1, query: '', status: '', tuNgay: '', denNgay: '' };

const money = value => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value || 0);
const number = value => new Intl.NumberFormat('vi-VN').format(value || 0);
const date = value => value ? new Intl.DateTimeFormat('vi-VN').format(new Date(`${value}T00:00:00`)) : '—';
const format = (value, type) => type === 'tiền' ? money(value) : type === 'tỷ lệ' ? `${number(value * 100)}%` : number(value);
const badge = status => `<span class="badge ${/HẾT HẠN|HỦY|TỪ CHỐI/.test(status) ? 'danger' : /CHỜ|NHÁP|MỚI/.test(status) ? 'warn' : ''}">${escapeHtml(status)}</span>`;
const toast = message => { const box = document.querySelector('#toast'); box.textContent = message; box.classList.add('show'); setTimeout(() => box.classList.remove('show'), 2500); };

async function api(path, options) {
  const response = await fetch(path, { headers: { 'content-type': 'application/json' }, ...options });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Không thể tải dữ liệu.');
  return data;
}

const shell = (body, intro = '') => `${intro ? `<div class="toolbar"><p>${intro}</p></div>` : ''}${body}`;
const table = (head, rows) => `<div class="table-wrap"><table><thead><tr>${head.map(item => `<th>${item}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
function paginate(rows) {
  const pages = Math.max(1, Math.ceil(rows.length / pageSize)); state.page = Math.min(state.page, pages);
  const visible = rows.slice((state.page - 1) * pageSize, state.page * pageSize);
  const controls = `<div class="pager"><span>Trang ${state.page}/${pages}</span><button data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}>Trước</button><button data-page="${state.page + 1}" ${state.page === pages ? 'disabled' : ''}>Sau</button></div>`;
  return { visible, controls };
}
function bindPager() { document.querySelectorAll('[data-page]').forEach(button => button.onclick = () => { state.page = Number(button.dataset.page); route(); }); }

async function dashboard() {
  title.textContent = 'Tổng quan kinh doanh';
  const params = new URLSearchParams(Object.entries({ tuNgay: state.tuNgay, denNgay: state.denNgay, trangThai: state.status }).filter(([, value]) => value));
  const data = await api(`/api/dashboard?${params}`);
  const kpis = `<div class="kpis">${data.kpis.map(item => `<article class="card kpi"><span>${escapeHtml(item.label)}</span><strong>${format(item.value, item.format)}</strong></article>`).join('')}</div>`;
  const charts = `<div class="charts">${data.charts.map(chart => {
    const max = Math.max(...chart.values.map(item => item.value), 1);
    return `<article class="panel"><h2>${escapeHtml(chart.title)}</h2>${chart.values.length ? chart.values.map(item => `<div class="bar-row"><span title="${escapeHtml(item.label)}">${escapeHtml(item.label)}</span><div class="bar-track"><div class="bar" style="width:${Math.max(3, item.value / max * 100)}%"></div></div><strong>${format(item.value, chart.format)}</strong></div>`).join('') : '<p class="empty">Chưa có dữ liệu trong kỳ.</p>'}</article>`;
  }).join('')}</div>`;
  app.innerHTML = `<div class="toolbar"><p>Số liệu được tính trực tiếp từ dữ liệu nghiệp vụ đã liên kết.</p><div class="filters"><input id="from" type="date" aria-label="Từ ngày" value="${state.tuNgay}"><input id="to" type="date" aria-label="Đến ngày" value="${state.denNgay}"><select id="status"><option value="">Mọi trạng thái</option>${['NHÁP', 'CHỜ DUYỆT', 'ĐÃ DUYỆT', 'ĐÃ GỬI', 'CHẤP NHẬN', 'TỪ CHỐI', 'HẾT HẠN'].map(value => `<option ${state.status === value ? 'selected' : ''}>${value}</option>`).join('')}</select></div></div>${kpis}${charts}`;
  document.querySelector('#from').onchange = event => { state.tuNgay = event.target.value; route(); };
  document.querySelector('#to').onchange = event => { state.denNgay = event.target.value; route(); };
  document.querySelector('#status').onchange = event => { state.status = event.target.value; route(); };
}

async function customers() {
  title.textContent = 'Khách hàng';
  const rows = await api('/api/khach-hang');
  const filtered = rows.filter(item => (!state.query || `${item.MA_KHACH_HANG} ${item.TEN_KHACH_HANG}`.toLowerCase().includes(state.query)) && (!state.status || item.TRANG_THAI === state.status));
  const { visible, controls } = paginate(filtered);
  app.innerHTML = `<div class="toolbar"><p>${filtered.length} khách hàng phù hợp</p><div class="filters"><input id="search" placeholder="Tìm mã hoặc tên…" value="${escapeHtml(state.query)}"><select id="status"><option value="">Tất cả trạng thái</option>${[...new Set(rows.map(item => item.TRANG_THAI))].map(value => `<option ${state.status === value ? 'selected' : ''}>${escapeHtml(value)}</option>`).join('')}</select></div></div>${table(['Mã', 'Khách hàng', 'Nhóm', 'Khu vực', 'Phụ trách', 'Công nợ', 'Trạng thái'], visible.map(item => `<tr><td><a class="inline" href="/khach-hang/${encodeURIComponent(item.MA_KHACH_HANG)}" data-link>${escapeHtml(item.MA_KHACH_HANG)}</a></td><td>${escapeHtml(item.TEN_KHACH_HANG)}</td><td>${escapeHtml(item.NHOM_KHACH_HANG)}</td><td>${escapeHtml(item.KHU_VUC)}</td><td>${escapeHtml(item.NGUOI_PHU_TRACH)}</td><td class="money">${money(item.CONG_NO)}</td><td>${badge(item.TRANG_THAI)}</td></tr>`))}${controls}`;
  bindFilters(); bindPager(); bindLinks();
}

async function customerDetail(id) {
  const item = await api(`/api/khach-hang/${encodeURIComponent(id)}`);
  title.textContent = item.TEN_KHACH_HANG;
  app.innerHTML = `<div class="detail-grid"><section class="panel"><div class="section-head"><h2>Hồ sơ khách hàng</h2>${badge(item.TRANG_THAI)}</div><div class="summary"><div><span>Mã khách hàng</span><strong>${escapeHtml(item.MA_KHACH_HANG)}</strong></div><div><span>Nhóm</span><strong>${escapeHtml(item.NHOM_KHACH_HANG)}</strong></div><div><span>Khu vực</span><strong>${escapeHtml(item.KHU_VUC)}</strong></div><div><span>Người phụ trách</span><strong>${escapeHtml(item.NGUOI_PHU_TRACH)}</strong></div><div class="grand"><span>Công nợ hiện tại</span><strong>${money(item.CONG_NO)}</strong></div></div></section><section class="panel"><h2>Quan hệ thương mại</h2><p><strong>${item.quotes.length}</strong> báo giá liên quan</p><p><strong>${item.orders.length}</strong> đơn hàng liên quan</p><p><a class="button secondary" href="/bao-gia" data-link>Xem danh sách báo giá</a></p></section></div><section class="panel" style="margin-top:18px"><h2>Báo giá gần đây</h2>${item.quotes.length ? table(['Mã', 'Ngày tạo', 'Giá trị', 'Trạng thái'], item.quotes.map(quote => `<tr><td><a class="inline" href="/bao-gia/${encodeURIComponent(quote.MA_BAO_GIA_REVISION)}" data-link>${escapeHtml(quote.MA_BAO_GIA_REVISION)}</a></td><td>${date(quote.NGAY_BAO_GIA)}</td><td class="money">${money(quote.TONG_TIEN)}</td><td>${badge(quote.TRANG_THAI)}</td></tr>`)) : '<div class="empty">Khách hàng chưa có báo giá.</div>'}</section>`;
  bindLinks();
}

async function quotes() {
  title.textContent = 'Báo giá';
  const rows = await api('/api/bao-gia');
  const filtered = rows.filter(item => (!state.query || `${item.MA_BAO_GIA_REVISION} ${item.TEN_KHACH_HANG}`.toLowerCase().includes(state.query)) && (!state.status || item.TRANG_THAI === state.status));
  const { visible, controls } = paginate(filtered);
  app.innerHTML = `<div class="toolbar"><p>${filtered.length} phiên bản báo giá</p><div class="actions"><input id="search" placeholder="Tìm báo giá…" value="${escapeHtml(state.query)}"><select id="status"><option value="">Tất cả trạng thái</option>${[...new Set(rows.map(item => item.TRANG_THAI))].map(value => `<option ${state.status === value ? 'selected' : ''}>${escapeHtml(value)}</option>`).join('')}</select><a class="button" href="/bao-gia/tao-moi" data-link>Tạo báo giá</a></div></div>${table(['Mã', 'Khách hàng', 'Ngày tạo', 'Hiệu lực đến', 'Giá trị', 'Trạng thái'], visible.map(item => `<tr><td><a class="inline" href="/bao-gia/${encodeURIComponent(item.MA_BAO_GIA_REVISION)}" data-link>${escapeHtml(item.MA_BAO_GIA_REVISION)}</a></td><td>${escapeHtml(item.TEN_KHACH_HANG)}</td><td>${date(item.NGAY_BAO_GIA)}</td><td>${date(item.HAN_HIEU_LUC)}</td><td class="money">${money(item.TONG_TIEN)}</td><td>${badge(item.TRANG_THAI)}</td></tr>`))}${controls}`;
  bindFilters(); bindPager(); bindLinks();
}

async function quoteDetail(id) {
  title.textContent = `Chi tiết ${id}`;
  const item = await api(`/api/bao-gia/${encodeURIComponent(id)}`);
  const subtotal = item.lines.reduce((sum, line) => sum + line.subtotal, 0), discount = item.lines.reduce((sum, line) => sum + line.discountAmount, 0), vat = item.lines.reduce((sum, line) => sum + line.vatAmount, 0);
  app.innerHTML = `<div class="toolbar"><p>${escapeHtml(item.TEN_KHACH_HANG)} · Hiệu lực đến ${date(item.HAN_HIEU_LUC)}</p><div class="actions"><button class="secondary" id="edit">Sửa thông tin</button>${item.TRANG_THAI === 'CHẤP NHẬN' ? '<button class="action" id="convert">Chuyển thành đơn hàng</button>' : ''}</div></div><div class="detail-grid"><section>${table(['Hàng hóa / dịch vụ', 'Số lượng', 'Đơn giá', 'Chiết khấu', 'Thuế', 'Thành tiền'], item.lines.map(line => `<tr><td><strong>${escapeHtml(line.TEN_SAN_PHAM)}</strong><br><small>${escapeHtml(line.MA_SAN_PHAM)}</small></td><td>${number(line.SO_LUONG)}</td><td>${money(line.DON_GIA)}</td><td>${number(line.TY_LE_CHIET_KHAU * 100)}%</td><td>${number(line.THUE_SUAT * 100)}%</td><td class="money">${money(line.total)}</td></tr>`))}</section><aside class="panel"><h2>Tổng hợp báo giá</h2><div class="summary"><div><span>Tạm tính</span><strong>${money(subtotal)}</strong></div><div><span>Chiết khấu</span><strong>− ${money(discount)}</strong></div><div><span>Thuế</span><strong>${money(vat)}</strong></div><div class="grand"><span>Tổng thanh toán</span><strong>${money(item.TONG_TIEN)}</strong></div></div><hr><p>Trạng thái ${badge(item.TRANG_THAI)}</p><p>Người phụ trách<br><strong>${escapeHtml(item.NGUOI_PHU_TRACH)}</strong></p></aside></div>`;
  document.querySelector('#convert')?.addEventListener('click', async () => { const result = await api(`/api/bao-gia/${encodeURIComponent(id)}/chuyen-don`, { method: 'POST' }); toast(result.created ? `Đã tạo ${result.order.MA_DON_HANG}` : `Đơn ${result.order.MA_DON_HANG} đã tồn tại`); });
  document.querySelector('#edit').onclick = async () => { const owner = prompt('Người phụ trách', item.NGUOI_PHU_TRACH); if (owner) { await api(`/api/bao-gia/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ NGUOI_PHU_TRACH: owner }) }); toast('Đã cập nhật báo giá'); route(); } };
}

async function createQuote() {
  title.textContent = 'Tạo báo giá';
  const [customers, products] = await Promise.all([api('/api/khach-hang'), api('/api/san-pham')]);
  app.innerHTML = `<form class="panel" id="quote-form"><div class="notice">Tạo báo giá mới với một dòng hàng. Giá trị được engine nghiệp vụ kiểm tra và tính toán.</div><div class="form-grid"><div class="field"><label>Khách hàng</label><select name="customer" required>${customers.map(item => `<option value="${escapeHtml(item.MA_KHACH_HANG)}">${escapeHtml(item.TEN_KHACH_HANG)}</option>`).join('')}</select></div><div class="field"><label>Hàng hóa / dịch vụ</label><select name="product" id="product" required>${products.map(item => `<option value="${escapeHtml(item.MA_SAN_PHAM)}" data-price="${item.DON_GIA}" data-tax="${item.THUE_SUAT}">${escapeHtml(item.TEN_SAN_PHAM)}</option>`).join('')}</select></div><div class="field"><label>Ngày hết hiệu lực</label><input name="expiry" type="date" required></div><div class="field"><label>Người phụ trách</label><input name="owner" required value="NV-001"></div><div class="field"><label>Số lượng</label><input name="quantity" type="number" min="0.01" step="0.01" value="1" required></div><div class="field"><label>Tỷ lệ chiết khấu (%)</label><input name="discount" type="number" min="0" max="100" step="0.1" value="0" required></div></div><p><button class="action" type="submit">Lưu báo giá</button> <a class="button secondary" href="/bao-gia" data-link>Hủy</a></p></form>`;
  document.querySelector('#quote-form').onsubmit = async event => { event.preventDefault(); const form = new FormData(event.currentTarget); const option = document.querySelector('#product').selectedOptions[0]; const result = await api('/api/bao-gia', { method: 'POST', body: JSON.stringify({ MA_KHACH_HANG: form.get('customer'), HAN_HIEU_LUC: form.get('expiry'), NGUOI_PHU_TRACH: form.get('owner'), lines: [{ MA_SAN_PHAM: form.get('product'), SO_LUONG: Number(form.get('quantity')), DON_GIA: Number(option.dataset.price), TY_LE_CHIET_KHAU: Number(form.get('discount')) / 100, THUE_SUAT: Number(option.dataset.tax) }] }) }); toast('Đã tạo báo giá'); navigate(`/bao-gia/${result.MA_BAO_GIA_REVISION}`); };
  bindLinks();
}

async function orders(mode = 'orders') {
  const rows = await api('/api/don-hang');
  title.textContent = mode === 'delivery' ? 'Quản lý giao hàng' : 'Đơn hàng';
  const { visible, controls } = paginate(rows.filter(item => !state.query || `${item.MA_DON_HANG} ${item.TEN_KHACH_HANG}`.toLowerCase().includes(state.query)));
  app.innerHTML = `<div class="toolbar"><p>Theo dõi xuyên suốt từ báo giá đến thực hiện</p><div class="filters"><input id="search" placeholder="Tìm đơn hàng…" value="${escapeHtml(state.query)}"></div></div>${table(['Đơn hàng', 'Khách hàng', 'Báo giá nguồn', 'Ngày đặt', 'Tổng tiền', mode === 'delivery' ? 'Giao hàng' : 'Trạng thái'], visible.map(item => `<tr><td><strong>${escapeHtml(item.MA_DON_HANG)}</strong></td><td>${escapeHtml(item.TEN_KHACH_HANG)}</td><td><a class="inline" href="/bao-gia/${encodeURIComponent(item.MA_BAO_GIA_REVISION)}" data-link>${escapeHtml(item.MA_BAO_GIA_REVISION)}</a></td><td>${date(item.NGAY_DAT)}</td><td class="money">${money(item.orderTotal)}</td><td>${mode === 'delivery' ? (item.TRANG_THAI === 'HỦY' ? badge('HỦY') : `<button class="secondary ship" data-id="${escapeHtml(item.MA_DON_HANG)}">Ghi nhận giao</button>`) : badge(item.TRANG_THAI)}</td></tr>`))}${controls}`;
  bindFilters(); bindPager(); bindLinks();
  document.querySelectorAll('.ship').forEach(button => button.onclick = async () => { const quantity = Number(prompt('Số lượng giao')); if (quantity > 0) { await api(`/api/don-hang/${button.dataset.id}/giao-hang`, { method: 'POST', body: JSON.stringify({ soLuong: quantity }) }); toast('Đã ghi nhận giao hàng'); } });
}

async function receivables() {
  title.textContent = 'Thanh toán & công nợ';
  const { orders: rows } = await api('/api/cong-no');
  const { visible, controls } = paginate(rows);
  app.innerHTML = `<div class="toolbar"><p>Công nợ tính từ đơn hàng và các khoản thanh toán đã xác nhận.</p></div>${table(['Đơn hàng', 'Khách hàng', 'Hạn thanh toán', 'Phải thu', 'Đã thanh toán', 'Còn lại', 'Thao tác'], visible.map(item => `<tr><td><strong>${escapeHtml(item.MA_DON_HANG)}</strong></td><td>${escapeHtml(item.TEN_KHACH_HANG)}</td><td>${date(item.HAN_THANH_TOAN)}</td><td class="money">${money(item.orderTotal)}</td><td class="money">${money(item.confirmedPaid)}</td><td class="money">${money(item.receivable)}</td><td>${item.TRANG_THAI === 'HỦY' ? badge('HỦY') : (item.receivable ? `<button class="secondary pay" data-id="${escapeHtml(item.MA_DON_HANG)}" data-max="${item.receivable}">Ghi nhận thu</button>` : badge('ĐÃ THANH TOÁN'))}</td></tr>`))}${controls}`;
  bindPager(); document.querySelectorAll('.pay').forEach(button => button.onclick = async () => { const amount = Number(prompt(`Số tiền thu (tối đa ${money(button.dataset.max)})`)); if (amount > 0) { await api(`/api/don-hang/${button.dataset.id}/thanh-toan`, { method: 'POST', body: JSON.stringify({ soTien: amount }) }); toast('Đã ghi nhận thanh toán'); route(); } });
}

function bindFilters() {
  const search = document.querySelector('#search'), status = document.querySelector('#status');
  if (search) search.oninput = event => { state.query = event.target.value.toLowerCase(); state.page = 1; clearTimeout(search.timer); search.timer = setTimeout(route, 180); };
  if (status) status.onchange = event => { state.status = event.target.value; state.page = 1; route(); };
}
function navigate(path) { history.pushState({}, '', path); state.page = 1; state.query = ''; state.status = ''; route(); }
function bindLinks() { document.querySelectorAll('[data-link]').forEach(link => link.onclick = event => { event.preventDefault(); navigate(link.getAttribute('href')); }); }
async function route() {
  app.innerHTML = '<div class="loading"><span></span>Đang tải dữ liệu…</div>';
  document.querySelectorAll('.sidebar nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === location.pathname));
  try {
    if (location.pathname === '/') await dashboard();
    else if (location.pathname === '/khach-hang') await customers();
    else if (location.pathname.startsWith('/khach-hang/')) await customerDetail(decodeURIComponent(location.pathname.split('/').pop()));
    else if (location.pathname === '/bao-gia') await quotes();
    else if (location.pathname === '/bao-gia/tao-moi') await createQuote();
    else if (location.pathname.startsWith('/bao-gia/')) await quoteDetail(decodeURIComponent(location.pathname.split('/').pop()));
    else if (location.pathname === '/don-hang') await orders();
    else if (location.pathname === '/giao-hang') await orders('delivery');
    else if (location.pathname === '/cong-no') await receivables();
    else { title.textContent = 'Không tìm thấy'; app.innerHTML = '<div class="empty">Trang bạn yêu cầu không tồn tại.</div>'; }
  } catch (error) { app.innerHTML = `<div class="error"><div><h2>Không thể hiển thị dữ liệu</h2><p>${escapeHtml(error.message)}</p><button class="action" onclick="location.reload()">Thử lại</button></div></div>`; }
  bindLinks();
}

document.querySelector('#today').textContent = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'long' }).format(new Date());
document.querySelector('#menu').onclick = () => document.querySelector('.sidebar').classList.toggle('open');
window.addEventListener('popstate', route);
bindLinks(); route();
