# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F02 — Dự án, công việc đội nhóm và KPI

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F02, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Hai việc có trọng số 1 và 3, tiến độ 100% và 0% cho tiến độ dự án 25%. Đổi nhân sự không mất lịch sử. Gantt qua giao thừa đúng vị trí; chu trình phụ thuộc A→B→A bị từ chối."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.