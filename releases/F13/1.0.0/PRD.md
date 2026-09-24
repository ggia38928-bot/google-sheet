# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F13 — Tuyển dụng & lịch phỏng vấn ứng viên
**Phân loại:** Nhân sự & Tuyển dụng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F13 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** G018, G019, G046

---

### 1. TỔNG QUAN NGHIỆP VỤ
Tuyển dụng & lịch phỏng vấn ứng viên là giải pháp quản trị chuyên sâu trong phân hệ Nhân sự & Tuyển dụng, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **VACANCIES**: Bảng dữ liệu chính của phân hệ VACANCIES
- **CANDIDATES**: Bảng dữ liệu chính của phân hệ CANDIDATES
- **APPLICATIONS**: Bảng dữ liệu chính của phân hệ APPLICATIONS
- **INTERVIEWS**: Bảng dữ liệu chính của phân hệ INTERVIEWS
- **OFFERS**: Bảng dữ liệu chính của phân hệ OFFERS
- **RECRUITERS**: Bảng dữ liệu chính của phân hệ RECRUITERS
- **SETTINGS**: Bảng dữ liệu chính của phân hệ SETTINGS

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng số ứng viên tiếp nhận
- Tỷ lệ chuyển đổi qua các vòng (Funnel Conversion Rate)
- Tỷ lệ chấp nhận Offer (Offer Acceptance Rate)
- Thời gian tuyển dụng trung bình (Time to Hire)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Một ứng viên nộp 2 vị trí được tính là 1 ứng viên và 2 hồ sơ ứng tuyển riêng biệt. Tỷ lệ nhận việc tính bằng IFERROR(COUNTIFS(Offers[Status], "ACCEPTED") / COUNTIFS(Offers[Status], "<>DRAFT"), 0)."
