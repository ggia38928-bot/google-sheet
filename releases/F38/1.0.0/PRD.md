# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F38 — Quản lý nghỉ phép & số dư phép năm
**Phân loại:** Nhân sự & Tuyển dụng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F38 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G077, G078

---

### 1. TỔNG QUAN NGHIỆP VỤ
Quản lý nghỉ phép & số dư phép năm là giải pháp quản trị chuyên sâu trong phân hệ Nhân sự & Tuyển dụng, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **LEAVE_TYPES**: Bảng dữ liệu chính của phân hệ LEAVE_TYPES
- **LEAVE_BALANCES**: Bảng dữ liệu chính của phân hệ LEAVE_BALANCES
- **LEAVE_REQUESTS**: Bảng dữ liệu chính của phân hệ LEAVE_REQUESTS
- **HOLIDAYS**: Bảng dữ liệu chính của phân hệ HOLIDAYS
- **SETTINGS**: Bảng dữ liệu chính của phân hệ SETTINGS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng số ngày phép tiêu chuẩn
- Số ngày phép đã sử dụng
- Số dư phép năm còn lại
- Số đơn nghỉ phép chờ phê duyệt

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Nghỉ từ thứ 6 đến thứ 2 tuần kế tiếp không rơi vào ngày lễ tính là 2 ngày làm việc theo NETWORKDAYS. Hai ca nửa ngày tính thành 1 ngày nguyên vẹn. Duyệt lại không trừ trùng lặp số dư phép."
