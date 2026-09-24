# F05 — CRM khách hàng và pipeline 3.0.0-VI

Artifact này là vertical slice cục bộ. Toàn bộ nhãn, tab, trạng thái và dữ liệu demo đều dùng tiếng Việt; các mã kỹ thuật chỉ dùng trong metadata.

## Cài đặt Apps Script

1. Tạo một Google Sheet thử nghiệm, mở Trình chỉnh sửa Apps Script và dán nội dung `installer.gs`.
2. Chạy `caiDatDemoF05` để kiểm tra dữ liệu demo có quan hệ, hoặc `caiDatBusinessF05` để cài sạch. Business không seed dữ liệu demo.
3. Chỉ chạy `lamSachF05` khi đã kiểm tra bản sao lưu được tạo; có thể dùng `khoiPhucF05` để phục hồi bản gần nhất.

## Giới hạn gate

G0/G1 chỉ được xác minh tại local qua test và kiểm tra artifact. G2 cần Spreadsheet ID thử nghiệm và hai tài khoản; G3 cần App ID, nguồn dữ liệu, view/action/bot/security filter thật. Không có email, OAuth, AppSheet hoặc Google Sheet nào được tạo bởi artifact này.
