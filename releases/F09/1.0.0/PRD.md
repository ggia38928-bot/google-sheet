# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F09 — Lịch lãnh đạo, cuộc họp và công tác
**Phân loại:** Dịch vụ khách hàng & Đặt lịch hẹn | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F09 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** T009, G061

---

### 1. TỔNG QUAN NGHIỆP VỤ
Lịch lãnh đạo, cuộc họp và công tác là giải pháp quản trị chuyên sâu trong phân hệ Dịch vụ khách hàng & Đặt lịch hẹn, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Events**: Bảng dữ liệu chính của phân hệ Events
- **Attendees**: Bảng dữ liệu chính của phân hệ Attendees
- **MeetingResources**: Bảng dữ liệu chính của phân hệ MeetingResources
- **Reservations**: Bảng dữ liệu chính của phân hệ Reservations
- **Trips**: Bảng dữ liệu chính của phân hệ Trips
- **ActionItems**: Bảng dữ liệu chính của phân hệ ActionItems
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng số cuộc họp và sự kiện lãnh đạo
- Tỷ lệ hoàn thành sự kiện (%)
- Số nhiệm vụ sau họp (Action items) quá hạn
- Tổng ngân sách các chuyến công tác (VND)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Hai cuộc họp giao nhau chặn đặt cùng phòng. Cuộc họp kết thúc 10:00 cho phép cuộc sau bắt đầu 10:00 khi buffer=0. Chặn trùng lịch người tham dự cùng khung giờ."
