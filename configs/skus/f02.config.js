/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F02 — Quản lý Dự án, Công việc Đội nhóm & KPI (Team Project & KPI Hub)
 */

module.exports = {
  sku: 'F02',
  name: 'Quản lý Dự án, Đội nhóm & KPI',
  version: '1.0.0',
  description: 'Quản lý tiến độ dự án theo trọng số thực tế (Weighted Progress), phân bổ công việc đội nhóm, ghi nhận giờ công (Timesheets) và đo lường hiệu suất KPI nhân sự',
  tables: [
    {
      name: 'PROJECTS',
      color: '#1A237E',
      headers: [
        'Mã dự án', 'Tên dự án', 'Trưởng dự án (PM)', 'Ngày bắt đầu', 'Hạn hoàn thành',
        'Ngân sách (VND)', 'Chi phí thực tế (VND)', 'Tiến độ trọng số (%)', 'Trạng thái', 'Ghi chú mục tiêu'
      ],
      colWidths: [100, 240, 160, 110, 110, 160, 160, 140, 140, 220],
      formats: [
        { range: 'D2:E100', format: 'yyyy-mm-dd' },
        { range: 'F2:G100', format: '#,##0 "₫"' },
        { range: 'H2:H100', format: '0.0%' }
      ],
      validations: [
        { range: 'I2:I100', type: 'list', values: ['CHƯA BẮT ĐẦU', 'ĐANG THỰC HIỆN', 'TẠM DỪNG', 'HOÀN THÀNH', 'HỦY'] }
      ],
      demoRows: [
        ['PRJ-01', 'Nâng cấp Nền tảng E-Commerce v2.0', 'nguyen.minh@company.vn', '2026-08-01', '2026-10-31', 150000000, 85000000, '', 'ĐANG THỰC HIỆN', 'Tối ưu tốc độ tải trang và tích hợp cổng VietQR'],
        ['PRJ-02', 'Triển khai ERP Mini Doanh Nghiệp', 'tran.thao@company.vn', '2026-09-01', '2026-11-30', 200000000, 45000000, '', 'ĐANG THỰC HIỆN', 'Số hóa toàn bộ quy trình Bán hàng - Mua hàng - Kho'],
        ['PRJ-03', 'Chiến dịch Quảng bá Mùa Thu 2026', 'le.long@company.vn', '2026-08-15', '2026-09-15', 50000000, 48000000, '', 'HOÀN THÀNH', 'Đạt mục tiêu thu hút 10.000 khách hàng tiềm năng']
      ],
      rowFormulas: [
        {
          col: 8,
          formulaFn: `'=IF(SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + ') > 0, SUMPRODUCT((TASKS!$B$2:$B$1000=A' + r + ') * TASKS!$G$2:$G$1000 * TASKS!$H$2:$H$1000) / SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + '), 0)'`
        }
      ]
    },
    {
      name: 'TASKS',
      color: '#0D47A1',
      headers: [
        'Mã việc', 'Mã dự án', 'Tiêu đề đầu việc', 'Người phụ trách', 'Ngày bắt đầu',
        'Hạn hoàn thành', 'Trọng số (1-5)', 'Tiến độ cá nhân (%)', 'Trạng thái',
        'Mức ưu tiên', 'Ngày hoàn thành thực tế', 'Đánh giá hạn'
      ],
      colWidths: [100, 100, 260, 180, 105, 105, 110, 140, 130, 110, 120, 120],
      formats: [
        { range: 'E2:F1000', format: 'yyyy-mm-dd' },
        { range: 'H2:H1000', format: '0.0%' },
        { range: 'K2:K1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'G2:G1000', type: 'list', values: ['1', '2', '3', '4', '5'] },
        { range: 'I2:I1000', type: 'list', values: ['TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE', 'CANCELLED'] },
        { range: 'J2:J1000', type: 'list', values: ['CAO', 'TRUNG BÌNH', 'THẤP'] }
      ],
      demoRows: [
        ['TSK-001', 'PRJ-01', 'Thiết kế kiến trúc cơ sở dữ liệu Postgres', 'nguyen.minh@company.vn', '2026-08-01', '2026-08-15', 3, 1.00, 'DONE', 'CAO', '2026-08-14', ''],
        ['TSK-002', 'PRJ-01', 'Phát triển API Module Giỏ hàng & Thanh toán', 'tran.thao@company.vn', '2026-08-16', '2026-09-15', 4, 0.75, 'IN_PROGRESS', 'CAO', '', ''],
        ['TSK-003', 'PRJ-01', 'Tích hợp thanh toán SePay / VietQR tự động', 'pham.nam@company.vn', '2026-09-01', '2026-09-20', 3, 0.40, 'IN_PROGRESS', 'CAO', '', ''],
        ['TSK-004', 'PRJ-02', 'Khảo sát quy trình nghiệp vụ kế toán kho', 'tran.thao@company.vn', '2026-09-01', '2026-09-10', 2, 1.00, 'DONE', 'TRUNG BÌNH', '2026-09-09', ''],
        ['TSK-005', 'PRJ-02', 'Viết tài liệu đặc tả yêu cầu người dùng (PRD)', 'nguyen.minh@company.vn', '2026-09-11', '2026-09-25', 3, 0.50, 'IN_PROGRESS', 'TRUNG BÌNH', '', '']
      ],
      rowFormulas: [
        {
          col: 12,
          formulaFn: `'=IF(I' + r + '="DONE", IF(K' + r + '<=F' + r + ', "ĐÚNG HẠN", "TRỄ HẠN"), IF(TODAY()>F' + r + ', "QUÁ HẠN", "ĐANG CHẠY"))'`
        }
      ]
    },
    {
      name: 'TIMESHEETS',
      color: '#004D40',
      headers: ['Mã log', 'Mã việc', 'Nhân sự', 'Ngày làm việc', 'Số giờ làm (h)', 'Nội dung công việc chi tiết'],
      colWidths: [100, 100, 180, 110, 120, 320],
      formats: [
        { range: 'D2:D1000', format: 'yyyy-mm-dd' },
        { range: 'E2:E1000', format: '0.0 "giờ"' }
      ],
      demoRows: [
        ['LOG-01', 'TSK-001', 'nguyen.minh@company.vn', '2026-08-10', 6.5, 'Thiết kế sơ đồ ERD các bảng đơn hàng và kho'],
        ['LOG-02', 'TSK-002', 'tran.thao@company.vn', '2026-09-02', 8.0, 'Viết controller xử lý webhook SePay'],
        ['LOG-03', 'TSK-003', 'pham.nam@company.vn', '2026-09-03', 7.0, 'Tạo mã QR động theo chuẩn NAPAS 247'],
        ['LOG-04', 'TSK-004', 'tran.thao@company.vn', '2026-09-05', 5.0, 'Phỏng vấn trưởng bộ phận kho vận']
      ]
    },
    {
      name: 'KPI_PLANS',
      color: '#4A148C',
      headers: [
        'Mã chỉ tiêu', 'Nhân viên', 'Kỳ đánh giá', 'Tiêu chí KPI', 'ĐVT',
        'Mục tiêu (Target)', 'Trọng số (%)', 'Chiều đo lường', 'Thực tế đạt (Actual)',
        'Tỷ lệ hoàn thành (%)', 'Điểm KPI quy đổi'
      ],
      colWidths: [100, 180, 110, 220, 80, 130, 110, 150, 140, 140, 130],
      formats: [
        { range: 'G2:G100', format: '0.0%' },
        { range: 'J2:J100', format: '0.0%' },
        { range: 'K2:K100', format: '0.00' }
      ],
      validations: [
        { range: 'H2:H100', type: 'list', values: ['CÀNG CAO CÀNG TỐT', 'CÀNG THẤP CÀNG TỐT'] }
      ],
      demoRows: [
        ['KPI-01', 'nguyen.minh@company.vn', 'Quý 3/2026', 'Tỷ lệ hoàn thành task đúng hạn', '%', 0.90, 0.40, 'CÀNG CAO CÀNG TỐT', 0.95, '', ''],
        ['KPI-02', 'nguyen.minh@company.vn', 'Quý 3/2026', 'Số lượng bài viết kỹ thuật/tài liệu', 'Bài', 4, 0.20, 'CÀNG CAO CÀNG TỐT', 5, '', ''],
        ['KPI-03', 'tran.thao@company.vn', 'Quý 3/2026', 'Số lỗi phát sinh sau release (Bug count)', 'Bug', 2, 0.30, 'CÀNG THẤP CÀNG TỐT', 1, '', ''],
        ['KPI-04', 'tran.thao@company.vn', 'Quý 3/2026', 'Số giờ làm việc hữu ích log trên Timesheet', 'Giờ', 160, 0.40, 'CÀNG CAO CÀNG TỐT', 168, '', '']
      ],
      rowFormulas: [
        {
          col: 10,
          formulaFn: `'=IF(H' + r + '="CÀNG CAO CÀNG TỐT", I' + r + ' / F' + r + ', IF(I' + r + '>0, F' + r + ' / I' + r + ', 1))'`
        },
        {
          col: 11,
          formulaFn: `'=J' + r + ' * G' + r + ' * 100'`
        }
      ]
    },
    {
      name: 'MEMBERS',
      color: '#37474F',
      headers: ['Mã nhân sự', 'Họ và tên', 'Email', 'Vai trò / Phòng ban', 'Số việc đang giữ', 'Điểm KPI trung bình'],
      colWidths: [100, 200, 200, 160, 130, 150],
      formats: [
        { range: 'F2:F100', format: '0.0' }
      ],
      demoRows: [
        ['MEM-01', 'Nguyễn Hoàng Minh', 'nguyen.minh@company.vn', 'Tech Lead / PM', '', ''],
        ['MEM-02', 'Trần Thị Thu Thảo', 'tran.thao@company.vn', 'Senior Developer', '', ''],
        ['MEM-03', 'Phạm Hoàng Nam', 'pham.nam@company.vn', 'Backend Engineer', '', '']
      ],
      rowFormulas: [
        {
          col: 5,
          formulaFn: `'=COUNTIFS(TASKS!$D$2:$D$1000, C' + r + ', TASKS!$I$2:$I$1000, "<>DONE", TASKS!$I$2:$I$1000, "<>CANCELLED")'`
        },
        {
          col: 6,
          formulaFn: `'=IF(COUNTIF(KPI_PLANS!$B$2:$B$100, C' + r + ') > 0, AVERAGEIF(KPI_PLANS!$B$2:$B$100, C' + r + ', KPI_PLANS!$K$2:$K$100), 0)'`
        }
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên tổ chức / Đội nhóm:', 'MINH PRODUCT ENGINEERING TEAM'],
      ['Kỳ theo dõi dự án:', 'Quý 3 & 4 / 2026'],
      ['Giờ làm việc tiêu chuẩn / ngày:', 8],
      ['Trưởng ban thẩm định KPI:', 'Nguyễn Hoàng Minh - Giám Đốc Kỹ Thuật'],
      ['Quy ước trọng số công việc:', '1 (Nhẹ) - 3 (Tiêu chuẩn) - 5 (Rất quan trọng)']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH DỰ ÁN ĐỘI NHÓM & HIỆU SUẤT KPI (F02)',
    subtitle: 'Theo dõi tiến độ trọng số thời gian thực • Cảnh báo trễ hạn • Đánh giá hiệu suất nhân sự',
    kpiCards: [
      {
        label: 'TỔNG DỰ ÁN ĐANG HOẠT ĐỘNG',
        formula: '=COUNTIF(PROJECTS!$I$2:$I$100, "ĐANG THỰC HIỆN")',
        format: '#,##0 " dự án"',
        note: 'Dự án đang trong giai đoạn triển khai',
        bg: '#E8EAF6',
        textColor: '#1A237E',
        valColor: '#283593'
      },
      {
        label: 'TIẾN ĐỘ TRỌNG SỐ TRUNG BÌNH',
        formula: '=AVERAGE(PROJECTS!$H$2:$H$100)',
        format: '0.0%',
        note: 'Tiến độ trung bình toàn bộ dự án',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'ĐẦU VIỆC ĐANG BỊ QUÁ HẠN',
        formula: '=COUNTIF(TASKS!$L$2:$L$1000, "QUÁ HẠN")',
        format: '#,##0 " việc"',
        note: 'Cần can thiệp gấp để đảm bảo timeline',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'TỶ LỆ HOÀN THÀNH ĐÚNG HẠN',
        formula: '=IF(COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN") > 0, COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") / (COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN")), 0)',
        format: '0.0%',
        note: 'ĐÚNG HẠN / (ĐÚNG HẠN + TRỄ HẠN)',
        bg: '#FFF8E1',
        textColor: '#F57F17',
        valColor: '#F57F17'
      },
      {
        label: 'TỔNG SỐ GIỜ LÀM ĐÃ GHI NHẬN',
        formula: '=SUM(TIMESHEETS!$E$2:$E$1000)',
        format: '#,##0.0 " giờ"',
        note: 'Tổng thời gian lao động đã log',
        bg: '#E0F2F1',
        textColor: '#004D40',
        valColor: '#00695C'
      }
    ],
    subTables: [
      {
        title: 'BẢNG THEO DÕI TIẾN ĐỘ TRỌNG SỐ VÀ NGÂN SÁCH DỰ ÁN',
        titleRange: 'A8:E8',
        headerBg: '#C5CAE9',
        headerTextColor: '#1A237E',
        colHeaderBg: '#3949AB',
        startRow: 9,
        startCol: 1,
        headers: ['Mã dự án', 'Tên dự án', 'Ngân sách (VND)', 'Chi phí (VND)', 'Tiến độ'],
        rowFormulas: [
          {
            fromIdx: 2,
            toIdx: 4,
            rowOffset: 8,
            cells: [
              { col: 1, formulaFn: `'=IF(PROJECTS!A' + i + '<>"","PROJECTS!A' + i + '","")'` },
              { col: 2, formulaFn: `'=IF(PROJECTS!B' + i + '<>"","PROJECTS!B' + i + '","")'` },
              { col: 3, formulaFn: `'=IF(PROJECTS!F' + i + '<>"","PROJECTS!F' + i + '","")'` },
              { col: 4, formulaFn: `'=IF(PROJECTS!G' + i + '<>"","PROJECTS!G' + i + '","")'` },
              { col: 5, formulaFn: `'=IF(PROJECTS!H' + i + '<>"","PROJECTS!H' + i + '","")'` }
            ]
          }
        ],
        formats: [
          { range: 'C10:D13', format: '#,##0 "₫"' },
          { range: 'E10:E13', format: '0.0%' }
        ]
      }
    ],
    charts: [
      {
        title: 'Tiến Độ Các Dự Án Hiện Tại',
        type: 'SpreadsheetApp.ChartType.BAR',
        ranges: ['A9:E12'],
        row: 8,
        col: 7,
        width: 520,
        height: 260
      }
    ]
  }
};
