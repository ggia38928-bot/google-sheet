# Bằng chứng Google Sheet thật — phần Sheets API

- Thời điểm kiểm tra: 2026-09-29, Asia/Bangkok.
- Spreadsheet ID: `1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q`.
- URL: https://docs.google.com/spreadsheets/d/1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q/edit
- Quyền chia sẻ quan sát được: riêng tư.
- Locale/timezone đọc lại: `vi_VN` / `Asia/Saigon`.
- Phương thức: Google Drive/Sheets API; không có Apps Script API, clasp hoặc browser write.

## Expected / actual

| Kiểm tra | Expected | Actual | Kết quả |
|---|---:|---:|---|
| Khách hàng | 6 | 6 | PASS |
| Sản phẩm | 8 | 8 | PASS |
| Báo giá | 6 | 6 | PASS |
| Chi tiết báo giá | 12 | 12 | PASS |
| Đơn hàng | 5 | 5 | PASS |
| Chi tiết đơn hàng | 8 | 8 | PASS |
| Thanh toán | 5 | 5 | PASS |
| Tổng bản ghi nghiệp vụ | 50 | 50 | PASS |
| Lỗi công thức trong vùng kiểm tra | 0 | 0 | PASS |
| Ô có data validation được đọc lại | > 0 | 318 | PASS |
| Biểu đồ Dashboard | 3 | 3 | PASS |

Giá trị baseline đọc từ Dashboard: giá trị đơn hàng `3.700.000 ₫`, thực thu `1.400.000 ₫`, công nợ `2.300.000 ₫`, tỷ lệ chuyển đổi `33,33%`, giá trị báo giá chấp nhận `648.000 ₫`.

## Kiểm thử hành vi có hoàn tác

1. Baseline `TT-002 = CHỜ XÁC NHẬN`: DH-002 thực thu `0 ₫`, công nợ `1.300.000 ₫`; Dashboard thực thu `1.400.000 ₫`, công nợ `2.300.000 ₫`.
2. Đổi tạm `TT-002 = ĐÃ XÁC NHẬN`: DH-002 thực thu `300.000 ₫`, công nợ `1.000.000 ₫`; Dashboard thực thu `1.700.000 ₫`, công nợ `2.000.000 ₫`.
3. Hoàn tác `TT-002 = CHỜ XÁC NHẬN`: toàn bộ số liệu trở về baseline.

Kết luận: dữ liệu nguồn, công thức đơn hàng và KPI Dashboard phản ứng đúng trên Google Sheet thật. Tuy nhiên, bằng chứng này không chứng minh Apps Script đã được cài hoặc thực thi.

## Phần bị chặn

Vị trí → G2 Apps Script live.

Nguyên nhân → Môi trường chỉ cung cấp Drive/Sheets API; không có Apps Script API, clasp hoặc browser write.

Bằng chứng → không có Script ID và không có callable tool để tạo/bind/chạy Apps Script.

Cách xử lý tiếp theo → người dùng mở Apps Script gắn với Sheet UAT, dán ba file `.gs` từ release và chạy `setupDemoKD()` một lần để cấp quyền; sau đó có thể chạy checklist rerun/Clean/Restore và chốt G2.
