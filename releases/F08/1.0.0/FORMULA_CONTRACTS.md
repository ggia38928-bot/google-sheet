# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F08 — Văn bản, hồ sơ và chỉ đạo

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F08, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Staff được giao một văn bản không thấy file mật của văn bản khác qua URL/export (Phân cấp bảo mật theo vai trò). Số văn bản trùng trong cùng sổ/năm bị cảnh báo, cùng số ở sổ khác được phép."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch6_formulas.test.mjs`.
