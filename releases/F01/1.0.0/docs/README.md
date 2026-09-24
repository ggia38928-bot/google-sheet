# HƯỚNG DẪN SỬ DỤNG - MINH TEMPLATES (F01)
**Tên sản phẩm:** Quản lý Việc Cá Nhân & Ưu Tiên (Task Tracker Pro)  
**Mã SKU:** `F01-SHEET`, `F01-WEB`, `F01-APPSHEET`  
**Phiên bản phát hành:** 1.0.0  
**Thương hiệu:** Minh Templates  
**Hỗ trợ kỹ thuật:** support@minhtemplates.com  

---

## 1. QUY TRÌNH 5 BƯỚC KHỞI ĐỘNG VÀ SỬ DỤNG

### Bước 1: Tạo bản sao file Google Sheets (Make a Copy)
1. Mở đường link file Google Sheets do Minh Templates cung cấp.
2. Trên thanh menu, chọn **Tệp (File)** > **Tạo bản sao (Make a copy)**.
3. Đặt tên file theo ý muốn và lưu vào Google Drive cá nhân của bạn.
*(Lưu ý: Không yêu cầu quyền chỉnh sửa trực tiếp trên file gốc của Minh Templates)*.

### Bước 2: Tùy chỉnh cấu hình danh mục tại tab `SETTINGS`
1. Chuyển sang tab **`SETTINGS`**.
2. Kiểm tra múi giờ (`Asia/Ho_Chi_Minh`), định dạng ngày tháng (`dd/MM/yyyy`).
3. Chuyển sang tab **`Categories`** để thêm hoặc đổi tên các danh mục công việc của bạn (mặc định gồm: *Công việc*, *Cá nhân*, *Học tập*, *Sức khỏe*).

### Bước 3: Nhập liệu công việc tại tab `Tasks`
1. Mở tab **`Tasks`**.
2. Nhập tiêu đề công việc tại cột **`Title`**.
3. Chọn mức độ ưu tiên tại cột **`Priority`** (*THẤP*, *TRUNG BÌNH*, *CAO*, *KHẨN CẤP*).
4. Nhập ngày bắt đầu (**`StartDate`**) và hạn chót (**`DueDate`**).
5. Đánh dấu cột **`Important`** (Quan trọng) và **`Urgent`** (Khẩn cấp) để hệ thống tự động đưa vào Ma trận Eisenhower.

### Bước 4: Cập nhật trạng thái và theo dõi ngày trễ
1. Khi bắt đầu làm: Chọn cột **`Status`** thành **`DOING`**.
2. Khi hoàn tất: Chọn **`Status`** thành **`DONE`**.
3. Cột **`DaysLate` (Số ngày trễ)** sẽ tự động tính toán:
   - Nếu hoàn thành trước/đúng hạn: Trả về **`0`**.
   - Nếu hoàn thành trễ: Trả về **số ngày trễ thực tế**.
   - Nếu công việc chưa xong và đã quá ngày hôm nay: Trả về **số ngày quá hạn liên tục**.
   - Nếu công việc bị hủy (**`CANCELLED`**) hoặc chưa đặt hạn chót: Để trống, không báo trễ.

### Bước 5: Phân tích chỉ số tại tab `DASHBOARD`
1. Tab **`DASHBOARD`** tự động tổng hợp:
   - **Tỷ lệ hoàn thành:** Tính trên các việc cần làm (tự động loại bỏ các việc đã hủy).
   - **Số việc đang quá hạn:** Cảnh báo đỏ các công việc cần xử lý gấp.
   - **Ma trận Eisenhower 4 ô:** Giúp bạn tập trung vào việc quan trọng và khẩn cấp (Làm ngay) và lên lịch cho việc quan trọng dài hạn.

---

## 2. MINH BẠCH VỀ CHI PHÍ NỀN TẢNG (GOOGLE WORKSPACE & APPSHEET)

Minh Templates cam kết thông tin trung thực về mặt chi phí kỹ thuật:
- **Bản Google Sheets (`F01-SHEET`):** Hoạt động hoàn toàn miễn phí trên mọi tài khoản Google cá nhân (@gmail.com) hoặc tài khoản Google Workspace có sẵn.
- **Bản Ứng dụng di động AppSheet (`F01-APPSHEET`):**
  - AppSheet cho phép **thử nghiệm miễn phí tối đa 10 người dùng** (trong cùng prototype mode).
  - Khi triển khai cho doanh nghiệp hoặc đội nhóm chính thức, Google áp dụng biểu phí theo chính sách của Google (Starter: 5 USD/người/tháng, Core: 10 USD/người/tháng, Enterprise).
  - **Minh Templates tuyệt đối không quảng cáo sai sự thật rằng AppSheet "Miễn phí trọn đời cho nhiều người dùng".** Phí template của Minh Templates là phí mã nguồn/bản mẫu một lần; phí bản quyền nền tảng do khách hàng chi trả trực tiếp cho Google nếu có nhu cầu nâng cấp.

---

## 3. BẢO VỆ DỮ LIỆU & BẢN QUYỀN
- Sản phẩm này được thiết kế theo nguyên tắc bảo vệ quyền riêng tư: Toàn bộ dữ liệu của bạn nằm 100% trên Google Drive của bạn. Minh Templates không có quyền truy cập hoặc thu thập dữ liệu của khách hàng.
- Tuyệt đối không xóa các cột hệ thống (`ID`, `CreatedAt`, `RowVersion`, `Archived`) để đảm bảo không gãy liên kết công thức và tích hợp di động.
