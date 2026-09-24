# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F32 — Chấm công & tổng hợp ca làm việc

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F32, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Ca làm việc qua đêm (ví dụ 22:00 hôm trước đến 06:00 hôm sau trừ 60 phút nghỉ = 7 giờ) tính đúng theo logic giờ làm việc, không ra số âm. Nhân viên không được tạo 2 dòng check-in cùng một ngày."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch4_formulas.test.mjs`.
