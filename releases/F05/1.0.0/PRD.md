# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F05 — CRM khách hàng và pipeline
**Phân loại:** Khách hàng & Bán hàng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F05 (Dòng 553–578) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** T009, T014, G001, G008, G011, G020, G028, G060, G071, G111, G145, G197

---

### 1. TỔNG QUAN NGHIỆP VỤ
CRM khách hàng và pipeline là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Accounts**: Bảng dữ liệu chính của phân hệ Accounts
- **Contacts**: Bảng dữ liệu chính của phân hệ Contacts
- **Deals**: Bảng dữ liệu chính của phân hệ Deals
- **Stages**: Bảng dữ liệu chính của phân hệ Stages
- **DealActivities**: Bảng dữ liệu chính của phân hệ DealActivities
- **Touchpoints**: Bảng dữ liệu chính của phân hệ Touchpoints

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Giá trị pipeline theo giai đoạn
- Win rate = Won/(Won+Lost)
- Thời gian trung bình ở từng stage
- Số deal cần follow-up

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Mẫu số tính Win rate chỉ tính deal đã đóng (Won + Lost). Deal đang mở không làm loãng win rate. Mẫu số = 0 trả về 0% an toàn."