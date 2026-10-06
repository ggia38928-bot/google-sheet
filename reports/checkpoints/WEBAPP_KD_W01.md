# Checkpoint WEBAPP-KD-W01

- Thời gian: 2026-10-06 10:07:33 +07:00 (Asia/Bangkok).
- Máy: `DUONGTT-KD`; workspace VS Code trên Windows/PowerShell.
- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- Base W01: `65a7c5eb60962040c82cb44d7c78298c00f7c946` (commit hotfix W00).
- Base trước W00: `bf131cc8ea5cbc33bc3bb44a9c76e621786c0e63`.
- HEAD lúc ghi checkpoint: `65a7c5eb60962040c82cb44d7c78298c00f7c946`; thay đổi W01 chưa commit.
- Google UAT gốc: không đọc/ghi trong work unit này; không chạy `setupDemoKD()` hay generator.

## Kết quả đã hoàn thành

- WEBAPP-KD-W00 đã commit riêng tại `65a7c5e`: sửa source of truth của cột tỷ lệ chiết khấu, validation, metadata cài đặt, release 3.0.0-vi và test khóa regression.
- Tạo Web App tiếng Việt trong `apps/web` theo modular monolith không phụ thuộc ngoài: repository, domain service, view-model dashboard, HTTP API và giao diện responsive.
- Tái sử dụng trực tiếp `packages/core-engine/src/kd_bao_gia_don_hang.js` và fixture 50 bản ghi của sản phẩm; không sao chép lại phép tính domain.
- Có dashboard 10 KPI, 3 biểu đồ, lọc ngày/trạng thái; danh sách và hồ sơ khách hàng; danh sách/tạo/sửa/chi tiết báo giá; chuyển đơn idempotent; đơn hàng; giao hàng; thanh toán/công nợ; tìm kiếm và phân trang.
- Có trạng thái loading, empty và error; toàn bộ nhãn giao diện chính bằng tiếng Việt.
- API chạy thật tại localhost và trả HTTP 200; kiểm tra thực tế ghi nhận 10 KPI, 3 biểu đồ và hồ sơ KH-001 có 2 báo giá liên quan.

## Kiến trúc và môi trường

Repo chưa có framework Web App. Brief ưu tiên Next.js, nhưng máy chỉ có Node.js `v24.20.0`; không có `npm`, `npx`, `corepack`, `pnpm` hoặc `yarn`. Theo fallback của brief, ứng dụng dùng Node.js built-in, có build/start/test thật và không tải dependency. Không tuyên bố đây là bản Next.js.

Các skill `app-engineering-orchestrator`, `minh-template-governance` và `resume-minh-templates` không tồn tại trong skill catalog/filesystem phiên này. `universal-agent-prompt-engine` đã được áp dụng. Công việc được thực hiện tuần tự bởi một writer.

## File W01 đã tạo/sửa

- `.gitignore`
- `apps/web/package.json`
- `apps/web/README.md`
- `apps/web/build.mjs`
- `apps/web/server.mjs`
- `apps/web/lib/repositories/fixture-repository.cjs`
- `apps/web/lib/services/commercial-service.cjs`
- `apps/web/lib/view-models/dashboard.cjs`
- `apps/web/public/index.html`
- `apps/web/public/app.js`
- `apps/web/public/styles.css`
- `apps/web/tests/web-app.test.mjs`
- `reports/checkpoints/WEBAPP_KD_W01.md`
- `reports/handoff/CURRENT_HANDOFF.md`

`apps/web/dist/` là output build và đã được ignore.

## Lệnh và kết quả thực tế

- `node --check apps/web/server.mjs`: PASS.
- `node --check apps/web/public/app.js`: PASS.
- `node apps/web/build.mjs`: PASS, sinh ba artifact trong `apps/web/dist/`.
- `node --test --test-isolation=none apps/web/tests/*.test.mjs`: 10/10 PASS.
- `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs`: 32/32 PASS.
- `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs`: 4/4 PASS.
- `node --test --test-isolation=none tests/*.test.mjs`: 194/194 PASS trong 28 suite.
- HTTP smoke test trên cổng 4174: trang chủ 200; API dashboard 10 KPI/3 biểu đồ; API hồ sơ khách hàng trả đúng quan hệ.

## Gate

| Gate | Trạng thái | Bằng chứng |
|---|---|---|
| G0 | PASS | Schema, fixture 50 bản ghi, công thức và release parse/checksum hợp lệ. |
| G1 | PASS | Engine và toàn bộ local tests PASS. |
| G2 | BLOCKED_EXTERNAL | Không chạy Apps Script runtime hoặc ghi Sheet UAT gốc. |
| G3 | NOT_RUN | Không chạy AppSheet runtime thật. |
| G4 | BLOCKED_EXTERNAL | Chưa UAT thương mại trên tài khoản/người dùng thật; không `ready_to_sell`. |
| W1 | PASS (local_verified) | Build, start, HTTP smoke test và 10 test Web App PASS. |

## Việc còn lại / lệnh tiếp tục

Không còn hạng mục code bắt buộc của W01 trong phạm vi local. Để chạy lại:

```powershell
git switch feature/webapp-kd-bao-gia-don-hang-3.0.0-vi
node --test --test-isolation=none apps/web/tests/*.test.mjs
node apps/web/build.mjs
node apps/web/server.mjs
```

Sau đó mở `http://127.0.0.1:4173`. G2/G3/G4 chỉ được đổi trạng thái khi có phiên runtime/UAT thật riêng và bản sao kiểm thử được phép sử dụng.
