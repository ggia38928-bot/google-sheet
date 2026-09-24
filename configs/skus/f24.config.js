/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F24 — ERP Lite cơ bản cho doanh nghiệp nhỏ & Hộ kinh doanh
 */

module.exports = {
  sku: 'F24',
  name: 'ERP Lite cơ bản cho đơn vị nhỏ',
  version: '1.0.0',
  description: 'Hệ thống ERP thu nhỏ kết nối Bán hàng (SO), Mua hàng (PO), Quản trị Kho hàng (Ledger), Dòng tiền (Journal) và Công nợ 2 chiều',
  tables: [
    {
      name: 'SALES_ORDERS',
      color: '#1B5E20',
      headers: [
        'Mã đơn bán', 'Ngày tạo đơn', 'Mã khách hàng', 'Tên khách hàng',
        'Tổng giá trị (VND)', 'Đã thanh toán (VND)', 'Công nợ còn lại (VND)',
        'Giao hàng', 'Thanh toán'
      ],
      colWidths: [100, 110, 100, 250, 150, 150, 160, 110, 130],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' },
        { range: 'E2:G1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'H2:H1000', type: 'list', values: ['CHỜ GIAO', 'ĐÃ GIAO', 'HỦY'] }
      ],
      demoRows: [
        ['SO-001', '2026-09-02', 'PART-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 52000000, 52000000, '', 'ĐÃ GIAO', ''],
        ['SO-002', '2026-09-04', 'PART-02', 'Tập đoàn Công Nghệ Viễn Đông', 78000000, 30000000, '', 'ĐÃ GIAO', ''],
        ['SO-003', '2026-09-06', 'PART-03', 'Công ty Xây Lắp Điện Đại Nam', 35000000, 0, '', 'CHỜ GIAO', ''],
        ['SO-004', '2026-09-08', 'PART-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 27000000, 27000000, '', 'ĐÃ GIAO', '']
      ],
      rowFormulas: [
        {
          col: 7,
          formulaFn: `'=MAX(0, E' + r + ' - F' + r + ')'`
        },
        {
          col: 9,
          formulaFn: `'=IF(G' + r + '=0, "ĐÃ THANH TOÁN", IF(F' + r + '=0, "CHƯA TRẢ", "TRẢ 1 PHẦN"))'`
        }
      ]
    },
    {
      name: 'PURCHASE_ORDERS',
      color: '#B71C1C',
      headers: [
        'Mã đơn mua', 'Ngày lập đơn', 'Mã nhà cung cấp', 'Tên nhà cung cấp',
        'Tổng giá trị (VND)', 'Đã thanh toán (VND)', 'Còn phải trả (VND)',
        'Nhập kho', 'Thanh toán'
      ],
      colWidths: [100, 110, 100, 250, 150, 150, 160, 110, 130],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' },
        { range: 'E2:G1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'H2:H1000', type: 'list', values: ['CHỜ NHẬP', 'ĐÃ NHẬP'] }
      ],
      demoRows: [
        ['PO-001', '2026-09-01', 'SUPP-01', 'Tổng Phân Phối Thiết Bị Cisco VN', 70000000, 40000000, '', 'ĐÃ NHẬP', ''],
        ['PO-002', '2026-09-03', 'SUPP-02', 'Nhà Máy Sản Xuất Tủ Mạng An Phát', 36000000, 36000000, '', 'ĐÃ NHẬP', ''],
        ['PO-003', '2026-09-07', 'SUPP-01', 'Tổng Phân Phối Thiết Bị Cisco VN', 42000000, 0, '', 'CHỜ NHẬP', '']
      ],
      rowFormulas: [
        {
          col: 7,
          formulaFn: `'=MAX(0, E' + r + ' - F' + r + ')'`
        },
        {
          col: 9,
          formulaFn: `'=IF(G' + r + '=0, "ĐÃ THANH TOÁN", IF(F' + r + '=0, "CHƯA TRẢ", "TRẢ 1 PHẦN"))'`
        }
      ]
    },
    {
      name: 'INVENTORY_LEDGER',
      color: '#E65100',
      headers: [
        'Mã phát sinh', 'Ngày chứng từ', 'Loại biến động', 'Đơn tham chiếu',
        'Mã SKU', 'Tên hàng hóa', 'Số lượng', 'Đơn giá vốn', 'Thành tiền giá vốn'
      ],
      colWidths: [95, 110, 120, 120, 95, 260, 90, 140, 160],
      formats: [
        { range: 'B2:B10001', format: 'yyyy-mm-dd' },
        { range: 'G2:G10001', format: '#,##0' },
        { range: 'H2:I10001', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['NHẬP PO', 'XUẤT SO', 'KIỂM KÊ'] }
      ],
      demoRows: [
        ['INV-01', '2026-09-01', 'NHẬP PO', 'PO-001', 'SKU-01', 'Thiết bị Cân Bằng Tải Router Pro', 20, 3500000, ''],
        ['INV-02', '2026-09-02', 'XUẤT SO', 'SO-001', 'SKU-01', 'Thiết bị Cân Bằng Tải Router Pro', 10, 3500000, ''],
        ['INV-03', '2026-09-03', 'NHẬP PO', 'PO-002', 'SKU-04', 'Tủ Rack Máy Chủ 12U Tiêu Chuẩn', 20, 1800000, ''],
        ['INV-04', '2026-09-04', 'XUẤT SO', 'SO-002', 'SKU-01', 'Thiết bị Cân Bằng Tải Router Pro', 5, 3500000, ''],
        ['INV-05', '2026-09-04', 'XUẤT SO', 'SO-002', 'SKU-04', 'Tủ Rack Máy Chủ 12U Tiêu Chuẩn', 5, 1800000, ''],
        ['INV-06', '2026-09-08', 'XUẤT SO', 'SO-004', 'SKU-04', 'Tủ Rack Máy Chủ 12U Tiêu Chuẩn', 10, 1800000, '']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: `'=ROUND(G' + r + ' * H' + r + ', 0)'`
        }
      ]
    },
    {
      name: 'FINANCE_JOURNAL',
      color: '#4A148C',
      headers: [
        'Mã bút toán', 'Ngày ghi sổ', 'Phân loại', 'Chứng từ gốc', 'Tài khoản',
        'Số tiền (VND)', 'Diễn giải chi tiết', 'Trạng thái'
      ],
      colWidths: [95, 110, 160, 120, 130, 150, 320, 110],
      formats: [
        { range: 'B2:B10001', format: 'yyyy-mm-dd' },
        { range: 'F2:F10001', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['THU TIỀN ĐƠN BÁN', 'CHI TRẢ ĐƠN MUA', 'CHI VẬN HÀNH', 'THU KHÁC'] },
        { range: 'H2:H1000', type: 'list', values: ['POSTED', 'DRAFT', 'CANCELLED'] }
      ],
      demoRows: [
        ['FN-001', '2026-09-01', 'CHI TRẢ ĐƠN MUA', 'PO-001', 'Vietcombank', 40000000, 'Chuyển khoản tạm ứng đơn mua thiết bị Cisco', 'POSTED'],
        ['FN-002', '2026-09-02', 'THU TIỀN ĐƠN BÁN', 'SO-001', 'Vietcombank', 52000000, 'Khách hàng Sao Mai thanh toán 100% đơn bán', 'POSTED'],
        ['FN-003', '2026-09-03', 'CHI TRẢ ĐƠN MUA', 'PO-002', 'Vietcombank', 36000000, 'Thanh toán trọn gói tiền mua tủ rack An Phát', 'POSTED'],
        ['FN-004', '2026-09-05', 'THU TIỀN ĐƠN BÁN', 'SO-002', 'Vietcombank', 30000000, 'Tập đoàn Viễn Đông tạm ứng đợt 1 hợp đồng', 'POSTED'],
        ['FN-005', '2026-09-06', 'CHI VẬN HÀNH', 'CP-01', 'Tiền mặt', 5000000, 'Chi phí bốc xếp và vận chuyển hàng hóa nội thành', 'POSTED'],
        ['FN-006', '2026-09-08', 'THU TIỀN ĐƠN BÁN', 'SO-004', 'Vietcombank', 27000000, 'Thanh toán đơn hàng tủ rack văn phòng', 'POSTED']
      ]
    },
    {
      name: 'MASTER_PRODUCTS',
      color: '#004D40',
      headers: ['Mã SKU', 'Tên sản phẩm', 'Nhóm hàng', 'ĐVT', 'Giá vốn (VND)', 'Giá bán (VND)', 'Tồn kho hiện tại', 'Giá trị tồn (VND)'],
      colWidths: [100, 260, 140, 70, 140, 140, 130, 160],
      formats: [
        { range: 'E2:F100', format: '#,##0 "₫"' },
        { range: 'H2:H100', format: '#,##0 "₫"' },
        { range: 'G2:G100', format: '#,##0' }
      ],
      demoRows: [
        ['SKU-01', 'Thiết bị Cân Bằng Tải Router Pro', 'Thiết bị mạng', 'Bộ', 3500000, 5200000, '', ''],
        ['SKU-02', 'Bộ Phát Wifi Chuyên Dụng AC1300', 'Thiết bị mạng', 'Bộ', 1200000, 1950000, '', ''],
        ['SKU-03', 'Switch Quản Lý 24 Cổng Gigabit', 'Thiết bị mạng', 'Cái', 2800000, 4100000, '', ''],
        ['SKU-04', 'Tủ Rack Máy Chủ 12U Tiêu Chuẩn', 'Phụ kiện tủ rack', 'Cái', 1800000, 2700000, '', '']
      ],
      rowFormulas: [
        {
          col: 7,
          formulaFn: `'=SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "NHẬP PO") - SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "XUẤT SO") + SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "KIỂM KÊ")'`
        },
        {
          col: 8,
          formulaFn: `'=MAX(0, G' + r + ') * E' + r`
        }
      ]
    },
    {
      name: 'MASTER_PARTIES',
      color: '#263238',
      headers: ['Mã đối tác', 'Tên công ty / Đối tác', 'Vai trò', 'Số điện thoại', 'Địa chỉ', 'Công nợ tích lũy (VND)'],
      colWidths: [100, 260, 130, 130, 200, 170],
      formats: [
        { range: 'F2:F100', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['PART-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 'KHÁCH HÀNG', '0908112233', 'Cầu Giấy, Hà Nội', ''],
        ['PART-02', 'Tập đoàn Công Nghệ Viễn Đông', 'KHÁCH HÀNG', '0912334455', 'Quận 3, TP.HCM', ''],
        ['PART-03', 'Công ty Xây Lắp Điện Đại Nam', 'KHÁCH HÀNG', '0988445566', 'Đà Nẵng', ''],
        ['SUPP-01', 'Tổng Phân Phối Thiết Bị Cisco VN', 'NHÀ CUNG CẤP', '0283899999', 'Quận 1, TP.HCM', ''],
        ['SUPP-02', 'Nhà Máy Sản Xuất Tủ Mạng An Phát', 'NHÀ CUNG CẤP', '0243788888', 'Bắc Ninh', '']
      ],
      rowFormulas: [
        {
          col: 6,
          formulaFn: `'=IF(C' + r + '="KHÁCH HÀNG", SUMIF(SALES_ORDERS!$C$2:$C$1000, A' + r + ', SALES_ORDERS!$G$2:$G$1000), SUMIF(PURCHASE_ORDERS!$C$2:$C$1000, A' + r + ', PURCHASE_ORDERS!$G$2:$G$1000))'`
        }
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên doanh nghiệp vận hành:', 'Công ty Cổ phần Giải Pháp Số Minh ERP'],
      ['Mã số thuế:', '0318999888'],
      ['Đơn vị tiền tệ chính:', 'VND'],
      ['Kỳ kế toán báo cáo:', 'Tháng 09/2026'],
      ['Tài khoản ngân hàng giao dịch:', 'Vietcombank - 0071009998888']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH TỔNG THỂ DOANH NGHIỆP — MINI ERP (F24)',
    subtitle: 'Kết nối Bán hàng • Mua hàng • Tồn kho • Quỹ tiền • Quản trị Công nợ 2 chiều và Lợi nhuận gộp thời gian thực',
    kpiCards: [
      {
        label: 'DOANH THU BÁN HÀNG',
        formula: '=SUM(SALES_ORDERS!$E$2:$E$1000)',
        format: '#,##0 "₫"',
        note: 'Tổng giá trị các đơn bán (SO)',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'LỢI NHUẬN GỘP (EST.)',
        formula: '=A5 - SUMIFS(INVENTORY_LEDGER!$I$2:$I$10001, INVENTORY_LEDGER!$C$2:$C$10001, "XUẤT SO")',
        format: '#,##0 "₫"',
        note: 'Doanh số - Giá vốn hàng xuất bán',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'CÔNG NỢ PHẢI THU',
        formula: '=SUM(SALES_ORDERS!$G$2:$G$1000)',
        format: '#,##0 "₫"',
        note: 'Khách hàng chưa thanh toán',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'CÔNG NỢ PHẢI TRẢ',
        formula: '=SUM(PURCHASE_ORDERS!$G$2:$G$1000)',
        format: '#,##0 "₫"',
        note: 'Còn phải trả Nhà cung cấp',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'GIÁ TRỊ TỒN KHO',
        formula: '=SUM(MASTER_PRODUCTS!$H$2:$H$1000)',
        format: '#,##0 "₫"',
        note: 'Tồn kho quy đổi theo giá vốn',
        bg: '#E0F2F1',
        textColor: '#004D40',
        valColor: '#00695C'
      },
      {
        label: 'SỐ DƯ QUỸ TIỀN',
        formula: '=SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "THU TIỀN ĐƠN BÁN", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") + SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "THU KHÁC", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") - SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "CHI TRẢ ĐƠN MUA", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") - SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "CHI VẬN HÀNH", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED")',
        format: '#,##0 "₫"',
        note: 'Tiền mặt và ngân hàng hiện hữu',
        bg: '#F3E5F5',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ],
    subTables: [
      {
        title: 'THEO DÕI CÔNG NỢ ĐƠN BÁN HÀNG (PHẢI THU)',
        titleRange: 'A8:E8',
        headerBg: '#FFE0B2',
        headerTextColor: '#E65100',
        colHeaderBg: '#F57C00',
        startRow: 9,
        startCol: 1,
        headers: ['Mã đơn bán', 'Khách hàng', 'Tổng đơn (VND)', 'Đã thu (VND)', 'Còn nợ (VND)'],
        rowFormulas: [
          {
            fromIdx: 2,
            toIdx: 5,
            rowOffset: 8,
            cells: [
              { col: 1, formulaFn: `'=IF(SALES_ORDERS!A' + i + '<>"","SALES_ORDERS!A' + i + '","")'` },
              { col: 2, formulaFn: `'=IF(SALES_ORDERS!D' + i + '<>"","SALES_ORDERS!D' + i + '","")'` },
              { col: 3, formulaFn: `'=IF(SALES_ORDERS!E' + i + '<>"","SALES_ORDERS!E' + i + '","")'` },
              { col: 4, formulaFn: `'=IF(SALES_ORDERS!F' + i + '<>"","SALES_ORDERS!F' + i + '","")'` },
              { col: 5, formulaFn: `'=IF(SALES_ORDERS!G' + i + '<>"","SALES_ORDERS!G' + i + '","")'` }
            ]
          }
        ],
        formats: [
          { range: 'C10:E14', format: '#,##0 "₫"' }
        ]
      },
      {
        title: 'THEO DÕI CÔNG NỢ ĐƠN MUA HÀNG (PHẢI TRẢ)',
        titleRange: 'G8:K8',
        headerBg: '#FFCDD2',
        headerTextColor: '#B71C1C',
        colHeaderBg: '#D32F2F',
        startRow: 9,
        startCol: 7,
        headers: ['Mã đơn mua', 'Nhà cung cấp', 'Tổng đơn (VND)', 'Đã trả (VND)', 'Còn nợ NCC'],
        rowFormulas: [
          {
            fromIdx: 2,
            toIdx: 4,
            rowOffset: 8,
            cells: [
              { col: 7, formulaFn: `'=IF(PURCHASE_ORDERS!A' + i + '<>"","PURCHASE_ORDERS!A' + i + '","")'` },
              { col: 8, formulaFn: `'=IF(PURCHASE_ORDERS!D' + i + '<>"","PURCHASE_ORDERS!D' + i + '","")'` },
              { col: 9, formulaFn: `'=IF(PURCHASE_ORDERS!E' + i + '<>"","PURCHASE_ORDERS!E' + i + '","")'` },
              { col: 10, formulaFn: `'=IF(PURCHASE_ORDERS!F' + i + '<>"","PURCHASE_ORDERS!F' + i + '","")'` },
              { col: 11, formulaFn: `'=IF(PURCHASE_ORDERS!G' + i + '<>"","PURCHASE_ORDERS!G' + i + '","")'` }
            ]
          }
        ],
        formats: [
          { range: 'I10:K14', format: '#,##0 "₫"' }
        ]
      }
    ]
  }
};
