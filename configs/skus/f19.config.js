/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F19 — Quản lý Báo giá & Phiên bản Chào hàng (Quotation Management)
 */

module.exports = {
  sku: 'F19',
  name: 'Quản lý Báo giá & Phiên bản Chào hàng',
  version: '1.0.0',
  description: 'Hệ thống báo giá chuyên nghiệp, tính chiết khấu nhiều cấp, tự động tính thuế VAT, quản lý phiên bản (Revisions) và theo dõi tỷ lệ chuyển đổi Win Rate',
  tables: [
    {
      name: 'QUOTES',
      color: '#0277BD',
      headers: [
        'Mã báo giá', 'Số báo giá', 'Tiêu đề chào hàng', 'Ngày lập', 'Hạn hiệu lực',
        'Mã KH', 'Tên khách hàng', 'Phiên bản', 'Tiền tệ', 'Tổng trước thuế/CK (VND)',
        'Chiết khấu (%)', 'Tiền chiết khấu (VND)', 'Thuế VAT (%)', 'Tiền thuế (VND)',
        'Tổng thanh toán (VND)', 'Trạng thái', 'Sales phụ trách', 'Ghi chú điều khoản'
      ],
      colWidths: [110, 130, 220, 105, 105, 100, 240, 90, 80, 170, 110, 160, 110, 150, 180, 120, 160, 220],
      formats: [
        { range: 'D2:E1000', format: 'yyyy-mm-dd' },
        { range: 'J2:J1000', format: '#,##0 "₫"' },
        { range: 'K2:K1000', format: '0.0%' },
        { range: 'L2:L1000', format: '#,##0 "₫"' },
        { range: 'M2:M1000', format: '0.0%' },
        { range: 'N2:O1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'P2:P1000', type: 'list', values: ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'] },
        { range: 'H2:H1000', type: 'list', values: ['v1.0', 'v1.1', 'v1.2', 'v2.0'] }
      ],
      demoRows: [
        ['BG-001', 'QUOTE-2026-001', 'Cung cấp thiết bị mạng văn phòng', '2026-09-01', '2026-09-30', 'CUST-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 'v1.0', 'VND', 45000000, 0.05, '', 0.08, '', '', 'ACCEPTED', 'Nguyễn Văn Minh', 'Thanh toán 50% tạm ứng, bảo hành 12 tháng'],
        ['BG-002', 'QUOTE-2026-002', 'Gói phần mềm ERP Mini bản quyền', '2026-09-03', '2026-09-25', 'CUST-02', 'Tập đoàn Công Nghệ Viễn Đông', 'v1.1', 'VND', 80000000, 0.10, '', 0.10, '', '', 'ACCEPTED', 'Trần Thị Thu Thảo', 'Triển khai trong vòng 15 ngày làm việc'],
        ['BG-003', 'QUOTE-2026-003', 'Dịch vụ bảo trì hệ thống máy chủ', '2026-09-05', '2026-09-18', 'CUST-03', 'Công ty Xây Lắp Điện Đại Nam', 'v1.0', 'VND', 28000000, 0.00, '', 0.08, '', '', 'SENT', 'Nguyễn Văn Minh', 'Giá chưa bao gồm linh kiện thay thế ngoài gói'],
        ['BG-004', 'QUOTE-2026-004', 'Tư vấn chuyển đổi số doanh nghiệp', '2026-09-07', '2026-09-15', 'CUST-04', 'Chuỗi Cửa Hàng Bách Hóa Xanh', 'v1.0', 'VND', 50000000, 0.05, '', 0.08, '', '', 'REJECTED', 'Trần Thị Thu Thảo', 'Khách hàng dời kế hoạch sang quý 4'],
        ['BG-005', 'QUOTE-2026-005', 'Nâng cấp bảo mật mạng nội bộ', '2026-08-10', '2026-08-25', 'CUST-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 'v1.0', 'VND', 18000000, 0.00, '', 0.08, '', '', 'EXPIRED', 'Lê Hoàng Long', 'Hết hiệu lực báo giá do quá thời hạn phản hồi']
      ],
      rowFormulas: [
        {
          col: 12,
          formulaFn: `'=J' + r + ' * K' + r`
        },
        {
          col: 14,
          formulaFn: `'=(J' + r + ' - L' + r + ') * M' + r`
        },
        {
          col: 15,
          formulaFn: `'=J' + r + ' - L' + r + ' + N' + r`
        }
      ]
    },
    {
      name: 'QUOTE_ITEMS',
      color: '#2E7D32',
      headers: [
        'Mã dòng', 'Mã báo giá', 'Mã SP/DV', 'Tên hàng hóa / Dịch vụ', 'ĐVT',
        'Số lượng', 'Đơn giá niêm yết (VND)', 'Chiết khấu dòng (%)', 'Đơn giá sau CK (VND)',
        'Thành tiền (VND)', 'Thuế suất (%)', 'Tiền thuế dòng (VND)', 'Tổng cộng dòng (VND)', 'Ghi chú thông số'
      ],
      colWidths: [100, 110, 100, 260, 70, 80, 160, 120, 160, 160, 100, 140, 160, 200],
      formats: [
        { range: 'G2:G1000', format: '#,##0 "₫"' },
        { range: 'H2:H1000', format: '0.0%' },
        { range: 'I2:J1000', format: '#,##0 "₫"' },
        { range: 'K2:K1000', format: '0.0%' },
        { range: 'L2:M1000', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['QI-001', 'BG-001', 'PROD-01', 'Thiết bị định tuyến Router Cisco C1111', 'Cái', 2, 10000000, 0.05, '', '', 0.08, '', '', 'Bảo hành chính hãng 2 năm'],
        ['QI-002', 'BG-001', 'PROD-02', 'Switch chia mạng 24 Port Gigabit PoE', 'Cái', 1, 25000000, 0.05, '', '', 0.08, '', '', 'Có tính năng quản lý VLAN'],
        ['QI-003', 'BG-002', 'PROD-03', 'Gói bản quyền phần mềm ERP Core (5 User)', 'Gói', 1, 60000000, 0.10, '', '', 0.10, '', '', 'Thời hạn sử dụng vĩnh viễn'],
        ['QI-004', 'BG-002', 'PROD-04', 'Dịch vụ đào tạo và cấu hình hệ thống', 'Buổi', 4, 5000000, 0.10, '', '', 0.10, '', '', 'Đào tạo trực tiếp tại văn phòng'],
        ['QI-005', 'BG-003', 'PROD-05', 'Gói bảo trì máy chủ hàng tháng', 'Tháng', 3, 9333333, 0.00, '', '', 0.08, '', '', 'Hỗ trợ kỹ thuật 24/7 qua hotline']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: `'=G' + r + ' * (1 - H' + r + ')'`
        },
        {
          col: 10,
          formulaFn: `'=F' + r + ' * I' + r`
        },
        {
          col: 12,
          formulaFn: `'=J' + r + ' * K' + r`
        },
        {
          col: 13,
          formulaFn: `'=J' + r + ' + L' + r`
        }
      ]
    },
    {
      name: 'CUSTOMERS',
      color: '#6A1B9A',
      headers: ['Mã KH', 'Tên công ty / Khách hàng', 'Người đại diện', 'SĐT', 'Email', 'Địa chỉ', 'Mã số thuế', 'Nhóm khách hàng', 'Hạn mức tín dụng (VND)'],
      colWidths: [100, 260, 160, 120, 180, 260, 120, 130, 160],
      formats: [
        { range: 'I2:I1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'H2:H1000', type: 'list', values: ['VIP', 'ĐẠI LÝ', 'DOANH NGHIỆP', 'CÁ NHÂN'] }
      ],
      demoRows: [
        ['CUST-01', 'Công ty Cổ phần Hạ Tầng Sao Mai', 'Nguyễn Văn Tuấn', '0903123456', 'tuan.nguyen@saomai.vn', 'Tầng 5, Tòa nhà Landmark 81, TP.HCM', '0301234567', 'DOANH NGHIỆP', 200000000],
        ['CUST-02', 'Tập đoàn Công Nghệ Viễn Đông', 'Trần Thị Thu', '0918765432', 'thutt@viendong.com', '123 Hoàng Quốc Việt, Cầu Giấy, Hà Nội', '0109876543', 'VIP', 500000000],
        ['CUST-03', 'Công ty Xây Lắp Điện Đại Nam', 'Phạm Hoàng Nam', '0988112233', 'nam.ph@dainamcorp.vn', '45 Lê Duẩn, Quận 1, TP.HCM', '0312348899', 'DOANH NGHIỆP', 150000000],
        ['CUST-04', 'Chuỗi Cửa Hàng Bách Hóa Xanh', 'Lê Hồng Ánh', '0934567890', 'anh.lh@bachhoaxanh.com', '78 Võ Thị Sáu, Phường 6, Quận 3, TP.HCM', '0309988776', 'ĐẠI LÝ', 300000000]
      ]
    },
    {
      name: 'PRODUCTS',
      color: '#E65100',
      headers: ['Mã SP/DV', 'Tên sản phẩm / Dịch vụ', 'Đơn vị tính', 'Đơn giá niêm yết (VND)', 'Giá vốn ước tính (VND)', 'Thuế suất mặc định (%)', 'Trạng thái'],
      colWidths: [110, 260, 90, 160, 160, 140, 110],
      formats: [
        { range: 'D2:E1000', format: '#,##0 "₫"' },
        { range: 'F2:F1000', format: '0.0%' }
      ],
      validations: [
        { range: 'G2:G1000', type: 'list', values: ['ACTIVE', 'INACTIVE'] }
      ],
      demoRows: [
        ['PROD-01', 'Thiết bị định tuyến Router Cisco C1111', 'Cái', 10000000, 7500000, 0.08, 'ACTIVE'],
        ['PROD-02', 'Switch chia mạng 24 Port Gigabit PoE', 'Cái', 25000000, 19000000, 0.08, 'ACTIVE'],
        ['PROD-03', 'Gói bản quyền phần mềm ERP Core (5 User)', 'Gói', 60000000, 20000000, 0.10, 'ACTIVE'],
        ['PROD-04', 'Dịch vụ đào tạo và cấu hình hệ thống', 'Buổi', 5000000, 1500000, 0.10, 'ACTIVE'],
        ['PROD-05', 'Gói bảo trì máy chủ hàng tháng', 'Tháng', 10000000, 3000000, 0.08, 'ACTIVE']
      ]
    },
    {
      name: 'TERMS',
      color: '#37474F',
      headers: ['Mã điều khoản', 'Tiêu đề điều khoản', 'Nội dung chi tiết điều khoản thương mại'],
      colWidths: [120, 220, 480],
      demoRows: [
        ['TERM-01', 'Điều kiện thanh toán', 'Tạm ứng 50% ngay sau khi ký hợp đồng/chấp nhận báo giá. 50% còn lại thanh toán trong vòng 7 ngày sau khi nghiệm thu bàn giao.'],
        ['TERM-02', 'Thời gian giao hàng & thi công', 'Giao hàng và thi công hoàn tất trong vòng 10 đến 15 ngày làm việc kể từ ngày nhận được tiền tạm ứng.'],
        ['TERM-03', 'Chính sách bảo hành & hỗ trợ', 'Thiết bị phần cứng bảo hành 24 tháng theo tiêu chuẩn nhà sản xuất. Phần mềm hỗ trợ kỹ thuật miễn phí 12 tháng đầu tiên.']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị báo giá:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Mã số thuế:', '0316889988'],
      ['Địa chỉ trụ sở:', 'Tòa nhà Innovation Hub, 180 Nguyễn Thị Minh Khai, Quận 3, TP.HCM'],
      ['Hotline / Email:', '0901 888 999 | contact@minhtemplates.vn'],
      ['Tài khoản ngân hàng:', 'Vietcombank - 0071001234567 - NGUYEN HOANG MINH'],
      ['Người ký duyệt:', 'Nguyễn Hoàng Minh - Giám Đốc']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH BÁO GIÁ & HIỆU QUẢ CHÀO HÀNG (F19)',
    subtitle: 'Theo dõi tổng giá trị báo giá • Phân tích tỷ lệ chốt Win Rate • Cảnh báo hiệu lực chào hàng',
    kpiCards: [
      {
        label: 'TỔNG GIÁ TRỊ BÁO GIÁ ĐÃ GỬI',
        formula: '=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "<>DRAFT")',
        format: '#,##0 "₫"',
        note: 'Toàn bộ báo giá đã gửi khách hàng',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'DOANH SỐ ĐÃ CHỐT THÀNH CÔNG',
        formula: '=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "ACCEPTED")',
        format: '#,##0 "₫"',
        note: 'Báo giá khách đã duyệt (ACCEPTED)',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'TỶ LỆ CHỐT ĐƠN (WIN RATE)',
        formula: '=IF(COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED") > 0, COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") / (COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED")), 0)',
        format: '0.0%',
        note: 'ACCEPTED / (ACCEPTED + REJECTED)',
        bg: '#FFF8E1',
        textColor: '#F57F17',
        valColor: '#F57F17'
      },
      {
        label: 'BÁO GIÁ CHỜ PHẢN HỒI',
        formula: '=COUNTIF(QUOTES!$P$2:$P$1000, "SENT")',
        format: '#,##0 " báo giá"',
        note: 'Đang đàm phán với khách hàng',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      },
      {
        label: 'BÁO GIÁ ĐÃ TỪ CHỐI / HỦY',
        formula: '=COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED") + COUNTIF(QUOTES!$P$2:$P$1000, "EXPIRED")',
        format: '#,##0 " báo giá"',
        note: 'Không thành công hoặc quá hạn',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      }
    ],
    subTables: [
      {
        title: 'BẢNG THEO DÕI BÁO GIÁ THEO TRẠNG THÁI VÀ GIÁ TRỊ',
        titleRange: 'A8:E8',
        headerBg: '#BBDEFB',
        headerTextColor: '#0D47A1',
        colHeaderBg: '#1976D2',
        startRow: 9,
        startCol: 1,
        headers: ['Trạng thái', 'Số lượng', 'Tổng giá trị (VND)', 'Tỷ lệ', 'Đánh giá'],
        rowFormulas: [
          {
            fromIdx: 0,
            toIdx: 4,
            rowOffset: 10,
            cells: [
              { col: 1, formulaFn: `['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i]` },
              { col: 2, formulaFn: `'=COUNTIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '")'` },
              { col: 3, formulaFn: `'=SUMIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '", QUOTES!$O$2:$O$1000)'` },
              { col: 4, formulaFn: `'=IF($C$5>0, C' + r + '/$C$5, 0)'` },
              { col: 5, formulaFn: `['Bản nháp', 'Đang chào', 'Thành công', 'Thất bại', 'Quá hạn'][i]` }
            ]
          }
        ],
        formats: [
          { range: 'B10:B14', format: '#,##0' },
          { range: 'C10:C14', format: '#,##0 "₫"' },
          { range: 'D10:D14', format: '0.0%' }
        ]
      }
    ],
    charts: [
      {
        title: 'Cơ Cấu Giá Trị Báo Giá Theo Trạng Thái',
        type: 'SpreadsheetApp.ChartType.PIE',
        ranges: ['A9:C14'],
        row: 8,
        col: 7,
        width: 520,
        height: 260
      }
    ]
  }
};
