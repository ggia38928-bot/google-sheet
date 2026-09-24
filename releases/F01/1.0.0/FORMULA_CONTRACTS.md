# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F01 — Quản lý việc cá nhân & Ma trận Eisenhower

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F01, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Fixture ngày cố định có 3 việc: một DONE đúng hạn, một TODO quá hạn, một CANCELLED; tỷ lệ hoàn thành bằng 50%, việc đang quá hạn bằng 1. Việc không hạn không bị đếm trễ."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.