/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F13 — Tuyển dụng & Lịch phỏng vấn ứng viên
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  sku: 'F13',
  name: 'Tuyển dụng & lịch phỏng vấn ứng viên',
  version: '1.0.0',
  description: 'Quy trình tuyển dụng khép kín từ đăng tuyển, thu thập hồ sơ ứng viên, điều phối lịch phỏng vấn, biểu mẫu chấm điểm năng lực (Scorecard) đến phát hành thư mời nhận việc (Offer)',
  timeZone: 'Asia/Ho_Chi_Minh',
  locale: 'vi-VN',
  currency: 'VND',
  tables: [
    {
      name: 'Vacancies',
      color: '#1565C0',
      headers: [
        'ID', 'Title', 'TeamID', 'HiringManager', 'TargetCount', 'OpenDate',
        'CloseDate', 'Status', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 240, 140, 200, 110, 110, 110, 120, 160, 160, 180, 90, 80],
      formats: [
        { range: 'F2:G1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['KINH DOANH', 'KỸ THUẬT', 'MARKETING', 'NHÂN SỰ', 'TÀI CHÍNH', 'VẬN HÀNH'] },
        { range: 'H2:H1000', type: 'list', values: ['OPEN', 'IN_PROGRESS', 'CLOSED', 'CANCELLED'] }
      ],
      demoRows: [
        ['VAC-001', 'Kỹ Sư Lập Trình Node.js Backend', 'KỸ THUẬT', 'long.lh@minhtemplates.com', 2, '2026-08-01', '2026-09-30', 'OPEN', '2026-08-01T08:00:00Z', '2026-08-01T08:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['VAC-002', 'Chuyên Viên Tư Vấn Bán Hàng Doanh Nghiệp', 'KINH DOANH', 'thao.tt@minhtemplates.com', 3, '2026-08-15', '2026-09-15', 'OPEN', '2026-08-15T08:00:00Z', '2026-08-15T08:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['VAC-003', 'Trưởng Nhóm Content & SEO Marketing', 'MARKETING', 'anh.pq@minhtemplates.com', 1, '2026-07-01', '2026-08-15', 'CLOSED', '2026-07-01T08:00:00Z', '2026-08-15T17:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Candidates',
      color: '#0277BD',
      headers: [
        'ID', 'CandidateCode', 'Name', 'Email', 'Phone', 'CVFileID',
        'Status', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 220, 200, 130, 160, 130, 160, 160, 180, 90, 80],
      validations: [
        { range: 'G2:G1000', type: 'list', values: ['NEW', 'SCREENING', 'INTERVIEWING', 'OFFERED', 'HIRED', 'REJECTED'] }
      ],
      demoRows: [
        ['CAN-001', 'UV-001', 'Hoàng Văn Nam', 'nam.hv@gmail.com', '0933112233', 'CV_NAM_HV_01', 'HIRED', '2026-08-05T09:00:00Z', '2026-08-25T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['CAN-002', 'UV-002', 'Nguyễn Thị Bích Ngọc', 'ngoc.ntb@gmail.com', '0944556677', 'CV_NGOC_NTB_02', 'INTERVIEWING', '2026-08-10T14:00:00Z', '2026-08-20T16:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['CAN-003', 'UV-003', 'Trần Quang Huy', 'huy.tq@gmail.com', '0911223344', 'CV_HUY_TQ_03', 'OFFERED', '2026-08-12T10:00:00Z', '2026-08-28T11:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['CAN-004', 'UV-004', 'Lê Thu Trang', 'trang.lt@gmail.com', '0988776655', 'CV_TRANG_LT_04', 'REJECTED', '2026-08-15T08:30:00Z', '2026-08-18T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Applications',
      color: '#00838F',
      headers: [
        'ID', 'CandidateID', 'VacancyID', 'Stage', 'Source', 'AppliedAt',
        'OwnerEmail', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 120, 130, 140, 160, 200, 160, 160, 180, 90, 80],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER', 'HIRED', 'REJECTED'] },
        { range: 'E2:E1000', type: 'list', values: ['LINKEDIN', 'TOPCV', 'VIETNAMWORKS', 'REFERRAL', 'WEBSITE', 'OTHER'] }
      ],
      demoRows: [
        ['APP-001', 'CAN-001', 'VAC-001', 'HIRED', 'TOPCV', '2026-08-05T09:00:00Z', 'recruiter@minhtemplates.com', '2026-08-05T09:00:00Z', '2026-08-25T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['APP-002', 'CAN-002', 'VAC-001', 'INTERVIEW', 'LINKEDIN', '2026-08-10T14:00:00Z', 'recruiter@minhtemplates.com', '2026-08-10T14:00:00Z', '2026-08-20T16:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['APP-003', 'CAN-002', 'VAC-002', 'APPLIED', 'WEBSITE', '2026-08-11T10:00:00Z', 'recruiter@minhtemplates.com', '2026-08-11T10:00:00Z', '2026-08-11T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['APP-004', 'CAN-003', 'VAC-002', 'OFFER', 'REFERRAL', '2026-08-12T10:00:00Z', 'recruiter@minhtemplates.com', '2026-08-12T10:00:00Z', '2026-08-28T11:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['APP-005', 'CAN-004', 'VAC-002', 'REJECTED', 'TOPCV', '2026-08-15T08:30:00Z', 'recruiter@minhtemplates.com', '2026-08-15T08:30:00Z', '2026-08-18T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Interviews',
      color: '#43A047',
      headers: [
        'ID', 'ApplicationID', 'StartAt', 'EndAt', 'InterviewerEmail',
        'Round', 'Status', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 160, 160, 200, 160, 130, 160, 160, 180, 90, 80],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['ROUND_1_HR', 'ROUND_2_TECHNICAL', 'ROUND_3_DIRECTOR'] },
        { range: 'G2:G1000', type: 'list', values: ['SCHEDULED', 'COMPLETED', 'CANCELLED', 'NO_SHOW'] }
      ],
      demoRows: [
        ['INT-001', 'APP-001', '2026-08-12T09:00:00Z', '2026-08-12T10:00:00Z', 'long.lh@minhtemplates.com', 'ROUND_2_TECHNICAL', 'COMPLETED', '2026-08-08T09:00:00Z', '2026-08-12T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['INT-002', 'APP-002', '2026-08-22T14:00:00Z', '2026-08-22T15:00:00Z', 'long.lh@minhtemplates.com', 'ROUND_2_TECHNICAL', 'SCHEDULED', '2026-08-15T10:00:00Z', '2026-08-15T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['INT-003', 'APP-004', '2026-08-20T10:00:00Z', '2026-08-20T11:00:00Z', 'thao.tt@minhtemplates.com', 'ROUND_2_TECHNICAL', 'COMPLETED', '2026-08-16T14:00:00Z', '2026-08-20T11:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Scorecards',
      color: '#FB8C00',
      headers: [
        'ID', 'InterviewID', 'Criterion', 'Score', 'Comment',
        'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 180, 90, 280, 160, 160, 180, 90, 80],
      demoRows: [
        ['SCR-001', 'INT-001', 'Kỹ năng Node.js & Database', 5, 'Kiến thức vững vàng, giải quyết thuật toán tốt', '2026-08-12T10:00:00Z', '2026-08-12T10:00:00Z', 'long.lh@minhtemplates.com', 1, 'FALSE'],
        ['SCR-002', 'INT-001', 'Văn hóa & Kỹ năng giao tiếp', 4, 'Cởi mở, tinh thần đồng đội cao', '2026-08-12T10:00:00Z', '2026-08-12T10:00:00Z', 'long.lh@minhtemplates.com', 1, 'FALSE'],
        ['SCR-003', 'INT-003', 'Kỹ năng đàm phán B2B', 5, 'Kinh nghiệm chốt hợp đồng dự án lớn xuất sắc', '2026-08-20T11:00:00Z', '2026-08-20T11:00:00Z', 'thao.tt@minhtemplates.com', 1, 'FALSE']
      ]
    },
    {
      name: 'Offers',
      color: '#6A1B9A',
      headers: [
        'ID', 'ApplicationID', 'OfferedSalary', 'SentAt', 'StartDate',
        'Status', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
      ],
      colWidths: [120, 120, 160, 110, 110, 130, 160, 160, 180, 90, 80],
      formats: [
        { range: 'C2:C1000', format: '#,##0 "₫"' },
        { range: 'D2:E1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['DRAFT', 'SENT', 'ACCEPTED', 'DECLINED', 'EXPIRED'] }
      ],
      demoRows: [
        ['OFR-001', 'APP-001', 28000000, '2026-08-15', '2026-09-01', 'ACCEPTED', '2026-08-15T09:00:00Z', '2026-08-18T14:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE'],
        ['OFR-002', 'APP-004', 22000000, '2026-08-25', '2026-09-15', 'SENT', '2026-08-25T10:00:00Z', '2026-08-25T10:00:00Z', 'recruiter@minhtemplates.com', 1, 'FALSE']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị tuyển dụng:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Kênh tuyển dụng ưu tiên:', 'LinkedIn, TopCV, VietnamWorks, Mạng lưới nội bộ'],
      ['Thời gian phản hồi ứng viên cam kết:', 'Trong vòng 48 giờ làm việc sau phỏng vấn'],
      ['Quy trình đánh giá:', 'Vòng 1 (HR Screen) -> Vòng 2 (Chuyên môn) -> Vòng 3 (Ban Giám Đốc)']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH QUẢN TRỊ TUYỂN DỤNG & ỨNG VIÊN (F13)',
    subtitle: 'Theo dõi chỉ tiêu tuyển • Phễu ứng viên • Lịch phỏng vấn • Tỷ lệ nhận việc (Offer Rate)',
    kpiCards: [
      {
        label: 'TỔNG SỐ ỨNG VIÊN ĐÃ TIẾP NHẬN',
        formula: '=COUNTA(Candidates!$B$2:$B$1000)',
        format: '#,##0',
        note: 'Số lượng ứng viên đã nộp hồ sơ',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỶ LỆ NHẬN VIỆC (OFFER RATE)',
        formula: '=IFERROR(COUNTIFS(Offers!$F$2:$F$1000, "ACCEPTED") / COUNTIFS(Offers!$F$2:$F$1000, "<>DRAFT"), 0)',
        format: '0.0%',
        note: 'Tỷ lệ ứng viên đồng ý nhận việc',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      },
      {
        label: 'SỐ VỊ TRÍ ĐANG MỞ TUYỂN DỤNG',
        formula: '=COUNTIFS(Vacancies!$H$2:$H$1000, "OPEN")',
        format: '#,##0',
        note: 'Vị trí công việc đang tìm kiếm nhân tài',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'LỊCH PHỎNG VẤN ĐÃ LÊN LỊCH',
        formula: '=COUNTIFS(Interviews!$G$2:$G$1000, "SCHEDULED")',
        format: '#,##0',
        note: 'Các buổi phỏng vấn sắp diễn ra',
        bg: '#EDE7F6',
        textColor: '#4A148C',
        valColor: '#6A1B9A'
      }
    ]
  }
};
