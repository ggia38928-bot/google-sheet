# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F24 — Mini ERP cho đơn vị nhỏ

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F24, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Công nợ phải thu và phải trả giảm trừ chính xác, không âm. Lợi nhuận gộp ước tính = Doanh số - COGS. Luồng dữ liệu khép kín (SO -> Thu tiền -> Số dư quỹ)."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.