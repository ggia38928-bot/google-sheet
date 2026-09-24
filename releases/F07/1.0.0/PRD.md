# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## SKU: F07 — Hợp đồng, phụ lục và phát sinh
**Phân loại:** Hợp đồng, Văn bản & Đào tạo | **Phiên bản:** 1.0.0
**Nguồn đặc tả chính thức:** F07 (BUILD_ALL_TEMPLATES_CODEX.md)
**Mã đối chiếu khảo sát:** T004

---

### 1. TỔNG QUAN NGHIỆP VỤ
Hợp đồng, phụ lục và phát sinh là giải pháp quản trị chuyên sâu trong phân hệ Hợp đồng, Văn bản & Đào tạo, phục vụ chuyển đổi số quy trình vận hành trên Google Sheets, Apps Script và tích hợp chuẩn mực AppSheet.

### 2. MÔ HÌNH DỮ LIỆU ĐẶC TẢ
Danh sách bảng dữ liệu chính theo CODEX:
- **Contracts**: Bảng dữ liệu chính của phân hệ Contracts
- **Amendments**: Bảng dữ liệu chính của phân hệ Amendments
- **Milestones**: Bảng dữ liệu chính của phân hệ Milestones
- **ContractPayments**: Bảng dữ liệu chính của phân hệ ContractPayments
- **ContractFiles**: Bảng dữ liệu chính của phân hệ ContractFiles
- **Settings**: Bảng dữ liệu chính của phân hệ Settings

### 3. CHỈ SỐ VẬN HÀNH & BÁO CÁO (KPIS)
- Tổng giá trị hợp đồng hiện hành (Base + Approved Variations)
- Tổng giá trị đã nghiệm thu (Accepted Milestones)
- Tổng giá trị đã giải ngân (Paid Amount)
- Tỷ lệ giải ngân thanh toán (%)
- Số hợp đồng đang có hiệu lực

### 4. TIÊU CHÍ NGHIỆM THU CHÍNH THỨC (ACCEPTANCE CRITERIA)
> **Quy định tại CODEX:**
> "Gốc 100 triệu, tăng đã duyệt 20 triệu, giảm chưa duyệt 5 triệu: giá trị hiện hành 120 triệu. Thu 50 triệu không tự coi là nghiệm thu 50 triệu (mốc nghiệm thu và thanh toán độc lập)."
