# GSHEET-KD-W02 — VERIFIED

Trạng thái: VERIFIED: PASS local (G0/G1 PASS); G2 `BLOCKED_EXTERNAL`.

## Kết quả kiểm thử thực tế

- Product: `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs` → 44/44 PASS.
- Rebuild: `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs` → 4/4 PASS.
- W01 regression: `node --test --test-isolation=none apps/web/tests/*.test.mjs` → 13/13 PASS.
- Repository regression: `node --test --test-isolation=none tests/*.test.mjs` → 194/194 PASS.
- `git diff --check`: PASS (0 lỗi khoảng trắng / format).
- Checksum: `releases/KD_BAO_GIA_DON_HANG/3.0.0-vi/CHECKSUMS.sha256` đã được cập nhật và khớp 100%.

## Ranh giới môi trường (Environment Boundary)

- G2 giữ `BLOCKED_EXTERNAL`: Phiên hiện tại không có Apps Script API, clasp hoặc browser write để cài đặt và thực thi trigger/protection trực tiếp trên Google Sheets live UAT.
- Không mở `WEBAPP-KD-W03` cho đến khi G2 được chạy và xác nhận trên bản sao UAT.
