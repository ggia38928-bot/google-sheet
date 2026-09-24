# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F48 — Báo cáo chi phí, P&L và dòng tiền
**Phân loại:** Kế toán quản trị & Báo cáo tài chính | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F48 (Dòng 1680–1710) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G099, G100, G212

---

### 1. TỔNG QUAN NGHIỆP VỤ
Báo cáo chi phí, P&L và dòng tiền là giải pháp kế toán quản trị và tài chính chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính theo CODEX:
- **FINANCE_FACTS**: Bảng dữ liệu chính của phân hệ FINANCE_FACTS
- **REPORT_MAPPINGS**: Bảng dữ liệu chính của phân hệ REPORT_MAPPINGS
- **REPORTING_PERIODS**: Bảng dữ liệu chính của phân hệ REPORTING_PERIODS
- **REPORT_ADJUSTMENTS**: Bảng dữ liệu chính của phân hệ REPORT_ADJUSTMENTS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Doanh thu thuần (P&L)
- Giá vốn hàng bán (COGS)
- Lợi nhuận gộp
- Lợi nhuận thuần từ HĐKD
- Dòng tiền kinh doanh thuần (Cash Flow)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Bán chịu 1 triệu và chưa thu: doanh thu có thể ghi nhận theo input, cash inflow=0. Tiền vay tăng cash financing nhưng không thành doanh thu. Bảng mapping thiếu hiện lỗi thay vì bỏ âm thầm."