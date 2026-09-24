/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F38 — Quản lý nghỉ phép & Số dư phép năm
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  sku: 'F38',
  name: 'Quản lý nghỉ phép & số dư phép năm',
  version: '1.0.0',
  description: 'Quản lý hạn mức và số dư phép năm lũy kế, tạo đơn xin nghỉ linh hoạt (nguyên ngày/nửa ngày), tự động trừ ngày làm việc theo lịch loại trừ Thứ 7/Chủ Nhật/Ngày Lễ và quy trình duyệt cấp tốc',
  timeZone: 'Asia/Ho_Chi_Minh',
  locale: 'vi-VN',
  currency: 'VND',
  tables: [
    {
      name: 'LeaveTypes',
      color: '#1565C0',
      headers: [
        'ID', 'TypeCode', 'Name', 'DeductBalance', 'MaxDaysPerYear',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 110, 200, 130, 140, 160, 160, 180, 90, 80],
      demoRows: [
        ['LVT-001', 'AL', 'Nghỉ phép năm (Annual Leave)', 'TRUE', 12, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['LVT-002', 'SL', 'Nghỉ ốm hưởng BHXH (Sick Leave)', 'FALSE', 30, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['LVT-003', 'UL', 'Nghỉ không lương (Unpaid Leave)', 'FALSE', 15, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['LVT-004', 'CL', 'Nghỉ bù tăng ca (Compensatory Leave)', 'FALSE', 10, '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'LeavePolicies',
      color: '#0277BD',
      headers: [
        'ID', 'PolicyName', 'EffectiveFrom', 'EntitlementRule', 'CarryoverRule',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 220, 120, 260, 260, 160, 160, 180, 90, 80],
      formats: [
        { range: 'C2:C1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['POL-001', 'Chính sách Nghỉ phép Năm 2026', '2026-01-01', '1 ngày/tháng thâm niên, tăng 1 ngày sau mỗi 5 năm', 'Chuyển tối đa 5 ngày sang năm sau, hạn chốt 31/03', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'LeaveBalances',
      color: '#00838F',
      headers: [
        'ID', 'EmployeeID', 'Year', 'TypeID', 'Opening', 'Accrued',
        'Used', 'Pending', 'Remaining', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 80, 110, 100, 100, 90, 90, 110, 160, 160, 180, 90, 80],
      formats: [
        { range: 'E2:I1000', format: '0.0' }
      ],
      demoRows: [
        ['BAL-001', 'EMP-001', 2026, 'LVT-001', 3.0, 12.0, 2.0, 0.0, 13.0, '2026-01-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['BAL-002', 'EMP-002', 2026, 'LVT-001', 1.0, 12.0, 4.0, 1.0, 9.0, '2026-01-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['BAL-003', 'EMP-003', 2026, 'LVT-001', 0.0, 12.0, 1.0, 0.0, 11.0, '2026-01-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['BAL-004', 'EMP-004', 2026, 'LVT-001', 0.0, 6.0, 0.0, 0.0, 6.0, '2026-07-01T08:00:00Z', '2026-09-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ],
      rowFormulas: [
        {
          col: 9,
          formulaFn: "'=E' + r + ' + F' + r + ' - G' + r"
        }
      ]
    },
    {
      name: 'LeaveRequests',
      color: '#43A047',
      headers: [
        'ID', 'RequestNumber', 'EmployeeID', 'TypeID', 'StartDate', 'EndDate',
        'StartHalf', 'EndHalf', 'DurationDays', 'Reason', 'State',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 130, 120, 110, 110, 110, 120, 120, 110, 220, 120, 160, 160, 180, 90, 80],
      formats: [
        { range: 'E2:F1000', format: 'yyyy-mm-dd' },
        { range: 'I2:I1000', format: '0.0' }
      ],
      validations: [
        { range: 'G2:H1000', type: 'list', values: ['FULL_DAY', 'MORNING', 'AFTERNOON'] },
        { range: 'K2:K1000', type: 'list', values: ['SUBMITTED', 'APPROVED', 'REJECTED', 'CANCELLED'] }
      ],
      demoRows: [
        ['REQ-001', 'NP-2026-001', 'EMP-001', 'LVT-001', '2026-09-04', '2026-09-07', 'FULL_DAY', 'FULL_DAY', 2.0, 'Nghỉ từ Thứ Sáu đến Thứ Hai (CODEX)', 'APPROVED', '2026-09-01T08:00:00Z', '2026-09-02T10:00:00Z', 'EMP-001', 1, 'FALSE'],
        ['REQ-002', 'NP-2026-002', 'EMP-002', 'LVT-001', '2026-09-10', '2026-09-10', 'MORNING', 'MORNING', 0.5, 'Nghỉ giải quyết việc gia đình buổi sáng', 'APPROVED', '2026-09-08T08:00:00Z', '2026-09-08T15:00:00Z', 'EMP-002', 1, 'FALSE'],
        ['REQ-003', 'NP-2026-003', 'EMP-002', 'LVT-001', '2026-09-15', '2026-09-15', 'AFTERNOON', 'AFTERNOON', 0.5, 'Nghỉ buổi chiều đi khám sức khỏe', 'APPROVED', '2026-09-12T09:00:00Z', '2026-09-13T10:00:00Z', 'EMP-002', 1, 'FALSE'],
        ['REQ-004', 'NP-2026-004', 'EMP-003', 'LVT-001', '2026-09-21', '2026-09-22', 'FULL_DAY', 'FULL_DAY', 2.0, 'Nghỉ phép cá nhân', 'SUBMITTED', '2026-09-18T08:00:00Z', '2026-09-18T08:00:00Z', 'EMP-003', 1, 'FALSE']
      ]
    },
    {
      name: 'WorkCalendar',
      color: '#FB8C00',
      headers: [
        'ID', 'Date', 'DayOfWeek', 'IsWorkingDay', 'Notes',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 110, 130, 120, 200, 160, 160, 180, 90, 80],
      formats: [
        { range: 'B2:B1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['CAL-001', '2026-09-04', 'Thứ Sáu', 'TRUE', 'Ngày làm việc bình thường', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CAL-002', '2026-09-05', 'Thứ Bảy', 'FALSE', 'Nghỉ cuối tuần', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CAL-003', '2026-09-06', 'Chủ Nhật', 'FALSE', 'Nghỉ cuối tuần', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['CAL-004', '2026-09-07', 'Thứ Hai', 'TRUE', 'Ngày làm việc bình thường', '2026-01-01T08:00:00Z', '2026-01-01T08:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'LeaveApprovals',
      color: '#6A1B9A',
      headers: [
        'ID', 'RequestID', 'ApproverEmail', 'Decision', 'DecisionAt', 'Comment',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 200, 130, 160, 240, 160, 160, 180, 90, 80],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['APPROVED', 'REJECTED'] }
      ],
      demoRows: [
        ['APR-001', 'REQ-001', 'admin@minhtemplates.com', 'APPROVED', '2026-09-02T10:00:00Z', 'Đồng ý duyệt phép', '2026-09-02T10:00:00Z', '2026-09-02T10:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['APR-002', 'REQ-002', 'admin@minhtemplates.com', 'APPROVED', '2026-09-08T15:00:00Z', 'Duyệt nghỉ nửa ngày sáng', '2026-09-08T15:00:00Z', '2026-09-08T15:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE'],
        ['APR-003', 'REQ-003', 'admin@minhtemplates.com', 'APPROVED', '2026-09-13T10:00:00Z', 'Duyệt nghỉ nửa ngày chiều', '2026-09-13T10:00:00Z', '2026-09-13T10:00:00Z', 'admin@minhtemplates.com', 1, 'FALSE']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị quản lý nghỉ phép:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Hạn mức phép năm mặc định:', '12 ngày/năm (1 ngày/tháng)'],
      ['Chính sách nghỉ nửa ngày:', '2 buổi nửa ngày (Sáng/Chiều) tương đương 1 ngày phép nguyên'],
      ['Thời gian nộp đơn phép trước:', 'Tối thiểu 24 giờ đối với phép thông thường']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH NGHỈ PHÉP & SỐ DƯ PHÉP NĂM (F38)',
    subtitle: 'Theo dõi quỹ phép năm • Ngày phép đã nghỉ • Đơn xin nghỉ chờ duyệt • Lịch vắng mặt',
    kpiCards: [
      {
        label: 'TỔNG NGÀY PHÉP ĐÃ NGHỈ (NĂM 2026)',
        formula: '=SUMIFS(LeaveRequests!$I$2:$I$1000, LeaveRequests!$K$2:$K$1000, "APPROVED")',
        format: '#,##0.0 "ngày"',
        note: 'Tổng số ngày nghỉ phép đã được phê duyệt',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'ĐƠN XIN NGHỈ PHÉP CHỜ DUYỆT',
        formula: '=COUNTIFS(LeaveRequests!$K$2:$K$1000, "SUBMITTED")',
        format: '#,##0',
        note: 'Đơn của nhân viên cần quản lý xử lý',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'TỔNG SỐ DƯ PHÉP CÒN LẠI TOÀN CÔNG TY',
        formula: '=SUM(LeaveBalances!$I$2:$I$1000)',
        format: '#,##0.0 "ngày"',
        note: 'Quỹ ngày phép chưa sử dụng',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'TỶ LỆ SỬ DỤNG PHÉP NĂM (%)',
        formula: '=IFERROR(SUM(LeaveBalances!$G$2:$G$1000) / SUM(LeaveBalances!$F$2:$F$1000), 0)',
        format: '0.0%',
        note: 'Tỷ lệ ngày phép đã dùng trên hạn mức',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ]
  }
};
