# FORMULA CONTRACTS & BUSINESS LOGIC
## SKU: F34 — Lập ngân sách doanh nghiệp

Tài liệu hợp đồng công thức toán học và điều kiện biên của SKU F34, đảm bảo tính đúng đắn khi thực thi trên Google Sheets:

### 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
- Tất cả công thức xử lý giá trị tiền tệ sử dụng số nguyên VND, làm tròn an toàn.
- Các điều kiện tổng hợp dữ liệu (`SUMIFS`, `COUNTIFS`) luôn gắn cờ trạng thái hợp lệ (`POSTED`, `APPLIED`, `COMMITTED`, `LOCKED`).

### 2. TIÊU CHÍ NGHIỆM THU KIỂM TOÁN
- **Acceptance Criteria:** "Budget 100 triệu, actual 30, committed chưa giải ngân 20: khả dụng 50 triệu. Khi 20 được giải ngân, giảm committed và tăng actual, không trừ kép."
- Được tự động kiểm thử và xác nhận 100% PASS trong bộ test: `tests/batch3_formulas.test.mjs`.