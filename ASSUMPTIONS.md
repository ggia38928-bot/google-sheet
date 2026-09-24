# CÁC GIẢ ĐỊNH VÀ QUY ƯỚC HỆ THỐNG (ASSUMPTIONS)
**Dự án:** Minh Templates Factory  
**Cập nhật:** 07/09/2026  

---

## 1. MÔI TRƯỜNG & NỀN TẢNG THỰC THI
- Môi trường máy chủ phát triển cục bộ (Local Runtime): Node.js V8 (v24.14.0) có sẵn các module lõi `crypto`, `fs`, `path`, `test`, `assert`.
- Môi trường đám mây đích: Google Workspace (Google Sheets, Apps Script Runtime V8, AppSheet Platform).
- Mỗi khách hàng khi mua template sẽ sao chép (Make a copy) file Google Sheets hoặc copy AppSheet về tài khoản Google cá nhân/tổ chức của họ (Single-tenant). Không có việc chia sẻ chung file tính giữa các khách hàng khác nhau.

## 2. QUY CHUẨN DỮ LIỆU & ĐỊNH DẠNG
- Ngôn ngữ mặc định cho giao diện, hướng dẫn, thông báo lỗi: Tiếng Việt (`vi-VN`).
- Múi giờ hệ thống: `Asia/Ho_Chi_Minh` (GMT+7).
- Tiền tệ: Đồng Việt Nam (`VND`), biểu diễn dưới dạng số nguyên (Integer), không có số thập phân.
- Tỷ lệ hoàn thành / Tiến độ: Biểu diễn số thực từ `0.0` đến `1.0`, hiển thị dạng `0.0%`.
- Khóa chính (`ID`): Luôn là chuỗi văn bản (Text) sinh ra duy nhất một lần bằng UUIDv4 hoặc cơ chế `UNIQUEID()` của AppSheet. Không bao giờ sử dụng hàm biến động `ROW()`, `RAND()`, hoặc `NOW()` làm khóa chính.
- Trường số điện thoại, mã định danh, mã đơn hàng: Luôn lưu dưới dạng `Text` để tránh bị Google Sheets tự động cắt bỏ chữ số `0` ở đầu.

## 3. CHI PHÍ VÀ BẢN QUYỀN NỀN TẢNG NGOÀI
- Chi phí template là phí mua mã nguồn / cấu hình một lần từ Minh Templates.
- Chi phí bản quyền nền tảng Google Workspace hoặc AppSheet (Starter 5 USD/user/mo, Core 10 USD/user/mo...) thuộc trách nhiệm của khách hàng thanh toán trực tiếp cho Google theo chính sách của Google. Minh Templates không quảng cáo sai lệch là "Miễn phí trọn đời cho nhiều người dùng".
