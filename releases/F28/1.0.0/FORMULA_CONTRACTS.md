# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F28 — Lịch dịch vụ spa và phòng khám

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F28, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Hai lịch cùng provider giao nhau không cùng được xác nhận. Lễ tân xem lịch nhưng không xem RestrictedRecords. Hủy lịch không tăng doanh thu dịch vụ."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch5_formulas.test.mjs`.
