# Quản lý Báo giá và Đơn hàng

Vertical slice tiếng Việt cho phòng Kinh doanh, bao phủ từ báo giá có revision đến đơn hàng, giao nhiều đợt, thanh toán và dashboard quản trị.

## Cài đặt

Sao chép các file trong `apps-script/` vào cùng một dự án Apps Script gắn với Google Sheets, sau đó chạy một trong ba entrypoint:

- `caiDatDemoBaoGiaDonHang()` tạo cấu trúc, công thức, dashboard và dữ liệu demo.
- `caiDatSachBaoGiaDonHang()` tạo cấu trúc sạch, không seed dữ liệu.
- `caiDatBusinessBaoGiaDonHang()` tạo cấu trúc Business sạch, bật bảo vệ và nhật ký.

Các thao tác làm sạch luôn sao lưu trước. Không suy diễn G2–G4 từ kiểm thử local.

## Trạng thái xác minh

- G0/G1: PASS bằng test local và oracle độc lập.
- Google Sheet UAT: đã dựng và đọc lại qua Sheets API tại `https://docs.google.com/spreadsheets/d/1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q/edit`; đúng 50 bản ghi nghiệp vụ, 0 lỗi công thức và Dashboard phản ứng đúng khi trạng thái thanh toán thay đổi.
- G2: `BLOCKED_EXTERNAL`. Môi trường hiện không có Apps Script API, clasp hoặc browser write, nên chưa cài/chạy `installer.gs` thật và chưa chạy rerun, Clean/Demo, backup/restore trên Apps Script.
- G3/G4: `NOT_RUN`; không tạo AppSheet và không gắn trạng thái sẵn sàng thương mại.
