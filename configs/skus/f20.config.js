/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F20 — Bán hàng & Theo dõi Đơn hàng Đa kênh (Omnichannel Orders)
 */

module.exports = {
  sku: 'F20',
  name: 'Bán hàng & Quản lý Đơn hàng Đa kênh',
  version: '1.0.0',
  description: 'Quản lý tập trung đơn hàng từ Shopee, TikTok Shop, Lazada, Website và Cửa hàng. Theo dõi dòng trạng thái vận chuyển, đối soát tiền thu hộ COD và phí sàn',
  tables: [
    {
      name: 'ORDERS',
      color: '#E65100',
      headers: [
        'Mã đơn hàng', 'Ngày đặt', 'Kênh bán', 'Mã KH', 'Tên người nhận', 'SĐT', 'Đơn vị VC',
        'Mã vận đơn', 'Tiền hàng (VND)', 'Phí ship báo khách (VND)', 'Giảm giá/Voucher (VND)',
        'Tổng thu khách (VND)', 'Phí sàn & VC thực tế (VND)', 'Doanh thu thuần (VND)',
        'Hình thức TT', 'Trạng thái TT', 'Trạng thái đơn', 'Ghi chú'
      ],
      colWidths: [110, 105, 120, 100, 200, 120, 120, 140, 150, 160, 160, 160, 170, 160, 120, 130, 130, 200],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' },
        { range: 'I2:N1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'] },
        { range: 'G2:G1000', type: 'list', values: ['GHTK', 'GHN', 'Viettel Post', 'Shopee Xpress', 'J&T Express', 'Hỏa Tốc'] },
        { range: 'O2:O1000', type: 'list', values: ['COD', 'CHUYỂN KHOẢN', 'TIỀN MẶT', 'VÍ ĐIỆN TỬ'] },
        { range: 'P2:P1000', type: 'list', values: ['CHƯA THANH TOÁN', 'ĐÃ THANH TOÁN', 'MỘT PHẦN'] },
        { range: 'Q2:Q1000', type: 'list', values: ['CHỜ XÁC NHẬN', 'ĐANG XỬ LÝ', 'ĐANG GIAO', 'HOÀN TẤT', 'HOÀN HÀNG', 'ĐÃ HỦY'] }
      ],
      demoRows: [
        ['ORD-1001', '2026-09-01', 'SHOPEE', 'CUST-01', 'Lê Văn Hùng', '0912345678', 'Shopee Xpress', 'SPX-998811', 850000, 30000, 50000, '', 95000, '', 'COD', 'ĐÃ THANH TOÁN', 'HOÀN TẤT', 'Giao thành công'],
        ['ORD-1002', '2026-09-02', 'TIKTOK', 'CUST-02', 'Phạm Quỳnh Nga', '0987654321', 'J&T Express', 'JT-554433', 1200000, 0, 100000, '', 145000, '', 'CHUYỂN KHOẢN', 'ĐÃ THANH TOÁN', 'HOÀN TẤT', 'Đã thanh toán trước qua cổng sàn'],
        ['ORD-1003', '2026-09-03', 'FACEBOOK', 'CUST-03', 'Hoàng Minh Tuấn', '0933112233', 'GHTK', 'S189921', 650000, 35000, 0, '', 42000, '', 'COD', 'CHƯA THANH TOÁN', 'ĐANG GIAO', 'Đang vận chuyển giao ca chiều'],
        ['ORD-1004', '2026-09-04', 'WEBSITE', 'CUST-04', 'Nguyễn Bích Ngọc', '0945678901', 'GHN', 'GHN-88129', 2400000, 0, 200000, '', 85000, '', 'CHUYỂN KHOẢN', 'ĐÃ THANH TOÁN', 'ĐANG XỬ LÝ', 'Đang đóng gói tại kho tổng'],
        ['ORD-1005', '2026-09-05', 'SHOPEE', 'CUST-05', 'Đỗ Thành Trung', '0909090909', 'Shopee Xpress', 'SPX-776655', 450000, 25000, 0, '', 55000, '', 'COD', 'CHƯA THANH TOÁN', 'HOÀN HÀNG', 'Khách không nghe máy khi giao']
      ],
      rowFormulas: [
        {
          col: 12,
          formulaFn: `'=I' + r + ' + J' + r + ' - K' + r`
        },
        {
          col: 14,
          formulaFn: `'=L' + r + ' - M' + r`
        }
      ]
    },
    {
      name: 'ORDER_ITEMS',
      color: '#1B5E20',
      headers: [
        'Mã dòng', 'Mã đơn hàng', 'Mã SKU', 'Tên sản phẩm', 'ĐVT', 'Số lượng đặt',
        'Số lượng đã giao', 'Đơn giá bán (VND)', 'Thành tiền (VND)', 'Giá vốn xuất kho (VND)', 'Lợi nhuận gộp (VND)'
      ],
      colWidths: [100, 110, 110, 260, 70, 100, 110, 140, 150, 150, 150],
      formats: [
        { range: 'H2:K1000', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['OI-001', 'ORD-1001', 'SKU-A01', 'Bàn phím cơ Bluetooth công thái học', 'Cái', 1, 1, 850000, '', 520000, ''],
        ['OI-002', 'ORD-1002', 'SKU-A02', 'Chuột không dây Silent chống mỏi', 'Cái', 2, 2, 600000, '', 360000, ''],
        ['OI-003', 'ORD-1003', 'SKU-A03', 'Tai nghe Gaming chống ồn chủ động', 'Cái', 1, 1, 650000, '', 400000, ''],
        ['OI-004', 'ORD-1004', 'SKU-A01', 'Bàn phím cơ Bluetooth công thái học', 'Cái', 2, 0, 850000, '', 520000, ''],
        ['OI-005', 'ORD-1004', 'SKU-A04', 'Giá đỡ laptop hợp kim nhôm xoay 360', 'Cái', 2, 0, 350000, '', 190000, '']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: `'=F' + r + ' * H' + r`
        },
        {
          col: 11,
          formulaFn: `'=I' + r + ' - (F' + r + ' * J' + r + ')'`
        }
      ]
    },
    {
      name: 'CHANNELS',
      color: '#01579B',
      headers: ['Mã kênh', 'Tên kênh bán hàng', 'Tỷ lệ phí sàn (%)', 'Phí cố định/đơn (VND)', 'Trạng thái'],
      colWidths: [100, 220, 130, 160, 110],
      formats: [
        { range: 'C2:C100', format: '0.0%' },
        { range: 'D2:D100', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'E2:E100', type: 'list', values: ['ACTIVE', 'INACTIVE'] }
      ],
      demoRows: [
        ['CH-01', 'SHOPEE', 0.105, 5000, 'ACTIVE'],
        ['CH-02', 'TIKTOK', 0.095, 4000, 'ACTIVE'],
        ['CH-03', 'LAZADA', 0.085, 3000, 'ACTIVE'],
        ['CH-04', 'FACEBOOK', 0.000, 0, 'ACTIVE'],
        ['CH-05', 'WEBSITE', 0.020, 2000, 'ACTIVE'],
        ['CH-06', 'CỬA HÀNG', 0.000, 0, 'ACTIVE']
      ]
    },
    {
      name: 'PAYMENTS',
      color: '#4A148C',
      headers: ['Mã GD', 'Mã đơn hàng', 'Ngày thanh toán', 'Hình thức / Kênh', 'Số tiền (VND)', 'Trạng thái đối soát', 'Mã tham chiếu'],
      colWidths: [100, 110, 110, 150, 150, 150, 150],
      formats: [
        { range: 'C2:C1000', format: 'yyyy-mm-dd' },
        { range: 'E2:E1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['ĐÃ KHỚP', 'CHỜ ĐỐI SOÁT', 'LỆCH TIỀN'] }
      ],
      demoRows: [
        ['PAY-01', 'ORD-1001', '2026-09-03', 'Shopee Ví ShopeePay', 735000, 'ĐÃ KHỚP', 'ST-99120'],
        ['PAY-02', 'ORD-1002', '2026-09-04', 'TikTok Shop Balance', 955000, 'ĐÃ KHỚP', 'TT-44112'],
        ['PAY-03', 'ORD-1004', '2026-09-04', 'Vietcombank Chuyển khoản', 2200000, 'ĐÃ KHỚP', 'VCB-99881']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị bán lẻ:', 'MINH COMMERCE HUB'],
      ['Kỳ theo dõi bán hàng:', 'Tháng 09/2026'],
      ['Hotline CSKH:', '0901 888 999'],
      ['Chính sách đổi trả hàng:', 'Đổi trả miễn phí trong 7 ngày nếu lỗi sản phẩm'],
      ['Đơn vị tiền tệ:', 'VND']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH BÁN HÀNG & ĐƠN HÀNG ĐA KÊNH (F20)',
    subtitle: 'Tổng hợp đơn hàng toàn kênh • Đối soát dòng tiền & COD • Kiểm soát tỷ lệ giao thành công',
    kpiCards: [
      {
        label: 'DOANH THU THUẦN (ĐÃ HOÀN TẤT)',
        formula: '=SUMIFS(ORDERS!$N$2:$N$1000, ORDERS!$Q$2:$Q$1000, "HOÀN TẤT")',
        format: '#,##0 "₫"',
        note: 'Doanh thu thực nhận sau trừ phí sàn',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'TỔNG ĐƠN PHÁT SINH TOÀN KÊNH',
        formula: '=COUNTA(ORDERS!$A$2:$A$1000)',
        format: '#,##0 " đơn"',
        note: 'Số đơn ghi nhận trong kỳ',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỶ LỆ GIAO THÀNH CÔNG',
        formula: '=IF(COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") + COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG") > 0, COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") / (COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") + COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG")), 0)',
        format: '0.0%',
        note: 'HOÀN TẤT / (HOÀN TẤT + HOÀN HÀNG)',
        bg: '#FFF8E1',
        textColor: '#F57F17',
        valColor: '#F57F17'
      },
      {
        label: 'TIỀN COD CHỜ ĐỐI SOÁT',
        formula: '=SUMIFS(ORDERS!$L$2:$L$1000, ORDERS!$O$2:$O$1000, "COD", ORDERS!$P$2:$P$1000, "CHƯA THANH TOÁN", ORDERS!$Q$2:$Q$1000, "<>ĐÃ HỦY")',
        format: '#,##0 "₫"',
        note: 'Tiền thu hộ đơn vị vận chuyển đang giữ',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      },
      {
        label: 'ĐƠN HỦY / HOÀN HÀNG',
        formula: '=COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG") + COUNTIF(ORDERS!$Q$2:$Q$1000, "ĐÃ HỦY")',
        format: '#,##0 " đơn"',
        note: 'Cần phân tích nguyên nhân để cải thiện',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      }
    ],
    subTables: [
      {
        title: 'BẢNG PHÂN TÍCH DOANH THU THEO KÊNH BÁN HÀNG',
        titleRange: 'A8:E8',
        headerBg: '#FFE0B2',
        headerTextColor: '#E65100',
        colHeaderBg: '#FB8C00',
        startRow: 9,
        startCol: 1,
        headers: ['Kênh bán', 'Số đơn', 'Doanh thu thuần (VND)', 'Tỷ trọng (%)', 'Đánh giá'],
        rowFormulas: [
          {
            fromIdx: 0,
            toIdx: 5,
            rowOffset: 10,
            cells: [
              { col: 1, formulaFn: `['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i]` },
              { col: 2, formulaFn: `'=COUNTIF(ORDERS!$C$2:$C$1000, "' + ['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i] + '")'` },
              { col: 3, formulaFn: `'=SUMIF(ORDERS!$C$2:$C$1000, "' + ['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i] + '", ORDERS!$N$2:$N$1000)'` },
              { col: 4, formulaFn: `'=IF($A$5>0, C' + r + '/$A$5, 0)'` },
              { col: 5, formulaFn: `['Sàn TMĐT', 'Sàn Video', 'Sàn TMĐT', 'Mạng xã hội', 'Trực tiếp', 'Điểm bán'][i]` }
            ]
          }
        ],
        formats: [
          { range: 'B10:B15', format: '#,##0' },
          { range: 'C10:C15', format: '#,##0 "₫"' },
          { range: 'D10:D15', format: '0.0%' }
        ]
      }
    ],
    charts: [
      {
        title: 'Cơ Cấu Doanh Thu Thuần Theo Kênh Bán',
        type: 'SpreadsheetApp.ChartType.COLUMN',
        ranges: ['A9:C15'],
        row: 8,
        col: 7,
        width: 520,
        height: 260
      }
    ]
  }
};
