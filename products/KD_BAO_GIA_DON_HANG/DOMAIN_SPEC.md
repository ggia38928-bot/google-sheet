# Đặc tả miền nghiệp vụ

## Vai trò

1. Chủ doanh nghiệp/Trưởng phòng kinh doanh: duyệt báo giá, theo dõi dashboard.
2. Sales Admin: quản trị danh mục, revision và kiểm tra dữ liệu.
3. Nhân viên kinh doanh: lập báo giá, gửi và theo dõi khách hàng.
4. Kế toán/Thu ngân: xác nhận thanh toán, theo dõi công nợ.
5. Nhân viên giao nhận: ghi nhận từng đợt giao và số lượng thực giao.

## Bất biến báo giá

- Workflow: `NHÁP → CHỜ DUYỆT → ĐÃ DUYỆT → ĐÃ GỬI → CHẤP NHẬN | TỪ CHỐI | HẾT HẠN`.
- Báo giá đã gửi là bất biến; thay đổi thương mại tạo revision mới và giữ nguyên revision cũ.
- Chỉ revision mới nhất ở trạng thái `CHẤP NHẬN` được chuyển đơn.
- `Mã báo giá nguồn + revision` là khóa idempotency; chạy lại không tạo đơn trùng.

## Bất biến đơn hàng, giao hàng và thanh toán

- Workflow đơn: `MỚI → XÁC NHẬN → ĐANG GIAO → GIAO MỘT PHẦN → HOÀN TẤT`; `HỦY` chỉ hợp lệ trước khi có giao hàng.
- Tổng số lượng giao của từng dòng không vượt số lượng đặt. Giao 6 rồi 4 cho đơn 10 phải cho tổng giao 10.
- Chỉ thanh toán `ĐÃ XÁC NHẬN` làm giảm công nợ; `CHỜ XÁC NHẬN` và `HỦY` không ảnh hưởng.
- Mọi ghi cập nhật phải khớp `Phiên bản dòng`, tăng phiên bản sau ghi và lưu thời điểm/người cập nhật.
- ID trùng, ref không tồn tại, workflow sai và chuỗi bắt đầu bằng ký tự công thức phải bị chặn.

## Gate local

G0 kiểm tra đặc tả, schema, đặt tên, formula contract và cấu trúc Apps Script. G1 kiểm tra oracle nghiệp vụ, fixtures liên kết, dashboard động, installer idempotent và backup/clean/restore. G2–G4 không được suy diễn từ kiểm thử local.
