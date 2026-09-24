# Risk register

| Mức | Rủi ro | Giảm thiểu / trạng thái |
|---|---|---|
| High | G2/G3 không có Spreadsheet ID, hai tài khoản hay App ID | `blocked_external_setup`; không tuyên bố PASS |
| Medium | Bốn baseline/reference bắt buộc bị thiếu | Đã ghi MISSING_ARTIFACTS; cần người dùng cung cấp nếu muốn đối soát sâu |
| Medium | 72 nhóm duplicate legacy | Đóng băng, không sửa trong F05 slice |
| Low | CLI Git không trên PATH | Dựa vào `.git/HEAD`; chưa thể có evidence working tree |
| Low | Node sandbox không cho spawn | Test đã chạy ngoài sandbox với phê duyệt và 190/190 PASS |
