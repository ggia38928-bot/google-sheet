# Audit trạng thái hiện tại — KD_BAO_GIA_DON_HANG

Ngày audit: 2026-09-29. Phạm vi duy nhất: `PB01_KINH_DOANH / KD_BAO_GIA_DON_HANG / 3.0.0-vi`.

## Nguồn quyết định

- Branch: `feature/kd-bao-gia-don-hang-3.0.0-vi`.
- Base kiểm tra: `e23b84c893d849c7ec2333bc70a7227ce3a0b42f` cộng diff hiện tại của checkpoint, installer/formula contract, manifest/docs, evidence và release mới.
- Không áp lại `safe_diff.patch`; không sửa release legacy, template hoặc SKU khác.
- Không có tiến trình Node/npm/clasp còn chạy khi tiếp quản.
- Không có root `AGENTS.md` hoặc history áp dụng; ba skill dự án được nêu tên không tồn tại. Thực thi theo `single-agent sequential fallback`.

## Hoàn thành

- Fixture đúng 50 bản ghi và liên kết hợp lệ.
- Core nghiệp vụ và oracle độc lập bao phủ báo giá → đơn hàng → thanh toán → công nợ.
- Installer có Demo/Sạch/Business, khóa tài liệu, validation, vùng bảo vệ cảnh báo, backup/restore và kiểm tra ref.
- Công thức đã căn chỉnh với locale `vi_VN`; Dashboard nguồn có 12 KPI, bộ lọc và 3 chart; rerun xóa chart cũ trước khi dựng lại.
- Test hẹp 26/26, rebuild 4/4, regression 194/194 PASS.
- Google Sheet UAT đã được dựng/đọc lại qua Sheets API: đúng 50 bản ghi, 0 lỗi công thức, 318 validation, 3 chart và mutation thanh toán cập nhật KPI đúng rồi hoàn tác sạch.

## Chưa hoàn thành / không được tuyên bố

- Apps Script chưa được bind/cài/chạy trên Sheet thật; chưa kiểm chứng live installer rerun, Clean/Demo, backup/restore, menu và trigger.
- Chưa có AppSheet App ID; G3 `NOT_RUN`.
- Chưa UAT người dùng cuối hoặc phê duyệt thương mại; G4 `NOT_RUN`.
- Không gắn `release_candidate` hoặc `ready_to_sell`.

## Gate

- G0: PASS.
- G1: PASS.
- G2: BLOCKED_EXTERNAL — phần Sheets API đã PASS, phần Apps Script live bị chặn bởi công cụ/quyền ngoài.
- G3: NOT_RUN.
- G4: NOT_RUN.
