# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F07 — Hợp đồng, phụ lục và phát sinh

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F07, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Toàn bộ phép tính chia được bảo vệ bằng `IFERROR(..., 0)` để chống triệt để lỗi `#DIV/0!`.
- Múi giờ chuẩn: `Asia/Ho_Chi_Minh`, định dạng tiền tệ: `VND`, ngày tháng `dd/MM/yyyy`.
- Đảm bảo 6 cột hệ thống chuẩn: `ID`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `RowVersion`, `Archived`.

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Gốc 100 triệu, tăng đã duyệt 20 triệu, giảm chưa duyệt 5 triệu: giá trị hiện hành 120 triệu. Thu 50 triệu không tự coi là nghiệm thu 50 triệu (mốc nghiệm thu và thanh toán độc lập)."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch6_formulas.test.mjs`.
