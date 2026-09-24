# Kế hoạch đã thực hiện

1. Đối soát repository và đóng băng artifact cũ.
2. Thay path resolver bằng discovery từ repository và chặn output ngoài root.
3. Tạo oracle F05 trước implementation.
4. Xây engine cục bộ idempotency, backup/restore, role, khóa kỳ, RowVersion, workflow, import safe, migration và KPI.
5. Đóng gói F05 `3.0.0-vi`; dừng trước F18/F19/F20/F30/F39 và trước G2.
