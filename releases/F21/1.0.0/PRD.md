# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F21 — Form nhập liệu và phân quyền cấu hình
**Phân loại:** Nền tảng & Cấu hình dữ liệu | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F21 (Dòng 973–998) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G007, G030, G033, G037, G038, G050, G084, G085, G086, G089, G090, G171, G198

---

### 1. TỔNG QUAN NGHIỆP VỤ
Form nhập liệu và phân quyền cấu hình là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **TableDefinitions**: Bảng dữ liệu chính của phân hệ TableDefinitions
- **ColumnDefinitions**: Bảng dữ liệu chính của phân hệ ColumnDefinitions
- **FormDefinitions**: Bảng dữ liệu chính của phân hệ FormDefinitions
- **Permissions**: Bảng dữ liệu chính của phân hệ Permissions
- **ViewDefinitions**: Bảng dữ liệu chính của phân hệ ViewDefinitions
- **FormRecords**: Bảng dữ liệu chính của phân hệ FormRecords
- **LockedRows**: Bảng dữ liệu chính của phân hệ LockedRows

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Bản ghi theo biểu mẫu
- Lỗi validation
- Lượt nhập
- Thay đổi chờ duyệt
- Biểu đồ qua cấu hình

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Client sửa payload để ghi bảng ngoài quyền phải bị từ chối. Đổi parent dropdown xóa/đánh lỗi child không hợp lệ. Formula lặp tham chiếu bị chặn. Schema upgrade giữ được dữ liệu cũ."