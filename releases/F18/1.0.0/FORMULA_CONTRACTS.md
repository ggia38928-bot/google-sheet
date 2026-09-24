# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F18 — Nhập xuất tồn và kiểm kê

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F18, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Tồn cuối kỳ = Tồn đầu + Nhập - Xuất ± Điều chỉnh. Chuyển kho nội bộ bảo toàn tổng lượng hàng tồn. Phân loại chuẩn HẾT HÀNG / CẦN NHẬP / ĐỦ TỒN."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.