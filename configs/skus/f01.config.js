/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F01 — Quản lý công việc & Ma trận Eisenhower
 */

module.exports = {
  sku: 'F01',
  name: 'Quản lý công việc & Ma trận Eisenhower',
  version: '1.0.0',
  description: 'Hệ thống quản lý hiệu suất cá nhân và công việc, phân loại tự động 4 góc ma trận Eisenhower, tính số ngày quá hạn và đo lường tỷ lệ hoàn thành',
  tables: [
    {
      name: 'Tasks',
      color: '#283593',
      headers: [
        'ID', 'Title', 'OwnerEmail', 'Priority', 'StartDate', 'DueDate',
        'Status', 'Progress', 'CompletedAt', 'DaysLate', 'CategoryID',
        'Important', 'Urgent', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [130, 280, 180, 110, 100, 100, 100, 80, 140, 80, 110, 90, 90, 140, 140, 140, 90, 80],
      formats: [
        { range: 'E2:F1000', format: 'yyyy-mm-dd' },
        { range: 'H2:H1000', format: '0.0%' },
        { range: 'J2:J1000', format: '#,##0' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['THẤP', 'TRUNG BÌNH', 'CAO', 'KHẨN CẤP'] },
        { range: 'G2:G1000', type: 'list', values: ['TODO', 'DOING', 'DONE', 'CANCELLED'] },
        { range: 'L2:L1000', type: 'list', values: ['TRUE', 'FALSE'] },
        { range: 'M2:M1000', type: 'list', values: ['TRUE', 'FALSE'] },
        { range: 'R2:R1000', type: 'list', values: ['TRUE', 'FALSE'] }
      ],
      demoRows: [
        ['TSK-DEMO-01', 'Lập kế hoạch tài chính và ngân sách Quý 4', 'owner@minhtemplates.com', 'CAO', '2026-09-01', '2026-09-15', 'DOING', 0.4, '', '', 'CAT-WORK', 'TRUE', 'FALSE', '2026-09-01T08:00:00Z', '2026-09-04T10:00:00Z', 'owner@minhtemplates.com', 2, 'FALSE'],
        ['TSK-DEMO-02', 'Nộp tờ khai thuế GTGT và quyết toán chi phí tháng 8', 'owner@minhtemplates.com', 'KHẨN CẤP', '2026-08-25', '2026-09-02', 'TODO', 0.0, '', '', 'CAT-WORK', 'TRUE', 'TRUE', '2026-08-25T08:00:00Z', '2026-08-25T08:00:00Z', 'owner@minhtemplates.com', 1, 'FALSE'],
        ['TSK-DEMO-03', 'Khám sức khỏe tổng quát định kỳ tại bệnh viện', 'owner@minhtemplates.com', 'TRUNG BÌNH', '2026-09-01', '2026-09-05', 'DONE', 1.0, '2026-09-05T09:30:00Z', '', 'CAT-HEALTH', 'TRUE', 'FALSE', '2026-09-01T08:00:00Z', '2026-09-05T09:30:00Z', 'owner@minhtemplates.com', 2, 'FALSE'],
        ['TSK-DEMO-04', 'Đăng ký khóa học nâng cao Google Apps Script & AppSheet', 'owner@minhtemplates.com', 'TRUNG BÌNH', '2026-09-05', '2026-09-20', 'TODO', 0.0, '', '', 'CAT-STUDY', 'FALSE', 'FALSE', '2026-09-05T08:00:00Z', '2026-09-05T08:00:00Z', 'owner@minhtemplates.com', 1, 'FALSE'],
        ['TSK-DEMO-05', 'Mua sắm thiết bị văn phòng dự phòng không cấp thiết', 'owner@minhtemplates.com', 'THẤP', '2026-08-28', '2026-09-03', 'CANCELLED', 0.0, '', '', 'CAT-WORK', 'FALSE', 'FALSE', '2026-08-28T08:00:00Z', '2026-09-02T14:00:00Z', 'owner@minhtemplates.com', 2, 'FALSE'],
        ['TSK-DEMO-06', 'Bảo dưỡng định kỳ xe ô tô công tác', 'owner@minhtemplates.com', 'TRUNG BÌNH', '2026-09-02', '2026-09-06', 'DOING', 0.3, '', '', 'CAT-PERSONAL', 'FALSE', 'TRUE', '2026-09-02T08:00:00Z', '2026-09-06T10:00:00Z', 'owner@minhtemplates.com', 2, 'FALSE']
      ],
      rowFormulas: [
        {
          col: 10,
          formulaFn: `'=IF(OR(A' + r + '="",F' + r + '="",G' + r + '="CANCELLED"),"",IF(G' + r + '="DONE",IF(I' + r + '="","",MAX(0,INT(I' + r + ')-F' + r + ')),MAX(0,TODAY()-F' + r + ')))'`
        }
      ]
    },
    {
      name: 'Categories',
      color: '#9C27B0',
      headers: ['ID', 'Name', 'Color', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'],
      colWidths: [110, 160, 100, 180, 180, 180, 90, 80],
      demoRows: [
        ['CAT-WORK', 'Công việc', '#1E88E5', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'system@minhtemplates.com', 1, 'FALSE'],
        ['CAT-PERSONAL', 'Cá nhân', '#43A047', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'system@minhtemplates.com', 1, 'FALSE'],
        ['CAT-STUDY', 'Học tập', '#FB8C00', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'system@minhtemplates.com', 1, 'FALSE'],
        ['CAT-HEALTH', 'Sức khỏe', '#E53935', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'system@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'TaskEvents',
      color: '#607D8B',
      headers: ['ID', 'TaskID', 'EventType', 'EventAt', 'ActorEmail', 'Notes', 'CreatedAt'],
      colWidths: [110, 130, 120, 160, 180, 260, 160],
      demoRows: [
        ['EV-01', 'TSK-DEMO-01', 'STATUS_CHANGE', '2026-09-04T10:00:00Z', 'owner@minhtemplates.com', 'Chuyển sang DOING', '2026-09-04T10:00:00Z']
      ]
    }
  ],
  settings: {
    rows: [
      ['Tên đơn vị quản lý:', 'Minh Personal Productivity'],
      ['Múi giờ chuẩn:', 'Asia/Ho_Chi_Minh'],
      ['Định dạng ngày:', 'yyyy-mm-dd'],
      ['Mục tiêu tuần hoàn thành:', 15]
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU KHIỂN QUẢN LÝ CÔNG VIỆC & HIỆU SUẤT CÁ NHÂN (F01)',
    subtitle: 'Cập nhật tự động thời gian thực • Ma trận Eisenhower • Cảnh báo quá hạn tức thì',
    kpiCards: [
      {
        label: 'TỶ LỆ HOÀN THÀNH',
        formula: '=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)',
        format: '0.0%',
        note: 'Loại bỏ việc hủy • Mục tiêu: 100%',
        bg: '#E0F2F1',
        textColor: '#004D40',
        valColor: '#00695C'
      },
      {
        label: 'ĐANG QUÁ HẠN',
        formula: '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
        format: '#,##0',
        note: 'Cần xử lý ngay',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'ĐANG LÀM (DOING)',
        formula: '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DOING")',
        format: '#,##0',
        note: 'Đang triển khai',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'CẦN LÀM (TODO)',
        formula: '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"TODO")',
        format: '#,##0',
        note: 'Chờ bắt đầu',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'ĐÃ HOÀN TẤT (DONE)',
        formula: '=COUNTIF(Tasks!G2:G10001,"DONE")',
        format: '#,##0',
        note: 'Đã kết thúc',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      }
    ],
    subTables: [
      {
        title: 'THỐNG KÊ TRẠNG THÁI CÔNG VIỆC',
        titleRange: 'A8:B8',
        headerBg: '#ECEFF1',
        headerTextColor: '#263238',
        colHeaderBg: '#CFD8DC',
        startRow: 9,
        startCol: 1,
        headers: ['Trạng thái', 'Số lượng'],
        rowFormulas: [
          {
            fromIdx: 0,
            toIdx: 3,
            rowOffset: 10,
            cells: [
              { col: 1, formulaFn: `['DONE', 'DOING', 'TODO', 'CANCELLED'][i]` },
              { col: 2, formulaFn: `'=COUNTIF(Tasks!$G$2:$G$10001, "' + ['DONE', 'DOING', 'TODO', 'CANCELLED'][i] + '")'` }
            ]
          }
        ],
        formats: [
          { range: 'B10:B13', format: '#,##0' }
        ]
      }
    ],
    charts: [
      {
        title: 'Tỷ lệ Phân bổ Trạng thái',
        type: 'SpreadsheetApp.ChartType.PIE',
        ranges: ['A9:B13'],
        row: 8,
        col: 4,
        width: 380,
        height: 240
      }
    ]
  }
};
