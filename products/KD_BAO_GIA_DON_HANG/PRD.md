# PRD — Quản lý Báo giá và Đơn hàng

## Mục tiêu

Chuẩn hóa toàn bộ vòng đời thương mại từ báo giá đến thực thu trong một Google Sheets có Apps Script, dữ liệu tiếng Việt và bằng chứng kiểm thử local tái lập được.

## Người dùng và kết quả

- Trưởng phòng thấy pipeline, tỷ lệ chuyển đổi, đơn trễ và công nợ.
- Sales Admin kiểm soát revision, dữ liệu danh mục và tính toàn vẹn ref.
- Nhân viên kinh doanh lập báo giá, gửi, chuyển đơn không trùng.
- Kế toán chỉ ghi nhận thực thu sau xác nhận.
- Giao nhận cập nhật nhiều đợt nhưng không thể giao vượt.

## Phạm vi chức năng

Mười ba bảng bắt buộc: `KHACH_HANG`, `SAN_PHAM`, `NHAN_VIEN`, `BAO_GIA`, `CHI_TIET_BAO_GIA`, `DON_HANG`, `CHI_TIET_DON_HANG`, `GIAO_HANG`, `CHI_TIET_GIAO_HANG`, `THANH_TOAN`, `CAU_HINH`, `NHAT_KY`, `DASHBOARD`.

Dashboard có 12 chỉ số/khung nhìn động, bộ lọc thời gian, trạng thái và người phụ trách. Installer hỗ trợ Demo, Sạch và Business; chỉ Demo seed dữ liệu. Clean sao lưu trước và Restore phục hồi cả giá trị lẫn công thức.

## Tiêu chí nghiệm thu local

- Oracle `2 × 100.000`, giảm 10%, VAT 8% cho tổng `194.400`.
- Revision cũ bất biến; một báo giá chấp nhận chỉ sinh một đơn.
- Giao 6 rồi 4 cho đơn 10 cho tổng giao 10; không thể vượt.
- Đơn 800.000, thực thu xác nhận 500.000 còn nợ 300.000.
- Thanh toán chờ xác nhận không giảm nợ; hủy đơn chưa giao không sinh giao hàng.
- Tỷ lệ chuyển đổi chỉ dùng báo giá đã quyết định; chặn ID trùng, ref sai và workflow sai.
- Rerun giữ công thức; Clean tạo backup; Restore trả lại expected values; Demo tạo nhiều bản ghi liên kết.

## Ngoài phạm vi lượt này

Không gửi email, không OAuth ngoài phạm vi, không publish Web App, không tạo AppSheet giả, không chạy G2/G3/G4.
