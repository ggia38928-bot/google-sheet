# Bộ triển khai thương mại bằng Codex

Ngày: 07/09/2026. Dùng cùng `baseline/BUILD_ALL_TEMPLATES_CODEX.md`. Bộ này bổ sung prompt thực thi, công thức cụ thể, kiến trúc CRM/ERP, dự toán và mã tham chiếu có test. Không thay đổi phạm vi danh mục đã khảo sát.

## 1. Bắt đầu bằng một đường đi rõ ràng

1. Giải nén gói, mở cả thư mục `CODEX_COMMERCIAL_KIT` trong Codex.
2. Dán nội dung `START_PROMPT.txt`. Đích mặc định là F01-SHEET; Codex làm một sản phẩm có thể dùng trước, lưu checkpoint rồi mới mở rộng.
3. Sau khi F01 qua kiểm thử, dùng các prompt theo ma trận ở phần dưới. Không cần dán tất cả prompt cùng lúc.
4. Mọi prompt phải tạo/sửa file, chạy phần kiểm tra có thể chạy và ghi evidence. Bước cần đăng nhập/cấp quyền Google được ghi đích danh, có hướng dẫn hoàn tất; không được biến thành dấu ✓ giả.
5. Với CRM/ERP, chọn một biến thể WEB hoặc APPSHEET để hoàn thành trước. Khi chuyển biến thể, tái dùng domain/schema/fixture, nhưng triển khai và nghiệm thu UI/auth riêng.

**Kết quả phải phân biệt:** template đã tạo bằng script; file Google Sheets đã cài thật; Web App đã triển khai; AppSheet đã cấu hình; sản phẩm đã nghiệm thu; sản phẩm đã được người bán cho phép phát hành. Các trạng thái này không tự suy ra nhau.

Hướng dẫn chính thức của OpenAI khuyến khích cung cấp tình huống tái hiện và yêu cầu chạy lại kiểm tra khi sửa lỗi. Các prompt trong bộ này áp dụng cách đó và ghi đầu ra bằng file. [Hướng dẫn prompting](https://learn.chatgpt.com/docs/prompting).

## 2. Hợp đồng thực thi cho mọi prompt

Các biến mặc định được lưu trong `PROJECT_CONFIG.json` do P00 tạo: `brand=Minh Templates`, `locale=vi-VN`, `timeZone=Asia/Ho_Chi_Minh`, `currency=VND`, `sku=F01-SHEET`, `deploymentMode=customer-owned`, `productionPublish=false`.

Một lần làm việc phải có chuỗi **đọc yêu cầu → sửa code/file → chạy kiểm tra → kiểm tra kết quả → sửa lỗi liên quan → ghi checkpoint**. Không kết thúc chỉ bằng mô tả kiến trúc nếu phần được yêu cầu có thể thực hiện.

| File điều khiển dự án | Bắt buộc chứa |
|---|---|
| `PRODUCT_CATALOG.json` | 79 nhóm F/U, SKU/preset, platform, dependency, trạng thái |
| `SOURCE_MAP.csv` | 247 mục shop, URL, đích; X001 ngoài shop có loại riêng |
| `PROGRESS.md` | SKU đang làm, bước cuối đã qua, bước tiếp, file/code liên quan |
| `BLOCKERS.md` | Lỗi thực tế hoặc quyền còn thiếu, phần độc lập vẫn làm được |
| `DECISIONS.md` | Quy tắc tiền, thuế nhập tay, tồn, concurrency, ownership, auth |
| `FORMULA_CONTRACTS.json` | Tab/cột/range/formula/expected/dependency/locale |
| `TEST_REPORT.md` | Test ID, môi trường, build hash, expected/actual, evidence |
| `RELEASE_REPORT.md` | GO/NO-GO theo từng biến thể và lý do |

Không chỉnh test expected để khớp code sai, không bỏ test đang fail để có màu xanh, không dùng `try/catch` nuốt lỗi rồi trả thành công. Không tự thêm module ngoài SKU hiện tại để trì hoãn hoàn thành. Các field/method được gọi phải có implementation thật hoặc blocker cụ thể.

## 3. Ma trận prompt theo mục tiêu

| Mục tiêu | Trình tự prompt |
|---|---|
| Bắt đầu dự án | P00 → P01 → P02 → P03 → P04 → P05 |
| Google Sheets hoàn chỉnh | P06 → P07 → P08 → P09 → P21 → P22 → P32 → P33 |
| CRM Web App | P10 → P11 → P12 → P19 → P20 → P21 → P23 → P25 → P31 → P32 → P33 |
| CRM AppSheet | P10 → P13 → P14 → P15 → P19 → P24 → P25 → P31 → P32 → P33 |
| ERP Web App | P16 → P17 → P19 → P20 → P21 → P23 → P25 → P31 → P32 → P33 |
| ERP AppSheet | P16 → P13 → P18 → P15 → P19 → P24 → P25 → P31 → P32 → P33 |
| Có lỗi | P26 để tái hiện → P27/P28/P29/P30 theo lỗi → chạy lại gate bị ảnh hưởng |
| Phát hành | P33 đạt GO → P34 theo phiên bản và đích được người bán cho phép |
| Tiếp tục phiên mới / mở rộng danh mục | P35 |

P00/P01/P04/P05 và hợp đồng thực thi luôn áp dụng khi đổi SKU. Khi dependency đã qua kiểm tra và chưa đổi, tái sử dụng evidence phù hợp; không chạy lại toàn danh mục sau một thay đổi giao diện nhỏ.

## 4. Đầu ra Google Sheets phải có công thức thật

Tối thiểu: `START_HERE`, `DASHBOARD`, bảng nhập liệu, `LISTS`, `SETTINGS`, validation, conditional formatting, freeze header, protection vùng công thức, demo, bản sạch và installer. Phần tính toán người dùng cần kiểm toán phải nằm trong formula hoặc ledger/rule có giải thích; không thay toàn bộ bằng giá trị hardcode.

### Bộ công thức chuẩn để Codex triển khai

Ví dụ dưới dùng cú pháp hàm tiếng Anh, dấu phẩy. File thử tự động hiện có đặt locale `en_US` để kiểm tra ổn định; bản bán `vi-VN` phải được P22 chạy thêm trên locale thật. Cột mã/điện thoại lưu Text; ngày là Date; phần trăm 0–1; tiền VND là số nguyên. Khi thay thứ tự cột, generator phải cập nhật công thức theo schema.

**TASKS:** A=ID, B=Title, C=OwnerEmail, D=DueDate, E=Status, F=CompletedAt, G=Progress. `SETTINGS!B2` là ngày báo cáo cố định hoặc ngày người dùng chọn.

| Chỉ số | Công thức mẫu |
|---|---|
| Việc mở | `=COUNTIFS(TASKS!A2:A10001,"<>",TASKS!E2:E10001,"<>DONE",TASKS!E2:E10001,"<>CANCELLED")` |
| Quá hạn | `=COUNTIFS(TASKS!A2:A10001,"<>",TASKS!D2:D10001,">0",TASKS!D2:D10001,"<"&SETTINGS!B2,TASKS!E2:E10001,"<>DONE",TASKS!E2:E10001,"<>CANCELLED")` |
| Hoàn thành | `=IFERROR(COUNTIF(TASKS!E2:E10001,"DONE")/COUNTIFS(TASKS!A2:A10001,"<>",TASKS!E2:E10001,"<>CANCELLED"),0)` |

Status phải Required và chỉ nhận enum hợp lệ. Không tính bản ghi hủy vào mẫu số. Không dùng NOW làm timestamp hoàn tất lịch sử; timestamp là giá trị được ghi khi chuyển trạng thái.

**CASH:** A=ID, B=Date, C=Type, D=FromAccount, E=ToAccount, F=Amount, G=State. `ACCOUNTS!A2` là mã tài khoản, B2 là đầu kỳ. Quy ước RECEIVE: chỉ có To; PAY: chỉ có From; TRANSFER: có cả hai. Chỉ POSTED được tính.

```excel
=B2+SUMIFS(CASH!F$2:F$10001,CASH!E$2:E$10001,A2,CASH!G$2:G$10001,"POSTED")-SUMIFS(CASH!F$2:F$10001,CASH!D$2:D$10001,A2,CASH!G$2:G$10001,"POSTED")
```

Ví dụ này tính toàn kỳ chứa trong nguồn. Muốn tính “đến ngày” phải thêm Date<=AsOf cho cả hai SUMIFS và ghi rõ ngày của OpeningBalance; không trộn số đầu kỳ với giao dịch trước đầu kỳ. Chuyển nội bộ không ghi thành doanh thu hoặc chi phí.

**ORDER_LINES:** A=ID, B=OrderID, C=ProductID, D=Qty, E=UnitPrice, F=DiscountRate, G=TaxRate, H=Gross, I=Discount, J=Taxable, K=Tax, L=Total.

```excel
H2 = ROUND(D2*E2,0)
I2 = ROUND(H2*F2,0)
J2 = H2-I2
K2 = ROUND(J2*G2,0)
L2 = J2+K2
```

Đây là một quy tắc làm tròn theo dòng được chọn cho dự án; phải đồng nhất giữa Sheets, JavaScript và AppSheet. Chiết khấu theo đơn cần quy tắc phân bổ riêng để không giảm hai lần. Thuế suất do người sử dụng nhập sau khi xác định cách áp dụng phù hợp; ví dụ số học không phải cấu hình pháp lý.

**CRM:** `DEALS` A=ID, B=Stage, C=ExpectedValue, D=Probability, E=OwnerEmail. Không dùng cả deal mở làm mẫu số win rate.

```excel
=IFERROR(COUNTIF(DEALS!B2:B10001,"WON")/(COUNTIF(DEALS!B2:B10001,"WON")+COUNTIF(DEALS!B2:B10001,"LOST")),0)
=SUMPRODUCT(DEALS!C2:C10001,DEALS!D2:D10001,--(DEALS!B2:B10001<>"WON"),--(DEALS!B2:B10001<>"LOST"))
```

Xác suất phải là số hợp lệ 0–1 và cột giá trị phải là số; hiển thị “chưa có deal đóng” khi mẫu số 0, ngay cả khi ô kỹ thuật chứa 0.

**NỢ:** `INVOICES` A=ID, B=Amount; `ALLOCATIONS` A=PaymentID, B=InvoiceID, C=Amount, D=State; `CREDITS` A=ID, B=InvoiceID, C=Amount, D=State.

```excel
=B2-SUMIFS(ALLOCATIONS!C$2:C$10001,ALLOCATIONS!B$2:B$10001,A2,ALLOCATIONS!D$2:D$10001,"POSTED")-SUMIFS(CREDITS!C$2:C$10001,CREDITS!B$2:B$10001,A2,CREDITS!D$2:D$10001,"POSTED")
```

Không dùng MAX(0,...) để che một khoản phân bổ vượt nợ. Backend phải từ chối phân bổ vượt; bảng đối soát hiện lỗi nếu nguồn đã sai.

**KHO:** `MOVEMENTS` A=ID, B=ItemID, C=WarehouseID, D=SignedQty, E=State. Tồn vật lý là tổng POSTED, đã bao gồm giao dịch OPENING dưới dạng movement.

```excel
=SUMIFS(MOVEMENTS!D$2:D$10001,MOVEMENTS!B$2:B$10001,A2,MOVEMENTS!C$2:C$10001,B2,MOVEMENTS!E$2:E$10001,"POSTED")
```

Đặt riêng tên `ItemIDCell`/`WarehouseIDCell` hoặc dùng tab `STOCK_BALANCES` A=ItemID, B=WarehouseID để tránh nhầm địa chỉ. Available=OnHand−Reserved; không lẫn Reserved với hàng đã xuất. Bản journal JSON tham chiếu trong `gas/` phải materialize ra bảng movement phục vụ báo cáo, không tự tạo hai nguồn ghi độc lập.

### Fixture tối thiểu có expected độc lập

| Test ID | Dữ liệu | Kết quả |
|---|---|---|
| FM01 | 1 DONE, 1 TODO, 1 CANCELLED | Completion 50% |
| FM02 | TODO có hạn trước ngày báo cáo, việc khác DONE/CANCELLED | Overdue 1 |
| FM03 | Thu 10 triệu vào A, chuyển A→B 5 triệu, chi B 1 triệu | A=5 triệu, B=4 triệu, tổng=9 triệu |
| FM04 | 2×100.000, giảm 10%, thuế ví dụ 8% sau giảm | 194.400 |
| FM05 | 2 WON, 1 LOST, 2 mở | Win rate 2/3 |
| FM06 | Nợ 1 triệu, đã phân bổ 400.000, credit 100.000 | Còn 500.000 |
| FM07 | Nhập 10 đơn vị, xuất 4, chuyển kho 3 | Tổng kho còn 6; kho nguồn 3, đích 3 |
| FM08 | 1.000.001 phân bổ tỷ lệ tổng 100% | Tổng các quỹ đúng 1.000.001 |

`gas/FormulaQA.gs` cung cấp 6 phép kiểm tra trên một file QA mới cho Tasks, CRM, báo giá và tài khoản. FM06–FM08 có unit tests trong kit; P22 phải tạo thêm các ca Google Sheets này cho sản phẩm tương ứng. Không gọi 6 phép thử này là đã kiểm thử mọi template.

## 5. CRM đầy đủ: cấu trúc code và yêu cầu theo lớp

Phạm vi F05-Pro: contacts, companies, pipeline, nhiều người chăm sóc, hoạt động/timeline, task follow-up, file, dashboard, import/export, cấu hình và quyền. Có thao tác tìm/lọc/phân trang, audit, chuyển chủ sở hữu theo quyền, archive và khôi phục theo chính sách. API không được trả tất cả dữ liệu rồi để frontend tự ẩn.

| Đường dẫn đích Codex phải tạo | Chức năng bắt buộc |
|---|---|
| `products/crm/schema/` | Users, Teams, Contacts, ContactAccess, Companies, Opportunities, Activities, Followups, Attachments, Audit, Outbox |
| `packages/domain/crm.ts` | Normalize, validate, transition, deduplicate suggestions, KPI, ownership |
| `products/crm/server/identity.ts` | Resolve danh tính thật, active user, quyền role/team/bản ghi |
| `products/crm/server/repository.ts` | Đọc theo schema, version check, ghi bền vững, filter trước trả dữ liệu |
| `products/crm/server/service.ts` | Create/update/archive contact, transition deal, add activity, assign owner |
| `products/crm/server/rpc.ts` | Whitelist operation + validate payload + envelope lỗi ổn định |
| `products/crm/web/` | ContactList, ContactForm, ContactDetail, Pipeline, FollowupCalendar, Dashboard, Admin |
| `products/crm/gas/` | Entrypoints, trigger setup, export, queue worker, migration |
| `products/crm/appsheet/` | Bảng/cột/filter/view/action/bot và hướng dẫn cấu hình thực |
| `products/crm/tests/` | Domain, permission, persistence, import, UI, deployment, customer install |

### Schema tối thiểu chi tiết cho CRM

| Bảng | Cột nghiệp vụ và ràng buộc |
|---|---|
| Users | Email:Email PK chuẩn hóa; Role enum OWNER/MANAGER/STAFF/VIEWER; TeamID Ref; Active boolean |
| Contacts | ID Text PK; Name Required; Phone Text; Email Email optional; OwnerEmail Ref Users; TeamID Ref; Source enum; Archived boolean; RowVersion integer |
| ContactAccess | ID PK; ContactID Ref; UserEmail Ref; Permission VIEW/EDIT; unique(ContactID,UserEmail) |
| Companies | ID PK; Name Required; TaxID Text optional; Industry; OwnerEmail Ref |
| Opportunities | ID PK; ContactID Ref; CompanyID Ref optional; Stage NEW/QUALIFIED/PROPOSAL/WON/LOST; ExpectedValueVnd integer>=0; Probability decimal 0..1; ExpectedCloseDate Date; ClosedAt DateTime; LostReason; RowVersion integer |
| Activities | ID PK; ContactID Ref; OpportunityID Ref optional; Type CALL/EMAIL/MEETING/NOTE; OccurredAt DateTime; Summary LongText; CreatedBy Email |
| Followups | ID PK; ContactID Ref; AssigneeEmail Ref; DueAt DateTime; Status TODO/DONE/CANCELLED; DoneAt optional |
| Attachments | ID PK; ContactID Ref; DriveFileID Text; MimeType; AccessScope; UploadedBy |
| Outbox | ID PK; DedupKey unique; Recipient; TemplateVersion; State PENDING/SENDING/SENT/UNKNOWN/CANCELLED; ProviderID; LastError |

Bảng nghiệp vụ thêm CreatedAt/UpdatedAt/CreatedBy/RowVersion khi thích hợp. Phần chia sẻ ContactAccess không được staff tự cấp cho người khác. Quan hệ deal/contact phải thuộc cùng phạm vi; không cho phép gắn Activity của một khách vào deal của khách khác.

### RPC contract minh họa

```json
{"operation":"crm.deal.transition","requestId":"req_20260907_001","payload":{"id":"DEAL_01","stage":"WON","expectedVersion":3}}
```

```json
{"ok":false,"error":{"code":"VERSION_CONFLICT","message":"Dữ liệu đã thay đổi. Hãy tải lại trước khi lưu."},"requestId":"req_20260907_001"}
```

`actor`, `role`, `email`, `tenantId` từ client không có quyền quyết định danh tính. Tất cả mutation có idempotency và version policy; ghi audit cùng một event hoặc transaction để tránh đổi dữ liệu mà mất lịch sử. Các pure functions trong `reference/domain.mjs` là nền cho rule, không phải backend CRM hoàn chỉnh.

### Các ca CRM bắt buộc

Create contact → refresh còn dữ liệu; thêm hoạt động → timeline hiện đúng; chuyển PROPOSAL→WON ghi ClosedAt một lần; mở lại theo action riêng có quyền; contact shared edit không tự được đổi owner; manager khác team bị từ chối; import số điện thoại giữ số 0; export dữ liệu cùng quyền với list; xung đột version phải hiển thị lỗi; từ 2 deal thắng/1 thua tính tỷ lệ 2/3. Link file riêng không trở thành public sau export.

## 6. ERP Lite: phạm vi và các điểm code quan trọng

F24 là **ERP quản trị nhỏ**, gồm CRM, mua hàng, kho, bán hàng, công nợ và thu chi. Có danh mục nhân sự tham chiếu; kế toán pháp định, bảng lương pháp lý, sản xuất đa tầng và hóa đơn điện tử là tích hợp/phạm vi khác chỉ thêm khi có yêu cầu rõ. Không gắn nhãn “ERP đầy đủ mọi nghiệp vụ” cho bản Lite.

| Module | Bảng/loại event | Service bắt buộc |
|---|---|---|
| Danh mục | Parties, Products, Units, Warehouses, Users | Unique code, unit conversion, archive không mất lịch sử |
| Mua | PurchaseOrders, PurchaseLines, Receipts | Approve PO, receive partial, cancel remainder |
| Kho | StockRequests, StockJournal, Reservations, Counts | Post receive/issue/transfer/count adjustment; chặn âm; truy nguồn |
| Bán | SalesOrders, SalesLines, Shipments, Returns | Price snapshot, partial shipment, return, loyalty tùy scope |
| Công nợ | Invoices, Payments, Allocations, CreditNotes | Partial allocation, aging as-of date, reversal |
| Tiền | Accounts, CashJournal, Reconciliation | Receive/pay/transfer, balance, đóng kỳ và đảo giao dịch |
| Báo cáo | ProjectionState, StockBalances, FinanceFacts | Rebuild, checkpoint, stale flag, cross-module reconciliation |

### Một luồng ERP phải thực sự chạy

1. Tạo PO 10 sản phẩm, duyệt; nhập kho thực nhận 8, còn 2 chưa nhận.
2. Posting receipt làm tăng kho 8 và phát sinh phải trả theo chính sách ghi nhận đã chọn; cùng SourceID không ghi hai lần.
3. Tạo SO 5 sản phẩm; giữ hàng nếu bật reservation; xuất/giao 3 rồi 2.
4. Giá bán, chiết khấu, thuế được snapshot tại thời điểm xác nhận; không đổi đơn cũ khi sửa bảng giá.
5. Thu tiền một phần và phân bổ cho hóa đơn; công nợ giảm đúng amount, không giảm theo toàn bộ giá trị đơn.
6. Khách trả 1 sản phẩm: kiểm tra disposition (bán lại/hỏng), nhập kho nếu hợp lệ, credit và hoàn tiền theo quy trình; không tự refund nếu chưa xác nhận.
7. Cuối kỳ đối soát tổng kho, tiền, công nợ, nghiệp vụ chưa commit và dữ liệu báo cáo.

### Ba khái niệm không được trộn

- **Tồn vật lý:** đã nhận/xuất qua giao dịch POSTED.
- **Tồn đã giữ:** reservation cho đơn, chưa xuất; available=onHand−reserved.
- **Doanh thu/thực thu/công nợ:** nguồn và thời điểm ghi nhận khác nhau; không lấy tiền vào ví làm doanh thu mọi trường hợp.

### Chọn cơ chế ghi phù hợp

**Route S — một writer Apps Script:** mã tham chiếu lưu một stock movement/transfer thành một event JSON trong một ô journal. Kiểm tra lại quyền/tồn/idempotency trong cùng ScriptLock, rồi append một lần. Đây là mẫu giảm rủi ro ghi một nửa hai phía chuyển kho; bảng số dư là projection có thể rebuild. Không sửa journal trực tiếp, không có AppSheet action ghi thẳng journal.

Mẫu `gas/Code.gs` chỉ thực hiện RECEIVE/ISSUE/TRANSFER một item. ERP phải mở rộng event contract sang nhiều dòng, reversal, valuation, reserve, approval, migration và recovery; có giới hạn payload và phép đo hiệu năng. Không coi một append của Sheets là transaction ACID cho toàn hệ thống hoặc cam kết chống mọi lỗi lưu trữ.

**Route D — backend có transaction:** chọn khi cần nhiều writer, booking/xuất kho tức thời hoặc quy mô vượt phép đo của Route S. Codex phải tạo transaction SQL cho commit nghiệp vụ, unique idempotency key, lock theo tài nguyên, cùng transaction cho event/effects, rollback và outbox. Chỉ quyết định provider sau khi ghi yêu cầu, ngân sách và quyền. Chi phí hạ tầng route này phải cập nhật theo nhà cung cấp thực tế; không dùng khoản dự phòng nhỏ của Route S làm báo giá route D.

LockService chỉ phối hợp các lần chạy dùng lock tương ứng trong cùng phạm vi script. Nó không khóa writer AppSheet hay người sửa sheet trực tiếp. [LockService](https://developers.google.com/apps-script/reference/lock/lock-service).

### Các file ERP Codex phải viết

`erp/schema/*.json`, `erp/domain/{money,stock,valuation,receivables,cash,orders}.ts`, `erp/server/{auth,commands,repository,journal,projections,reconcile}.ts`, `erp/web/{purchase,sales,inventory,cash,receivables,reports}/`, `erp/appsheet/`, `erp/tests/{posting,concurrency,recovery,permissions,e2e}/`, `erp/migrations/`, `erp/docs/OPERATIONS.md`.

Mỗi command là một nghiệp vụ tên rõ như `confirmReceipt`, `shipOrder`, `allocatePayment`; không dùng API `updateAnySheetRange` làm backend nghiệp vụ. Các thay đổi đã POSTED cần reversal tham chiếu event gốc; reversal cũng idempotent.

## 7. AppSheet: “code” nằm ở đâu?

AppSheet cần **schema, expressions, views, actions, bots, security settings** và đôi khi backend Apps Script/API. HTML/React không phải mã để import thành AppSheet. Bộ CSV/JSON trong kit là đặc tả cấu hình nội bộ; phải thực hiện trong editor hoặc công cụ chính thức có hỗ trợ. API công khai được kiểm tra tập trung vào bản ghi/actions/monitoring và có điều kiện gói Enterprise; không suy nó dựng được toàn bộ app. [AppSheet API](https://support.google.com/appsheet/answer/10105768?hl=en).

### Bước cài một CRM AppSheet

1. P13 tạo nguồn dữ liệu CRM sạch: một bảng/tab, header ổn định, ID bất biến, đủ quan hệ.
2. Tạo app từ nguồn của chính tài khoản người mua hoặc copy app mà bạn có quyền phân phối; kết nối lại file/folder của khách.
3. Cấu hình key/label/type/ref/required/initial/app formula theo `columns.csv`; regenerate schema rồi so với đặc tả.
4. Bật sign-in. Tài khoản quản trị nền tảng được gán Admin đúng chủ sở hữu; người dùng nghiệp vụ có Role trong Users do owner quản lý.
5. Thiết lập security filters và quyền bảng; staff không có quyền trực tiếp với sheet Users, ledger hoặc file nhạy cảm.
6. Tạo views và actions CRM theo P14; kiểm tra desktop/mobile, dữ liệu rỗng, lỗi validation.
7. Cấu hình bots sau cùng, bắt đầu với preview/dry-run hoặc người nhận thử được phép.
8. Dùng ít nhất owner/manager/staffA/staffB/viewer để chạy P24; kiểm tra request trực tiếp, dữ liệu sau sync và tệp.
9. Kiểm tra deployment/licence; lưu app identifier/version/owner/data source và evidence. Chưa qua các bước này thì status không phải `verified_google`.

### Cấu hình cột mẫu chính xác theo vai trò

| Bảng.cột | Type | Initial value / App formula | Ràng buộc |
|---|---|---|---|
| Contacts.ID | Text, Key | Initial `UNIQUEID()` | Không thay sau tạo |
| Contacts.Name | Name/Text, Label | Không | Required |
| Contacts.OwnerEmail | Ref Users | Initial `USEREMAIL()` | Staff không đổi; manager/owner theo quy trình |
| Contacts.TeamID | Ref Teams | Giá trị suy từ user/assignment đã kiểm tra | Staff không tự chọn team để mở quyền |
| Contacts.CreatedBy | Email | Initial `USEREMAIL()` | Không cho sửa |
| Contacts.CreatedAt | DateTime | Initial `NOW()` | Không dùng App formula biến động |
| Opportunities.ContactID | Ref Contacts | Không | Required; danh mục chỉ trong quyền |
| Opportunities.Stage | Enum | Initial `NEW` | NEW/QUALIFIED/PROPOSAL/WON/LOST |
| Opportunities.ExpectedValueVnd | Price/Number | Không | >=0, VND không thập phân |
| Opportunities.Probability | Percent | Mặc định theo stage | 0..1 |
| Followups.DueAt | DateTime | Không | Hạn và timezone rõ |
| OrderLines.OrderID | Ref Orders | Không | `IsPartOf` khi phù hợp form cha/con |
| OrderLines.Qty | Decimal | Không | >0, tối đa 3 số lẻ theo domain |
| OrderLines.UnitPrice | Price | Giá snapshot | >=0; không lookup giá động làm đổi lịch sử |
| OrderLines.Gross | Price | `ROUND([Qty]*[UnitPrice])` | Derived |
| OrderLines.LineDiscount | Price | `ROUND([Gross]*[DiscountRate])` | Derived |
| OrderLines.Tax | Price | `ROUND(([Gross]-[LineDiscount])*[TaxRate])` | Derived |
| OrderLines.Total | Price | `[Gross]-[LineDiscount]+[Tax]` | Derived |

AppSheet ROUND trong các ví dụ dùng một đối số; không chép nguyên cú pháp ROUND(x,0) của Sheets. Biểu thức dự kiến phải được xác nhận bằng expression tester trong editor trước khi bán.

### Filter mẫu cho Contacts: một chủ sở hữu và manager cùng team

```text
AND(
  LOOKUP(USEREMAIL(), "Users", "Email", "Active") = TRUE,
  OR(
    USERROLE() = "Admin",
    [OwnerEmail] = USEREMAIL(),
    AND(
      LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "MANAGER",
      ISNOTBLANK(LOOKUP(USEREMAIL(), "Users", "Email", "TeamID")),
      [TeamID] = LOOKUP(USEREMAIL(), "Users", "Email", "TeamID")
    )
  )
)
```

Users là READ_ONLY trong app nghiệp vụ; owner quản lý nguồn/quyền bằng luồng quản trị riêng. Filter Users cho phép mỗi người đọc dòng của mình, Admin đọc toàn bộ:

```text
OR(USERROLE() = "Admin", [Email] = USEREMAIL())
```

Mẫu Contacts chưa bao gồm ContactAccess nhiều người; P14 phải bổ sung quyền chia sẻ bằng bảng grant và test cả read/edit/transfer. Không cấp quyền toàn bộ chỉ vì LOOKUP trả blank. Mọi bảng con dùng điều kiện phạm vi tương ứng, không chỉ lọc Contacts. Quyền Drive attachments phải đồng bộ với mô hình truy cập.

Slice là chế độ hiển thị; security filter quyết định dữ liệu được tải về. Không thay security filter bằng Slice hoặc Show_If. [Security filters và slices](https://support.google.com/appsheet/answer/10104706?hl=en).

### Views/actions/bots CRM

| Thành phần | Cấu hình đích |
|---|---|
| Contacts_Table | Table, tìm kiếm, group Source, sort UpdatedAt giảm dần |
| Contacts_Detail | Detail, related Opportunities/Activities/Followups, file trong quyền |
| Pipeline | Deck/group theo Stage; nếu cần Kanban kéo thả phải xác minh capability thực tế, không bịa view type |
| Followup_Calendar | Calendar, DueAt; dữ liệu theo assignee |
| CRM_Dashboard | Dashboard chứa chart + table; KPI có drilldown |
| AddActivity | Mở form với ContactID được điền, kiểm tra ref hợp lệ |
| MarkWon | Chỉ stage PROPOSAL, role có quyền; cập nhật Stage/ClosedAt, ghi lịch sử |
| CompleteFollowup | TODO→DONE, DoneAt=NOW; không thay CompletedAt khi sync lại |
| Reminder | Scheduled event, lọc TODO đến hạn, người nhận từ Users đã xác minh, dedup theo công việc/ngày/người nhận |

Các action là workflow thật; tiền/tồn confirmed không được dựa riêng vào calculated column trên thiết bị. Cấu hình app events, scheduled events và nguồn sửa dữ liệu phải kiểm tra thực tế; sửa trực tiếp Sheets không tự được coi là AppSheet event. [Events](https://support.google.com/appsheet/answer/11445188?hl=en).

### ERP AppSheet và xử lý offline

- AppSheet tạo **StockRequests/PaymentRequests**; chưa ghi journal. Nhân viên được thấy request của mình và số dư được cấp quyền.
- Submission có request ID ổn định, nội dung được khóa sau submit; manager/owner duyệt theo phạm vi. Phê duyệt không đồng nghĩa đã POSTED.
- Worker đáng tin cậy kiểm tra lại user active, cấp duyệt, tài nguyên và version trước khi post; ghi trạng thái POSTED/REJECTED/FAILED cùng reference event.
- Không truyền email client vào `activeActor_` để mạo danh. Mẫu `gas/Code.gs` dành cho RPC Web App có danh tính active user; **không gọi thẳng mẫu này từ bot rồi tưởng Session là người đã bấm nút AppSheet**.
- P15/P18 phải thiết kế trust boundary cho request processor. Nếu chưa chứng minh được người submit/approve qua kênh đã xác minh, giữ bước duyệt trong giao diện backend của owner; không tự mở posting chỉ bằng cột `SubmittedBy` có thể sửa.
- Offline chỉ lưu draft/request. Hai thiết bị cùng yêu cầu xuất hàng cuối phải có tối đa một request được POSTED. UI hiện “Chờ xác nhận” đến khi server trả kết quả.
- Reversal tạo request mới liên kết event gốc; không xóa dòng đã post để sửa số dư.

## 8. Web App: cấu hình triển khai và quyền

Apps Script có thể chạy dưới tài khoản triển khai hoặc người truy cập; quyền và danh tính khác nhau theo chế độ. `getActiveUser().getEmail()` có thể trống; backend phải fail closed. Dữ liệu giả lập local không chứng minh đăng nhập trên Google hoạt động. [Web App](https://developers.google.com/apps-script/guides/web), [Session](https://developers.google.com/apps-script/reference/base/session).

| Môi trường | Cấu hình phải lưu | Gate |
|---|---|---|
| Local | Node version, code hash, fixture version | Unit/domain/schema |
| Google QA | ScriptID, SpreadsheetID, deployment mode, test users | Formula + RPC + quyền + trigger |
| Pilot khách | Bản sao riêng, owner khách, folder khách, licence | Cài sạch, UAT, backup/restore |
| Production | Version bất biến, deployment ID, release hash, rollback target | P33 GO và cho phép phát hành đúng đích |

Với nhóm cùng miền Workspace, kiểm tra danh tính thực trên deployment đã chọn. Với người dùng Gmail cá nhân/nhiều tổ chức, không mặc định mô hình đó đủ; chọn AppSheet sign-in hoặc backend xác thực được hỗ trợ. Không tự xây đăng nhập lưu mật khẩu plain text trong Sheet.

`google.script.run` là async. UI phải có success/failure handlers, trạng thái pending và cùng request ID khi retry sau lỗi không rõ đã ghi hay chưa. Không gửi thông báo “Đã lưu” ngay khi bắt đầu request. [Giao tiếp HTML Service](https://developers.google.com/apps-script/guides/html/communication).

Apps Script hiện có hạn chạy thông thường 6 phút/lần và custom function 30 giây; đây là giới hạn nền tảng, không là SLA app. Job lớn phải chia batch/checkpoint; đo theo tài khoản cụ thể. [Quotas](https://developers.google.com/apps-script/guides/services/quotas).

## 9. Mã sửa lỗi tham chiếu: dùng đúng phạm vi

Không có một đoạn code chung sửa được mọi bug chưa biết. Các file sau triển khai các mẫu phòng/sửa lỗi cụ thể và có local tests. Khi áp vào app thật, P26 tái hiện lỗi, P27–P30 thích nghi code theo schema, rồi chạy regression và Google integration.

| Lỗi | File / function | Điều đã kiểm tra local | Phần còn phải kiểm tra thật |
|---|---|---|---|
| Sai làm tròn tiền | `reference/domain.mjs::calculateLine` | Integer VND, số lượng 3 chữ số lẻ, discount/tax, overflow | Công thức Sheets/AppSheet khớp cùng fixture |
| Mất tiền lẻ khi chia quỹ | `allocateFunds` | Tổng luôn bằng amount, residual phân theo largest remainder | Format/công thức trên file thật |
| Công nợ âm do phân bổ quá mức | `remainingDebt` | Từ chối over-allocation | Transaction allocation/payment |
| Đặt lịch trùng ở ranh giới | `overlap` | Khoảng nửa mở, invalid input | Concurrency processor/DB |
| Ngày Việt Nam sai | `localDate` | Boundary UTC→VN | Apps Script/AppSheet/browser timezone |
| Lộ khách khác / ghi đè | `canReadContact`, `transitionOpportunity` | Quyền, inactive, version conflict | Server identity, child/files, UI handling |
| Xuất kho âm / ghi trùng | `reference/inventory.mjs`, `gas/Code.gs` | Pure rule + adapter serialize + replay | Lock, durable journal, quota, quyền writer thật |
| Gửi mail lặp sau timeout | `reference/outbox.mjs` | SENDING→UNKNOWN, không auto resend | Persist trước gửi, provider reconciliation |
| CSV formula injection | `safeCsvCell` | Prefix nguy hiểm, quotes/newlines | Import bằng Excel/Sheets thực; numeric columns xử lý riêng |
| Công thức lỗi | `gas/FormulaQA.gs` | Syntax local | Chạy fixture Google và locale bản bán |

Mã MemoryStockStore và outbox job trong RAM chỉ dùng chứng minh rule/test. Production cần persistence, recovery, authorization và quan sát vận hành. `gas/Domain.gs`/`Inventory.gs` được sinh từ bản `.mjs` để tránh lệch logic; sửa source rồi chạy `node tools/build-gas.mjs`.

### Chạy các kiểm tra đã có

```bash
npm test
npm run cost
npm run check:kit
```

Không cần npm install để chạy bộ kiểm tra tham chiếu vì chỉ dùng module built-in của Node. Với dự án sản phẩm sau P00, Codex tự khai báo/pin các dependency thật cần dùng. `npm test` của kit không đồng nghĩa E2E CRM/ERP hoặc AppSheet đã được kiểm thử.

## 10. Tiêu chí GO/NO-GO trước thương mại

| Gate | Điều kiện GO | NO-GO điển hình |
|---|---|---|
| G1 — Công thức/nghiệp vụ | Expected khớp, không che dữ liệu sai, enum/ID/PK/FK đúng | Sai số dư, nợ, thuế ví dụ, ngày, KPI |
| G2 — Lưu dữ liệu | Refresh không mất; retry không lặp; xung đột báo rõ; recovery qua test | Ghi thành công giả, duplicate invoice, số dư âm ngoài quy tắc |
| G3 — Quyền | Owner/manager/staffA/staffB/viewer và file/export đều đúng | Frontend chỉ ẩn, role từ client, staff sửa Users |
| G4 — Cài thật | Tài khoản sạch copy/cài/trigger/deploy được, không phụ thuộc dữ liệu người bán | Link /copy bịa, file trỏ về dữ liệu riêng người bán |
| G5 — Trải nghiệm | Mobile/desktop, rỗng/lỗi/loading, hướng dẫn người mới, PDF tiếng Việt | Nút chưa có logic, hardcoded dashboard |
| G6 — Vận hành | Backup/restore, migration/rollback, logging, quota và giới hạn đo được | Upgrade mất dữ liệu, lỗi quota không có checkpoint |
| G7 — Gói bán | Demo/clean/manual/changelog/license scope/cost rõ; source trace đủ | Tuyên bố tính năng chưa test hoặc licence nền tảng không rõ |

Severity: P0 mất/lộ dữ liệu hoặc sai giao dịch nghiêm trọng; P1 luồng chính không chạy/số liệu sai; P2 lỗi phụ có workaround; P3 cosmetic. Còn P0/P1 của biến thể phát hành thì NO-GO. P2 chỉ được nhận nếu có mô tả rõ, không ảnh hưởng tuyên bố bán hàng và người bán quyết định trên evidence cụ thể. Không coi việc “bỏ tính năng khỏi test” là workaround.

### Evidence tối thiểu

Mỗi test ghi `TestID, SKU, code hash, schema version, platform, date, actor role, fixture, expected, actual, evidence path, result`. Test chưa chạy là NOT_RUN/BLOCKED; không tính vào pass rate. Tỷ lệ coverage cần tách danh mục đã ánh xạ, tính năng đã code và tính năng đã xác minh trên platform.

### UAT bằng tài khoản khách thử nghiệm

Người chưa xem code đọc hướng dẫn và tự cài; nhập 10 bản ghi; hoàn tất 3 quy trình chính; export; cấp/thu hồi staff; reset demo theo hướng dẫn; khôi phục từ backup. Ghi thời gian và điểm mắc, sửa hướng dẫn/giao diện rồi chạy lại phần bị lỗi. Pilot với dữ liệu giả hoặc dữ liệu khách đã cho phép dùng.

## 11. Dự toán: tiền thực trả và giá trị thời gian

Các phép tính nằm trong `config/costs.json` và `tools/cost-model.mjs`, có unit tests. **Tỷ giá 26.000 VND/USD, công 150.000 VND/giờ và các khoản dự phòng là giả định lập kế hoạch**, không phải tỷ giá trực tiếp, báo giá dịch vụ hoặc cam kết chi phí.

### Giá nền tảng đã kiểm tra

ChatGPT Plus hiện được niêm yết 20 USD/tháng và có Codex; hạn mức/chi phí sử dụng thêm phụ thuộc gói và cách dùng. Nếu bạn đã trả Plus, ghi chi phí sẵn có để không tính thành một khoản đăng ký mới. Dùng API key tính riêng theo mức sử dụng API; không cộng API giả định vào mọi prompt. [Giá Codex/ChatGPT](https://learn.chatgpt.com/docs/pricing).

AppSheet niêm yết Starter 5, Core 10, Enterprise Plus 20 USD/người/tháng; thử nghiệm tối đa 10 người không đồng nghĩa dùng thương mại miễn phí. Một số gói Workspace có Core; đối chiếu entitlement của đúng khách để tránh mua trùng. API/feature yêu cầu gói cao hơn phải được tính riêng. [Giá AppSheet](https://about.appsheet.com/pricing/).

| Số người phải mua Core theo giả định | USD/tháng | VND/tháng tại tỷ giá giả định |
|---|---|---|
| 1 | 10 | 260.000 |
| 5 | 50 | 1.300.000 |
| 10 | 100 | 2.600.000 |
| 20 | 200 | 5.200.000 |

Đây là phí nền tảng của khách khi khách tự sở hữu app; không phải tiền bán template bạn nhận. Số seat trả phí phải xác minh theo người dùng/gói thực tế, gồm owner/khách ngoài khi áp dụng; không tự nhân licence theo số app.

### Ba kịch bản chi phí của người bán

| Khoản dự phòng/tháng | Prototype | Pilot, 2 người nội bộ trả Core | Vận hành lớn hơn, 10 người trả Core |
|---|---|---|---|
| Sử dụng Codex thêm | 20 USD | 50 USD | 100 USD |
| Hosting cửa hàng | 0 USD | 20 USD | 40 USD |
| Backup/hạ tầng khác | 5 USD | 10 USD | 20 USD |
| Tên miền giả định | 20 USD/năm | 20 USD/năm | 20 USD/năm |
| Core nội bộ | 0 USD | 20 USD | 100 USD |
| Tổng tăng thêm/tháng | **693.333 VND** | **2.643.333 VND** | **6.803.333 VND** |
| Tổng gồm Plus sẵn có | **1.213.333 VND** | **3.163.333 VND** | **7.323.333 VND** |

Các con số hosting/backup/domain/extra usage là phong bì ngân sách có thể thay bằng 0 hoặc báo giá thật; chưa chọn nhà cung cấp và chưa mua gì. Chưa gồm thuế, phí đổi tiền/thẻ, thanh toán đơn hàng, tích hợp trả phí, thuê chuyên gia, quảng cáo, hoặc backend SQL cho route D. Prototype không cần website riêng để bắt đầu kiểm thử file. Khoản tên miền chia 12 là dự toán; thời điểm thanh toán thực tế thường khác.

### Công sức cho đợt sản phẩm đầu và CRM/ERP

| Công việc | Giờ thấp | Giờ cao |
|---|---|---|
| Core và installer | 60 | 100 |
| 3 Sheets F01/F17/F18 | 48 | 84 |
| CRM Web App | 60 | 100 |
| CRM AppSheet, tái dùng schema | 24 | 40 |
| ERP Lite Web, nối module | 120 | 200 |
| ERP Lite AppSheet | 40 | 64 |
| Subtotal implementation | 352 | 588 |
| QA/tài liệu/cài khách, thêm 25% | 88 | 147 |
| **Tổng** | **440** | **735** |

Tương đương khoảng **15–25 tuần ở 30 giờ làm hiệu quả/tuần**, chưa tính thời gian chờ quyền/khách phản hồi. Đây là giả định cho một người có Codex hỗ trợ, không phải đo tốc độ của bạn. Nếu tự làm, 66–110,25 triệu VND là **giá trị thời gian** tại mức 150.000/giờ, không phải hóa đơn phải trả Codex. Có thể bán từng SKU đạt gate trong quá trình, không đợi ERP xong.

### Toàn bộ 79 nhóm

Mô hình thô: 18 nhóm đơn giản×20–40 giờ, 20 nhóm vừa×50–90 giờ, 12 nhóm phức tạp×100–180 giờ, 29 tiện ích×4–12 giờ; core 80–140 giờ; thêm QA/tài liệu 25%. Kết quả **3.445–6.460 giờ** cho một biến thể chính và các preset đã nêu. Đây là ước lượng thay thế cho phạm vi toàn danh mục, **không cộng thêm** vào bảng đợt đầu và không bao gồm mọi biến thể S/W/A cho mọi nhóm.

Các khoảng trên chỉ dùng để quyết định ưu tiên ban đầu. Sau 2 SKU, P03 tính lại năng suất thực và dự báo; chưa dùng để ký cam kết thời hạn. Mục tiêu triển khai theo doanh thu/phản hồi thay vì cố xuất hàng trăm mẫu chưa kiểm tra.

### Ví dụ hòa vốn, không phải dự báo bán hàng

Giả định bán 499.000/đơn; hoàn tiền 5%; phí thanh toán tính bảo thủ 3% giá niêm yết; hỗ trợ 0,5 giờ×150.000; giao hàng số 5.000/đơn:

```text
Contribution = 499000*(1-0.05) - 499000*0.03 - 0.5*150000 - 5000
             = 379080 VND/đơn
Đơn bù chi phí tháng = CEILING(2643333 / 379080) = 7
Đơn bù 66 triệu công sức + 6 tháng vận hành
  = CEILING((66000000 + 6*2643333) / 379080) = 216
```

Chưa có CAC/quảng cáo/thuế hoặc biến động hỗ trợ. Nếu contribution<=0, không có số đơn hòa vốn hữu hạn theo mô hình này. Đổi giả định trong JSON rồi chạy `npm run cost`; đây là công cụ kế hoạch, không là khuyến nghị đầu tư hay bảo đảm lợi nhuận.

## 12. Lộ trình theo bước và kết quả kiểm tra

| Bước | Phạm vi | Mốc bàn giao | Chuyển bước khi |
|---|---|---|---|
| 0 | P00–P05 | Config, catalog, schema, scope, budget | PK/FK/preset/auth/write model rõ |
| 1 | F01-SHEET | File demo/sạch + formula QA + hướng dẫn | Người mới cài/dùng được |
| 2 | F17/F18-SHEET | Sổ thu chi, tồn kho, fixture | Số dư và import/export đúng |
| 3 | F05-WEB | CRM chạy thật trong QA | Persistence/permissions/E2E qua |
| 4 | F05-APPSHEET | App mobile và source ownership | Multi-role/sync/attachment qua |
| 5 | F24-WEB | Chuỗi PO→Receipt→SO→Payment→Return | Posting, reconciliation, recovery qua |
| 6 | F24-APPSHEET | Request/approval mobile | Hai thiết bị/offline không post trùng |
| 7 | Pilot và đóng gói | Tài khoản khách cài sạch, release report | P33 GO cho SKU cụ thể |
| 8 | Mở rộng F/U còn lại | SKU/preset từng đợt có evidence | Không còn mapping chưa thực hiện trong đợt |

Bước 0–4 có thể phát hành riêng theo SKU đạt gate. Không chạy các nhánh chưa có dependency. P35 lưu trạng thái để tiếp tục sau khi hết phiên hoặc hạn mức; không hứa một cuộc hội thoại sẽ build toàn bộ danh mục.

## 13. Publish thương mại là một bước riêng

P33 tạo release candidate, test report và danh sách thay đổi cụ thể. P34 chỉ thực hiện phát hành khi người bán đã chỉ định SKU/version/đích và cho phép thao tác. Nội dung gói, thông tin chi phí, mức hỗ trợ, ownership, sample data và rollback phải được chuẩn bị trước. Không tự gửi mail cho khách hoặc thu tiền trong quá trình thử.

Nếu chưa có quyền deploy/marketplace/payment, Codex hoàn thành ZIP/mã/tài liệu cài và ghi đúng bước còn thiếu. Một release candidate sạch và đầy đủ có thể được bạn triển khai thủ công theo hướng dẫn; đó vẫn là phần việc cụ thể, không phải lời hứa đã publish.
