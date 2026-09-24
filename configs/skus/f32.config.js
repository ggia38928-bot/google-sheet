/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F32 — Chấm công & tổng hợp ca làm việc
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  sku: 'F32',
  name: 'Chấm công & tổng hợp ca làm việc',
  version: '1.0.0',
  description: 'Theo dõi ca làm việc, hỗ trợ ca đêm xuyên ngày (Cross-Midnight), tính công chuẩn trừ giờ nghỉ, quản lý đơn điều chỉnh và bảng tổng hợp công tháng',
  timeZone: 'Asia/Ho_Chi_Minh',
  locale: 'vi-VN',
  currency: 'VND',
  tables: [
    {
      name: 'Shifts',
      color: '#1565C0',
      headers: [
        'ID', 'ShiftCode', 'Name', 'StartTime', 'EndTime', 'BreakMinutes',
        'CrossesMidnight', 'StandardHours', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 110, 160, 100, 100, 110, 130, 120, 160, 160, 180, 90, 80],
      demoRows: [
        ['SH-001', 'CA-HC', 'Ca Hành Chính', '08:00', '17:00', 60, 'FALSE', 8.0, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['SH-002', 'CA-SANG', 'Ca Sáng', '06:00', '14:00', 30, 'FALSE', 7.5, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['SH-003', 'CA-CHIEU', 'Ca Chiều', '14:00', '22:00', 30, 'FALSE', 7.5, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['SH-004', 'CA-DEM', 'Ca Đêm Qua Ngày (CODEX)', '22:00', '06:00', 60, 'TRUE', 7.0, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'ShiftAssignments',
      color: '#0277BD',
      headers: [
        'ID', 'EmployeeID', 'WorkDate', 'ShiftID', 'Status',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 110, 120, 130, 160, 160, 180, 90, 80],
      formats: [
        { range: 'C2:C1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['ASG-001', 'EMP-001', '2026-09-01', 'SH-001', 'CONFIRMED', '2026-08-25T08:00:00Z', '2026-08-25T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['ASG-002', 'EMP-002', '2026-09-01', 'SH-001', 'CONFIRMED', '2026-08-25T08:00:00Z', '2026-08-25T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['ASG-003', 'EMP-003', '2026-09-01', 'SH-004', 'CONFIRMED', '2026-08-25T08:00:00Z', '2026-08-25T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'TimeEntries',
      color: '#00838F',
      headers: [
        'ID', 'EmployeeID', 'WorkDate', 'CheckInAt', 'CheckOutAt', 'WorkHours',
        'LateMinutes', 'EarlyMinutes', 'Source', 'Status', 'CreatedAt', 'UpdatedAt',
        'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 110, 160, 160, 110, 110, 110, 130, 130, 160, 160, 180, 90, 80],
      formats: [
        { range: 'C2:C1000', format: 'yyyy-mm-dd' },
        { range: 'F2:F1000', format: '0.0' }
      ],
      validations: [
        { range: 'I2:I1000', type: 'list', values: ['FINGERPRINT', 'APP_GPS', 'FACE_ID', 'WEB_PORTAL', 'MANUAL'] },
        { range: 'J2:J1000', type: 'list', values: ['VALID', 'INCOMPLETE', 'SUSPECT_DUPLICATE', 'ADJUSTED'] }
      ],
      demoRows: [
        ['TME-001', 'EMP-001', '2026-09-01', '2026-09-01 08:00:00', '2026-09-01 17:00:00', 8.0, 0, 0, 'APP_GPS', 'VALID', '2026-09-01T08:00:00Z', '2026-09-01T17:00:00Z', 'EMP-001', 1, 'FALSE'],
        ['TME-002', 'EMP-002', '2026-09-01', '2026-09-01 08:15:00', '2026-09-01 17:00:00', 7.75, 15, 0, 'FACE_ID', 'VALID', '2026-09-01T08:15:00Z', '2026-09-01T17:00:00Z', 'EMP-002', 1, 'FALSE'],
        ['TME-003', 'EMP-003', '2026-09-01', '2026-09-01 22:00:00', '2026-09-02 06:00:00', 7.0, 0, 0, 'FINGERPRINT', 'VALID', '2026-09-01T22:00:00Z', '2026-09-02T06:00:00Z', 'EMP-003', 1, 'FALSE'],
        ['TME-004', 'EMP-004', '2026-09-01', '2026-09-01 08:00:00', '', 0.0, 0, 0, 'WEB_PORTAL', 'INCOMPLETE', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'EMP-004', 1, 'FALSE']
      ],
      rowFormulas: [
        {
          col: 6,
          formulaFn: "'=IF(OR(D' + r + '=\"\", E' + r + '=\"\"), 0, MAX(0, ROUND((IF(INT(DATEVALUE(MID(E' + r + ',1,10))) > INT(DATEVALUE(MID(D' + r + ',1,10))), (TIMEVALUE(MID(E' + r + ',12,8)) + 1) - TIMEVALUE(MID(D' + r + ',12,8)), TIMEVALUE(MID(E' + r + ',12,8)) - TIMEVALUE(MID(D' + r + ',12,8)))) * 24 - 1, 2)))'"
        }
      ]
    },
    {
      name: 'AttendanceAdjustments',
      color: '#43A047',
      headers: [
        'ID', 'EntryID', 'RequestedCheckIn', 'RequestedCheckOut', 'Reason',
        'State', 'ApprovedBy', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 160, 160, 240, 120, 180, 160, 160, 180, 90, 80],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['PENDING', 'APPROVED', 'REJECTED'] }
      ],
      demoRows: [
        ['ADJ-001', 'TME-004', '2026-09-01 08:00:00', '2026-09-01 17:00:00', 'Quên quẹt thẻ ra do mất điện đột xuất', 'PENDING', 'thao.tt@minhtemplates.com', '2026-09-02T08:00:00Z', '2026-09-02T08:00:00Z', 'EMP-004', 1, 'FALSE']
      ]
    },
    {
      name: 'Holidays',
      color: '#FB8C00',
      headers: [
        'ID', 'Date', 'Name', 'Type', 'CreatedAt', 'UpdatedAt',
        'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 110, 240, 130, 160, 160, 180, 90, 80],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['HOL-001', '2026-01-01', 'Tết Dương Lịch', 'NATIONAL', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['HOL-002', '2026-04-30', 'Ngày Giải phóng Miền Nam', 'NATIONAL', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['HOL-003', '2026-05-01', 'Ngày Quốc Tế Lao Động', 'NATIONAL', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['HOL-004', '2026-09-02', 'Ngày Quốc Khánh', 'NATIONAL', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'AttendanceSummary',
      color: '#6A1B9A',
      headers: [
        'ID', 'EmployeeID', 'Period', 'RegularHours', 'OvertimeHours',
        'LeaveDays', 'WorkingDays', 'Status', 'CreatedAt', 'UpdatedAt',
        'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 110, 120, 120, 110, 110, 120, 160, 160, 180, 90, 80],
      demoRows: [
        ['SUM-001', 'EMP-001', '2026-08', 176.0, 4.0, 1.0, 22, 'LOCKED', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['SUM-002', 'EMP-002', '2026-08', 172.0, 0.0, 0.0, 22, 'LOCKED', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['SUM-003', 'EMP-003', '2026-08', 168.0, 12.0, 0.0, 22, 'LOCKED', '2026-09-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị quản lý chấm công:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Giờ tiêu chuẩn ca hành chính:', '08:00 đến 17:00 (Nghỉ trưa 60 phút)'],
      ['Quy tắc làm tròn đi muộn:', 'Theo block 15 phút'],
      ['Ngưỡng tính tăng ca (OT):', 'Sau khi đủ 8 giờ làm việc tiêu chuẩn']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH CHẤM CÔNG & TỔNG HỢP CA (F32)',
    subtitle: 'Theo dõi ca làm việc • Tổng giờ công • Giờ làm thêm (OT) • Đơn điều chỉnh giải trình',
    kpiCards: [
      {
        label: 'TỔNG GIỜ CÔNG CHUẨN ĐÃ CHỐT',
        formula: '=SUM(AttendanceSummary!$D$2:$D$1000)',
        format: '#,##0.0 "giờ"',
        note: 'Giờ làm việc tiêu chuẩn trong kỳ',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỔNG GIỜ LÀM THÊM (OT)',
        formula: '=SUM(AttendanceSummary!$E$2:$E$1000)',
        format: '#,##0.0 "giờ"',
        note: 'Thời gian tăng ca được duyệt',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'LƯỢT QUÊN CHECK-OUT CHỜ XỬ LÝ',
        formula: '=COUNTIFS(TimeEntries!$J$2:$J$1000, "INCOMPLETE")',
        format: '#,##0',
        note: 'Dữ liệu chấm công thiếu mốc ra',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'ĐƠN ĐIỀU CHỈNH CHỜ DUYỆT',
        formula: '=COUNTIFS(AttendanceAdjustments!$F$2:$F$1000, "PENDING")',
        format: '#,##0',
        note: 'Yêu cầu bổ sung giờ chấm công',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ]
  }
};
