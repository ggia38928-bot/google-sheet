# Hợp đồng công thức Google Sheets

## Quy ước triển khai

- Workbook đặt locale `vi_VN`, vì vậy công thức ghi vào Sheet dùng dấu chấm phẩy (`;`) làm dấu phân cách đối số.
- Apps Script ghi công thức đến dòng 500 bằng `setFormulaR1C1`; rerun, import, update, thêm dòng, Clean và Restore đều gọi lại hàm công thức.
- Ô không có khóa trả rỗng. Lookup không tìm thấy trả rỗng hoặc 0 theo ngữ nghĩa, đồng thời `kiemTraHeThongBaoGiaDonHang()` báo ref sai.
- Cột tiền dùng `#,##0 "₫"`; tỷ lệ dùng `0.00%`; ngày dùng định dạng ngày Việt Nam.
- Cột công thức được bảo vệ cảnh báo; người dùng chỉ nhập vào cột input.
- `CHI_TIẾT_BÁO_GIÁ.H2:H500` là vùng input **Tỷ lệ chiết khấu**, chỉ nhận số từ 0 đến 1 và tuyệt đối không chứa công thức thanh toán. Khi installer phát hiện công thức lạc vào H, nó xóa riêng ô công thức đó rồi áp lại validation; các giá trị tỷ lệ hợp lệ vẫn được giữ nguyên.
- Công thức tổng thanh toán từ bảng `THANH_TOÁN` chỉ được ghi vào `ĐƠN_HÀNG.H2:H500` (Thực thu đã xác nhận).

## Danh mục công thức

| # | Mục đích | Bảng/cột | Công thức Google Sheets tại dòng 2 | Input → Output | Vùng và cách lan | Ô trống/lỗi | Ca biên và expected result |
|---|---|---|---|---|---|---|---|
| 1 | Tra tên sản phẩm | `CHI_TIẾT_BÁO_GIÁ.D` | `=IF(C2="";"";IFNA(VLOOKUP(C2;'SẢN_PHẨM'!A:G;2;FALSE);""))` | Mã sản phẩm → tên | `D2:D500`, Apps Script | Mã trống/không tìm thấy → rỗng | `SP-001` → `Gói tư vấn khởi động` |
| 2 | Tra đơn vị tính | `CHI_TIẾT_BÁO_GIÁ.E` | `=IF(C2="";"";IFNA(VLOOKUP(C2;'SẢN_PHẨM'!A:G;3;FALSE);""))` | Mã sản phẩm → đơn vị | `E2:E500`, Apps Script | Mã trống/không tìm thấy → rỗng | `SP-001` → `Gói` |
| 3 | Tra đơn giá ban đầu | `CHI_TIẾT_BÁO_GIÁ.G` | `=IF(C2="";"";IFNA(VLOOKUP(C2;'SẢN_PHẨM'!A:G;4;FALSE);""))` | Mã sản phẩm → VND | `G2:G500` khi chưa chốt | Mã trống/không tìm thấy → rỗng | `SP-001` → `100.000`; khi vào workflow chuyển thành giá trị chốt cố định |
| 4 | Thành tiền trước chiết khấu | `CHI_TIẾT_BÁO_GIÁ.J` | `=IF(OR(F2="";G2="");"";F2*G2)` | Số lượng, đơn giá → VND | `J2:J500`, Apps Script | Thiếu input → rỗng; số âm bị validation chặn | `2 × 100.000 = 200.000` |
| 5 | Tiền chiết khấu dòng | `CHI_TIẾT_BÁO_GIÁ.K` | `=IF(J2="";"";J2*H2)` | Thành tiền, tỷ lệ giảm → VND | `K2:K500`, Apps Script | Thành tiền trống → rỗng; tỷ lệ ngoài 0–1 bị chặn | `200.000 × 10% = 20.000` |
| 6 | Giá trị sau chiết khấu | `CHI_TIẾT_BÁO_GIÁ.L` | `=IF(J2="";"";J2-K2)` | Thành tiền, tiền giảm → VND | `L2:L500`, Apps Script | Thành tiền trống → rỗng | `200.000 - 20.000 = 180.000` |
| 7 | Tiền VAT sau chiết khấu | `CHI_TIẾT_BÁO_GIÁ.M` | `=IF(L2="";"";L2*I2)` | Cơ sở VAT, thuế suất → VND | `M2:M500`, Apps Script | Cơ sở trống → rỗng; thuế ngoài 0–1 bị chặn | `180.000 × 8% = 14.400` |
| 8 | Tổng tiền dòng báo giá | `CHI_TIẾT_BÁO_GIÁ.N` | `=IF(L2="";"";L2+M2)` | Sau giảm, VAT → VND | `N2:N500`, Apps Script | Cơ sở trống → rỗng | `180.000 + 14.400 = 194.400` |
| 9 | Tổng báo giá đúng revision | `BÁO_GIÁ.I` | `=IF(A2="";"";SUMIFS('CHI_TIẾT_BÁO_GIÁ'!N:N;'CHI_TIẾT_BÁO_GIÁ'!B:B;A2))` | Mã revision → VND | `I2:I500`, Apps Script | Mã trống → rỗng; không có dòng → 0 | Tạo R2 không đổi tổng R1 |
| 10 | Cảnh báo báo giá hết hạn | `BÁO_GIÁ.J` | `=IF(A2="";"";IF(AND(H2="ĐÃ GỬI";G2<TODAY());"HẾT HẠN";""))` | Trạng thái, hạn → nhãn | `J2:J500`, Apps Script | Mã trống → rỗng | Đã gửi và quá hạn → `HẾT HẠN` |
| 11 | Tổng tiền dòng đơn | `CHI_TIẾT_ĐƠN_HÀNG.H` | `=IF(OR(F2="";G2="");"";F2*G2)` | Số lượng, đơn giá → VND | `H2:H500`, Apps Script | Thiếu input → rỗng | `2 × 400.000 = 800.000` |
| 12 | Tổng đơn hàng | `ĐƠN_HÀNG.G` | `=IF(A2="";"";SUMIFS('CHI_TIẾT_ĐƠN_HÀNG'!H:H;'CHI_TIẾT_ĐƠN_HÀNG'!B:B;A2))` | Mã đơn → VND | `G2:G500`, Apps Script | Mã trống → rỗng; không có dòng → 0 | DH-001 → `800.000` |
| 13 | Thực thu đã xác nhận | `ĐƠN_HÀNG.H` | `=IF(A2="";"";SUMIFS('THANH_TOÁN'!D:D;'THANH_TOÁN'!B:B;A2;'THANH_TOÁN'!F:F;"ĐÃ XÁC NHẬN"))` | Mã đơn, thanh toán → VND | `H2:H500`, Apps Script | Mã trống → rỗng; chờ/hủy không cộng | DH-001 → `500.000` |
| 14 | Công nợ còn lại | `ĐƠN_HÀNG.I` | `=IF(A2="";"";MAX(0;G2-H2))` | Tổng đơn, thực thu → VND | `I2:I500`, Apps Script | Mã trống → rỗng; không âm | `800.000 - 500.000 = 300.000` |
| 15 | Cảnh báo quá hạn thanh toán | `ĐƠN_HÀNG.J` | `=IF(A2="";"";IF(AND(E2<TODAY();I2>0;K2<>"HỦY");"QUÁ HẠN";""))` | Hạn, công nợ, trạng thái → nhãn | `J2:J500`, Apps Script | Mã trống → rỗng | Còn nợ sau hạn → `QUÁ HẠN`; đơn hủy không cảnh báo |
| 16 | Tỷ lệ chuyển đổi | `DASHBOARD.B8` | `=IFERROR(COUNTIF('BÁO_GIÁ'!H:H;"CHẤP NHẬN")/(COUNTIF('BÁO_GIÁ'!H:H;"CHẤP NHẬN")+COUNTIF('BÁO_GIÁ'!H:H;"TỪ CHỐI")+COUNTIF('BÁO_GIÁ'!H:H;"HẾT HẠN"));0)` | Trạng thái đã quyết định → tỷ lệ | Một KPI, dựng lại khi cài | Mẫu số 0 → 0 | 1 chấp nhận / 3 đã quyết định → `33,33%` |

## Giao hàng, lợi nhuận và dashboard

- `CHI_TIẾT_ĐƠN_HÀNG.I`: `=IF(A2="";"";SUMIFS('CHI_TIẾT_GIAO_HÀNG'!D:D;'CHI_TIẾT_GIAO_HÀNG'!C:C;A2;'CHI_TIẾT_GIAO_HÀNG'!E:E;"ĐÃ GIAO"))`; giao 6 rồi 4 cho tổng 10.
- `CHI_TIẾT_ĐƠN_HÀNG.G` là đơn giá chốt, không phải công thức tra danh mục. Khi chuyển báo giá thành đơn, Apps Script sao chép trực tiếp đơn giá từ revision đã chấp nhận để thay đổi catalog sau đó không làm sai lịch sử. Đơn giá dòng báo giá `CHI_TIẾT_BÁO_GIÁ.G` cũng được chốt cố định khi rời trạng thái NHÁP hoặc khi tạo revision mới, đảm bảo catalog thay đổi không làm sai lệch báo giá lịch sử.
- `CHI_TIẾT_ĐƠN_HÀNG.J`: `=IF(A2="";"";MAX(0;F2-I2))`; đặt 10, giao 6 còn 4; giao đủ còn 0.
- `CHI_TIẾT_ĐƠN_HÀNG.K`: doanh thu dòng trừ số lượng × giá vốn tra từ `SẢN_PHẨM`; không có giá vốn dùng 0 và validator báo dữ liệu danh mục thiếu.
- Dashboard có 12 KPI lấy dữ liệu nguồn thật, bộ lọc ngày/trạng thái/người phụ trách, bảng top sản phẩm/hiệu suất nhân viên và ba biểu đồ.
- Rerun xóa chart cũ trước khi dựng lại; chart bắt đầu từ cột M để không đè vùng dữ liệu KPI và bảng phụ trợ.
