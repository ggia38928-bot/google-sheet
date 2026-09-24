/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F48 — Báo Cáo Chi Phí, P&L và Dòng Tiền (Cost, P&L and Cash Flow Reporting)
 */

module.exports = {
  sku: 'F48',
  name: 'Báo cáo chi phí, P&L và dòng tiền',
  version: '1.0.0',
  description: 'Hệ thống kế toán quản trị chuyên sâu: lập báo cáo kết quả kinh doanh P&L theo nguyên tắc dồn tích, phân tích dòng tiền Cash Flow trực tiếp và phân bổ chi phí đa chiều',
  tables: [
    {
      name: 'FINANCE_FACTS',
      color: '#1565C0',
      headers: [
        'Mã bút toán', 'Ngày chứng từ', 'Kỳ kế toán', 'Mã tài khoản', 'Tên khoản mục',
        'Phòng ban', 'Mã dự án', 'Số tiền (VND)', 'Phân loại P&L', 'Phân loại CashFlow',
        'Mã nguồn tham chiếu', 'Diễn giải'
      ],
      colWidths: [130, 110, 100, 120, 220, 140, 120, 170, 140, 150, 150, 240],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' },
        { range: 'H2:H1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'I2:I1000', type: 'list', values: ['REVENUE', 'COGS', 'OPEX', 'NON_OPERATING', 'FINANCING', 'NONE'] },
        { range: 'J2:J1000', type: 'list', values: ['OPERATING', 'INVESTING', 'FINANCING', 'NON_CASH'] }
      ],
      demoRows: [
        ['FACT-001', '2026-08-01', '2026-08', 'REV-SALES', 'Doanh thu bán hàng hóa', 'KINH DOANH', 'PRJ-RETAIL', 1000000, 'REVENUE', 'NON_CASH', 'SO-2026-001', 'Bán chịu 1 triệu theo CODEX Acceptance Test'],
        ['FACT-002', '2026-08-05', '2026-08', 'REV-SALES', 'Doanh thu bán hàng thu tiền ngay', 'KINH DOANH', 'PRJ-RETAIL', 120000000, 'REVENUE', 'OPERATING', 'SO-2026-002', 'Bán hàng thu tiền ngay qua ngân hàng'],
        ['FACT-003', '2026-08-10', '2026-08', 'COGS-PROD', 'Giá vốn hàng xuất bán', 'VẬN HÀNH', 'PRJ-RETAIL', 65000000, 'COGS', 'NON_CASH', 'INV-OUT-001', 'Xuất kho giá vốn hàng bán kỳ tháng 8'],
        ['FACT-004', '2026-08-12', '2026-08', 'OPEX-SAL', 'Chi phí lương nhân viên', 'NHÂN SỰ', 'CORP', 25000000, 'OPEX', 'OPERATING', 'PAYROLL-08', 'Chi trả lương nhân viên đợt 1'],
        ['FACT-005', '2026-08-15', '2026-08', 'OPEX-RENT', 'Chi phí thuê văn phòng', 'VẬN HÀNH', 'CORP', 15000000, 'OPEX', 'OPERATING', 'EXP-RENT-08', 'Chi phí tiền thuê văn phòng tháng 8'],
        ['FACT-006', '2026-08-20', '2026-08', 'FIN-LOAN', 'Tiền vay ngân hàng giải ngân', 'BAN GIÁM ĐỐC', 'FINANCE', 500000000, 'FINANCING', 'FINANCING', 'LOAN-VCB-01', 'Tiền vay ngân hàng theo CODEX Acceptance Test']
      ]
    },
    {
      name: 'REPORT_MAPPINGS',
      color: '#0277BD',
      headers: [
        'Mã mapping', 'Mã tài khoản/Khoản mục', 'Tên hiển thị báo cáo', 'Báo cáo áp dụng', 'Nhóm chỉ tiêu', 'Dấu ghi nhận (+/-)'
      ],
      colWidths: [120, 170, 240, 140, 200, 130],
      formats: [
        { range: 'F2:F1000', format: '0' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['PL', 'CASHFLOW', 'OPEX'] },
        { range: 'F2:F1000', type: 'list', values: ['1', '-1'] }
      ],
      demoRows: [
        ['MAP-001', 'REV-SALES', '1. Doanh thu bán hàng & cung cấp dịch vụ', 'PL', 'DOANH THU', 1],
        ['MAP-002', 'COGS-PROD', '2. Giá vốn hàng bán', 'PL', 'GIÁ VỐN', -1],
        ['MAP-003', 'OPEX-SAL', '3. Chi phí tiền lương nhân viên', 'PL', 'CHI PHÍ HOẠT ĐỘNG', -1],
        ['MAP-004', 'OPEX-RENT', '4. Chi phí thuê mặt bằng & văn phòng', 'PL', 'CHI PHÍ HOẠT ĐỘNG', -1],
        ['MAP-005', 'FIN-LOAN', 'Tiền vay ngân hàng nhận được', 'CASHFLOW', 'DÒNG TIỀN TÀI CHÍNH', 1]
      ]
    },
    {
      name: 'REPORTING_PERIODS',
      color: '#2E7D32',
      headers: [
        'Mã kỳ kế toán', 'Tên kỳ báo cáo', 'Ngày bắt đầu', 'Ngày kết thúc', 'Khóa sổ', 'Người thực hiện'
      ],
      colWidths: [130, 200, 120, 120, 100, 180],
      formats: [
        { range: 'C2:D1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'E2:E1000', type: 'list', values: ['OPEN', 'CLOSED'] }
      ],
      demoRows: [
        ['2026-07', 'Kỳ báo cáo Tháng 07/2026', '2026-07-01', '2026-07-31', 'CLOSED', 'Kế toán trưởng'],
        ['2026-08', 'Kỳ báo cáo Tháng 08/2026', '2026-08-01', '2026-08-31', 'OPEN', 'Kế toán trưởng']
      ]
    },
    {
      name: 'REPORT_ADJUSTMENTS',
      color: '#6A1B9A',
      headers: [
        'Mã điều chỉnh', 'Kỳ kế toán', 'Mã tài khoản', 'Số tiền điều chỉnh (VND)', 'Lý do điều chỉnh', 'Trạng thái'
      ],
      colWidths: [130, 110, 150, 180, 260, 120],
      formats: [
        { range: 'D2:D1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['DRAFT', 'POSTED'] }
      ],
      demoRows: [
        ['ADJ-001', '2026-08', 'COGS-PROD', -2000000, 'Điều chỉnh giảm giá vốn do nhà cung cấp chiết khấu hồi tố', 'POSTED']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị lập báo cáo:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Mã số thuế:', '0316889988'],
      ['Phương pháp tính giá vốn:', 'Bình quân gia quyền (Weighted Average)'],
      ['Phương pháp lưu chuyển tiền tệ:', 'Phương pháp Trực tiếp (Direct Method)'],
      ['Kế toán trưởng phụ trách:', 'Nguyễn Thị Bích Ngọc - CPA Việt Nam']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH BÁO CÁO KẾT QUẢ KINH DOANH P&L & DÒNG TIỀN QUẢN TRỊ (F48)',
    subtitle: 'Doanh thu thực tế • Giá vốn hàng bán • Lợi nhuận gộp • Dòng tiền kinh doanh thuần',
    kpiCards: [
      {
        label: 'DOANH THU THUẦN (P&L)',
        formula: '=SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "REVENUE")',
        format: '#,##0 "₫"',
        note: 'Doanh thu ghi nhận theo chuẩn kế toán dồn tích',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'LỢI NHUẬN GỘP (GROSS PROFIT)',
        formula: '=B4 - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "COGS")',
        format: '#,##0 "₫"',
        note: 'Doanh thu trừ Giá vốn hàng bán',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'LỢI NHUẬN THUẦN TỪ HĐKD',
        formula: '=B5 - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "OPEX")',
        format: '#,##0 "₫"',
        note: 'Lợi nhuận gộp trừ Chi phí vận hành (OPEX)',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      },
      {
        label: 'DÒNG TIỀN KINH DOANH THUẦN (CASH FLOW)',
        formula: '=SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$J$2:$J$1000, "OPERATING", FINANCE_FACTS!$I$2:$I$1000, "REVENUE") - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$J$2:$J$1000, "OPERATING", FINANCE_FACTS!$I$2:$I$1000, "<>REVENUE")',
        format: '#,##0 "₫"',
        note: 'Dòng tiền thực thu trừ thực chi hoạt động kinh doanh',
        bg: '#FFF8E1',
        textColor: '#F57F17',
        valColor: '#F9A825'
      }
    ]
  }
};
