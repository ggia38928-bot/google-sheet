# Current handoff — WEBAPP-KD-W01

## Trạng thái hiện tại

- Project root: repository đang mở tại `D:\google sheet` (đường dẫn chỉ ghi trong handoff, không hard-code vào source).
- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- HEAD trước commit đóng W01: `438c0effdd75af5f41492e6cbdf5607b918984f7`.
- Upstream: `origin/feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- Task ID: `WEBAPP-KD-W01`.
- W1: `PASS (local_verified, browser-reviewed)`.
- G0: PASS; G1: PASS; G2: BLOCKED_EXTERNAL; G3: NOT_RUN; G4: BLOCKED_EXTERNAL.
- Không mở W02, không chạy generator, không ghi Google Sheet UAT, không merge và không tạo Pull Request.

## Phạm vi đã đóng

- Khắc phục công nợ khách hàng tính nhầm đơn hủy.
- Chặn thanh toán và giao hàng cho đơn đã hủy ở service, API và UI.
- Kiểm tra trạng thái báo giá trước cập nhật.
- Escape dữ liệu động trước khi render; có test payload XSS đối kháng.
- Integration test kiểm tra static asset, API GET và hai POST bị chặn cho đơn hủy.
- Sửa responsive mobile cho Dashboard; KPI và bộ lọc dùng một cột, bảng rộng cuộn trong container.
- Edge headless đã render đủ sáu route ở desktop 1440 px và mobile 500 px; không có trang trắng, nhãn chính bằng tiếng Việt, không gọi Google Sheet production.

## File W01 đã sửa

- `apps/web/build.mjs`
- `apps/web/lib/services/commercial-service.cjs`
- `apps/web/package.json`
- `apps/web/public/app.js`
- `apps/web/public/security.js`
- `apps/web/public/styles.css`
- `apps/web/server.mjs`
- `apps/web/tests/web-app.test.mjs`
- `reports/checkpoints/WEBAPP_KD_W01.md`
- `reports/handoff/CURRENT_HANDOFF.md`

## File ngoài phạm vi và generated

- `build_exact_catalog.py`: ngoài phạm vi, untracked, giữ nguyên; không sửa/xóa/stage/commit.
- `apps/web/dist/**`: build output ignored.
- `reports/local/**`: ảnh kiểm tra trình duyệt ignored.
- Không có file W01 đang viết dở.

## Lệnh và kết quả thật

```powershell
node --test --test-isolation=none apps/web/tests/*.test.mjs
# PASS 13/13; fail 0; skipped 0

node --check apps/web/server.mjs
# PASS

node --check apps/web/public/app.js
# PASS

node apps/web/build.mjs
# PASS; dist/index.html, dist/app.js, dist/security.js, dist/styles.css

git diff --check
# PASS
```

Crashpad của runtime Antigravity ghi cảnh báo `CreateFile: Access is denied` sau lệnh Node, nhưng cả bốn lệnh đều trả exit code 0.

## Lỗi còn lại và bước tiếp theo

- Không có lỗi code/test/build W01 đang mở.
- G2 vẫn `BLOCKED_EXTERNAL`; G3 `NOT_RUN`; G4 `BLOCKED_EXTERNAL`.
- Bước tiếp theo duy nhất: không bắt đầu W02 cho tới khi người dùng yêu cầu rõ ràng trong lượt mới.

ACTIVE_AGENT=NONE
NEXT_AGENT=CODEX
STATUS=W01_CLOSED_LOCAL_VERIFIED
