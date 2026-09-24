# KIẾN TRÚC HỆ THỐNG "MINH TEMPLATES FACTORY"
**Phiên bản:** 1.0.0  
**Tác giả:** Lead Software Architect & Automation Engineer  
**Thương hiệu:** Minh Templates  
**Ngày cập nhật:** 07/09/2026  

---

## 1. TỔNG QUAN HỆ THỐNG

Minh Templates Factory là hệ thống chế tạo, kiểm thử tự động và đóng gói thương mại các sản phẩm số dựa trên nền tảng Google Workspace (Google Sheets, Apps Script Web App, AppSheet).

Hệ thống được tổ chức theo mô hình **Monorepo đa tầng (Layered Clean Architecture)**, tách biệt hoàn toàn giữa tính toán nghiệp vụ thuần túy (Domain), định nghĩa dữ liệu (Schema), biên dịch giao diện bảng tính (Sheets), dịch vụ backend (Apps Script/GAS), cấu hình ứng dụng di động (AppSheet) và hạ tầng kiểm thử tự động (Testing).

```
+---------------------------------------------------------------------------------+
|                                MINH TEMPLATES FACTORY                           |
+---------------------------------------------------------------------------------+
|  packages/domain/       | Thuần Node.js, Zero External Deps, Pure Business Logic|
|  packages/schema/       | Types, Enums, Field Whitelists, Baseline Contracts    |
|  packages/sheets/       | Sheet Builder, Named Functions, Protection API, Rules |
|  packages/gas/          | Apps Script V8, RPC Router, Idempotency, Concurrency  |
|  packages/appsheet/     | Generator: tables, columns, views, actions, bots, sec |
|  packages/testing/      | Mock Google APIs, Acceptance Assertions, Test Runner  |
+---------------------------------------------------------------------------------+
|  products/              | Các dòng nghiệp vụ độc lập (F01 - F50)                |
|  utilities/             | Các công cụ/tiện ích độc lập (U01 - U29)              |
|  releases/              | Artifacts xuất xưởng: Demo, Clean, Docs, Manifest     |
+---------------------------------------------------------------------------------+
```

---

## 2. NGUYÊN TẮC THIẾT KẾ BẮT BUỘC (ARCHITECTURAL INVARIANTS)

1. **Mô hình Khách hàng độc lập (Single-Tenant Data Store):**
   - Mỗi khách hàng mua template sở hữu một bản sao Google Sheet / App riêng biệt.
   - Tuyệt đối không gom dữ liệu nhiều khách hàng vào chung một Google Sheet backend.

2. **Hợp đồng dữ liệu nền tảng (Data Contract Baseline):**
   - Tất cả các bảng nghiệp vụ **bắt buộc** có 6 cột hệ thống chuẩn:
     * `ID:Text` (Khóa chính ổn định tạo 1 lần duy nhất bằng UUIDv4).
     * `CreatedAt:DateTime` (Thời điểm tạo bản ghi).
     * `UpdatedAt:DateTime` (Thời điểm cập nhật bản ghi gần nhất).
     * `CreatedBy:Email` (Email người tạo bản ghi).
     * `RowVersion:Number` (Số phiên bản dòng, khởi tạo = 1, tăng 1 sau mỗi lần sửa).
     * `Archived:YesNo` (Cờ lưu trữ / xóa mềm, mặc định FALSE).
   - **CẤM:** Tuyệt đối không dùng `ROW()`, `RAND()`, hoặc `NOW()` biến động làm ID hoặc timestamp lịch sử.

3. **Chuẩn hiển thị & Định dạng:**
   - Locale: `vi-VN`
   - Múi giờ: `Asia/Ho_Chi_Minh` (GMT+7)
   - Tiền tệ: `VND` (Lưu số nguyên integer, không lưu số thập phân, định dạng hiển thị `#,##0 "₫"`).
   - Tỷ lệ phần trăm: Lưu dạng số thực `0.00` đến `1.00`, định dạng hiển thị `0.0%`.
   - Ngày tháng: Lưu trữ chuẩn `Date` object / ISO, hiển thị `dd/MM/yyyy`.
   - Mã định danh, Mã đơn, SĐT: Bắt buộc ép kiểu `Text` để bảo toàn số `0` ở đầu (ví dụ: `"0912345678"`).

4. **Bảo mật & Kiểm soát luồng ghi (Security & Concurrency Control):**
   - **Chống Formula Injection:** Mọi chuỗi nhập từ người dùng bắt đầu bằng `=`, `+`, `-`, `@` phải được escape an toàn (tiền tố `'`).
   - **Chống ghi đè (Optimistic Locking):** Mọi thao tác cập nhật phải gửi kèm `expectedRowVersion`. Nếu `current.RowVersion !== expectedRowVersion`, giao dịch bị từ chối với mã lỗi `ERROR_CONCURRENCY_CONFLICT`.
   - **Chống trùng lặp (Idempotency):** Mọi request ghi mang `RequestID`. Hệ thống kiểm tra nhật ký `AuditLog`/`Jobs` trước khi thực thi để tránh nhân đôi giao dịch.
   - **Whitelist chặt chẽ:** Chỉ các phương thức và trường được khai báo trong Whitelist mới được phép đọc/ghi.

---

## 3. 6 BẢNG DÙNG CHUNG (CORE COMMON TABLES)

| Tên bảng | Khóa chính | Các cột nghiệp vụ chuẩn | Chức năng |
|---|---|---|---|
| `Settings` | `Key` | `Key`, `Value`, `ValueType`, `Description`, `UpdatedAt` | Lưu cấu hình hệ thống (timezone, currency, locale, org) |
| `Users` | `Email` | `Email`, `DisplayName`, `Role`, `TeamID`, `Active`, `RowVersion` | Quản lý danh tính, vai trò (OWNER, MANAGER, STAFF, VIEWER) |
| `Teams` | `ID` | `ID`, `Name`, `ManagerEmail`, `RowVersion` | Quản lý phòng ban/đội nhóm |
| `AuditLog` | `ID` | `ID`, `ActorEmail`, `Entity`, `EntityID`, `Operation`, `ChangedFields`, `Timestamp`, `RequestID` | Nhật ký vận hành bất biến phục vụ đối soát và audit |
| `Files` | `ID` | `ID`, `Entity`, `EntityID`, `DriveFileID`, `MimeType`, `UploadedBy`, `Visibility` | Quản lý liên kết tệp đính kèm trên Google Drive |
| `Jobs` | `ID` | `ID`, `Type`, `PayloadRef`, `State`, `Attempt`, `NextRunAt`, `DedupKey`, `LastError` | Quản lý hàng đợi và tác vụ nền (Queue/Background Job) |

---

## 4. CHI TIẾT CÁC GÓI THÀNH PHẦN (PACKAGES)

### 4.1. `packages/domain/`
Chứa các thực thể (Entities), máy trạng thái (State Machines), quy tắc chuyển giao thời gian (Recurrence rules), và các hàm tính toán KPI thuần túy.
- **Ràng buộc:** Zero external dependencies (chỉ dùng Node.js core).
- **Khả năng kiểm thử:** 100% chạy offline độc lập không cần Google Spreadsheet.

### 4.2. `packages/schema/`
Chứa hợp đồng dữ liệu, schemas JSON/JS, validation logic, enum whitelists và cơ chế di chuyển lược đồ (schema migration).

### 4.3. `packages/sheets/`
Bộ biên dịch cấu trúc bảng tính Google Sheets:
- Tạo các tab: `START_HERE`, `DASHBOARD`, các bảng nhập liệu nghiệp vụ, `SETTINGS`.
- Biên dịch công thức chống lỗi (`#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`).
- Thiết lập định dạng có điều kiện, tô màu theo trạng thái và bảo vệ ô (cell protection).

### 4.4. `packages/gas/`
Bộ khung Google Apps Script V8:
- RPC Router phân luồng các lệnh từ Web App hoặc Add-on.
- Bộ bọc `LockService` an toàn với retry & timeout.
- Bộ xử lý bảo mật, chống Formula Injection và kiểm soát quyền theo vai trò.

### 4.5. `packages/appsheet/`
Bộ sinh cấu hình AppSheet chuẩn:
- `tables.csv`: Cấu hình danh sách bảng và security filter.
- `columns.csv`: Chi tiết từng cột (Type, Key, Label, Initial value, Valid_If, Editable_If).
- `views.csv`: Danh sách các màn hình giao diện (UX Views, Slices).
- `actions.csv`: Hành vi chuyển trạng thái (Start, Complete, Reopen, Cancel).
- `bots.md`: Kịch bản tự động hóa thông báo nhắc hạn kèm Dedup Key.

### 4.6. `packages/testing/`
Hạ tầng kiểm thử toàn diện 3 tầng:
- Tầng 1: Domain Unit Tests (Logic, State Machine, Recurrence, Unicode).
- Tầng 2: Formula & Engine Tests (Syntax công thức, ca nghiệm thu F01 50% hoàn thành).
- Tầng 3: Security & Concurrency Tests (Idempotency, Optimistic lock, Whitelist).
- Test Runner in kết quả chi tiết `EXPECTED vs ACTUAL`.

---

## 5. ĐÓNG GÓI THƯƠNG MẠI (COMMERCIAL PACKAGING)

Mỗi sản phẩm xuất xưởng đặt trong `releases/<FAMILY_ID>/<VERSION>/`:
- `RELEASE_MANIFEST.json`: Bản kê chi tiết metadata, trạng thái phát hành, checklist nghiệm thu.
- `installer.js`: Công cụ cài đặt tự động đa năng (`dryRun`, `installFresh`, `seedDemo`, `migrate`, `validate`, `resetDemo`).
- `demo/`: Dữ liệu mẫu hoàn chỉnh phục vụ trải nghiệm và quảng bá.
- `clean/`: Bản cài sạch nguyên bản 0 dòng dữ liệu nghiệp vụ, sẵn sàng sử dụng.
- `appsheet/`: Bộ cấu hình CSV và Markdown hoàn chỉnh cho AppSheet.
- `docs/`: Hướng dẫn sử dụng 5 bước (`README.md`), câu hỏi thường gặp (`FAQ.md`), hướng dẫn sửa lỗi (`TROUBLESHOOTING.md`).
