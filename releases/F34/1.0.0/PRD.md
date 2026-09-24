# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F34 — Lập ngân sách doanh nghiệp
**Phân loại:** Kế hoạch tài chính & Ngân sách | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F34 (Dòng 1320–1347) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G052, G054

---

### 1. TỔNG QUAN NGHIỆP VỤ
Lập ngân sách doanh nghiệp là giải pháp kế toán quản trị và tài chính chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính theo CODEX:
- **BUDGET_VERSIONS**: Bảng dữ liệu chính của phân hệ BUDGET_VERSIONS
- **BUDGET_LINES**: Bảng dữ liệu chính của phân hệ BUDGET_LINES
- **BUDGET_ACTUALS**: Bảng dữ liệu chính của phân hệ BUDGET_ACTUALS
- **BUDGET_COMMITMENTS**: Bảng dữ liệu chính của phân hệ BUDGET_COMMITMENTS
- **BUDGET_REQUESTS**: Bảng dữ liệu chính của phân hệ BUDGET_REQUESTS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng ngân sách được duyệt
- Tổng chi thực tế
- Chi cam kết chưa chi
- Ngân sách khả dụng còn lại
- Tỷ lệ sử dụng (%)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Budget 100 triệu, actual 30, committed chưa giải ngân 20: khả dụng 50 triệu. Khi 20 được giải ngân, giảm committed và tăng actual, không trừ kép."