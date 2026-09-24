# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F24 — Mini ERP cho đơn vị nhỏ
**Phân loại:** ERP & Quản trị tổng thể | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F24 (Dòng 1050–1076) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G012

---

### 1. TỔNG QUAN NGHIỆP VỤ
Mini ERP cho đơn vị nhỏ là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **SalesOrders**: Bảng dữ liệu chính của phân hệ SalesOrders
- **PurchaseOrders**: Bảng dữ liệu chính của phân hệ PurchaseOrders
- **InventoryLedger**: Bảng dữ liệu chính của phân hệ InventoryLedger
- **GeneralJournal**: Bảng dữ liệu chính của phân hệ GeneralJournal
- **MasterData**: Bảng dữ liệu chính của phân hệ MasterData

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Doanh thu thuần
- Giá vốn hàng bán (COGS)
- Lợi nhuận gộp
- Công nợ phải thu
- Công nợ phải trả
- Số dư quỹ

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Công nợ phải thu và phải trả giảm trừ chính xác, không âm. Lợi nhuận gộp ước tính = Doanh số - COGS. Luồng dữ liệu khép kín (SO -> Thu tiền -> Số dư quỹ)."