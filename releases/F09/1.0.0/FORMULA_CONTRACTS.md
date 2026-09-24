# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F09 — Lịch lãnh đạo, cuộc họp và công tác

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F09, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Hai cuộc họp giao nhau chặn đặt cùng phòng. Cuộc họp kết thúc 10:00 cho phép cuộc sau bắt đầu 10:00 khi buffer=0. Chặn trùng lịch người tham dự cùng khung giờ."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch5_formulas.test.mjs`.
