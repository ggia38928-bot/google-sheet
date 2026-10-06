# Current handoff — GSHEET-KD-W02

## Trạng thái

- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- HEAD nền: `c59b5821d1e7a135ee066bd73751db943273cdda`.
- READY: PASS.
- BUILT: PASS local.
- REVIEWED: PASS (GO; 0 finding P0/P1).
- VERIFIED: PASS local (G0/G1 PASS); G2 `BLOCKED_EXTERNAL`.
- WEBAPP-KD-W03: chưa mở.

## File đã sửa

- `.dots/work-items/GSHEET-KD-W02/*`
- `packages/core-engine/src/kd_bao_gia_don_hang.js`
- `products/KD_BAO_GIA_DON_HANG/README.md`
- `products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs`
- `products/KD_BAO_GIA_DON_HANG/fixtures/demo_data.json`
- `products/KD_BAO_GIA_DON_HANG/formulas/FORMULA_CONTRACT.md`
- `products/KD_BAO_GIA_DON_HANG/schema/schema.json`
- `products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs`
- `releases/KD_BAO_GIA_DON_HANG/3.0.0-vi/*` (CHECKSUMS.sha256, FORMULA_CONTRACT.md, README.md, TEST_RESULTS.md, manifest.json, schema.json, setup.gs, setup_clean.gs, setup_demo.gs)
- `governance/BACKLOG.md`
- `reports/checkpoints/GSHEET_KD_W02.md`
- `reports/handoff/CURRENT_HANDOFF.md`

## File ngoài phạm vi

- `build_exact_catalog.py` là file untracked ngoài phạm vi, giữ nguyên, tuyệt đối không sửa, stage hoặc xóa.

## Lệnh và test thực tế

- `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs` → 44/44 PASS.
- `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs` → 4/4 PASS.
- `node --test --test-isolation=none apps/web/tests/*.test.mjs` → 13/13 PASS.
- `node --test --test-isolation=none tests/*.test.mjs` → 194/194 PASS.
- `git diff --check` → PASS (0 lỗi khoảng trắng / format).
- Checksum SHA256 release 3.0.0-vi khớp tuyệt đối 100%.

## Kết quả sửa chữa P0/P1

1. P0 (Paste nhiều ô): Bổ sung snapshot ẩn `__KS_*`, `syncControlSnapshotsKD_` và `restoreControlledRangeKD_` tự động hoàn tác khi dán nhiều ô trên các tab kiểm soát. Đã đồng bộ giữa `installer.gs` và `setup.gs`.
2. P1 (Đơn giá báo giá): Đã chốt đơn giá cố định (`chotDonGiaBaoGiaKD_`) khi báo giá rời khỏi `NHÁP`; `applyQuoteUnitPricesKD_` bảo toàn đơn giá đã chốt; `taoRevisionBaoGiaKD` sao chép đơn giá; `seedDemoKD_` điền giá cố định.
3. P1 (Validation thanh toán / giao hàng): Siết chặt ràng buộc giao hàng cùng đơn; chặn thanh toán đơn hủy; kiểm tra số tiền > 0; chặn thanh toán vượt tổng giá trị đơn hàng; tích hợp `validatePaymentRulesKD_`.

## Bước tiếp theo

1. Chạy xác minh G2 trên bản sao Google Sheets UAT với tài khoản tester thật.
2. Chỉ mở `WEBAPP-KD-W03` sau khi G2 PASS.

ACTIVE_AGENT=NONE
NEXT_AGENT=CODEX
NEXT_TASK=GSHEET-KD-W02-G2-UAT
STATUS=VERIFIED
