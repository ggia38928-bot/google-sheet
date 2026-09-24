# KỊCH BẢN TỰ ĐỘNG HÓA APPSHEET (BOTS SPECIFICATION) - F01

## 1. Bot Nhắc Hạn Công Việc (Bot_Task_Due_Reminder)
- **Mục đích:** Gửi thông báo đẩy (Push notification) hoặc Email cho người phụ trách trước 24 giờ khi công việc tới hạn chót.
- **Sự kiện kích hoạt (Event):** Lập lịch hàng ngày lúc 08:00 (Múi giờ `Asia/Ho_Chi_Minh`).
- **Điều kiện chạy (Condition):**
  ```text
  AND(
    [Status] <> "DONE",
    [Status] <> "CANCELLED",
    ISNOTBLANK([DueDate]),
    [DueDate] <= TODAY() + 1,
    [DueDate] >= TODAY()
  )
  ```
- **Hành động (Process / Task):** Gửi Email / Thông báo tới `[OwnerEmail]`.
- **Khóa chống gửi trùng (DedupKey):**
  ```text
  CONCATENATE([ID], "_", TEXT([DueDate], "YYYYMMDD"), "_", [OwnerEmail], "_DUE_REMINDER")
  ```
- **Xử lý lỗi:** Ghi nhận lỗi vào bảng `Jobs`, không gián đoạn luồng người dùng.

---

## 2. Bot Cảnh Báo Quá Hạn (Bot_Task_Overdue_Alert)
- **Mục đích:** Thông báo công việc đã bị trễ hạn.
- **Sự kiện kích hoạt (Event):** Lập lịch hàng ngày lúc 09:00 (Múi giờ `Asia/Ho_Chi_Minh`).
- **Điều kiện chạy (Condition):**
  ```text
  AND(
    [Status] <> "DONE",
    [Status] <> "CANCELLED",
    ISNOTBLANK([DueDate]),
    [DueDate] < TODAY()
  )
  ```
- **Khóa chống gửi trùng (DedupKey):**
  ```text
  CONCATENATE([ID], "_", TEXT(TODAY(), "YYYYMMDD"), "_", [OwnerEmail], "_OVERDUE_ALERT")
  ```
