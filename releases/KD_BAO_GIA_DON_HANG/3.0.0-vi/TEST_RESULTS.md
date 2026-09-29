# Kết quả kiểm thử release

- `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs` → 26/26 PASS.
- `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs` → 4/4 PASS.
- Regression `node --test --test-isolation=none tests/*.test.mjs` được ghi tại evidence cùng commit.
- Google Sheet thật: đúng 50 bản ghi nghiệp vụ, 0 lỗi công thức, 318 ô validation và 3 biểu đồ.
- Mutation có hoàn tác: TT-002 xác nhận tạm làm thực thu 1.400.000 ₫ → 1.700.000 ₫ và công nợ 2.300.000 ₫ → 2.000.000 ₫; hoàn tác trở về expected.
- Apps Script live installer/rerun/Clean/Restore: chưa chạy vì không có Apps Script API, clasp hoặc browser write; G2 giữ `BLOCKED_EXTERNAL`.
