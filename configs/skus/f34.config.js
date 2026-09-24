/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F34 — Lập Ngân Sách Doanh Nghiệp (Enterprise Budget Planning)
 */

module.exports = {
  sku: 'F34',
  name: 'Lập ngân sách doanh nghiệp',
  version: '1.0.0',
  description: 'Hoạch định dự toán ngân sách đa phòng ban/dự án, khóa baseline, theo dõi thực chi và cam kết chưa giải ngân, kiểm soát vượt ngân sách và điều chỉnh dự toán',
  tables: [
    {
      name: 'BUDGET_VERSIONS',
      color: '#1565C0',
      headers: [
        'Mã phiên bản', 'Tên ngân sách', 'Năm tài chính', 'Kịch bản', 'Trạng thái', 'Ngày phê duyệt', 'Người lập'
      ],
      colWidths: [130, 260, 110, 130, 120, 120, 180],
      formats: [
        { range: 'C2:C1000', format: '0' },
        { range: 'F2:F1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['BASELINE', 'REVISED', 'FORECAST'] },
        { range: 'E2:E1000', type: 'list', values: ['DRAFT', 'APPROVED', 'LOCKED'] }
      ],
      demoRows: [
        ['BV-2026-BASE', 'Kế hoạch Ngân sách Tổng thể Năm 2026', 2026, 'BASELINE', 'LOCKED', '2025-12-25', 'Ban Giám Đốc'],
        ['BV-2026-REV1', 'Điều chỉnh Ngân sách Quý 3/2026', 2026, 'REVISED', 'APPROVED', '2026-06-30', 'Phòng Tài Chính - Kế Toán']
      ]
    },
    {
      name: 'BUDGET_LINES',
      color: '#0277BD',
      headers: [
        'Mã dòng dự toán', 'Mã phiên bản', 'Kỳ ngân sách', 'Phòng ban', 'Mã dự án',
        'Khoản mục chi phí', 'Ngân sách phê duyệt (VND)', 'Thực tế đã chi (VND)',
        'Cam kết chưa chi (VND)', 'Khả dụng còn lại (VND)', 'Tỷ lệ sử dụng (%)', 'Diễn giải'
      ],
      colWidths: [130, 130, 110, 140, 120, 200, 180, 170, 170, 180, 120, 220],
      formats: [
        { range: 'G2:J1000', format: '#,##0 "₫"' },
        { range: 'K2:K1000', format: '0.0%' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['BAN GIÁM ĐỐC', 'MARKETING', 'KINH DOANH', 'KỸ THUẬT R&D', 'VẬN HÀNH', 'NHÂN SỰ'] }
      ],
      demoRows: [
        ['BL-001', 'BV-2026-BASE', '2026-Q3', 'MARKETING', 'PRJ-MKT-01', 'Quảng cáo Digital (Facebook & Google)', 100000000, '', '', '', '', 'Dự toán theo CODEX Acceptance Test'],
        ['BL-002', 'BV-2026-BASE', '2026-Q3', 'KỸ THUẬT R&D', 'PRJ-TECH-02', 'Hạ tầng máy chủ đám mây Cloud', 60000000, '', '', '', '', 'Chi phí hạ tầng AWS/GCP'],
        ['BL-003', 'BV-2026-BASE', '2026-Q3', 'NHÂN SỰ', 'PRJ-HR-01', 'Đào tạo & Phát triển nhân tài', 40000000, '', '', '', '', 'Khóa huấn luyện kỹ năng cho nhân viên'],
        ['BL-004', 'BV-2026-BASE', '2026-Q3', 'VẬN HÀNH', 'PRJ-OPS-01', 'Văn phòng phẩm & tiện ích', 25000000, '', '', '', '', 'Chi phí văn phòng trụ sở chính']
      ],
      rowFormulas: [
        {
          col: 8,
          formulaFn: "\'=SUMIFS(BUDGET_ACTUALS!$G$2:$G$1000, BUDGET_ACTUALS!$D$2:$D$1000, D\' + r + \', BUDGET_ACTUALS!$F$2:$F$1000, F\' + r + \', BUDGET_ACTUALS!$I$2:$I$1000, \"POSTED\")\'"
        },
        {
          col: 9,
          formulaFn: "\'=SUMIFS(BUDGET_COMMITMENTS!$C$2:$C$1000, BUDGET_COMMITMENTS!$B$2:$B$1000, A\' + r + \', BUDGET_COMMITMENTS!$F$2:$F$1000, \"COMMITTED\")\'"
        },
        {
          col: 10,
          formulaFn: "\'=MAX(0, G\' + r + \' - H\' + r + \' - I\' + r + \')\'"
        },
        {
          col: 11,
          formulaFn: "\'=IF(G\' + r + \'=0, 0, (H\' + r + \' + I\' + r + \') / G\' + r + \')\'"
        }
      ]
    },
    {
      name: 'BUDGET_ACTUALS',
      color: '#2E7D32',
      headers: [
        'Mã chi thực tế', 'Ngày chi', 'Kỳ ngân sách', 'Phòng ban', 'Mã dự án',
        'Khoản mục chi phí', 'Số tiền thực chi (VND)', 'Mã nguồn tham chiếu', 'Trạng thái', 'Diễn giải'
      ],
      colWidths: [130, 110, 110, 140, 120, 200, 170, 160, 120, 220],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' },
        { range: 'G2:G1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'I2:I1000', type: 'list', values: ['POSTED', 'PENDING'] }
      ],
      demoRows: [
        ['ACT-001', '2026-07-15', '2026-Q3', 'MARKETING', 'PRJ-MKT-01', 'Quảng cáo Digital (Facebook & Google)', 30000000, 'F17-TX-089', 'POSTED', 'Chi tiền quảng cáo tháng 7 theo CODEX Test'],
        ['ACT-002', '2026-07-20', '2026-Q3', 'KỸ THUẬT R&D', 'PRJ-TECH-02', 'Hạ tầng máy chủ đám mây Cloud', 18000000, 'F17-TX-095', 'POSTED', 'Hóa đơn máy chủ GCP tháng 7']
      ]
    },
    {
      name: 'BUDGET_COMMITMENTS',
      color: '#E65100',
      headers: [
        'Mã cam kết', 'Mã dòng dự toán', 'Số tiền cam kết (VND)', 'Hợp đồng / PO tham chiếu',
        'Ngày cam kết', 'Trạng thái', 'Diễn giải'
      ],
      colWidths: [130, 130, 170, 180, 120, 130, 240],
      formats: [
        { range: 'C2:C1000', format: '#,##0 "₫"' },
        { range: 'E2:E1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['COMMITTED', 'RELEASED', 'EXPENDED'] }
      ],
      demoRows: [
        ['CMT-001', 'BL-001', 20000000, 'CTR-MKT-2026-05', '2026-07-05', 'COMMITTED', 'Hợp đồng chạy truyền thông agency (Chưa thanh toán)']
      ]
    },
    {
      name: 'BUDGET_REQUESTS',
      color: '#6A1B9A',
      headers: [
        'Mã đề xuất', 'Mã dòng dự toán', 'Số tiền xin điều chỉnh (VND)', 'Lý do xin điều chỉnh',
        'Người đề xuất', 'Trạng thái', 'Ngày duyệt'
      ],
      colWidths: [130, 130, 180, 260, 160, 120, 120],
      formats: [
        { range: 'C2:C1000', format: '#,##0 "₫"' },
        { range: 'G2:G1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['PENDING', 'APPROVED', 'REJECTED'] }
      ],
      demoRows: [
        ['REQ-001', 'BL-001', 15000000, 'Bổ sung ngân sách chiến dịch kích cầu mùa tựu trường', 'Trần Thị Thu Thảo', 'APPROVED', '2026-08-01']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị lập ngân sách:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Năm tài chính:', '2026'],
      ['Kỳ đánh giá dự toán:', 'Hàng quý (Quarterly Reviews)'],
      ['Ngưỡng cảnh báo vượt ngân sách:', '85% tổng ngân sách phê duyệt'],
      ['Quy trình phê duyệt:', 'Trưởng phòng đề xuất -> Giám đốc Tài chính thẩm định -> Tổng Giám Đốc duyệt']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH NGÂN SÁCH DOANH NGHIỆP (F34)',
    subtitle: 'Theo dõi hạn mức ngân sách • Kiểm soát thực chi • Quản lý cam kết chi • Dự báo khả dụng',
    kpiCards: [
      {
        label: 'TỔNG NGÂN SÁCH ĐƯỢC DUYỆT',
        formula: '=SUM(BUDGET_LINES!$G$2:$G$1000)',
        format: '#,##0 "₫"',
        note: 'Tổng mức dự toán được phê duyệt',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỔNG CHI THỰC TẾ',
        formula: '=SUM(BUDGET_LINES!$H$2:$H$1000)',
        format: '#,##0 "₫"',
        note: 'Tổng chi phí thực tế đã giải ngân',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'CHI PHÍ CAM KẾT CHƯA CHI',
        formula: '=SUM(BUDGET_LINES!$I$2:$I$1000)',
        format: '#,##0 "₫"',
        note: 'Các khoản đã ký duyệt nhưng chưa thanh toán',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'NGÂN SÁCH KHẢ DỤNG CÒN LẠI',
        formula: '=SUM(BUDGET_LINES!$J$2:$J$1000)',
        format: '#,##0 "₫"',
        note: 'Hạn mức ngân sách còn có thể sử dụng',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      }
    ]
  }
};
