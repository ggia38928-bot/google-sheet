# Checkpoint WEBAPP-KD-W00

- Thời gian: 2026-10-06, Asia/Bangkok.
- Branch: `feature/kd-bao-gia-don-hang-3.0.0-vi`.
- Base SHA: `bf131cc8ea5cbc33bc3bb44a9c76e621786c0e63`.
- Google UAT gốc: không ghi; không chạy `setupDemoKD()`.
- G2: giữ `BLOCKED_EXTERNAL`.

## Kết luận nguyên nhân

- Fixture JSON và hàm `calculateQuoteLine()` đã dùng `TY_LE_CHIET_KHAU` đúng kiểu tỷ lệ 0–1.
- `FORMULAS.quoteLine` trong core engine còn mapping cột cũ, không khớp cấu trúc `CHI_TIẾT_BÁO_GIÁ` hiện tại.
- Installer không ghi công thức vào H, nhưng trước hotfix chưa có validation số 0–1 và chưa tự gỡ công thức sai đã tồn tại trong H. Vì vậy lỗi lạc công thức có thể tồn tại sau một nguồn sinh/ghi cũ mà test vẫn bỏ lọt.

## Sửa chữa

- Đồng bộ metadata công thức core với cột F:N thực tế.
- Khóa H2:H500 bằng validation số 0–1 và định dạng phần trăm.
- Rerun chỉ xóa các ô H có công thức; giữ nguyên giá trị tỷ lệ nhập tay hợp lệ.
- Thanh toán chỉ SUMIFS vào `ĐƠN_HÀNG.H`.
- `BẮT_ĐẦU` do installer sinh có trạng thái `Đã cài đặt`, `local_verified`, G2 `BLOCKED_EXTERNAL`; source commit đọc từ Document Properties, không hard-code SHA.

## Bằng chứng

- Baseline trước sửa: 26/26 test hẹp, 4/4 rebuild, 194/194 regression PASS nhưng chưa có assertion khóa cột H.
- Sau sửa, test hẹp: 32/32 PASS.
- Rebuild: 4/4 PASS.
- Regression toàn repo: 194/194 PASS trong 28 suite.
- Release JSON parse PASS; toàn bộ checksum của release 3.0.0-vi PASS.
- `git diff --check` PASS (chỉ có cảnh báo chuyển LF/CRLF của Git trên Windows, không có whitespace error).
- Các test bổ sung: tỷ lệ 0–1; tiền chiết khấu = J×H; thanh toán không ảnh hưởng chiết khấu/tổng báo giá; đổi tỷ lệ làm tổng báo giá đổi đúng; installer không ghi công thức vào H; metadata không chứa trạng thái tạm/SHA cũ.

## Tiếp theo

Commit W00; sau đó tạo/tiếp tục nhánh `feature/webapp-kd-bao-gia-don-hang-3.0.0-vi` từ commit hotfix này.
