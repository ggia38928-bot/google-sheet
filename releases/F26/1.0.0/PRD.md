# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F26 — Lớp học, điểm danh và học phí
**Phân loại:** Hợp đồng, Văn bản & Đào tạo | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F26 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G014, G020, G092, G167, G177, G218

---

### 1. TỔNG QUAN NGHIỆP VỤ
Lớp học, điểm danh và học phí là giải pháp quản trị chuyên sâu trong phân hệ Hợp đồng, Văn bản & Đào tạo, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Students**: Bảng dữ liệu chính của phân hệ Students
- **Classes**: Bảng dữ liệu chính của phân hệ Classes
- **Enrollments**: Bảng dữ liệu chính của phân hệ Enrollments
- **Sessions**: Bảng dữ liệu chính của phân hệ Sessions
- **Attendance**: Bảng dữ liệu chính của phân hệ Attendance
- **TuitionInvoices**: Bảng dữ liệu chính của phân hệ TuitionInvoices
- **HolidayCalendar**: Bảng dữ liệu chính của phân hệ HolidayCalendar
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng số học viên đang theo học (Active Students)
- Tổng học phí đã thực thu
- Công nợ học phí còn phải thu
- Tỷ lệ chuyên cần bình quân (%)
- Số lớp học đang vận hành

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Học thứ 2/4, có 1 ngày nghỉ trong kỳ: ngày hết 4 buổi phải bỏ qua ngày nghỉ (tính ngày kết thúc khóa học chính xác khi có ngày nghỉ xen kẽ). Điểm danh trùng cùng học sinh/buổi bị chặn. Buổi hủy không trừ credit."
