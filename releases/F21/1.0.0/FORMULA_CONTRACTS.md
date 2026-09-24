# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F21 — Form nhập liệu và phân quyền cấu hình

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F21, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `ACCEPTED`, `DONE`, `APPROVED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Client sửa payload để ghi bảng ngoài quyền phải bị từ chối. Đổi parent dropdown xóa/đánh lỗi child không hợp lệ. Formula lặp tham chiếu bị chặn. Schema upgrade giữ được dữ liệu cũ."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/`.