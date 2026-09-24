# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F13 — Tuyển dụng & lịch phỏng vấn ứng viên

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F13, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Một ứng viên nộp 2 vị trí được tính là 1 ứng viên và 2 hồ sơ ứng tuyển riêng biệt. Tỷ lệ nhận việc tính bằng IFERROR(COUNTIFS(Offers[Status], "ACCEPTED") / COUNTIFS(Offers[Status], "<>DRAFT"), 0)."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch4_formulas.test.mjs`.
