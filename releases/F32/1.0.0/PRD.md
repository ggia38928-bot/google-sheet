# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F32 — Chấm công & tổng hợp ca làm việc
**Phân loại:** Nhân sự & Tuyển dụng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F32 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G065, G066, G067

---

### 1. TỔNG QUAN NGHIỆP VỤ
Chấm công & tổng hợp ca làm việc là giải pháp quản trị chuyên sâu trong phân hệ Nhân sự & Tuyển dụng, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **SHIFTS**: Bảng dữ liệu chính của phân hệ SHIFTS
- **ATTENDANCE_LOGS**: Bảng dữ liệu chính của phân hệ ATTENDANCE_LOGS
- **TIMESHEETS**: Bảng dữ liệu chính của phân hệ TIMESHEETS
- **OVERTIME_REQUESTS**: Bảng dữ liệu chính của phân hệ OVERTIME_REQUESTS
- **ATTENDANCE_SUMMARY**: Bảng dữ liệu chính của phân hệ ATTENDANCE_SUMMARY
- **SETTINGS**: Bảng dữ liệu chính của phân hệ SETTINGS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng giờ làm việc thực tế
- Tổng giờ làm thêm ca đêm/OT
- Số lần đi muộn / về sớm
- Tỷ lệ chấm công đúng giờ (%)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Ca làm việc qua đêm (ví dụ 22:00 hôm trước đến 06:00 hôm sau trừ 60 phút nghỉ = 7 giờ) tính đúng theo logic giờ làm việc, không ra số âm. Nhân viên không được tạo 2 dòng check-in cùng một ngày."
