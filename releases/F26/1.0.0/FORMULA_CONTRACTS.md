# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F26 — Lớp học, điểm danh và học phí

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F26, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Học thứ 2/4, có 1 ngày nghỉ trong kỳ: ngày hết 4 buổi phải bỏ qua ngày nghỉ (tính ngày kết thúc khóa học chính xác khi có ngày nghỉ xen kẽ). Điểm danh trùng cùng học sinh/buổi bị chặn. Buổi hủy không trừ credit."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch6_formulas.test.mjs`.
