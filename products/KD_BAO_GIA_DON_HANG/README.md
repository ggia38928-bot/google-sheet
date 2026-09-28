# Quản lý Báo giá và Đơn hàng

Vertical slice tiếng Việt cho phòng Kinh doanh, bao phủ từ báo giá có revision đến đơn hàng, giao nhiều đợt, thanh toán và dashboard quản trị.

## Cài đặt

Sao chép các file trong `apps-script/` vào cùng một dự án Apps Script gắn với Google Sheets, sau đó chạy một trong ba entrypoint:

- `caiDatDemoBaoGiaDonHang()` tạo cấu trúc, công thức, dashboard và dữ liệu demo.
- `caiDatSachBaoGiaDonHang()` tạo cấu trúc sạch, không seed dữ liệu.
- `caiDatBusinessBaoGiaDonHang()` tạo cấu trúc Business sạch, bật bảo vệ và nhật ký.

Các thao tác làm sạch luôn sao lưu trước. G2 Google Sheets, G3 AppSheet và G4 thương mại chưa được chạy trong local slice.
