import json
import re

with open('GSHEETS_TEN_MO_TA_TRANG_01_15(1).md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

table_lines = [l.strip() for l in lines if '|' in l and not l.startswith('| ---')]
data_rows = table_lines[1:]

products = []
for index, line in enumerate(data_rows):
    parts = re.split(r'(?<!\\)\|', line)
    parts = [p.strip().replace(r'\|', '|') for p in parts if p.strip()]
    if len(parts) >= 2:
        raw_name = parts[0]
        desc = parts[1]
        
        is_webapp = raw_name.startswith("Webapp")
        p_type = "webapp" if is_webapp else "gsheet"
        clean_title = raw_name.replace("Webapp | ", "").replace("Google Sheets | ", "")
        
        # Tách version từ tên: ví dụ (v1.0), (v4.1 startup)
        ver_match = re.search(r'\((v.*?)\)', clean_title)
        version = ver_match.group(1) if ver_match else "v1.0"
        
        # Bóc tách các tính năng con từ chính đoạn mô tả thật (chia theo dấu chấm phẩy ;)
        raw_features = [f.strip() for f in desc.split(';') if len(f.strip()) > 5]
        if not raw_features:
            raw_features = [desc]
        features = raw_features[:4] # Lấy tối đa 4 tính năng đặc thù nhất của version đó
        
        # Gán Demo App tương ứng cho Webapp
        name_lower = clean_title.lower()
        if 'kho' in name_lower or 'nhập xuất tồn' in name_lower:
            app_route = 'inventory'
            category = 'Quản lý Kho'
        elif 'thu chi' in name_lower or 'ngân sách' in name_lower:
            app_route = 'cashflow'
            category = 'Tài chính - Thu chi'
        elif 'công việc' in name_lower or 'dự án' in name_lower:
            app_route = 'project'
            category = 'Dự án & Công việc'
        elif 'cafe' in name_lower or 'nhà hàng' in name_lower or 'quán ăn' in name_lower:
            app_route = 'fnb'
            category = 'F&B & Nhà hàng'
        elif 'chăm sóc khách hàng' in name_lower or 'crm' in name_lower:
            app_route = 'crm'
            category = 'CRM & Khách hàng'
        elif 'thiết bị' in name_lower:
            app_route = 'equipment'
            category = 'Thiết bị & Cho thuê'
        elif 'erp' in name_lower:
            app_route = 'erp'
            category = 'Quản trị Doanh nghiệp'
        else:
            app_route = 'general_webapp' if is_webapp else 'sheet_preview'
            category = 'Tiện ích Doanh nghiệp'

        price = 579000 if is_webapp else 199000
        if 'v4.1' in clean_title or 'v5.0' in clean_title: price = 650000

        products.append({
            "id": f"GS-{index+1:03d}",
            "title": clean_title,
            "rawName": raw_name,
            "type": p_type,
            "version": version,
            "category": category,
            "description": desc,
            "features": features, # Tính năng thật riêng biệt từng app
            "price": price,
            "originalPrice": int(price * 1.35),
            "appRoute": app_route,
            "sheetUrl": f"https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview" if not is_webapp else None
        })

output_file = 'apps/admin-web/src/data/exactCatalog.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"Đã xuất {len(products)} sản phẩm với tính năng độc bản vào {output_file}")