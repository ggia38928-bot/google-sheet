# Web App KD Báo Giá Đơn Hàng

Vertical slice tiếng Việt chạy bằng Node.js thuần, không cần tải dependency. Ứng dụng tái sử dụng trực tiếp domain engine và fixture của sản phẩm KD_BAO_GIA_DON_HANG.

## Chạy cục bộ

```powershell
node apps/web/server.mjs
```

Mở `http://127.0.0.1:4173`.

## Kiểm tra

```powershell
node --test --test-isolation=none apps/web/tests/*.test.mjs
node apps/web/build.mjs
node --check apps/web/server.mjs
node --check apps/web/public/app.js
```

Dữ liệu ghi từ giao diện chỉ tồn tại trong bộ nhớ tiến trình. Google Sheet UAT không bị đọc hoặc ghi bởi ứng dụng này.
