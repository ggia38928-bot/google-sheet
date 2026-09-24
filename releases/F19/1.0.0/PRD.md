# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F19 — Báo giá và phiên bản chào bán
**Phân loại:** Thương mại & Báo giá | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F19 (Dòng 920–942) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G005

---

### 1. TỔNG QUAN NGHIỆP VỤ
Báo giá và phiên bản chào bán là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Quotes**: Bảng dữ liệu chính của phân hệ Quotes
- **QuoteLines**: Bảng dữ liệu chính của phân hệ QuoteLines
- **QuoteTerms**: Bảng dữ liệu chính của phân hệ QuoteTerms
- **QuoteEvents**: Bảng dữ liệu chính của phân hệ QuoteEvents
- **Customers**: Bảng dữ liệu chính của phân hệ Customers
- **Products**: Bảng dữ liệu chính của phân hệ Products

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Giá trị báo giá đã gửi
- Báo giá đã chấp nhận (Accepted)
- Báo giá sắp hết hiệu lực
- Tỷ lệ chuyển đơn (Win rate)

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "2×100.000, giảm dòng 10%, thuế cấu hình 8% trên sau giảm cho tổng 194.400. Revision cũ giữ nguyên số tiền sau khi sửa bản mới."