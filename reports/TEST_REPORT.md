# BÁO CÁO KIỂM THỬ TOÀN DIỆN (AUTOMATED TEST REPORT)
**Hệ thống:** MINH TEMPLATES FACTORY  
**Cập nhật:** 15:13:44 12/9/2026  
**Môi trường thực thi:** Node.js v24.14.0 trên Windows  
**Đường dẫn gốc:** `D:\google sheet`  

---

## 1. TỔNG QUAN KẾT QUẢ KIỂM THỬ
- **Tổng số ca kiểm thử (Total Tests):** 179
- **Số ca vượt qua (Passed):** 179 (100%)
- **Số ca thất bại (Failed):** 0 (0%)
- **Thời gian thực thi:** ~540 ms
- **Độ bao phủ SKU:** 22/22 SKU đã triển khai (F01, F02, F05, F17, F18, F19, F20, F21, F24, F30, F34, F48, F12, F13, F32, F38, F09, F10, F28, F07, F08, F26)
- **Tổng số tệp cài đặt độc lập:** 110 tệp Apps Script (22 SKU × 5 Tiers) + 1 master bundle (`all_installers.gs`)

---

## 2. CHI TIẾT CÁC BỘ KIỂM THỬ (TEST SUITES)

### Suite 1: Batch 1 Business Formulas (`tests/batch1_formulas.test.mjs`) — 11 Tests PASS
1. **F17**: Số dư tài khoản chính xác theo Opening + Thu - Chi (chỉ POSTED).
2. **F17**: Chuyển khoản nội bộ bảo toàn tổng tiền hệ thống, không sinh doanh thu/chi phí giả.
3. **F17**: Tính Runway an toàn khi burn dương và khi dòng tiền thặng dư (Infinity handling).
4. **F18**: Tồn cuối kỳ = Tồn đầu + Nhập - Xuất ± Điều chỉnh.
5. **F18**: Chuyển kho nội bộ bảo toàn tổng lượng hàng tồn.
6. **F18**: Phân loại trạng thái tồn kho (HẾT HÀNG, CẦN NHẬP, ĐỦ TỒN).
7. **F05**: Win Rate chuẩn thương mại: Mẫu số chỉ tính deal đã đóng (WON + LOST).
8. **F05**: Xử lý an toàn khi chưa có deal đóng nào (mẫu số = 0).
9. **F24**: Công nợ phải thu và phải trả giảm trừ chính xác, không âm.
10. **F24**: Lợi nhuận gộp ước tính = Doanh số - Giá vốn hàng xuất bán (COGS).
11. **F24**: Tính toàn vẹn luồng dữ liệu khép kín (Đơn bán -> Thu tiền -> Số dư quỹ).

### Suite 2: Batch 2 Business Formulas & CODEX Criteria (`tests/batch2_formulas.test.mjs`) — 15 Tests PASS
1. **F19**: Tính đơn giá sau chiết khấu dòng và thành tiền chuẩn xác.
2. **F19**: Thẩm định Acceptance Criteria Catalog (2x100k, giảm 10%, VAT 8% -> 194.400đ).
3. **F19**: Bảo toàn số liệu giữa các phiên bản chào hàng (Revisions).
4. **F19**: Win Rate chuẩn thương mại (Chỉ xét deal đã chốt ACCEPTED hoặc REJECTED).
5. **F20**: Tính tổng thu khách và doanh thu thuần sau trừ phí sàn.
6. **F20**: Thẩm định Acceptance Criteria Catalog (Giao từng đợt 6 rồi 4 -> tồn chỉ giảm 10).
7. **F20**: Thẩm định Acceptance Criteria Catalog (Công nợ COD đơn hàng còn lại chính xác).
8. **F20**: Thẩm định Acceptance Criteria Catalog (Hủy đơn chưa giao không giảm tồn kho).
9. **F21**: Client sửa payload để ghi bảng ngoài quyền phải bị từ chối (RBAC Security).
10. **F21**: Đổi parent dropdown xóa/đánh lỗi child không hợp lệ (Cascading Dropdown Integrity).
11. **F21**: Formula lặp tham chiếu bị phát hiện và chặn (Circular Formula Detection).
12. **F02**: Thẩm định Acceptance Criteria Catalog (Hai việc trọng số 1 và 3, tiến độ 100% và 0% -> tiến độ 25%).
13. **F02**: Tiến độ có trọng số dự án tổng hợp đa nhiệm vụ chính xác.
14. **F02**: Đánh giá trạng thái hạn công việc (ĐÚNG HẠN vs QUÁ HẠN).
15. **F02**: Tính điểm KPI quy đổi theo chiều đo lường (Thuận & Nghịch).

### Suite 3: Batch 3 Business Formulas & CODEX Criteria (`tests/batch3_formulas.test.mjs`) — 14 Tests PASS
1. **F30**: Thẩm định Acceptance Criteria CODEX: Hóa đơn 1tr, phân bổ 400k, credit 100k -> còn lại 500k.
2. **F30**: Tiền thu chưa phân bổ hiển thị riêng, không tự động gán vào hóa đơn đầu tiên.
3. **F30**: Chặn phân bổ vượt số tiền của phiếu thanh toán hoặc vượt số dư hóa đơn.
4. **F30**: Thanh toán nhiều kỳ không nhân đôi khoản gốc và bảo toàn số dư công nợ.
5. **F30**: Phân loại tuổi nợ Aging chuẩn xác (0 ngày, 1-30 ngày, 31-60 ngày, >90 ngày quá hạn).
6. **F34**: Thẩm định Acceptance Criteria CODEX: Budget 100tr, actual 30, committed 20 -> khả dụng 50 triệu.
7. **F34**: Khi khoản cam kết 20tr giải ngân: giảm committed và tăng actual, không trừ kép (vẫn khả dụng 50tr).
8. **F34**: Cảnh báo vượt ngân sách khi Actual + Committed > Approved Budget.
9. **F34**: Baseline đã khóa (LOCKED) không bị ghi đè, điều chỉnh bắt buộc tạo version mới (REVISED).
10. **F48**: Thẩm định Acceptance Criteria CODEX: Bán chịu 1tr ghi nhận Doanh thu dồn tích (1tr), Cash Inflow = 0.
11. **F48**: Thẩm định Acceptance Criteria CODEX: Tiền vay ngân hàng tăng Cash Financing nhưng không tính vào Doanh thu.
12. **F48**: Thẩm định Acceptance Criteria CODEX: Bảng mapping thiếu tài khoản phát hiện và báo lỗi `MISSING_MAPPING_ERROR` thay vì bỏ qua âm thầm.
13. **F48**: Lợi nhuận gộp và Lợi nhuận thuần hoạt động kinh doanh tính chính xác.
14. **F48**: Cân đối dòng tiền trực tiếp: Số dư đầu kỳ + Net Cash Flow = Số dư cuối kỳ.

### Suite 4: Batch 4 HR & Timekeeping Formulas & CODEX Criteria (`tests/batch4_formulas.test.mjs`) — 38 Tests PASS
1. **F12**: Thẩm định Active Headcount loại trừ nhân sự đã thôi việc trước ReportDate hoặc TERMINATED.
2. **F12**: Lịch sử luân chuyển phòng ban/vị trí được lưu vết trọn vẹn trong EmploymentEvents.
3. **F12**: RBAC - Nhân viên STAFF bị chặn tuyệt đối khi truy cập bảng Lương thưởng (Compensation).
4. **F12**: Lọc hợp đồng lao động sắp hết hạn trong 30 ngày chuẩn xác.
5. **F13**: Thẩm định 1 ứng viên nộp 2 vị trí tính là 1 ứng viên và 2 hồ sơ ứng tuyển riêng biệt.
6. **F13**: Tỷ lệ nhận Offer (Offer Acceptance Rate) bọc `IFERROR(..., 0)` an toàn chống `#DIV/0!`.
7. **F13**: Phễu tuyển dụng liên tục theo 5 giai đoạn (Applied -> Screening -> Interview -> Offer -> Hired).
8. **F32**: Thẩm định ca đêm qua 24h (22:00 -> 06:00 trừ 60p nghỉ = 7.0 giờ, không âm).
9. **F32**: Chặn nhân viên check-in 2 lần trong cùng một ngày làm việc (`DUPLICATE_CHECKIN`).
10. **F32**: Tính giờ làm thêm (OT) chuẩn xác khi vượt định mức ca chuẩn.
11. **F38**: Thẩm định NETWORKDAYS từ Thứ 6 đến Thứ 2 không ngày lễ = 2 ngày làm việc.
12. **F38**: Thẩm định 2 ca nghỉ nửa ngày tính thành 1 ngày nguyên vẹn (0.5 + 0.5 = 1.0).
13. **F38**: Thẩm định duyệt lại đơn đã duyệt không trừ trùng lặp số dư phép năm (idempotency).
14. **F38**: Công thức số dư phép năm tổng hợp: Opening + Accrued - Used.
15. **Formula Gate (4 tests)**: Kiểm tra tĩnh toàn bộ công thức chứa phép chia của F12, F13, F32, F38 đều được bọc `IFERROR(..., 0)`.
16. **AST Check (20 tests)**: Toàn bộ 20 installers của Batch 04 (4 SKU × 5 Tiers) đạt 100% cú pháp JavaScript ECMAScript hợp lệ.

### Suite 5: Batch 5 Customer Services & Booking Formulas & CODEX Criteria (`tests/batch5_formulas.test.mjs`) — 29 Tests PASS
1. **F09**: Thẩm định hai cuộc họp giao nhau chặn đặt cùng phòng họp.
2. **F09**: Cuộc họp kết thúc 10:00 cho phép cuộc sau bắt đầu 10:00 khi buffer=0.
3. **F09**: Khi buffer=15 phút, cuộc họp sau lúc 10:10 bị chặn vì chưa hết thời gian chuẩn bị phòng.
4. **F09**: Chặn trùng lịch người tham dự (Attendee) trong cùng khung giờ.
5. **F10**: Thẩm định khoảng [check-in, check-out) không tính đêm ngày trả phòng.
6. **F10**: Thẩm định tiền đặt cọc (Deposit) không bị cộng lần hai vào tổng thu.
7. **F10**: Thẩm định booking hủy không giữ phòng và chặn overbooking thành công.
8. **F10**: Công thức ADR (Average Daily Rate) và xử lý an toàn khi số đêm bán bằng 0.
9. **F28**: Thẩm định hai lịch cùng provider giao nhau không cùng được xác nhận.
10. **F28**: Thẩm định hủy lịch không tăng doanh thu dịch vụ.
11. **F28**: Tính tỷ lệ khách bỏ hẹn (No-Show Rate) bọc `IFERROR(..., 0)` an toàn chống `#DIV/0!`.
12. **Formula Gate (3 tests)**: Kiểm tra tĩnh toàn bộ công thức chứa phép chia của F09, F10, F28 đều được bọc `IFERROR(..., 0)`.
13. **AST Check (15 tests)**: Toàn bộ 15 installers của Batch 05 (3 SKU × 5 Tiers) đạt 100% cú pháp JavaScript ECMAScript hợp lệ.

### Suite 6: Batch 6 Contracts, Documents & Education Formulas & CODEX Criteria (`tests/batch6_formulas.test.mjs`) — 28 Tests PASS
1. **F07**: Thẩm định Giá trị hiện hành = Gốc + Phụ lục đã duyệt (loại bỏ phụ lục chưa duyệt) (CODEX Criteria).
2. **F07**: Thẩm định Mốc nghiệm thu và thanh toán độc lập (CODEX Criteria).
3. **F07**: Cảnh báo hợp đồng sắp hết hiệu lực trong vòng 30 ngày.
4. **F08**: Thẩm định Cảnh báo số văn bản trùng trong cùng sổ/năm (CODEX Criteria).
5. **F08**: Thẩm định Phân cấp bảo mật theo vai trò (CODEX Criteria).
6. **F08**: Theo dõi chỉ đạo và phát hiện việc quá hạn.
7. **F26**: Thẩm định Tính ngày kết thúc 4 buổi học (Thứ 2 & 4) khi có 1 ngày nghỉ xen kẽ (CODEX Criteria).
8. **F26**: Thẩm định Buổi hủy không trừ credit học viên (CODEX Criteria).
9. **F26**: Thẩm định Chặn điểm danh trùng cùng học sinh/buổi học (CODEX Criteria).
10. **F26**: Quản lý học phí và tính công nợ phải thu chuẩn xác.
11. **Formula Gate (3 tests)**: Toàn bộ công thức KPI/phân tích chứa phép chia của F07, F08, F26 đều được bọc `IFERROR(..., 0)`.
12. **AST Check (15 tests)**: Toàn bộ 15 installers của Batch 06 (3 SKU × 5 Tiers) đạt 100% cú pháp JavaScript ECMAScript hợp lệ.

### Suite 7: Core Engine Architecture & AST Validation (`tests/core_engine.test.mjs`) — 44 Tests PASS
1. **specValidator (5 tests)**: Thẩm định hợp lệ, từ chối cấu hình rỗng, thiếu SKU/Name/Tables/Dashboard.
2. **tierTransformer (6 tests)**: Biến đổi chính xác theo 5 tầng thương mại (Free Demo, Clean, Basic, Pro, Business).
3. **gasEmitter & syntaxChecker (3 tests)**: Thẩm định cú pháp ECMAScript AST cho mã sinh ra, phát hiện lỗi cú pháp.
4. **Biên dịch End-to-End cho 22 SKU (22 tests)**:
   - F01, F05, F17, F18, F24, F19, F20, F21, F02, F30, F34, F48, F12, F13, F32, F38, F09, F10, F28, F07, F08, F26: Mỗi SKU sinh đủ 5 gói tier độc lập, 100% cú pháp JavaScript hợp lệ.
5. **pathResolver & CLI Generator Options (8 tests)**: Phân giải thư mục root, output, đồng bộ an toàn, cờ CLI `--all`, `--sku`, `--batch`, `--dry-run`, `--strict`.

---

## 3. KẾT LUẬN & CHỨNG THỰC
Toàn bộ 22 SKU đã triển khai đều vượt qua 100% các tiêu chuẩn kiểm thử kỹ thuật và thương mại với bằng chứng thực thi cụ thể.
