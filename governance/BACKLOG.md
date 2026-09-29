# Backlog quản trị — Minh Templates 3.0.0-vi

## Hạng mục đã hoàn thành
- [x] **KD_BAO_GIA_DON_HANG G0**: Đồng bộ Catalog, PRD, DOMAIN_SPEC, FORMULA_CONTRACT, manifest, schema 13 bảng và demo fixtures tiếng Việt.
- [x] **KD_BAO_GIA_DON_HANG G1**: Core Engine cục bộ, oracle công thức (194.400, 800.000/500.000/300.000, giao 6+4=10), idempotency chuyển báo giá, RowVersion, backup/clean/restore; 26 test hẹp + 4 rebuild + 194 regression PASS.
- [x] **Google Sheets API**: UAT riêng tư có đúng 50 bản ghi, 0 lỗi công thức, 318 validation, 3 chart và mutation thanh toán/KPI hoàn tác sạch.

## Hạng mục tiếp nối (Cần tài khoản ngoài & phê duyệt)
- [ ] **G2 (BLOCKED_EXTERNAL)**: Sheets API đã kiểm chứng; còn cài/chạy Apps Script thật, rerun, Clean/Demo, backup/restore, menu/trigger và kiểm tra quyền tài khoản kép.
- [ ] **G3 (AppSheet Thật)**: Cấu hình AppSheet Creator Console, data binding, view UX, actions, bot thông báo và Security Filters (khi có App ID thật).
- [ ] **G4 (Sẵn sàng thương mại)**: UAT người dùng cuối, ảnh/log bằng chứng đầy đủ, rà soát pháp lý bản quyền và phê duyệt xuất xưởng.
