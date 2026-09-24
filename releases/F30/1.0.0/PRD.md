# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F30 — Công nợ và phân bổ thanh toán
**Phân loại:** Tài chính & Công nợ | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F30 (Dòng 1215–1237) trong `BUILD_ALL_TEMPLATES_CODEX.md`
**Mã đối chiếu khảo sát:** G040, G225

---

### 1. TỔNG QUAN NGHIỆP VỤ
Công nợ và phân bổ thanh toán là giải pháp kế toán quản trị và tài chính chuẩn hóa cho Google Sheets, Apps Script và tích hợp AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách các bảng nghiệp vụ chính theo CODEX:
- **PARTIES**: Bảng dữ liệu chính của phân hệ PARTIES
- **INVOICES**: Bảng dữ liệu chính của phân hệ INVOICES
- **PAYMENTS**: Bảng dữ liệu chính của phân hệ PAYMENTS
- **ALLOCATIONS**: Bảng dữ liệu chính của phân hệ ALLOCATIONS
- **CREDIT_NOTES**: Bảng dữ liệu chính của phân hệ CREDIT_NOTES
- **OPENING_BALANCES**: Bảng dữ liệu chính của phân hệ OPENING_BALANCES

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Nợ phải thu còn lại
- Nợ phải trả còn lại
- Nợ quá hạn theo tuổi nợ Aging
- Tiền thu chưa phân bổ

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Hóa đơn 1 triệu, phân bổ 400.000 và credit 100.000: còn 500.000. Không phân bổ vượt payment hay dư nợ; thanh toán nhiều kỳ không nhân đôi khoản gốc."