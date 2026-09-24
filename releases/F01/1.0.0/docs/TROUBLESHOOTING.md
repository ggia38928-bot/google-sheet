# HƯỚNG DẪN XỬ LÝ SỰ CỐ (TROUBLESHOOTING) - F01
**Sản phẩm:** F01 - Việc cá nhân và ưu tiên  
**Thương hiệu:** Minh Templates  

---

## 1. CÁC LỖI CÔNG THỨC THƯỜNG GẶP TRÊN GOOGLE SHEETS

### Lỗi 1: Xuất hiện lỗi `#DIV/0!` trên Dashboard
- **Nguyên nhân:** Toàn bộ công việc trong bảng bị hủy (`CANCELLED`) hoặc bảng rỗng, dẫn đến mẫu số phép chia tỷ lệ hoàn thành bằng 0.
- **Giải pháp:** Công thức chuẩn của Minh Templates đã được bọc `IFERROR(..., 0)`. Nếu bạn thấy lỗi này, có thể công thức ô đã bị người dùng vô tình gõ đè. Vui lòng khôi phục lại công thức gốc:
  ```excel
  =IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)
  ```

### Lỗi 2: Xuất hiện lỗi `#REF!`
- **Nguyên nhân:** Một tab tham chiếu (ví dụ `Tasks`, `SETTINGS` hoặc `Categories`) bị xóa hoặc bị đổi tên khác với tên gốc.
- **Giải pháp:** Đổi lại tên tab chính xác theo chữ hoa/thường: `Tasks`, `SETTINGS`, `Categories`, `DASHBOARD`.

### Lỗi 3: Số ngày trễ hiển thị không chính xác hoặc hiển thị ngày tháng lạ
- **Nguyên nhân:** Ô tại cột `J` (`DaysLate`) bị định dạng nhầm sang kiểu Ngày tháng (Date) thay vì kiểu Số (Number).
- **Giải pháp:** Chọn toàn bộ cột `J` > Chọn menu **Định dạng (Format)** > **Số (Number)** > **Tự động (Automatic)** hoặc **Số (Number)**.

---

## 2. SỰ CỐ ĐỒNG BỘ APPSHEET

### Lỗi 1: AppSheet báo "Column DaysLate has invalid formula"
- **Nguyên nhân:** AppSheet không hỗ trợ trực tiếp hàm `TODAY()` trong App Formula nếu bảng lưu trữ offline hoặc thiếu hàm chuyển đổi thời gian.
- **Giải pháp:** Sử dụng công thức AppSheet chuẩn đã được sinh trong `packages/appsheet/src/f01/spec.js`:
  ```text
  IFS(
    OR(ISBLANK([Title]), ISBLANK([DueDate]), [Status] = "CANCELLED"), "",
    [Status] = "DONE", IF(ISBLANK([CompletedAt]), "", MAX(LIST(0, TOTALDAYS([CompletedAt] - [DueDate])))),
    TRUE, MAX(LIST(0, TOTALDAYS(TODAY() - [DueDate])))
  )
  ```

### Lỗi 2: Không thấy công việc của người khác
- **Nguyên nhân:** Tính năng **Security Filter** đang hoạt động đúng thiết kế để bảo mật dữ liệu riêng tư.
- **Giải pháp:** Tài khoản đang đăng nhập không có Role `OWNER`. Chỉ tài khoản có Role `OWNER` trong bảng `Users` mới xem được toàn bộ công việc; các tài khoản khác chỉ xem được công việc do chính email của họ phụ trách (`OwnerEmail`).
