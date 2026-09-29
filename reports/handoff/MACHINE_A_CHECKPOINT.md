# Checkpoint máy A — KD_BAO_GIA_DON_HANG

- Cập nhật: 2026-09-29, Asia/Bangkok.
- Repository root: `D:/google sheet` (xác định bằng `git rev-parse --show-toplevel`).
- Remote: `https://github.com/ggia38928-bot/google-sheet.git` (đã lược bỏ thông tin xác thực khi kiểm tra).
- Branch: `feature/kd-bao-gia-don-hang-3.0.0-vi`.
- Base HEAD trước mốc hoàn thiện này: `e23b84c893d849c7ec2333bc70a7227ce3a0b42f` (`update`); nhánh đang ahead origin 1 commit.
- Diff của mốc sẽ commit cùng nhau: `governance/BACKLOG.md`; README, installer, formula contract, manifest và test của sản phẩm; evidence `TEST_RUN.log` + `G2_SHEETS_API.md`; checkpoint này; `CURRENT_STATE_AUDIT.md`; release mới `releases/KD_BAO_GIA_DON_HANG/3.0.0-vi/`.
- Sản phẩm duy nhất trong phạm vi: `PB01_KINH_DOANH / KD_BAO_GIA_DON_HANG / 3.0.0-vi`.
- Chế độ điều phối: `single-agent sequential fallback`; không dùng subagent.
- Skill đã dùng: `universal-agent-prompt-engine`, `google-drive:google-sheets`.
- Skill được yêu cầu nhưng không tồn tại trong repository/danh mục khả dụng: `resume-minh-templates`, `app-engineering-orchestrator`, `minh-template-governance`.
- Không có `AGENTS.md` ở repository root và không có `history*.md` áp dụng cho phạm vi này. Hai `AGENTS.md` tìm thấy nằm trong các kit lồng nhau, không chi phối sản phẩm hiện tại.
- Không có tiến trình Node/npm/clasp đang chạy khi phục hồi trạng thái.

## Trạng thái source và kiểm thử local

- Source quyết định hiện nằm tại commit `e23b84c`; không áp lại `safe_diff.patch`.
- Hoàn thành: core nghiệp vụ, fixture Demo đúng 50 bản ghi, oracle độc lập, Apps Script installer, formula contract, test hẹp và rebuild test.
- Test đã chạy trên đúng source trước khi checkpoint được cập nhật:
  - `node --test --test-isolation=none products/KD_BAO_GIA_DON_HANG/tests/kd_bao_gia_don_hang.test.mjs` → 26/26 PASS.
  - `node --test --test-isolation=none tests/rebuild_kd_bao_gia_don_hang.test.mjs` → 4/4 PASS.
  - `node --test --test-isolation=none tests/*.test.mjs` → 194/194 PASS, 28 suite, 0 fail.
- Lệnh `node --test` không có `--test-isolation=none` từng bị môi trường Windows chặn spawn với `EPERM`; đây không phải lỗi logic sản phẩm.
- Chưa chạy được trên Apps Script thật: cài/rerun installer, Clean/Demo, backup/restore và kiểm tra menu/trigger.

## Trạng thái Google thực

- Spreadsheet UAT riêng tư: `1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q`.
- URL: `https://docs.google.com/spreadsheets/d/1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q/edit`.
- Script ID: chưa có; môi trường có Drive/Sheets API nhưng không có công cụ Apps Script/clasp/browser write.
- Đã tạo và đọc lại 15 tab (gồm `BẮT_ĐẦU`, 13 vùng nghiệp vụ/hệ thống và `DASHBOARD`).
- Đã ghi đúng 50 bản ghi nghiệp vụ: 6 khách hàng + 8 sản phẩm + 6 báo giá + 12 chi tiết báo giá + 5 đơn hàng + 8 chi tiết đơn hàng + 5 thanh toán.
- Đã xác minh read-back: 0 lỗi công thức, 318 ô có validation, 3 biểu đồ Dashboard, công thức/định dạng `vi_VN` hoạt động.
- Kiểm thử hành vi có hoàn tác trên Sheet thật: đổi `TT-002` từ `CHỜ XÁC NHẬN` sang `ĐÃ XÁC NHẬN` làm thực thu tăng từ 1.400.000 ₫ lên 1.700.000 ₫ và công nợ giảm từ 2.300.000 ₫ xuống 2.000.000 ₫; sau hoàn tác các số trở lại ban đầu.
- Không tuyên bố Apps Script đã cài hoặc đã chạy; phần Google hiện được dựng và kiểm chứng qua Sheets API.

## Gate và hàng đợi nhỏ

| Trạng thái | Việc | Bằng chứng / điều kiện còn thiếu |
|---|---|---|
| PASS | G0 — đặc tả/source | Source, schema, formula contract và kiểm tra cấu trúc hiện tại |
| PASS | G1 — nghiệp vụ local | 25/25 + 4/4 + 194/194 PASS; oracle và mutation test local |
| BLOCKED_EXTERNAL | G2 — Google Sheets/Apps Script | Phần Sheets API đã kiểm chứng; thiếu Apps Script API/clasp/browser write để cài và chạy installer, rerun, Clean/Demo, backup/restore |
| NOT_RUN | G3 — AppSheet | Ngoài phạm vi; không có App ID thật |
| NOT_RUN | G4 — thương mại | Không gắn `release_candidate` hoặc `ready_to_sell` |

- Hoàn thành lát cắt: evidence mới, release 8 artifact + checksum, manifest/gate trung thực, rà secret và `git diff --check` đều PASS.
- Việc còn lại của phiên: stage đúng danh sách trên, chạy lại test quyết định từ staged tree, commit, push thường và ghi commit hash vào báo cáo cuối.
- Lệnh cuối cùng xác định được trước checkpoint: kiểm checksum 8 artifact, `git diff --check`, secret scan và `git status -sb`.
- Lệnh tiếp theo chính xác: `git add -- governance/BACKLOG.md products/KD_BAO_GIA_DON_HANG reports/evidence/KD_BAO_GIA_DON_HANG/3.0.0-vi reports/handoff/MACHINE_A_CHECKPOINT.md reports/rebuild/CURRENT_STATE_AUDIT.md releases/KD_BAO_GIA_DON_HANG/3.0.0-vi`.
