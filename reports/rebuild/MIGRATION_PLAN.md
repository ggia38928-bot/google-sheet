# Kế hoạch migration

`migrateF05(mapping, {dryRun:true})` chỉ trả mapping dự kiến, không ghi header. Migration thật phải sao lưu trước và chỉ reconcile header theo schema whitelist. G2 sẽ kiểm tra dry-run, migration, restore và rollback trên Spreadsheet thử nghiệm; không có migration production trong checkpoint này.
