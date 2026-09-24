# Báo cáo duplicate và collision

- Quét read-only `releases/` phát hiện 72 nhóm checksum trùng, tương ứng 144 tệp. Đây là artifact legacy đóng băng, không bị xóa hoặc sửa.
- Ví dụ có bằng chứng: `releases/F05/1.0.0/setup.gs` và `setup_pro.gs` cùng checksum `4648ef25…b7a4`.
- F05 3.0.0-VI có 8 bảng, 8 tên duy nhất: không collision.
- Artifact mới không chứa đường dẫn tuyệt đối kiểu ký tự ổ đĩa và không khai báo AppSheet giả.
- Không xử lý duplicate legacy trong checkpoint này vì đó là thay đổi ngoài vertical slice và trái quy tắc đóng băng release 0.1.0–2.0.0.
