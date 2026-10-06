# GSHEET-KD-W02 — BUILT

Trạng thái: PASS local.

- Workflow báo giá/đơn hàng có state machine, RowVersion và role guard.
- Vai trò lấy từ email Google đang đăng nhập; tab NGƯỜI_DÙNG/CẤU_HÌNH chỉ chủ cài đặt được sửa.
- Có tạo revision mới, chuyển báo giá chấp nhận thành đơn idempotent và chốt đơn giá theo revision.
- Thanh toán xác nhận/hủy qua role guard và audit; delivery kiểm cùng đơn, đơn hủy và giao vượt.
- Fixture giữ 50 bản ghi, gồm giao hai đợt 6 + 4.
- Dashboard 12 KPI, 3 biểu đồ; tách bộ lọc trạng thái báo giá/đơn và chỉ tính revision mới nhất.
- Backup payload chia chunk 40.000 ký tự, checksum và restore tái dựng công thức/validation/protection/dashboard.
- Có bản in an toàn để In / Lưu PDF.
- Source of truth và release 3.0.0-vi đã đồng bộ.
