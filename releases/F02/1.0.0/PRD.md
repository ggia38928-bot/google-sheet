# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F02 — Dự án, công việc đội nhóm và KPI
**Phân loại:** Quản trị dự án & Đội nhóm | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F02 (Dòng 474–501) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** T008, T010, T011, T016, G004, G018, G026, G027, G029, G035, G039, G048, G066, G067, G069, G075, G077, G087, G094, G114, G169, G173, G195, G199, G200, G216, G226

---

### 1. TỔNG QUAN NGHIỆP VỤ
Dự án, công việc đội nhóm và KPI là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Projects**: Bảng dữ liệu chính của phân hệ Projects
- **ProjectMembers**: Bảng dữ liệu chính của phân hệ ProjectMembers
- **Tasks**: Bảng dữ liệu chính của phân hệ Tasks
- **Dependencies**: Bảng dữ liệu chính của phân hệ Dependencies
- **TaskCollaborators**: Bảng dữ liệu chính của phân hệ TaskCollaborators
- **KPIPlans**: Bảng dữ liệu chính của phân hệ KPIPlans
- **KPIActuals**: Bảng dữ liệu chính của phân hệ KPIActuals
- **Timesheets**: Bảng dữ liệu chính của phân hệ Timesheets
- **TaskChecklist**: Bảng dữ liệu chính của phân hệ TaskChecklist
- **RecurrenceRules**: Bảng dữ liệu chính của phân hệ RecurrenceRules
- **GeneratedOccurrences**: Bảng dữ liệu chính của phân hệ GeneratedOccurrences

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tiến độ có trọng số = tổng Progress×Weight / tổng Weight
- Đúng hạn dựa mốc hoàn thành được duyệt
- Giờ thực tế
- Tải việc
- KPI thực tế/mục tiêu có quy tắc chiều tốt/xấu

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Hai việc có trọng số 1 và 3, tiến độ 100% và 0% cho tiến độ dự án 25%. Đổi nhân sự không mất lịch sử. Gantt qua giao thừa đúng vị trí; chu trình phụ thuộc A→B→A bị từ chối."