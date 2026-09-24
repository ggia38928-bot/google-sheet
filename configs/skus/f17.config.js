/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F17 — Sổ thu chi cá nhân / doanh nghiệp nhỏ & Dòng tiền Startup
 */

module.exports = {
  sku: 'F17',
  name: 'Sổ thu chi & Dòng tiền Startup',
  version: '1.0.0',
  description: 'Quản lý thu chi đa tài khoản (Tiền mặt, Ngân hàng, Ví điện tử), tự động tính số dư và phân tích Burn Rate/Runway',
  tables: [
    {
      name: 'CASHBOOK',
      color: '#E65100',
      headers: [
        'Mã GD', 'Ngày ghi sổ', 'Loại giao dịch', 'TK Nguồn (Chi/Chuyển)', 'TK Đích (Thu/Chuyển)',
        'Hạng mục', 'Đối tác / Người nhận', 'Số tiền (VND)', 'Diễn giải chi tiết', 'Trạng thái', 'Mã chứng từ gốc'
      ],
      colWidths: [95, 105, 125, 200, 200, 220, 200, 140, 300, 110, 130],
      formats: [
        { range: 'H2:H10001', format: '#,##0 "₫"' },
        { range: 'B2:B10001', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['THU', 'CHI', 'CHUYỂN KHOẢN'] },
        { range: 'D2:D1000', type: 'range', refSheet: 'ACCOUNTS', refRange: 'B2:B50' },
        { range: 'E2:E1000', type: 'range', refSheet: 'ACCOUNTS', refRange: 'B2:B50' },
        { range: 'F2:F1000', type: 'range', refSheet: 'CATEGORIES', refRange: 'B2:B50' },
        { range: 'J2:J1000', type: 'list', values: ['POSTED', 'DRAFT', 'CANCELLED'] }
      ],
      demoRows: [
        ['TX-001', '2026-09-01', 'THU', '', 'Vietcombank Doanh Nghiệp', 'Doanh thu bán lẻ / Dịch vụ', 'Công ty Ánh Dương', 45000000, 'Thu tiền cung cấp dịch vụ công nghệ tháng 8', 'POSTED', 'HD-1029'],
        ['TX-002', '2026-09-02', 'THU', '', 'Tiền mặt tại quỹ', 'Doanh thu bán lẻ / Dịch vụ', 'Khách lẻ Minh Trang', 8500000, 'Bán sản phẩm trực tiếp tại cửa hàng', 'POSTED', 'BL-8841'],
        ['TX-003', '2026-09-03', 'CHI', 'Vietcombank Doanh Nghiệp', '', 'Chi phí Mặt bằng & Điện nước', 'BQL Tòa Nhà TechPark', 22000000, 'Thanh toán tiền thuê văn phòng tháng 9', 'POSTED', 'UNC-552'],
        ['TX-004', '2026-09-04', 'CHI', 'Vietcombank Doanh Nghiệp', '', 'Chi phí Lương nhân viên', 'Đội ngũ kỹ thuật & sales', 52000000, 'Chuyển khoản lương kỳ 1', 'POSTED', 'UNC-553'],
        ['TX-005', '2026-09-05', 'CHUYỂN KHOẢN', 'Vietcombank Doanh Nghiệp', 'Tiền mặt tại quỹ', '', 'Thủ quỹ Mai Anh', 10000000, 'Rút tiền mặt nhập quỹ chi tiêu khẩn cấp', 'POSTED', 'RUT-01'],
        ['TX-006', '2026-09-06', 'CHI', 'Tiền mặt tại quỹ', '', 'Chi phí Tiếp khách & Văn phòng phẩm', 'Nhà sách Phương Nam', 3200000, 'Mua văn phòng phẩm và nước uống', 'POSTED', 'HĐ-441'],
        ['TX-007', '2026-09-07', 'THU', '', 'Vietcombank Doanh Nghiệp', 'Doanh thu Hợp đồng tư vấn', 'Tập đoàn Hòa Phát Tech', 70000000, 'Tạm ứng hợp đồng số 45/HĐKT', 'POSTED', 'UNC-IN-99'],
        ['TX-008', '2026-09-08', 'CHI', 'Vietcombank Doanh Nghiệp', '', 'Quảng cáo & Tiếp thị số', 'Google Ads Ireland', 18500000, 'Chi phí quảng cáo Google tháng 9', 'POSTED', 'VISA-091'],
        ['TX-009', '2026-09-09', 'CHUYỂN KHOẢN', 'Vietcombank Doanh Nghiệp', 'Ví điện tử Momo', '', 'Tài khoản công ty', 5000000, 'Nạp tiền ví điện tử để thanh toán cước phí viễn thông', 'POSTED', 'NAP-02'],
        ['TX-010', '2026-09-10', 'CHI', 'Ví điện tử Momo', '', 'Chi phí Vận hành cố định', 'VNPT Cước Internet', 2400000, 'Thanh toán cước cáp quang văn phòng', 'POSTED', 'MM-9921'],
        ['TX-011', '2026-09-11', 'THU', '', 'Vietcombank Doanh Nghiệp', 'Doanh thu bán lẻ / Dịch vụ', 'Công ty Sao Mai', 35000000, 'Thanh toán đợt 2 dự án ERP Mini', 'POSTED', 'UNC-IN-100'],
        ['TX-012', '2026-09-12', 'CHI', 'Vietcombank Doanh Nghiệp', '', 'Giá vốn hàng mua / Vật tư', 'Công ty Thiết Bị Mạng', 28000000, 'Mua linh kiện máy chủ dự phòng', 'POSTED', 'UNC-559']
      ]
    },
    {
      name: 'ACCOUNTS',
      color: '#01579B',
      headers: ['Mã tài khoản', 'Tên tài khoản', 'Loại tài khoản', 'Số dư đầu kỳ (VND)', 'Số dư hiện tại (VND)', 'Tiền tệ', 'Trạng thái'],
      colWidths: [120, 240, 150, 170, 170, 90, 110],
      formats: [
        { range: 'D2:E100', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['ACC-01', 'Tiền mặt tại quỹ', 'TIỀN MẶT', 15000000, '', 'VND', 'ACTIVE'],
        ['ACC-02', 'Vietcombank Doanh Nghiệp', 'NGÂN HÀNG', 85000000, '', 'VND', 'ACTIVE'],
        ['ACC-03', 'Techcombank Dự Phòng', 'NGÂN HÀNG', 50000000, '', 'VND', 'ACTIVE'],
        ['ACC-04', 'Ví điện tử Momo', 'VÍ ĐIỆN TỬ', 5000000, '', 'VND', 'ACTIVE']
      ],
      rowFormulas: [
        {
          col: 5,
          formulaFn: `'=D' + r + ' + SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$E$2:$E$10001, B' + r + ', CASHBOOK!$J$2:$J$10001, "POSTED") - SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$D$2:$D$10001, B' + r + ', CASHBOOK!$J$2:$J$10001, "POSTED")'`
        }
      ]
    },
    {
      name: 'CATEGORIES',
      color: '#4A148C',
      headers: ['Mã hạng mục', 'Tên hạng mục', 'Phân loại', 'Nhóm ngân sách', 'Ngân sách tháng (VND)'],
      colWidths: [120, 260, 110, 180, 180],
      formats: [
        { range: 'E2:E100', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['CAT-01', 'Doanh thu bán lẻ / Dịch vụ', 'THU', 'Doanh thu chính', 150000000],
        ['CAT-02', 'Doanh thu Hợp đồng tư vấn', 'THU', 'Doanh thu dự án', 80000000],
        ['CAT-03', 'Thu hồi nợ / Khác', 'THU', 'Thu nhập khác', 10000000],
        ['CAT-04', 'Chi phí Mặt bằng & Điện nước', 'CHI', 'Vận hành cố định', 25000000],
        ['CAT-05', 'Chi phí Lương nhân viên', 'CHI', 'Nhân sự', 60000000],
        ['CAT-06', 'Quảng cáo & Tiếp thị số', 'CHI', 'Marketing', 30000000],
        ['CAT-07', 'Giá vốn hàng mua / Vật tư', 'CHI', 'Giá vốn', 40000000],
        ['CAT-08', 'Chi phí Tiếp khách & Văn phòng phẩm', 'CHI', 'Hành chính', 8000000]
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị / Chủ sở hữu:', 'Công ty TNHH Giải Pháp Số Minh'],
      ['Đơn vị tiền tệ:', 'VND'],
      ['Kỳ báo cáo bắt đầu:', '2026-01-01'],
      ['Kỳ báo cáo kết thúc:', '2026-12-31'],
      ['Ngưỡng cảnh báo số dư tối thiểu:', 20000000]
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH DÒNG TIỀN & SỔ THU CHI DOANH NGHIỆP (F17)',
    subtitle: 'Số liệu tổng hợp tự động theo thời gian thực • Phân tách chuyển khoản nội bộ • Quản trị Runway & Burn Rate',
    kpiCards: [
      {
        label: 'TỔNG THU KỲ NÀY',
        formula: '=SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$C$2:$C$10001, "THU", CASHBOOK!$J$2:$J$10001, "POSTED")',
        format: '#,##0 "₫"',
        note: 'Khoản thực thu ghi sổ (POSTED)',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'TỔNG CHI KỲ NÀY',
        formula: '=SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$C$2:$C$10001, "CHI", CASHBOOK!$J$2:$J$10001, "POSTED")',
        format: '#,##0 "₫"',
        note: 'Khoản thực chi đã duyệt (POSTED)',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'DÒNG TIỀN THUẦN (NET)',
        formula: '=A5 - C5',
        format: '#,##0 "₫"',
        note: 'Thu kỳ này - Chi kỳ này',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỔNG SỐ DƯ TẤT CẢ VÍ',
        formula: '=SUM(ACCOUNTS!$E$2:$E$100)',
        format: '#,##0 "₫"',
        note: 'Toàn bộ số dư khả dụng thực tế',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'RUNWAY DỰ KIẾN (THÁNG)',
        formula: '=IF((C5 - A5) > 0, IFERROR(ROUND(G5 / (C5 - A5), 1), 0), "DƯƠNG TIỀN")',
        format: '',
        note: 'Số dư / Tốc độ đốt tiền (Net Burn)',
        bg: '#F3E5F5',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ],
    subTables: [
      {
        title: 'BẢNG TỔNG HỢP SỐ DƯ VÀ THANH KHOẢN THEO TÀI KHOẢN',
        titleRange: 'A8:E8',
        headerBg: '#BBDEFB',
        headerTextColor: '#0D47A1',
        colHeaderBg: '#1976D2',
        startRow: 9,
        startCol: 1,
        headers: ['Mã TK', 'Tên tài khoản', 'Loại ví', 'Số dư đầu kỳ', 'Số dư hiện tại'],
        rowFormulas: [
          {
            fromIdx: 2,
            toIdx: 5,
            rowOffset: 8,
            cells: [
              { col: 1, formulaFn: `'=IF(ACCOUNTS!A' + i + '<>"","ACCOUNTS!A' + i + '","")'` },
              { col: 2, formulaFn: `'=IF(ACCOUNTS!B' + i + '<>"","ACCOUNTS!B' + i + '","")'` },
              { col: 3, formulaFn: `'=IF(ACCOUNTS!C' + i + '<>"","ACCOUNTS!C' + i + '","")'` },
              { col: 4, formulaFn: `'=IF(ACCOUNTS!D' + i + '<>"","ACCOUNTS!D' + i + '","")'` },
              { col: 5, formulaFn: `'=IF(ACCOUNTS!E' + i + '<>"","ACCOUNTS!E' + i + '","")'` }
            ]
          }
        ],
        formats: [
          { range: 'D10:E15', format: '#,##0 "₫"' }
        ]
      }
    ],
    charts: [
      {
        title: 'Cơ cấu chi phí thực tế',
        type: 'SpreadsheetApp.ChartType.PIE',
        ranges: ['CATEGORIES!B2:B9', 'CATEGORIES!E2:E9'],
        row: 17,
        col: 1,
        width: 550,
        height: 280
      }
    ]
  }
};
