# GSHEET-KD-W02 — REVIEWED

Trạng thái: REVIEWED: PASS (GO; không còn P0/P1).

## Bảng đối chiếu sửa chữa (Repair Matrix)

| Finding ID | Mức độ | File/vị trí | Trạng thái | Bằng chứng giải quyết | Test chứng minh |
|---|---|---|---|---|---|
| F-P0-01 | P0 | `apps-script/installer.gs`, `releases/.../setup.gs` | RESOLVED | Đã bổ sung cơ chế snapshot kiểm soát `__KS_*`, `syncControlSnapshotsKD_`, và hàm hoàn tác tự động `restoreControlledRangeKD_` khi phát hiện paste nhiều ô trên các tab nghiệp vụ `KD_CONTROLLED_TABS`. Đã đồng bộ 100% giữa source và release. | Test xác minh hàm hoàn tác snapshot và danh sách `KD_CONTROLLED_TABS` trong Apps Script context. |
| F-P1-01 | P1 | `apps-script/installer.gs`, `releases/.../setup.gs`, `core-engine/.../kd_bao_gia_don_hang.js`, `formulas/FORMULA_CONTRACT.md` | RESOLVED | Đã chốt đơn giá báo giá (`chotDonGiaBaoGiaKD_`) khi báo giá rời khỏi trạng thái `NHÁP` vào workflow; `applyQuoteUnitPricesKD_` bảo toàn đơn giá đã chốt, không ghi đè công thức VLOOKUP; `taoRevisionBaoGiaKD` sao chép đơn giá từ revision nguồn; `seedDemoKD_` điền giá trị đơn giá cố định. | Test `Chốt đơn giá báo giá bảo vệ lịch sử khi catalog sản phẩm đổi giá` PASS. |
| F-P1-02 | P1 | `core-engine/.../kd_bao_gia_don_hang.js`, `apps-script/installer.gs`, `releases/.../setup.gs` | RESOLVED | Đã siết chặt validation: 1) Dòng giao hàng phải cùng đơn hàng với phiếu giao; 2) Đơn hủy không được phát sinh thanh toán; 3) Số tiền thanh toán và số lượng giao phải > 0; 4) Tổng thanh toán đã xác nhận không được vượt tổng giá trị đơn hàng (`validatePaymentRulesKD_` tích hợp vào hệ thống kiểm tra và trigger). | 4 test validation chuyên biệt về giao hàng và thanh toán PASS. |

Tất cả các phát hiện P0 và P1 từ các đợt review trước đó đã được giải quyết dứt điểm. Gate REVIEWED chính thức đạt yêu cầu GO.
