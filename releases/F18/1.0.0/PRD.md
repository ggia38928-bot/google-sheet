# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F18 — Nhập xuất tồn và kiểm kê
**Phân loại:** Kho vận & Tồn kho | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F18 (Dòng 894–917) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** T015, G006, G009, G013, G015, G023

---

### 1. TỔNG QUAN NGHIỆP VỤ
Nhập xuất tồn và kiểm kê là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **Products**: Bảng dữ liệu chính của phân hệ Products
- **Warehouses**: Bảng dữ liệu chính của phân hệ Warehouses
- **InventoryLedger**: Bảng dữ liệu chính của phân hệ InventoryLedger
- **StockTransfers**: Bảng dữ liệu chính của phân hệ StockTransfers
- **StockCounts**: Bảng dữ liệu chính của phân hệ StockCounts

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng giá trị hàng tồn
- Số SKU dưới định mức an toàn
- Số lượng nhập kỳ
- Số lượng xuất kỳ

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Tồn cuối kỳ = Tồn đầu + Nhập - Xuất ± Điều chỉnh. Chuyển kho nội bộ bảo toàn tổng lượng hàng tồn. Phân loại chuẩn HẾT HÀNG / CẦN NHẬP / ĐỦ TỒN."