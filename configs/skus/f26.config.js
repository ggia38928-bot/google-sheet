/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F26 — Lớp học, điểm danh và học phí
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F26",
  "name": "Lớp học, điểm danh và học phí",
  "version": "1.0.0",
  "description": "Quản lý khóa học, lớp học, điểm danh trừ buổi thực học, tính ngày kết thúc gói học chính xác theo lịch nghỉ lễ, thu học phí và công nợ",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Students",
      "color": "#E65100",
      "headers": [
        "ID",
        "StudentCode",
        "FullName",
        "GuardianName",
        "GuardianPhone",
        "Email",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        110,
        180,
        180,
        130,
        200,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "STU-001",
          "HV-01",
          "Nguyễn Đức Minh",
          "Nguyễn Văn Nam",
          "0912345678",
          "nam@gmail.com",
          "2026-08-01T08:00:00Z",
          "2026-08-01T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "STU-002",
          "HV-02",
          "Trần Bảo Ngọc",
          "Trần Đình Quân",
          "0987654321",
          "quan@gmail.com",
          "2026-08-02T08:00:00Z",
          "2026-08-02T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "STU-003",
          "HV-03",
          "Lê Khánh An",
          "Lê Thị Thu",
          "0933445566",
          "thu@gmail.com",
          "2026-08-03T08:00:00Z",
          "2026-08-03T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Classes",
      "color": "#EF6C00",
      "headers": [
        "ID",
        "ClassCode",
        "Name",
        "TeacherEmail",
        "StartDate",
        "EndDate",
        "FeePerSession",
        "ScheduleDays",
        "Active",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        110,
        200,
        200,
        110,
        110,
        140,
        140,
        90,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "E2:F1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "G2:G1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "demoRows": [
        [
          "CLS-001",
          "ENG-B1-01",
          "Tiếng Anh Giao Tiếp B1 (T2-T4)",
          "teacher.david@minhtemplates.com",
          "2026-09-07",
          "2026-11-04",
          200000,
          "MON_WED",
          "TRUE",
          "2026-08-25T08:00:00Z",
          "2026-08-25T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CLS-002",
          "MATH-09-02",
          "Toán Nâng Cao Lớp 9 (T3-T5)",
          "teacher.phuong@minhtemplates.com",
          "2026-09-08",
          "2026-11-05",
          180000,
          "TUE_THU",
          "TRUE",
          "2026-08-25T08:00:00Z",
          "2026-08-25T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Enrollments",
      "color": "#F57C00",
      "headers": [
        "ID",
        "StudentID",
        "ClassID",
        "EnrolledAt",
        "Status",
        "TotalCreditSessions",
        "UsedSessions",
        "RemainingSessions",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        120,
        110,
        120,
        130,
        120,
        130,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "D2:D1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "validations": [
        {
          "range": "E2:E1000",
          "type": "list",
          "values": [
            "ACTIVE",
            "PAUSED",
            "COMPLETED",
            "DROPOUT"
          ]
        }
      ],
      "demoRows": [
        [
          "ENR-001",
          "STU-001",
          "CLS-001",
          "2026-09-01",
          "ACTIVE",
          16,
          2,
          14,
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ENR-002",
          "STU-002",
          "CLS-001",
          "2026-09-01",
          "ACTIVE",
          16,
          2,
          14,
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ENR-003",
          "STU-003",
          "CLS-002",
          "2026-09-01",
          "ACTIVE",
          16,
          1,
          15,
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "tuyensinh@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Sessions",
      "color": "#FB8C00",
      "headers": [
        "ID",
        "ClassID",
        "SessionDate",
        "StartTime",
        "EndTime",
        "Topic",
        "Status",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        110,
        90,
        90,
        200,
        120,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "C2:C1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "validations": [
        {
          "range": "G2:G1000",
          "type": "list",
          "values": [
            "SCHEDULED",
            "COMPLETED",
            "CANCELLED"
          ]
        }
      ],
      "demoRows": [
        [
          "SES-001",
          "CLS-001",
          "2026-09-07",
          "18:00",
          "19:30",
          "Bài 1: Giới thiệu & Giao tiếp cơ bản",
          "COMPLETED",
          "2026-09-01T08:00:00Z",
          "2026-09-07T20:00:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "SES-002",
          "CLS-001",
          "2026-09-09",
          "18:00",
          "19:30",
          "Bài 2: Từ vựng Du lịch & Đời sống",
          "COMPLETED",
          "2026-09-01T08:00:00Z",
          "2026-09-09T20:00:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "SES-003",
          "CLS-001",
          "2026-09-14",
          "18:00",
          "19:30",
          "Bài 3: Kỹ năng thuyết trình cá nhân",
          "SCHEDULED",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "SES-004",
          "CLS-001",
          "2026-09-16",
          "18:00",
          "19:30",
          "Nghỉ bảo trì trung tâm (Buổi hủy không trừ credit)",
          "CANCELLED",
          "2026-09-01T08:00:00Z",
          "2026-09-15T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Attendance",
      "color": "#FFA726",
      "headers": [
        "ID",
        "SessionID",
        "EnrollmentID",
        "StudentID",
        "Result",
        "ConsumedCredit",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        120,
        120,
        140,
        120,
        160,
        160,
        180,
        90,
        80
      ],
      "validations": [
        {
          "range": "E2:E1000",
          "type": "list",
          "values": [
            "PRESENT",
            "ABSENT_EXCUSED",
            "ABSENT_UNEXCUSED"
          ]
        }
      ],
      "demoRows": [
        [
          "ATT-001",
          "SES-001",
          "ENR-001",
          "STU-001",
          "PRESENT",
          1,
          "2026-09-07T19:30:00Z",
          "2026-09-07T19:30:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ATT-002",
          "SES-001",
          "ENR-002",
          "STU-002",
          "PRESENT",
          1,
          "2026-09-07T19:30:00Z",
          "2026-09-07T19:30:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ATT-003",
          "SES-002",
          "ENR-001",
          "STU-001",
          "PRESENT",
          1,
          "2026-09-09T19:30:00Z",
          "2026-09-09T19:30:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ATT-004",
          "SES-002",
          "ENR-002",
          "STU-002",
          "ABSENT_EXCUSED",
          1,
          "2026-09-09T19:30:00Z",
          "2026-09-09T19:30:00Z",
          "teacher.david@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "TuitionInvoices",
      "color": "#FFB74D",
      "headers": [
        "ID",
        "InvoiceCode",
        "EnrollmentID",
        "StudentID",
        "Amount",
        "DueDate",
        "PaidAmount",
        "Status",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        120,
        120,
        140,
        110,
        140,
        120,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "E2:E1000",
          "format": "#,##0 \"₫\""
        },
        {
          "range": "F2:F1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "G2:G1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "H2:H1000",
          "type": "list",
          "values": [
            "UNPAID",
            "PAID",
            "PARTIAL"
          ]
        }
      ],
      "demoRows": [
        [
          "INV-001",
          "HP-2609-01",
          "ENR-001",
          "STU-001",
          3200000,
          "2026-09-05",
          3200000,
          "PAID",
          "2026-09-01T08:00:00Z",
          "2026-09-04T10:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "INV-002",
          "HP-2609-02",
          "ENR-002",
          "STU-002",
          3200000,
          "2026-09-05",
          1600000,
          "PARTIAL",
          "2026-09-01T08:00:00Z",
          "2026-09-04T11:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "INV-003",
          "HP-2609-03",
          "ENR-003",
          "STU-003",
          2880000,
          "2026-09-05",
          0,
          "UNPAID",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "HolidayCalendar",
      "color": "#D84315",
      "headers": [
        "ID",
        "HolidayDate",
        "Reason",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        110,
        220,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "B2:B1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "demoRows": [
        [
          "HLD-001",
          "2026-09-02",
          "Nghỉ lễ Quốc Khánh",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "HLD-002",
          "2026-09-03",
          "Nghỉ bù lễ Quốc Khánh",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Settings",
      "color": "#4E342E",
      "headers": [
        "Key",
        "Value",
        "Description",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        150,
        200,
        260,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "BLOCK_DUPLICATE_ATTENDANCE",
          "TRUE",
          "Chặn điểm danh 2 lần cùng một học sinh/buổi học",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DEDUCT_CREDIT_ON_CANCELLED_SESSION",
          "FALSE",
          "Buổi học bị hủy tuyệt đối không trừ credit của học viên",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    }
  ],
  "dashboard": {
    "title": "BÁO CÁO VẬN HÀNH LỚP HỌC & HỌC PHÍ",
    "subtitle": "Theo dõi sĩ số học viên, tình hình điểm danh chuyên cần, học phí đến hạn và công nợ",
    "kpiCards": [
      {
        "label": "TỔNG HỌC VIÊN",
        "formula": "=COUNTA(Students!A2:A1000)",
        "format": "#,##0",
        "bg": "#E3F2FD"
      },
      {
        "label": "TỔNG HỌC PHÍ THU",
        "formula": "=SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#E8F5E9"
      },
      {
        "label": "CÔNG NỢ HỌC PHÍ",
        "formula": "=SUMIFS(TuitionInvoices!E2:E1000, TuitionInvoices!L2:L1000, \"FALSE\") - SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#FFEBEE"
      },
      {
        "label": "TỶ LỆ CHUYÊN CẦN",
        "formula": "=IFERROR(COUNTIFS(Attendance!E2:E1000, \"PRESENT\", Attendance!J2:J1000, \"FALSE\") / IFERROR(COUNTIFS(Attendance!A2:A1000, \"<>\", Attendance!J2:J1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#FFF8E1"
      },
      {
        "label": "LỚP HỌC ĐANG MỞ",
        "formula": "=COUNTIFS(Classes!I2:I1000, \"TRUE\", Classes!N2:N1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#F3E5F5"
      }
    ],
    "charts": [
      {
        "title": "Tình Trạng Nộp Học Phí",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "TuitionInvoices!H1:H1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Số Buổi Còn Lại Theo Học Viên",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "Enrollments!B1:B1000",
          "Enrollments!H1:H1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
