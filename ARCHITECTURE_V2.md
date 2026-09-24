# KIẾN TRÚC TỔNG THỂ HỆ THỐNG — MINH TEMPLATES FACTORY V2
*Mô hình sản xuất & thương mại hóa 79 sản phẩm số (Google Sheets • AppSheet • Web App)*

---

## 1. MỤC TIÊU CHIẾN LƯỢC KINH DOANH

Mục tiêu xây dựng kho sản phẩm gồm **79 template thương mại** chuẩn mực cao cấp phục vụ bán trên website theo định hướng các nền tảng hàng đầu thị trường ([Tạp Hóa Sheet](https://taphoasheet.store/shop/) và [GSheets](https://gsheets.vn/template/)):
- **Tập trung trải nghiệm chuyển đổi (Conversion-Driven)**: Khách hàng được trải nghiệm trực tiếp bản `FREE_DEMO` và `FREE_CLEAN` qua link tải nhanh chuẩn Google Sheets:
  ```text
  https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/copy
  ```
- **Bảo mật bản trả phí**: Không công khai link của các gói thương mại (`BASIC`, `PRO`, `BUSINESS`, `APP`, `WEB_APP`). Đường dẫn chỉ được cung cấp qua cổng thanh toán tự động (email hoặc webhook xác nhận đơn hàng).
- **Phân tầng giá trị thực chất**: Mỗi gói sản phẩm có sự khác biệt rõ rệt về độ phức tạp công thức, năng lực dashboard, tự động hóa Apps Script, cơ chế bảo vệ vùng ô và khả năng mở rộng.

---

## 2. MÔ HÌNH KIẾN TRÚC 5 TẦNG (5-LAYER ARCHITECTURE)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           CORE ENGINE                                   │
│  - Sheets Compiler & Styler      - Formula Contract Resolver            │
│  - Protection & Range Security   - Automation & Trigger Framework       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                      PRODUCT CONFIGURATION                              │
│  - 79 SKU Registry (F01–F50, U01–U29)                                   │
│  - Table Schemas, Types, Primary/Foreign Keys, Enums, Bounds            │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                       TIER CONFIGURATION                                │
│  - FREE_DEMO / FREE_CLEAN (0 VND)       - BASIC (49.000 VND)            │
│  - PRO (119.000 VND - Bestseller)       - BUSINESS (499.000 VND)        │
│  - PREMIUM_APP (990.000 VND)            - WEB_APP (1.990.000 VND)       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                      DEMO / CLEAN MODE ENGINE                           │
│  - Deterministic Vietnamese Business Seeder (Realistic Demo Data)       │
│  - Zero-Row Pristine Initializer (Clean Mode with 100% Formulas Kept)   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                    TESTS & RELEASE PIPELINE                             │
│  - Domain & State Machine Tests  - Formula Precision & Division/0 Gate  │
│  - Security & Idempotency Tests  - Release Manifest Generator           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. MA TRẬN PHÂN TẦNG TÍNH NĂNG CHI TIẾT (TIER FEATURE MATRIX)

Để đảm bảo giá trị thương mại xứng đáng với chi phí khách hàng bỏ ra, các gói được thiết kế theo ma trận phân cấp chặt chẽ:

| Tiêu chí kỹ thuật | FREE (0 VND) | BASIC (49.000 VND) | PRO (119.000 VND) | BUSINESS (499.000 VND) | APP / WEB_APP (990k+) |
|---|---|---|---|---|---|
| **Mục tiêu khách hàng** | Phễu trải nghiệm (Lead Magnet) | Cá nhân ghi chép đơn giản | Hộ kinh doanh, startup, quản lý | Doanh nghiệp nhỏ (SMB), chuỗi cửa hàng | Đơn vị cần di động, barcode, web riêng |
| **Thẻ Scorecard KPI** | 1 chỉ số tổng quan | 3 thẻ KPI khối màu | 5-6 thẻ KPI chuyên sâu + Alert | Multi-Dashboard phân cấp theo bộ lọc | Reactive State Dashboard / App KPI |
| **Hệ thống Biểu đồ** | Không có | 1 biểu đồ cơ bản | 2-3 biểu đồ phân bổ đa chiều (Donut/Bar/Col) | Biểu đồ tương tác thời gian thực theo kỳ | Biểu đồ tương tác web / AppSheet Views |
| **Công thức & Hàm** | Hàm cơ bản (`SUM`, `AVERAGE`, `COUNTIF`) | Hàm điều kiện (`SUMIF`, `COUNTIF`, `IF`, `ROUND`) | Hàm nâng cao (`SUMIFS`, `COUNTIFS`, `SUMPRODUCT`, `IFERROR`) | Công thức mảng động (`ARRAYFORMULA`, `QUERY`, `FILTER`, `LAMBDA`) | Tính toán tại backend / AppSheet Formulas |
| **Bảo mật & Khóa ô** | Không khóa (Unprotected) | Cố định tiêu đề (Freeze Header) | Khóa toàn bộ ô công thức (Protected Range) | Phân quyền chỉnh sửa theo vai trò (Role-based) | Phân quyền User Login / AppSheet Security Filters |
| **Tự động hóa** | Nhập tay 100% | Dropdown danh mục cơ bản | Menu `⚡ MINH TEMPLATES PRO` (Cài Demo / Reset Clean) | Triggers tự động (Đóng dấu ngày giờ, Audit Trail) | Workflow Bots, gửi email, Webhook, QR Code |
| **Định dạng & Alert** | Định dạng thô | Định dạng tiền tệ VND | Tự đổi màu theo ngưỡng (Đỏ/Cam/Xanh) | Cảnh báo quá hạn/cạn kho qua email/thông báo | Push Notification trên điện thoại |
| **Giao hàng** | Public link `/copy` trên website | Link tải bảo mật sau thanh toán | Link bảo mật + Mã nguồn `setup.gs` | Gói giải pháp đa phòng ban + File hướng dẫn | Bàn giao AppSheet App + Source Web App |

---

## 4. QUY TRÌNH PHÁT HÀNH THEO BATCH (BATCH RELEASE PIPELINE)

79 SKU mục tiêu được phân chia thành **10 Batch chiến lược** để bảo đảm kiểm thử nghiêm ngặt trước khi mở rộng:

1. **Batch 01 (Nền tảng vận hành cốt lõi - Đã hoàn thành)**:
   - `F01`: Quản lý việc cá nhân & Ma trận Eisenhower.
   - `F17`: Sổ thu chi & Dòng tiền Startup.
   - `F18`: Quản lý kho cơ bản & Báo cáo Nhập Xuất Tồn.
   - `F05`: CRM Khách hàng & Pipeline phễu bán hàng.
   - `F24`: Mini ERP Quản trị khép kín (Mua - Bán - Kho - Quỹ).
2. **Batch 02 (Bán hàng & Thương mại điện tử)**:
   - `F19`: Quản lý báo giá & phiên bản chào hàng.
   - `F20`: Quản lý đơn hàng & giao hàng đa kênh.
   - `F21`: Quản lý bán lẻ POS & in hóa đơn.
   - `F22`: CRM Bất động sản & môi giới.
3. **Batch 03 (Tài chính & Kế toán chuyên sâu)**:
   - `F30`: Quản lý công nợ phải thu & phải trả chi tiết.
   - `F34`: Dự toán ngân sách & so sánh thực tế (Budgeting).
   - `F48`: Báo cáo tài chính P&L, Bảng cân đối kế toán SMB.
4. **Batch 04 (Nhân sự & Tiền lương)**:
   - `F09`: Quản lý hồ sơ nhân sự & hợp đồng lao động.
   - `F10`: Bảng chấm công & tính lương tự động.
   - `F11`: Đánh giá KPI nhân viên & hiệu suất phòng ban.
5. **Batch 05 - Batch 10**: Các phân hệ ngành nghề chuyên biệt (F25 F&B Nhà hàng/Cafe, F26 Spa/Salon, F27 Khách sạn/Homestay, F06 Ô tô, và bộ tiện ích U01–U29).
