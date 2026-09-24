# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F48 — Báo cáo chi phí, P&L và dòng tiền

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F48, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `APPLIED`, `COMMITTED`, `LOCKED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Bán chịu 1 triệu và chưa thu: doanh thu có thể ghi nhận theo input, cash inflow=0. Tiền vay tăng cash financing nhưng không thành doanh thu. Bảng mapping thiếu hiện lỗi thay vì bỏ âm thầm."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch3_formulas.test.mjs`.