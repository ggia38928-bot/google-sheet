# DANH SÁCH RÀO CẢN VÀ THIẾT LẬP NGOÀI (BLOCKERS & EXTERNAL SETUP)
**Dự án:** Minh Templates Factory  
**Cập nhật:** 07/09/2026  

---

## 1. CÁC ĐIỂM CHỜ XÁC THỰC DỊCH VỤ NGOÀI (BLOCKED EXTERNAL SETUP)

Để một SKU chuyển trạng thái từ `implemented_local` (Đã xây dựng và vượt qua 100% test kiểm thử cục bộ) sang `ready_to_sell` (Đủ chuẩn thương mại xuất xưởng thực tế), cần người sở hữu tài khoản Google thực hiện các bước sau:

### Rào cản 1: Xác thực Google Cloud & Apps Script Deployment (Cho F01-SHEET & F01-WEB)
- **Hiện trạng:** Mã nguồn Apps Script (`code.gs`, `rpcRouter.js`) và bộ cài đặt Google Sheet đã hoàn thiện và được kiểm thử thành công qua Test Harness mô phỏng Google API (Mock Google API). Tuy nhiên môi trường cục bộ chưa có OAuth token (`.clasprc.json`) của tài khoản Google đích.
- **Hành động cần người dùng thực hiện:**
  1. Chạy `npx @google/clasp login` trên máy trạm để ủy quyền tài khoản Google Workspace.
  2. Tạo Google Spreadsheet mới trên Drive và liên kết `clasp create --type sheets`.
  3. Đẩy mã nguồn lên bằng `clasp push` và triển khai Web App với quyền thực thi thích hợp.

### Rào cản 2: Tài khoản AppSheet Creator (Cho F01-APPSHEET)
- **Hiện trạng:** Bộ cấu hình bảng dữ liệu (`tables.csv`), kiểu cột (`columns.csv`), giao diện (`views.csv`), hành vi (`actions.csv`), kịch bản bot (`bots.md`) và Security Filter đã được sinh tự động 100%. AppSheet không cung cấp REST API công khai cho tài khoản thông thường để tự động tạo ứng dụng từ xa (API chỉ dành cho gói Enterprise).
- **Hành động cần người dùng thực hiện:**
  1. Đăng nhập vào [AppSheet Creator Console](https://www.appsheet.com).
  2. Chọn "Make a new app" -> Liên kết tới Google Sheet F01 vừa tạo.
  3. Cấu hình bảng, cột, view, action và bot theo tài liệu hướng dẫn chi tiết tại `releases/F01/1.0.0/appsheet/APPSHEET_SETUP.md`.

---

## 2. NGUYÊN TẮC MINH BẠCH KỸ THUẬT
- Tuyệt đối không bịa đặt Deployment URL, AppSheet ID hoặc Copy URL khi chưa thực sự triển khai trên tài khoản sống.
- Tất cả các release manifest ghi rõ `testedOnGoogle: false` và `status: "implemented_local"` cho đến khi có bằng chứng chạy trên tài khoản thật.
