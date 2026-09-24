/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F09 — Lịch lãnh đạo, cuộc họp và công tác
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F09",
  "name": "Lịch lãnh đạo, cuộc họp và công tác",
  "version": "1.0.0",
  "description": "Quản lý lịch họp ban lãnh đạo, điều phối phòng họp và xe công tác, phân công nhiệm vụ action items sau họp, chống xung đột lịch trình",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Events",
      "color": "#1E88E5",
      "headers": [
        "ID",
        "Title",
        "Type",
        "StartAt",
        "EndAt",
        "Location",
        "OrganizerEmail",
        "Status",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        240,
        130,
        160,
        160,
        160,
        200,
        130,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "D2:E1000",
          "format": "yyyy-mm-dd hh:mm:ss"
        }
      ],
      "validations": [
        {
          "range": "C2:C1000",
          "type": "list",
          "values": [
            "MEETING",
            "TRIP",
            "APPOINTMENT",
            "CEREMONY",
            "OTHER"
          ]
        },
        {
          "range": "H2:H1000",
          "type": "list",
          "values": [
            "SCHEDULED",
            "IN_PROGRESS",
            "COMPLETED",
            "CANCELLED"
          ]
        }
      ],
      "demoRows": [
        [
          "EVT-001",
          "Họp Ban Giám Đốc Tuần 37",
          "MEETING",
          "2026-09-14 08:30:00",
          "2026-09-14 10:00:00",
          "Phòng họp VIP A",
          "lanhdao@minhtemplates.com",
          "SCHEDULED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "EVT-002",
          "Họp Giao Ban Khối Vận Hành",
          "MEETING",
          "2026-09-14 10:00:00",
          "2026-09-14 11:30:00",
          "Phòng họp VIP A",
          "lanhdao@minhtemplates.com",
          "SCHEDULED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "EVT-003",
          "Công tác Xúc tiến Thương mại Đà Nẵng",
          "TRIP",
          "2026-09-18 07:00:00",
          "2026-09-20 18:00:00",
          "Đà Nẵng",
          "lanhdao@minhtemplates.com",
          "SCHEDULED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "EVT-004",
          "Tiếp Đoàn Đối Tác Chiến Lược",
          "APPOINTMENT",
          "2026-09-15 14:00:00",
          "2026-09-15 16:00:00",
          "Phòng Hội Nghị 1",
          "assistant@minhtemplates.com",
          "COMPLETED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Attendees",
      "color": "#039BE5",
      "headers": [
        "ID",
        "EventID",
        "UserEmail",
        "Role",
        "Response",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        220,
        120,
        130,
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
            "LEADER",
            "CHAIR",
            "ATTENDEE",
            "SECRETARY"
          ]
        },
        {
          "range": "E2:E1000",
          "type": "list",
          "values": [
            "ACCEPTED",
            "TENTATIVE",
            "DECLINED",
            "PENDING"
          ]
        }
      ],
      "demoRows": [
        [
          "ATN-001",
          "EVT-001",
          "lanhdao@minhtemplates.com",
          "CHAIR",
          "ACCEPTED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ATN-002",
          "EVT-001",
          "phogiamdoc@minhtemplates.com",
          "ATTENDEE",
          "ACCEPTED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ATN-003",
          "EVT-002",
          "lanhdao@minhtemplates.com",
          "CHAIR",
          "ACCEPTED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "MeetingResources",
      "color": "#00ACC1",
      "headers": [
        "ID",
        "ResourceCode",
        "Name",
        "Type",
        "Capacity",
        "Location",
        "Active",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        180,
        120,
        100,
        150,
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
            "ROOM",
            "VEHICLE",
            "DEVICE"
          ]
        }
      ],
      "demoRows": [
        [
          "RES-001",
          "PH-VIPA",
          "Phòng họp VIP A",
          "ROOM",
          15,
          "Tầng 5 Trụ Sở",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RES-002",
          "PH-HN1",
          "Phòng Hội Nghị 1",
          "ROOM",
          50,
          "Tầng 3 Trụ Sở",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RES-003",
          "XE-01",
          "Xe Sedona 7 chỗ 29A-8888",
          "VEHICLE",
          7,
          "Gara Tòa Nhà",
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
      "name": "Reservations",
      "color": "#00897B",
      "headers": [
        "ID",
        "EventID",
        "ResourceID",
        "StartAt",
        "EndAt",
        "BufferMinutes",
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
        160,
        160,
        110,
        130,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "D2:E1000",
          "format": "yyyy-mm-dd hh:mm:ss"
        }
      ],
      "validations": [
        {
          "range": "G2:G1000",
          "type": "list",
          "values": [
            "CONFIRMED",
            "CANCELLED",
            "PENDING"
          ]
        }
      ],
      "demoRows": [
        [
          "RSV-001",
          "EVT-001",
          "RES-001",
          "2026-09-14 08:30:00",
          "2026-09-14 10:00:00",
          0,
          "CONFIRMED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RSV-002",
          "EVT-002",
          "RES-001",
          "2026-09-14 10:00:00",
          "2026-09-14 11:30:00",
          0,
          "CONFIRMED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RSV-003",
          "EVT-004",
          "RES-002",
          "2026-09-15 14:00:00",
          "2026-09-15 16:00:00",
          15,
          "CONFIRMED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Trips",
      "color": "#43A047",
      "headers": [
        "ID",
        "EventID",
        "LeaderEmail",
        "Destination",
        "Transport",
        "Budget",
        "ActualCost",
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
        200,
        150,
        120,
        140,
        140,
        200,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "F2:G1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "demoRows": [
        [
          "TRP-001",
          "EVT-003",
          "lanhdao@minhtemplates.com",
          "Đà Nẵng",
          "FLIGHT",
          25000000,
          0,
          "Xúc tiến đối tác miền Trung",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "ActionItems",
      "color": "#7CB342",
      "headers": [
        "ID",
        "EventID",
        "TaskTitle",
        "AssigneeEmail",
        "DueDate",
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
        240,
        200,
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
          "range": "E2:E1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "validations": [
        {
          "range": "F2:F1000",
          "type": "list",
          "values": [
            "TODO",
            "IN_PROGRESS",
            "DONE",
            "OVERDUE"
          ]
        }
      ],
      "demoRows": [
        [
          "ACT-001",
          "EVT-001",
          "Hoàn thiện dự thảo báo cáo tài chính Q3",
          "phogiamdoc@minhtemplates.com",
          "2026-09-20",
          "IN_PROGRESS",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ACT-002",
          "EVT-004",
          "Gửi biên bản ghi nhớ hợp tác cho đối tác",
          "assistant@minhtemplates.com",
          "2026-09-16",
          "DONE",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "assistant@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Settings",
      "color": "#546E7A",
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
          "DEFAULT_BUFFER_MINUTES",
          "10",
          "Thời gian giãn cách tối thiểu giữa 2 cuộc họp",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ALLOW_BACK_TO_BACK_WHEN_ZERO",
          "TRUE",
          "Cho phép ca sau bắt đầu ngay khi ca trước kết thúc nếu buffer=0",
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
    "title": "BÁO CÁO ĐIỀU HÀNH LỊCH HỌP & CÔNG TÁC",
    "subtitle": "Theo dõi sự kiện lãnh đạo, phân bổ phòng họp, xe công tác và nhiệm vụ sau họp",
    "kpiCards": [
      {
        "label": "TỔNG SỰ KIỆN",
        "formula": "=COUNTA(Events!A2:A1000)",
        "format": "#,##0",
        "bg": "#E3F2FD"
      },
      {
        "label": "ĐÃ HOÀN THÀNH",
        "formula": "=COUNTIFS(Events!H2:H1000, \"COMPLETED\", Events!M2:M1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#E8F5E9"
      },
      {
        "label": "TỶ LỆ HOÀN THÀNH",
        "formula": "=IFERROR(COUNTIFS(Events!H2:H1000, \"COMPLETED\", Events!M2:M1000, \"FALSE\") / IFERROR(COUNTIFS(Events!A2:A1000, \"<>\", Events!M2:M1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#FFF8E1"
      },
      {
        "label": "NHIỆM VỤ SAU HỌP",
        "formula": "=COUNTA(ActionItems!A2:A1000)",
        "format": "#,##0",
        "bg": "#F3E5F5"
      },
      {
        "label": "NGÂN SÁCH CÔNG TÁC",
        "formula": "=SUMIFS(Trips!F2:F1000, Trips!J2:J1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#FFEBEE"
      }
    ],
    "charts": [
      {
        "title": "Phân Bổ Loại Sự Kiện",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "Events!C1:C1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Tài Nguyên Phòng Họp Đã Đặt",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "MeetingResources!C1:C1000",
          "MeetingResources!E1:E1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
