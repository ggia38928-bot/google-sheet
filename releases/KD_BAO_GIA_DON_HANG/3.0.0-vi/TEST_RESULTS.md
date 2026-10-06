# Kết quả kiểm thử release

Ngày xác minh local: 2026-10-06.

- `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs` → 38/38 PASS.
- `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs` → 4/4 PASS.
- `node --test --test-isolation=none apps/web/tests/*.test.mjs` → 13/13 PASS.
- `node --test --test-isolation=none tests/*.test.mjs` → 194/194 PASS; generator F17 chỉ chạy ở dry-run do regression nội bộ, không ghi artifact.
- Fixture giữ đúng 50 bản ghi và bổ sung giao hai đợt 6 + 4 có khóa ngoại hợp lệ.
- Workflow báo giá/đơn hàng kiểm tra transition, vai trò và RowVersion; audit không lưu dữ liệu khách hàng nhạy cảm.
- Backup chia chunk 40.000 ký tự, kiểm thứ tự/checksum và restore tái dựng công thức, validation, protection, Dashboard.
- Dashboard source có 12 KPI, 3 biểu đồ và bộ lọc ngày/trạng thái/người phụ trách.
- Hotfix W00 vẫn PASS: H là tỷ lệ 0–1, K = J × H và thanh toán không tham gia tổng báo giá.
- Apps Script live installer/rerun/Clean/Demo/Restore trên bản sao UAT chưa chạy trong môi trường này; G2 giữ `BLOCKED_EXTERNAL`.
