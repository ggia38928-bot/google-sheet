# Current handoff — KD Web App

## Task hiện tại

- Work unit: `WEBAPP-KD-W01` — hoàn thiện vertical slice Web App tiếng Việt cho `KD_BAO_GIA_DON_HANG`.
- Hotfix tiền đề `WEBAPP-KD-W00` đã hoàn tất trong commit `65a7c5e`.
- W01 đã hoàn tất ở mức `local_verified` trong commit `13ec79b50955810494add960a88068df7a5a8b48`.
- Checkpoint được chốt lúc `2026-10-06 10:47:56 +07:00` trên máy `DUONGTT-KD`.
- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`, đang đồng bộ với upstream cùng tên trước khi cập nhật file handoff này.
- Không chạy generator, không chạy `setupDemoKD()`, không ghi Google Sheet UAT gốc và không mở task mới.

## File đã sửa trong lát cắt

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
- `reports/checkpoints/WEBAPP_KD_W00.md`
- `reports/checkpoints/WEBAPP_KD_W01.md`
- `reports/handoff/CURRENT_HANDOFF.md`

Trong lượt chốt hiện tại, chỉ `reports/handoff/CURRENT_HANDOFF.md` được cập nhật. Output `apps/web/dist/` do build sinh ra đã được ignore và không commit.

## File chưa xong

- Không có file code hoặc tài liệu nào đang viết dở trong phạm vi W01.
- Không có thay đổi ngoài phạm vi cần giữ lại.

## Lệnh đã chạy trong lượt chốt

```powershell
git rev-parse --show-toplevel
git status --short --branch
git log -3 --oneline --decorate
node --test --test-isolation=none apps/web/tests/*.test.mjs
node --check apps/web/server.mjs
node --check apps/web/public/app.js
node apps/web/build.mjs
```

## Kết quả test thật

- Test Web App hẹp: **PASS 10/10**, fail 0, skipped 0.
- Syntax `apps/web/server.mjs`: **PASS**.
- Syntax `apps/web/public/app.js`: **PASS**.
- Build: **PASS**, sinh `dist/index.html`, `dist/app.js`, `dist/styles.css`.
- Kết quả regression gần nhất của cùng lát cắt: pilot KD 32/32 PASS; rebuild KD 4/4 PASS; toàn repo 194/194 PASS trong 28 suite.
- Dòng cảnh báo Crashpad `CreateFile: Access is denied` xuất hiện sau một số tiến trình Node đóng gói trong Antigravity, nhưng mọi lệnh trên trả exit code 0 và không làm test/build thất bại.

## Lỗi và giới hạn còn lại

- Không có lỗi code/test/build đang mở.
- Môi trường không có `npm`, `npx`, `corepack`, `pnpm` hoặc `yarn`; ứng dụng hiện dùng Node.js built-in theo fallback đã ghi trong checkpoint.
- G2 vẫn `BLOCKED_EXTERNAL`: chưa chạy Apps Script runtime thật và không ghi Sheet UAT gốc.
- G3 vẫn `NOT_RUN`: chưa chạy AppSheet runtime thật.
- G4 vẫn `BLOCKED_EXTERNAL`: chưa có UAT thương mại; không được gắn `ready_to_sell`.

## Bước Gemini phải tiếp tục

1. Giữ nguyên work unit `WEBAPP-KD-W01`; không mở task hoặc phiên bản mới.
2. Đọc `reports/checkpoints/WEBAPP_KD_W01.md` và xác nhận working tree chỉ có thay đổi checkpoint handoff này nếu chưa được commit.
3. Chạy `node apps/web/server.mjs`, mở `http://127.0.0.1:4173` và kiểm tra trực quan các route: `/`, `/khach-hang`, `/bao-gia`, `/don-hang`, `/giao-hang`, `/cong-no` ở desktop và mobile.
4. Nếu kiểm tra trực quan PASS, ghi bằng chứng vào chính handoff/checkpoint hiện tại; không sửa Google Sheet UAT gốc. Chỉ kiểm tra G2 trên một bản sao khi có quyền rõ ràng.
5. Không nâng G2/G3/G4 và không tuyên bố `ready_to_sell` nếu chưa có bằng chứng runtime/UAT thật.

ACTIVE_AGENT=NONE
NEXT_AGENT=GEMINI
