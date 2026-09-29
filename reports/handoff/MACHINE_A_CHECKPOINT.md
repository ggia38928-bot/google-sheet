# Checkpoint máy A — KD_BAO_GIA_DON_HANG

- Repository root: lấy bằng `git rev-parse --show-toplevel`; mọi đường dẫn trong checkpoint là tương đối repository.
- Remote: `https://github.com/ggia38928-bot/google-sheet.git`.
- Branch: `feature/kd-bao-gia-don-hang-3.0.0-vi`.
- HEAD khi tiếp quản: `1f930ec`.
- Git status khi tiếp quản: sạch.
- Sản phẩm: `PB01_KINH_DOANH / KD_BAO_GIA_DON_HANG / 3.0.0-vi`.
- Spreadsheet UAT: `1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q`.
- URL UAT: `https://docs.google.com/spreadsheets/d/1alkYa6KTyy4CS3D4lbl_KselHDnNHV16fVgEgGBaN7Q/edit`.
- Script ID: chưa có; connector hiện xác nhận Sheets/Drive API, chưa xác nhận Apps Script API.
- Hiện trạng UAT: riêng tư, chỉ có tab `BẮT_ĐẦU`, chưa cài Demo.
- Phát hiện: `installer.gs`, `demo_data.json`, test sản phẩm, core engine và checkpoint máy B là file rỗng; `TEST_RUN.log` cũ không thể dùng làm bằng chứng cho source hiện tại.
- Gate đáng tin tại thời điểm này: G0 `DOING`, G1 `TODO`, G2 `TODO`, G3 `NOT_RUN`, G4 `NOT_RUN`.
- Tiến trình ghi còn chạy: không có.

## Hàng đợi nhỏ

| Trạng thái | Việc | Tiêu chí hoàn thành | Bằng chứng |
|---|---|---|---|
| DOING | Hoàn thiện source local | Installer, core, fixture đúng 50 bản ghi và test không rỗng | Source + test hẹp PASS |
| TODO | Xác minh G0/G1 | Expected độc lập, công nợ/KPI đổi theo thanh toán, rerun/clean/restore đúng | Test log mới |
| TODO | Cài UAT | Tab, dữ liệu, công thức, validation, định dạng và dashboard tồn tại trên Sheet thật | API read-back |
| TODO | Chốt G2 | Expected/actual, rerun và thay đổi kiểm soát được kiểm chứng | G2 evidence |
| BLOCKED | G3 AppSheet | Cần App ID và ứng dụng thật | Chưa có App ID |

Hành động tiếp theo chính xác: điền source/fixture/test đang rỗng, chạy test hẹp trước regression.
