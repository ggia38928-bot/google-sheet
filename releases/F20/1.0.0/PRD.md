# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F20 — Bán hàng và đơn hàng
**Phân loại:** Vận hành & Đơn hàng | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F20 (Dòng 944–971) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G019, G021

---

### 1. TỔNG QUAN NGHIỆP VỤ
Bán hàng và đơn hàng là giải pháp số phục vụ vận hành thực tế cho hộ kinh doanh và doanh nghiệp vừa & nhỏ (SMB), thiết kế chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính:
- **SalesOrders**: Bảng dữ liệu chính của phân hệ SalesOrders
- **SalesLines**: Bảng dữ liệu chính của phân hệ SalesLines
- **Fulfillments**: Bảng dữ liệu chính của phân hệ Fulfillments
- **FulfillmentLines**: Bảng dữ liệu chính của phân hệ FulfillmentLines
- **SalesPayments**: Bảng dữ liệu chính của phân hệ SalesPayments
- **Returns**: Bảng dữ liệu chính của phân hệ Returns
- **ReturnLines**: Bảng dữ liệu chính của phân hệ ReturnLines
- **Channels**: Bảng dữ liệu chính của phân hệ Channels

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Doanh số trước/sau giảm
- Doanh thu thuần
- Hàng trả
- Thực thu
- Công nợ COD
- Giao thiếu
- Lợi nhuận gộp

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Đơn 10 sản phẩm, giao 6 rồi 4: tồn chỉ giảm 10. Thu 500.000 trên đơn 800.000 cho công nợ 300.000. Hủy đơn chưa giao không sinh xuất kho."