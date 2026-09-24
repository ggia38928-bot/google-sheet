# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F20 — Bán hàng và đơn hàng

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F20, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Đơn 10 sản phẩm, giao 6 rồi 4: tồn chỉ giảm 10. Thu 500.000 trên đơn 800.000 cho công nợ 300.000. Hủy đơn chưa giao không sinh xuất kho."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.