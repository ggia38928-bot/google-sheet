# Minh Templates — quy tắc tiếp quản

1. Đọc `reports/handoff/MACHINE_A_CHECKPOINT.md`, `governance/BACKLOG.md`, `products/KD_BAO_GIA_DON_HANG/DOMAIN_SPEC.md` và diff thực tế trước khi ghi.
2. Không áp lại `reports/handoff/safe_diff.patch`; chỉ dùng để đối chiếu khi file có nội dung.
3. Chỉ phát triển `PB01_KINH_DOANH / KD_BAO_GIA_DON_HANG / 3.0.0-vi`; giữ release legacy bất biến.
4. Không tuyên bố gate từ số file, cú pháp hoặc log cũ. Gate cần test hiện tại và bằng chứng read-back tương ứng.
5. Không commit `.env`, credential, token, log local hoặc dữ liệu khách hàng thật.
6. Tiếp tục việc `DOING` trong checkpoint sau khi kiểm tra branch, HEAD, status, tiến trình và trạng thái Google Sheet.
