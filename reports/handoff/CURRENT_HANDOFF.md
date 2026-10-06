# Current handoff — KD Web App

## Điểm tiếp tục

- Thời gian: 2026-10-06 10:07:33 +07:00.
- Máy: `DUONGTT-KD`.
- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- Base/HEAD trước commit W01: `65a7c5eb60962040c82cb44d7c78298c00f7c946`.
- W00 đã commit: `65a7c5e fix: correct quote discount formula contract`.
- W01 code đã hoàn tất, kiểm tra diff/secret và được commit cục bộ trong commit chứa handoff này.

## Trạng thái

- G0: PASS.
- G1: PASS.
- G2: BLOCKED_EXTERNAL.
- G3: NOT_RUN.
- G4: BLOCKED_EXTERNAL.
- W1: PASS (`local_verified`).
- Không chạy generator, không chạy `setupDemoKD()`, không ghi Google Sheet UAT và không tạo phiên bản release mới.

## Bằng chứng gần nhất

- Web App: 10/10 PASS.
- Pilot KD: 32/32 PASS.
- Rebuild KD: 4/4 PASS.
- Regression repo: 194/194 PASS, 28 suite.
- Build/check cú pháp: PASS.
- HTTP smoke: 200, 10 KPI, 3 biểu đồ, quan hệ khách hàng/báo giá hợp lệ.

## Lệnh tiếp tục chính xác

```powershell
git switch feature/webapp-kd-bao-gia-don-hang-3.0.0-vi
git status --short --branch
node --test --test-isolation=none apps/web/tests/*.test.mjs
node apps/web/build.mjs
node apps/web/server.mjs
```

Mở `http://127.0.0.1:4173`. Không nâng G2/G3/G4 hoặc gắn `ready_to_sell` nếu chưa có bằng chứng runtime/UAT thật.
