# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F19 — Báo giá và phiên bản chào bán

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F19, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "2×100.000, giảm dòng 10%, thuế cấu hình 8% trên sau giảm cho tổng 194.400. Revision cũ giữ nguyên số tiền sau khi sửa bản mới."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.