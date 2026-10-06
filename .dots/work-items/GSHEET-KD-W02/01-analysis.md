# GSHEET-KD-W02 — Phân tích READY

## Phạm vi

- Sản phẩm duy nhất: `KD_BAO_GIA_DON_HANG/3.0.0-vi`.
- Hoàn thiện Google Sheet thương mại tiếng Việt trước WEBAPP-KD-W03.
- Không chạy generator 79 SKU, không sửa legacy 0.1.0–2.0.0, không sửa sản phẩm khác.
- G2 chỉ được chạy trên bản sao Google Sheets UAT an toàn.

## Baseline đã xác minh

- Branch: `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi`.
- HEAD bắt đầu W02: `c59b5821d1e7a135ee066bd73751db943273cdda`.
- Upstream: cùng tên trên `origin`, local ahead 2.
- Working tree trước W02 chỉ có `build_exact_catalog.py` untracked ngoài phạm vi.
- Test sản phẩm: 32/32 PASS.
- Test rebuild: 4/4 PASS.
- Regression Web App W01: 13/13 PASS.

## Vertical slice đầu tiên

Workflow báo giá trên Apps Script:

1. Chuyển trạng thái theo state machine được kiểm soát.
2. Khóa lạc quan bằng `Phiên bản dòng`.
3. Tách người tạo/người duyệt khi cấu hình yêu cầu.
4. Bắt buộc lý do từ chối.
5. Ghi audit trước/sau, không chứa dữ liệu khách hàng nhạy cảm.
6. Có pure helper để kiểm thử local G0/G1.

## Gate

- READY: feature gap và baseline được ghi nhận.
- BUILT: source of truth, release 3.0.0-vi và test đồng bộ.
- REVIEWED: review diff P0–P3, sửa P0/P1 trước khi qua gate.
- VERIFIED: test hẹp, regression, checksum, secret scan, `git diff --check`.
- G2: giữ `BLOCKED_EXTERNAL` nếu chưa chạy thật trên bản sao UAT.

