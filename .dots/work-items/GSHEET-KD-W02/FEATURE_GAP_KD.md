# Feature gap — KD_BAO_GIA_DON_HANG 3.0.0-vi

| Hạng mục | Hiện trạng | Gap | Mức độ | Lát cắt |
|---|---|---|---|---|
| Cấu trúc 15 tab | Có installer và schema | Chưa xác minh Apps Script runtime trong lượt này | P1 | G2 |
| Demo liên kết | 50 bản ghi cho 7 bảng nghiệp vụ | Thiếu dữ liệu giao hàng/chi tiết giao hàng; thiếu một số trạng thái mẫu | P1 | Sau workflow |
| Công thức | 16 contract và oracle local PASS | Chưa tái xác minh trực tiếp trên bản sao UAT | P1 | G2 |
| Workflow báo giá | Engine có state machine | Sheet chỉ có dropdown, chưa chặn transition sai | P0 | Đầu tiên |
| Phê duyệt/phiên bản | Engine có RowVersion | Sheet thiếu cột và enforcement runtime | P0 | Đầu tiên |
| Lịch sử chỉnh sửa | Có log hệ thống cơ bản | Chưa có before/after và actor cho nghiệp vụ | P0 | Đầu tiên |
| Thanh toán/công nợ | Formula và test local có | Chưa có guard workflow runtime | P1 | Tiếp theo |
| Dashboard | Có 12 KPI và 3 biểu đồ | Bộ lọc chưa chi phối toàn bộ KPI/biểu đồ | P1 | Tiếp theo |
| Install/Clean/Demo | Có helper và test engine | Chưa chạy live idempotency trong lượt này | P1 | G2 |
| Backup/restore | Một JSON trong một ô | Nguy cơ giới hạn ô; chưa khôi phục đầy đủ biểu đồ/format | P0 | Tiếp theo |
| Print/export | Có bố cục sheet | Chưa có kiểm chứng luồng xuất/in thương mại | P2 | Sau |
| Tiếng Việt | Phần lớn đạt | Cần rà soát sau khi bổ sung UI/menu | P2 | Review |

## Definition of done W02

W02 chỉ VERIFIED khi source, release, tests và tài liệu khớp; G2 chỉ PASS sau khi cài trên bản sao UAT, chạy dữ liệu demo, kiểm công thức/workflow/dashboard/backup-restore và dọn sạch an toàn.

