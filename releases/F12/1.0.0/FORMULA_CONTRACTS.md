# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F12 — Quản lý hồ sơ nhân sự & hợp đồng lao động

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F12, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Nhân sự có ExitDate trước ReportDate hoặc EmploymentStatus là TERMINATED không được tính vào active headcount. Lịch sử luân chuyển phòng ban/vị trí được lưu vết trong EmploymentEvents. Nhân viên bình thường không xem được bảng Compensation."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch4_formulas.test.mjs`.
