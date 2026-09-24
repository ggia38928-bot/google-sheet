# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F01 — Quản lý việc cá nhân & Ma trận Eisenhower
**Phân loại:** Năng suất cá nhân | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F01 (Dòng 448–471) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** T006, T013, G075, G094, G114, G131, G169, G173, G195, G199, G216

---

### 1. TỔNG QUAN NGHIỆP VỤ
Quản lý việc cá nhân & Ma trận Eisenhower là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Tasks**: Bảng dữ liệu chính của phân hệ Tasks
- **Categories**: Bảng dữ liệu chính của phân hệ Categories
- **TaskEvents**: Bảng dữ liệu chính của phân hệ TaskEvents
- **TaskChecklist**: Bảng dữ liệu chính của phân hệ TaskChecklist
- **RecurrenceRules**: Bảng dữ liệu chính của phân hệ RecurrenceRules
- **GeneratedOccurrences**: Bảng dữ liệu chính của phân hệ GeneratedOccurrences

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Việc mở
- Việc quá hạn
- Tỷ lệ hoàn thành loại việc hủy
- Số ngày trễ
- Tải việc theo ngày

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Fixture ngày cố định có 3 việc: một DONE đúng hạn, một TODO quá hạn, một CANCELLED; tỷ lệ hoàn thành bằng 50%, việc đang quá hạn bằng 1. Việc không hạn không bị đếm trễ."