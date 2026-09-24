# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F10 — Khách sạn, homestay và đặt phòng
**Phân loại:** Dịch vụ khách hàng & Đặt lịch hẹn | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F10 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** T014, G032, G046, G076

---

### 1. TỔNG QUAN NGHIỆP VỤ
Khách sạn, homestay và đặt phòng là giải pháp quản trị chuyên sâu trong phân hệ Dịch vụ khách hàng & Đặt lịch hẹn, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Properties**: Bảng dữ liệu chính của phân hệ Properties
- **Rooms**: Bảng dữ liệu chính của phân hệ Rooms
- **Guests**: Bảng dữ liệu chính của phân hệ Guests
- **Bookings**: Bảng dữ liệu chính của phân hệ Bookings
- **Payments**: Bảng dữ liệu chính của phân hệ Payments
- **Housekeeping**: Bảng dữ liệu chính của phân hệ Housekeeping
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng doanh thu tiền phòng (Room Revenue)
- Tổng số đêm phòng đã bán (Nights Sold)
- Giá bán phòng trung bình ngày (ADR)
- Tiền đặt cọc đang lưu giữ (Prepayment)
- Công nợ khách còn phải thu

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Khoảng [check-in, check-out) không tính đêm trả phòng; booking hủy không giữ phòng; hai request đồng thời cho phòng cuối chỉ một được duyệt. Deposit không bị cộng lần hai vào tổng thu."
