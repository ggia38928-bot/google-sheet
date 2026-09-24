# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F17 — Thu chi doanh nghiệp và dòng tiền startup
**Phân loại:** Tài chính & Dòng tiền | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F17 (Dòng 867–892) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** T002, T003, T004, T005, G002, G003, G010, G014, G022, G024

---

### 1. TỔNG QUAN NGHIỆP VỤ
Thu chi doanh nghiệp và dòng tiền startup là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Cashbook**: Bảng dữ liệu chính của phân hệ Cashbook
- **Accounts**: Bảng dữ liệu chính của phân hệ Accounts
- **Categories**: Bảng dữ liệu chính của phân hệ Categories
- **CashflowForecast**: Bảng dữ liệu chính của phân hệ CashflowForecast
- **RecurringRules**: Bảng dữ liệu chính của phân hệ RecurringRules

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng thu kỳ
- Tổng chi kỳ
- Dòng tiền thuần (Net Cashflow)
- Tốc độ đốt tiền (Burn Rate)
- Thời gian sống (Runway)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Số dư = Opening + Thu - Chi (chỉ tính POSTED). Chuyển khoản nội bộ bảo toàn tổng tiền hệ thống, không sinh doanh thu/chi phí ảo."