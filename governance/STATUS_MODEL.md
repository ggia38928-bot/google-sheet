# Mô hình trạng thái sản phẩm

| Trạng thái | Điều kiện |
|---|---|
| `specified` | Đặc tả, schema và hợp đồng công thức đạt G0; G1 chưa đạt. |
| `local_verified` | G0 và G1 đều PASS bằng kiểm thử local có bằng chứng. |
| `google_verified` | G2 PASS trên Google Sheets thật. |
| `appsheet_verified` | G3 PASS với ứng dụng AppSheet thật. |
| `ready_to_sell` | G4 PASS sau UAT, hồ sơ thương mại và phê duyệt. |

Không được suy diễn gate cao hơn từ số file, kiểm tra cú pháp hoặc dữ liệu mô phỏng. Mỗi trạng thái chỉ được nâng khi gate tương ứng có bằng chứng.
