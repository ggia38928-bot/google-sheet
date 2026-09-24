# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F05 — CRM khách hàng và pipeline

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F05, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Mẫu số tính Win rate chỉ tính deal đã đóng (Won + Lost). Deal đang mở không làm loãng win rate. Mẫu số = 0 trả về 0% an toàn."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.