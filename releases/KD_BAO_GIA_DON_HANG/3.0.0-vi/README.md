# Quản lý Báo giá và Đơn hàng 3.0.0-vi

Release này đóng gói vertical slice `PB01_KINH_DOANH / KD_BAO_GIA_DON_HANG` đã PASS G0/G1. Toàn bộ nội dung người dùng nhìn thấy dùng tiếng Việt; Demo tạo đúng 50 bản ghi nghiệp vụ liên kết.

## Cài đặt Apps Script

1. Tạo hoặc mở Google Sheet thử nghiệm riêng tư.
2. Mở Apps Script gắn với Sheet và thêm ba file `.gs` của release vào cùng dự án.
3. Chạy `setupDemoKD()` để cài Demo, hoặc `setupCleanKD()` để tạo cấu trúc sạch.
4. Dùng menu **Báo giá & Đơn hàng** để kiểm tra hệ thống, sao lưu, khôi phục hoặc làm sạch dữ liệu.

`setup.gs` là installer chính; hai file còn lại chỉ cung cấp entrypoint ngắn cho chế độ Demo/Sạch. Rerun không được nhân đôi dữ liệu Demo, chart, menu, trigger hoặc vùng bảo vệ.

Hotfix `WEBAPP-KD-W00` khóa `CHI_TIẾT_BÁO_GIÁ.H` là input tỷ lệ 0–1, tự gỡ công thức lạc cột và chỉ cho phép công thức thanh toán xuất hiện tại `ĐƠN_HÀNG.H`.

## Trạng thái xác minh

- G0/G1: PASS bằng 26 test hẹp, 4 test rebuild và regression repository.
- UAT Sheets API: PASS phần cấu trúc/dữ liệu/công thức/validation/định dạng/Dashboard trên Sheet thật.
- G2: `BLOCKED_EXTERNAL` vì phiên hiện tại không có Apps Script API, clasp hoặc browser write để cài và thực thi installer thật.
- G3/G4: `NOT_RUN`; không có AppSheet và không gắn trạng thái sẵn sàng thương mại.

Sheet UAT: https://docs.google.com/spreadsheets/d/1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q/edit
