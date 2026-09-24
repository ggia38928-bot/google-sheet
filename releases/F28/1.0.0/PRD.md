# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F28 — Lịch dịch vụ spa và phòng khám
**Phân loại:** Dịch vụ khách hàng & Đặt lịch hẹn | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F28 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G024

---

### 1. TỔNG QUAN NGHIỆP VỤ
Lịch dịch vụ spa và phòng khám là giải pháp quản trị chuyên sâu trong phân hệ Dịch vụ khách hàng & Đặt lịch hẹn, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Clients**: Bảng dữ liệu chính của phân hệ Clients
- **Providers**: Bảng dữ liệu chính của phân hệ Providers
- **Services**: Bảng dữ liệu chính của phân hệ Services
- **Appointments**: Bảng dữ liệu chính của phân hệ Appointments
- **ServiceVisits**: Bảng dữ liệu chính của phân hệ ServiceVisits
- **Payments**: Bảng dữ liệu chính của phân hệ Payments
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng doanh thu dịch vụ đã hoàn thành
- Tổng số lịch hẹn tiếp nhận
- Số lịch hẹn hoàn thành
- Tỷ lệ khách bỏ hẹn (No-Show Rate %)
- Tỷ lệ hủy lịch hẹn (%)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Hai lịch cùng provider giao nhau không cùng được xác nhận. Lễ tân xem lịch nhưng không xem RestrictedRecords. Hủy lịch không tăng doanh thu dịch vụ."
