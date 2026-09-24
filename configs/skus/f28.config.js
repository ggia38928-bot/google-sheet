/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F28 — Lịch dịch vụ spa và phòng khám
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F28",
  "name": "Lịch dịch vụ spa và phòng khám",
  "version": "1.0.0",
  "description": "Quản lý lịch hẹn khám chữa bệnh và chăm sóc sắc đẹp, phân bổ chuyên viên và phòng trị liệu, chống đặt trùng lịch, theo dõi tỷ lệ no-show",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Clients",
      "color": "#8E24AA",
      "headers": [
        "ID",
        "ClientCode",
        "FullName",
        "Phone",
        "Email",
        "BirthDate",
        "Notes",
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
        130,
        200,
        110,
        200,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "F2:F1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "demoRows": [
        [
          "CLT-001",
          "KH-001",
          "Trần Phương Thảo",
          "0988112233",
          "thao@gmail.com",
          "1995-04-12",
          "Da nhạy cảm",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CLT-002",
          "KH-002",
          "Lê Quỳnh Nga",
          "0977223344",
          "nga@gmail.com",
          "1992-08-25",
          "Liệu trình trẻ hóa da",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CLT-003",
          "KH-003",
          "Nguyễn Hoàng Yến",
          "0966334455",
          "yen@gmail.com",
          "1988-11-30",
          "Massage thư giãn",
          "2026-09-02T08:00:00Z",
          "2026-09-02T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Providers",
      "color": "#6A1B9A",
      "headers": [
        "ID",
        "ProviderCode",
        "FullName",
        "Specialty",
        "Phone",
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
        180,
        160,
        130,
        90,
        160,
        160,
        180,
        90,
        80
      ],
      "validations": [
        {
          "range": "D2:D1000",
          "type": "list",
          "values": [
            "DERMATOLOGIST",
            "THERAPIST",
            "ESTHETICIAN",
            "DOCTOR",
            "NURSE"
          ]
        }
      ],
      "demoRows": [
        [
          "PRV-001",
          "BS-HOANG",
          "BS. Hoàng Minh Tuấn",
          "DERMATOLOGIST",
          "0912345678",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PRV-002",
          "KTV-LAN",
          "KTV. Nguyễn Hương Lan",
          "THERAPIST",
          "0987654321",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PRV-003",
          "KTV-MAI",
          "KTV. Trần Tuyết Mai",
          "ESTHETICIAN",
          "0933334455",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Services",
      "color": "#4A148C",
      "headers": [
        "ID",
        "ServiceCode",
        "Name",
        "Category",
        "DurationMinutes",
        "Price",
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
        220,
        160,
        110,
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
          "range": "F2:F1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "D2:D1000",
          "type": "list",
          "values": [
            "CHAM_SOC_DA",
            "MASSAGE_BODY",
            "TRI_LIEU_CHUYEN_SAU",
            "KHAM_TONG_QUAT"
          ]
        }
      ],
      "demoRows": [
        [
          "SVC-001",
          "SKIN-01",
          "Chăm sóc da chuyên sâu Aqua Peel",
          "CHAM_SOC_DA",
          60,
          450000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "SVC-002",
          "MASS-01",
          "Massage body đá nóng Thụy Điển",
          "MASSAGE_BODY",
          90,
          600000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "SVC-003",
          "LASER-01",
          "Trị liệu Laser vi điểm Fractional",
          "TRI_LIEU_CHUYEN_SAU",
          45,
          1200000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Appointments",
      "color": "#1565C0",
      "headers": [
        "ID",
        "AppointmentCode",
        "ClientID",
        "ProviderID",
        "ServiceID",
        "AppointmentDate",
        "StartTime",
        "EndTime",
        "Price",
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
        120,
        110,
        90,
        90,
        130,
        130,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "F2:F1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "I2:I1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "J2:J1000",
          "type": "list",
          "values": [
            "SCHEDULED",
            "CONFIRMED",
            "COMPLETED",
            "CANCELLED",
            "NO_SHOW"
          ]
        }
      ],
      "demoRows": [
        [
          "APT-001",
          "APT-260901",
          "CLT-001",
          "PRV-001",
          "SVC-003",
          "2026-09-15",
          "09:00",
          "09:45",
          1200000,
          "CONFIRMED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "APT-002",
          "APT-260902",
          "CLT-002",
          "PRV-001",
          "SVC-001",
          "2026-09-15",
          "10:00",
          "11:00",
          450000,
          "SCHEDULED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "APT-003",
          "APT-260903",
          "CLT-003",
          "PRV-002",
          "SVC-002",
          "2026-09-15",
          "14:00",
          "15:30",
          600000,
          "COMPLETED",
          "2026-09-10T08:00:00Z",
          "2026-09-15T15:30:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "APT-004",
          "APT-260904",
          "CLT-001",
          "PRV-003",
          "SVC-001",
          "2026-09-15",
          "16:00",
          "17:00",
          450000,
          "CANCELLED",
          "2026-09-10T08:00:00Z",
          "2026-09-14T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "APT-005",
          "APT-260905",
          "CLT-002",
          "PRV-002",
          "SVC-002",
          "2026-09-15",
          "16:00",
          "17:30",
          600000,
          "NO_SHOW",
          "2026-09-10T08:00:00Z",
          "2026-09-15T18:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "ServiceVisits",
      "color": "#00838F",
      "headers": [
        "ID",
        "AppointmentID",
        "PerformedAt",
        "ActualDurationMinutes",
        "Notes",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        160,
        120,
        240,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "C2:C1000",
          "format": "yyyy-mm-dd hh:mm:ss"
        }
      ],
      "demoRows": [
        [
          "VST-001",
          "APT-003",
          "2026-09-15 14:05:00",
          85,
          "Khách hài lòng với lực massage",
          "2026-09-15T15:30:00Z",
          "2026-09-15T15:30:00Z",
          "PRV-002",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Payments",
      "color": "#2E7D32",
      "headers": [
        "ID",
        "AppointmentID",
        "Amount",
        "PaymentMethod",
        "PaidAt",
        "Note",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        140,
        140,
        160,
        200,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "C2:C1000",
          "format": "#,##0 \"₫\""
        },
        {
          "range": "E2:E1000",
          "format": "yyyy-mm-dd hh:mm:ss"
        }
      ],
      "validations": [
        {
          "range": "D2:D1000",
          "type": "list",
          "values": [
            "CASH",
            "BANK_TRANSFER",
            "VNPAY",
            "MOMO",
            "CARD"
          ]
        }
      ],
      "demoRows": [
        [
          "PMT-001",
          "APT-003",
          600000,
          "BANK_TRANSFER",
          "2026-09-15 15:35:00",
          "Thanh toán trọn gói massage",
          "2026-09-15T15:35:00Z",
          "2026-09-15T15:35:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Settings",
      "color": "#455A64",
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
          "ALLOW_CANCEL_REFUND",
          "TRUE",
          "Cho phép hủy lịch hẹn trước 4 giờ không phạt cọc",
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
    "title": "BÁO CÁO ĐIỀU HÀNH SPA & PHÒNG KHÁM",
    "subtitle": "Theo dõi lịch hẹn khám và điều trị, công suất chuyên viên, doanh thu và no-show",
    "kpiCards": [
      {
        "label": "DOANH THU DỊCH VỤ",
        "formula": "=SUMIFS(Appointments!I2:I1000, Appointments!J2:J1000, \"COMPLETED\", Appointments!O2:O1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#E8F5E9"
      },
      {
        "label": "TỔNG LỊCH HẸN",
        "formula": "=COUNTIFS(Appointments!A2:A1000, \"<>\", Appointments!O2:O1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#E3F2FD"
      },
      {
        "label": "LỊCH HOÀN THÀNH",
        "formula": "=COUNTIFS(Appointments!J2:J1000, \"COMPLETED\", Appointments!O2:O1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#FFF8E1"
      },
      {
        "label": "TỶ LỆ BỎ HẸN (NO-SHOW)",
        "formula": "=IFERROR(COUNTIFS(Appointments!J2:J1000, \"NO_SHOW\", Appointments!O2:O1000, \"FALSE\") / IFERROR(COUNTIFS(Appointments!A2:A1000, \"<>\", Appointments!O2:O1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#FFEBEE"
      },
      {
        "label": "TỶ LỆ HỦY HẸN",
        "formula": "=IFERROR(COUNTIFS(Appointments!J2:J1000, \"CANCELLED\", Appointments!O2:O1000, \"FALSE\") / IFERROR(COUNTIFS(Appointments!A2:A1000, \"<>\", Appointments!O2:O1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#F3E5F5"
      }
    ],
    "charts": [
      {
        "title": "Trạng Thái Lịch Hẹn",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "Appointments!J1:J1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Bảng Giá Dịch Vụ",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "Services!C1:C1000",
          "Services!F1:F1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
