# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F30 — Công nợ và phân bổ thanh toán

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F30, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `APPLIED`, `COMMITTED`, `LOCKED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Hóa đơn 1 triệu, phân bổ 400.000 và credit 100.000: còn 500.000. Không phân bổ vượt payment hay dư nợ; thanh toán nhiều kỳ không nhân đôi khoản gốc."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch3_formulas.test.mjs`.