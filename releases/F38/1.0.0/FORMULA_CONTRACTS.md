# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F38 — Quản lý nghỉ phép & số dư phép năm

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F38, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Nghỉ từ thứ 6 đến thứ 2 tuần kế tiếp không rơi vào ngày lễ tính là 2 ngày làm việc theo NETWORKDAYS. Hai ca nửa ngày tính thành 1 ngày nguyên vẹn. Duyệt lại không trừ trùng lặp số dư phép."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch4_formulas.test.mjs`.
