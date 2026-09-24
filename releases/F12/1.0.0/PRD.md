# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F12 — Quản lý hồ sơ nhân sự & hợp đồng lao động
**Phân loại:** Nhân sự & Tuyển dụng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F12 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G016, G017, G045

---

### 1. TỔNG QUAN NGHIỆP VỤ
Quản lý hồ sơ nhân sự & hợp đồng lao động là giải pháp quản trị chuyên sâu trong phân hệ Nhân sự & Tuyển dụng, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **EMPLOYEES**: Bảng dữ liệu chính của phân hệ EMPLOYEES
- **CONTRACTS**: Bảng dữ liệu chính của phân hệ CONTRACTS
- **EMPLOYMENT_EVENTS**: Bảng dữ liệu chính của phân hệ EMPLOYMENT_EVENTS
- **COMPENSATION**: Bảng dữ liệu chính của phân hệ COMPENSATION
- **DEPARTMENTS**: Bảng dữ liệu chính của phân hệ DEPARTMENTS
- **POSITIONS**: Bảng dữ liệu chính của phân hệ POSITIONS
- **SETTINGS**: Bảng dữ liệu chính của phân hệ SETTINGS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng nhân sự chính thức (Active Headcount)
- Tỷ lệ nhân sự thử việc / thực tập
- Hợp đồng lao động sắp hết hạn trong 30 ngày
- Tỷ lệ biến động nhân sự (Turnover Rate)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Nhân sự có ExitDate trước ReportDate hoặc EmploymentStatus là TERMINATED không được tính vào active headcount. Lịch sử luân chuyển phòng ban/vị trí được lưu vết trong EmploymentEvents. Nhân viên bình thường không xem được bảng Compensation."
