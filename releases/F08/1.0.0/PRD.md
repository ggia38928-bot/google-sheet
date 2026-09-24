# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F08 — Văn bản, hồ sơ và chỉ đạo
**Phân loại:** Hợp đồng, Văn bản & Đào tạo | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F08 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** T005, T012, T019, G044

---

### 1. TỔNG QUAN NGHIỆP VỤ
Văn bản, hồ sơ và chỉ đạo là giải pháp quản trị chuyên sâu trong phân hệ Hợp đồng, Văn bản & Đào tạo, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Documents**: Bảng dữ liệu chính của phân hệ Documents
- **Directives**: Bảng dữ liệu chính của phân hệ Directives
- **DocumentVersions**: Bảng dữ liệu chính của phân hệ DocumentVersions
- **Dispatches**: Bảng dữ liệu chính của phân hệ Dispatches
- **Categories**: Bảng dữ liệu chính của phân hệ Categories
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng số văn bản đến/đi tiếp nhận
- Số văn bản đã hoàn tất xử lý
- Tỷ lệ xử lý văn bản đúng hạn (%)
- Số ý kiến chỉ đạo chưa hoàn thành
- Số chỉ đạo quá hạn cần đôn đốc

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Staff được giao một văn bản không thấy file mật của văn bản khác qua URL/export (Phân cấp bảo mật theo vai trò). Số văn bản trùng trong cùng sổ/năm bị cảnh báo, cùng số ở sổ khác được phép."
