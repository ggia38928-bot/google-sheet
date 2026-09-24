/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F05 — CRM Chăm sóc khách hàng & Pipeline bán hàng
 */

module.exports = {
  sku: 'F05',
  name: 'CRM Chăm sóc khách hàng & Pipeline bán hàng',
  version: '1.0.0',
  description: 'Quản lý cơ hội bán hàng theo phễu chuyển đổi, tính giá trị trọng số, đo lường Win Rate và theo dõi lịch hẹn',
  tables: [
    {
      name: 'DEALS',
      color: '#E65100',
      headers: [
        'Mã Deal', 'Tiêu đề cơ hội', 'Mã KH', 'Tên khách hàng', 'Phụ trách',
        'Giai đoạn (Stage)', 'Giá trị kỳ vọng (VND)', 'Xác suất', 'Giá trị trọng số (VND)',
        'Dự kiến ngày chốt', 'Ngày chốt thực tế', 'Lý do Thắng/Thua'
      ],
      colWidths: [95, 240, 95, 180, 190, 130, 160, 90, 160, 130, 130, 280],
      formats: [
        { range: 'G2:G10001', format: '#,##0 "₫"' },
        { range: 'H2:H10001', format: '0%' },
        { range: 'I2:I10001', format: '#,##0 "₫"' },
        { range: 'J2:K10001', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'] }
      ],
      demoRows: [
        ['DEAL-01', 'Triển khai phần mềm ERP Lite', 'CUST-01', 'Nguyễn Văn An', 'sales1@minhtemplates.com', 'THẮNG', 85000000, 1.0, '', '2026-09-05', '2026-09-05', 'Giải pháp đáp ứng đúng tiến độ và ngân sách'],
        ['DEAL-02', 'Cung cấp hệ thống CRM & Đào tạo', 'CUST-02', 'Trần Thị Bích', 'sales2@minhtemplates.com', 'THẮNG', 45000000, 1.0, '', '2026-09-08', '2026-09-08', 'Khách đánh giá cao giao diện dễ dùng'],
        ['DEAL-03', 'Hợp đồng bảo trì hệ thống hàng năm', 'CUST-03', 'Hoàng Minh Cường', 'sales1@minhtemplates.com', 'THUA', 30000000, 0.0, '', '2026-09-07', '2026-09-07', 'Khách hoãn ngân sách sang năm sau'],
        ['DEAL-04', 'Tư vấn chuyển đổi số doanh nghiệp', 'CUST-04', 'Phạm Hải Đăng', 'sales3@minhtemplates.com', 'BÁO GIÁ', 60000000, 0.6, '', '2026-09-25', '', 'Đang thương lượng điều khoản thanh toán'],
        ['DEAL-05', 'Gói thiết kế Dashboard quản trị', 'CUST-05', 'Vũ Quỳnh Nga', 'sales2@minhtemplates.com', 'TIẾP CẬN', 25000000, 0.3, '', '2026-09-28', '', 'Đã demo tính năng cho ban giám đốc'],
        ['DEAL-06', 'Nâng cấp phân hệ kho nâng cao', 'CUST-01', 'Nguyễn Văn An', 'sales1@minhtemplates.com', 'MỚI', 35000000, 0.1, '', '2026-10-15', '', 'Khách quan tâm phân hệ kiểm kê tự động']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: `'=ROUND(G' + r + ' * H' + r + ', 0)'`
        }
      ]
    },
    {
      name: 'CUSTOMERS',
      color: '#01579B',
      headers: ['Mã KH', 'Tên khách hàng', 'Số điện thoại', 'Email liên hệ', 'Công ty / Doanh nghiệp', 'Nguồn khách', 'Phân loại', 'Người phụ trách'],
      colWidths: [100, 200, 130, 200, 240, 120, 120, 200],
      formats: [
        { range: 'C2:C1000', format: '@' }
      ],
      demoRows: [
        ['CUST-01', 'Nguyễn Văn An', '0903112233', 'an.nguyen@anphat.vn', 'Công ty Cổ phần An Phát', 'Google Ads', 'VIP', 'sales1@minhtemplates.com'],
        ['CUST-02', 'Trần Thị Bích', '0912445566', 'bich.tran@tana.com', 'Tập đoàn Cơ Khí Tân Á', 'Giới thiệu', 'VIP', 'sales2@minhtemplates.com'],
        ['CUST-03', 'Hoàng Minh Cường', '0988776655', 'cuong.hoang@greentech.vn', 'Kiến Trúc Xanh GreenTech', 'Facebook', 'Tiềm năng', 'sales1@minhtemplates.com'],
        ['CUST-04', 'Phạm Hải Đăng', '0934112244', 'dang.pham@logistics.vn', 'Đăng Hải Logistics', 'Website', 'Tiềm năng', 'sales3@minhtemplates.com'],
        ['CUST-05', 'Vũ Quỳnh Nga', '0977223344', 'nga.vu@fashionstyle.com', 'Thời Trang Trẻ Song Nga', 'Facebook', 'Khách hàng cũ', 'sales2@minhtemplates.com']
      ]
    },
    {
      name: 'ACTIVITIES',
      color: '#4A148C',
      headers: ['Mã HĐ', 'Ngày thực hiện', 'Mã KH', 'Tên khách hàng', 'Hình thức', 'Nội dung trao đổi chi tiết', 'Ngày hẹn tiếp theo', 'Trạng thái xử lý'],
      colWidths: [95, 120, 95, 180, 110, 350, 140, 130],
      formats: [
        { range: 'B2:B10001', format: 'yyyy-mm-dd' },
        { range: 'G2:G10001', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'E2:E1000', type: 'list', values: ['GỌI ĐIỆN', 'GẶP MẶT', 'EMAIL', 'DEMO', 'ZALO'] },
        { range: 'H2:H1000', type: 'list', values: ['HOÀN THÀNH', 'CHỜ XỬ LÝ'] }
      ],
      demoRows: [
        ['ACT-01', '2026-09-02', 'CUST-01', 'Nguyễn Văn An', 'GẶP MẶT', 'Thảo luận ký kết hợp đồng ERP Lite tại văn phòng khách', '2026-09-05', 'HOÀN THÀNH'],
        ['ACT-02', '2026-09-03', 'CUST-02', 'Trần Thị Bích', 'DEMO', 'Buổi demo online hệ thống CRM cho phòng kinh doanh', '2026-09-08', 'HOÀN THÀNH'],
        ['ACT-03', '2026-09-04', 'CUST-03', 'Hoàng Minh Cường', 'GỌI ĐIỆN', 'Tư vấn gói bảo trì định kỳ, khách hẹn xem xét lại', '2026-09-07', 'HOÀN THÀNH'],
        ['ACT-04', '2026-09-06', 'CUST-04', 'Phạm Hải Đăng', 'EMAIL', 'Gửi bảng báo giá chi tiết và lộ trình triển khai', '2026-09-12', 'CHỜ XỬ LÝ'],
        ['ACT-05', '2026-09-08', 'CUST-05', 'Vũ Quỳnh Nga', 'ZALO', 'Gửi video giới thiệu mẫu dashboard mẫu cho khách duyệt', '2026-09-15', 'CHỜ XỬ LÝ']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị quản lý CRM:', 'Công ty TNHH Giải Pháp Số Minh'],
      ['Đơn vị tiền tệ chuẩn:', 'VND'],
      ['Mục tiêu doanh số tháng:', 300000000],
      ['Chu kỳ theo dõi pipeline:', '30 ngày']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH BÁN HÀNG & QUẢN TRỊ PIPELINE CRM (F05)',
    subtitle: 'Tổng hợp phễu bán hàng • Tỷ lệ chốt đơn Win Rate • Cảnh báo lịch hẹn chăm sóc khách hàng tức thì',
    kpiCards: [
      {
        label: 'GIÁ TRỊ PHỄU ĐANG MỞ',
        formula: '=SUMIFS(DEALS!$G$2:$G$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")',
        format: '#,##0 "₫"',
        note: 'Tổng kỳ vọng các deal chưa đóng',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'GIÁ TRỊ CÓ TRỌNG SỐ',
        formula: '=SUMIFS(DEALS!$I$2:$I$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")',
        format: '#,##0 "₫"',
        note: 'Giá trị nhân với xác suất chốt',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỶ LỆ CHỐT ĐƠN (WIN RATE)',
        formula: '=IFERROR(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")/(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")+COUNTIF(DEALS!$F$2:$F$10001,"THUA")),0)',
        format: '0.0%',
        note: 'Thắng / (Thắng + Thua) đã chốt',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'CƠ HỘI ĐANG THEO ĐUỔI',
        formula: '=COUNTIFS(DEALS!$A$2:$A$10001,"<>",DEALS!$F$2:$F$10001,"<>THẮNG",DEALS!$F$2:$F$10001,"<>THUA")',
        format: '#,##0',
        note: 'Số lượng Deal mở trong pipeline',
        bg: '#F3E5F5',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      },
      {
        label: 'LỊCH HẸN QUÁ HẠN',
        formula: '=COUNTIFS(ACTIVITIES!$G$2:$G$10001,"<"&TODAY(),ACTIVITIES!$G$2:$G$10001,">0",ACTIVITIES!$H$2:$H$10001,"CHỜ XỬ LÝ")',
        format: '#,##0',
        note: 'Lịch hẹn trước hôm nay chưa xong',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      }
    ],
    subTables: [
      {
        title: 'PHÂN BỔ SỐ LƯỢNG VÀ GIÁ TRỊ THEO GIAI ĐOẠN PHỄU',
        titleRange: 'A8:E8',
        headerBg: '#BBDEFB',
        headerTextColor: '#0D47A1',
        colHeaderBg: '#1976D2',
        startRow: 9,
        startCol: 1,
        headers: ['Giai đoạn', 'Số lượng Deal', 'Tổng giá trị (VND)', 'Trọng số', 'Giá trị kỳ vọng'],
        rowFormulas: [
          {
            fromIdx: 0,
            toIdx: 4,
            rowOffset: 10,
            cells: [
              { col: 1, formulaFn: `['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i]` },
              { col: 2, formulaFn: `'=COUNTIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '")'` },
              { col: 3, formulaFn: `'=SUMIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '", DEALS!$G$2:$G$10001)'` },
              { col: 4, formulaFn: `[0.1, 0.3, 0.6, 1.0, 0.0][i]` },
              { col: 5, formulaFn: `'=ROUND(C' + r + ' * D' + r + ', 0)'` }
            ]
          }
        ],
        formats: [
          { range: 'B10:B14', format: '#,##0' },
          { range: 'C10:C14', format: '#,##0 "₫"' },
          { range: 'D10:D14', format: '0%' },
          { range: 'E10:E14', format: '#,##0 "₫"' }
        ]
      }
    ],
    charts: [
      {
        title: 'SỐ LƯỢNG CƠ HỘI BÁN HÀNG THEO GIAI ĐOẠN',
        type: 'SpreadsheetApp.ChartType.COLUMN',
        ranges: ['A9:B14'],
        row: 8,
        col: 7,
        width: 520,
        height: 240
      }
    ]
  }
};
