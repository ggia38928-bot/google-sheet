# HƯỚNG DẪN THIẾT LẬP APPSHEET CHO F01 (APPSHEET SETUP GUIDE)
**Sản phẩm:** F01 - Việc cá nhân và ưu tiên (Biến thể APPSHEET)  
**Tài liệu tham chiếu:** `tables.csv`, `columns.csv`, `views.csv`, `actions.csv`, `bots.md`  

---

## 1. TỔNG QUAN CÁC BƯỚC THIẾT LẬP (MANUAL / GENERATOR)

1. **Bước 1: Chuẩn bị nguồn dữ liệu**
   - Đảm bảo file Google Sheets đã được khởi tạo bản sạch hoặc nạp dữ liệu demo từ `releases/F01/1.0.0/demo/Tasks.csv`.
   - File Google Sheets phải chứa đầy đủ các tab: `Tasks`, `Categories`, `TaskEvents`, `Users`, `SETTINGS`.

2. **Bước 2: Tạo ứng dụng mới trên AppSheet**
   - Truy cập [AppSheet Console](https://www.appsheet.com).
   - Nhấp vào **Create** > **App** > **Start with existing data**.
   - Đặt tên App: `Minh Templates - F01 Task Tracker`.
   - Chọn nhà cung cấp: **Google Sheets**, sau đó chọn file Google Sheets vừa chuẩn bị ở Bước 1.

3. **Bước 3: Cấu hình Bảng (Data > Tables)**
   - Mở file `releases/F01/1.0.0/appsheet/tables.csv`.
   - Lần lượt thêm các bảng: `Tasks`, `Categories`, `TaskEvents`, `Users`, `Settings`.
   - Tại bảng `Tasks`, nhập công thức **Security Filter**:
     ```text
     AND(
       LOOKUP(USEREMAIL(), "Users", "Email", "Active") = TRUE,
       OR(
         LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "OWNER",
         [OwnerEmail] = USEREMAIL()
       )
     )
     ```

4. **Bước 4: Cấu hình Cột (Data > Columns)**
   - Mở file `releases/F01/1.0.0/appsheet/columns.csv`.
   - Đối chiếu và cập nhật các thuộc tính:
     * `Tasks.ID`: Key = TRUE, Initial value = `UNIQUEID()`, Editable? = `FALSE`.
     * `Tasks.OwnerEmail`: Type = Email, Initial value = `USEREMAIL()`, Editable? = `LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "OWNER"`.
     * `Tasks.Priority`: Type = Enum (THẤP, TRUNG BÌNH, CAO, KHẨN CẤP).
     * `Tasks.Status`: Type = Enum (TODO, DOING, DONE, CANCELLED).
     * `Tasks.Progress`: Type = Percent.
     * `Tasks.DaysLate`: Type = Number, App Formula theo `columns.csv`.

5. **Bước 5: Cấu hình Giao diện (App > Views)**
   - Mở file `releases/F01/1.0.0/appsheet/views.csv`.
   - Tạo các views: `My Tasks` (Deck View, vị trí Primary), `Calendar` (Calendar View), `Overdue` (Table View), `Dashboard`, `Settings`.

6. **Bước 6: Cấu hình Hành vi (App > Actions)**
   - Mở file `releases/F01/1.0.0/appsheet/actions.csv`.
   - Tạo các actions chuyển trạng thái 1-chạm: `Start Task`, `Complete Task`, `Cancel Task`, `Reopen Task`.

7. **Bước 7: Kích hoạt Tự động hóa (Automation > Bots)**
   - Mở file `releases/F01/1.0.0/appsheet/bots.md`.
   - Thiết lập bot `Bot_Task_Due_Reminder` (nhắc hạn 24h trước) và `Bot_Task_Overdue_Alert` (báo quá hạn) kèm DedupKey để chống spam thông báo.
