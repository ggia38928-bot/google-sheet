/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F12 — Quản lý hồ sơ nhân sự & Hợp đồng lao động
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  sku: 'F12',
  name: 'Quản lý hồ sơ nhân sự & hợp đồng lao động',
  version: '1.0.0',
  description: 'Hệ thống quản lý toàn diện hồ sơ nhân viên, vòng đời nhân sự, theo dõi hợp đồng lao động, cảnh báo hạn gia hạn và bảo mật thông tin đãi ngộ',
  timeZone: 'Asia/Ho_Chi_Minh',
  locale: 'vi-VN',
  currency: 'VND',
  tables: [
    {
      name: 'Employees',
      color: '#1565C0',
      headers: [
        'ID', 'EmployeeCode', 'FullName', 'WorkEmail', 'TeamID', 'JobTitle',
        'HireDate', 'ExitDate', 'EmploymentStatus', 'CreatedAt', 'UpdatedAt',
        'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 110, 220, 200, 140, 160, 110, 110, 130, 160, 160, 180, 90, 80],
      formats: [
        { range: 'G2:H1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'E2:E1000', type: 'list', values: ['BAN GIÁM ĐỐC', 'KINH DOANH', 'KỸ THUẬT', 'MARKETING', 'NHÂN SỰ', 'TÀI CHÍNH', 'VẬN HÀNH'] },
        { range: 'I2:I1000', type: 'list', values: ['ACTIVE', 'PROBATION', 'ON_LEAVE', 'TERMINATED'] },
        { range: 'N2:N1000', type: 'list', values: ['TRUE', 'FALSE'] }
      ],
      demoRows: [
        ['EMP-001', 'NV-001', 'Nguyễn Hoàng Minh', 'minh.nh@minhtemplates.com', 'BAN GIÁM ĐỐC', 'Tổng Giám Đốc', '2024-01-15', '', 'ACTIVE', '2024-01-15T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMP-002', 'NV-002', 'Trần Thị Thu Thảo', 'thao.tt@minhtemplates.com', 'KINH DOANH', 'Trưởng Phòng Kinh Doanh', '2024-03-01', '', 'ACTIVE', '2024-03-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMP-003', 'NV-003', 'Lê Hoàng Long', 'long.lh@minhtemplates.com', 'KỸ THUẬT', 'Kỹ Sư Phần Mềm Cao Cấp', '2024-06-15', '', 'ACTIVE', '2024-06-15T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMP-004', 'NV-004', 'Phạm Quỳnh Anh', 'anh.pq@minhtemplates.com', 'MARKETING', 'Chuyên Viên Digital Marketing', '2026-07-01', '', 'PROBATION', '2026-07-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMP-005', 'NV-005', 'Đỗ Gia Bảo', 'bao.dg@minhtemplates.com', 'NHÂN SỰ', 'Chuyên Viên Tuyển Dụng', '2025-02-01', '', 'ACTIVE', '2025-02-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMP-006', 'NV-006', 'Vũ Đức Thịnh', 'thinh.vd@minhtemplates.com', 'KỸ THUẬT', 'Lập Trình Viên Frontend', '2024-08-01', '2026-06-30', 'TERMINATED', '2024-08-01T08:00:00Z', '2026-06-30T17:00:00Z', 'admin@minhtemplates.com', 2, 'FALSE']
      ]
    },
    {
      name: 'EmploymentContracts',
      color: '#0277BD',
      headers: [
        'ID', 'ContractNumber', 'EmployeeID', 'Type', 'StartDate', 'EndDate',
        'Status', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 160, 120, 160, 110, 110, 120, 160, 160, 180, 90, 80],
      formats: [
        { range: 'E2:F1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['PROBATION', 'FIXED_TERM_1Y', 'FIXED_TERM_3Y', 'INDEFINITE'] },
        { range: 'G2:G1000', type: 'list', values: ['ACTIVE', 'EXPIRING', 'EXPIRED', 'TERMINATED'] },
        { range: 'L2:L1000', type: 'list', values: ['TRUE', 'FALSE'] }
      ],
      demoRows: [
        ['CTR-001', 'HĐLĐ-2024-001', 'EMP-001', 'INDEFINITE', '2024-01-15', '', 'ACTIVE', '2024-01-15T08:00:00Z', '2024-01-15T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CTR-002', 'HĐLĐ-2024-002', 'EMP-002', 'FIXED_TERM_3Y', '2024-03-01', '2027-02-28', 'ACTIVE', '2024-03-01T08:00:00Z', '2024-03-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CTR-003', 'HĐLĐ-2025-003', 'EMP-003', 'FIXED_TERM_1Y', '2025-06-15', '2026-09-30', 'EXPIRING', '2025-06-15T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CTR-004', 'HĐTV-2026-004', 'EMP-004', 'PROBATION', '2026-07-01', '2026-08-31', 'EXPIRED', '2026-07-01T08:00:00Z', '2026-08-31T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CTR-005', 'HĐLĐ-2025-005', 'EMP-005', 'FIXED_TERM_3Y', '2025-02-01', '2028-01-31', 'ACTIVE', '2025-02-01T08:00:00Z', '2025-02-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'EmployeeFiles',
      color: '#00838F',
      headers: [
        'ID', 'EmployeeID', 'Category', 'FileID', 'Status', 'CreatedAt',
        'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 150, 180, 120, 160, 160, 180, 90, 80],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['ID_CARD', 'DEGREE', 'HEALTH_CERT', 'CONTRACT', 'RESUME'] },
        { range: 'E2:E1000', type: 'list', values: ['SUBMITTED', 'MISSING', 'VERIFIED'] }
      ],
      demoRows: [
        ['FIL-001', 'EMP-001', 'ID_CARD', 'DRIVE_FILE_001', 'VERIFIED', '2024-01-15T08:00:00Z', '2024-01-15T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['FIL-002', 'EMP-002', 'HEALTH_CERT', 'DRIVE_FILE_002', 'VERIFIED', '2024-03-01T08:00:00Z', '2024-03-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['FIL-003', 'EMP-004', 'DEGREE', '', 'MISSING', '2026-07-01T08:00:00Z', '2026-07-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'EmergencyContacts',
      color: '#43A047',
      headers: [
        'ID', 'EmployeeID', 'Name', 'Relationship', 'Phone', 'CreatedAt',
        'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 200, 140, 130, 160, 160, 180, 90, 80],
      demoRows: [
        ['EMC-001', 'EMP-001', 'Lê Thị Mai', 'VỢ/CHỒNG', '0912345678', '2024-01-15T08:00:00Z', '2024-01-15T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EMC-002', 'EMP-002', 'Trần Văn Dũng', 'BỐ/MẸ', '0987654321', '2024-03-01T08:00:00Z', '2024-03-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'EmploymentEvents',
      color: '#FB8C00',
      headers: [
        'ID', 'EmployeeID', 'Type', 'EffectiveDate', 'FromTeamID', 'ToTeamID',
        'Notes', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 140, 110, 140, 140, 240, 160, 160, 180, 90, 80],
      formats: [
        { range: 'D2:D1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['EVT-001', 'EMP-003', 'TRANSFER', '2025-01-01', 'HỖ TRỢ KỸ THUẬT', 'KỸ THUẬT', 'Điều chuyển sang khối Core R&D', '2025-01-01T08:00:00Z', '2025-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['EVT-002', 'EMP-006', 'RESIGN', '2026-06-30', 'KỸ THUẬT', '', 'Nghỉ việc theo nguyện vọng cá nhân', '2026-06-30T17:00:00Z', '2026-06-30T17:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Compensation',
      color: '#6A1B9A',
      headers: [
        'ID', 'EmployeeID', 'EffectiveFrom', 'Amount', 'AccessGroup',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 120, 160, 180, 160, 160, 180, 90, 80],
      formats: [
        { range: 'C2:C1000', format: 'yyyy-mm-dd' },
        { range: 'D2:D1000', format: '#,##0 "₫"' }
      ],
      demoRows: [
        ['CMP-001', 'EMP-001', '2024-01-15', 50000000, 'HR_CONFIDENTIAL', '2024-01-15T08:00:00Z', '2024-01-15T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CMP-002', 'EMP-002', '2024-03-01', 35000000, 'HR_CONFIDENTIAL', '2024-03-01T08:00:00Z', '2024-03-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CMP-003', 'EMP-003', '2024-06-15', 30000000, 'HR_CONFIDENTIAL', '2024-06-15T08:00:00Z', '2024-06-15T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị quản trị nhân sự:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Múi giờ hệ thống:', 'Asia/Ho_Chi_Minh (GMT+7)'],
      ['Định dạng ngày tháng:', 'YYYY-MM-DD'],
      ['Thời gian cảnh báo hợp đồng sắp hết hạn:', '30 ngày trước ngày đáo hạn'],
      ['Quy định bảo mật lương:', 'Dữ liệu đãi ngộ giới hạn phân quyền AccessGroup = HR_CONFIDENTIAL']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH HỒ SƠ NHÂN SỰ & HỢP ĐỒNG (F12)',
    subtitle: 'Theo dõi quy mô nhân sự • Hợp đồng lao động • Cảnh báo đáo hạn • Quản lý tài liệu',
    kpiCards: [
      {
        label: 'TỔNG NHÂN SỰ ĐANG LÀM VIỆC',
        formula: '=COUNTIFS(Employees!$I$2:$I$1000, "ACTIVE", Employees!$N$2:$N$1000, "FALSE")',
        format: '#,##0',
        note: 'Active Headcount hiện tại (loại trừ đã nghỉ)',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'HỢP ĐỒNG SẮP ĐÁO HẠN (30 NGÀY)',
        formula: '=COUNTIFS(EmploymentContracts!$F$2:$F$1000, "<="&TODAY()+30, EmploymentContracts!$F$2:$F$1000, ">="&TODAY(), EmploymentContracts!$G$2:$G$1000, "<>TERMINATED")',
        format: '#,##0',
        note: 'Cần tái ký hoặc thanh lý hợp đồng',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'NHÂN SỰ THỬ VIỆC (PROBATION)',
        formula: '=COUNTIFS(Employees!$I$2:$I$1000, "PROBATION", Employees!$N$2:$N$1000, "FALSE")',
        format: '#,##0',
        note: 'Nhân sự đang trong giai đoạn thử thách',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      },
      {
        label: 'HỒ SƠ CÒN THIẾU CẦN BỔ SUNG',
        formula: '=COUNTIFS(EmployeeFiles!$E$2:$E$1000, "MISSING", EmployeeFiles!$J$2:$J$1000, "FALSE")',
        format: '#,##0',
        note: 'Bản sao giấy tờ chưa nộp đầy đủ',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      }
    ]
  }
};
