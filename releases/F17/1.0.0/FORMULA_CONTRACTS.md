# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F17 — Thu chi doanh nghiệp và dòng tiền startup

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F17, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Số dư = Opening + Thu - Chi (chỉ tính POSTED). Chuyển khoản nội bộ bảo toàn tổng tiền hệ thống, không sinh doanh thu/chi phí ảo."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.