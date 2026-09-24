# Bộ đặc tả xây dựng cửa hàng Google Sheets, Web App và AppSheet

**Ngôn ngữ:** tiếng Việt. **Ngày khảo sát:** 07/09/2026. **Thương hiệu làm việc:** Minh Templates, có thể đổi trong cấu hình. **Mục tiêu:** xây dựng danh mục sản phẩm số riêng để bán, tham chiếu nhu cầu và nhóm chức năng công khai trên [Tạp Hóa Sheet](https://taphoasheet.store/shop/) và [GSheets](https://gsheets.vn/template/).

Đây là tài liệu đầu vào cho Codex xây dựng sản phẩm. Tài liệu không phải bộ template đã chạy, không bao gồm mã nguồn hoặc file trả phí của hai website, và không khẳng định đã kiểm thử sản phẩm của họ. Bảng đối chiếu cuối tài liệu ghi các mục công khai tìm được tại thời điểm khảo sát. Các chức năng, mô hình dữ liệu và tiêu chí nghiệm thu bên dưới là thiết kế mới được đề xuất; không được hiểu là toàn bộ tính năng nội bộ đã xác minh của sản phẩm tham khảo.

**Nội dung:** 247 mục trong danh mục shop → 49 dòng nghiệp vụ + 29 nhóm tiện ích; thêm F50 cho bộ kế hoạch cuộc sống ngoài shop. Tổng cộng 79 đặc tả, kèm prompt thực thi, kiến trúc, schema nghiệp vụ, KPI, AppSheet setup, kiểm thử và đóng gói bán hàng. Bắt đầu bằng mục 1; tra nhanh [F01](#f01), [F17](#f17), [F18](#f18), [F21](#f21), [U01](#u01).

## 1. Dùng ngay với Codex

1. Tạo thư mục dự án `minh-template-factory`, đặt tài liệu này vào thư mục đó, mở bằng Codex.
2. Dán **Prompt khởi động** dưới đây. Codex tạo nền tảng dùng chung, chuyển danh mục trong tài liệu thành dữ liệu máy đọc được và build sản phẩm đầu tiên.
3. Sau khi sản phẩm đầu tiên qua nghiệm thu, dùng **Prompt build sản phẩm tiếp theo**. Mỗi lượt hoàn thành một sản phẩm hoặc một nhóm tiện ích nhỏ; trạng thái được ghi vào file để tiếp tục ở phiên sau.
4. Chỉ ghi `ready_to_sell` sau khi cài thử bằng tài khoản sạch, có file demo, tài liệu và báo cáo nghiệm thu. Có code mà chưa triển khai thì ghi `implemented_local`, không đánh dấu đã bán được.

### Prompt khởi động

```text
Đọc toàn bộ BUILD_ALL_TEMPLATES_CODEX.md. Hãy thực thi dự án, không chỉ trả lời kế hoạch.

Mục tiêu: xây dựng bộ sản phẩm Google Sheets, Apps Script Web App và cấu hình
AppSheet mang thương hiệu Minh Templates, theo toàn bộ bảng đối chiếu nguồn.

Lượt đầu:
1. Kiểm tra repository và hướng dẫn hiện có. Giữ nguyên thay đổi của người dùng.
2. Tạo PRODUCT_CATALOG.json từ các dòng Fxx/Uxx và SOURCE_MAP.csv từ phụ lục.
3. Tạo ARCHITECTURE.md, BUILD_QUEUE.md, PROGRESS.md, ASSUMPTIONS.md,
   BLOCKERS.md, AGENTS.md và cấu trúc thư mục quy định trong tài liệu.
4. Xây core schema, sheet installer, validation, locale, data fixtures,
   dashboard primitives, audit, export và cơ chế migration có thể chạy lại.
5. Build F01 bản SHEET hoàn chỉnh theo hợp đồng đầu ra và các ca nghiệm thu.
6. Chạy kiểm tra thực tế khả dụng; ghi rõ kiểm tra nào cần tài khoản Google.
7. Lưu mã nguồn, mẫu dữ liệu, hướng dẫn cài, kết quả kiểm tra và checkpoint.

Không tự biến toàn bộ sản phẩm thành một website CRUD chung. Mỗi dòng phải có
nghiệp vụ, công thức, demo, hướng dẫn và gói cài riêng. Dùng code chung qua packages.
Không sao chép thương hiệu, hình ảnh, nội dung mô tả hoặc mã nguồn trả phí nguồn.
Không bịa API tạo AppSheet, đường dẫn /copy, deployment URL hoặc kết quả test.
Chọn các mặc định đã nêu, tiếp tục phần có thể làm khi thiếu dịch vụ ngoài;
ghi rõ phần bị chặn và bước thiết lập thật sự cần người sở hữu tài khoản.
Không gửi email thật, thu tiền hoặc công bố sản phẩm trong các bài test.
Kết thúc lượt bằng: file đã tạo, cách chạy, kiểm tra đã qua, phần chưa qua,
và lệnh/prompt tiếp theo. Không đánh dấu toàn bộ danh mục đã hoàn thành.
```

### Prompt build sản phẩm tiếp theo

```text
Đọc BUILD_ALL_TEMPLATES_CODEX.md, PRODUCT_CATALOG.json, BUILD_QUEUE.md,
PROGRESS.md và BLOCKERS.md. Tiếp tục từ checkpoint hiện tại.
Chọn sản phẩm ưu tiên cao nhất chưa hoàn thành mà dependency đã sẵn sàng.
Hoàn thành đủ schema, logic, giao diện, mẫu dữ liệu, installer, kiểm thử,
tài liệu khách hàng và release manifest của đúng sản phẩm đó.
Tạo các biến thể SHEET/WEB/APPSHEET theo ma trận, không tạo bản giả thay thế.
Nếu biến thể cần tài khoản Google chưa có, hoàn thành phần mã/cấu hình local,
ghi blocked_external_setup, rồi tiếp tục việc độc lập còn được phép.
Cập nhật PROGRESS.md và SOURCE_MAP.csv để truy được mục nguồn nào đã bao phủ.
```

### Prompt build riêng AppSheet

```text
Build biến thể APPSHEET cho FAMILY_ID đã chọn theo phần AppSheet của tài liệu.
Tạo workbook nguồn hoặc installer Google Sheets; schema có kiểu dữ liệu,
Key/Label/Ref, Initial value, App formula, Valid_If và Editable_If.
Tạo APPSHEET_SETUP.md ghi từng bảng, view, action, bot, security filter,
và TEST_PLAN.md có tài khoản owner/manager/staff/viewer để kiểm tra phân quyền.
Nếu chưa có quyền vào AppSheet editor, giao bộ cấu hình có thể thực hiện,
không tuyên bố đã tạo app thật. Không xem file JSON nội bộ là định dạng import
AppSheet chính thức. Kiểm tra tài liệu hiện hành trước khi dùng API.
```

## 2. Phạm vi và nguyên tắc bao phủ

- Bao phủ các mục template, web app và tiện ích được liệt kê trong danh mục sản phẩm công khai đã khảo sát; gồm cả mục miễn phí và phiên bản cũ.
- Các phiên bản cũ cùng nhu cầu được ánh xạ về một dòng sản phẩm mới và một backlog tính năng. Không nhân bản mã nguồn cho mỗi số phiên bản của đối thủ.
- Những tiện ích nhỏ vẫn có mã Uxx và tiêu chí nghiệm thu riêng; không bỏ qua vì giá thấp hoặc miễn phí.
- Khóa học, dịch vụ tư vấn, bài blog và nội dung chỉ thấy sau đăng nhập không được coi là template trong phạm vi này. Nếu phát hiện mục dạng đó nằm trong danh mục, ghi loại rõ trong đối chiếu.
- “Bao phủ” nghĩa là mỗi mục nguồn có dòng đích và đặc tả build; không phải cam kết giống 100% mọi chức năng chưa thể xem. Trước mỗi đợt release, Codex kiểm tra lại link nguồn tương ứng và bổ sung chênh lệch công khai còn thiếu vào backlog.
- Tất cả tên bán hàng, layout, màu sắc, ảnh demo, nội dung hướng dẫn và mã phải do dự án tạo mới. Chỉ giữ tên nguồn ngắn trong bảng đối chiếu để truy vết.

## 3. Chọn nền tảng đúng cho sản phẩm

| Biến thể | Đầu ra thực tế | Dùng khi | Cách giao cho khách |
|---|---|---|---|
| SHEET | Google Sheets có công thức, validation, dashboard; Apps Script nếu cần | Planner, báo cáo, file quản lý nhỏ | File master chỉ xem và link tạo bản sao đã kiểm tra; tài liệu cài script/trigger |
| WEB | HTML/CSS/JavaScript và Apps Script backend, dữ liệu Sheets | Form nhập liệu, bảng điều khiển, quy trình đơn giản trong phạm vi phù hợp | Mã nguồn + installer + hướng dẫn deploy vào tài khoản khách |
| APPSHEET | App thực trên AppSheet + nguồn dữ liệu + bảng cấu hình | Thao tác trên điện thoại, ảnh, quét mã, workflow nội bộ | Copy app/template theo tính năng nền tảng, kiểm tra lại ownership/data source/licence |
| UTILITY | Named Function, Apps Script menu/sidebar hoặc công cụ trình duyệt | Tách chuỗi, import, export, lịch, xử lý ảnh | Mẫu dữ liệu + hàm/mã + hướng dẫn nhập/cài + ca kiểm tra |

Nhãn “Webapp” ở nguồn chỉ xác nhận cách họ mô tả sản phẩm; không tự suy ra công nghệ AppSheet. Apps Script hỗ trợ web app qua `doGet`/`doPost`, nhưng ngữ cảnh thực thi quyết định quyền truy cập. [Tài liệu Apps Script Web Apps](https://developers.google.com/apps-script/guides/web).

Mặc định thương mại: bán bản SHEET tự dùng và bản WEB khách tự triển khai; APPSHEET là gói riêng cho nghiệp vụ cần mobile. Không hứa mọi dòng đều có cả ba biến thể; ma trận Fxx xác định biến thể có ý nghĩa. Tiện ích Uxx không phải app di động nếu không có nhu cầu thực tế.

### Giới hạn kỹ thuật phải thiết kế ngay

- **AppSheet:** chi phí template khác chi phí nền tảng. Tại ngày khảo sát, trang chính thức nêu Starter 5 USD, Core 10 USD, Enterprise Plus 20 USD/người/tháng; có thử nghiệm tối đa 10 người. Phân quyền nâng cao phải đối chiếu gói phù hợp; quyền lợi Workspace và người dùng ngoài tổ chức cần kiểm tra theo tài khoản khách. Không quảng cáo app nhiều người là “miễn phí trọn đời”. [Giá AppSheet](https://about.appsheet.com/pricing/).
- **API AppSheet:** tài liệu được kiểm tra mô tả thao tác bản ghi, action và giám sát; không dùng tài liệu này để giả định có API dựng toàn bộ app. API được mô tả dành cho gói Enterprise. Bộ JSON của dự án là đặc tả nội bộ, không phải file import chính thức. [Phạm vi API](https://support.google.com/appsheet/answer/10105768?hl=en).
- **Apps Script:** chạy batch, checkpoint, retry và hàng đợi theo hạn ngạch thực tế. Không ghi SLA, số người đồng thời hoặc “không giới hạn dữ liệu” khi chưa đo. [Hạn ngạch](https://developers.google.com/apps-script/guides/services/quotas).
- **Sheets:** không có transaction liên bảng như SQL. `LockService` chỉ phối hợp các lần chạy script có dùng cùng lock; không khóa người dùng sửa trực tiếp hoặc writer AppSheet độc lập. Các nghiệp vụ tồn kho/booking/thanh toán phải đi qua một luồng ghi được kiểm soát. [LockService](https://developers.google.com/apps-script/reference/lock/lock-service).
- **Danh tính:** không tin email/role từ form trình duyệt. `Session.getActiveUser().getEmail()` có thể trả chuỗi rỗng tùy ngữ cảnh; thiếu danh tính thì từ chối truy cập dữ liệu riêng. Không dùng `getEffectiveUser()` để giả làm người dùng cuối. [Session](https://developers.google.com/apps-script/reference/base/session).

## 4. Kiến trúc nhà máy template

Xây các gói nhỏ dùng chung, xuất bản riêng từng dòng. Một khách hàng/một bản sao dữ liệu là mô hình mặc định. Không gom dữ liệu của các khách mua template vào cùng một Google Sheet chung.

| Đường dẫn đề xuất | Trách nhiệm |
|---|---|
| `packages/domain/` | Tính toán và chuyển trạng thái nghiệp vụ thuần, kiểm thử được ngoài Google |
| `packages/schema/` | Kiểu, validation, khoá, enum, quan hệ, migration |
| `packages/sheets/` | Khởi tạo tab, named ranges, công thức, định dạng, chart, menu, protection |
| `packages/gas/` | Repository Sheets, permission, audit, queue, export, trigger setup |
| `packages/web/` | Thành phần form/table/filter/dashboard, xử lý trạng thái loading/error |
| `packages/appsheet/` | Generator tài liệu cấu hình bảng/cột/views/actions/bots; không giả làm SDK triển khai |
| `packages/testing/` | Dữ liệu giả lập, assertion nghiệp vụ, kiểm tra quyền và cài mới |
| `products/Fxx-slug/` | Cấu hình và nghiệp vụ riêng của một dòng sản phẩm |
| `utilities/Uxx-slug/` | Hàm hoặc công cụ riêng, dependency tối thiểu |
| `releases/<sku>/<version>/` | Gói khách hàng, manifest và chứng cứ nghiệm thu |
| `docs/` | Kiến trúc, vận hành, hỗ trợ, hướng dẫn bán hàng |

### Công cụ và quy ước triển khai

- TypeScript cho domain và web UI nếu môi trường hỗ trợ; biên dịch mã Apps Script thành JavaScript phù hợp runtime V8. Không đưa module Node vào Apps Script.
- Pin phiên bản dependency và lưu lockfile. Chọn phiên bản ổn định được hỗ trợ tại lúc build; không cài “latest” mỗi lượt.
- Dùng `clasp` khi đã có xác thực hợp lệ để quản lý mã Apps Script. Đối chiếu cú pháp CLI với phiên bản đã pin. Không commit OAuth token hoặc đưa chúng vào ZIP bán hàng. [Hướng dẫn clasp](https://developers.google.com/apps-script/guides/clasp).
- Installer có `dryRun`, `installFresh`, `seedDemo`, `migrate`, `validate`, `resetDemo`; chạy lại không nhân đôi bảng, validation hoặc trigger. Reset chỉ tác động dữ liệu demo nhận diện rõ.
- Mỗi biến thể có nguồn sự thật rõ ràng. Không cho SHEET, WEB và APPSHEET ghi song song vào ledger tài chính/tồn kho khi chưa có cơ chế điều phối được kiểm thử.
- Dùng `schemaVersion` và migration có bản sao lưu, báo cáo thay đổi và phương án khôi phục. Không ghi đè dữ liệu của bản đang bán bằng fixture mới.

### Hợp đồng dữ liệu chung

Mỗi bảng nghiệp vụ có `ID:Text` ổn định, `CreatedAt:DateTime`, `UpdatedAt:DateTime`, `CreatedBy:Email`, `RowVersion:Number`, `Archived:YesNo`. Có thể bỏ bớt audit ở tiện ích thuần công thức; phải ghi lý do. ID tạo một lần bằng UUID hoặc cơ chế khóa của nền tảng; không dùng số hàng, `ROW()` hay công thức ngẫu nhiên thay đổi theo recalculation làm khóa.

| Bảng chung | Cột nghiệp vụ tối thiểu |
|---|---|
| `Settings` | Key, Value, ValueType, Description; timezone, currency, locale, fiscalYearStart |
| `Users` | Email (key), DisplayName, Role, TeamID, Active |
| `Teams` | ID, Name, ManagerEmail |
| `AuditLog` | ID, ActorEmail, Entity, EntityID, Operation, ChangedFields, Timestamp, RequestID |
| `Files` | ID, Entity, EntityID, DriveFileID, MimeType, UploadedBy, Visibility |
| `Jobs` | ID, Type, PayloadRef, State, Attempt, NextRunAt, DedupKey, LastError |

`AuditLog` chỉ là nhật ký vận hành, không tuyên bố chống sửa đổi nếu chủ file có thể sửa Sheets. Không đưa mật khẩu, token hoặc toàn bộ hồ sơ nhạy cảm vào log.

Chuẩn hiển thị: `vi-VN`, múi giờ `Asia/Ho_Chi_Minh`, tiền mặc định VND, ngày `dd/MM/yyyy`. Giá trị ngày phải là Date thực; đổi format không phải parse ngày. Tiền VND lưu số nguyên; phần trăm lưu 0–1; lượng có số lẻ phải có quy tắc làm tròn theo đơn vị. Trường điện thoại/mã đơn/mã định danh lưu Text để giữ số 0 đầu.

### Hợp đồng schema cho generator

```json
{
  "familyId": "F01",
  "sku": "F01-SHEET",
  "version": "1.0.0",
  "schemaVersion": 1,
  "locale": "vi-VN",
  "timeZone": "Asia/Ho_Chi_Minh",
  "tables": [{
    "name": "Tasks",
    "primaryKey": "ID",
    "columns": [
      {"name": "ID", "type": "text", "required": true, "immutable": true},
      {"name": "Title", "type": "text", "required": true},
      {"name": "DueDate", "type": "date", "required": false},
      {"name": "Status", "type": "enum", "values": ["TODO", "DOING", "DONE", "CANCELLED"]}
    ]
  }],
  "artifacts": ["installer", "demo", "manual", "test-report"],
  "status": "planned"
}
```

Đây là ví dụ định dạng, không phải schema đầy đủ của F01. Codex phải khai báo mọi cột, khóa ngoại, enum và rule ở đặc tả Fxx, không suy diễn rằng ví dụ rút gọn đã đủ.

## 5. Tiêu chuẩn sản phẩm Google Sheets

### Thiết kế và trải nghiệm

- Tab đầu `START_HERE`: công dụng, cách tạo bản sao, luồng dùng 5 bước, dữ liệu demo, nút kiểm tra cấu hình, phiên bản và nơi hỗ trợ.
- Tab tiếp `DASHBOARD`, rồi bảng nhập liệu và `SETTINGS`/`LISTS`. Ẩn tab phụ để gọn nhưng không gọi việc ẩn là bảo mật.
- Vùng nhập liệu xanh nhạt, vùng tính toán nền trung tính, cảnh báo cam; chú giải ngay trên file. Font hỗ trợ tiếng Việt; freeze header, bộ lọc, điều kiện tô màu, định dạng ngày/tiền nhất quán.
- Mỗi hàng một bản ghi, một hàng tiêu đề, không merge ô trong bảng dữ liệu. Dashboard có thể merge hợp lý nhưng không làm nguồn AppSheet.
- Không để biểu đồ trống khi chưa nhập dữ liệu; hiển thị hướng dẫn bắt đầu. Dashboard demo dùng cùng công thức với bản sạch.
- Formula cell được bảo vệ để tránh sửa nhầm; owner vẫn có thể chỉnh. Tách file/app khi cần bảo mật thật.
- Có bản demo và bản sạch, bộ lọc thời gian, reset bộ lọc, FAQ và lỗi thường gặp.

### Công thức tham chiếu cho F01

Trong tab `Tasks`, quy định A=ID, B=Title, C=OwnerEmail, D=Priority, E=StartDate, F=DueDate, G=Status, H=Progress, I=CompletedAt, J=DaysLate. Tối đa 10.000 hàng trong ví dụ; installer cấu hình vùng theo nhu cầu đã đo.

```excel
=IF(OR(A2="",F2="",G2="CANCELLED"),"",IF(G2="DONE",IF(I2="","",MAX(0,INT(I2)-F2)),MAX(0,TODAY()-F2)))
```

Đếm việc đang quá hạn tại thời điểm hôm nay, loại việc chưa có hạn:

```excel
=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")
```

Tỷ lệ hoàn thành tính trên việc không bị hủy; trả 0 khi mẫu rỗng:

```excel
=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)
```

Ví dụ dùng dấu phẩy theo cú pháp tiếng Anh; kiểm tra locale file thực tế trước khi chèn. Codex phải kiểm thử công thức trong Google Sheets, không xem việc parse được trong JavaScript là chứng cứ công thức chạy đúng. `CompletedAt` do thao tác hoàn thành ghi một lần, không dùng `NOW()` biến động làm dấu thời gian lịch sử. Khi mở lại việc, lưu sự kiện lịch sử và đặt lại mốc hoàn thành hiện hành.

Thứ tự cột ở ví dụ là hợp đồng riêng của sheet mẫu F01. Khi generator thêm cột audit hoặc thay bố cục, phải biên dịch lại tham chiếu từ schema/header map; không chép nguyên địa chỉ A:J vào một bố cục khác.

## 6. Tiêu chuẩn Web App dùng Apps Script

Mỗi app có dashboard, danh sách với tìm kiếm/lọc/phân trang, form thêm/sửa, chi tiết bản ghi, export phù hợp, cấu hình, trang báo lỗi và trạng thái rỗng. Nút bấm phải thực hiện nghiệp vụ và cập nhật dữ liệu thật; không chấp nhận màn hình minh họa thay sản phẩm.

### Phân quyền và luồng ghi

1. Mỗi RPC xác định người dùng từ nguồn danh tính đã xác minh, kiểm tra `Active`, role, quyền bản ghi và quyền trường ở backend.
2. Whitelist tên bảng, trường và operation. Không cho client gửi tùy ý sheet/range/script method để đọc dữ liệu ngoài quyền.
3. Validation server: kiểu, độ dài, enum, foreign key, quy tắc trạng thái, số tiền và ngày. Trả mã lỗi ổn định kèm thông điệp tiếng Việt.
4. Ghi với `RequestID` chống lặp, `expectedRowVersion` chống ghi đè dữ liệu mới, lock phù hợp phạm vi và re-read trong critical section.
5. Ledger dùng `DRAFT → POSTED → REVERSED`; không sửa âm thầm giao dịch đã ghi sổ. Multi-tab operation có journal/commit marker; dashboard chỉ tính giao dịch đã commit. Có repair/reconcile cho lần chạy lỗi giữa chừng.
6. Export và tệp đính kèm áp dụng cùng quyền với bản ghi nguồn. Escape HTML và xử lý chuỗi có thể gây spreadsheet formula injection khi import/export.

Apps Script web app dành cho nội bộ cùng miền Workspace có thể phù hợp nếu cấu hình danh tính/quyền truy cập được xác nhận bằng các tài khoản thử. Với người mua dùng Gmail cá nhân hoặc nhiều tổ chức, không giả định lấy được email tin cậy trong deployment chạy dưới owner. Chọn AppSheet sign-in hoặc backend có xác thực Google được kiểm tra đúng chuẩn; ghi rõ chi phí/cấu hình bổ sung. Chỉ cho phép bản WEB một người dùng nếu mô hình xác thực nhiều người chưa qua kiểm thử.

### Giao diện và hiệu năng

- Thiết kế riêng: màu chàm và xanh ngọc, nền sáng, khoảng trắng, icon nhất quán; thương hiệu cấu hình được.
- Đo ở 360 px, 768 px và desktop; bảng dài có chế độ card/mobile phù hợp.
- Debounce tìm kiếm, batch I/O, cache không chứa dữ liệu ngoài quyền, invalidate sau ghi. Không đọc toàn bộ file cho mỗi keypress.
- Nhắc việc qua queue và log kết quả; mẫu email và dry-run có sẵn. Lỗi gửi không làm mất dữ liệu nghiệp vụ.
- Tệp mẫu PDF phải có tiếng Việt đúng font, phân trang, tổng tiền và trạng thái bản nháp. Cách export có thể dựa vào mẫu công khai chính thức, giữ nghĩa vụ giấy phép khi tái sử dụng code. [Ví dụ xuất PDF từ Sheets](https://developers.google.com/apps-script/samples/automations/generate-pdfs).

## 7. Tiêu chuẩn AppSheet

### Bộ đầu ra bắt buộc

| File | Nội dung cần có |
|---|---|
| `APPSHEET_SETUP.md` | Tạo/copy app, kết nối bản sao nguồn, cài cấu hình, sign-in, kiểm tra và deploy |
| `tables.csv` | Tên bảng, nguồn sheet, key, label, quyền thêm/sửa/xóa, security filter |
| `columns.csv` | Bảng, tên cột, type, required, key, label, initial value, app formula, valid_if, editable_if, ref |
| `views.csv` | Tên, bảng/slice, loại, vị trí, thứ tự, group/sort, cột hiển thị |
| `actions.csv` | Action, bảng, điều kiện, loại, giá trị cập nhật, điều hướng |
| `bots.md` | Event, condition, process, task, lịch/timezone, chống trùng, xử lý lỗi |
| `SECURITY_TESTS.md` | Danh tính thử, dữ liệu từng người được thấy/đổi, kết quả thực tế |
| `HANDOVER.md` | Owner mới, nơi dữ liệu/tệp, nguồn template, chi phí nền tảng, hỗ trợ |

Các file CSV này là bảng cấu hình để người triển khai thao tác hoặc dùng generator nội bộ; không hứa AppSheet nhập tự động tất cả các file.

### Mẫu cấu hình F01 cho AppSheet

| Bảng/cột | Cấu hình |
|---|---|
| `Tasks.ID` | Text, Key, Initial value `UNIQUEID()`, không cho sửa |
| `Tasks.Title` | Text, Required |
| `Tasks.OwnerEmail` | Email hoặc Ref đến Users.Email, mặc định `USEREMAIL()`; quyền đổi riêng cho quản lý |
| `Tasks.Status` | Enum: TODO, DOING, DONE, CANCELLED |
| `Tasks.DueDate` | Date |
| `Tasks.Progress` | Percent, nằm trong 0–1 |
| `Tasks.CompletedAt` | DateTime, cập nhật bằng action hoàn thành; không dùng app formula NOW |
| `Tasks.ProjectID` nếu bật dự án | Ref đến Projects.ID |
| `Users.Email` | Text/Email key, chuẩn hóa email trước khi thêm; không tự đăng ký role admin |

Security filter minh họa cho `Tasks` trong một bản cài khách hàng, có owner nhìn toàn bộ và người dùng thường chỉ thấy việc mình:

```text
AND(
  LOOKUP(USEREMAIL(), "Users", "Email", "Active") = TRUE,
  OR(
    LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "OWNER",
    [OwnerEmail] = USEREMAIL()
  )
)
```

Mẫu này chưa bao gồm quyền manager theo team. Nếu thêm quyền team, phải có membership model và test riêng. Bảng Users chứa danh mục quyền tối thiểu, quản trị bởi owner; không cho staff tự sửa `Role`, `TeamID` hoặc `Active`. Thông tin nhân sự/lương phải ở bảng khác với security filter riêng. Child table, file và bảng tham chiếu cũng cần kiểm tra quyền, không chỉ bảng cha.

Slices phục vụ UX; chúng không thay thế security filters. [Phân biệt lọc bảo mật và slices](https://support.google.com/appsheet/answer/10104706?hl=en). Security filter là điều kiện chọn các dòng được đưa vào app. [Thiết lập security filter](https://support.google.com/appsheet/answer/10104488?hl=en).

Views tối thiểu cho F01: My Tasks, Task Detail, New Task, Calendar, Overdue, Dashboard, Settings. Actions: Start, Complete, Reopen, Cancel. Bot nhắc hạn có dedup theo `TaskID + DueDate + Recipient + ReminderType`; chỉ bật lịch thật sau khi kiểm tra tài khoản/gói và gửi thử đã được phép. Không giả định mọi sửa trực tiếp trên Google Sheets đều tự kích hoạt bot của AppSheet. [Events của AppSheet](https://support.google.com/appsheet/answer/11445188?hl=en).

### Nghiệp vụ cần tính nhất quán

Valid_If và công thức kiểm tra trùng giúp hướng dẫn người nhập, nhưng không được coi là khóa giao dịch giữa nhiều thiết bị, đặc biệt offline. Với tồn kho, đặt phòng, thuê tài sản, phê duyệt chi:

- Mobile ghi **yêu cầu** vào bảng request, chưa tác động ledger hoặc xác nhận tài nguyên.
- Một processor duy nhất kiểm tra lại tồn/trùng lịch và chuyển request sang APPROVED/REJECTED; chỉ kết quả được duyệt mới ghi ledger.
- Nếu dùng Apps Script processor, giữ mọi writer của ledger đi qua processor đó; không vừa ghi trực tiếp bằng AppSheet action vừa kỳ vọng `LockService` bảo vệ.
- Nếu cần cam kết đặt chỗ tức thì ở quy mô nhiều người, chuyển bước xác nhận sang backend có transaction/constraint. Bản Sheets phải ghi rõ tính chất chờ xác nhận.
- AppSheet bản giao khách phải chứng minh 2 người yêu cầu cùng tài nguyên chỉ có 1 yêu cầu được xác nhận khi không đủ số lượng.

## 8. Quyền mặc định

| Thao tác | OWNER | MANAGER | STAFF | VIEWER |
|---|---|---|---|---|
| Cấu hình và quản lý người dùng | Có | Không | Không | Không |
| Đọc nghiệp vụ thông thường | Toàn bộ bản cài | Team được giao | Bản ghi được giao | Phạm vi cấp riêng |
| Tạo/sửa bản nháp | Có | Trong phạm vi | Trong phạm vi | Không |
| Phê duyệt/ghi sổ | Có | Nếu được giao quyền | Không | Không |
| Sửa giao dịch đã ghi sổ | Qua quy trình đảo/điều chỉnh | Theo quyền | Không | Không |
| Export | Theo quyền dữ liệu | Theo quyền dữ liệu | Mặc định tắt | Mặc định tắt |
| Xóa dữ liệu | Archive có kiểm tra | Theo quy định | Không | Không |

Đây là mặc định; Fxx có quyền chuyên ngành như kế toán, giáo viên, lễ tân, tuyển dụng. Không dùng một role manager để tự động mở toàn bộ hồ sơ lương, sức khỏe hoặc tài chính cá nhân.

## 9. Hợp đồng nghiệm thu và gói bán hàng

### Một sản phẩm chỉ hoàn thành khi có

1. PRD ngắn, toàn bộ schema và rule, không còn cột tham chiếu chưa khai báo.
2. Bản demo có dữ liệu giả hợp lý, bản sạch, quy trình từ đầu đến cuối có thể chạy.
3. Installer/migration, mã nguồn, hướng dẫn cài và gỡ, cấu hình ví dụ không chứa bí mật.
4. Dashboard có định nghĩa KPI, nguồn dữ liệu, bộ lọc ngày và cách xử lý zero/null/cancelled.
5. Báo cáo test có expected/actual/evidence; ghi rõ local test và test trên Google thực tế.
6. Hướng dẫn khách hàng tiếng Việt, FAQ, troubleshooting, ghi chú giới hạn và chi phí nền tảng.
7. Ảnh demo do dự án tạo từ sản phẩm thật, mô tả bán hàng riêng, changelog và manifest phiên bản.

### Bộ kiểm tra chung

- Cài mới; cài lại; nâng schema; dữ liệu rỗng; tiếng Việt có dấu; số 0; ngày trống; đổi năm; năm nhuận; timezone.
- Nhập/sửa/archive/export; công thức không có `#REF!`, `#DIV/0!`, lỗi lookup chưa xử lý hoặc tham chiếu ngoài ý muốn.
- Thêm nhiều hàng; dropdown mới; filter; dashboard sau sửa/xóa; số tổng khớp fixture độc lập.
- Backend từ chối gọi thẳng trái quyền; staff không xem dữ liệu người khác; quyền file/PDF không rộng hơn quyền bản ghi.
- Request gửi lại không nhân đôi giao dịch; hai người cùng sửa phát hiện xung đột; lỗi giữa chừng có cách khôi phục.
- Ảnh hưởng của offline và sync phải được thử với AppSheet, nhất là các request có phê duyệt.
- Dataset nhỏ 100 bản ghi để kiểm tra nghiệp vụ; 5.000 bản ghi cho dòng quản lý để đo thao tác quan trọng. Đây là mục tiêu kiểm tra ban đầu, không phải hạn mức hoặc cam kết tốc độ. Ghi thiết bị, mạng, tài khoản, số dòng và thời gian thực đo.

### Release manifest

```json
{
  "sku": "F01-SHEET",
  "version": "1.0.0",
  "schemaVersion": 1,
  "status": "implemented_local",
  "testedOnGoogle": false,
  "sourceMapIds": [],
  "requiredServices": ["Google Sheets"],
  "includedFiles": [],
  "knownLimitations": [],
  "demoUrl": null,
  "copyUrl": null,
  "buildDate": null
}
```

Giá trị null phải được thay bằng kết quả thật khi release; không tự dựng URL. Status hợp lệ: `planned`, `in_progress`, `implemented_local`, `blocked_external_setup`, `verified`, `ready_to_sell`.

## 10. Trình tự build và đóng gói kinh doanh

| Đợt | Mục tiêu | Điều kiện chuyển đợt |
|---|---|---|
| 0 | Core, generator, F01 SHEET | Cài sạch và tính toán đúng, có hướng dẫn để người mới dùng |
| 1 | Việc/dự án, CRM, thu chi, tồn kho, bán hàng | Luồng nghiệp vụ và phân quyền qua test; tái dùng core thật |
| 2 | Nhân sự, tuyển dụng, lịch, nội dung, tài liệu | Bộ cài và release ổn định; không copy-paste core |
| 3 | Đặt phòng, thuê, F&B, lớp học, spa, sửa xe | Các ca trùng lịch/tồn/phân quyền chuyên ngành qua test |
| 4 | Báo cáo, planner, học tập và toàn bộ Uxx | Mọi mục nguồn có SKU đích hoặc lý do phân loại rõ ràng |
| 5 | Mini ERP và bộ combo | Module đơn lẻ đã ổn; liên kết dữ liệu không nhân đôi nguồn thật |
| 6 | Kiểm tra toàn danh mục và phát hành theo đợt | Không còn nguồn chưa ánh xạ; mỗi SKU có trạng thái và evidence |

Không gắn số tuần cố định trước khi đo tốc độ hoàn thành 2–3 SKU đầu. Ước tính lại theo thời gian cài đặt, kiểm thử, hỗ trợ và các chức năng cần nền tảng ngoài.

### Cấu trúc giá do người bán quyết định

- **Lite:** file Sheets và hướng dẫn tự dùng.
- **Pro:** dashboard nâng cao, tiện ích nhập/xuất, automation, dữ liệu demo và nguồn script theo chính sách bán.
- **App:** cấu hình/mobile AppSheet hoặc Web App, kèm phạm vi cài đặt rõ ràng.
- **Service:** phí triển khai, chuyển dữ liệu, đào tạo, tùy chỉnh và bảo trì; tách với giá file.

Không tự lấy giá đối thủ làm giá bán hoặc khẳng định lợi nhuận. Với từng SKU, tạo bảng giả định: giá bán, phí thanh toán, số phút hỗ trợ, tỷ lệ hoàn tiền, chi phí dịch vụ ngoài; người bán nhập dữ liệu thật trước khi quyết định.

### Cửa hàng bán template: backlog hỗ trợ, không thay thế sản phẩm

Trang chủ, danh mục/filter, chi tiết SKU, ảnh/video demo, bảng so sánh phiên bản, giỏ hàng, checkout, xác nhận thanh toán, giao file, thư viện bản đã mua, hướng dẫn và hỗ trợ. Có thể dùng nền tảng thương mại điện tử sẵn có hoặc build riêng sau khi có SKU tốt.

`Products`, `Variants`, `Orders`, `OrderItems`, `PaymentEvents`, `Entitlements`, `Releases`, `Downloads`, `SupportTickets` là schema tối thiểu. Payment webhook phải xác minh phía server theo nhà cung cấp đã chọn, đối chiếu order/amount/currency, chống xử lý trùng và có trạng thái hoàn tiền. Không giao file dựa chỉ vào query string “success”.

Link demo chỉ có dữ liệu giả. Bản giao khách tách dữ liệu và quyền sở hữu; kiểm tra bản sao không còn liên kết về dữ liệu riêng người bán. Không quảng cáo chống sao chép tuyệt đối đối với file và mã nguồn mà khách có quyền sở hữu. Điều khoản phạm vi sử dụng/hỗ trợ cần được người bán hoàn thiện trước khi bán chính thức; đây là yêu cầu sản phẩm, không phải tư vấn pháp lý.

## 11. Đặc tả từng dòng sản phẩm

**Cách đọc:** `S` = SHEET, `W` = WEB, `A` = APPSHEET. Biến thể bên dưới là kế hoạch mới; không phải khẳng định nguồn đang cung cấp nền tảng đó. Mỗi bảng liệt kê cột nghiệp vụ; các cột chuẩn tại mục 4 được thêm khi phù hợp. Các chức năng chuyên biệt được quy định bằng workflow, KPI và ca nghiệm thu, ngoài hợp đồng chung ở mục 9.


<!-- GENERATED_CATALOG_START -->

### Ma trận sản phẩm xây mới

Khảo sát đã thu thập **247 URL sản phẩm duy nhất**, gồm **20** mục từ Tạp Hóa Sheet và **227** từ GSheets. Mỗi URL có một dòng đối chiếu bên dưới. Chuẩn hóa thành **49 dòng sản phẩm nghiệp vụ + 29 nhóm tiện ích**; bổ sung **F50** cho bộ kế hoạch cuộc sống được giới thiệu ở chuyên mục miễn phí ngoài shop. Tổng đặc tả: **79 nhóm**. Đây là số nhóm thiết kế, không phải số file/app đã hoàn thành.

| Mã | Dòng sản phẩm mới | Biến thể | Đợt ưu tiên | Số mục nguồn liên quan |
|---|---|---|---|---|
| [F01](#f01) | Việc cá nhân và ưu tiên | S, W, A | 1 | 11 |
| [F02](#f02) | Dự án, công việc đội nhóm và KPI | S, W, A | 1 | 27 |
| [F03](#f03) | Công trình và tiến độ thi công | S, W, A | 3 | 1 |
| [F04](#f04) | Lịch nội dung và hiệu quả đa kênh | S, W, A | 2 | 1 |
| [F05](#f05) | CRM khách hàng và pipeline | S, W, A | 1 | 12 |
| [F06](#f06) | CRM đại lý ô tô | S, W, A | 2 | 1 |
| [F07](#f07) | Hợp đồng, phụ lục và phát sinh | S, W, A | 2 | 1 |
| [F08](#f08) | Văn bản, hồ sơ và chỉ đạo | S, W, A | 2 | 4 |
| [F09](#f09) | Lịch lãnh đạo, cuộc họp và công tác | S, W, A | 2 | 2 |
| [F10](#f10) | Khách sạn, homestay và đặt phòng | S, W, A | 3 | 4 |
| [F11](#f11) | Ngân sách cưới và tiền mừng | S, W, A | 3 | 1 |
| [F12](#f12) | Hồ sơ nhân sự | S, W, A | 2 | 5 |
| [F13](#f13) | Tuyển dụng và lịch phỏng vấn | S, W, A | 2 | 5 |
| [F14](#f14) | Thuê trang phục và phụ kiện | S, W, A | 3 | 1 |
| [F15](#f15) | Thuê xe và bảo dưỡng | S, W, A | 3 | 1 |
| [F16](#f16) | Định mức nguyên liệu spa và nail | S, W, A | 3 | 1 |
| [F17](#f17) | Thu chi doanh nghiệp và dòng tiền startup | S, W, A | 1 | 10 |
| [F18](#f18) | Nhập xuất tồn và kiểm kê | S, W, A | 1 | 6 |
| [F19](#f19) | Báo giá và phiên bản chào bán | S, W, A | 1 | 1 |
| [F20](#f20) | Bán hàng và đơn hàng | S, W, A | 1 | 2 |
| [F21](#f21) | Form nhập liệu và phân quyền cấu hình | S, W, A (schema cố định) | 2 | 13 |
| [F22](#f22) | Bất động sản: giỏ hàng, tra cứu và tính giá | S, W, A | 3 | 4 |
| [F23](#f23) | Tiệm sửa xe và dịch vụ hộ kinh doanh | S, W, A | 3 | 2 |
| [F24](#f24) | Mini ERP cho đơn vị nhỏ | W, A; S cho báo cáo | 5 | 1 |
| [F25](#f25) | Quán ăn, nhà hàng và cà phê | S, W, A | 3 | 3 |
| [F26](#f26) | Lớp học, điểm danh và học phí | S, W, A | 3 | 6 |
| [F27](#f27) | Cổng ứng dụng và báo cáo tập trung | W, A | 2 | 2 |
| [F28](#f28) | Lịch dịch vụ spa và phòng khám | S, W, A | 3 | 1 |
| [F29](#f29) | Bốc thăm và chia giải sự kiện | W; S cho danh sách | 4 | 2 |
| [F30](#f30) | Công nợ và phân bổ thanh toán | S, W, A | 1 | 2 |
| [F31](#f31) | Ghi chú và nhật trình cá nhân | S, W, A | 4 | 2 |
| [F32](#f32) | Chấm công và tổng hợp ca | S, W, A | 2 | 7 |
| [F33](#f33) | Tài chính cá nhân và gia đình | S, W, A | 4 | 5 |
| [F34](#f34) | Lập ngân sách doanh nghiệp | S, W, A | 2 | 2 |
| [F35](#f35) | Khảo sát và đánh giá phòng ban | S, W; A cho nội bộ | 4 | 2 |
| [F36](#f36) | Học tiếng Anh và ôn từ vựng | S, W, A | 4 | 2 |
| [F37](#f37) | Phân bổ chi tiêu theo các quỹ | S, W, A | 4 | 3 |
| [F38](#f38) | Nghỉ phép và số dư phép | S, W, A | 2 | 2 |
| [F39](#f39) | Đề nghị chi và phê duyệt thanh toán | S, W, A | 2 | 1 |
| [F40](#f40) | Dashboard bán hàng và doanh thu | S, W | 4 | 8 |
| [F41](#f41) | Theo dõi thói quen | S, W, A | 4 | 3 |
| [F42](#f42) | Thời khóa biểu và kế hoạch tuần | S, W, A | 4 | 2 |
| [F43](#f43) | Theo dõi lượt xe qua cửa khẩu | S, W, A | 4 | 1 |
| [F44](#f44) | Tài sản và khấu hao đường thẳng | S, W, A | 4 | 1 |
| [F45](#f45) | Đặt cơm văn phòng và chia tiền | S, W, A | 4 | 1 |
| [F46](#f46) | Dashboard biến động nhân sự | S, W | 4 | 4 |
| [F47](#f47) | Báo cáo quảng cáo và chiến dịch | S, W | 4 | 2 |
| [F48](#f48) | Báo cáo chi phí, P&L và dòng tiền | S, W | 4 | 3 |
| [F49](#f49) | Trung tâm báo cáo đơn giản | S, W | 4 | 1 |
| [F50](#f50) | Bộ kế hoạch cuộc sống tổng hợp (bổ sung ngoài shop) | S, W; A theo module | 4 | 1 ngoài shop |

Một mục nguồn có thể ánh xạ nhiều module khi kết hợp nhân sự/tuyển dụng hoặc việc cá nhân/đội nhóm. Vì vậy tổng cột cuối có thể lớn hơn 247; không cộng cột này để đếm URL.

<a id="f01"></a>

### F01 — Việc cá nhân và ưu tiên

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [T006](https://taphoasheet.store/product/lam-chu-cong-viec-task-tracker-v5-pro/), [T013](https://taphoasheet.store/product/to-do-list-quan-ly-cong-viec-ca-nhan/), [G075](https://gsheets.vn/template/theo-doi-cong-viec-v8-0/), [G094](https://gsheets.vn/template/theo-doi-cong-viec-v7-0/), [G114](https://gsheets.vn/template/theo-doi-cong-viec-v6-0/), [G131](https://gsheets.vn/template/to-do-list/), [G169](https://gsheets.vn/template/theo-doi-cong-viec-v2-0/), [G173](https://gsheets.vn/template/theo-doi-cong-viec-v4-0/), [G195](https://gsheets.vn/template/theo-doi-cong-viec-v1-0/), [G199](https://gsheets.vn/template/theo-doi-cong-viec-v3-0/), [G216](https://gsheets.vn/template/theo-doi-cong-viec-v5-0/).

**Dữ liệu nghiệp vụ:**

- Tasks: Title, OwnerEmail, Priority, StartDate, DueDate, Status, Progress, CompletedAt, CategoryID.
- Categories: Name, Color.
- TaskEvents: TaskID, EventType, EventAt, ActorEmail.
- TaskChecklist: TaskID, Title, Done.
- RecurrenceRules: TaskTemplateID, Frequency, Interval, Weekdays, MonthDay, TimeZone, Active.
- GeneratedOccurrences: RuleID, ScheduledDate, TaskID.
- Tasks thêm Important, Urgent.

**Luồng và chức năng:** Thêm việc → phân loại → bắt đầu → hoàn tất hoặc hủy; mở lại có lịch sử. Có danh sách, lịch, ma trận quan trọng/khẩn cấp và bộ lọc hạn. Bản S Lite không cần script nếu người dùng tự ghi thời điểm hoàn thành; Pro thêm timestamp và nhắc việc. Nhãn giao diện vi/en nằm trong dictionary để phục vụ biến thể song ngữ. Pro có checklist và việc lặp theo ngày/tháng; một occurrence một ID, lịch cuối tháng có policy rõ.

**Báo cáo/KPI:** Việc mở, việc quá hạn, tỷ lệ hoàn thành loại việc hủy, số ngày trễ, tải việc theo ngày.

**Ca nghiệm thu riêng:** Fixture ngày cố định có 3 việc: một DONE đúng hạn, một TODO quá hạn, một CANCELLED; tỷ lệ hoàn thành bằng 50%, việc đang quá hạn bằng 1. Việc không hạn không bị đếm trễ.

**Thiết kế app:** Views My Tasks/Calendar/Overdue; actions Start/Complete/Reopen; bot nhắc hạn; filter theo owner.

<a id="f02"></a>

### F02 — Dự án, công việc đội nhóm và KPI

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [T008](https://taphoasheet.store/product/quan-ly-du-an-cong-viec-toan-dien/), [T010](https://taphoasheet.store/product/task-management-pro-hon-ca-phan-mem-tich-hop-app-quan-ly-bao-cao-cong-viec-1-0/), [T011](https://taphoasheet.store/product/task-tracker-quan-ly-cong-viec-doi-nhom-version-2-0/), [T016](https://taphoasheet.store/product/web-app-quan-ly-cong-viec-kpi-doi-nhom/), [G004](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-3/), [G018](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-2/), [G026](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v5-0/), [G027](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-1/), [G029](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-0/), [G035](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v1-0/), [G039](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v4-1/), [G048](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v4-0/), [G066](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v3-0/), [G067](https://gsheets.vn/template/theo-doi-du-an-cong-viec-v2-0/), [G069](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v2-0/), [G075](https://gsheets.vn/template/theo-doi-cong-viec-v8-0/), [G077](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v1-0/), [G087](https://gsheets.vn/template/theo-doi-du-an-cong-viec-v1-0/), [G094](https://gsheets.vn/template/theo-doi-cong-viec-v7-0/), [G114](https://gsheets.vn/template/theo-doi-cong-viec-v6-0/), [G169](https://gsheets.vn/template/theo-doi-cong-viec-v2-0/), [G173](https://gsheets.vn/template/theo-doi-cong-viec-v4-0/), [G195](https://gsheets.vn/template/theo-doi-cong-viec-v1-0/), [G199](https://gsheets.vn/template/theo-doi-cong-viec-v3-0/), [G200](https://gsheets.vn/template/so-do-gantt-v1-0/), [G216](https://gsheets.vn/template/theo-doi-cong-viec-v5-0/), [G226](https://gsheets.vn/template/so-do-gantt-v2-0/).

**Dữ liệu nghiệp vụ:**

- Projects: Name, ManagerEmail, StartDate, EndDate, Budget, Status.
- ProjectMembers: ProjectID, UserEmail, Permission.
- Tasks: ProjectID, Title, AssigneeEmail, StartDate, DueDate, Status, Progress, Weight, ApprovedAt.
- Dependencies: TaskID, PredecessorID.
- TaskCollaborators: TaskID, UserEmail.
- KPIPlans: UserEmail, Period, Metric, Target, Weight.
- KPIActuals: KPIPlanID, Actual, ApproverEmail.
- Timesheets: TaskID, UserEmail, WorkDate, Hours.
- TaskChecklist: TaskID, Title, Done.
- RecurrenceRules: TaskTemplateID, Frequency, MonthDay, Weekdays, TimeZone, Active.
- GeneratedOccurrences: RuleID, ScheduledDate, TaskID.

**Luồng và chức năng:** Lập dự án → phân thành giai đoạn/việc → giao hàng loạt có preview → cập nhật → nộp kết quả → quản lý duyệt. Dashboard, Kanban, Gantt theo ngày/tuần và đánh giá theo kỳ. Quan hệ phụ thuộc phải chống vòng lặp. KPI giữ lịch sử duyệt, công thức chấm điểm và mức trần cấu hình được, không đồng nhất tự khai với được duyệt. Có dark/light theme, checklist, việc lặp, notification inbox và màn Table/Calendar. Tạo lại occurrence không nhân đôi task; nhân viên tự giao trong phạm vi quyền.

**Báo cáo/KPI:** Tiến độ có trọng số = tổng Progress×Weight / tổng Weight; đúng hạn dựa mốc hoàn thành được duyệt; giờ thực tế, tải việc, KPI thực tế/mục tiêu có quy tắc chiều tốt/xấu.

**Ca nghiệm thu riêng:** Hai việc có trọng số 1 và 3, tiến độ 100% và 0% cho tiến độ dự án 25%. Đổi nhân sự không mất lịch sử. Gantt qua giao thừa đúng vị trí; chu trình phụ thuộc A→B→A bị từ chối.

**Thiết kế app:** Project dashboard, calendar, task deck; actions Submit/Approve/Reject; bot nhắc việc/duyệt; membership filter cả Tasks và các bảng con.

<a id="f03"></a>

### F03 — Công trình và tiến độ thi công

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T007](https://taphoasheet.store/product/quan-ly-cong-viec-du-an-danh-cho-xay-dung-tich-hop-phan-mem-bao-cao-lich-theo-doi/).

**Dữ liệu nghiệp vụ:**

- Sites: Name, Address, SupervisorEmail.
- WorkPackages: SiteID, Code, Name, Unit, PlannedQty, Budget.
- DailyLogs: SiteID, LogDate, Weather, Summary.
- ProgressEntries: PackageID, LogID, ExecutedQty, AcceptedQty.
- SiteCosts: SiteID, CostDate, CostType, Amount.
- Inspections: PackageID, Result, InspectorEmail, EvidenceFileID.

**Luồng và chức năng:** Kế hoạch hạng mục → nhật ký hiện trường kèm ảnh → khối lượng thực hiện → nghiệm thu → báo cáo tuần. Dùng F02 cho giao việc và F07 cho hợp đồng/phát sinh; không tính khối lượng chờ nghiệm thu thành đã nghiệm thu.

**Báo cáo/KPI:** Khối lượng nghiệm thu/kế hoạch, chi phí/budget, số vấn đề chưa xử lý, tiến độ hạng mục.

**Ca nghiệm thu riêng:** Kế hoạch 100 m², thi công 60 m² và nghiệm thu 45 m²: hai tỷ lệ 60% và 45% tách riêng. Nhật ký bị hủy không cộng thêm khối lượng.

**Thiết kế app:** Form nhật ký/ảnh, danh sách công trình, approval nghiệm thu; offline lưu nháp, xác nhận sau sync.

<a id="f04"></a>

### F04 — Lịch nội dung và hiệu quả đa kênh

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T001](https://taphoasheet.store/product/content-plan-da-kenh-quan-ly-bao-cao-noi-dung-da-kenh-co-tich-hop-bao-cao-lich-bai-dang/).

**Dữ liệu nghiệp vụ:**

- Channels: Name, Platform.
- Campaigns: Name, StartDate, EndDate, Objective.
- Contents: CampaignID, Title, Pillar, OwnerEmail, Status, AssetURL.
- Publications: ContentID, ChannelID, ScheduledAt, PublishedAt, URL.
- ContentMetrics: PublicationID, Date, Impressions, Clicks, Engagements, Leads, Revenue.

**Luồng và chức năng:** Ý tưởng → brief → sản xuất → duyệt → lên lịch → ghi link đã đăng → nhập kết quả. Một nội dung có nhiều lượt đăng theo kênh. Có lịch, backlog, phân công và dashboard; API đăng tự động là tích hợp tùy chọn cần quyền nền tảng, không hứa có sẵn.

**Báo cáo/KPI:** Tần suất đăng, bài trễ, CTR = clicks/impressions, engagement theo định nghĩa cấu hình, lead theo chiến dịch.

**Ca nghiệm thu riêng:** Một nội dung đăng 3 kênh phải hiện 3 lịch đăng nhưng vẫn 1 nội dung gốc. Impressions bằng 0 cho chỉ số hợp lệ, không lỗi chia 0.

**Thiết kế app:** Calendar nội dung, review queue; action Approve/MarkPublished; bot nhắc lịch đăng.

<a id="f05"></a>

### F05 — CRM khách hàng và pipeline

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G012](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v7-1/), [G031](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v7-0/), [G036](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v6-0/), [G041](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v5-0/), [G055](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v4-0/), [G063](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v3-0/), [G064](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v2-0/), [G065](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v1-0/), [G098](https://gsheets.vn/template/bao-cao-crm-v2-0/), [G107](https://gsheets.vn/template/bao-cao-crm-v3-0/), [G128](https://gsheets.vn/template/bao-cao-crm-v1-0/), [G129](https://gsheets.vn/template/quy-trinh-ban-hang/).

**Dữ liệu nghiệp vụ:**

- Contacts: Name, Phone, Email, Source, OwnerEmail.
- Companies: Name, Industry.
- Opportunities: ContactID, CompanyID, Stage, ExpectedValue, Probability, ExpectedCloseDate, ActualCloseDate, Outcome.
- Activities: ContactID, OpportunityID, Type, OccurredAt, Summary, NextFollowupAt.
- PipelineStages: Name, Order, DefaultProbability.
- ContactOwners: ContactID, UserEmail, Permission.
- CRMTargets: Period, UserEmail, TeamID, Metric, Target.
- ContactStatusEvents: ContactID, FromStatus, ToStatus, ChangedAt.

**Luồng và chức năng:** Nhận lead → kiểm tra trùng có quyết định merge → tư vấn → cơ hội → thắng/thua → chăm sóc. Timeline tương tác, bước bán hàng cấu hình được, cảnh báo thiếu follow-up. Giao diện chi tiết không cần dựa vào hành vi double-click riêng của nguồn. Cho phép nhiều người chăm sóc một khách qua ContactOwners; preset báo cáo CRM chỉ đọc và KPI theo cá nhân/đội.

**Báo cáo/KPI:** Pipeline có trọng số, tỷ lệ thắng trên deal đã đóng, khách mới, hoạt động/nhân viên, follow-up quá hạn.

**Ca nghiệm thu riêng:** Deal thắng 2, thua 1, mở 2: win rate = 2/3, không lấy 2/5. Email/điện thoại trùng báo gợi ý, không xóa tự động.

**Thiết kế app:** Contact detail với related activities, pipeline deck, follow-up calendar; bot nhắc; role theo owner/team.

<a id="f06"></a>

### F06 — CRM đại lý ô tô

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T002](https://taphoasheet.store/product/crm-o-to-pro-he-thong-theo-doi-cham-soc-khach-hang-o-to/).

**Dữ liệu nghiệp vụ:**

- Kế thừa F05.
- VehicleModels: Brand, Model, Trim, BasePrice.
- VehicleInterests: ContactID, ModelID, BudgetMin, BudgetMax, PurchaseTimeframe.
- TestDrives: ContactID, VehicleID, StartAt, EndAt, SalesEmail, Status.
- Deliveries: OpportunityID, VehicleID, ScheduledDate, ActualDate.
- CustomerCare: ContactID, EventType, DueDate, Status.
- DemoVehicles: ModelID, PlateOrInternalCode, Active (TestDrives.VehicleID và Deliveries.VehicleID tham chiếu bảng này hoặc Vehicles dùng chung đã chọn).

**Luồng và chức năng:** Ghi nhu cầu → so sánh mẫu xe → đặt lái thử → báo giá → chốt cọc → bàn giao → chăm sóc. Giá, khuyến mại và nguồn dữ liệu do người bán nhập; không tự lấy giá xe hiện hành.

**Báo cáo/KPI:** Lead theo mẫu/phân khúc, tỷ lệ lái thử/chốt, pipeline theo tư vấn viên, lịch bàn giao.

**Ca nghiệm thu riêng:** Một khách quan tâm hai mẫu vẫn tính một khách. Hai buổi lái thử trùng xe/khung giờ phải chặn xác nhận trùng theo quy tắc request.

**Thiết kế app:** Lịch lái thử, form nhu cầu, checklist bàn giao; quan hệ Ref đến F05.

<a id="f07"></a>

### F07 — Hợp đồng, phụ lục và phát sinh

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T004](https://taphoasheet.store/product/google-sheet-quan-ly-hop-dong-theo-doi-phat-sinh/).

**Dữ liệu nghiệp vụ:**

- Contracts: CounterpartyID, Number, SignedDate, StartDate, EndDate, BaseAmount, Currency, Status.
- Amendments: ContractID, SignedDate, ValueChange, Status.
- Milestones: ContractID, Description, DueDate, Amount, AcceptedAt.
- ContractPayments: MilestoneID, PaidAt, Amount, Reference.
- ContractFiles: ContractID, FileID, Version.

**Luồng và chức năng:** Tạo hợp đồng → ghi phụ lục được duyệt → theo dõi mốc nghiệm thu/thanh toán → nhắc hết hạn → đóng hồ sơ. Số hợp đồng có quy tắc duy nhất trong năm/đơn vị. Liên kết F30 cho công nợ.

**Báo cáo/KPI:** Giá trị cập nhật = gốc + phát sinh đã duyệt, phải thu đến hạn, đã thu, chênh lệch thực hiện, hợp đồng sắp hết hạn.

**Ca nghiệm thu riêng:** Gốc 100 triệu, tăng đã duyệt 20 triệu, giảm chưa duyệt 5 triệu: giá trị hiện hành 120 triệu. Thu 50 triệu không tự coi là nghiệm thu 50 triệu.

**Thiết kế app:** Contract detail, milestone calendar; approval phụ lục, bot nhắc hết hạn.

<a id="f08"></a>

### F08 — Văn bản, hồ sơ và chỉ đạo

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T005](https://taphoasheet.store/product/google-sheet-quan-ly-van-ban-den-cong-viec-danh-cho-co-quan-1-0/), [T012](https://taphoasheet.store/product/theo-doi-y-kien-chi-dao-cong-viec/), [T019](https://taphoasheet.store/product/web-app-quan-ly-van-ban-den-di-cong/), [G044](https://gsheets.vn/template/webapp-quan-ly-tai-lieu-van-ban-v1-0/).

**Dữ liệu nghiệp vụ:**

- Documents: Direction, Number, IssuedDate, ReceivedDate, Subject, Issuer, Recipient, CategoryID, Confidentiality, Urgency, OwnerEmail, DueDate, Status.
- DocumentVersions: DocumentID, Version, FileID.
- Directives: DocumentID, Content, AssigneeEmail, DueDate, Status.
- Dispatches: DocumentID, Recipient, SentAt, Method.
- Categories: Name, AllowedRole.
- liên kết Tasks F02 và danh mục Employees tối thiểu F12.

**Luồng và chức năng:** Tiếp nhận/phát hành → phân loại → giao xử lý → đính kết quả → duyệt → lưu trữ. Tra cứu theo số/trích yếu/đơn vị, xem phiên bản file, liên kết nhiệm vụ; không xóa bản cũ khi thay file nếu hồ sơ cần lịch sử.

**Báo cáo/KPI:** Văn bản đến/đi, chỉ đạo chưa xong, thời gian xử lý, tỷ lệ quá hạn theo đơn vị.

**Ca nghiệm thu riêng:** Staff được giao một văn bản không thấy file mật của văn bản khác qua URL/export. Số văn bản trùng trong cùng sổ/năm bị cảnh báo, cùng số ở sổ khác được phép.

**Thiết kế app:** Inbox/Outbox/My Directives/Archive; action Assign/Submit/Close; bot nhắc hạn; filter cả metadata và quyền tệp.

<a id="f09"></a>

### F09 — Lịch lãnh đạo, cuộc họp và công tác

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T009](https://taphoasheet.store/product/quan-ly-lich-cong-tac-quan-ly-lich-hop-cong-tac-danh-cho-sep-lanh-dao/), [G061](https://gsheets.vn/template/google-sheets-quan-ly-lich-hen-v1-0/).

**Dữ liệu nghiệp vụ:**

- Events: Title, Type, StartAt, EndAt, Location, OrganizerEmail, Status.
- Attendees: EventID, UserEmail, Response.
- Resources: Name, Type.
- Reservations: EventID, ResourceID.
- Trips: EventID, Destination, Transport, Budget, Notes.
- Minutes: EventID, Summary, FileID.
- ActionItems: EventID, AssigneeEmail, DueDate, Status.
- ExternalAttendees: EventID, ContactName, ContactEmail, Phone.

**Luồng và chức năng:** Đề xuất lịch → kiểm tra lịch người/phòng → duyệt → diễn ra → biên bản và việc tiếp theo. Đồng bộ Google Calendar qua U28 khi được cài; không tạo sự kiện thật trong fixture.

**Báo cáo/KPI:** Lịch theo ngày/tuần, xung đột, công tác sắp tới, action item quá hạn.

**Ca nghiệm thu riêng:** Hai cuộc họp giao nhau chặn đặt cùng phòng. Cuộc họp kết thúc 10:00 cho phép cuộc sau bắt đầu 10:00 khi buffer=0.

**Thiết kế app:** Calendar, agenda, trip checklist; bot nhắc lịch có timezone.

<a id="f10"></a>

### F10 — Khách sạn, homestay và đặt phòng

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T014](https://taphoasheet.store/product/web-app-homestay-hotel-all-in-one/), [G032](https://gsheets.vn/template/webapp-quan-ly-khach-san-homestay-v1-0/), [G046](https://gsheets.vn/template/form-dat-phong-khach-san-homestay-v4-0/), [G076](https://gsheets.vn/template/form-dat-phong-khach-san-homestay-v3-0/).

**Dữ liệu nghiệp vụ:**

- Properties: Name, Address.
- Rooms: PropertyID, Number, Type, Capacity, Active.
- RatePlans: RoomType, StartDate, EndDate, BillingUnit, Price.
- Guests: Name, Phone.
- BookingRequests: RoomID, StartAt, EndAt, GuestID, State.
- Bookings: RequestID, RoomID, GuestID, CheckInAt, CheckOutAt, Status, Total, Deposit.
- Stays: BookingID, ActualIn, ActualOut.
- Housekeeping: RoomID, Date, Status, StaffEmail.
- Charges: BookingID, Type, Amount.
- Payments: BookingID, Amount, PaidAt.
- OperatingCosts: PropertyID, RoomID, Date, Category, Amount.
- PropertyGrants: UserEmail, PropertyID, Role.

**Luồng và chức năng:** Yêu cầu → kiểm tra khả dụng → xác nhận → nhận cọc → check-in → phụ thu → check-out → dọn phòng. Hỗ trợ đặt giờ/ngày/nhiều đêm, nhiều cơ sở. Bản S bằng công thức chỉ cảnh báo trùng; bản nhiều người dùng phải áp dụng processor hoặc transaction. Có báo cáo chi phí/lợi nhuận quản trị theo cơ sở, nhập hàng loạt chi phí và lịch sử sửa booking. Nhà đầu tư xem báo cáo theo grant, nhân viên dọn phòng chỉ xem lịch cần thiết.

**Báo cáo/KPI:** Công suất theo phòng-đêm khả dụng, doanh thu phòng, ADR theo đêm đã bán, công nợ, trạng thái phòng; đặt theo giờ thống kê riêng.

**Ca nghiệm thu riêng:** Khoảng [check-in,check-out) không tính đêm trả phòng; booking hủy không giữ phòng; hai request đồng thời cho phòng cuối chỉ một được duyệt. Deposit không bị cộng lần hai vào tổng thu.

**Thiết kế app:** Room calendar, booking request form, check-in/out actions, housekeeping board; ảnh hồ sơ theo quyền tối thiểu.

<a id="f11"></a>

### F11 — Ngân sách cưới và tiền mừng

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T015](https://taphoasheet.store/product/web-app-quan-ly-chi-phi-tien-mung-dam-cuoi-thong-minh-tu-dong/).

**Dữ liệu nghiệp vụ:**

- Events: Name, Date, Budget.
- GuestGroups: Name, Side.
- Guests: GroupID, Name, Phone, RSVP, TableNo.
- Gifts: GuestID, ReceivedAt, Type, Amount, Note.
- ExpensePlans: Category, Vendor, Budget.
- WeddingPayments: PlanID, PaidAt, Amount.
- Vendors: Name, Contact, Service.

**Luồng và chức năng:** Lập ngân sách → danh sách khách → RSVP/xếp bàn → ghi mừng → thanh toán nhà cung cấp → đối chiếu. Tách quà hiện vật với tiền, một phong bì nhóm không tính cho từng khách rồi cộng trùng.

**Báo cáo/KPI:** Dự toán/thực chi, khoản còn phải trả, tiền mừng theo bên, số khách xác nhận, chênh lệch thu chi.

**Ca nghiệm thu riêng:** Phong bì 2 triệu của nhóm 4 khách vẫn cộng 2 triệu. Chi dự kiến 10 triệu và đã thanh toán 3 triệu cho số còn phải trả 7 triệu.

**Thiết kế app:** Nhập nhanh tiền mừng, guest search, vendor detail; chỉ người được cấp quyền thấy số tiền.

<a id="f12"></a>

### F12 — Hồ sơ nhân sự

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T017](https://taphoasheet.store/product/web-app-quan-ly-thong-tin-nhan-su-tuyen-dung-danh-sach-ung-vien-lich-phong-van-ho-so-nhan-su-sinh-nhat/), [T019](https://taphoasheet.store/product/web-app-quan-ly-van-ban-den-di-cong/), [G074](https://gsheets.vn/template/webapp-quan-ly-ho-so-nhan-su-v1-0/), [G102](https://gsheets.vn/template/quan-ly-ho-so-nhan-su/), [G120](https://gsheets.vn/template/theo-doi-nhan-su-co-ban/).

**Dữ liệu nghiệp vụ:**

- Employees: EmployeeCode, FullName, WorkEmail, TeamID, JobTitle, HireDate, ExitDate, EmploymentStatus.
- EmploymentContracts: EmployeeID, Type, StartDate, EndDate.
- EmployeeFiles: EmployeeID, Category, FileID.
- EmergencyContacts: EmployeeID, Name, Relationship, Phone.
- EmploymentEvents: EmployeeID, Type, EffectiveDate, FromTeamID, ToTeamID.
- Compensation: EmployeeID, EffectiveFrom, Amount, AccessGroup.

**Luồng và chức năng:** Nhận việc → hồ sơ → điều chuyển/thay đổi hợp đồng → gia hạn → nghỉ việc. Bản basic bỏ Compensation; bản HR mở rộng tách dữ liệu nhạy cảm. Liên kết F13 để chuyển ứng viên trúng tuyển thành nhân sự, không copy trùng.

**Báo cáo/KPI:** Nhân sự đang làm theo ngày hiệu lực, hợp đồng sắp hết hạn, sinh nhật sắp tới, hồ sơ thiếu.

**Ca nghiệm thu riêng:** Người nghỉ từ trước ngày báo cáo không nằm trong active headcount; đổi phòng ban giữ được lịch sử. Staff không truy cập Compensation qua bảng tham chiếu.

**Thiết kế app:** HR directory, employee self-view, contract alerts; HR role riêng; không dùng Users làm hồ sơ nhân sự đầy đủ.

<a id="f13"></a>

### F13 — Tuyển dụng và lịch phỏng vấn

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [T017](https://taphoasheet.store/product/web-app-quan-ly-thong-tin-nhan-su-tuyen-dung-danh-sach-ung-vien-lich-phong-van-ho-so-nhan-su-sinh-nhat/), [G043](https://gsheets.vn/template/webapp-quan-ly-tuyen-dung-v2-0/), [G070](https://gsheets.vn/template/webapp-quan-ly-tuyen-dung-v1-0/), [G186](https://gsheets.vn/template/quy-trinh-tuyen-dung-gian-don/), [G202](https://gsheets.vn/template/quan-ly-tuyen-dung-v1-0/).

**Dữ liệu nghiệp vụ:**

- Vacancies: Title, TeamID, HiringManager, TargetCount, OpenDate, CloseDate.
- Candidates: Name, Email, Phone, CVFileID.
- Applications: CandidateID, VacancyID, Stage, Source, AppliedAt, OwnerEmail.
- Interviews: ApplicationID, StartAt, EndAt, InterviewerEmail.
- Scorecards: InterviewID, Criterion, Score, Comment.
- Offers: ApplicationID, SentAt, Status, StartDate.

**Luồng và chức năng:** Mở nhu cầu → nhận hồ sơ → sàng lọc → phỏng vấn → đánh giá → offer → nhận việc. Một ứng viên có nhiều hồ sơ ứng tuyển; lưu feedback theo vòng. Quy trình basic và full dùng cấu hình stage.

**Báo cáo/KPI:** Time-to-fill theo định nghĩa ngày mở đến nhận offer, nguồn ứng viên, tỷ lệ qua vòng, offer acceptance.

**Ca nghiệm thu riêng:** Một ứng viên nộp 2 vị trí tính 1 candidate và 2 applications. Người phỏng vấn chỉ thấy hồ sơ được giao, không mặc định thấy lương đề xuất.

**Thiết kế app:** Kanban applications, interview calendar, scorecard form; reminder; action Hired tạo employee idempotent.

<a id="f14"></a>

### F14 — Thuê trang phục và phụ kiện

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T018](https://taphoasheet.store/product/web-app-quan-ly-lich-thue-quan-ao/).

**Dữ liệu nghiệp vụ:**

- RentalItems: Code, Name, Size, Color, UnitType, Quantity, ReplacementValue.
- RentalOrders: CustomerID, StartAt, EndAt, Status, Deposit.
- RentalLines: OrderID, ItemID, Quantity, UnitRate, Discount.
- HandoverLines: LineID, OutCondition, ReturnCondition, ReturnedQty.
- RentalCharges: OrderID, Type, Amount.
- ItemBlocks: ItemID, StartAt, EndAt, Quantity, Reason.

**Luồng và chức năng:** Chọn mẫu/size → yêu cầu giữ lịch → xác nhận đủ hàng → giao → trả một phần/toàn bộ → vệ sinh/sửa → hoàn cọc. Hỗ trợ món đánh serial và hàng theo số lượng; buffer vệ sinh giữ lịch.

**Báo cáo/KPI:** Hàng sẵn sàng theo khoảng thời gian, đơn đến hạn, tỷ lệ sử dụng, phí hỏng/trễ, cọc đang giữ.

**Ca nghiệm thu riêng:** Kho 3 áo, 2 chiếc đang thuê: đơn xin 2 chiếc cùng thời gian bị từ chối xác nhận. Cọc hoàn trả không giảm doanh thu thuê.

**Thiết kế app:** Catalog ảnh, booking requests, handover form, returns checklist; processor xác nhận.

<a id="f15"></a>

### F15 — Thuê xe và bảo dưỡng

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T020](https://taphoasheet.store/product/web-app-sheet-quan-ly-lich-thue-xe-may-o-to/).

**Dữ liệu nghiệp vụ:**

- Vehicles: Plate, Type, Model, Odometer, Status.
- RentalBookings: VehicleID, CustomerID, StartAt, EndAt, Status, Deposit, AgreedRate.
- VehicleHandovers: BookingID, Type, At, Odometer, FuelLevel, DamageNotes, FileID.
- MaintenancePlans: VehicleID, DueDate, DueOdometer, Type.
- MaintenanceJobs: VehicleID, StartAt, EndAt, Cost, Odometer.
- RentalSettlements: BookingID, Rent, Extras, DepositApplied, Refund.
- Branches: Name, Address.
- VehicleDocuments: VehicleID, Type, ExpiryDate, FileID.
- RentalBookings thêm BranchID, ContractID (F07), CustomerID (Contacts dùng chung).

**Luồng và chức năng:** Giữ xe → kiểm tra giấy tờ theo phạm vi cần thiết → hợp đồng → giao xe → nhận xe → tính phí → bảo dưỡng. Xe đang sửa không được xác nhận cho thuê. Tách dữ liệu giấy tờ khỏi danh mục xe công khai. Nhiều chi nhánh và nhắc hạn giấy tờ xe theo ngày do chủ xe khai báo.

**Báo cáo/KPI:** Ngày sử dụng, doanh thu từng xe, chi phí bảo dưỡng, xe đến hạn bảo dưỡng, cọc phải trả.

**Ca nghiệm thu riêng:** Odometer trả thấp hơn giao bị từ chối. Thuê chồng lịch bảo dưỡng không được duyệt. Phụ phí km theo mức thỏa thuận, không làm tròn tùy ý.

**Thiết kế app:** Vehicle gallery, calendar, photo handover, maintenance form; bot nhắc trả/bảo dưỡng.

<a id="f16"></a>

### F16 — Định mức nguyên liệu spa và nail

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [T003](https://taphoasheet.store/product/google-sheet-quan-ly-dinh-luong-san-pham-dung-cho-spa-nail/).

**Dữ liệu nghiệp vụ:**

- Materials: Name, BaseUnit, PurchaseUnit, ConversionFactor, UnitCost.
- Services: Name, Price.
- Recipes: ServiceID, MaterialID, StandardQty, WasteRate, EffectiveFrom.
- ServiceRuns: ServiceID, Date, Quantity, StaffEmail.
- ActualUsage: RunID, MaterialID, Quantity.
- MaterialMovements: MaterialID, Date, SignedQty, SourceID.

**Luồng và chức năng:** Khai báo đơn vị → định mức dịch vụ → số lượt thực hiện → tính tiêu hao dự kiến → nhập thực tế → so sánh. Có thể dùng ledger F18; thay giá/định mức không làm sai chi phí lịch sử đã chốt.

**Báo cáo/KPI:** Giá vốn định mức/dịch vụ, thực dùng so định mức, hao hụt, tồn vật tư.

**Ca nghiệm thu riêng:** Một chai 500 ml giá 100.000, dùng 10 ml cho 3 lượt: tiêu hao 30 ml, chi phí 6.000 trước hao hụt. Không cộng đơn vị chai với ml.

**Thiết kế app:** Nhập lượt dịch vụ và vật tư thực dùng, cảnh báo lệch định mức theo ngưỡng cấu hình.

<a id="f17"></a>

### F17 — Thu chi doanh nghiệp và dòng tiền startup

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G002](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-1-startup/), [G017](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-1/), [G022](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-0/), [G023](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v3-1/), [G028](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v3-0/), [G060](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v2-0/), [G072](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v1-0/), [G122](https://gsheets.vn/template/quan-ly-thu-chi-v2-0/), [G123](https://gsheets.vn/template/quan-ly-thu-chi-v2-1/), [G124](https://gsheets.vn/template/quan-ly-thu-chi-v1-0/).

**Dữ liệu nghiệp vụ:**

- Accounts: Name, Type, OpeningBalance, Currency, OverdraftLimit.
- Transactions: Date, Type, AccountID, CounterAccountID, CategoryID, PartyID, ProjectID, Amount, State.
- Categories: Name, FlowClass, FixedVariable.
- Forecasts: Date, CategoryID, ExpectedAmount, Confidence.
- Loans: Lender, Principal, StartDate, DueDate, InterestMethod.
- LoanSchedules: LoanID, DueDate, PrincipalDue, InterestDue, Paid.
- PeriodClosures: Period, ClosedAt.
- liên kết F30.

**Luồng và chức năng:** Nhập thu/chi/chuyển khoản → kiểm tra → ghi sổ → đối soát → chốt kỳ. Chuyển khoản nội bộ không tính doanh thu/chi phí; xử lý đảo giao dịch. Bản startup thêm dòng tiền hoạt động/đầu tư/tài trợ, burn, runway và hòa vốn; lãi vay theo phương pháp do người dùng lựa chọn.

**Báo cáo/KPI:** Số dư tài khoản, thu/chi theo loại, dự báo dòng tiền, net burn trên cửa sổ tháng đã chọn; runway=cash/net burn khi burn>0, ngược lại hiển thị không áp dụng. Hòa vốn=định phí/tỷ lệ lãi góp khi tỷ lệ>0.

**Ca nghiệm thu riêng:** Chuyển 5 triệu giữa hai tài khoản: tổng tiền không đổi và doanh thu không tăng. Cash 120 triệu, burn 20 triệu/tháng cho runway 6 tháng. Burn âm không cho runway âm. Giao dịch trùng RequestID chỉ ghi một lần.

**Thiết kế app:** Phiếu đề nghị thu/chi, approval queue, accounts dashboard; không cho offline ghi thẳng ledger. Không gắn nhãn mẫu kế toán/pháp lý chuẩn nếu chưa xác minh.

<a id="f18"></a>

### F18 — Nhập xuất tồn và kiểm kê

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G003](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v3-0/), [G051](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v2-0/), [G057](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v1-0/), [G181](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v3-0/), [G182](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v1-0/), [G217](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v2-0/).

**Dữ liệu nghiệp vụ:**

- Products: SKU, Name, BaseUnit, Barcode, ReorderPoint.
- Warehouses: Name.
- StockDocuments: Type, Date, FromWarehouseID, ToWarehouseID, State.
- StockLines: DocumentID, ProductID, Quantity, UnitCost, LotID.
- StockLedger: ProductID, WarehouseID, Date, SignedQty, Value, SourceLineID, CommitID.
- StockCounts: WarehouseID, CountDate, ProductID, CountedQty.
- Lots: ProductID, LotCode, ExpiryDate.

**Luồng và chức năng:** Đầu kỳ → nhập → yêu cầu xuất → xác nhận tồn → chuyển kho → kiểm kê/điều chỉnh. Bình quân di động là phương pháp mặc định nếu bật giá vốn; phải có thứ tự posting và xử lý ngày lùi. Sheet báo cáo không có đủ cơ chế nhiều writer phải ghi phạm vi đó.

**Báo cáo/KPI:** Tồn cuối = đầu + nhập − xuất ± điều chỉnh, giá trị tồn, dưới mức đặt hàng, chênh lệch kiểm kê, lô hết hạn.

**Ca nghiệm thu riêng:** Đầu 10, nhập 5, xuất 4 cho tồn 11; chuyển kho 3 giữ tổng hệ thống 11. Hai yêu cầu xuất tổng vượt tồn: processor chỉ duyệt phần hợp lệ, không cho tồn âm ngoài cấu hình.

**Thiết kế app:** Scan SKU, phiếu request, inventory count, approval; barcode chỉ bật sau kiểm tra gói và thiết bị.

<a id="f19"></a>

### F19 — Báo giá và phiên bản chào bán

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G005](https://gsheets.vn/template/webapp-quan-ly-bao-gia-v1-0/).

**Dữ liệu nghiệp vụ:**

- Quotes: Number, CustomerID, IssuedAt, ValidUntil, Currency, Version, Status.
- QuoteLines: QuoteID, ProductID, Description, Quantity, UnitPrice, DiscountType, DiscountValue, TaxRate.
- QuoteTerms: QuoteID, PaymentTerms, DeliveryTerms.
- QuoteEvents: QuoteID, EventType, At.
- Products và Contacts dùng chung F18/F05 khi bật tích hợp.

**Luồng và chức năng:** Soạn → preview → xuất PDF → lưu lần gửi → sửa tạo revision → chấp nhận → chuyển đơn hàng. Thuế/chiết khấu là tham số, không tự áp tỷ lệ pháp lý. PDF phải phản ánh đúng revision đã duyệt.

**Báo cáo/KPI:** Giá trị báo giá, đã chấp nhận, sắp hết hiệu lực, tỷ lệ chuyển đơn.

**Ca nghiệm thu riêng:** 2×100.000, giảm dòng 10%, thuế cấu hình 8% trên sau giảm cho tổng 194.400. Revision cũ giữ nguyên số tiền sau khi sửa bản mới.

**Thiết kế app:** Quote detail với lines Ref/IsPartOf, action CreateRevision/Accept, PDF process; quyền xem theo nhân viên bán.

<a id="f20"></a>

### F20 — Bán hàng và đơn hàng

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G019](https://gsheets.vn/template/webapp-quan-ly-ban-hang-v1-1/), [G021](https://gsheets.vn/template/webapp-quan-ly-ban-hang-v1-0/).

**Dữ liệu nghiệp vụ:**

- SalesOrders: Number, CustomerID, OrderDate, Status.
- SalesLines: OrderID, ProductID, Qty, UnitPrice, Discount, TaxRate.
- Fulfillments: OrderID, WarehouseID, State, ShippedAt.
- FulfillmentLines: FulfillmentID, SalesLineID, ShippedQty.
- SalesPayments: OrderID, Date, Amount.
- Returns: OrderID, ReturnDate, State.
- ReturnLines: ReturnID, ProductID, Qty, RefundAmount.
- LoyaltyRules: EffectiveFrom, SpendPerPoint, PointValue, Enabled.
- LoyaltyLedger: CustomerID, OrderID, SignedPoints, Reason.
- PurchaseReceipts liên kết F18 và SupplierInvoices liên kết F30.

**Luồng và chức năng:** Tạo đơn → xác nhận → xuất/giao một phần → thu tiền → trả hàng/hoàn tiền. Kết nối F18 và F30 bằng ID nguồn; không ghi lặp doanh thu/tồn khi retry. Phiếu bán hàng do dự án tạo không tự coi là hóa đơn điện tử hợp lệ. Pro có POS theo ảnh, máy quét mã kiểu keyboard, in K80, nhập sản phẩm từ XLSX, danh mục nhà cung cấp và điểm thưởng tùy bật/tắt; trả hàng đảo điểm theo chính sách.

**Báo cáo/KPI:** Doanh số trước/sau giảm, hàng trả, thực thu, công nợ, giao thiếu, giá vốn và lợi nhuận gộp nếu có costing.

**Ca nghiệm thu riêng:** Đơn 10 sản phẩm, giao 6 rồi 4: tồn chỉ giảm 10. Thu 500.000 trên đơn 800.000 cho công nợ 300.000. Hủy đơn chưa giao không sinh xuất kho.

**Thiết kế app:** Order form lines, delivery confirmation, payment requests; server/processor duyệt giao dịch liên module.

<a id="f21"></a>

### F21 — Form nhập liệu và phân quyền cấu hình

**Biến thể:** S, W, A (schema cố định). **Đợt:** 2.

**Đối chiếu:** [G007](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-2/), [G030](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-1/), [G033](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-2/), [G037](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-0/), [G038](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-1/), [G050](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-0/), [G084](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v2-0/), [G085](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v1-1/), [G086](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v1-0/), [G089](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v2-0/), [G090](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v1-0/), [G171](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v1-1/), [G198](https://gsheets.vn/template/form-nhap-lieu/).

**Dữ liệu nghiệp vụ:**

- TableDefinitions: Name, Description, Group, SortOrder.
- ColumnDefinitions: TableID, Name, Type, Required, ValidationSpec, ReferenceTableID, ParentColumnID.
- FormDefinitions: TableID, Title, LayoutSpec.
- Permissions: UserEmail, TableID, Operation, Scope.
- ViewDefinitions: TableID, Type, FilterSpec, SortSpec.
- Records theo bảng có schema đã validate.
- LockedRows: TableID, RecordID, LockedBy.

**Luồng và chức năng:** Admin định nghĩa bảng/cột/form → preview → version schema → cấp quyền → nhập/sửa/duyệt. Có kiểu text/longtext/number/money/percent/date/datetime/boolean/enum/ref/email/file; dropdown phụ thuộc, lookup, batch nhập có preview, filter, export, dashboard. Formula engine chỉ hỗ trợ tập hàm whitelist và parser AST, không eval mã tùy ý.

**Báo cáo/KPI:** Bản ghi theo biểu mẫu, lỗi validation, lượt nhập, thay đổi chờ duyệt; chart qua cấu hình được kiểm chứng.

**Ca nghiệm thu riêng:** Client sửa payload để ghi bảng ngoài quyền phải bị từ chối. Đổi parent dropdown xóa/đánh lỗi child không hợp lệ. Formula lặp tham chiếu bị chặn. Schema upgrade giữ được dữ liệu cũ.

**Thiết kế app:** AppSheet nhận schema cố định được tạo trước, mỗi bộ form có config riêng; không hứa tạo tables/views động như web builder ngay trong app.

<a id="f22"></a>

### F22 — Bất động sản: giỏ hàng, tra cứu và tính giá

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [G008](https://gsheets.vn/template/dashboard-bat-dong-san-v1-0/), [G170](https://gsheets.vn/template/tim-kiem-nha-ban-bat-dong-san/), [G194](https://gsheets.vn/template/phieu-tinh-gia-v2-0/), [G196](https://gsheets.vn/template/phieu-tinh-gia-v1-0/).

**Dữ liệu nghiệp vụ:**

- Developments: Name, Location.
- Units: DevelopmentID, Block, UnitCode, Floor, Area, ListPrice, Status.
- PricePolicies: DevelopmentID, EffectiveFrom, DiscountRule, PaymentPlan.
- UnitQuotes: UnitID, QuoteDate, PolicyID, NetPrice, Fees.
- PropertyLeads: ContactID, Need, Budget, Location.
- Listings: OwnerContactID, UnitID, AskingPrice, SourceURL, VerifiedAt.

**Luồng và chức năng:** Nhập danh mục được phép sử dụng → lọc căn → áp chính sách giá có version → xuất phiếu → cập nhật trạng thái. Tìm nguồn người bán chỉ trên dữ liệu nhập/nguồn được cấp quyền; không mặc định quét thông tin cá nhân hoặc có dữ liệu thị trường trực tiếp.

**Báo cáo/KPI:** Giỏ hàng theo trạng thái/khu vực, giá/m², số căn phù hợp, giá sau ưu đãi và lịch thanh toán.

**Ca nghiệm thu riêng:** Căn 50 m² giá 2 tỷ cho 40 triệu/m². Chính sách mới không đổi quote cũ. Hai mã căn giống nhau ở hai dự án phân biệt bằng khóa.

**Thiết kế app:** Unit gallery/detail, bộ lọc nhu cầu, quote action; dữ liệu chủ nhà chỉ người được giao thấy.

<a id="f23"></a>

### F23 — Tiệm sửa xe và dịch vụ hộ kinh doanh

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [G009](https://gsheets.vn/template/webapp-quan-ly-thu-chi-tiem-sua-xe-ho-kinh-doanh-v2-0/), [G011](https://gsheets.vn/template/webapp-quan-ly-thu-chi-tiem-sua-xe-ho-kinh-doanh-v1-0/).

**Dữ liệu nghiệp vụ:**

- RepairCustomers: Name, Phone.
- CustomerVehicles: CustomerID, Plate, Model.
- RepairJobs: VehicleID, ReceivedAt, Odometer, Complaint, MechanicEmail, Status.
- JobServices: JobID, Service, LaborAmount.
- JobParts: JobID, ProductID, Quantity, UnitPrice.
- RepairPayments: JobID, Date, Amount.
- Expenses: Date, Category, Amount.

**Luồng và chức năng:** Tiếp nhận → chẩn đoán do thợ nhập → báo giá → duyệt → sửa → bàn giao → thu tiền. Vật tư dùng liên kết F18, tiền liên kết F17 khi bật. Không tự sinh chẩn đoán an toàn xe.

**Báo cáo/KPI:** Doanh thu công/phụ tùng, chi phí, đơn đang sửa, công nợ, khách quay lại.

**Ca nghiệm thu riêng:** Công 200.000 + phụ tùng 300.000, thu 400.000: còn 100.000; phụ tùng xuất đúng số lượng và không giảm lần hai khi đánh dấu bàn giao.

**Thiết kế app:** Phiếu tiếp nhận ảnh, job board, checklist giao xe; thu tiền theo quyền.

<a id="f24"></a>

### F24 — Mini ERP cho đơn vị nhỏ

**Biến thể:** W, A; S cho báo cáo. **Đợt:** 5.

**Đối chiếu:** [G010](https://gsheets.vn/template/webapp-quan-tri-mini-erp-v1-0/).

**Dữ liệu nghiệp vụ:**

- Dùng master Contacts/Products/Employees/Projects/Accounts dùng chung.
- BusinessEvents: EventType, SourceEntity, SourceID, State, IdempotencyKey.
- PurchaseOrders: SupplierID, Date, State.
- PurchaseLines: OrderID, ProductID, Qty, UnitPrice.
- QCPlans: ProductID, Criterion, Min, Max.
- QCResults: BatchID, CriterionID, Value, Result.
- Batches: ProductID, Date, Qty.
- DeviceAccessRequests: UserEmail, DeviceLabel, Status (tùy chọn quản trị, không phải hardware fingerprint).

**Luồng và chức năng:** Tích hợp F05/F17/F18/F20/F30 và F12 qua event contract. Đơn mua → nhận hàng → kiểm tra chất lượng → ghi kho → phải trả; bán hàng → giao → phải thu → thu tiền. Dashboard drilldown đến chứng từ; bảng con nhập theo lô có validation từng dòng.

**Báo cáo/KPI:** Doanh số, tồn, phải thu/phải trả, dòng tiền, lỗi QC, backlog vận hành.

**Ca nghiệm thu riêng:** Retry event nhận hàng không nhân đôi tồn hoặc công nợ. Một batch QC vượt max bị giữ, chưa vào tồn bán được. Module tắt không làm hỏng module khác.

**Thiết kế app:** Hub nhiều views dựa schema ổn định; filter từng module. Không hứa tốc độ cố định, Zero-Trust hoặc định danh phần cứng mà chưa có kiến trúc/chứng cứ hỗ trợ.

<a id="f25"></a>

### F25 — Quán ăn, nhà hàng và cà phê

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [G013](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v3-0/), [G049](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v2-0/), [G080](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v1-0/).

**Dữ liệu nghiệp vụ:**

- DiningTables: Code, Zone, Seats.
- MenuItems: Name, Category, Price, Active.
- Tickets: TableID, OpenedAt, Status, ServerEmail.
- TicketLines: TicketID, MenuItemID, Qty, UnitPrice, Notes, KitchenState.
- TicketPayments: TicketID, Method, Amount, PaidAt.
- Shifts: OpenedAt, ClosedAt, OpeningCash, CountedCash.
- Recipes liên kết F16/F18 khi bật nguyên liệu.
- Tickets thêm ServiceMode, OrderDiscount, TaxRate, Surcharge.
- TicketLines thêm LineDiscount.
- PaymentDisplayConfig: BankID, AccountNumber, AccountName, QRProvider.

**Luồng và chức năng:** Mở bàn → gọi món → gửi bếp → lên món → thêm/tách/gộp hóa đơn → thanh toán → chốt ca. Đơn món đã gửi bếp phải có lịch sử hủy. In phiếu bếp và phiếu thanh toán là chức năng riêng. Phân biệt tại bàn/mang đi; giảm giá từng món/toàn bill, thuế và phụ thu cấu hình. QR chuyển khoản chỉ hiện khi provider/chuẩn thật đã xác minh; quét QR không tự chứng minh đã thanh toán.

**Báo cáo/KPI:** Doanh thu theo ca/món, bill trung bình, tiền theo phương thức, món đang chờ, lệch tiền quầy.

**Ca nghiệm thu riêng:** Tách bill không mất/nhân đôi món; món hủy trước thanh toán không tính doanh số. Hai thiết bị gọi thêm phải giữ cả hai dòng hoặc báo xung đột rõ.

**Thiết kế app:** Table dashboard, quick order, kitchen list, payment request; xác nhận thanh toán online qua processor.

<a id="f26"></a>

### F26 — Lớp học, điểm danh và học phí

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [G014](https://gsheets.vn/template/webapp-quan-ly-lop-hoc-v2-0/), [G020](https://gsheets.vn/template/webapp-quan-ly-lop-hoc-v1-0/), [G092](https://gsheets.vn/template/diem-danh-va-quan-ly-lop-hoc-basic/), [G167](https://gsheets.vn/template/diem-danh-hoc-sinh-v2-0/), [G177](https://gsheets.vn/template/diem-danh-hoc-sinh-v1-0/), [G218](https://gsheets.vn/template/tinh-ngay-ket-thuc-phi-trung-tam-tieng-anh/).

**Dữ liệu nghiệp vụ:**

- Students: Name, GuardianName, GuardianContact.
- Classes: Name, TeacherEmail, StartDate, EndDate, FeeModel.
- Enrollments: StudentID, ClassID, EnrolledAt, Status, PaidSessionCount.
- Sessions: ClassID, StartAt, EndAt, Status.
- Attendance: SessionID, EnrollmentID, Result, ConsumedCredit.
- TuitionInvoices: EnrollmentID, Amount, DueDate.
- TuitionPayments: InvoiceID, Amount, PaidAt.
- HolidayCalendar: Date, Reason.
- GradeLevels: Name.
- Rooms: Name, Capacity.
- Assessments: ClassID, Title, Date, MaxScore, Weight.
- Scores: AssessmentID, EnrollmentID, Score.
- LearningNotes: SessionID, EnrollmentID, Homework, Conduct, Notebook, Comment.
- Enrollments thêm DiscountPolicy.
- Sessions thêm RoomID.

**Luồng và chức năng:** Ghi danh → xếp lịch → điểm danh → trừ số buổi theo chính sách → thu học phí → nhắc gia hạn. Tính ngày hết gói học theo lịch thật, ngày nghỉ/buổi học bù; không lấy số buổi nhân số ngày cố định. Có bảng điểm, nhận xét buổi học, xếp loại theo ngưỡng cấu hình, xuất báo cáo phụ huynh, học phí theo buổi thực học hoặc gói và thanh toán nhiều đợt. Tách quyền quản trị/kế toán/giáo viên/trợ giảng.

**Báo cáo/KPI:** Sĩ số, chuyên cần, buổi còn lại, học phí đến hạn, công nợ theo lớp.

**Ca nghiệm thu riêng:** Học thứ 2/4, có 1 ngày nghỉ trong kỳ: ngày hết 4 buổi phải bỏ qua ngày nghỉ. Điểm danh trùng cùng học sinh/buổi bị chặn. Buổi hủy không trừ credit.

**Thiết kế app:** Teacher class view, attendance form, tuition requests; teacher chỉ thấy lớp được phân công, phụ huynh chỉ con mình nếu bật portal có licence phù hợp.

<a id="f27"></a>

### F27 — Cổng ứng dụng và báo cáo tập trung

**Biến thể:** W, A. **Đợt:** 2.

**Đối chiếu:** [G015](https://gsheets.vn/template/webapp-quan-ly-app-v2-0/), [G016](https://gsheets.vn/template/webapp-quan-ly-app-v1-0/).

**Dữ liệu nghiệp vụ:**

- AppLinks: Name, CategoryID, URL, IconKey, Description, OwnerEmail, Active.
- Categories: Name, Order.
- AppGrants: AppLinkID, UserEmail, Role.
- Favorites: UserEmail, AppLinkID.
- Announcements: Title, Body, StartAt, EndAt.

**Luồng và chức năng:** Quản trị danh mục link → cấp quyền hiển thị → người dùng tìm kiếm/đánh dấu → mở ứng dụng. Cổng chỉ điều hướng; ứng dụng đích vẫn phải xác thực và phân quyền độc lập.

**Báo cáo/KPI:** Số app đang hoạt động, link cần cập nhật, mục yêu thích; chỉ thu thống kê truy cập đã công bố.

**Ca nghiệm thu riêng:** Người không có grant không nhận metadata app riêng. Biết URL trực tiếp không tự có quyền vào app đích. Chặn URL javascript/data nguy hiểm.

**Thiết kế app:** Gallery app, category filter, favorites; deep links có allowlist.

<a id="f28"></a>

### F28 — Lịch dịch vụ spa và phòng khám

**Biến thể:** S, W, A. **Đợt:** 3.

**Đối chiếu:** [G024](https://gsheets.vn/template/webapp-quan-ly-spa-phong-kham-v1-0/).

**Dữ liệu nghiệp vụ:**

- Clients: Name, Phone, BirthDate.
- Providers: Name, Specialty, WorkSchedule.
- ServiceCatalog: ParentCategoryID, Name, DurationMinutes, Price.
- Appointments: ClientID, ProviderID, ServiceID, StartAt, EndAt, State.
- ServiceVisits: AppointmentID, PerformedAt, ProviderEmail, OperationalNotes.
- Charges: VisitID, Amount.
- Payments: VisitID, Amount, PaidAt.
- RestrictedRecords: VisitID, FileID, AuthorizedGroup (module riêng nếu được yêu cầu).

**Luồng và chức năng:** Đặt hẹn → kiểm tra người/phòng → xác nhận → tiếp đón → ghi dịch vụ đã làm → thanh toán → hẹn lại. Phạm vi mặc định là vận hành và lịch sử dịch vụ; hồ sơ khám nhạy cảm cần thiết kế quyền/lưu trữ riêng, không chẩn đoán hay tư vấn điều trị.

**Báo cáo/KPI:** Lịch hẹn, no-show, doanh thu theo người thực hiện, công nợ, thời gian sử dụng lịch.

**Ca nghiệm thu riêng:** Hai lịch cùng provider giao nhau không cùng được xác nhận. Lễ tân xem lịch nhưng không xem RestrictedRecords. Hủy lịch không tăng doanh thu dịch vụ.

**Thiết kế app:** Timeline/calendar, appointment request, check-in/out, follow-up bot theo quyền.

<a id="f29"></a>

### F29 — Bốc thăm và chia giải sự kiện

**Biến thể:** W; S cho danh sách. **Đợt:** 4.

**Đối chiếu:** [G025](https://gsheets.vn/template/webapp-quay-so-trung-thuong-v2-0/), [G034](https://gsheets.vn/template/webapp-quay-so-trung-thuong-v1-0/).

**Dữ liệu nghiệp vụ:**

- Campaigns: Name, StartAt, RuleVersion.
- Participants: CampaignID, Code, DisplayName, Eligible.
- Prizes: CampaignID, Name, Quantity.
- Draws: CampaignID, PrizeID, DrawnAt, OperatorEmail, AlgorithmVersion.
- Winners: DrawID, ParticipantID, State.

**Luồng và chức năng:** Nhập danh sách hợp lệ → khóa danh sách/quy tắc → preview diễn tập → bốc thăm thật → lưu kết quả → xuất biên bản. Mặc định không lặp người thắng; tái bốc cần lý do và lịch sử. UI animation không quyết định kết quả ngẫu nhiên.

**Báo cáo/KPI:** Người hợp lệ, giải còn lại, người đã trúng; danh sách kết quả có timestamp.

**Ca nghiệm thu riêng:** N người hợp lệ, bốc N giải không lặp và không chọn người ngoài danh sách. Bấm lại cùng RequestID trả lại cùng kết quả đã ghi. Random test dùng seed giả chỉ trong test.

**Thiết kế app:** Không cần AppSheet chuyên biệt; dùng Web Crypto cho bản trình duyệt và lưu draw log; không tuyên bố chứng nhận tính công bằng độc lập.

<a id="f30"></a>

### F30 — Công nợ và phân bổ thanh toán

**Biến thể:** S, W, A. **Đợt:** 1.

**Đối chiếu:** [G040](https://gsheets.vn/template/webapp-quan-ly-cong-no-khach-hang-v1-0/), [G225](https://gsheets.vn/template/bao-cao-cong-no/).

**Dữ liệu nghiệp vụ:**

- Parties: Name, Type, Contact.
- Invoices: PartyID, Direction, IssueDate, DueDate, Amount, SourceEntity, SourceID, State.
- Payments: PartyID, Direction, PaidAt, Amount, Reference.
- Allocations: PaymentID, InvoiceID, Amount.
- CreditNotes: InvoiceID, Amount, IssuedAt, State.
- OpeningBalances: PartyID, Direction, AsOfDate, Amount.

**Luồng và chức năng:** Phát sinh nợ → nhận/trả tiền → phân bổ một phần/nhiều hóa đơn → đối soát → điều chỉnh/giảm trừ. Số tiền chưa phân bổ hiển thị riêng; không tự gán mọi payment vào hóa đơn đầu tiên.

**Báo cáo/KPI:** Nợ còn lại, quá hạn theo 0/1–30/31–60/61–90/>90 ngày tại ngày chọn, trả trước, chưa phân bổ.

**Ca nghiệm thu riêng:** Hóa đơn 1 triệu, phân bổ 400.000 và credit 100.000: còn 500.000. Không phân bổ vượt payment hay dư nợ; thanh toán nhiều kỳ không nhân đôi khoản gốc.

**Thiết kế app:** Party statement, allocation form/approval, aging dashboard; bot nhắc chỉ gửi khi người vận hành bật và chọn đối tượng hợp lệ.

<a id="f31"></a>

### F31 — Ghi chú và nhật trình cá nhân

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G042](https://gsheets.vn/template/webapp-quan-ly-ghi-chu-v1-0/), [G190](https://gsheets.vn/template/ghi-chu-thoi-gian-bieu/).

**Dữ liệu nghiệp vụ:**

- Notes: Title, Body, CategoryID, OwnerEmail, Pinned, ReminderAt.
- Tags: Name.
- NoteTags: NoteID, TagID.
- NoteAttachments: NoteID, FileID.
- JournalEntries: Date, TimeSlot, NoteID.

**Luồng và chức năng:** Ghi nhanh → gắn nhãn → tìm kiếm → ghim/nhắc → archive. Cho phép checklist đơn giản và nhật trình theo ngày; escape nội dung rich text nếu hỗ trợ.

**Báo cáo/KPI:** Ghi chú theo nhãn, nhắc sắp tới, mục chưa xử lý.

**Ca nghiệm thu riêng:** Lưu tiếng Việt, xuống dòng, dấu nháy và chuỗi HTML không chạy script. Ghi chú private không xuất hiện trong search/export của người khác.

**Thiết kế app:** Note deck/detail/form, calendar reminders; owner security filter.

<a id="f32"></a>

### F32 — Chấm công và tổng hợp ca

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [G045](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v3-0/), [G058](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v1-0/), [G059](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v2-0/), [G126](https://gsheets.vn/template/0104-mau-bao-cao-cham-cong-cai-san-cong-thuc/), [G172](https://gsheets.vn/template/bang-cham-cong-v3-0/), [G183](https://gsheets.vn/template/bang-cham-cong-v2-0/), [G185](https://gsheets.vn/template/bang-cham-cong-v1-0/).

**Dữ liệu nghiệp vụ:**

- Shifts: Name, StartTime, EndTime, BreakMinutes, CrossesMidnight.
- ShiftAssignments: EmployeeID, WorkDate, ShiftID.
- TimeEntries: EmployeeID, CheckInAt, CheckOutAt, Source.
- AttendanceAdjustments: EntryID, NewValue, Reason, State.
- Holidays: Date, Type.
- AttendanceSummary: EmployeeID, Period, RegularHours, OvertimeHours, LeaveDays.
- ManualAttendance: EmployeeID, WorkDate, AttendanceCode, DayFraction, OvertimeHours, ApprovedBy.

**Luồng và chức năng:** Lịch ca → ghi vào/ra → phát hiện thiếu mốc → đề nghị sửa → duyệt → chốt tháng. GPS/ảnh là tùy chọn theo nhu cầu và thông báo cho nhân viên; không tuyên bố chống gian lận tuyệt đối. Quy tắc công/OT do doanh nghiệp cấu hình, không tự kết luận tuân thủ luật lao động. Bản basic nhập mã công và tỷ lệ ngày hàng loạt; bản clock dùng timestamp. Không cộng cả hai nguồn cho cùng nhân sự/ngày nếu chưa có rule ưu tiên.

**Báo cáo/KPI:** Giờ làm hợp lệ sau trừ nghỉ, đi muộn/về sớm theo rule, thiếu công, OT đã duyệt.

**Ca nghiệm thu riêng:** Ca 22:00–06:00 hôm sau trừ nghỉ 60 phút cho 7 giờ. Một check-in lặp không tạo 2 ngày công. Ca thiếu check-out được đánh lỗi, không cho giờ âm.

**Thiết kế app:** Check-in/out, correction request, manager approval; payroll không tự thêm nếu ngoài phạm vi.

<a id="f33"></a>

### F33 — Tài chính cá nhân và gia đình

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G001](https://gsheets.vn/template/bao-cao-tai-chinh-ca-nhan/), [G047](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v3-0/), [G053](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v1-0/), [G079](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v2-0/), [G219](https://gsheets.vn/template/quan-ly-chi-tieu-co-ban/).

**Dữ liệu nghiệp vụ:**

- Wallets: Name, OpeningBalance, Currency.
- PersonalTransactions: Date, Type, WalletID, TargetWalletID, CategoryID, Amount, MemberEmail.
- PersonalBudgets: Period, CategoryID, Amount.
- SavingsGoals: Name, TargetAmount, TargetDate.
- GoalContributions: GoalID, Date, Amount.
- Debts: Party, Direction, Principal, DueDate.
- RecurringRules: Type, CategoryID, Amount, Schedule.

**Luồng và chức năng:** Tạo ví → ghi thu/chi/chuyển → so ngân sách → tích lũy mục tiêu → tổng kết tháng. Nhập CSV có preview và phát hiện trùng; dữ liệu mẫu hoàn toàn giả. Household chia sẻ theo quyền rõ.

**Báo cáo/KPI:** Tổng số dư, chi theo danh mục, tỷ lệ tiết kiệm trên thu khi thu>0, tiến độ mục tiêu, khoản đến hạn.

**Ca nghiệm thu riêng:** Chuyển tiền sang ví tiết kiệm không tăng tổng tài sản tiền mặt và không tính chi sinh hoạt. Tháng không có thu không sinh tỷ lệ tiết kiệm vô nghĩa.

**Thiết kế app:** Quick expense, wallet dashboard, budget alerts; sign-in bắt buộc cho dữ liệu thật.

<a id="f34"></a>

### F34 — Lập ngân sách doanh nghiệp

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [G052](https://gsheets.vn/template/webapp-ke-hoach-ngan-sach-doanh-nghiep-v2-0/), [G054](https://gsheets.vn/template/webapp-ke-hoach-ngan-sach-doanh-nghiep-v1-0/).

**Dữ liệu nghiệp vụ:**

- BudgetVersions: Name, FiscalYear, Scenario, State.
- BudgetLines: VersionID, Period, DepartmentID, ProjectID, CategoryID, Amount.
- BudgetActuals: Date, DepartmentID, ProjectID, CategoryID, Amount, SourceID.
- BudgetRequests: LineID, RequestedChange, Reason, State.
- BudgetCommitments: LineID, Amount, SourceID, State.

**Luồng và chức năng:** Lập dự toán theo kỳ/đơn vị → gửi duyệt → khóa baseline → so actual và committed → xin điều chỉnh tạo version. Forecast riêng, không ghi đè baseline để che chênh lệch. Có preset nối F17, F30 và F48 cho thu chi/công nợ/P&L; dùng dữ liệu nguồn chung thay vì nhập lại số tiền.

**Báo cáo/KPI:** Chênh lệch actual-budget, % sử dụng, ngân sách khả dụng sau cam kết, dự báo cuối kỳ.

**Ca nghiệm thu riêng:** Budget 100 triệu, actual 30, committed chưa giải ngân 20: khả dụng 50 triệu. Khi 20 được giải ngân, giảm committed và tăng actual, không trừ kép.

**Thiết kế app:** Budget request, approval, department dashboard; scope theo đơn vị.

<a id="f35"></a>

### F35 — Khảo sát và đánh giá phòng ban

**Biến thể:** S, W; A cho nội bộ. **Đợt:** 4.

**Đối chiếu:** [G068](https://gsheets.vn/template/webapp-tao-phieu-khao-sat-tinh-gon-thay-the-google-form-v1-0/), [G121](https://gsheets.vn/template/phieu-khao-sat-danh-gia-cho-cac-phong-ban/).

**Dữ liệu nghiệp vụ:**

- Surveys: Title, Description, Anonymous, OpenAt, CloseAt, Version.
- Questions: SurveyID, Section, Type, Label, Required, Order, Options, ParentQuestionID.
- Responses: SurveyID, RespondentToken, SubmittedAt.
- Answers: ResponseID, QuestionID, Value.
- SurveyAudience: SurveyID, GroupID.
- SurveyFiles: ResponseID, QuestionID, FileID.

**Luồng và chức năng:** Soạn câu hỏi → chia trang → preview → phát hành → nhận phản hồi → tổng hợp. Bản W có text/number/single/multi/dropdown/dependent/rating/date/file, sắp xếp, tùy chỉnh thương hiệu, shuffle có tùy chọn. Bản anonymous không thu danh tính ngoài phần cần chống lạm dụng đã công bố.

**Báo cáo/KPI:** Tỷ lệ phản hồi khi biết mẫu mời, điểm theo câu/đơn vị, phân phối lựa chọn; câu không trả lời không quy về 0.

**Ca nghiệm thu riêng:** Sửa survey đã có phản hồi tạo version; không làm lệch meaning câu cũ. Required bị kiểm tra ở server. Báo cáo nhóm quá nhỏ có ngưỡng ẩn để tránh suy ra người trả lời.

**Thiết kế app:** Nội bộ có sign-in và audience filter; khảo sát công khai dùng W có rate limit, không dùng AppSheet public với dữ liệu nhạy cảm.

<a id="f36"></a>

### F36 — Học tiếng Anh và ôn từ vựng

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G073](https://gsheets.vn/template/webapp-ung-dung-hoc-tieng-anh-thong-minh-v1-0/), [G113](https://gsheets.vn/template/ung-dung-nho-hoc-tu-vung-tieng-anh/).

**Dữ liệu nghiệp vụ:**

- Vocabulary: Term, MeaningVi, Example, PronunciationText, Topic, AudioRef.
- StudyCards: UserEmail, VocabID, NextReviewAt, IntervalDays, Ease, Repetitions.
- StudySessions: UserEmail, StartedAt, EndedAt.
- ReviewAnswers: SessionID, CardID, Score, AnsweredAt.
- Quizzes: Topic, Question, Choices, CorrectChoice, Explanation.

**Luồng và chức năng:** Thêm từ → học ví dụ → flashcard → tự đánh giá/quiz → lịch ôn lặp lại. Phát âm qua U07 và dữ liệu audio hợp lệ; AI tạo bài là tùy chọn có provider/key/cost và rà soát nội dung.

**Báo cáo/KPI:** Từ đến hạn, lượt ôn, tỷ lệ đúng theo phiên, lịch sử học; không đồng nhất lượt click với đã thành thạo.

**Ca nghiệm thu riêng:** Trả lời sai đặt lịch ôn gần hơn theo thuật toán được nêu; cùng input/clock cho lịch nhất quán. Đổi timezone không mất thẻ đến hạn.

**Thiết kế app:** Flashcard detail/actions, daily review deck, reminder bot; dữ liệu học theo user.

<a id="f37"></a>

### F37 — Phân bổ chi tiêu theo các quỹ

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G078](https://gsheets.vn/template/webapp-quan-ly-chi-tieu-6-hu-v1-0/), [G187](https://gsheets.vn/template/quan-ly-chi-tieu-6-hu-v1-0/), [G188](https://gsheets.vn/template/quan-ly-chi-tieu-6-hu-v2-0/).

**Dữ liệu nghiệp vụ:**

- Funds: Name, AllocationRatio, OpeningBalance.
- IncomeAllocations: IncomeID, FundID, Amount.
- FundTransactions: FundID, Date, Type, Amount.
- AllocationProfiles: EffectiveFrom, Ratios.
- Incomes: Date, Amount, Source.

**Luồng và chức năng:** Đặt 6 quỹ mặc định có thể đổi tên/tỷ lệ → ghi thu → preview phân bổ → xác nhận → chi theo quỹ → chuyển quỹ có lịch sử. Không mặc định phương pháp này phù hợp tài chính của mọi người.

**Báo cáo/KPI:** Số dư từng quỹ, thực chi, lệch tỷ lệ kế hoạch, tổng tiền chưa phân bổ.

**Ca nghiệm thu riêng:** Tổng tỷ lệ phải bằng 100%; thu 1.000.001 VND phân bổ số nguyên và gán phần dư theo rule để tổng không thiếu 1 đồng. Chuyển quỹ không tăng thu nhập.

**Thiết kế app:** Income allocate action, fund dashboard, quick spend; người dùng chỉ dữ liệu của mình.

<a id="f38"></a>

### F38 — Nghỉ phép và số dư phép

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [G081](https://gsheets.vn/template/webapp-quan-ly-nghi-phep-cho-doanh-nghiep/), [G091](https://gsheets.vn/template/bang-theo-doi-phep-nam-nguoi-lao-dong/).

**Dữ liệu nghiệp vụ:**

- LeaveTypes: Name, DeductBalance.
- LeavePolicies: EffectiveFrom, EntitlementRule, CarryoverRule.
- LeaveBalances: EmployeeID, Year, TypeID, Opening, Accrued, Used.
- LeaveRequests: EmployeeID, TypeID, StartDate, EndDate, StartHalf, EndHalf, Reason, State.
- WorkCalendar: Date, IsWorkingDay.
- LeaveApprovals: RequestID, ApproverEmail, Decision, At.

**Luồng và chức năng:** Thiết lập lịch/quy tắc → yêu cầu phép → quản lý duyệt → ghi sử dụng → hủy/đảo → chốt năm. Policy do người sử dụng cấu hình; không tự cài mức luật định. Tách phép được duyệt với phép đang chờ.

**Báo cáo/KPI:** Phép còn, phép chờ, nghỉ theo đội, lịch vắng nhân sự.

**Ca nghiệm thu riêng:** Nghỉ thứ 6 đến thứ 2 trong lịch làm T2–T6 là 2 ngày khi không có lễ. Hai nửa ngày là 1 ngày. Duyệt lại cùng request không trừ phép lần hai.

**Thiết kế app:** Request form, team leave calendar, approval action; bot thông báo kết quả theo cấu hình.

<a id="f39"></a>

### F39 — Đề nghị chi và phê duyệt thanh toán

**Biến thể:** S, W, A. **Đợt:** 2.

**Đối chiếu:** [G082](https://gsheets.vn/template/webapp-quan-ly-phe-duyet-chi-tien-cho-doanh-nghiep/).

**Dữ liệu nghiệp vụ:**

- ExpenseRequests: RequesterEmail, DepartmentID, Amount, Currency, Purpose, NeededBy, State.
- ExpenseRequestLines: RequestID, CategoryID, Amount.
- ApprovalRules: MinAmount, MaxAmount, DepartmentID, Step, ApproverRole.
- ApprovalDecisions: RequestID, Step, ApproverEmail, Decision, At.
- Disbursements: RequestID, AccountID, PaidAt, Amount, Reference.
- ExpenseFiles: RequestID, FileID.

**Luồng và chức năng:** Lập đề nghị → kiểm tra chứng từ → duyệt nhiều bước theo ngưỡng → thủ quỹ/kế toán giải ngân → đối soát. Được duyệt chưa đồng nghĩa đã chi; payment ghi F17 chỉ khi xác nhận giải ngân.

**Báo cáo/KPI:** Tiền chờ duyệt, được duyệt chưa chi, thời gian duyệt, quá hạn giải ngân.

**Ca nghiệm thu riêng:** Người đề nghị không tự duyệt khi rule cấm. Sửa số tiền sau duyệt phải mở vòng duyệt mới. Callback thanh toán lặp không chi lần hai.

**Thiết kế app:** My requests/Approval inbox/Payment queue; step actions; processor ghi tiền online.

<a id="f40"></a>

### F40 — Dashboard bán hàng và doanh thu

**Biến thể:** S, W. **Đợt:** 4.

**Đối chiếu:** [G088](https://gsheets.vn/template/sales-dashboard/), [G097](https://gsheets.vn/template/dashboard-ban-hang-khong-dung-cong-thuc/), [G117](https://gsheets.vn/template/bao-cao-ban-hang-v1-0/), [G118](https://gsheets.vn/template/bao-cao-ban-hang-v1-1/), [G184](https://gsheets.vn/template/bao-cao-doanh-thu-v2-0/), [G214](https://gsheets.vn/template/bao-cao-doanh-thu-v1-0/), [G215](https://gsheets.vn/template/bao-cao-doanh-thu-v4-0/), [G227](https://gsheets.vn/template/bao-cao-doanh-thu-v3-0/).

**Dữ liệu nghiệp vụ:**

- SalesFacts: Date, OrderID, ProductID, CustomerID, ChannelID, SalespersonEmail, Quantity, Gross, Discount, Returns, NetRevenue, Cost.
- Targets: Period, Dimension, DimensionID, TargetAmount.
- Dimensions: Type, ID, Name.
- ReportFilters: StartDate, EndDate, Channel, Owner.

**Luồng và chức năng:** Nhập sales fact theo schema → validate → refresh báo cáo → drilldown → export. Có preset doanh thu, bán hàng, sales dashboard và bản dùng pivot/charts không có công thức ô do người dùng phải sửa. Không tự ghép tiền thu với doanh thu theo ngày.

**Báo cáo/KPI:** Net revenue, đơn duy nhất, AOV=net revenue/đơn hợp lệ, giá vốn, gross margin, so target, tăng trưởng khi kỳ trước khác 0.

**Ca nghiệm thu riêng:** Đơn có 3 dòng vẫn đếm 1 order. Gross 1 triệu, discount 100.000, return 200.000 cho net 700.000. Top sản phẩm thay theo filter.

**Thiết kế app:** Không cần A riêng; có thể làm dashboard trong F20, bản W read-only theo quyền.

<a id="f41"></a>

### F41 — Theo dõi thói quen

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G115](https://gsheets.vn/template/theo-doi-thoi-quen-v1-0/), [G119](https://gsheets.vn/template/theo-doi-thoi-quen-v3-0/), [G189](https://gsheets.vn/template/theo-doi-thoi-quen-v2-0/).

**Dữ liệu nghiệp vụ:**

- Habits: UserEmail, Name, Unit, TargetValue, ScheduleType, ScheduledWeekdays, StartDate, EndDate.
- HabitLogs: HabitID, Date, Value, Note.
- HabitGoals: HabitID, Period, TargetCount.

**Luồng và chức năng:** Chọn thói quen → đặt lịch thực hiện → ghi hàng ngày → xem heatmap/streak → tổng kết tháng. Habit nghỉ theo lịch không được tính là thất bại; hỗ trợ mục tiêu theo số lần hoặc lượng.

**Báo cáo/KPI:** Tỷ lệ hoàn thành trên ngày phải thực hiện, streak theo lịch, tổng số buổi/lượng.

**Ca nghiệm thu riêng:** Habit chỉ T2/T4/T6, tuần hoàn thành đủ 3 ngày cho 100%, không 3/7. Tháng 2 năm nhuận có ngày 29. Mỗi habit/date chỉ một log hiện hành.

**Thiết kế app:** Daily habit view, increment/check action, streak dashboard; nhắc tùy chọn.

<a id="f42"></a>

### F42 — Thời khóa biểu và kế hoạch tuần

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G130](https://gsheets.vn/template/thoi-khoa-bieu-v1-0/), [G191](https://gsheets.vn/template/thoi-khoa-bieu-v2-0/).

**Dữ liệu nghiệp vụ:**

- Terms: Name, StartDate, EndDate.
- Subjects: Name, Color.
- ScheduleSlots: TermID, SubjectID, Weekday, StartTime, EndTime, Room, Teacher.
- ScheduleExceptions: SlotID, Date, NewStartAt, NewEndAt, Cancelled.
- WeeklyPlans: Date, TimeSlot, Activity.

**Luồng và chức năng:** Khai báo kỳ/tuần → nhập lịch cố định → ghi nghỉ/đổi lịch → xem/in tuần. Ngày đặc biệt ưu tiên hơn lịch lặp. Preset học sinh và lịch cá nhân dùng cùng engine.

**Báo cáo/KPI:** Số tiết/giờ từng môn, giờ trống, xung đột phòng/người.

**Ca nghiệm thu riêng:** Hai tiết liền nhau cùng ranh giới giờ không trùng; tiết bị hủy ngày cụ thể không xóa lịch cả kỳ. Xuất bản in ngang không cắt ngày cuối tuần.

**Thiết kế app:** Weekly calendar và exceptions form; không đồng bộ Calendar nếu U28 chưa cài.

<a id="f43"></a>

### F43 — Theo dõi lượt xe qua cửa khẩu

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G132](https://gsheets.vn/template/tong-hop-xe-qua-cua-khau/).

**Dữ liệu nghiệp vụ:**

- Gateways: Name, Location.
- Vehicles: Plate, Carrier.
- Crossings: VehicleID, GatewayID, Direction, ArrivedAt, ClearedAt, Status, CargoCategory, Reference.
- CrossingFiles: CrossingID, FileID.

**Luồng và chức năng:** Ghi xe đến → theo dõi chờ → thông quan/rời → tổng hợp theo cửa khẩu/ngày/doanh nghiệp. Dữ liệu nhập thủ công hoặc từ nguồn được cấp quyền; không hứa kết nối cơ quan hải quan.

**Báo cáo/KPI:** Lượt đến/qua, đang chờ, thời gian chờ trung vị/trung bình, số xe duy nhất.

**Ca nghiệm thu riêng:** Một xe đi hai lượt cùng ngày có 2 crossings nhưng 1 vehicle. Chưa có ClearedAt không tính thời gian hoàn tất âm hay bằng 0 giả.

**Thiết kế app:** Quick arrival form, waiting list, clearance action; filter theo đơn vị.

<a id="f44"></a>

### F44 — Tài sản và khấu hao đường thẳng

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G144](https://gsheets.vn/template/phan-bo-khau-hao-tai-san-duong-thang/).

**Dữ liệu nghiệp vụ:**

- Assets: Code, Name, Cost, ResidualValue, InServiceDate, UsefulLifeMonths, DepartmentID, Status.
- DepreciationPolicies: Name, PartialMonthConvention.
- DepreciationEntries: AssetID, Period, Expense, Accumulated, BookValue.
- AssetEvents: AssetID, Date, Type, Amount.

**Luồng và chức năng:** Nhập nguyên giá/giá trị còn lại/thời gian sử dụng → chọn quy ước tháng → sinh lịch → ghi tăng/giảm/thanh lý có version → tổng hợp. Thời gian và chính sách do người dùng nhập, không tự gắn mức thuế hoặc chuẩn mực kế toán.

**Báo cáo/KPI:** Khấu hao kỳ, lũy kế, giá trị còn lại, tài sản hết kỳ khấu hao.

**Ca nghiệm thu riêng:** Nguyên giá 120 triệu, còn lại 0, 60 tháng đủ kỳ cho 2 triệu/tháng; tháng cuối bù sai số và không xuống dưới residual. Thanh lý dừng từ ngày/quy ước đã chọn.

**Thiết kế app:** Asset register, event form; dashboard lịch khấu hao được generator tính và đối chiếu.

<a id="f45"></a>

### F45 — Đặt cơm văn phòng và chia tiền

**Biến thể:** S, W, A. **Đợt:** 4.

**Đối chiếu:** [G174](https://gsheets.vn/template/theo-doi-an-trua-cong-so/).

**Dữ liệu nghiệp vụ:**

- LunchMenus: Date, VendorID, Item, UnitPrice, CutoffAt.
- LunchOrders: MenuID, EmployeeEmail, Quantity, State.
- LunchDeliveries: Date, ReceivedQty, Notes.
- SubsidyRules: EffectiveFrom, AmountPerMeal.
- LunchPayments: EmployeeEmail, Period, Amount, PaidAt.
- Vendors: Name, Contact.

**Luồng và chức năng:** Đăng menu → đặt/hủy trước hạn → chốt số suất → gửi danh sách bằng thao tác chủ động → nhận → chia tiền sau trợ cấp → thanh toán. Không tự gửi đơn cho nhà cung cấp trong demo.

**Báo cáo/KPI:** Suất theo món/ngày, tiền nhà cung cấp, trợ cấp, nhân viên còn phải trả.

**Ca nghiệm thu riêng:** 10 suất×35.000, trợ cấp 10.000/suất: vendor 350.000, doanh nghiệp 100.000, nhân viên 250.000. Hủy sau cutoff cần người có quyền duyệt.

**Thiết kế app:** Today menu/order form, cutoff action, employee statement; bot nhắc đặt chỉ khi bật.

<a id="f46"></a>

### F46 — Dashboard biến động nhân sự

**Biến thể:** S, W. **Đợt:** 4.

**Đối chiếu:** [G095](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v2-0/), [G096](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v2-1/), [G201](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v1-0/), [G213](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v1-1/).

**Dữ liệu nghiệp vụ:**

- EmployeeSnapshots: EmployeeID, SnapshotDate, TeamID, Role, EmploymentStatus.
- WorkforceEvents: EmployeeID, EffectiveDate, Type, FromTeamID, ToTeamID.
- WorkforceTargets: Period, TeamID, PlannedHeadcount.
- dùng hồ sơ F12 làm nguồn khi tích hợp.

**Luồng và chức năng:** Nhập sự kiện ngày hiệu lực → kiểm tra logic vào/ra/chuyển → tạo snapshot → phân tích kỳ. Có preset cơ bản, theo phòng ban và so sánh kỳ; không đếm transfer thành tuyển mới toàn doanh nghiệp.

**Báo cáo/KPI:** Đầu kỳ + tuyển mới − nghỉ = cuối kỳ toàn công ty; turnover theo mẫu số headcount trung bình được ghi rõ; phân bố thâm niên.

**Ca nghiệm thu riêng:** Đầu 20, vào 3, ra 2, chuyển team 4 cho tổng cuối 21. Thay filter phòng ban cập nhật cả inbound và outbound transfer.

**Thiết kế app:** Dashboard HR read-only; số tổng đủ dùng, không mở dữ liệu lương/hồ sơ cá nhân theo quyền báo cáo.

<a id="f47"></a>

### F47 — Báo cáo quảng cáo và chiến dịch

**Biến thể:** S, W. **Đợt:** 4.

**Đối chiếu:** [G125](https://gsheets.vn/template/0105-facebook-ads-dashboard-ver02/), [G220](https://gsheets.vn/template/bao-cao-chay-quang-cao/).

**Dữ liệu nghiệp vụ:**

- AdAccounts: Platform, Name, Currency.
- AdCampaigns: AccountID, Name, Objective.
- AdDailyFacts: CampaignID, Date, Spend, Impressions, Clicks, Leads, Purchases, AttributedRevenue, AttributionWindow.
- AdTargets: CampaignID, Period, TargetMetric, TargetValue.

**Luồng và chức năng:** Nhập CSV/dữ liệu được phép → chuẩn hóa tên cột/múi giờ/tiền tệ → dashboard kênh → drilldown. Preset Facebook Ads và đa kênh. Kết nối API là option cần credential và quyền thực tế; không tự có dữ liệu tài khoản quảng cáo.

**Báo cáo/KPI:** CPM, CPC, CTR, CPL, CPA, ROAS; tính từ tổng tử/mẫu chứ không trung bình tỷ lệ từng dòng; ghi rõ cửa sổ attribution.

**Ca nghiệm thu riêng:** Hai dòng 10/100 và 10/900 clicks/impressions cho CTR tổng 2%, không 5,56%. Purchases=0 cho CPA không áp dụng. Khác currency chưa quy đổi thì không cộng.

**Thiết kế app:** Không cần A riêng; W có màn upload mapping và dashboard chỉ đọc.

<a id="f48"></a>

### F48 — Báo cáo chi phí, P&L và dòng tiền

**Biến thể:** S, W. **Đợt:** 4.

**Đối chiếu:** [G099](https://gsheets.vn/template/bao-cao-ket-qua-kinh-doanh-pl-basic/), [G100](https://gsheets.vn/template/bao-cao-dong-tien-cash-flow-basic/), [G212](https://gsheets.vn/template/bao-cao-chi-phi/).

**Dữ liệu nghiệp vụ:**

- FinanceFacts: Date, Period, AccountCode, DepartmentID, ProjectID, Amount, RecognitionType, CashFlowClass, SourceID.
- ReportMappings: AccountCode, ReportType, Section, Sign.
- ReportingPeriods: StartDate, EndDate, Closed.
- ReportAdjustments: Period, MappingID, Amount, Reason, State.

**Luồng và chức năng:** Nhập dữ liệu quản trị → map khoản mục → validate chưa map → lập báo cáo chi phí/P&L/cashflow riêng → so kỳ → truy nguồn. Không suy P&L đầy đủ chỉ từ thu chi tiền mặt; có dữ liệu ghi nhận doanh thu/chi phí và giá vốn khi báo lãi lỗ.

**Báo cáo/KPI:** Doanh thu, giá vốn, lợi nhuận gộp, chi phí vận hành; tiền đầu + dòng tiền thuần = tiền cuối; phân bổ chi phí theo chiều quản trị.

**Ca nghiệm thu riêng:** Bán chịu 1 triệu và chưa thu: doanh thu có thể ghi nhận theo input, cash inflow=0. Tiền vay tăng cash financing nhưng không thành doanh thu. Bảng mapping thiếu hiện lỗi thay vì bỏ âm thầm.

**Thiết kế app:** W report viewer; mẫu báo cáo quản trị, không tự tuyên bố là bộ báo cáo nộp cơ quan quản lý.

<a id="f49"></a>

### F49 — Trung tâm báo cáo đơn giản

**Biến thể:** S, W. **Đợt:** 4.

**Đối chiếu:** [G083](https://gsheets.vn/template/webapp-quan-ly-bao-cao-co-ban/).

**Dữ liệu nghiệp vụ:**

- Reports: Title, Description, OwnerEmail, SourceType, SourceRef, RefreshRule.
- ReportWidgets: ReportID, Type, MetricKey, DimensionKey, Position.
- ReportAccess: ReportID, UserEmail, Permission.
- RefreshRuns: ReportID, StartedAt, EndedAt, Status, Error.

**Luồng và chức năng:** Đăng ký báo cáo → cấu hình widget từ schema whitelist → preview → cấp quyền xem → cập nhật thủ công/lịch → theo dõi lỗi. Là SKU riêng nhỏ, không thay toàn bộ F40/F46/F47/F48 bằng một dashboard chung.

**Báo cáo/KPI:** Báo cáo đến hạn refresh, lần refresh thành công, lỗi nguồn, dữ liệu tính đến thời điểm nào.

**Ca nghiệm thu riêng:** Nguồn lỗi giữ kết quả trước có nhãn stale, không hiển thị zero như dữ liệu mới. Người xem không sửa cấu hình nguồn hoặc truy cập report ngoài grant.

**Thiết kế app:** W dashboard và report list; dùng F27 để gom link nếu chỉ cần điều hướng.

<a id="f50"></a>

### F50 — Bộ kế hoạch cuộc sống tổng hợp (bổ sung ngoài shop)

**Biến thể:** S, W; A theo module. **Đợt:** 4.

**Đối chiếu:** [X001 — bài giới thiệu kế hoạch cuộc sống](https://taphoasheet.store/tang-mien-phi-template-notion-life-planner-2025/).

**Dữ liệu nghiệp vụ:**

- Kế thừa F01/F31/F33/F36/F41/F42.
- LifeGoals: Area, Title, TargetDate, Progress.
- WellnessLogs: Date, Type, Value, Unit.
- WorkoutPlans: Date, Activity, DurationMinutes, Notes.
- ReadingList: Title, Author, Status.
- Trips: Name, StartDate, EndDate, Budget.
- Itinerary: TripID, Date, StartAt, Location, Activity.
- PackingItems: TripID, Item, Packed.
- Exams: SubjectID, Date, Topic.
- MealPlans: Date, Meal, Description.

**Luồng và chức năng:** Gom kế hoạch ngày/tuần/tháng/năm, tự chăm sóc, vận động, tài chính, học tập và du lịch vào hub. Đây là thiết kế mới từ 6 nhóm nhu cầu được mô tả trong bài giới thiệu Notion miễn phí, không phải bản sao cấu trúc hơn 40 trang bên trong chưa được kiểm tra. Thêm preset ngân sách 50/30/20 có thể tùy chỉnh; không tạo lời khuyên sức khỏe hoặc dinh dưỡng cá nhân.

**Báo cáo/KPI:** Tiến độ mục tiêu, thói quen theo lịch, khoản dành dụm, lịch thi/chuyến đi, checklist chưa xong.

**Ca nghiệm thu riêng:** Từ dashboard nhấp vào mục tiêu mở đúng bản ghi; dữ liệu thu chi chỉ lưu một nguồn F33; đổi năm giữ lịch sử cũ. Chuyến đi có nhiều ngày/khác múi giờ không lẫn ngày vận chuyển.

**Thiết kế app:** Các module cá nhân với owner filter; nếu muốn bản Notion thật, tạo backlog cấu hình database/relation/views riêng và kiểm tra khả năng công cụ lúc triển khai, không gọi bản Sheets là Notion.

## 12. Đặc tả các tiện ích độc lập

Mỗi Uxx cần README, dữ liệu ví dụ, mã/hàm hoàn chỉnh, installer nếu cần, danh sách hàm và test expected/actual. Với mỗi phép biến đổi bên trong một Uxx, tạo một preset hoặc named function có tên ổn định; không bỏ bớt một phép chỉ vì dùng chung engine.

Nếu một mục nguồn ghi “NF”, đó là cách nguồn đặt tên. Các thao tác cần quyền như gửi mail, sửa Drive, tạo file hoặc gọi dịch vụ không được giả lập thành named function thuần không có bước cấp quyền. Phân biệt rõ formula, custom function, menu và background job.

<a id="u01"></a>

### U01 — Gộp dữ liệu nhiều file và nhiều tab

**Dạng giao:** S + Apps Script.

**Đối chiếu:** [G062](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v6-0/), [G093](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v5-0/), [G146](https://gsheets.vn/template/tong-hop-du-lieu-tu-nhieu-file-nhieu-sheet-khac-nhau/), [G162](https://gsheets.vn/template/importrange-lay-theo-ten-tieu-de-cot/), [G165](https://gsheets.vn/template/tong-hop-du-lieu-tu-nhieu-sheet-ve-mot-sheet/), [G176](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v2-0/), [G178](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v1-0/), [G179](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v3-0/), [G224](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v4-0/).

**Input/schema:** ImportSources: SourceFileID, SheetName, RangeA1, HeaderRow, Enabled; ColumnMappings: SourceID, SourceHeader, TargetField; FilterRules: SourceID, Field, Operator, Value, Group; ImportRuns: RunID, State, Cursor, RowCount, Error.

**Xử lý/đầu ra:** Hỗ trợ append/replace/upsert rõ ràng, chọn cột theo header, map nguồn khác cấu trúc, điều kiện ngày/số/text/null/OR, checkpoint, provenance và chống trùng. Chỉ đọc file người chạy có quyền. Chọn import theo công thức hoặc batch script theo nhu cầu, không hứa một hàm luôn nhanh nhất.

**Nghiệm thu:** Hai nguồn đảo thứ tự cột vẫn gộp đúng. Một nguồn mất quyền được ghi lỗi cụ thể; chạy lại không nhân đôi hàng upsert; không xóa dữ liệu đích khi nguồn lỗi.

<a id="u02"></a>

### U02 — Xuất vùng chọn, tab, PDF và ảnh

**Dạng giao:** S + Apps Script; W cho render ảnh.

**Đối chiếu:** [G006](https://gsheets.vn/template/extension-chuyen-doi-vung-chon-thanh-hinh-anh-pdf/), [G108](https://gsheets.vn/template/nf-ham-tai-1-sheet-voi-nhieu-dinh-dang/), [G210](https://gsheets.vn/template/cach-tai-1-sheet-tu-google-sheets/).

**Input/schema:** ExportJobs: SpreadsheetID, SheetName, RangeA1, Format, Orientation, PaperSize, FileName, DestinationFolderID.

**Xử lý/đầu ra:** CSV cho bảng, PDF có vùng in, xuất một tab theo định dạng được API hỗ trợ và xác minh. PNG cần pipeline render vùng theo dữ liệu/định dạng hoặc PDF rồi rasterize; không bịa named function lấy ảnh chính xác của ô. Preview, tiến trình và lỗi quyền rõ.

**Nghiệm thu:** Vùng có tiếng Việt, ô merge ở dashboard, chart, cột ẩn và 2 trang PDF phải đúng nội dung. Export một tab không lộ tab lương còn lại. Bản PNG không cắt hàng cuối.

<a id="u03"></a>

### U03 — Làm sạch văn bản, liên hệ và thư viện Regex

**Dạng giao:** S Named Functions; Apps Script khi cần.

**Đối chiếu:** [G101](https://gsheets.vn/template/nf-ham-tach-mail-sdt-ho-ten-ten-dem-ngay/), [G103](https://gsheets.vn/template/0127-nf-ham-bo-dau-tieng-viet/), [G139](https://gsheets.vn/template/tach-phuong-quan-tinh-thanh-pho/), [G150](https://gsheets.vn/template/tach-ho-va-ten-voi-regex/), [G155](https://gsheets.vn/template/rut-gon-ho-va-ten/), [G156](https://gsheets.vn/template/lam-sach-so-dien-thoai/), [G158](https://gsheets.vn/template/loai-bo-dau-cau/), [G205](https://gsheets.vn/template/tai-nguyen-ham-regex-ham-xu-ly-du-lieu-manh-nhat/).

**Input/schema:** RawText, Operation, Locale, CountryCode; TestCases: Input, Expected, RuleVersion.

**Xử lý/đầu ra:** Bộ hàm tách email/điện thoại/họ tên/ngày, bỏ dấu Việt gồm đ/Đ, chuẩn hóa khoảng trắng, rút gọn tên, loại dấu câu, tách địa chỉ theo cấu trúc được khai báo. Có cheat sheet Regex và ví dụ do dự án viết. Không suy địa chỉ hành chính hiện hành chỉ từ chuỗi hoặc hardcode một danh sách không ngày cập nhật.

**Nghiệm thu:** Giữ số 0 đầu điện thoại, phân biệt số máy lẻ; không tự sửa số không hợp lệ. Tên có nhiều khoảng trắng/họ ghép có rule minh bạch. Text trống và Unicode tổ hợp chạy đúng.

<a id="u04"></a>

### U04 — Sinh mã ổn định và chống trùng

**Dạng giao:** Apps Script; AppSheet initial value.

**Đối chiếu:** [G105](https://gsheets.vn/template/tao-id-khong-trung-lap-khi-lua-chon-dropdown/), [G134](https://gsheets.vn/template/tao-id-ngau-nhien-khong-trung-lap/).

**Input/schema:** IDRules: Entity, Prefix, Format, SequenceScope; IDAssignments: Entity, RecordID, AssignedID, AssignedAt.

**Xử lý/đầu ra:** ID ghi một lần, không tái tính khi sort/filter. Mã tuần tự có lock/sequence cùng một writer; mã AppSheet dùng UNIQUEID trong Initial value. Trigger dropdown/batch paste xử lý cả vùng thay đổi; không dùng RAND làm khóa lưu trữ.

**Nghiệm thu:** Đổi dropdown rồi đổi lại vẫn giữ ID; dán 100 dòng không trùng; chạy lại installer không reset sequence. Xóa hàng không tái dùng ID cũ.

<a id="u05"></a>

### U05 — Lịch năm và công thức ngày

**Dạng giao:** S Named Functions.

**Đối chiếu:** [G106](https://gsheets.vn/template/tao-ngay-va-thu-trong-thang/), [G133](https://gsheets.vn/template/tim-ngay-dau-tuan-va-cuoi-tuan-trong-thang/), [G135](https://gsheets.vn/template/tao-lich-12-thang-chi-voi-1-cong-thuc/), [G136](https://gsheets.vn/template/tao-lich-12-thang-theo-chieu-ngang/).

**Input/schema:** Year, Month, WeekStartsOn, Layout, HolidayDates.

**Xử lý/đầu ra:** Sinh ngày/thứ theo tháng, lịch 12 tháng dạng grid/ngang, đầu/cuối tuần trong tháng. Một công thức spill cho preset phù hợp; tránh ghi đè vùng đã có dữ liệu. Tuần giao tháng có quy tắc clip hoặc hiển thị ngày ngoài tháng rõ ràng.

**Nghiệm thu:** Tháng 2 năm nhuận 29 ngày, tháng bắt đầu Chủ nhật, năm mới giao tuần. Đổi Monday/Sunday start sắp cột đúng và không mất ngày.

<a id="u06"></a>

### U06 — Thẻ liên hệ và ảnh từ văn bản

**Dạng giao:** S + W/Apps Script renderer.

**Đối chiếu:** [G109](https://gsheets.vn/template/nf-ham-chuyen-van-ban-thanh-hinh-anh/), [G193](https://gsheets.vn/template/tao-card-visit/).

**Input/schema:** Cards: Name, Role, Company, Phone, Email, Website, LogoRef, ThemeID; TextCards: Body, Font, Size, Background.

**Xử lý/đầu ra:** Tạo card visit hoặc text card từ layout riêng, có preview và xuất ảnh/PDF qua renderer có hỗ trợ tiếng Việt. Logo do khách cung cấp hoặc asset hợp lệ. QR/vCard tùy chọn với encoding chuẩn được kiểm tra lúc build.

**Nghiệm thu:** Tên dài tự wrap trong khung; dấu Việt không bị mất; QR/vCard mẫu chứa đúng dữ liệu. Không để external image lỗi làm export treo.

<a id="u07"></a>

### U07 — Dịch văn bản và phát giọng đọc

**Dạng giao:** S + W/sidebar.

**Đối chiếu:** [G110](https://gsheets.vn/template/nf-ham-chuyen-van-ban-thanh-giong-noi/), [G116](https://gsheets.vn/template/dich-va-chuyen-doi-van-ban-thanh-giong-noi-nhieu-ngon-ngu/), [G160](https://gsheets.vn/template/dich-song-song-tat-ca-cac-ngon-ngu-tren-the-gioi/).

**Input/schema:** TranslationJobs: Text, SourceLanguage, TargetLanguage, Provider, Status; SpeechOptions: Language, Voice, Rate.

**Xử lý/đầu ra:** Dịch dùng chức năng/API được nền tảng hỗ trợ, có cache và giới hạn; phát âm trình duyệt dùng khả năng voice thiết bị. Tải file audio chỉ có khi provider thật hỗ trợ và đã cấu hình. Tách dịch nhiều ngôn ngữ khỏi giả định hỗ trợ mọi ngôn ngữ; không dùng URL TTS không chính thức.

**Nghiệm thu:** Nguồn rỗng, văn bản dài, ngôn ngữ/voice không hỗ trợ trả thông báo rõ. Hai job trùng có thể tái dùng cache; giao diện phân biệt kết quả dịch với văn bản gốc.

<a id="u08"></a>

### U08 — Đánh số thứ tự theo điều kiện và bộ lọc

**Dạng giao:** S Named Functions.

**Đối chiếu:** [G111](https://gsheets.vn/template/nf-ham-danh-so-thu-tu-bo-qua-bo-loc-va-blank/), [G157](https://gsheets.vn/template/tong-hop-cac-sac-thai-danh-so-thu-tu/).

**Input/schema:** DataRange, NonBlankColumn, NumberingMode, VisibleRowsPolicy.

**Xử lý/đầu ra:** Preset đánh số hàng có dữ liệu, bỏ blank, reset theo nhóm và đánh số theo các hàng đang hiển thị. Mỗi mode mô tả tác động của filter/sort; số thứ tự này không dùng làm khóa nghiệp vụ.

**Nghiệm thu:** Dữ liệu có blank giữa bảng và filter bỏ một dòng vẫn cho dãy đúng theo mode. Thêm hàng hoặc đổi nhóm không lệch tổng số bản ghi.

<a id="u09"></a>

### U09 — Đọc số và số tiền thành chữ

**Dạng giao:** S Named Functions/Apps Script.

**Đối chiếu:** [G112](https://gsheets.vn/template/0118-nf-ham-doc-so-thanh-chu/), [G142](https://gsheets.vn/template/doc-so-thanh-chu-nhieu-ngon-ngu/), [G164](https://gsheets.vn/template/doc-so-thanh-chu/).

**Input/schema:** NumberValue, Language, Currency, DecimalPolicy, Capitalization.

**Xử lý/đầu ra:** Hỗ trợ tiếng Việt trước, thêm ngôn ngữ theo từng module đã kiểm tra. Quy tắc lẻ/lẻ số, âm, số thập phân, đồng/xu và làm tròn rõ; xuất thông báo khi vượt miền hỗ trợ. Không hứa mọi ngôn ngữ có sẵn.

**Nghiệm thu:** 0, 15, 105, 1.001, số âm, 1.000.000 và phần thập phân có expected riêng; test tiếng Việt với một nghìn không mất nhóm zero.

<a id="u10"></a>

### U10 — Lọc số điện thoại theo mẫu số

**Dạng giao:** S Named Functions.

**Đối chiếu:** [G137](https://gsheets.vn/template/check-sim-so-dep-4-so-cuoi/), [G180](https://gsheets.vn/template/loc-so-sim/).

**Input/schema:** PhoneText, PatternType, LastNDigits, PatternRules.

**Xử lý/đầu ra:** Giữ chuỗi số, phân loại lặp/tăng/đối xứng/đuôi theo regex hoặc rule cấu hình; có preset 4 số cuối. Nhãn chỉ mô tả mẫu ký tự, không khẳng định giá trị đầu tư, may mắn hay tài vận.

**Nghiệm thu:** Số bắt đầu 0 không bị mất; chuỗi ngắn hơn N báo không đủ dữ liệu; cùng số có thể khớp nhiều pattern và filter OR/AND đúng.

<a id="u11"></a>

### U11 — Trộn thư và gửi mail cá nhân hóa

**Dạng giao:** S + Apps Script menu/queue.

**Đối chiếu:** [G138](https://gsheets.vn/template/tron-thu-bang-cong-thuc-google-sheets/), [G148](https://gsheets.vn/template/gui-mail-ca-nhan-hoa-v2-0/), [G192](https://gsheets.vn/template/gui-mail-ca-nhan-hoa-v1-0/).

**Input/schema:** Recipients: Email, Name, MergeFields, ConsentOrPurpose, Enabled; MailTemplates: Subject, Body, PlaceholderSchema; Outbox: RecipientID, TemplateVersion, State, DedupKey, SentAt, Error.

**Xử lý/đầu ra:** Formula có thể tạo nội dung preview, nhưng gửi mail là thao tác có chủ đích từ menu/queue, không là side effect của recalculation. Kiểm tra biến còn thiếu, preview người nhận/nội dung/tệp, dry-run và giới hạn quota; log trạng thái, retry chống gửi lặp.

**Nghiệm thu:** Sort/recalculate không gửi mail. Chạy lại cùng campaign/recipient không gửi trùng. Email không hợp lệ và placeholder thiếu phải bị giữ trước bước gửi.

<a id="u12"></a>

### U12 — Bộ biểu đồ nhỏ và bong bóng

**Dạng giao:** S.

**Đối chiếu:** [G127](https://gsheets.vn/template/bieu-do-bong-bong/), [G140](https://gsheets.vn/template/dung-ky-tu-dac-biet-de-ve-bieu-do/).

**Input/schema:** ChartData: Label, X, Y, Size, Category; ChartSettings: Type, Units, Scale, SortOrder.

**Xử lý/đầu ra:** Preset bubble chart, thanh bằng ký tự hoặc SPARKLINE, cột/đường; mỗi chart có legend và đơn vị. Với kích thước bong bóng nêu cách map diện tích để không gây hiểu sai; không render giá trị âm thành kích thước âm.

**Nghiệm thu:** Giá trị zero/negative/null xử lý rõ; lọc dữ liệu cập nhật chart; chart không lấy nhầm hàng tổng làm điểm riêng.

<a id="u13"></a>

### U13 — Tổng ngang, cộng dồn và trả về tiêu đề

**Dạng giao:** S Named Functions.

**Đối chiếu:** [G143](https://gsheets.vn/template/tinh-tong-chi-tieu-theo-chieu-ngang/), [G153](https://gsheets.vn/template/cong-don-nhieu-dieu-kien/), [G208](https://gsheets.vn/template/tim-gia-tri-tra-ve-tieu-de-tuong-ung/).

**Input/schema:** Matrix, HeaderRange, Criteria, DateOrOrderKey, TiePolicy.

**Xử lý/đầu ra:** Hàm tổng theo header/điều kiện, running total có partition và thứ tự, tìm ô rồi trả tiêu đề tương ứng. Khi nhiều ô khớp cho phép trả tất cả hoặc đầu tiên theo policy; không chọn ngầm không ổn định.

**Nghiệm thu:** Header đổi vị trí vẫn trả đúng; nhiều giá trị bằng nhau tuân tie policy; running total reset đúng nhóm và không phụ thuộc thứ tự nhập chưa sắp.

<a id="u14"></a>

### U14 — Pivot chuỗi và chuyển bảng rộng/dài

**Dạng giao:** S Named Functions; Apps Script cho batch lớn.

**Đối chiếu:** [G151](https://gsheets.vn/template/pivot-nhieu-gia-tri-chuoi/), [G152](https://gsheets.vn/template/unpivot/).

**Input/schema:** SourceRange, IDColumns, HeaderRow, ValueColumns, Aggregation, NullPolicy.

**Xử lý/đầu ra:** Pivot chuỗi có delimiter và rule xử lý trùng; unpivot giữ ID, tên chỉ tiêu, giá trị. Có mapping kiểu dữ liệu và kiểm tra tổng trước/sau. Không làm mất zero vì coi đó là blank.

**Nghiệm thu:** Wide→long→wide khôi phục bảng có khóa duy nhất. Khi duplicate key không thể đảo ngược, báo cần rule aggregate. Chuỗi chứa delimiter được escape.

<a id="u15"></a>

### U15 — Đảo chuỗi và minh họa ký tự hướng chữ

**Dạng giao:** S utility giáo dục.

**Đối chiếu:** [G145](https://gsheets.vn/template/dao-ky-tu-voi-char8238/).

**Input/schema:** Text, Mode=ReverseText hoặc ShowDirectionControl.

**Xử lý/đầu ra:** Đảo thứ tự ký tự là phép biến đổi khác với chèn U+202E để đổi cách hiển thị. Tạo hai ví dụ phân biệt, chế độ hiển thị mã Unicode và loại ký tự điều khiển. Không dùng ký tự ẩn để ngụy trang tên file, liên kết hoặc số liệu.

**Nghiệm thu:** Kết quả reverse là chuỗi đã đảo thật; ví dụ direction-control có nhãn rõ. Export cho phép loại control và giữ nội dung nhìn thấy nhất quán.

<a id="u16"></a>

### U16 — Hiển thị ảnh Drive theo quyền

**Dạng giao:** S + sidebar/W nếu cần xác thực.

**Đối chiếu:** [G147](https://gsheets.vn/template/hien-thi-hinh-anh-luu-trong-drive/).

**Input/schema:** ImageRefs: EntityID, DriveFileID, Caption, Visibility; RenderStatus: RefID, State, Error.

**Xử lý/đầu ra:** Kiểm tra URL, loại file và quyền. Nếu hàm IMAGE không thể đọc ảnh Drive riêng trong môi trường thực, dùng sidebar/web renderer có xác thực hoặc hướng dẫn chèn ảnh; không tự đổi quyền thành anyone để ảnh hiện được.

**Nghiệm thu:** Ảnh riêng không xuất hiện cho người ngoài quyền. File xóa/không phải ảnh hiện placeholder và lỗi. Thay ảnh không làm đổi ID bản ghi nghiệp vụ.

<a id="u17"></a>

### U17 — Chia nhóm ngẫu nhiên hoặc cân bằng

**Dạng giao:** S + Apps Script tùy mode.

**Đối chiếu:** [G149](https://gsheets.vn/template/phan-nhom-ngau-nhien-va-khong-ngau-nhien/).

**Input/schema:** Participants: ID, Name, Skill, Department; GroupRules: GroupCount, GroupSizeLimit, BalanceFields, SeedForTest.

**Xử lý/đầu ra:** Mode ngẫu nhiên và mode cân bằng theo tiêu chí; khóa kết quả sau khi chốt. Nếu không thỏa đồng thời quy tắc, báo constraint và phần vi phạm thay vì giả vờ cân bằng hoàn hảo.

**Nghiệm thu:** 11 người chia 3 nhóm cho cỡ 4/4/3 khi không có điều kiện khác; không mất hoặc lặp người. Recalculate không đổi kết quả đã chốt.

<a id="u18"></a>

### U18 — Dropdown phụ thuộc nhiều cấp

**Dạng giao:** S formulas hoặc Apps Script; A Ref khi phù hợp.

**Đối chiếu:** [G163](https://gsheets.vn/template/tao-list-phu-thuoc-nhieu-cap-do-khong-dung-code/), [G221](https://gsheets.vn/template/dropdown-phu-thuoc-4-level-code/), [G222](https://gsheets.vn/template/dropdown-phu-thuoc-3-level-code/), [G223](https://gsheets.vn/template/dropdown-phu-thuoc-2-level-code/).

**Input/schema:** HierarchyNodes: ID, ParentID, Level, Label, Active; TargetMappings: Sheet, ParentColumn, ChildColumn, Mode.

**Xử lý/đầu ra:** Preset 2/3/4 cấp và cấu hình mở rộng; bản không code dùng vùng phụ/named ranges phù hợp, bản code cập nhật validation khi sửa/paste. Label có dấu hoặc trùng nhưng ID khác vẫn phân biệt được.

**Nghiệm thu:** Đổi cấp 1 khiến cấp 2–4 không còn hợp lệ thì xóa hoặc đánh lỗi theo rule. Dán nhiều dòng xử lý toàn bộ. Parent hết hiệu lực không làm mất lịch sử bản ghi cũ.

<a id="u19"></a>

### U19 — Quản lý quyền file và khóa vùng dữ liệu

**Dạng giao:** S + Apps Script.

**Đối chiếu:** [G166](https://gsheets.vn/template/quan-ly-phan-quyen-file-tap-trung/), [G209](https://gsheets.vn/template/khoa-du-lieu-loai-tru-code/).

**Input/schema:** ManagedFiles: FileID, Owner, Policy; AccessRules: FileID, Principal, Role, Expiry; ProtectedRanges: FileID, Sheet, RangeA1, AllowedEditors, Exceptions; AccessChangeLog: RuleID, Before, After, State.

**Xử lý/đầu ra:** Tách quyền Drive với protection vùng trong Sheets. Dry-run thay đổi, allowlist file do người chạy có quyền quản lý, xử lý exception và snapshot trước cập nhật. Không mặc định người bán template có quyền vào file khách.

**Nghiệm thu:** Protection không khóa nhầm vùng được loại trừ. Thay quyền không tước owner. API từ chối quyền phải ghi lỗi từng file, không báo cả batch thành công giả.

<a id="u20"></a>

### U20 — Sao lưu dữ liệu nhiều file

**Dạng giao:** Apps Script jobs.

**Đối chiếu:** [G168](https://gsheets.vn/template/backup-data-nhieu-file/).

**Input/schema:** BackupPlans: SourceFileID, DestinationFolderID, Schedule, RetentionCount, Mode; BackupRuns: PlanID, SnapshotID, CreatedAt, State, HashOrRowCount, Error.

**Xử lý/đầu ra:** Chọn snapshot dữ liệu hoặc bản sao file đầy đủ, nêu rõ những gì được lưu. Queue/checkpoint; retention chỉ xử lý snapshot do tool tạo. Tạo restore preview sang file mới trước khi cho phép thay dữ liệu đích.

**Nghiệm thu:** Nguồn 2 tab, có công thức/format: kiểm tra theo mode đã cam kết. Restore sang bản mới khớp số dòng và giá trị. Một file lỗi không mất backup cũ.

<a id="u21"></a>

### U21 — Tìm kiếm, QUERY và phân trang dữ liệu

**Dạng giao:** S Named Functions + tài liệu ví dụ.

**Đối chiếu:** [G104](https://gsheets.vn/template/nf-ham-tim-kiem-noi-dung-chua-tu-khoa/), [G141](https://gsheets.vn/template/loc-tu-khoa/), [G161](https://gsheets.vn/template/tao-next-page-bang-ham-query-ket-hop-hyperlink/), [G204](https://gsheets.vn/template/ham-query-va-importrange-ham-truy-van-du-lieu-top-1/).

**Input/schema:** SourceRange, Keyword, SearchColumns, MatchMode, Page, PageSize, SortKeys; QueryExamples: Purpose, InputSchema, Formula, Expected.

**Xử lý/đầu ra:** Lọc keyword có/không dấu theo option, AND/OR, QUERY kết hợp dữ liệu nguồn đã cấp quyền, phân trang bằng vùng kết quả và hyperlink điều hướng. Dùng escaping đúng, tránh nối trực tiếp input thành câu query tùy ý. Thư viện bài tập viết mới.

**Nghiệm thu:** Keyword chứa dấu nháy và regex metachar không vỡ query. Page cuối ít hơn pageSize vẫn đúng; xóa dữ liệu khiến page vượt max thì đưa về page hợp lệ.

<a id="u22"></a>

### U22 — Dòng cuối và lấp ô trống

**Dạng giao:** S Named Functions.

**Đối chiếu:** [G154](https://gsheets.vn/template/tim-dong-cuoi-chua-du-lieu/), [G159](https://gsheets.vn/template/lap-day-du-lieu/).

**Input/schema:** DataRange, KeyColumn, BlankPolicy, FillDirection, GroupKeys.

**Xử lý/đầu ra:** Tìm bản ghi cuối theo cột khóa hoặc vùng đã định; phân biệt ô thật trống và công thức trả chuỗi rỗng. Fill-down/up chỉ trong nhóm, preview trước khi ghi giá trị; không lấp trường nhạy cảm bằng suy đoán.

**Nghiệm thu:** Blank giữa bảng không dừng dữ liệu sớm. Công thức trả rỗng ở cuối không bị đếm theo mode logical. Fill không vượt ranh giới nhóm.

<a id="u23"></a>

### U23 — Chuyển đổi lịch âm và dương

**Dạng giao:** S + Apps Script.

**Đối chiếu:** [G206](https://gsheets.vn/template/doi-lich-am-sang-duong-code/).

**Input/schema:** DateInput, ConversionDirection, TimeZone, LunarLeapMonthFlag, SupportedYearRange.

**Xử lý/đầu ra:** Chọn thuật toán/thư viện có nguồn và giấy phép phù hợp, ghi rõ phạm vi năm và lịch Việt Nam. Bắt buộc cờ tháng nhuận; không dùng xấp xỉ trừ số ngày cố định. Tạo tập đối chiếu ngày từ nguồn lịch đáng tin cậy được xác minh khi build.

**Nghiệm thu:** Âm→dương→âm khớp trong phạm vi; kiểm tra Tết, tháng nhuận, cuối tháng và ngày ngoài phạm vi. Không hiển thị kết quả chưa kiểm chứng như lịch chính thức.

<a id="u24"></a>

### U24 — Chốt giá trị công thức biến động

**Dạng giao:** Apps Script menu.

**Đối chiếu:** [G207](https://gsheets.vn/template/dong-bang-cac-ham-khong-co-dinh/).

**Input/schema:** FreezeRequests: FileID, Sheet, RangeA1, BackupRef, RequestedAt; FreezeHistory: RequestID, FormulaSnapshot, ValueSnapshot, State.

**Xử lý/đầu ra:** Preview vùng/công thức → tạo bản lưu → thay công thức bằng kết quả tại thời điểm xác nhận. Chỉ thao tác vùng được chọn và loại công thức người dùng đồng ý. Có khôi phục từ snapshot; không tự freeze toàn workbook.

**Nghiệm thu:** NOW/RAND trong vùng được chốt không đổi sau recalc; công thức ngoài vùng còn nguyên. Khôi phục trả công thức gốc và chỉ tác động vùng của request.

<a id="u25"></a>

### U25 — Sao chép bộ thư mục và template Drive

**Dạng giao:** Apps Script/W job.

**Đối chiếu:** [G056](https://gsheets.vn/template/webapp-tao-ban-sao-drive-folder-google-sheets/), [G211](https://gsheets.vn/template/tao-ban-sao-nhieu-thu-muc-driver/).

**Input/schema:** CopyPlans: SourceFolderID, DestinationFolderID, IncludeSubfolders, FileTypeFilter, ShortcutPolicy; CopyItems: SourceID, NewID, ParentNewID, State, Error.

**Xử lý/đầu ra:** Copy theo quyền hiện có; giữ cấu trúc thư mục, xử lý shortcut riêng, checkpoint và bản đồ ID. Công thức/liên kết giữa file cần bước relink được preview, không bảo đảm copy file tự đổi mọi tham chiếu.

**Nghiệm thu:** Thư mục lồng 3 cấp copy đúng cây; retry không tạo thêm bản đã thành công. Không thay quyền nguồn. Thiếu quyền một file được báo riêng; link liên file được kiểm tra sau copy.

<a id="u26"></a>

### U26 — Nén và đổi kích thước ảnh

**Dạng giao:** W chạy trong trình duyệt.

**Đối chiếu:** [G071](https://gsheets.vn/template/webapp-ung-dung-nen-anh/).

**Input/schema:** ImageFiles, MaxWidth, MaxHeight, Quality, OutputFormat, PreserveTransparency.

**Xử lý/đầu ra:** Xử lý ảnh local bằng browser canvas/codec hỗ trợ, batch, giữ tỉ lệ, preview dung lượng và ZIP kết quả. Đọc orientation đúng; nêu định dạng không hỗ trợ. Mặc định không upload ảnh lên server.

**Nghiệm thu:** Ảnh dọc EXIF không bị xoay sai; PNG trong suốt khi xuất định dạng hỗ trợ vẫn có alpha; ảnh đã nhỏ không tự phóng. File quá lớn/codec lạ trả lỗi từng ảnh.

<a id="u27"></a>

### U27 — Tra cứu thông tin theo mã số thuế

**Dạng giao:** S + provider adapter tùy quyền.

**Đối chiếu:** [G197](https://gsheets.vn/template/tim-kiem-ma-so-thue/).

**Input/schema:** TaxLookupRequests: TaxID, Country, Provider, RequestedAt; LookupResults: TaxID, EntityName, Address, Status, SourceURL, RetrievedAt, Error.

**Xử lý/đầu ra:** Trước tiên cho phép tra trên danh mục khách nhập hoặc liên kết đến cổng tra cứu chính thức. Tự động chỉ khi có API được phép dùng và tài liệu hiện hành. Không bịa endpoint, vượt captcha hay gọi dữ liệu demo là dữ liệu doanh nghiệp thật.

**Nghiệm thu:** Mã lưu dạng text, số 0 đầu giữ nguyên. Không tìm thấy khác lỗi provider. Kết quả luôn có nguồn và thời điểm; thiếu API vẫn có bản lookup từ dữ liệu người dùng.

<a id="u28"></a>

### U28 — Đồng bộ Google Calendar với Sheets

**Dạng giao:** Apps Script có Calendar scopes.

**Đối chiếu:** [G175](https://gsheets.vn/template/dong-bo-calandar-voi-google-sheets/).

**Input/schema:** CalendarConnections: CalendarID, Direction, TimeZone; EventMappings: LocalID, CalendarEventID, UpdatedAtLocal, UpdatedAtRemote, ETagOrVersion, LastSyncedAt; SyncRuns: ConnectionID, Cursor, State, Error.

**Xử lý/đầu ra:** MVP một chiều được chọn rõ, Pro hai chiều có chính sách xung đột/xóa. Lưu event ID để cập nhật thay vì tạo lại; phân biệt all-day và timed; recurring event là phạm vi nâng cao phải ghi rõ. Preview và tài khoản lịch thử.

**Nghiệm thu:** Chạy sync 2 lần không nhân đôi event. Đổi timezone không dịch ngày của all-day. Hai bên cùng sửa báo conflict hoặc áp policy đã công bố, không ghi đè ngầm.

<a id="u29"></a>

### U29 — Bảng phối màu và theme cho Sheets

**Dạng giao:** S + theme generator.

**Đối chiếu:** [G203](https://gsheets.vn/template/cach-phoi-mau-cho-google-sheets/).

**Input/schema:** ThemeTokens: Primary, Accent, Background, Text, InputFill, Warning, Success; ThemePresets: Name, TokenSet.

**Xử lý/đầu ra:** Các palette riêng, mẫu dashboard, chú giải vai trò màu, typography và số. Có kiểm tra tương phản cho chữ/charts, không dùng màu là cách duy nhất phân biệt trạng thái. Áp theme không xóa công thức/validation.

**Nghiệm thu:** Chuyển theme giữ mọi dữ liệu và rule. In grayscale vẫn phân biệt series bằng nhãn/marker. Input cell và formula cell có legend rõ.

## 13. Liên kết module và biến thể bán riêng

Codex phải tạo `DEPENDENCIES.json` từ các quan hệ sau. Dependency ở đây là package/schema tái sử dụng; cài F20 không có nghĩa khách phải mua và chạy toàn bộ giao diện F18/F30 riêng. Không tạo dependency vòng chỉ vì hai dashboard cùng đọc một master.

| Module/gói | Core cần dùng | Bản standalone phải tự có |
|---|---|---|
| F01, F31, F41, F42 | Date, User, validation, dashboard | Dữ liệu cá nhân, preset và hướng dẫn riêng |
| F02, F03 | Task, Project, membership, recurrence | Gantt/checklist/KPI theo scope, không cần toàn ERP |
| F05, F06, F22 | Contact, activity, ownership | Danh mục khách; F06 thêm xe demo, F22 thêm căn/dự án |
| F07, F17, F19, F20, F23, F30, F34, F39 | Party, Money, payment allocation, ledger | Danh mục khách/NCC/tài khoản tối thiểu; chỉ bật ledger cần dùng |
| F14, F15 | Contact, time-range availability, booking requests | Khách thuê, tài sản, hợp đồng, thanh toán, hoàn cọc |
| F10, F28 | Resource calendar, booking requests, payment | Phòng/provider, khách, lịch, thu phí; không dùng chung dữ liệu nhạy cảm |
| F12, F13, F32, F38, F46 | Employee identity, dates, approvals | Hồ sơ cần thiết theo vai trò; compensation tách quyền |
| F16, F18, F25 | Units, recipes, stock posting | Danh mục vật tư và hệ số chuyển đơn vị |
| F26 | Student/enrollment, schedule, attendance, receivable | Lớp, buổi, học sinh, học phí và quyền giáo viên |
| F24 | Các domain đã qua test và event contract | Được build sau F17/F18/F20/F30, có migration tích hợp |
| F40, F46, F47, F48, F49 | Report mapping, filters, import validation | Mỗi báo cáo có input schema và fixture riêng; không bắt khách cài app nguồn |
| F50 | F01/F31/F33/F36/F41/F42 và LifeGoals/Trip | Hub dùng chung dữ liệu cá nhân, không copy mỗi bảng nhiều lần |

### Các preset phải tách được thành SKU

- `F01-LITE`, `F01-PRO`, `F01-BILINGUAL`; `F02-TASKS`, `F02-PROJECTS`, `F02-GANTT`, `F02-KPI`.
- `F05-CRM`, `F05-CRM-REPORT`; `F08-DOCUMENTS`, `F08-DIRECTIVES`, `F08-OFFICE` kết hợp hồ sơ nhân sự tối thiểu.
- `F10-BOOKING-SHEET`, `F10-HOTEL-APP`; `F17-CASHBOOK`, `F17-BUSINESS`, `F17-STARTUP`.
- `F18-INVENTORY-REPORT`, `F18-STOCK-APP`; `F26-ATTENDANCE`, `F26-TUITION`, `F26-CLASSROOM`.
- `F21-SINGLE-FORM`, `F21-MULTI-FORM`, `F21-CROSS-FILE-FORMS`, `F21-WEB-BUILDER`.
- `F32-MANUAL-ATTENDANCE`, `F32-CLOCK-ATTENDANCE`; `F33-EXPENSE`, `F33-FINANCE`; `F37-FUNDS`.
- `F40-REVENUE`, `F40-SALES`, `F40-PIVOT`; `F46-HEADCOUNT`, `F46-MOVEMENT`.
- `F47-FACEBOOK`, `F47-MULTICHANNEL`; `F48-EXPENSE`, `F48-PNL`, `F48-CASHFLOW`.
- Mỗi Uxx có preset cho từng chức năng đã ánh xạ; số cấp dropdown, bố cục lịch và phiên bản kỹ thuật không bắt buộc là sản phẩm thương mại riêng.

Mỗi SKU phát hành dùng version riêng của Minh Templates, bắt đầu 1.0.0. Không gắn v7.1 hoặc tên thương mại nguồn vào bản mới để tạo cảm giác đó là sản phẩm của họ. `SOURCE_MAP.csv` giữ lịch sử ánh xạ; `PRODUCT_CATALOG.json` giữ SKU mới.

### Chính sách dùng lại bảng

Các trường như `CustomerID`, `PartyID`, `EmployeeID`, `FileID`, `ProjectID`, `CategoryID` phải được schema linter giải quyết thành một bảng cụ thể. Một alias không phải là foreign key hợp lệ nếu chưa khai báo target. Khi một sản phẩm chạy standalone, installer tạo bảng master tối thiểu; khi tích hợp, installer map sang bảng đã có và kiểm tra ID. Không để `Contacts` và `RepairCustomers` cùng đại diện một người mà không có mapping rõ.

### Mẫu ticket Codex cho một SKU

```text
TASK: Build <SKU> theo <FAMILY_ID/UTILITY_ID>.
INPUT: Spec mục tương ứng + nguồn đối chiếu + core dependencies + feature preset.
OUTPUT:
- schema đầy đủ có PK/FK/type/default/enum/validation;
- domain logic và input/output được kiểm thử bằng fixture;
- sheet installer và/hoặc web UI thật và/hoặc bộ cấu hình AppSheet;
- demo + clean install + customer guide + release manifest;
- tests cho các ca riêng trong spec và các ca quyền/ghi lặp cần thiết.
DONE: Local build thành công; ca tự động qua; test Google ghi riêng kết quả thật;
      blocker có tên thao tác, yêu cầu tài khoản/gói, hướng dẫn hoàn tất;
      sourceMapIds và trạng thái được cập nhật.
Không dừng ở giao diện mockup, mảng data hardcode hay nút chưa làm gì.
```

## 14. Bảng đối chiếu toàn bộ sản phẩm công khai

**Phương pháp:** mở trang chủ và danh mục công khai, đọc 2 trang shop của Tạp Hóa Sheet và 15 trang template của GSheets; thu URL/title từ từng thẻ sản phẩm, loại trùng theo URL, đọc trang chi tiết công khai. Bản thu trực tiếp có thể khác thứ tự hoặc nhãn phiên bản so với bản chỉ mục của công cụ tìm kiếm. Bảng dưới dùng dữ liệu trang thu trực tiếp trong phiên khảo sát. Không đăng nhập, mua file hay truy cập mã nguồn riêng.

**Mức chứng cứ:** “Có mô tả công khai” chỉ có nghĩa trang có nội dung giới thiệu; chưa kiểm thử tính năng. “Tên/chưa mô tả” hoặc “Mô tả ngắn” nghĩa yêu cầu chi tiết phải do dự án thiết kế và xác minh thêm trước khi tuyên bố tương đương. Tên dài được rút ngắn tối đa 22 từ để dễ tra, link giữ đúng URL đã đọc. Không ghi giá bán vào kế hoạch vì giá và khuyến mại thay đổi.

**Lưu ý theo nguồn cụ thể:** G035 có thông tin giới hạn việc thương mại hóa template gốc. Dự án chỉ dùng ý tưởng chức năng công khai và xây mới; không tải bản miễn phí đó rồi sửa để bán. Tương tự, không suy “miễn phí” là quyền bán lại cho các mục khác.

### Tạp Hóa Sheet — 20 mục

| Mã nguồn | Tên nguồn rút gọn / link chi tiết | Đích build | Mức chứng cứ |
|---|---|---|---|
| T001 | [CONTENT PLAN ĐA KÊNH – Quản lý & báo cáo nội dung đa kênh (Có tích hợp báo cáo & Lịch bài…](https://taphoasheet.store/product/content-plan-da-kenh-quan-ly-bao-cao-noi-dung-da-kenh-co-tich-hop-bao-cao-lich-bai-dang/) | [F04](#f04) | Có mô tả công khai |
| T002 | [CRM Ô TÔ PRO – Hệ Thống Theo Dõi Chăm Sóc Khách Hàng Ô TÔ](https://taphoasheet.store/product/crm-o-to-pro-he-thong-theo-doi-cham-soc-khach-hang-o-to/) | [F06](#f06) | Có mô tả công khai |
| T003 | [Google Sheet – Quản lý định lượng sản phẩm dùng cho SPA – Nail](https://taphoasheet.store/product/google-sheet-quan-ly-dinh-luong-san-pham-dung-cho-spa-nail/) | [F16](#f16) | Có mô tả công khai |
| T004 | [Google Sheet – Quản lý Hợp đồng & Theo dõi Phát sinh](https://taphoasheet.store/product/google-sheet-quan-ly-hop-dong-theo-doi-phat-sinh/) | [F07](#f07) | Có mô tả công khai |
| T005 | [Google Sheet – Quản lý văn bản đến & công việc dành cho cơ quan 1.0](https://taphoasheet.store/product/google-sheet-quan-ly-van-ban-den-cong-viec-danh-cho-co-quan-1-0/) | [F08](#f08) | Có mô tả công khai |
| T006 | [LÀM CHỦ CÔNG VIỆC – TASK TRACKER V5 PRO](https://taphoasheet.store/product/lam-chu-cong-viec-task-tracker-v5-pro/) | [F01](#f01) | Có mô tả công khai |
| T007 | [QUẢN LÝ CÔNG VIỆC & DỰ ÁN DÀNH CHO XÂY DỰNG (Tích hợp phần mềm báo cáo & lịch theo dõi)](https://taphoasheet.store/product/quan-ly-cong-viec-du-an-danh-cho-xay-dung-tich-hop-phan-mem-bao-cao-lich-theo-doi/) | [F03](#f03) | Có mô tả công khai |
| T008 | [Quản lý dự án & công việc toàn diện (Tích hợp Dashboard báo cáo & đánh giá) 2026](https://taphoasheet.store/product/quan-ly-du-an-cong-viec-toan-dien/) | [F02](#f02) | Có mô tả công khai |
| T009 | [QUẢN LÝ LỊCH CÔNG TÁC QUẢN LÝ LỊCH HỌP – CÔNG TÁC DÀNH CHO SẾP, LÃNH ĐẠO](https://taphoasheet.store/product/quan-ly-lich-cong-tac-quan-ly-lich-hop-cong-tac-danh-cho-sep-lanh-dao/) | [F09](#f09) | Có mô tả công khai |
| T010 | [Task Management Pro – Tích hợp APP quản lý & Báo cáo công việc 1.0](https://taphoasheet.store/product/task-management-pro-hon-ca-phan-mem-tich-hop-app-quan-ly-bao-cao-cong-viec-1-0/) | [F02](#f02) | Có mô tả công khai |
| T011 | [TASK TRACKER – QUẢN LÝ CÔNG VIỆC ĐỘI NHÓM VERSION 2.0](https://taphoasheet.store/product/task-tracker-quan-ly-cong-viec-doi-nhom-version-2-0/) | [F02](#f02) | Có mô tả công khai |
| T012 | [THEO DÕI Ý KIẾN CHỈ ĐẠO, CÔNG VIỆC, VĂN BẢN QUẢN LÝ VĂN BẢN / CHỈ ĐẠO](https://taphoasheet.store/product/theo-doi-y-kien-chi-dao-cong-viec/) | [F08](#f08) | Có mô tả công khai |
| T013 | [TO DO LIST – QUẢN LÝ CÔNG VIỆC CÁ NHÂN](https://taphoasheet.store/product/to-do-list-quan-ly-cong-viec-ca-nhan/) | [F01](#f01) | Có mô tả công khai |
| T014 | [WEB APP – HOMESTAY & HOTEL ALL IN ONE (Quản lý phòng, booking, khách hàng, vận hành, thu chi, dọn phòng)](https://taphoasheet.store/product/web-app-homestay-hotel-all-in-one/) | [F10](#f10) | Có mô tả công khai |
| T015 | [Web App – Quản lý chi phí / tiền mừng đám cưới thông minh & tự động](https://taphoasheet.store/product/web-app-quan-ly-chi-phi-tien-mung-dam-cuoi-thong-minh-tu-dong/) | [F11](#f11) | Có mô tả công khai |
| T016 | [WEB APP – Quản lý Công việc & KPI Đội nhóm (Tính KPI, duyệt tiến độ, công việc, có email nhắc việc…](https://taphoasheet.store/product/web-app-quan-ly-cong-viec-kpi-doi-nhom/) | [F02](#f02) | Có mô tả công khai |
| T017 | [Web app – Quản lý thông tin nhân sự & tuyển dụng (Danh sách ứng viên, lịch phỏng vấn, hồ sơ nhân…](https://taphoasheet.store/product/web-app-quan-ly-thong-tin-nhan-su-tuyen-dung-danh-sach-ung-vien-lich-phong-van-ho-so-nhan-su-sinh-nhat/) | [F12](#f12) + [F13](#f13) | Có mô tả công khai |
| T018 | [Web App – Quản lý thuê quần áo & phụ kiện thông minh, giúp quản lý thông tin khách hàng, lịch thuê…](https://taphoasheet.store/product/web-app-quan-ly-lich-thue-quan-ao/) | [F14](#f14) | Có mô tả công khai |
| T019 | [WEB APP – Quản lý văn bản đến / Đi, Công việc, Nhân sự 4.0 (Chuyên nghiệp, dễ dùng có hướng dẫn…](https://taphoasheet.store/product/web-app-quan-ly-van-ban-den-di-cong/) | [F08](#f08) + [F12](#f12) | Có mô tả công khai |
| T020 | [Web App Sheet – Quản lý lịch thuê xe máy / ô tô · Có quản lý thông tin khách hàng, chi…](https://taphoasheet.store/product/web-app-sheet-quan-ly-lich-thue-xe-may-o-to/) | [F15](#f15) | Có mô tả công khai |

### GSheets — 227 mục

| Mã nguồn | Tên nguồn rút gọn / link chi tiết | Đích build | Mức chứng cứ |
|---|---|---|---|
| G001 | [Google Sheets · Báo cáo tài chính cá nhân](https://gsheets.vn/template/bao-cao-tai-chinh-ca-nhan/) | [F33](#f33) | Mô tả ngắn |
| G002 | [Webapp · Quản lý thu chi Doanh nghiệp (v4.1 startup)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-1-startup/) | [F17](#f17) | Có mô tả công khai |
| G003 | [Webapp · Quản Lý Nhập Xuất Tồn Kho (v3.0)](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v3-0/) | [F18](#f18) | Có mô tả công khai |
| G004 | [Webapp · Quản lý công việc (v2.3)](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-3/) | [F02](#f02) | Có mô tả công khai |
| G005 | [Webapp · Quản lý Báo giá (v1.0)](https://gsheets.vn/template/webapp-quan-ly-bao-gia-v1-0/) | [F19](#f19) | Có mô tả công khai |
| G006 | [Google Sheets · Chuyển đổi vùng chọn thành Hình ảnh, PDF](https://gsheets.vn/template/extension-chuyen-doi-vung-chon-thanh-hinh-anh-pdf/) | [U02](#u02) | Có mô tả công khai |
| G007 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v2.2)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-2/) | [F21](#f21) | Có mô tả công khai |
| G008 | [Google Sheets · Dashboard Bất Động Sản (v1.0)](https://gsheets.vn/template/dashboard-bat-dong-san-v1-0/) | [F22](#f22) | Có mô tả công khai |
| G009 | [Webapp · Quản Lý Thu Chi Tiệm Sửa Xe, Hộ Kinh Doanh (v2.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-tiem-sua-xe-ho-kinh-doanh-v2-0/) | [F23](#f23) | Có mô tả công khai |
| G010 | [Webapp · Quản Trị Mini-ERP (v1.0)](https://gsheets.vn/template/webapp-quan-tri-mini-erp-v1-0/) | [F24](#f24) | Có mô tả công khai |
| G011 | [Webapp · Quản Lý Thu Chi Tiệm Sửa Xe, Hộ Kinh Doanh (v1.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-tiem-sua-xe-ho-kinh-doanh-v1-0/) | [F23](#f23) | Có mô tả công khai |
| G012 | [Webapp · Quản lý chăm sóc khách hàng (v7.1)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v7-1/) | [F05](#f05) | Có mô tả công khai |
| G013 | [Webapp · Quản lý quán Cafe, Nhà hàng, Quán ăn (v3.0)](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v3-0/) | [F25](#f25) | Có mô tả công khai |
| G014 | [Webapp · Quản Lý Lớp Học (v2.0)](https://gsheets.vn/template/webapp-quan-ly-lop-hoc-v2-0/) | [F26](#f26) | Có mô tả công khai |
| G015 | [Webapp · Quản Lý App Tập Trung (v2.0)](https://gsheets.vn/template/webapp-quan-ly-app-v2-0/) | [F27](#f27) | Có mô tả công khai |
| G016 | [Webapp · Quản Lý App Tập Trung (v1.0)](https://gsheets.vn/template/webapp-quan-ly-app-v1-0/) | [F27](#f27) | Có mô tả công khai |
| G017 | [Webapp · Quản lý thu chi Doanh nghiệp (v4.1)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-1/) | [F17](#f17) | Có mô tả công khai |
| G018 | [Webapp · Quản lý công việc (v2.2)](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-2/) | [F02](#f02) | Có mô tả công khai |
| G019 | [Webapp · Quản Lý Bán Hàng (v1.1)](https://gsheets.vn/template/webapp-quan-ly-ban-hang-v1-1/) | [F20](#f20) | Có mô tả công khai |
| G020 | [Webapp · Quản Lý Lớp Học (v1.0)](https://gsheets.vn/template/webapp-quan-ly-lop-hoc-v1-0/) | [F26](#f26) | Có mô tả công khai |
| G021 | [Webapp · Quản Lý Bán Hàng (v1.0)](https://gsheets.vn/template/webapp-quan-ly-ban-hang-v1-0/) | [F20](#f20) | Có mô tả công khai |
| G022 | [Webapp · Quản lý thu chi Doanh nghiệp (v4.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v4-0/) | [F17](#f17) | Có mô tả công khai |
| G023 | [Webapp · Quản lý thu chi Doanh nghiệp (v3.1)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v3-1/) | [F17](#f17) | Có mô tả công khai |
| G024 | [Webapp · Quản Lý Spa, Phòng khám (v1.0)](https://gsheets.vn/template/webapp-quan-ly-spa-phong-kham-v1-0/) | [F28](#f28) | Có mô tả công khai |
| G025 | [Webapp · Quay số trúng thưởng (v2.0)](https://gsheets.vn/template/webapp-quay-so-trung-thuong-v2-0/) | [F29](#f29) | Có mô tả công khai |
| G026 | [Webapp · Quản Lý Dự án, Công việc (v5.0)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v5-0/) | [F02](#f02) | Có mô tả công khai |
| G027 | [Webapp · Quản lý công việc (v2.1)](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-1/) | [F02](#f02) | Có mô tả công khai |
| G028 | [Webapp · Quản lý thu chi Doanh nghiệp (v3.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v3-0/) | [F17](#f17) | Có mô tả công khai |
| G029 | [Webapp · Quản lý công việc (v2.0)](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v2-0/) | [F02](#f02) | Có mô tả công khai |
| G030 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v2.1)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-1/) | [F21](#f21) | Có mô tả công khai |
| G031 | [Webapp · Quản lý chăm sóc khách hàng (v7.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v7-0/) | [F05](#f05) | Có mô tả công khai |
| G032 | [Webapp · Quản Lý Khách Sạn, Homestay (v1.0)](https://gsheets.vn/template/webapp-quan-ly-khach-san-homestay-v1-0/) | [F10](#f10) | Có mô tả công khai |
| G033 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v1.2)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-2/) | [F21](#f21) | Có mô tả công khai |
| G034 | [Webapp · Quay số trúng thưởng (v1.0)](https://gsheets.vn/template/webapp-quay-so-trung-thuong-v1-0/) | [F29](#f29) | Có mô tả công khai |
| G035 | [Webapp · Quản lý công việc (v1.0)](https://gsheets.vn/template/webapp-quan-ly-cong-viec-v1-0/) | [F02](#f02) | Thông tin quyền sử dụng |
| G036 | [Webapp · Quản lý chăm sóc khách hàng (v6.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v6-0/) | [F05](#f05) | Có mô tả công khai |
| G037 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v2.0)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v2-0/) | [F21](#f21) | Có mô tả công khai |
| G038 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v1.1)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-1/) | [F21](#f21) | Có mô tả công khai |
| G039 | [Webapp · Quản Lý Dự án, Công việc (v4.1)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v4-1/) | [F02](#f02) | Có mô tả công khai |
| G040 | [Webapp · Quản lý công nợ khách hàng (v1.0)](https://gsheets.vn/template/webapp-quan-ly-cong-no-khach-hang-v1-0/) | [F30](#f30) | Mô tả ngắn |
| G041 | [Webapp · Quản lý chăm sóc khách hàng (v5.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v5-0/) | [F05](#f05) | Có mô tả công khai |
| G042 | [Webapp · Quản Lý Ghi Chú (v1.0)](https://gsheets.vn/template/webapp-quan-ly-ghi-chu-v1-0/) | [F31](#f31) | Có mô tả công khai |
| G043 | [Webapp · Quản Lý Tuyển Dụng (v2.0)](https://gsheets.vn/template/webapp-quan-ly-tuyen-dung-v2-0/) | [F13](#f13) | Có mô tả công khai |
| G044 | [Webapp · Quản Lý Tài Liệu, Văn Bản (v1.0)](https://gsheets.vn/template/webapp-quan-ly-tai-lieu-van-ban-v1-0/) | [F08](#f08) | Có mô tả công khai |
| G045 | [Webapp · Quản lý chấm công (v3.0)](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v3-0/) | [F32](#f32) | Có mô tả công khai |
| G046 | [Google Sheets · Form Đặt phòng Khách sạn, Homestay (v4.0)](https://gsheets.vn/template/form-dat-phong-khach-san-homestay-v4-0/) | [F10](#f10) | Có mô tả công khai |
| G047 | [Webapp · Quản Lý Tài Chính Cá Nhân (v3.0)](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v3-0/) | [F33](#f33) | Có mô tả công khai |
| G048 | [Webapp · Quản Lý Dự án, Công việc (v4.0)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v4-0/) | [F02](#f02) | Có mô tả công khai |
| G049 | [Webapp · Quản lý quán Cafe, Nhà hàng, Quán ăn (v2.0)](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v2-0/) | [F25](#f25) | Có mô tả công khai |
| G050 | [Webapp · Hệ thống tạo Form và Phân quyền dữ liệu (v1.0)](https://gsheets.vn/template/webapp-he-thong-tao-form-va-phan-quyen-du-lieu-v1-0/) | [F21](#f21) | Có mô tả công khai |
| G051 | [Webapp · Quản Lý Nhập Xuất Tồn Kho (v2.0)](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v2-0/) | [F18](#f18) | Mô tả ngắn |
| G052 | [Webapp · Kế hoạch Ngân sách Doanh nghiệp (v2.0)](https://gsheets.vn/template/webapp-ke-hoach-ngan-sach-doanh-nghiep-v2-0/) | [F34](#f34) | Có mô tả công khai |
| G053 | [Webapp · Quản Lý Tài Chính Cá Nhân (v1.0)](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v1-0/) | [F33](#f33) | Mô tả ngắn |
| G054 | [Webapp · Kế hoạch Ngân sách Doanh nghiệp (v1.0)](https://gsheets.vn/template/webapp-ke-hoach-ngan-sach-doanh-nghiep-v1-0/) | [F34](#f34) | Có mô tả công khai |
| G055 | [Webapp · Quản lý chăm sóc khách hàng (v4.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v4-0/) | [F05](#f05) | Có mô tả công khai |
| G056 | [Webapp · Tạo bản sao Drive, Folder & Google Sheets](https://gsheets.vn/template/webapp-tao-ban-sao-drive-folder-google-sheets/) | [U25](#u25) | Mô tả ngắn |
| G057 | [Webapp · Quản Lý Nhập Xuất Tồn Kho (v1.0)](https://gsheets.vn/template/webapp-quan-ly-nhap-xuat-ton-kho-v1-0/) | [F18](#f18) | Có mô tả công khai |
| G058 | [Webapp · Quản lý chấm công (v1.0)](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v1-0/) | [F32](#f32) | Có mô tả công khai |
| G059 | [Webapp · Quản lý chấm công (v2.0)](https://gsheets.vn/template/webapp-quan-ly-cham-cong-v2-0/) | [F32](#f32) | Có mô tả công khai |
| G060 | [Webapp · Quản lý thu chi Doanh nghiệp (v2.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v2-0/) | [F17](#f17) | Có mô tả công khai |
| G061 | [Google Sheets · Quản Lý Lịch Hẹn](https://gsheets.vn/template/google-sheets-quan-ly-lich-hen-v1-0/) | [F09](#f09) | Mô tả ngắn |
| G062 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v6.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v6-0/) | [U01](#u01) | Có mô tả công khai |
| G063 | [Webapp · Quản lý chăm sóc khách hàng (v3.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v3-0/) | [F05](#f05) | Có mô tả công khai |
| G064 | [Webapp · Quản lý chăm sóc khách hàng (v2.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v2-0/) | [F05](#f05) | Có mô tả công khai |
| G065 | [Webapp · Quản lý chăm sóc khách hàng (v1.0)](https://gsheets.vn/template/webapp-quan-ly-cham-soc-khach-hang-v1-0/) | [F05](#f05) | Có mô tả công khai |
| G066 | [Webapp · Quản Lý Dự án, Công việc (v3.0)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v3-0/) | [F02](#f02) | Có mô tả công khai |
| G067 | [Google Sheets · Theo dõi dự án, công việc (v2.0)](https://gsheets.vn/template/theo-doi-du-an-cong-viec-v2-0/) | [F02](#f02) | Có mô tả công khai |
| G068 | [Webapp · Tạo Phiếu Khảo Sát Tinh Gọn Thay Thế Google Form (v1.0)](https://gsheets.vn/template/webapp-tao-phieu-khao-sat-tinh-gon-thay-the-google-form-v1-0/) | [F35](#f35) | Có mô tả công khai |
| G069 | [Webapp · Quản Lý Dự án, Công việc (v2.0)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v2-0/) | [F02](#f02) | Có mô tả công khai |
| G070 | [Webapp · Quản Lý Tuyển Dụng (v1.0)](https://gsheets.vn/template/webapp-quan-ly-tuyen-dung-v1-0/) | [F13](#f13) | Có mô tả công khai |
| G071 | [Webapp · Ứng Dụng Nén Ảnh](https://gsheets.vn/template/webapp-ung-dung-nen-anh/) | [U26](#u26) | Tên/chưa mô tả |
| G072 | [Webapp · Quản lý thu chi Doanh nghiệp (v1.0)](https://gsheets.vn/template/webapp-quan-ly-thu-chi-doanh-nghiep-v1-0/) | [F17](#f17) | Có mô tả công khai |
| G073 | [Webapp · Ứng dụng học Tiếng Anh thông minh (v1.0)](https://gsheets.vn/template/webapp-ung-dung-hoc-tieng-anh-thong-minh-v1-0/) | [F36](#f36) | Tên/chưa mô tả |
| G074 | [Webapp · Quản lý hồ sơ nhân sự (v1.0)](https://gsheets.vn/template/webapp-quan-ly-ho-so-nhan-su-v1-0/) | [F12](#f12) | Tên/chưa mô tả |
| G075 | [Google Sheets · Theo dõi công việc (v8.0)](https://gsheets.vn/template/theo-doi-cong-viec-v8-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G076 | [Google Sheets · Form Đặt phòng Khách sạn, Homestay (v3.0)](https://gsheets.vn/template/form-dat-phong-khach-san-homestay-v3-0/) | [F10](#f10) | Mô tả ngắn |
| G077 | [Webapp · Quản Lý Dự án, Công việc (v1.0)](https://gsheets.vn/template/webapp-quan-ly-du-an-cong-viec-v1-0/) | [F02](#f02) | Có mô tả công khai |
| G078 | [Webapp · Quản Lý Chi Tiêu 6 Hũ (v1.0)](https://gsheets.vn/template/webapp-quan-ly-chi-tieu-6-hu-v1-0/) | [F37](#f37) | Có mô tả công khai |
| G079 | [Webapp · Quản Lý Tài Chính Cá Nhân (v2.0)](https://gsheets.vn/template/webapp-quan-ly-tai-chinh-ca-nhan-v2-0/) | [F33](#f33) | Có mô tả công khai |
| G080 | [Webapp · Quản lý quán Cafe, Nhà hàng, Quán ăn (v1.0)](https://gsheets.vn/template/webapp-quan-ly-quan-cafe-nha-hang-quan-an-v1-0/) | [F25](#f25) | Có mô tả công khai |
| G081 | [Webapp · Quản Lý Nghỉ Phép Cho Doanh Nghiệp](https://gsheets.vn/template/webapp-quan-ly-nghi-phep-cho-doanh-nghiep/) | [F38](#f38) | Tên/chưa mô tả |
| G082 | [Webapp · Quản lý Phê Duyệt Chi Tiền Cho Doanh Nghiệp](https://gsheets.vn/template/webapp-quan-ly-phe-duyet-chi-tien-cho-doanh-nghiep/) | [F39](#f39) | Tên/chưa mô tả |
| G083 | [Webapp · Quản Lý Báo Cáo Cơ bản](https://gsheets.vn/template/webapp-quan-ly-bao-cao-co-ban/) | [F49](#f49) | Tên/chưa mô tả |
| G084 | [Google Sheets · Phân quyền nhập, sửa, xoá nhiều form (v2.0)](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v2-0/) | [F21](#f21) | Có mô tả công khai |
| G085 | [Google Sheets · Phân quyền nhập, sửa, xoá nhiều form (v1.1)](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v1-1/) | [F21](#f21) | Tên/chưa mô tả |
| G086 | [Google Sheets · Phân quyền nhập, sửa, xoá nhiều form (v1.0)](https://gsheets.vn/template/phan-quyen-nhap-sua-xoa-nhieu-form-v1-0/) | [F21](#f21) | Tên/chưa mô tả |
| G087 | [Google Sheets · Theo dõi dự án, công việc (v1.0)](https://gsheets.vn/template/theo-doi-du-an-cong-viec-v1-0/) | [F02](#f02) | Có mô tả công khai |
| G088 | [Google Sheets · Sales Dashboard](https://gsheets.vn/template/sales-dashboard/) | [F40](#f40) | Tên/chưa mô tả |
| G089 | [Google Sheets · Phân quyền nhập liệu nhiều Form từ nhiều file (v2.0)](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v2-0/) | [F21](#f21) | Tên/chưa mô tả |
| G090 | [Google Sheets · Phân quyền nhập liệu nhiều Form từ nhiều file (v1.0)](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v1-0/) | [F21](#f21) | Tên/chưa mô tả |
| G091 | [Google Sheets · Bảng theo dõi phép năm người lao động](https://gsheets.vn/template/bang-theo-doi-phep-nam-nguoi-lao-dong/) | [F38](#f38) | Tên/chưa mô tả |
| G092 | [Google Sheets · Điểm danh và quản lý lớp học (Basic)](https://gsheets.vn/template/diem-danh-va-quan-ly-lop-hoc-basic/) | [F26](#f26) | Tên/chưa mô tả |
| G093 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v5.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v5-0/) | [U01](#u01) | Mô tả ngắn |
| G094 | [Google Sheets · Theo dõi công việc (song ngữ) (7.0)](https://gsheets.vn/template/theo-doi-cong-viec-v7-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G095 | [Google Sheets · Báo cáo biến động nhân sự (v2.0)](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v2-0/) | [F46](#f46) | Tên/chưa mô tả |
| G096 | [Google Sheets · Báo cáo biến động nhân sự (v2.1)](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v2-1/) | [F46](#f46) | Tên/chưa mô tả |
| G097 | [Google Sheets · Dashboard bán hàng không dùng công thức](https://gsheets.vn/template/dashboard-ban-hang-khong-dung-cong-thuc/) | [F40](#f40) | Tên/chưa mô tả |
| G098 | [Google Sheets · Báo cáo CRM (v2.0)](https://gsheets.vn/template/bao-cao-crm-v2-0/) | [F05](#f05) | Mô tả ngắn |
| G099 | [Google Sheets · Báo cáo kết quả kinh doanh (P&L) – Basic](https://gsheets.vn/template/bao-cao-ket-qua-kinh-doanh-pl-basic/) | [F48](#f48) | Tên/chưa mô tả |
| G100 | [Google Sheets · Báo cáo dòng tiền (Cash Flow) – Basic](https://gsheets.vn/template/bao-cao-dong-tien-cash-flow-basic/) | [F48](#f48) | Tên/chưa mô tả |
| G101 | [Google Sheets · NF: Hàm tách mail, sđt, họ, tên, tên đệm, ngày](https://gsheets.vn/template/nf-ham-tach-mail-sdt-ho-ten-ten-dem-ngay/) | [U03](#u03) | Tên/chưa mô tả |
| G102 | [Google Sheets · Quản lý hồ sơ nhân sự](https://gsheets.vn/template/quan-ly-ho-so-nhan-su/) | [F12](#f12) | Tên/chưa mô tả |
| G103 | [Google Sheets · NF: Hàm bỏ dấu Tiếng Việt](https://gsheets.vn/template/0127-nf-ham-bo-dau-tieng-viet/) | [U03](#u03) | Tên/chưa mô tả |
| G104 | [Google Sheets · NF: Hàm tìm kiếm nội dung chứa từ khoá](https://gsheets.vn/template/nf-ham-tim-kiem-noi-dung-chua-tu-khoa/) | [U21](#u21) | Tên/chưa mô tả |
| G105 | [Google Sheets · Tạo ID không trùng lặp khi lựa chọn Dropdown](https://gsheets.vn/template/tao-id-khong-trung-lap-khi-lua-chon-dropdown/) | [U04](#u04) | Tên/chưa mô tả |
| G106 | [Google Sheets · NF: Tạo ngày và thứ trong tháng](https://gsheets.vn/template/tao-ngay-va-thu-trong-thang/) | [U05](#u05) | Tên/chưa mô tả |
| G107 | [Google Sheets · Báo cáo CRM (v3.0)](https://gsheets.vn/template/bao-cao-crm-v3-0/) | [F05](#f05) | Mô tả ngắn |
| G108 | [Google Sheets · NF: Hàm tải 1 sheet với nhiều định dạng](https://gsheets.vn/template/nf-ham-tai-1-sheet-voi-nhieu-dinh-dang/) | [U02](#u02) | Tên/chưa mô tả |
| G109 | [Google Sheets · NF: Hàm chuyển văn bản thành hình ảnh](https://gsheets.vn/template/nf-ham-chuyen-van-ban-thanh-hinh-anh/) | [U06](#u06) | Tên/chưa mô tả |
| G110 | [Google Sheets · NF: Hàm chuyển văn bản thành gióng nói](https://gsheets.vn/template/nf-ham-chuyen-van-ban-thanh-giong-noi/) | [U07](#u07) | Tên/chưa mô tả |
| G111 | [Google Sheets · NF: Hàm đánh số thứ tự bỏ qua bộ lọc và blank](https://gsheets.vn/template/nf-ham-danh-so-thu-tu-bo-qua-bo-loc-va-blank/) | [U08](#u08) | Tên/chưa mô tả |
| G112 | [Google Sheets · NF: Hàm đọc số thành chữ](https://gsheets.vn/template/0118-nf-ham-doc-so-thanh-chu/) | [U09](#u09) | Tên/chưa mô tả |
| G113 | [Google Sheets · Ứng dụng nhỏ học từ vựng Tiếng Anh](https://gsheets.vn/template/ung-dung-nho-hoc-tu-vung-tieng-anh/) | [F36](#f36) | Tên/chưa mô tả |
| G114 | [Google Sheets · Theo dõi công việc (v6.0)](https://gsheets.vn/template/theo-doi-cong-viec-v6-0/) | [F01](#f01) + [F02](#f02) | Có mô tả công khai |
| G115 | [Google Sheets · Theo dõi thói quen (v1.0)](https://gsheets.vn/template/theo-doi-thoi-quen-v1-0/) | [F41](#f41) | Mô tả ngắn |
| G116 | [Google Sheets · Dịch và chuyển đổi văn bản thành giọng nói nhiều ngôn ngữ](https://gsheets.vn/template/dich-va-chuyen-doi-van-ban-thanh-giong-noi-nhieu-ngon-ngu/) | [U07](#u07) | Tên/chưa mô tả |
| G117 | [Google Sheets · Báo cáo bán hàng (v1.0)](https://gsheets.vn/template/bao-cao-ban-hang-v1-0/) | [F40](#f40) | Tên/chưa mô tả |
| G118 | [Google Sheets · Báo cáo bán hàng (v1.1)](https://gsheets.vn/template/bao-cao-ban-hang-v1-1/) | [F40](#f40) | Tên/chưa mô tả |
| G119 | [Google Sheets · Theo dõi thói quen (v3.0)](https://gsheets.vn/template/theo-doi-thoi-quen-v3-0/) | [F41](#f41) | Có mô tả công khai |
| G120 | [Google Sheets · Theo dõi nhân sự cơ bản](https://gsheets.vn/template/theo-doi-nhan-su-co-ban/) | [F12](#f12) | Tên/chưa mô tả |
| G121 | [Google Sheets · Phiếu khảo sát đánh giá cho các phòng ban](https://gsheets.vn/template/phieu-khao-sat-danh-gia-cho-cac-phong-ban/) | [F35](#f35) | Tên/chưa mô tả |
| G122 | [Google Sheets · Quản lý thu chi (v2.0)](https://gsheets.vn/template/quan-ly-thu-chi-v2-0/) | [F17](#f17) | Mô tả ngắn |
| G123 | [Google Sheets · Quản lý thu chi (v2.1)](https://gsheets.vn/template/quan-ly-thu-chi-v2-1/) | [F17](#f17) | Mô tả ngắn |
| G124 | [Google Sheets · Quản lý thu chi (v1.0)](https://gsheets.vn/template/quan-ly-thu-chi-v1-0/) | [F17](#f17) | Mô tả ngắn |
| G125 | [Google Sheets · Facebook Ads Dashboard (ver02)](https://gsheets.vn/template/0105-facebook-ads-dashboard-ver02/) | [F47](#f47) | Tên/chưa mô tả |
| G126 | [Google Sheets · Mẫu báo cáo chấm công cài sẵn công thức](https://gsheets.vn/template/0104-mau-bao-cao-cham-cong-cai-san-cong-thuc/) | [F32](#f32) | Tên/chưa mô tả |
| G127 | [Google Sheets · Biểu đồ bong bóng](https://gsheets.vn/template/bieu-do-bong-bong/) | [U12](#u12) | Tên/chưa mô tả |
| G128 | [Google Sheets · Báo cáo CRM (v1.0)](https://gsheets.vn/template/bao-cao-crm-v1-0/) | [F05](#f05) | Mô tả ngắn |
| G129 | [Google Sheets · Quy trình bán hàng](https://gsheets.vn/template/quy-trinh-ban-hang/) | [F05](#f05) | Tên/chưa mô tả |
| G130 | [Google Sheets · Thời khoá biểu (v1.0)](https://gsheets.vn/template/thoi-khoa-bieu-v1-0/) | [F42](#f42) | Mô tả ngắn |
| G131 | [Google Sheets · To do list](https://gsheets.vn/template/to-do-list/) | [F01](#f01) | Tên/chưa mô tả |
| G132 | [Google Sheets · Tổng hợp xe qua cửa khẩu](https://gsheets.vn/template/tong-hop-xe-qua-cua-khau/) | [F43](#f43) | Tên/chưa mô tả |
| G133 | [Google Sheets · Tìm ngày đầu tuần và cuối tuần trong tháng](https://gsheets.vn/template/tim-ngay-dau-tuan-va-cuoi-tuan-trong-thang/) | [U05](#u05) | Tên/chưa mô tả |
| G134 | [Google Sheets · Tạo ID ngẫu nhiên không trùng lặp](https://gsheets.vn/template/tao-id-ngau-nhien-khong-trung-lap/) | [U04](#u04) | Tên/chưa mô tả |
| G135 | [Google Sheets · Tạo lịch 12 tháng chỉ với 1 công thức](https://gsheets.vn/template/tao-lich-12-thang-chi-voi-1-cong-thuc/) | [U05](#u05) | Tên/chưa mô tả |
| G136 | [Google Sheets · Tạo lịch 12 tháng theo chiều ngang](https://gsheets.vn/template/tao-lich-12-thang-theo-chieu-ngang/) | [U05](#u05) | Tên/chưa mô tả |
| G137 | [Google Sheets · Check sim số đẹp 4 số cuối](https://gsheets.vn/template/check-sim-so-dep-4-so-cuoi/) | [U10](#u10) | Tên/chưa mô tả |
| G138 | [Google Sheets · Trộn thư bằng công thức Google Sheets](https://gsheets.vn/template/tron-thu-bang-cong-thuc-google-sheets/) | [U11](#u11) | Tên/chưa mô tả |
| G139 | [Google Sheets · Tách phường, quận, tỉnh/thành phố](https://gsheets.vn/template/tach-phuong-quan-tinh-thanh-pho/) | [U03](#u03) | Tên/chưa mô tả |
| G140 | [Google Sheets · Dùng ký tự đặc biệt để vẽ biểu đồ](https://gsheets.vn/template/dung-ky-tu-dac-biet-de-ve-bieu-do/) | [U12](#u12) | Tên/chưa mô tả |
| G141 | [Google Sheets · Lọc từ khoá](https://gsheets.vn/template/loc-tu-khoa/) | [U21](#u21) | Tên/chưa mô tả |
| G142 | [Google Sheets · Đọc số thành chữ nhiều ngôn ngữ](https://gsheets.vn/template/doc-so-thanh-chu-nhieu-ngon-ngu/) | [U09](#u09) | Tên/chưa mô tả |
| G143 | [Google Sheets · Tính tổng chỉ tiêu theo chiều ngang](https://gsheets.vn/template/tinh-tong-chi-tieu-theo-chieu-ngang/) | [U13](#u13) | Tên/chưa mô tả |
| G144 | [Google Sheets · Phân bổ khấu hao tài sản đường thẳng](https://gsheets.vn/template/phan-bo-khau-hao-tai-san-duong-thang/) | [F44](#f44) | Tên/chưa mô tả |
| G145 | [Google Sheets · Đảo ký tự với char(8238)](https://gsheets.vn/template/dao-ky-tu-voi-char8238/) | [U15](#u15) | Tên/chưa mô tả |
| G146 | [Google Sheets · Tổng hợp dữ liệu từ nhiều file, nhiều sheet khác nhau](https://gsheets.vn/template/tong-hop-du-lieu-tu-nhieu-file-nhieu-sheet-khac-nhau/) | [U01](#u01) | Tên/chưa mô tả |
| G147 | [Google Sheets · Hiển thị hình ảnh lưu trong drive](https://gsheets.vn/template/hien-thi-hinh-anh-luu-trong-drive/) | [U16](#u16) | Tên/chưa mô tả |
| G148 | [Google Sheets · Gửi Mail Cá Nhân Hoá Bằng Công Thức (v2.0)](https://gsheets.vn/template/gui-mail-ca-nhan-hoa-v2-0/) | [U11](#u11) | Tên/chưa mô tả |
| G149 | [Google Sheets · Phân nhóm ngẫu nhiên và không ngẫu nhiên](https://gsheets.vn/template/phan-nhom-ngau-nhien-va-khong-ngau-nhien/) | [U17](#u17) | Tên/chưa mô tả |
| G150 | [Google Sheets · Tách họ và tên với Regex](https://gsheets.vn/template/tach-ho-va-ten-voi-regex/) | [U03](#u03) | Tên/chưa mô tả |
| G151 | [Google Sheets · Pivot nhiều giá trị chuỗi](https://gsheets.vn/template/pivot-nhieu-gia-tri-chuoi/) | [U14](#u14) | Tên/chưa mô tả |
| G152 | [Google Sheets · Unpivot](https://gsheets.vn/template/unpivot/) | [U14](#u14) | Tên/chưa mô tả |
| G153 | [Google Sheets · Cộng dồn nhiều điều kiện](https://gsheets.vn/template/cong-don-nhieu-dieu-kien/) | [U13](#u13) | Tên/chưa mô tả |
| G154 | [Google Sheets · Tìm dòng cuối chứa dữ liệu](https://gsheets.vn/template/tim-dong-cuoi-chua-du-lieu/) | [U22](#u22) | Tên/chưa mô tả |
| G155 | [Google Sheets · Rút gọn họ và tên](https://gsheets.vn/template/rut-gon-ho-va-ten/) | [U03](#u03) | Tên/chưa mô tả |
| G156 | [Google Sheets · Làm sạch số điện thoại](https://gsheets.vn/template/lam-sach-so-dien-thoai/) | [U03](#u03) | Tên/chưa mô tả |
| G157 | [Google Sheets · Tổng hợp các sắc thái đánh số thứ tự](https://gsheets.vn/template/tong-hop-cac-sac-thai-danh-so-thu-tu/) | [U08](#u08) | Tên/chưa mô tả |
| G158 | [Google Sheets · Loại bỏ dấu câu](https://gsheets.vn/template/loai-bo-dau-cau/) | [U03](#u03) | Tên/chưa mô tả |
| G159 | [Google Sheets · Lấp đầy dữ liệu](https://gsheets.vn/template/lap-day-du-lieu/) | [U22](#u22) | Tên/chưa mô tả |
| G160 | [Google Sheets · Dịch song song tất cả các ngôn ngữ trên thế giới](https://gsheets.vn/template/dich-song-song-tat-ca-cac-ngon-ngu-tren-the-gioi/) | [U07](#u07) | Tên/chưa mô tả |
| G161 | [Google Sheets · Tạo next page bằng hàm query kết hợp Hyperlink](https://gsheets.vn/template/tao-next-page-bang-ham-query-ket-hop-hyperlink/) | [U21](#u21) | Tên/chưa mô tả |
| G162 | [Google Sheets · Importrange lấy theo Tên tiêu đề cột](https://gsheets.vn/template/importrange-lay-theo-ten-tieu-de-cot/) | [U01](#u01) | Tên/chưa mô tả |
| G163 | [Google Sheets · Tạo list phụ thuộc nhiều cấp độ không dùng code](https://gsheets.vn/template/tao-list-phu-thuoc-nhieu-cap-do-khong-dung-code/) | [U18](#u18) | Tên/chưa mô tả |
| G164 | [Google Sheets · Đọc số thành chữ](https://gsheets.vn/template/doc-so-thanh-chu/) | [U09](#u09) | Tên/chưa mô tả |
| G165 | [Google Sheets · Tổng hợp dữ liệu từ nhiều Sheet về một Sheet](https://gsheets.vn/template/tong-hop-du-lieu-tu-nhieu-sheet-ve-mot-sheet/) | [U01](#u01) | Tên/chưa mô tả |
| G166 | [Google Sheets · Quản lý phân quyền file tập trung](https://gsheets.vn/template/quan-ly-phan-quyen-file-tap-trung/) | [U19](#u19) | Tên/chưa mô tả |
| G167 | [Google Sheets · Điểm danh học sinh (v2.0)](https://gsheets.vn/template/diem-danh-hoc-sinh-v2-0/) | [F26](#f26) | Tên/chưa mô tả |
| G168 | [Google Sheets · Backup data nhiều file](https://gsheets.vn/template/backup-data-nhieu-file/) | [U20](#u20) | Tên/chưa mô tả |
| G169 | [Google Sheets · Theo dõi công việc (v2.0)](https://gsheets.vn/template/theo-doi-cong-viec-v2-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G170 | [Google Sheets · Tìm kiếm nhà bán bất động sản](https://gsheets.vn/template/tim-kiem-nha-ban-bat-dong-san/) | [F22](#f22) | Tên/chưa mô tả |
| G171 | [Google Sheets · Phân quyền nhập liệu nhiều Form từ nhiều file (v1.1)](https://gsheets.vn/template/phan-quyen-nhap-lieu-nhieu-form-tu-nhieu-file-v1-1/) | [F21](#f21) | Mô tả ngắn |
| G172 | [Google Sheets · Bảng chấm công (v3.0)](https://gsheets.vn/template/bang-cham-cong-v3-0/) | [F32](#f32) | Có mô tả công khai |
| G173 | [Google Sheets · Theo dõi công việc (v4.0)](https://gsheets.vn/template/theo-doi-cong-viec-v4-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G174 | [Google Sheets · Theo dõi ăn trưa công sở](https://gsheets.vn/template/theo-doi-an-trua-cong-so/) | [F45](#f45) | Tên/chưa mô tả |
| G175 | [Google Sheets · Đồng bộ calandar với Google Sheets](https://gsheets.vn/template/dong-bo-calandar-voi-google-sheets/) | [U28](#u28) | Tên/chưa mô tả |
| G176 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v2.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v2-0/) | [U01](#u01) | Mô tả ngắn |
| G177 | [Google Sheets · Điểm danh học sinh (v1.0)](https://gsheets.vn/template/diem-danh-hoc-sinh-v1-0/) | [F26](#f26) | Tên/chưa mô tả |
| G178 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v1.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v1-0/) | [U01](#u01) | Mô tả ngắn |
| G179 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v3.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v3-0/) | [U01](#u01) | Mô tả ngắn |
| G180 | [Google Sheets · Lọc số sim](https://gsheets.vn/template/loc-so-sim/) | [U10](#u10) | Tên/chưa mô tả |
| G181 | [Google Sheets · Báo cáo Nhập Xuất Tồn (v3.0)](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v3-0/) | [F18](#f18) | Mô tả ngắn |
| G182 | [Google Sheets · Báo cáo Nhập Xuất Tồn (v1.0)](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v1-0/) | [F18](#f18) | Mô tả ngắn |
| G183 | [Google Sheets · Bảng chấm công (v2.0)](https://gsheets.vn/template/bang-cham-cong-v2-0/) | [F32](#f32) | Có mô tả công khai |
| G184 | [Google Sheets · Báo cáo doanh thu (v2.0)](https://gsheets.vn/template/bao-cao-doanh-thu-v2-0/) | [F40](#f40) | Mô tả ngắn |
| G185 | [Google Sheets · Bảng chấm công (v1.0)](https://gsheets.vn/template/bang-cham-cong-v1-0/) | [F32](#f32) | Có mô tả công khai |
| G186 | [Google Sheets · Quy trình tuyển dụng giản đơn](https://gsheets.vn/template/quy-trinh-tuyen-dung-gian-don/) | [F13](#f13) | Tên/chưa mô tả |
| G187 | [Google Sheets · Quản lý chi tiêu 6 hũ (v1.0)](https://gsheets.vn/template/quan-ly-chi-tieu-6-hu-v1-0/) | [F37](#f37) | Mô tả ngắn |
| G188 | [Google Sheets · Quản lý chi tiêu 6 hũ (v2.0)](https://gsheets.vn/template/quan-ly-chi-tieu-6-hu-v2-0/) | [F37](#f37) | Mô tả ngắn |
| G189 | [Google Sheets · Theo dõi thói quen (v2.0)](https://gsheets.vn/template/theo-doi-thoi-quen-v2-0/) | [F41](#f41) | Mô tả ngắn |
| G190 | [Google Sheets · Ghi chú thời gian biểu](https://gsheets.vn/template/ghi-chu-thoi-gian-bieu/) | [F31](#f31) | Tên/chưa mô tả |
| G191 | [Google Sheets · Thời khoá biểu (v2.0)](https://gsheets.vn/template/thoi-khoa-bieu-v2-0/) | [F42](#f42) | Mô tả ngắn |
| G192 | [Google Sheets · Gửi Mail Cá Nhân Hoá Bằng Công Thức (v1.0)](https://gsheets.vn/template/gui-mail-ca-nhan-hoa-v1-0/) | [U11](#u11) | Tên/chưa mô tả |
| G193 | [Google Sheets · Tạo card visit](https://gsheets.vn/template/tao-card-visit/) | [U06](#u06) | Tên/chưa mô tả |
| G194 | [Google Sheets · Phiếu tính giá, check căn (v2.0)](https://gsheets.vn/template/phieu-tinh-gia-v2-0/) | [F22](#f22) | Tên/chưa mô tả |
| G195 | [Google Sheets · Theo dõi công việc (v1.0)](https://gsheets.vn/template/theo-doi-cong-viec-v1-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G196 | [Google Sheets · Phiếu tính giá, check căn (v1.0)](https://gsheets.vn/template/phieu-tinh-gia-v1-0/) | [F22](#f22) | Tên/chưa mô tả |
| G197 | [Google Sheets · Tìm kiếm mã số thuế](https://gsheets.vn/template/tim-kiem-ma-so-thue/) | [U27](#u27) | Tên/chưa mô tả |
| G198 | [Google Sheets · Form nhập liệu](https://gsheets.vn/template/form-nhap-lieu/) | [F21](#f21) | Tên/chưa mô tả |
| G199 | [Google Sheets · Theo dõi công việc (v3.0)](https://gsheets.vn/template/theo-doi-cong-viec-v3-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G200 | [Google Sheets · Sơ đồ Gantt (v1.0)](https://gsheets.vn/template/so-do-gantt-v1-0/) | [F02](#f02) | Mô tả ngắn |
| G201 | [Google Sheets · Báo cáo biến động nhân sự (v1.0)](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v1-0/) | [F46](#f46) | Tên/chưa mô tả |
| G202 | [Google Sheets · Quản Lý Tuyển Dụng](https://gsheets.vn/template/quan-ly-tuyen-dung-v1-0/) | [F13](#f13) | Mô tả ngắn |
| G203 | [Google Sheets · Cách phối màu cho Google Sheets](https://gsheets.vn/template/cach-phoi-mau-cho-google-sheets/) | [U29](#u29) | Tên/chưa mô tả |
| G204 | [Google Sheets · Hàm Query và Importrange – Hàm truy vấn dữ liệu top 1](https://gsheets.vn/template/ham-query-va-importrange-ham-truy-van-du-lieu-top-1/) | [U21](#u21) | Tên/chưa mô tả |
| G205 | [Google Sheets · Tài nguyên hàm Regex – Hàm xử lý dữ liệu mạnh nhất](https://gsheets.vn/template/tai-nguyen-ham-regex-ham-xu-ly-du-lieu-manh-nhat/) | [U03](#u03) | Tên/chưa mô tả |
| G206 | [Google Sheets · Đổi lịch âm sang dương (code)](https://gsheets.vn/template/doi-lich-am-sang-duong-code/) | [U23](#u23) | Tên/chưa mô tả |
| G207 | [Google Sheets · Đóng băng các hàm không cố định](https://gsheets.vn/template/dong-bang-cac-ham-khong-co-dinh/) | [U24](#u24) | Tên/chưa mô tả |
| G208 | [Google Sheets · Tìm giá trị trả về tiêu đề tương ứng](https://gsheets.vn/template/tim-gia-tri-tra-ve-tieu-de-tuong-ung/) | [U13](#u13) | Tên/chưa mô tả |
| G209 | [Google Sheets · Khoá dữ liệu loại trừ (code)](https://gsheets.vn/template/khoa-du-lieu-loai-tru-code/) | [U19](#u19) | Tên/chưa mô tả |
| G210 | [Google Sheets · Cách tải 1 sheet từ Google Sheets](https://gsheets.vn/template/cach-tai-1-sheet-tu-google-sheets/) | [U02](#u02) | Tên/chưa mô tả |
| G211 | [Google Sheets · Tạo bản sao nhiều thư mục Driver](https://gsheets.vn/template/tao-ban-sao-nhieu-thu-muc-driver/) | [U25](#u25) | Tên/chưa mô tả |
| G212 | [Google Sheets · Báo cáo chi phí](https://gsheets.vn/template/bao-cao-chi-phi/) | [F48](#f48) | Tên/chưa mô tả |
| G213 | [Google Sheets · Báo cáo biến động nhân sự (v1.1)](https://gsheets.vn/template/bao-cao-bien-dong-nhan-su-v1-1/) | [F46](#f46) | Tên/chưa mô tả |
| G214 | [Google Sheets · Báo cáo doanh thu (v1.0)](https://gsheets.vn/template/bao-cao-doanh-thu-v1-0/) | [F40](#f40) | Mô tả ngắn |
| G215 | [Google Sheets · Báo cáo doanh thu (v4.0)](https://gsheets.vn/template/bao-cao-doanh-thu-v4-0/) | [F40](#f40) | Mô tả ngắn |
| G216 | [Google Sheets · Theo dõi công việc (v5.0)](https://gsheets.vn/template/theo-doi-cong-viec-v5-0/) | [F01](#f01) + [F02](#f02) | Mô tả ngắn |
| G217 | [Google Sheets · Báo cáo Nhập Xuất Tồn (v2.0)](https://gsheets.vn/template/bao-cao-nhap-xuat-ton-v2-0/) | [F18](#f18) | Mô tả ngắn |
| G218 | [Google Sheets · Tính ngày kết thúc phí trung tâm tiếng anh](https://gsheets.vn/template/tinh-ngay-ket-thuc-phi-trung-tam-tieng-anh/) | [F26](#f26) | Tên/chưa mô tả |
| G219 | [Google Sheets · Quản lý chi tiêu cơ bản](https://gsheets.vn/template/quan-ly-chi-tieu-co-ban/) | [F33](#f33) | Tên/chưa mô tả |
| G220 | [Google Sheets · Báo cáo chạy quảng cáo](https://gsheets.vn/template/bao-cao-chay-quang-cao/) | [F47](#f47) | Tên/chưa mô tả |
| G221 | [Google Sheets · Dropdown phụ thuộc 4 level (code)](https://gsheets.vn/template/dropdown-phu-thuoc-4-level-code/) | [U18](#u18) | Tên/chưa mô tả |
| G222 | [Google Sheets · Dropdown phụ thuộc 3 level (code)](https://gsheets.vn/template/dropdown-phu-thuoc-3-level-code/) | [U18](#u18) | Tên/chưa mô tả |
| G223 | [Google Sheets · Dropdown phụ thuộc 2 level (code)](https://gsheets.vn/template/dropdown-phu-thuoc-2-level-code/) | [U18](#u18) | Tên/chưa mô tả |
| G224 | [Google Sheets · Import Data nhiều FILE tốc độ siêu nhanh (v4.0)](https://gsheets.vn/template/import-data-nhieu-file-toc-do-sieu-nhanh-v4-0/) | [U01](#u01) | Mô tả ngắn |
| G225 | [Google Sheets · Báo cáo công nợ](https://gsheets.vn/template/bao-cao-cong-no/) | [F30](#f30) | Mô tả ngắn |
| G226 | [Google Sheets · Sơ đồ Gantt (v2.0)](https://gsheets.vn/template/so-do-gantt-v2-0/) | [F02](#f02) | Mô tả ngắn |
| G227 | [Google Sheets · Báo cáo doanh thu (v3.0)](https://gsheets.vn/template/bao-cao-doanh-thu-v3-0/) | [F40](#f40) | Mô tả ngắn |

### Mục bổ sung ngoài danh mục shop

| Mã | Tham khảo | Đích | Giới hạn khảo sát |
|---|---|---|---|
| X001 | [Bài giới thiệu Notion Life Planner](https://taphoasheet.store/tang-mien-phi-template-notion-life-planner-2025/) | [F50](#f50) | Đã đọc bài giới thiệu 6 nhóm nhu cầu; chưa kiểm kê các trang bên trong bản Notion |

F50 là bộ Sheets/app thiết kế mới cho các nhóm nhu cầu nêu trong bài, và tùy chọn backlog cho Notion thật. Không tính X001 vào 247 URL của shop. Không gọi F50 là bản đầy đủ của các trang Notion bên trong khi chưa có kiểm kê.

## 15. Checklist cuối cho Codex trước khi công bố hoàn tất

- [ ] `SOURCE_MAP.csv` có đủ 247 ID T/G duy nhất và X001 được ghi loại riêng.
- [ ] Mọi ID nguồn có ít nhất một family/utility hợp lệ; không có hàng `TODO mapping`.
- [ ] 50 đặc tả F01–F50 và 29 đặc tả U01–U29 được chuyển thành catalog có trạng thái.
- [ ] SKU/preset có tính năng, schema, dependency, cấu hình và output format rõ.
- [ ] Mỗi phép biến đổi trong Uxx có implementation/test; không chỉ tạo một README cho cả nhóm.
- [ ] Mọi công thức/KPI có định nghĩa và fixture expected độc lập.
- [ ] AppSheet JSON/CSV được gắn nhãn cấu hình nội bộ, app thật có evidence cài đặt riêng.
- [ ] Template mới có bản sạch, bản demo, hướng dẫn cài, nâng cấp, khôi phục và gói khách hàng.
- [ ] Bản dùng nhiều người qua test danh tính/quyền, request trùng và xung đột.
- [ ] Các thao tác chưa có tài khoản/quyền được ghi `blocked_external_setup`, không bịa kết quả.
- [ ] Tên, hình ảnh và nội dung bán hàng do dự án tạo; kiểm tra quyền các dependency/asset dùng lại.
- [ ] Link demo/copy/download/deployment thật đã mở thử bằng tài khoản khách thử nghiệm.
- [ ] Gói bán ghi rõ phạm vi tính năng và chi phí nền tảng, không gắn lời hứa ngoài chứng cứ.

### Prompt kiểm tra độ bao phủ cuối dự án

```text
So sánh SOURCE_MAP.csv, PRODUCT_CATALOG.json, releases và tài liệu nguồn.
Xuất COVERAGE_REPORT.md với từng ID nguồn, family, SKU, tính năng đã có,
tính năng công khai còn thiếu, trạng thái test và đường dẫn chứng cứ.
Tách 3 tỷ lệ: mapping coverage, implementation coverage và verified coverage.
Không dùng mapping coverage 100% để nói 100% sản phẩm đã chạy hoặc bán được.
Sửa các thiếu sót có thể xử lý trong phạm vi đã được yêu cầu; giữ checkpoint
cho phần cần tài khoản bên ngoài. Ưu tiên hoàn thành sản phẩm đang dang dở.
```

### Định nghĩa trạng thái của chính tài liệu này

Tài liệu hiện tại hoàn thành ở mức **đặc tả và đối chiếu danh mục**. Việc có đủ 247 mapping không chứng minh code, file Google Sheets, website bán hàng hoặc AppSheet đã được xây dựng. Dùng các prompt ở mục 1 để bắt đầu tạo và kiểm thử sản phẩm, rồi theo dõi tiến độ bằng các trạng thái ở mục 9.
