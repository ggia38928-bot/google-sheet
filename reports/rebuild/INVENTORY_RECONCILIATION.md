# Đối soát inventory tái triển khai

Ngày đo: 24/09/2026. Project root được suy ra từ repository đang mở; mọi artifact mới chỉ nằm dưới root.

| Hạng mục | Số đo thực tế | Kết luận |
|---|---:|---|
| Mục catalog | 79 | Khớp `PRODUCT_CATALOG.json` |
| SKU family/utility | 50 / 29 | Catalog đầy đủ |
| Cấu hình SKU cũ | 22 | Chỉ đọc, không ghi đè |
| SKU có release | 22 | F05 có thêm 3.0.0-VI |
| Release directory | 23 | 22 bản 1.0.0 được đóng băng, 1 artifact mới |
| Tệp trước khi tạo reports | 532 | Số đo read-only |
| Bảng F05 3.0.0-VI | 8 | Không trùng tên |

`HO_SO_TOAN_BO_DU_AN_MINH_TEMPLATES.md`, `coding-agent-orchestration.md`, `evaluation-and-verification.md` và `project-detection-and-checks.md` không có trong repository hay attachments được cung cấp. Các yêu cầu có thể thực hiện vẫn lấy từ request, `ARCHITECTURE.md`, manifest và F05 PRD; phần thiếu được ghi là rủi ro.

Nhánh hiện tại theo `.git/HEAD`: `3.0.0-vi`. CLI Git không có trên PATH nên không có bằng chứng `git status`; không có thao tác Git nào được thực hiện.
