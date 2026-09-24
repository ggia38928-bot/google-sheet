# BÁO CÁO KIỂM TOÁN TOÀN DIỆN WORKSPACE (WORKSPACE AUDIT REPORT)
**Hệ thống:** MINH TEMPLATES FACTORY  
**Thời gian cập nhật:** 11/09/2026 | **Phiên bản kiến trúc:** 2.1.0 Enterprise Normalization  

---

## 1. TỔNG QUAN TÀI NGUYÊN & CẤU TRÚC THƯ MỤC

Hệ thống hiện tại gồm **187 tệp tin** phân bổ trên các phân hệ chính:
- **Thư mục gốc (`/`)**: Quản lý dự án, catalog, source map, tài liệu kiến trúc, batch runners.
- **`packages/core-engine/`**: Bộ động cơ sinh mã và thẩm định (specValidator, tierTransformer, gasEmitter, syntaxChecker, pathResolver).
- **`packages/` (legacy)**: Các module tiền thân (schema, domain, sheets, gas, appsheet, testing).
- **`configs/skus/`**: 5 file cấu hình SKU chuẩn hóa thực tế (`f01`, `f05`, `f17`, `f18`, `f24`).
- **`tools/`**: Công cụ CLI runner sinh mã tự động (`generator.js`).
- **`tests/`**: Bộ test suite tự động cục bộ (`batch1_formulas.test.mjs`, `core_engine.test.mjs`).
- **`releases/`**: 5 SKU đã xuất xưởng đầy đủ 5 tầng (`F01`, `F05`, `F17`, `F18`, `F24`) và bộ cài đặt `all_installers.gs`.
- **`CODEX_COMMERCIAL_KIT/` & `codex_kit/`**: Tài liệu và mã nguồn tham chiếu đối chuẩn.

---

## 2. KẾT QUẢ KIỂM TRA & PHÁT HIỆN BẤT THƯỜNG (AUDIT FINDINGS)

### A. Thư mục lồng nhau do giải nén (Nested ZIP Folders)
1. **`CODEX_COMMERCIAL_KIT/CODEX_COMMERCIAL_KIT/`**:
   - Phát hiện cấu trúc lồng nhau 2 cấp do quá trình giải nén archive ban đầu (`CODEX_COMMERCIAL_KIT` nằm bên trong `CODEX_COMMERCIAL_KIT`).
2. **`codex_kit/CODEX_COMMERCIAL_KIT/`**:
   - Toàn bộ 24 tệp tin trong thư mục `codex_kit/CODEX_COMMERCIAL_KIT/` là bản sao trùng lặp 100% (cùng mã băm SHA-256) với `CODEX_COMMERCIAL_KIT/CODEX_COMMERCIAL_KIT/`.

### B. Tệp tin trùng lặp nội dung (Exact Duplicate Files - 35 Nhóm)
- **Nhóm 1 (Tài liệu gốc)**:
  - `BUILD_ALL_TEMPLATES_CODEX.md` (Thư mục gốc, 202.038 bytes)
  - `CODEX_COMMERCIAL_KIT/CODEX_COMMERCIAL_KIT/baseline/BUILD_ALL_TEMPLATES_CODEX.md`
  - `codex_kit/CODEX_COMMERCIAL_KIT/baseline/BUILD_ALL_TEMPLATES_CODEX.md`
  *(Cả 3 tệp đều có mã băm SHA-256 hoàn toàn đồng nhất).*
- **Nhóm 2–30 (Bộ 24 tệp Codex Kit)**:
  - Tất cả các tệp `.gs`, `.html`, `.mjs`, `.json`, `.md` giữa `CODEX_COMMERCIAL_KIT/CODEX_COMMERCIAL_KIT/` và `codex_kit/CODEX_COMMERCIAL_KIT/` đều trùng lặp từng byte.
- **Nhóm 31–35 (Bản xuất xưởng mặc định)**:
  - Trong mỗi thư mục `releases/<SKU>/1.0.0/`, tệp `setup.gs` trùng lặp 100% với `setup_pro.gs` (do gói PRO được chọn làm bản cài đặt tiêu chuẩn mặc định để duy trì tính tương thích ngược).

### C. Tệp tin trung gian & Script tạm thời (Intermediate Files)
1. `audit_scan.js`: Script tạm quét dung lượng tệp ban đầu.
2. `verify_workspace.js`: Script kiểm tra danh sách 53 tệp cũ.
3. `tools/scan_dupes.js`: Script quét mã băm phát hiện tệp trùng.
4. `.keep`: Tệp tạm tạo để bảo toàn thư mục Cwd.

### D. Tệp tin có đường dẫn Hard-code (Hard-coded Paths)
1. `tools/generator.js` (dòng 20): `const D_DRIVE_ROOT = 'D:/google sheet';` -> **Đã xác định để chuẩn hóa tại Bước 2 thành cơ chế 3 tầng (`--root`, `MINH_TEMPLATES_ROOT`, Windows default).**
2. `run_generator_all.bat` và `run_generator_batch1.bat`: Đường dẫn `%APPDATA%\Antigravity\bin\node.cmd`.

### E. Kiểm tra tệp được tham chiếu (Referenced Files Integrity)
- Đã kiểm tra `releases/F01/1.0.0/RELEASE_MANIFEST.json`:
  - Tham chiếu 13 tệp: `installer.js`, `clean/workbook.json`, `clean/Tasks.csv`, `demo/workbook.json`, `demo/Tasks.csv`, `appsheet/tables.csv`, `appsheet/columns.csv`, `appsheet/views.csv`, `appsheet/actions.csv`, `appsheet/bots.md`, `appsheet/APPSHEET_SETUP.md`, `docs/README.md`, `docs/FAQ.md`, `docs/TROUBLESHOOTING.md`.
  - **Kết quả**: 13/13 tệp đều tồn tại đầy đủ, nguyên vẹn trên đĩa. Không có liên kết gãy.

---

## 3. ĐỐI SOÁT TÍNH TRUNG THỰC: PRODUCT_CATALOG vs PROGRESS vs RELEASE_MANIFEST

| Tiêu chí | `PRODUCT_CATALOG.json` | `PROGRESS.md` (Cũ) | `RELEASE_MANIFEST.json` | Đánh giá & Chuẩn hóa thực tế |
|---|---|---|---|---|
| **Quy mô danh mục** | 79 SKU mục tiêu (50 Families, 29 Utilities) | 5 SKU Batch 1 | 1 SKU (F01) | **79 là danh mục mục tiêu kinh doanh**. Hiện tại chỉ có 5 SKU có cấu hình thật. 74 SKU còn lại là `cataloged`/`mapped`. |
| **Trạng thái F01** | `implemented_local` | `ready_to_sell` (ghi Live Google) | `implemented_local` (`testedOnGoogle: false`) | **Chuẩn hóa về `implemented_local`**. F01 đã pass 100% test local nhưng chưa có OAuth token tài khoản Google sống để triển khai từ xa (theo `BLOCKERS.md`). |
| **Trạng thái F17, F18, F05, F24** | `mapped` (chưa cập nhật) | `ready_to_sell` | Chưa có manifest riêng | **Chuẩn hóa về `implemented_local`**. Cả 4 SKU đều đã có config thật, pass 100% automated tests và sinh đủ 5 gói. |
| **Số lượng bài test** | Chưa ghi | 19 tests engine + 11 tests formula = 30 tests | 50 tests (mock cũ của F01) | **30 tests tự động hiện tại (100% PASS)** là bằng chứng kỹ thuật có thể tái lập tức thì qua lệnh `node --test tests/*.test.mjs`. |

---

## 4. KẾT LUẬN & ĐỀ NGHỊ
1. Duy trì nguyên tắc **không xóa bất kỳ tệp tin nào**; các tệp trùng hoặc phụ trợ được đưa vào danh sách đề xuất lưu trữ trong `CLEANUP_PLAN.md`.
2. Chuẩn hóa toàn bộ logic resolve đường dẫn trong `tools/generator.js` sang mô hình đa môi trường, không giả định luôn có ổ `D:\`.
3. Chỉ đánh dấu SKU là đã hoàn thành khi có file cấu hình thực tế trong `configs/skus/`.
