# PROMPTS ALL - CODEX COMMERCIAL KIT

Dán từng prompt theo thứ tự trong `docs/IMPLEMENTATION_GUIDE.md`. Mỗi prompt phải được thực thi trong repository, không chỉ trả lời bằng kế hoạch.

## P00 - Khởi động và build sản phẩm đầu tiên

Đọc docs/IMPLEMENTATION_GUIDE.md, baseline/BUILD_ALL_TEMPLATES_CODEX.md và các hướng dẫn repository hiện có. Thực hiện công việc bằng cách tạo/sửa file và chạy kiểm tra. Mục tiêu là template có công thức và app có logic/lưu dữ liệu thật.

Đích mặc định F01-SHEET. Tạo PROJECT_CONFIG.json, PRODUCT_CATALOG.json, SOURCE_MAP.csv, BUILD_QUEUE.md, PROGRESS.md, DECISIONS.md, BLOCKERS.md. Dùng dữ liệu catalog trong config nếu có, kiểm tra đủ 247 mục shop và X001 ngoài shop. Giữ mã F01–F50/U01–U29.

Hoàn thành P01/P04/P05 cho F01 rồi thực hiện P06–P09. Xây installer Google Sheets, tab dữ liệu, formula contracts, dashboard, demo/sạch, validation và hướng dẫn. Chạy unit checks và phần Google integration nếu có kết nối được phép. Nếu chưa có Google, giao code cài hoàn chỉnh, test local và hướng dẫn chạy chính xác; ghi NOT_RUN cho live tests.

Dùng reference/ làm code tham chiếu, không coi MemoryStockStore là lưu trữ production. Không tự publish, gửi email thật hoặc thu tiền. Không dừng ở scaffold khi các bước implementation còn khả thi. Kết thúc bằng kết quả, lệnh chạy, evidence và checkpoint tiếp theo.

## P01 - Thiết lập hợp đồng thực thi và tiêu chí hoàn thành

Đọc IMPLEMENTATION_GUIDE và config dự án. Tạo hoặc cập nhật hướng dẫn dự án phù hợp với hướng dẫn đang có, không ghi đè quy tắc của người dùng. Quy định: mỗi task phải có input/output, code/file thật, fixture expected, kiểm tra, trạng thái và checkpoint.

Định nghĩa planned → implementing → implemented_local → verified_google → release_candidate → ready_to_sell. Blocked là cờ có lý do, không là pass. Cấm mock data trong bản production, nút chưa làm gì, hardcoded KPI thay formula, TODO ở luồng chính, nuốt exception và báo đã lưu giả. Mọi foreign key phải có target; mọi method import/gọi phải tồn tại.

Tạo DefinitionOfDone.md theo biến thể SHEET/WEB/APPSHEET và chỉ áp các gate có liên quan. Tạo work item nhỏ đủ hoàn thành một quy trình từ đầu đến cuối. Sau thiết lập hãy thực hiện work item khả thi đầu tiên, không chỉ tạo checklist.

## P02 - Chuẩn hóa toàn danh mục thành SKU có thể build

Đọc baseline và config/catalog.json, config/source-map.json nếu có. Tạo catalog máy đọc với family ID, tên riêng, source IDs/URLs, SKU presets, nền tảng, dependencies, schema references, acceptance cases và trạng thái. Mỗi source trong 247 mục shop phải có ít nhất một đích; X001 giữ loại ngoài shop.

Gộp các version nguồn cùng dòng vào feature backlog nhưng giữ traceability. Các tiện ích Uxx cần preset/hàm riêng cho từng phép biến đổi, không bỏ vì được nguồn cho miễn phí. Tách sản phẩm ảnh hưởng quyền/tiền/tồn với planner đơn giản để áp gate phù hợp.

Viết validator phát hiện source thiếu mapping, target không tồn tại, dependency vòng và preset không có acceptance. Chạy validator. Xuất COVERAGE_REPORT.md phân biệt mapping coverage với implementation/verified coverage. Không đánh dấu 247 mẫu đã xong chỉ vì có 247 dòng mapping.

## P03 - Lập chi phí và lộ trình có thể điều chỉnh

Đọc config/costs.json, chạy npm run cost và đọc PROGRESS. Xác minh lại giá nền tảng từ nguồn chính thức nếu ngày áp dụng đã thay đổi; ghi URL/ngày/currency/thuế/điều kiện. Giữ exchange rate, hourly rate, extra usage, hosting và số seat dưới nhãn giả định khi chưa có dữ liệu thật.

Tách tiền phải trả thêm, khoản đăng ký đã có, licence khách tự trả, chi phí một lần, vận hành tháng và giá trị thời gian. Không tính mua AppSheet Core hai lần khi entitlement Workspace đủ; không hứa prototype miễn phí được dùng thương mại.

Tạo COST_REPORT.md và roadmap theo gate cho F01/F17/F18, CRM WEB, CRM APPSHEET, ERP WEB, ERP APPSHEET. Toàn danh mục 79 nhóm là phạm vi riêng, không cộng mô hình đợt đầu vào mô hình toàn danh mục. Nếu đã có 2 SKU hoàn thành, dự báo lại từ giờ thực tế, số vòng lỗi và thời gian cài. Không coi token/phiên Codex là đơn vị sản phẩm cố định.

## P04 - Chốt nghiệp vụ cụ thể cho một SKU

Đọc PROJECT_CONFIG.sku và đặc tả F/U tương ứng. Tạo PRD.md cho đúng SKU với persona, vấn đề, quy trình chính, màn hình/tab, dữ liệu đầu vào, formula/KPI, vai trò, giới hạn và tiêu chí nghiệm thu. Sử dụng các mặc định trong guide; chỉ hỏi khi thiếu lựa chọn làm thay đổi nghiệp vụ hoặc quyền mà không thể suy hợp lý.

Lập bảng requirement ID → schema → service/formula → UI/view → test ID. Xác định rõ loại lợi nhuận/doanh thu/thực thu, mẫu số KPI, ngày hiệu lực, tiền cọc, hoàn tiền, hủy, timezone và quy tắc làm tròn khi liên quan.

Tạo fixture nhỏ có expected tính độc lập, ít nhất 1 happy path, 1 boundary, 1 invalid và 1 quyền nếu có dữ liệu nhiều người. Viết feature backlog từ các mô tả công khai có thể đọc; phần chưa xác minh gắn proposed. Bắt đầu triển khai domain của quy trình chính ngay sau PRD.

## P05 - Tạo schema đầy đủ và migration

Từ PRD của SKU, triển khai schema gồm mọi bảng/cột, type, PK, FK, label, required, default, enum, bounds, precision, immutable, audit và ownership. ID tạo một lần; không dùng số hàng hoặc RAND làm khóa. Điện thoại/mã định danh Text; ngày Date; VND integer; tỷ lệ 0..1.

Khai báo alias CustomerID/PartyID/EmployeeID thành target cụ thể. Một module standalone phải có master tối thiểu; tích hợp cần mapping ID và kiểm tra không trùng. Tạo schema lint và fixtures hợp lệ/không hợp lệ.

Viết installFresh, validate, dryRunMigration, migrate có schemaVersion và backup; chạy lại không nhân đôi header/dropdown/trigger. Không xóa hay seed đè bảng người dùng. Tạo báo cáo migration và ca khôi phục lỗi giữa chừng. Hoàn thành code validator/migration, không chỉ viết bảng schema.

## P06 - Tạo file Sheets hoàn chỉnh

Build biến thể SHEET của SKU bằng công cụ spreadsheet/Google Sheets được môi trường hỗ trợ; tuân hướng dẫn tool hiện có. Nếu không có kết nối Google, viết installer Apps Script hoàn chỉnh để người sở hữu chạy, không bịa URL.

Tạo START_HERE, DASHBOARD, bảng nhập, LISTS, SETTINGS. Gắn công thức thật theo FORMULA_CONTRACTS, validation, named ranges phù hợp, freeze header, filters, number/date formats, conditional formatting, vùng nhập và vùng tính phân biệt. Không merge trong data table.

Tạo DEMO và CLEAN riêng. Dashboard phải đọc cùng công thức ở cả hai; rỗng có hướng dẫn, không lỗi. Bảo vệ vùng tính chống sửa nhầm, không gọi sheet ẩn/protection là bảo mật. Kiểm tra thêm hàng và đổi danh mục. Giao file/mã cài, ảnh preview thật khi có, hướng dẫn 5 bước và test report.

## P07 - Viết và đối chiếu công thức

Triển khai FORMULA_CONTRACTS cho SKU. Mỗi chỉ tiêu có định nghĩa, source columns, formula, range strategy, blank/error policy, timezone/locale và expected fixtures. Sử dụng các hợp đồng mẫu trong guide và mở rộng toàn bộ KPI của PRD.

Tính lại tham chiếu từ schema, không chép địa chỉ cột cũ. Không dùng IFERROR hoặc MAX(0) để che over-allocation, missing mapping hay input sai. Đảm bảo discount/tax/rounding cùng quy tắc với JavaScript và AppSheet. CompletedAt là giá trị lịch sử.

Viết công thức xuống file hoặc installer thật. So sánh fixture độc lập cho tiền/chuyển khoản/nợ/tồn/win rate/quá hạn theo scope. Kiểm tra năm nhuận, ngày rỗng, filter, added rows và lỗi #REF/#DIV/0/#VALUE. Chạy P22 nếu có Google; nếu chưa có, ghi kết quả chỉ ở mức local/syntax và hướng dẫn integration.

## P08 - Viết installer Apps Script và quản lý trigger

Tạo source Apps Script cài đặt hoàn chỉnh cho SKU: cấu hình, kiểm tra quyền/scopes, tạo hoặc chọn file đích có chủ đích, tạo tab/header/formula/validation/chart, seedDemo riêng, validateInstallation và version marker. Bảo toàn dữ liệu khi cài lại; không tự đổi quyền public.

Trigger setup idempotent: liệt kê trigger thuộc installer, chỉ tạo khi chưa có, gỡ đúng trigger do sản phẩm quản lý. Ghi rõ installable trigger chạy bằng tài khoản tạo trigger; kiểm tra lại sau copy/handover. Không dùng onEdit giả định sẽ được gọi khi script/API khác sửa Sheet.

Tạo .clasp.example.json không có token; pin CLI thực sự dùng. Viết INSTALL.md với hàm/lệnh chính xác, scopes, expected output, lỗi thiếu quyền và rollback. Kiểm thử cài mới/cài lại/migration; ghi Google steps NOT_RUN nếu chưa chạy.

## P09 - Hoàn thiện dashboard, demo và trải nghiệm người mua

Hoàn thiện SKU hiện tại theo dữ liệu thật từ formula/service. Tạo dữ liệu demo giả tiếng Việt, có ca bình thường/quá hạn/hủy/partial nếu liên quan. Mọi card/chart có đơn vị, khoảng ngày và drilldown hoặc hướng dẫn tra dữ liệu.

Bản sạch không chứa khách thật, file ID riêng, email cá nhân hoặc liên kết ngược dữ liệu người bán. Reset demo cần chỉ rõ phạm vi, không xóa dữ liệu khách. Kiểm tra mobile/desktop nếu là app, và vùng in nếu là sheet.

Tạo START_HERE, QUICKSTART, FAQ, giới hạn, 3 ảnh demo chụp từ sản phẩm đã chạy nếu môi trường có khả năng. Không dùng ảnh mockup thay chứng cứ chạy. Cho một người dùng mới thực hiện quy trình mẫu qua hướng dẫn; sửa bước khó hiểu được phát hiện.

## P10 - Triển khai domain CRM F05

Build domain CRM đầy đủ theo mục 5 IMPLEMENTATION_GUIDE và baseline F05. Triển khai Contacts/Companies/ContactAccess/Opportunities/Activities/Followups/Attachments/Outbox. Viết validation, chuẩn hóa liên hệ, gợi ý trùng có quyết định merge, stage transitions, ownership/team grants, audit và KPI.

Không coi quyền đọc là quyền sửa. Shared VIEW không được transition deal hoặc đổi owner. Contact/deal/activity phải thuộc cùng phạm vi và quan hệ hợp lệ. WON/LOST ghi ClosedAt một lần; reopen là action riêng có quyền và lịch sử. Win rate tính trên deal đã đóng.

Tạo pure functions, repository interface và fixture independent. Tái dùng reference/domain.mjs sau khi thích nghi kiểu dữ liệu. Kiểm thử version conflict, duplicate command, inactive user, shared read-only, manager khác team, phone bắt đầu 0 và dữ liệu rỗng. Xong domain thì tiếp tục adapter của biến thể được chọn.

## P11 - Viết backend CRM Web App có lưu trữ thật

Triển khai backend CRM: identity, repository, service, RPC whitelist, durable idempotency, optimistic version, audit và outbox. Chọn deployment mode dựa vào người dùng thực; với Apps Script, kiểm tra active user email trong môi trường đích, thiếu danh tính phải từ chối. Không tin role/email client và không dùng effective user thay người dùng cuối.

Implement create/update/archive/restore contact, assign owner, add activity, transition/reopen opportunity, complete followup, list/search/filter/page, dashboard và export trong quyền. Mọi đọc dữ liệu được filter trước khi trả client; child/file dùng cùng scope.

Ghi thành công chỉ sau khi durable write xác nhận. Retry với cùng requestId trả lại kết quả nếu payload giống, báo conflict nếu khác. Không đưa memory adapter vào production. Tạo integration test persistence qua refresh và backend call trực tiếp ngoài quyền. Chuẩn bị deployment QA, không tự publish thương mại.

## P12 - Viết giao diện CRM Web App hoạt động đầy đủ

Build UI CRM cho backend P11: ContactList/Form/Detail, timeline Activities, pipeline, FollowupCalendar, KPI dashboard, Settings/Admin. Dùng dữ liệu backend; mock adapter chỉ trong mode demo/test được ghi rõ. Mọi nút CRUD, chuyển trạng thái, filter, import/export phải hoạt động.

Form validate phía client để hỗ trợ nhập; backend vẫn là nơi quyết định. Request async có loading, success/failure, chống double submit, giữ requestId khi retry không rõ kết quả. Không báo đã lưu trước success response. Version conflict phải cho tải dữ liệu mới và so thay đổi. Render text an toàn, sanitize rich text nếu có.

Kiểm tra 360/768/desktop, empty/loading/error states, keyboard labels, tiếng Việt, contact dài, số tiền lớn. Viết E2E create→refresh→update→filter→export→archive và ca quyền; chụp evidence của giao diện thật.

## P13 - Chuẩn bị schema và bộ cấu hình AppSheet

Tạo AppSheet source và cấu hình cho SKU hiện tại theo guide. Giao tables.csv, columns.csv, views.csv, actions.csv, bots.md, SECURITY_TESTS.md và APPSHEET_SETUP.md. Khai báo đủ Key/Label/Ref/IsPartOf/Required/Initial value/App formula/Valid_If/Editable_If/type.

Mỗi bảng một tab, header ổn định, ID Text bất biến; không lấy dashboard làm data source. Users/permissions/ledger là read-only trong app nhân viên; owner kiểm soát nguồn. Initial NOW/USEREMAIL/UNIQUEID dùng theo đúng mục đích, không biến thành app formula thay đổi lịch sử.

CSV/JSON là đặc tả nội bộ, không khẳng định AppSheet import được toàn bộ. Nếu có quyền dùng editor qua công cụ được hỗ trợ, thực hiện cài app và ghi evidence; nếu chưa có, hoàn thành source/code/cấu hình và hướng dẫn từng bước. Không bịa appId, link copy hoặc API tạo app.

## P14 - Cấu hình CRM AppSheet đến mức sử dụng được

Hoàn thành F05 AppSheet: Contacts table/detail, related activities/deals/followups, pipeline phù hợp view thực có, lịch chăm sóc, dashboard, add/update/archive và actions stage. Không giả định có Kanban drag-drop nếu editor không hỗ trợ theo cấu hình hiện tại.

Cấu hình sign-in, Users read-only, role/active, owner/team scopes và ContactAccess VIEW/EDIT. Mẫu filter trong guide chỉ là điểm bắt đầu; thêm filter và mode sửa cho mọi bảng con/tệp. Staff không tự sửa owner/team/grants; người chia sẻ VIEW không sửa deal.

Tạo action AddActivity, MarkWon, MarkLost, Reopen, CompleteFollowup với trạng thái/điều kiện rõ; ClosedAt giữ lịch sử. Bot follow-up làm theo P15. Thực hiện expression tester cho từng công thức, rồi kiểm tra 5 vai trò bằng tài khoản thật. Lưu bảng expected/actual; không coi preview admin là test quyền staff.

## P15 - Bot, hàng đợi và ranh giới tin cậy

Triển khai automation cho SKU với event source, condition, actor provenance, task, timezone, dedup key, retry, trạng thái và lỗi. Phân biệt sửa qua AppSheet, sửa trực tiếp Sheets và worker/backend; không giả định tất cả đều kích bot như nhau.

Nhắc việc/email có preview/dry-run. Persist PENDING→SENDING trước gọi provider; kết quả gửi không rõ phải thành UNKNOWN chờ đối soát, không auto-resend. Không hứa exactly-once gửi mail nếu provider không hỗ trợ idempotency/tra cứu.

Stock/payment worker không được dùng Session của bot như danh tính người bấm AppSheet. Thiết kế đường gửi/duyệt request có nguồn danh tính đã xác minh; không tin SubmittedBy do client sửa. Nếu chưa có phương án chứng minh, giữ phê duyệt ở backend owner, hoàn thành phần queue còn lại. Viết tests event lặp, timeout sau accept, crash giữa gửi, actor bị khóa, job lỗi một phần; không gửi ra khách thật.

## P16 - Triển khai domain ERP Lite và giao dịch liên module

Build F24 ERP Lite theo mục 6 guide: party/product/unit/warehouse, mua, kho, bán, công nợ, thu chi và báo cáo. Kế thừa module đã có, không tạo bản sao nguồn dữ liệu cùng meaning. Khai báo event/command contract cho receipt, shipment, transfer, payment allocation, return và reversal.

Chọn writer model rõ: single Apps Script journal hoặc transactional backend. Một operation không được cập nhật nửa bên nợ rồi lỗi bên kho. Idempotency phải durable, cùng transaction/event với effects. Projection rebuild được, có stale flag và reconcile. Unit precision, price snapshot, cost method, period close và backdate rule phải quyết định trước posting.

Implement và test PO10→receive8→SO5→ship3+2→partial pay→return1. Tách onHand/reserved/available và revenue/cash/receivable. Cấm sửa trực tiếp POSTED; reversal có tham chiếu và chống lặp. Không mở UI toàn ERP trước khi chuỗi domain này qua test.

## P17 - Viết ERP Web App theo quy trình thật

Triển khai backend/UI cho ERP domain P16. Các màn: mua/nhận hàng, bán/giao/trả, kho/kiểm kê/chuyển, thu chi/chuyển khoản, công nợ/phân bổ, dashboard/đối soát và cấu hình. Lines cha/con validate từng dòng và toàn chứng từ.

Mỗi nút post/approve/reverse gọi command có quyền, requestId và version; backend tính lại amount/availability từ dữ liệu tin cậy. Dữ liệu từ client không quyết định giá vốn/số dư hay vai trò. Một request timeout có thể đã commit: retry phải giữ idempotency key.

Cho thấy DRAFT/SUBMITTED/APPROVED/POSTED/REVERSED/FAILED đúng theo mô hình, không đồng nhất approved với paid. Có deep link từ KPI tới chứng từ nguồn. Hoàn thành E2E chuỗi PO→return và kiểm tra recovery tại các điểm ghi; xuất evidence cùng build hash.

## P18 - Cấu hình ERP AppSheet với request và approval

Build ERP AppSheet theo schema P13 và domain P16. Tạo master views, request forms với lines, approval inbox, tồn/công nợ chỉ đọc, nhận/giao/kiểm kê mobile và dashboard. Chỉ dùng quét mã/ảnh/chữ ký khi gói/thiết bị hỗ trợ và scope cần.

Offline tạo draft/request; không ghi thẳng stock/cash journal. Actor submit/approve được chứng minh qua trust boundary P15; worker kiểm tra lại quyền, số dư, version rồi post đúng một lần. Không cho staff thay identity/status protected sau submit. UI hiển thị chờ server xác nhận.

Cấu hình filter Users/master/requests/lines/projections/files theo role và kho được cấp. Test 2 thiết bị xin xuất 7 khi còn10: chỉ1 request post; chuyển kho giữ tổng; hủy/đảo không lặp; user bị khóa khi request đang chờ thì bị từ chối khi post. Lưu AppSheet setup và evidence thực.

## P19 - Kiểm tra quyền và bảo vệ dữ liệu theo vai trò

Rà soát mô hình quyền của SKU hiện tại bằng owner, manager teamA, staffA, staffB khác team và viewer. Tạo ma trận read/create/edit/delete/archive/approve/post/export/file/grant theo entity và scope. Kiểm tra backend trực tiếp, không chỉ UI.

Tìm role/email/tenant từ client, fallback admin khi email blank, VIEW grant bị dùng như EDIT, parent filtered nhưng child không, file public, formula/CSV injection, XSS và client có script secrets. Với AppSheet kiểm tra security filters, table modes, source file permissions, revoked-user sync behavior và device cache trong phạm vi nền tảng hỗ trợ.

Viết test tái hiện mỗi lỗi có chứng cứ, sửa đúng lớp và chạy lại. Không tuyên bố thiết bị offline lập tức xóa dữ liệu chỉ vì user bị thu hồi. Kết quả ghi rủi ro thực, mức độ, evidence và gate; không thêm auth tự chế lưu password trong Sheet.

## P20 - Tích hợp import/export/PDF/Calendar và dịch vụ ngoài

Triển khai đúng tích hợp đã nằm trong PRD: import CSV/XLSX có column mapping, preview, validation, upsert, provenance, báo lỗi từng dòng; export áp quyền và typed cell escaping; PDF từ dữ liệu thật với font tiếng Việt.

Calendar phải lưu eventId, chọn một/two-way và conflict policy; không tạo sự kiện thật trong demo. Payment/QR/provider khác cần tài liệu chính thức, credential được cấp và sandbox; QR không là bằng chứng thanh toán. Không dùng endpoint đoán hoặc vượt quyền file.

Pin dependency/provider version được dùng, tách adapter để test. Thử missing permission, expired token, quota, network timeout, partial import và retry. Không tự thêm AI API trả phí nếu PRD chưa cần; ghi cost input riêng khi có tích hợp.

## P21 - Kiểm thử unit, schema và nghiệp vụ

Viết và chạy tests có expected độc lập cho business rules của SKU. Dùng reference tests làm ví dụ, thêm case từ PRD chứ không chép chính implementation làm oracle. Bao phủ money rounding, blank/zero, enum, invalid refs, state edges, canceled/partial/reversed, timezone, duplicate request và version conflict khi liên quan.

Với CRM có VIEW-vs-EDIT, manager khác team và win-rate denominator. ERP có negative stock, transfer conservation, concurrent claims, partial posting recovery, double allocation và price snapshot. Formula tests phải tách local/domain khỏi live Sheets.

Sửa lỗi phát hiện và chạy lại suite liên quan. Ghi command, runtime, code hash, fixtures, pass/fail. Không nâng trạng thái verified_google từ local tests. Không thêm hàng loạt snapshot tests chỉ phản chiếu code mà bỏ ca sai nghiệp vụ.

## P22 - Chạy công thức trên Google Sheets thật

Tạo file QA riêng bằng installer/test harness, không sửa file khách. Chạy gas/FormulaQA.gs hoặc harness tương đương rồi mở rộng cho toàn FORMULA_CONTRACTS của SKU. So expected/actual bằng getValues hoặc Sheets API; kiểm tra formula strings và error cells.

Chạy cả locale chuẩn hóa của fixture và locale/timezone bản bán. Kiểm tra append rows, cột đổi chỗ qua migration, dropdown mới, filter, reset, blank, năm nhuận, ngày cuối tháng, tiền lớn và quyền protection. So tổng với fixture tính độc lập. Không dùng formatted text để so tiền khi có numeric value.

Lưu file QA ID/URL thực, ngày, formula revision, range expected/actual và screenshot nếu phù hợp. Nếu không có Google credentials/công cụ được phép, xuất harness đầy đủ và ghi NOT_RUN; tuyệt đối không giả lập Google pass bằng Node.

## P23 - Kiểm thử Web App từ đầu đến cuối

Chạy app QA với backend thật hoặc deployment thử đã được phép, dùng công cụ browser/test hiện có. Viết E2E tạo→lưu→refresh→sửa→search/filter→export→archive và luồng ngành của SKU. Dữ liệu giả, namespace test riêng, cleanup chỉ dữ liệu test.

Thử double-click, timeout trước/sau commit, response lỗi, mất mạng, version conflict, hai user và direct API call. Đo nội dung sau refresh từ server, không assert chỉ toast. Kiểm tra keyboard/mobile, PDF tiếng Việt, file access và session expired.

Nếu có môi trường local chạy được thì thực hiện ngay; nếu thiếu deployment auth, ghi blocker và hoàn thành script/fixtures. Screenshot hoặc HTML snapshot chưa chứng minh dữ liệu lưu bền. Sau lỗi dùng P26 và chạy lại ca đó cùng vùng hồi quy bị ảnh hưởng.

## P24 - Kiểm thử AppSheet bằng nhiều tài khoản và thiết bị

Theo SECURITY_TESTS/APPSHEET_SETUP, chạy trên app QA thật với owner/manager/staffA/staffB/viewer. Test dữ liệu xuất hiện sau sync, add/edit/action, child tables, attachments, export, data source và quyền người bị khóa. Không chỉ dùng preview tài khoản admin.

Thử initial value không bị reset, enum/ref đúng, row identity sau sort, đồng thời sửa, offline draft, reconnect, bot events đúng nguồn và request retry. ERP thử hai thiết bị cạnh tranh cùng tồn/tài nguyên; trạng thái chưa post không được hiện confirmed.

Ghi AppID/version, nguồn file QA, role, steps, expected/actual và evidence. Đọc deployment/licence warnings có thật. Nếu thiếu tài khoản/thiết bị thì đánh NOT_RUN cho ca đó; không dùng local unit test hoặc expression syntax để thay live app acceptance.

## P25 - Đo hiệu năng và hạn ngạch

Đo SKU trên dataset phù hợp: 100, 1000 và 5000 bản ghi khi nằm trong scope; app phức tạp đo thêm số lines/refs, không chỉ số header rows. Ghi thiết bị/mạng/tài khoản/locale/dữ liệu/mức đồng thời; đo p50/p95 của list/search/save/refresh/sync và thời gian job.

Chọn mục tiêu nội bộ có cơ sở từ phép đo, không hứa response cố định theo quảng cáo nguồn. Xác định I/O từng ô, full scans, virtual columns nặng, cache sai quyền, IMPORTRANGE lặp, bot bão và quota. Sửa bottleneck có chứng cứ: batch, pagination, bounded range, projection, checkpoint hoặc đổi backend khi cần.

Rerun đúng phép đo để so trước/sau. Không đổi tính đúng/quyền để nhanh hơn. Ghi tested operating envelope và tình huống cần migrate khỏi Sheets. Khi đủ giải quyết rủi ro/gate, dừng benchmark mở rộng tùy ý.

## P26 - Tái hiện bug và tạo regression trước khi sửa

Đọc BUG_REPORT.md hoặc thu thập thông tin lỗi đang có. Nếu thiếu, tự kiểm tra logs/code/fixtures trong phạm vi cho phép để tạo minimal reproduction; chỉ hỏi thông tin không thể lấy mà ảnh hưởng chẩn đoán.

Ghi SKU/version/platform, bước tái hiện, expected/actual, dữ liệu tối thiểu, stack trace đã ẩn bí mật, tần suất và mức P0/P1/P2/P3. Viết test tái hiện thất bại khi khả thi. Xác định nguyên nhân gốc và lớp lỗi: formula/domain/persistence/auth/UI/sync/provider.

Sửa tối thiểu đủ đúng; giữ API/dữ liệu cũ hoặc có migration rõ. Không suppress exception, đổi expected sai, xóa test hoặc hardcode số để pass. Chạy lại repro và vùng regression liên quan; giao diff, chứng cứ trước/sau, rủi ro còn lại và rollback.

## P27 - Sửa lỗi công thức, số tiền và số liệu báo cáo

Từ bug đã tái hiện, truy formula→range→schema→dữ liệu và rule. Kiểm tra lệch cột, locale separators, Date/text, numeric/text, blank vs0, canceled/posted, row expansion, filter, rounding và mẫu số KPI.

Đối chiếu reference/domain.mjs cho tiền hoặc các fixture trong guide. Nếu schema đổi, regenerate formula từ header map. Không dùng IFERROR(...,0) để làm biến mất input/mapping sai; hiển thị lỗi cần sửa và chặn posting nếu liên quan. Tổng công nợ âm phải tìm over-allocation, không ép MAX(0).

Thực hiện patch installer/migration để bản đã bán sửa được mà giữ dữ liệu. Chạy regression local và P22 trên Google khi có quyền. Giao công thức/mã trước-sau, nguyên nhân, expected/actual và phạm vi file/phiên bản bị ảnh hưởng.

## P28 - Sửa ghi trùng, race condition và mất dữ liệu

Tái hiện double submit, retry timeout, concurrent update hoặc lỗi giữa các lần ghi. Kiểm tra idempotency key bền vững, fingerprint canonical, actor scope, optimistic version, lock/transaction boundary và mọi writer thực tế.

Tham khảo reference/inventory.mjs và gas/Code.gs: kiểm quyền và tồn trong cùng critical section; duplicate cùng payload replay, khác payload conflict; transfer một event, projection rebuildable. Chỉ áp ScriptLock khi tất cả writer đi cùng script; không giả nó bảo vệ AppSheet/direct edit. Nếu nhiều writer thì thiết kế transaction/constraint backend.

Sửa repository/command và UI retry cùng requestId. Viết test lỗi sau commit trước response, 2 requests tranh tồn, crash partial, replay sau restart. Không sửa dữ liệu production bằng script hàng loạt trước dry-run/backup/phạm vi được phép. Giao repair plan cụ thể nếu dữ liệu cũ đã lệch.

## P29 - Sửa lỗi phân quyền và rò rỉ dữ liệu

Tái hiện bằng user quyền thấp và đúng request bị lỗi. Kiểm tra server identity, active status, grants VIEW/EDIT, team nonblank, ownership, child relation, file/export và source sheet. Đọc quyền không được trở thành quyền ghi.

Bỏ tin role/email/tenant do client cung cấp; deny nếu identity không xác minh được. AppSheet cần security filters/table modes cho mọi bảng; Slice/Show_If không thay security. Cấm staff sửa Users, owner/team hoặc ACL ngoài quy trình.

Viết regression chứng minh staffA không đọc/sửa staffB, shared VIEW không update, manager khác team bị chặn, inactive user không post, file không public. Chạy lại luồng người có quyền để tránh khóa nhầm. Giao scope ảnh hưởng và cách thu hồi quyền/rotate bí mật nếu có bằng chứng đã lộ; không tuyên bố sự cố đã xử lý chỉ bằng ẩn nút.

## P30 - Sửa lỗi timezone, bot và gửi thông báo

Tái hiện với giờ ISO rõ múi giờ, ngày cuối tháng, chuyển ngày UTC→VN, recurring rule và nguồn event. Dùng clock inject trong test; timestamp lịch sử ghi một lần, không NOW app formula. Phân biệt all-day với timed event.

Với bot/mail, kiểm event loop, trigger trùng, request dedup, job state và provider response. Tham khảo reference/outbox.mjs: ambiguous send/crach SENDING thành UNKNOWN để đối soát, không tự gửi lại. Không chuyển role người tạo trigger thành actor nghiệp vụ.

Sửa rule/calendar mapping/worker, giữ lịch sử và event IDs. Chạy dry-run fixture trước; test ít nhất một mốc 18:30Z thành ngày hôm sau ở Việt Nam, cùng scheduled occurrence chỉ tạo một task, bot retry không nhân đôi posting. Chỉ gửi tới tài khoản thử khi đã được phép.

## P31 - Backup, migration, khôi phục và bàn giao ownership

Triển khai backup/restore và upgrade cho SKU. Snapshot dữ liệu và cấu hình cần thiết, ghi schema/code version, checksum/count, ID mappings; phân biệt copy file với backup toàn bộ app/trigger/quyền.

Migration có dry-run, validation, backup, checkpoint và rollback/forward-fix theo loại dữ liệu. Test từ version cũ có dữ liệu qua version mới; inject lỗi giữa chừng; restore sang file mới rồi đối chiếu số dư/ref/file. Không hạ schema bằng cách xóa cột có dữ liệu.

Viết HANDOVER: owner khách, spreadsheet/folder/script/app identifiers, scopes, trigger creator, bot connections, licence, redeploy và revoke quyền người bán khi bàn giao hoàn tất. Kiểm tra bản sao không trỏ dữ liệu riêng của người bán. Giao script và evidence, không chỉ lời khuyên backup.

## P32 - Đóng gói SKU thương mại

Tạo release candidate cho SKU/version đang làm: bản sạch, bản demo, installer/source, AppSheet setup nếu liên quan, README/QUICKSTART/FAQ/troubleshooting, CHANGELOG, known limitations, platform costs, support scope và manifest/checksums.

Ảnh/video demo lấy từ sản phẩm đã chạy với dữ liệu giả. Mô tả bán hàng chỉ nêu tính năng đã có evidence; thiết kế/tên/nội dung riêng, không dùng file/asset nguồn trả phí không có quyền. Ghi rõ template licence khác AppSheet licence và hosting phí ngoài.

Test cài bằng tài khoản sạch và xác minh link/download/copy thật; nếu không có quyền tạo link thì để null và ghi blocker, không tự dựng URL. Tạo package ZIP có version rõ, không chứa token/password/data khách. Chưa publish ở bước này.

## P33 - Kiểm tra trước phát hành và ra GO/NO-GO

Thực hiện gate G1–G7 trong guide cho đúng SKU/biến thể. Kiểm tra build hash/evidence file thực, test result từng case, Google live tests, clean install, quyền, concurrency khi cần, backup/restore và tính đúng công thức. NOT_RUN/BLOCKED không là PASS.

Chạy release checker trong kit sau khi tạo evidence đúng schema; checker chỉ kiểm cấu trúc/evidence/hash, không thay việc đọc kết quả và UAT thật. Còn P0/P1 thì NO-GO. Không loại test hoặc bỏ tính năng khỏi danh sách để làm pass giả; thay scope bán cần được ghi và người bán quyết định cụ thể.

Giao RELEASE_REPORT.md gồm GO/NO-GO theo platform, số test thực chạy, lỗi còn, phạm vi đã kiểm tra, link/path chứng cứ, chi phí và hành động cuối để publish. Hoàn thành mọi sửa có thể làm trong phạm vi trước khi yêu cầu người bán quyết định release.

## P34 - Chuẩn bị và thực hiện phát hành đúng phiên bản

Đọc RELEASE_REPORT.md, manifest, package checksum và trạng thái productionPublish. Nếu chưa có GO hoặc chưa có yêu cầu phát hành rõ SKU/version/đích, hoàn thành release candidate và kế hoạch publish có thể xem xét; không ghi lên production.

Khi người bán đã cho phép phát hành đúng đích, xác minh version/hash/target account, dữ liệu khách tách riêng và rollback target. Thực hiện deployment/listing bằng công cụ được hỗ trợ trong phạm vi cho phép. Không thay đổi giá, gửi mail, charge tiền hoặc mở rộng quyền chia sẻ ngoài yêu cầu.

Sau publish, smoke test link sản phẩm, copy/install, login, thao tác chính và download; lưu release ID/version/time/URL thật. Nếu lỗi gate chính thì dùng phương án rollback đã chuẩn bị và báo trạng thái thực. Giao runbook hỗ trợ cập nhật sau bán.

## P35 - Tiếp tục phiên mới và build toàn danh mục theo đợt

Đọc PROGRESS, BLOCKERS, BUILD_QUEUE, PROJECT_CONFIG, catalog/source map và test report gần nhất. Tiếp tục SKU đang dở từ checkpoint, không dựng lại repository hoặc seed đè dữ liệu. Đầu tiên tái xác nhận trạng thái file và dependency thực tế.

Nếu SKU hiện tại đã đạt gate, chọn SKU tiếp theo có ưu tiên cao và dependency sẵn sàng, đọc prompts/products/<FAMILY_ID>.md, rồi dùng route SHEET/WEB/APPSHEET tương ứng. Mỗi đợt hoàn thành một sản phẩm hoặc nhóm tiện ích nhỏ, có implementation/fixture/QA/gói khách riêng.

Duy trì COVERAGE_REPORT: 247 mapping, family/preset đã code, đã verified, đã ready-to-sell. Version cùng dòng tái dùng code nhưng mọi chức năng đã ánh xạ có preset/test. Thiếu quyền bên ngoài thì giữ NOT_RUN, làm tiếp việc độc lập có ích; không công bố cả catalog đã xong. Kết thúc với checkpoint và prompt cụ thể cho phiên sau.

