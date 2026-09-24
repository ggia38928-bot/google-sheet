/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F18 — Quản lý kho cơ bản & Nhập Xuất Tồn
 */

module.exports = {
  sku: 'F18',
  name: 'Quản lý kho cơ bản & Nhập Xuất Tồn',
  version: '1.0.0',
  description: 'Quản lý kho hàng chuyên nghiệp, theo dõi Nhập Xuất Tồn và cảnh báo hàng chạm định mức an toàn',
  tables: [
    {
      name: 'STOCK_MOVEMENTS',
      color: '#BF360C',
      headers: [
        'Mã phiếu', 'Ngày chứng từ', 'Loại phiếu', 'Mã SKU', 'Tên hàng hóa',
        'Từ kho (Xuất/Chuyển)', 'Đến kho (Nhập/Chuyển)', 'Số lượng', 'Đơn giá vốn', 'Thành tiền (VND)',
        'Trạng thái', 'Ghi chú nghiệp vụ'
      ],
      colWidths: [95, 105, 125, 100, 250, 180, 180, 90, 130, 150, 110, 280],
      formats: [
        { range: 'B2:B10001', format: 'yyyy-mm-dd' },
        { range: 'H2:H10001', format: '#,##0' },
        { range: 'I2:J10001', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['NHẬP', 'XUẤT', 'CHUYỂN KHO', 'ĐIỀU CHỈNH'] },
        { range: 'D2:D1000', type: 'range', refSheet: 'PRODUCTS', refRange: 'A2:A50' },
        { range: 'F2:F1000', type: 'range', refSheet: 'WAREHOUSES', refRange: 'B2:B20' },
        { range: 'G2:G1000', type: 'range', refSheet: 'WAREHOUSES', refRange: 'B2:B20' },
        { range: 'K2:K1000', type: 'list', values: ['POSTED', 'DRAFT', 'CANCELLED'] }
      ],
      demoRows: [
        ['PN-001', '2026-09-01', 'NHẬP', 'SKU-001', 'Bàn phím cơ Không Dây K8 Pro', '', 'Kho Tổng Miền Nam', 20, 1200000, '', 'POSTED', 'Nhập lô hàng chính hãng đợt đầu tháng'],
        ['PN-002', '2026-09-02', 'NHẬP', 'SKU-002', 'Chuột Ergonomic Master 3S', '', 'Kho Tổng Miền Nam', 15, 1500000, '', 'POSTED', 'Nhập bổ sung kho tổng'],
        ['PX-001', '2026-09-03', 'XUẤT', 'SKU-001', 'Bàn phím cơ Không Dây K8 Pro', 'Kho Tổng Miền Nam', '', 8, 1200000, '', 'POSTED', 'Xuất bán sỉ cho đại lý TechLand'],
        ['PCK-01', '2026-09-04', 'CHUYỂN KHO', 'SKU-001', 'Bàn phím cơ Không Dây K8 Pro', 'Kho Tổng Miền Nam', 'Kho Cửa Hàng Quận 1', 5, 1200000, '', 'POSTED', 'Điều chuyển hàng lên kệ trưng bày cửa hàng'],
        ['PX-002', '2026-09-05', 'XUẤT', 'SKU-002', 'Chuột Ergonomic Master 3S', 'Kho Tổng Miền Nam', '', 10, 1500000, '', 'POSTED', 'Xuất bán đơn hàng dự án công ty Sao Mai'],
        ['PN-003', '2026-09-06', 'NHẬP', 'SKU-003', 'Màn hình Đồ họa 27 inch 4K', '', 'Kho Tổng Miền Nam', 6, 6500000, '', 'POSTED', 'Nhập từ nhà phân phối Synnex FPT'],
        ['PX-003', '2026-09-07', 'XUẤT', 'SKU-003', 'Màn hình Đồ họa 27 inch 4K', 'Kho Tổng Miền Nam', '', 4, 6500000, '', 'POSTED', 'Giao văn phòng thiết kế đồ họa Tân Bình'],
        ['PX-004', '2026-09-08', 'XUẤT', 'SKU-005', 'Tai nghe Chống ồn Không Dây Pro', 'Kho Tổng Miền Nam', '', 4, 2200000, '', 'POSTED', 'Xuất bán lẻ cho khách VIP'],
        ['PKK-01', '2026-09-09', 'ĐIỀU CHỈNH', 'SKU-004', 'Ổ cứng SSD Di động 1TB Type-C', 'Kho Tổng Miền Nam', '', -1, 1600000, '', 'POSTED', 'Hao hụt kiểm kê do vỏ hộp biến dạng'],
        ['PN-004', '2026-09-10', 'NHẬP', 'SKU-006', 'Cáp sạc Nhanh 100W Bọc Dù 2m', '', 'Kho Tổng Miền Nam', 50, 90000, '', 'POSTED', 'Nhập số lượng lớn phụ kiện cáp']
      ],
      rowFormulas: [
        {
          col: 10,
          formulaFn: `'=ROUND(H' + r + ' * I' + r + ', 0)'`
        }
      ]
    },
    {
      name: 'PRODUCTS',
      color: '#004D40',
      headers: [
        'Mã SKU', 'Tên hàng hóa', 'Nhóm hàng', 'ĐVT', 'Giá vốn (VND)', 'Giá bán (VND)',
        'Tồn tối thiểu', 'Tồn đầu kỳ', 'Tổng Nhập', 'Tổng Xuất', 'Tồn hiện tại', 'Giá trị tồn (VND)', 'Trạng thái tồn'
      ],
      colWidths: [100, 260, 150, 80, 130, 130, 110, 110, 110, 110, 120, 160, 120],
      formats: [
        { range: 'E2:F100', format: '#,##0 "₫"' },
        { range: 'L2:L100', format: '#,##0 "₫"' },
        { range: 'G2:K100', format: '#,##0' }
      ],
      demoRows: [
        ['SKU-001', 'Bàn phím cơ Không Dây K8 Pro', 'Phụ kiện máy tính', 'Cái', 1200000, 1850000, 10, 15, '', '', '', '', ''],
        ['SKU-002', 'Chuột Ergonomic Master 3S', 'Phụ kiện máy tính', 'Cái', 1500000, 2200000, 8, 12, '', '', '', '', ''],
        ['SKU-003', 'Màn hình Đồ họa 27 inch 4K', 'Màn hình', 'Chiếc', 6500000, 8900000, 5, 8, '', '', '', '', ''],
        ['SKU-004', 'Ổ cứng SSD Di động 1TB Type-C', 'Lưu trữ', 'Cái', 1600000, 2400000, 15, 20, '', '', '', '', ''],
        ['SKU-005', 'Tai nghe Chống ồn Không Dây Pro', 'Âm thanh', 'Cái', 2200000, 3200000, 10, 6, '', '', '', '', ''],
        ['SKU-006', 'Cáp sạc Nhanh 100W Bọc Dù 2m', 'Dây cáp', 'Sợi', 90000, 190000, 30, 45, '', '', '', '', ''],
        ['SKU-007', 'Giá đỡ Laptop Nhôm Công Thái Học', 'Phụ kiện máy tính', 'Cái', 250000, 450000, 12, 10, '', '', '', '', ''],
        ['SKU-008', 'Củ sạc GaN 65W 3 Cổng Tiện Lợi', 'Củ sạc', 'Cái', 350000, 650000, 15, 18, '', '', '', '', '']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: `'=SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "NHẬP", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")'`
        },
        {
          col: 10,
          formulaFn: `'=SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "XUẤT", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")'`
        },
        {
          col: 11,
          formulaFn: `'=H' + r + ' + I' + r + ' - J' + r + ' + SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "ĐIỀU CHỈNH", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")'`
        },
        {
          col: 12,
          formulaFn: `'=MAX(0, K' + r + ') * E' + r`
        },
        {
          col: 13,
          formulaFn: `'=IF(K' + r + '<=0, "HẾT HÀNG", IF(K' + r + '<=G' + r + ', "CẦN NHẬP", "ĐỦ TỒN"))'`
        }
      ]
    },
    {
      name: 'WAREHOUSES',
      color: '#263238',
      headers: ['Mã kho', 'Tên kho hàng', 'Địa điểm / Địa chỉ', 'Thủ kho phụ trách', 'Trạng thái'],
      colWidths: [110, 220, 260, 180, 110],
      demoRows: [
        ['WH-01', 'Kho Tổng Miền Nam', 'Tân Bình, TP.HCM', 'Nguyễn Văn Hùng', 'ACTIVE'],
        ['WH-02', 'Kho Cửa Hàng Quận 1', 'Quận 1, TP.HCM', 'Lê Thị Mai', 'ACTIVE'],
        ['WH-03', 'Kho Dự Phòng & Bảo Hành', 'Bình Thạnh, TP.HCM', 'Trần Đình Trọng', 'ACTIVE']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị quản lý kho:', 'Tổng Kho Phụ Kiện Công Nghệ Minh Tech'],
      ['Đơn vị tiền tệ chuẩn:', 'VND'],
      ['Ngày bắt đầu theo dõi kỳ:', '2026-09-01'],
      ['Ngày chốt kỳ kiểm kê:', '2026-09-30'],
      ['Quy tắc định giá xuất kho:', 'Bình quân gia quyền (Weighted Average)']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH KHO & THEO DÕI NHẬP - XUẤT - TỒN (F18)',
    subtitle: 'Quản lý giá trị tồn kho thời gian thực • Cảnh báo cạn kho tự động • Kiểm soát luân chuyển hàng hóa',
    kpiCards: [
      {
        label: 'TỔNG GIÁ TRỊ TỒN KHO',
        formula: '=SUM(PRODUCTS!$L$2:$L$1000)',
        format: '#,##0 "₫"',
        note: 'Quy đổi theo đơn giá vốn nhập kho',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'TỔNG MÃ HÀNG (SKU)',
        formula: '=COUNTIF(PRODUCTS!$A$2:$A$1000,"<>")',
        format: '#,##0',
        note: 'Số lượng danh mục sản phẩm đang mở',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'SKU CẦN NHẬP GẤP',
        formula: '=COUNTIF(PRODUCTS!$M$2:$M$1000,"CẦN NHẬP") + COUNTIF(PRODUCTS!$M$2:$M$1000,"HẾT HÀNG")',
        format: '#,##0',
        note: 'Tồn kho <= Định mức tối thiểu',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'TỔNG LƯỢNG NHẬP KỲ',
        formula: '=SUM(PRODUCTS!$I$2:$I$1000)',
        format: '#,##0',
        note: 'Tổng số sản phẩm nhập vào kho',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'TỔNG LƯỢNG XUẤT KỲ',
        formula: '=SUM(PRODUCTS!$J$2:$J$1000)',
        format: '#,##0',
        note: 'Tổng số sản phẩm xuất bán/chuyển',
        bg: '#F3E5F5',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ],
    subTables: [
      {
        title: 'BẢNG CẢNH BÁO MẶT HÀNG CHẠM ĐỊNH MỨC AN TOÀN (CẦN NHẬP)',
        titleRange: 'A8:E8',
        headerBg: '#FFCDD2',
        headerTextColor: '#C62828',
        colHeaderBg: '#D32F2F',
        startRow: 9,
        startCol: 1,
        headers: ['Mã SKU', 'Tên sản phẩm', 'Min Stock', 'Tồn thực tế', 'Trạng thái'],
        rowFormulas: [
          {
            fromIdx: 2,
            toIdx: 6,
            rowOffset: 8,
            cells: [
              { col: 1, formulaFn: `'=IF(PRODUCTS!A' + i + '<>"","PRODUCTS!A' + i + '","")'` },
              { col: 2, formulaFn: `'=IF(PRODUCTS!B' + i + '<>"","PRODUCTS!B' + i + '","")'` },
              { col: 3, formulaFn: `'=IF(PRODUCTS!G' + i + '<>"","PRODUCTS!G' + i + '","")'` },
              { col: 4, formulaFn: `'=IF(PRODUCTS!K' + i + '<>"","PRODUCTS!K' + i + '","")'` },
              { col: 5, formulaFn: `'=IF(PRODUCTS!M' + i + '<>"","PRODUCTS!M' + i + '","")'` }
            ]
          }
        ],
        formats: [
          { range: 'C10:D15', format: '#,##0' }
        ]
      }
    ],
    charts: [
      {
        title: 'PHÂN BỔ GIÁ TRỊ TỒN KHO THEO MÃ HÀNG',
        type: 'SpreadsheetApp.ChartType.BAR',
        ranges: ['PRODUCTS!B2:B9', 'PRODUCTS!L2:L9'],
        row: 17,
        col: 1,
        width: 600,
        height: 280
      }
    ]
  }
};
