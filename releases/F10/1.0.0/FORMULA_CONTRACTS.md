# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F10 — Khách sạn, homestay và đặt phòng

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F10, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Khoảng [check-in, check-out) không tính đêm trả phòng; booking hủy không giữ phòng; hai request đồng thời cho phòng cuối chỉ một được duyệt. Deposit không bị cộng lần hai vào tổng thu."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch5_formulas.test.mjs`.
