# Hợp đồng công thức Google Sheets

Mọi công thức dùng dấu phẩy theo cú pháp Google Sheets chuẩn và được Apps Script ghi lại cho toàn bộ vùng dữ liệu sau mỗi lần cài, import, update, thêm dòng hoặc restore. Ô trống trả về rỗng; lỗi dữ liệu trả về rỗng hoặc `0` theo ngữ nghĩa chỉ số, không che lỗi validation nguồn.

## 1. Thành tiền trước chiết khấu

- Mục đích: tính giá trị gốc của dòng báo giá.
- Bảng/cột: `CHI_TIET_BAO_GIA.THANH_TIEN_TRUOC_CK` (H).
- Công thức: `=IF(OR(D2="",E2=""),"",D2*E2)`.
- Input/Output: số lượng, đơn giá → VND.
- Vùng/cách lan: `H2:H`, `setFormulaR1C1` đến hết vùng cấp phát.
- Ô trống/lỗi: thiếu input trả rỗng; số âm bị validation chặn.
- Ca biên/expected: `2 × 100.000 = 200.000`.

## 2. Tiền chiết khấu dòng

- Mục đích: tính số tiền giảm theo từng dòng.
- Bảng/cột: `CHI_TIET_BAO_GIA.TIEN_CHIET_KHAU` (I).
- Công thức: `=IF(H2="","",H2*F2)`.
- Input/Output: thành tiền trước giảm, tỷ lệ 0–1 → VND.
- Vùng/cách lan: `I2:I`, lan bằng Apps Script.
- Ô trống/lỗi: H trống trả rỗng; tỷ lệ ngoài 0–1 bị chặn.
- Ca biên/expected: `200.000 × 10% = 20.000`.

## 3. Giá trị sau chiết khấu

- Mục đích: xác định cơ sở tính VAT.
- Bảng/cột: `CHI_TIET_BAO_GIA.GIA_TRI_SAU_CK` (J).
- Công thức: `=IF(H2="","",H2-I2)`.
- Input/Output: H, I → VND.
- Vùng/cách lan: `J2:J`, lan bằng Apps Script.
- Ô trống/lỗi: H trống trả rỗng; kết quả không âm.
- Ca biên/expected: `200.000 - 20.000 = 180.000`.

## 4. Tiền VAT sau chiết khấu

- Mục đích: tính đúng VAT trên cơ sở sau giảm.
- Bảng/cột: `CHI_TIET_BAO_GIA.TIEN_VAT` (K).
- Công thức: `=IF(J2="","",J2*G2)`.
- Input/Output: J, thuế suất 0–1 → VND.
- Vùng/cách lan: `K2:K`, lan bằng Apps Script.
- Ô trống/lỗi: J trống trả rỗng; thuế ngoài 0–1 bị chặn.
- Ca biên/expected: `180.000 × 8% = 14.400`.

## 5. Tổng tiền từng dòng

- Mục đích: tổng sau giảm và VAT.
- Bảng/cột: `CHI_TIET_BAO_GIA.TONG_DONG` (L).
- Công thức: `=IF(J2="","",J2+K2)`.
- Input/Output: J, K → VND.
- Vùng/cách lan: `L2:L`, lan bằng Apps Script.
- Ô trống/lỗi: J trống trả rỗng.
- Ca biên/expected: `180.000 + 14.400 = 194.400`.

## 6. Tổng báo giá theo revision

- Mục đích: cô lập giá trị từng revision, không làm đổi revision cũ.
- Bảng/cột: `BAO_GIA.TONG_THANH_TOAN` (I).
- Công thức: `=IF(A2="","",SUMIFS(CHI_TIET_BAO_GIA!$L:$L,CHI_TIET_BAO_GIA!$B:$B,A2))`.
- Input/Output: mã báo giá revision → VND.
- Vùng/cách lan: `I2:I`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng; không có dòng trả 0.
- Ca biên/expected: tạo R2 không đổi tổng R1.

## 7. Tổng đơn hàng

- Mục đích: tổng giá trị các dòng đơn.
- Bảng/cột: `DON_HANG.TONG_DON_HANG` (G).
- Công thức: `=IF(A2="","",SUMIFS(CHI_TIET_DON_HANG!$G:$G,CHI_TIET_DON_HANG!$B:$B,A2))`.
- Input/Output: mã đơn → VND.
- Vùng/cách lan: `G2:G`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng; không có dòng trả 0.
- Ca biên/expected: tổng bằng tổng dòng liên quan, không lẫn đơn khác.

## 8. Tổng số lượng đã giao

- Mục đích: cộng giao nhiều đợt đúng một lần.
- Bảng/cột: `CHI_TIET_DON_HANG.DA_GIAO` (H).
- Công thức: `=IF(A2="","",SUMIFS(CHI_TIET_GIAO_HANG!$D:$D,CHI_TIET_GIAO_HANG!$C:$C,A2,CHI_TIET_GIAO_HANG!$E:$E,"ĐÃ GIAO"))`.
- Input/Output: mã dòng đơn → số lượng.
- Vùng/cách lan: `H2:H`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng; không có giao trả 0.
- Ca biên/expected: giao 6 và 4 cho tổng 10, không phải 16.

## 9. Số lượng còn phải giao

- Mục đích: theo dõi thiếu giao và chặn vượt.
- Bảng/cột: `CHI_TIET_DON_HANG.CON_PHAI_GIAO` (I).
- Công thức: `=IF(A2="","",MAX(0,D2-H2))`.
- Input/Output: số đặt, đã giao → số còn lại.
- Vùng/cách lan: `I2:I`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng; giao vượt bị validation chặn trước ghi.
- Ca biên/expected: đặt 10, đã giao 6 → còn 4; giao thêm 4 → còn 0.

## 10. Thực thu đã xác nhận

- Mục đích: chỉ ghi nhận tiền đã đối soát.
- Bảng/cột: `DON_HANG.THUC_THU` (H).
- Công thức: `=IF(A2="","",SUMIFS(THANH_TOAN!$D:$D,THANH_TOAN!$B:$B,A2,THANH_TOAN!$F:$F,"ĐÃ XÁC NHẬN"))`.
- Input/Output: mã đơn, thanh toán xác nhận → VND.
- Vùng/cách lan: `H2:H`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng; chờ xác nhận/hủy không cộng.
- Ca biên/expected: thanh toán xác nhận 500.000 → thực thu 500.000.

## 11. Công nợ còn lại

- Mục đích: theo dõi khoản phải thu không âm.
- Bảng/cột: `DON_HANG.CONG_NO` (I).
- Công thức: `=IF(A2="","",MAX(0,G2-H2))`.
- Input/Output: tổng đơn, thực thu → VND.
- Vùng/cách lan: `I2:I`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng.
- Ca biên/expected: đơn 800.000, thực thu 500.000 → 300.000.

## 12. Tỷ lệ chuyển đổi báo giá

- Mục đích: đo tỷ lệ chấp nhận trên báo giá đã quyết định.
- Bảng/cột: `DASHBOARD.GIA_TRI`, chỉ số `TY_LE_CHUYEN_DOI`.
- Công thức: `=IFERROR(COUNTIF(BAO_GIA!$H:$H,"CHẤP NHẬN")/(COUNTIF(BAO_GIA!$H:$H,"CHẤP NHẬN")+COUNTIF(BAO_GIA!$H:$H,"TỪ CHỐI")+COUNTIF(BAO_GIA!$H:$H,"HẾT HẠN")),0)`.
- Input/Output: trạng thái quyết định → tỷ lệ.
- Vùng/cách lan: một ô KPI, Apps Script ghi lại khi cài dashboard.
- Ô trống/lỗi: mẫu số 0 trả 0.
- Ca biên/expected: báo giá đang mở không nằm trong mẫu số.

## 13. Cảnh báo báo giá hết hạn

- Mục đích: phát hiện báo giá đã gửi quá hạn.
- Bảng/cột: `BAO_GIA.CANH_BAO` (J).
- Công thức: `=IF(A2="","",IF(AND(H2="ĐÃ GỬI",G2<TODAY()),"HẾT HẠN",""))`.
- Input/Output: trạng thái, hạn hiệu lực → nhãn.
- Vùng/cách lan: `J2:J`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng.
- Ca biên/expected: đã gửi, hạn hôm qua → `HẾT HẠN`.

## 14. Cảnh báo đơn giao trễ

- Mục đích: phát hiện đơn chưa hoàn tất sau hạn giao.
- Bảng/cột: `DON_HANG.CANH_BAO_GIAO` (J).
- Công thức: `=IF(A2="","",IF(AND(F2<TODAY(),NOT(OR(K2="HOÀN TẤT",K2="HỦY"))),"GIAO TRỄ",""))`.
- Input/Output: hạn giao, trạng thái → nhãn.
- Vùng/cách lan: `J2:J`, lan bằng Apps Script.
- Ô trống/lỗi: mã trống trả rỗng.
- Ca biên/expected: đơn đang giao quá hạn → `GIAO TRỄ`.

## 15. Lợi nhuận gộp dự kiến

- Mục đích: ước tính lãi theo giá vốn danh mục.
- Bảng/cột: `CHI_TIET_DON_HANG.LOI_NHUAN_GOP` (J).
- Công thức: `=IF(A2="","",G2-(D2*IFERROR(VLOOKUP(C2,SAN_PHAM!$A:$F,5,FALSE),0)))`.
- Input/Output: doanh thu dòng, số lượng, giá vốn → VND.
- Vùng/cách lan: `J2:J`, lan bằng Apps Script.
- Ô trống/lỗi: không có giá vốn dùng 0 và được kiểm tra dữ liệu cảnh báo.
- Ca biên/expected: doanh thu 1.000.000, giá vốn tổng 700.000 → 300.000.

## 16. Hiệu suất nhân viên kinh doanh

- Mục đích: tổng hợp doanh số xác nhận theo người phụ trách.
- Bảng/cột: `DASHBOARD.GIA_TRI`, vùng hiệu suất nhân viên.
- Công thức: `=QUERY(DON_HANG!$A:$P,"select L,sum(G) where K <> 'HỦY' group by L label sum(G) 'Doanh số'",1)`.
- Input/Output: người phụ trách, trạng thái, tổng đơn → bảng tổng hợp.
- Vùng/cách lan: vùng riêng dưới KPI; chart đặt ngoài vùng dữ liệu.
- Ô trống/lỗi: nhân viên không có đơn không sinh dòng; query lỗi được validator báo.
- Ca biên/expected: thay đổi fixture đơn hàng làm bảng và chart thay đổi.

## Dashboard động và bộ lọc

Dashboard còn hiển thị giá trị báo giá đã gửi, giá trị đơn xác nhận, doanh thu theo thời gian, thực thu, công nợ, đơn giao trễ, đơn giao thiếu, top sản phẩm, doanh số theo kênh và xu hướng báo giá → đơn hàng. Tất cả dùng `SUMIFS`, `COUNTIFS`, `QUERY` hoặc vùng nguồn trực tiếp; Apps Script tạo filter thời gian, trạng thái và người phụ trách, đồng thời đặt chart bắt đầu từ cột H để không đè vùng KPI/bộ lọc.
