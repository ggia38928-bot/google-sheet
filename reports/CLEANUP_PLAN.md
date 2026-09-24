# KẾ HOẠCH LƯU TRỮ VÀ DỌN DẸP AN TOÀN (CLEANUP_PLAN.md)
*Nguyên tắc tối cao: TUYỆT ĐỐI KHÔNG TỰ ĐỘNG XÓA BẤT KỲ TỆP TIN NÀO*

---

## 1. NGUYÊN TẮC BẢO TOÀN DỮ LIỆU
1. **Zero-Deletion Policy**: Không một tệp tin nào bị xóa khỏi hệ thống.
2. **Bảo tồn toàn vẹn các phân hệ sản xuất**:
   - `packages/core-engine/`: Động cơ sinh mã và thẩm định.
   - `configs/skus/`: Nơi chứa bản thiết kế gốc của các template.
   - `tools/`: Các công cụ CLI phục vụ build.
   - `releases/`: Toàn bộ sản phẩm xuất xưởng thương mại của các SKU.
   - `tests/`: Bộ test suites tự động bảo vệ chất lượng.
   - `CODEX_COMMERCIAL_KIT/`: Tài liệu và mã nguồn tham chiếu đối chuẩn.

---

## 2. DANH SÁCH ĐỀ XUẤT LƯU TRỮ (PROPOSED ARCHIVE LIST)
*Các tệp/thư mục dưới đây được lập danh sách để đề xuất di chuyển vào thư mục `.archive/` khi được người dùng phê duyệt bằng văn bản. Hiện tại tất cả vẫn đang được giữ nguyên vị trí ban đầu:*

| STT | Đối tượng | Đường dẫn hiện tại | Lý do đề xuất lưu trữ | Vị trí lưu trữ đề xuất | Trạng thái |
|:---:|---|---|---|---|:---:|
| 1 | Thư mục duplicate | `codex_kit/CODEX_COMMERCIAL_KIT/` | Trùng lặp 100% (24 tệp) với `CODEX_COMMERCIAL_KIT/CODEX_COMMERCIAL_KIT/` do giải nén trùng | `.archive/duplicates/codex_kit/` | `PENDING_REVIEW` |
| 2 | File tài liệu trùng | `BUILD_ALL_TEMPLATES_CODEX.md` (root) | Trùng lặp 100% với file bên trong `baseline/` của Codex Kit | `.archive/docs/BUILD_ALL_TEMPLATES_CODEX.md` | `PENDING_REVIEW` |
| 3 | Script quét tạm | `audit_scan.js` | Script tiện ích tạm thời dùng để kiểm đếm dung lượng file | `.archive/scripts/audit_scan.js` | `PENDING_REVIEW` |
| 4 | Script kiểm tra cũ | `verify_workspace.js` | Script kiểm tra danh mục 53 file cũ trước khi nâng cấp | `.archive/scripts/verify_workspace.js` | `PENDING_REVIEW` |
| 5 | Script quét hash | `tools/scan_dupes.js` | Script tạm thời quét mã băm SHA-256 phát hiện trùng lặp | `.archive/scripts/scan_dupes.js` | `PENDING_REVIEW` |
| 6 | File tài liệu trung gian | `minh-templates-codex-sources.md` | Dữ liệu nguồn đã được chuẩn hóa vào `SOURCE_MAP.csv` và `PRODUCT_CATALOG.json` | `.archive/docs/minh-templates-codex-sources.md` | `PENDING_REVIEW` |

---

## 3. TRẠNG THÁI THỰC THI HIỆN TẠI
- **Trạng thái**: `STRICT_PRESERVATION` (Giữ nguyên toàn bộ 100% tệp tin trên cả ổ `c:\` và `D:\`).
- Không có bất kỳ hành động xóa hay di dời tự phát nào được thực hiện.
