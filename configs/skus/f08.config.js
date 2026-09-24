/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F08 — Văn bản, hồ sơ và chỉ đạo
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F08",
  "name": "Văn bản, hồ sơ và chỉ đạo",
  "version": "1.0.0",
  "description": "Quản lý sổ văn bản đến/đi, phân cấp bảo mật văn thư, theo dõi ý kiến chỉ đạo, hạn xử lý và phân công công việc",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Documents",
      "color": "#37474F",
      "headers": [
        "ID",
        "Direction",
        "BookCode",
        "DocNumber",
        "IssuedDate",
        "ReceivedDate",
        "Subject",
        "Issuer",
        "Recipient",
        "CategoryID",
        "Confidentiality",
        "Urgency",
        "OwnerEmail",
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
        110,
        110,
        130,
        110,
        110,
        240,
        180,
        180,
        120,
        120,
        110,
        200,
        110,
        120,
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
          "range": "N2:N1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "validations": [
        {
          "range": "B2:B1000",
          "type": "list",
          "values": [
            "INCOMING",
            "OUTGOING",
            "INTERNAL"
          ]
        },
        {
          "range": "K2:K1000",
          "type": "list",
          "values": [
            "PUBLIC",
            "INTERNAL",
            "CONFIDENTIAL",
            "SECRET"
          ]
        },
        {
          "range": "L2:L1000",
          "type": "list",
          "values": [
            "NORMAL",
            "URGENT",
            "TOP_URGENT"
          ]
        },
        {
          "range": "O2:O1000",
          "type": "list",
          "values": [
            "DRAFT",
            "PROCESSING",
            "COMPLETED",
            "OVERDUE",
            "ARCHIVED"
          ]
        }
      ],
      "demoRows": [
        [
          "DOC-001",
          "INCOMING",
          "SO-DEN-2026",
          "125/UBND-VP",
          "2026-09-01",
          "2026-09-02",
          "V/v phối hợp tổ chức Hội chợ Thương mại Quốc tế 2026",
          "UBND Thành Phố",
          "Ban Giám Đốc",
          "CAT-01",
          "INTERNAL",
          "URGENT",
          "lanhdao@minhtemplates.com",
          "2026-09-15",
          "PROCESSING",
          "2026-09-02T08:00:00Z",
          "2026-09-02T08:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DOC-002",
          "OUTGOING",
          "SO-DI-2026",
          "45/CV-MTF",
          "2026-09-05",
          "2026-09-05",
          "Công văn phúc đáp đề xuất hợp tác công nghệ số",
          "Minh Templates Factory",
          "Tập đoàn Công nghệ FPT",
          "CAT-02",
          "PUBLIC",
          "NORMAL",
          "lanhdao@minhtemplates.com",
          "2026-09-20",
          "COMPLETED",
          "2026-09-05T08:00:00Z",
          "2026-09-05T08:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DOC-003",
          "INCOMING",
          "SO-DEN-2026",
          "88/BCT-KH",
          "2026-09-08",
          "2026-09-09",
          "Thông tư quy định tiêu chuẩn kỹ thuật số hóa hồ sơ doanh nghiệp",
          "Bộ Công Thương",
          "Phòng Pháp Chế",
          "CAT-01",
          "INTERNAL",
          "NORMAL",
          "phapche@minhtemplates.com",
          "2026-09-30",
          "PROCESSING",
          "2026-09-09T08:00:00Z",
          "2026-09-09T08:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DOC-004",
          "INTERNAL",
          "SO-NB-2026",
          "01/TB-BGD",
          "2026-09-10",
          "2026-09-10",
          "Thông báo quyết định bổ nhiệm nhân sự cấp cao",
          "Hội Đồng Quản Trị",
          "Toàn thể Cán bộ nhân viên",
          "CAT-03",
          "CONFIDENTIAL",
          "URGENT",
          "lanhdao@minhtemplates.com",
          "2026-09-15",
          "COMPLETED",
          "2026-09-10T08:00:00Z",
          "2026-09-10T08:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Directives",
      "color": "#455A64",
      "headers": [
        "ID",
        "DocumentID",
        "Content",
        "AssigneeEmail",
        "DueDate",
        "Status",
        "Feedback",
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
        110,
        120,
        220,
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
            "COMPLETED",
            "OVERDUE"
          ]
        }
      ],
      "demoRows": [
        [
          "DIR-001",
          "DOC-001",
          "Xây dựng kế hoạch gian hàng triển lãm và dự trù kinh phí",
          "marketing@minhtemplates.com",
          "2026-09-12",
          "IN_PROGRESS",
          "Đã khảo sát mặt bằng và liên hệ ban tổ chức",
          "2026-09-02T09:00:00Z",
          "2026-09-02T09:00:00Z",
          "lanhdao@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DIR-002",
          "DOC-001",
          "Soạn thảo văn bản xác nhận tham gia gửi UBND",
          "vanthu@minhtemplates.com",
          "2026-09-10",
          "COMPLETED",
          "Đã phát hành công văn theo yêu cầu",
          "2026-09-02T09:00:00Z",
          "2026-09-10T10:00:00Z",
          "lanhdao@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "DocumentVersions",
      "color": "#546E7A",
      "headers": [
        "ID",
        "DocumentID",
        "Version",
        "FileName",
        "FileUrl",
        "UploadedAt",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        120,
        90,
        220,
        240,
        160,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "DVER-001",
          "DOC-001",
          "v1.0",
          "VanBanDen_125_UBND.pdf",
          "drive.google.com/file/d/doc125",
          "2026-09-02T08:15:00Z",
          "2026-09-02T08:15:00Z",
          "2026-09-02T08:15:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DVER-002",
          "DOC-002",
          "v1.0",
          "CongVan_45_FPT_Draft.pdf",
          "drive.google.com/file/d/cv45draft",
          "2026-09-04T14:00:00Z",
          "2026-09-04T14:00:00Z",
          "2026-09-04T14:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "DVER-003",
          "DOC-002",
          "v1.1",
          "CongVan_45_FPT_Signed.pdf",
          "drive.google.com/file/d/cv45signed",
          "2026-09-05T10:00:00Z",
          "2026-09-05T10:00:00Z",
          "2026-09-05T10:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Dispatches",
      "color": "#607D8B",
      "headers": [
        "ID",
        "DocumentID",
        "Recipient",
        "SentAt",
        "Method",
        "TrackingCode",
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
        160,
        120,
        150,
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
            "EMAIL",
            "POST",
            "COURIER",
            "DIRECT"
          ]
        }
      ],
      "demoRows": [
        [
          "DSP-001",
          "DOC-002",
          "Tập đoàn FPT - Ban Chuyển đổi số",
          "2026-09-05 11:00:00",
          "COURIER",
          "VNPOST-889977",
          "2026-09-05T11:00:00Z",
          "2026-09-05T11:00:00Z",
          "vanthu@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Categories",
      "color": "#78909C",
      "headers": [
        "ID",
        "Name",
        "AllowedRole",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        200,
        180,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "CAT-01",
          "Văn bản Hành chính & Chỉ đạo",
          "STAFF",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CAT-02",
          "Công văn Đối ngoại & Hợp tác",
          "STAFF",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CAT-03",
          "Hồ sơ Tổ chức & Nhân sự",
          "HR_MANAGER",
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
      "color": "#90A4AE",
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
          "WARN_DUPLICATE_NUMBER_IN_BOOK",
          "TRUE",
          "Cảnh báo khi trùng số văn bản trong cùng sổ/năm",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ENFORCE_CONFIDENTIAL_ROLE_CHECK",
          "TRUE",
          "Chặn truy cập file văn bản mật đối với nhân viên không được giao quyền",
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
    "title": "BÁO CÁO ĐIỀU HÀNH VĂN BẢN & CHỈ ĐẠO",
    "subtitle": "Theo dõi tiếp nhận văn bản, sổ đến/đi, tiến độ xử lý chỉ đạo và hạn hoàn thành",
    "kpiCards": [
      {
        "label": "TỔNG SỐ VĂN BẢN",
        "formula": "=COUNTA(Documents!A2:A1000)",
        "format": "#,##0",
        "bg": "#E3F2FD"
      },
      {
        "label": "VĂN BẢN ĐÃ XỬ LÝ",
        "formula": "=COUNTIFS(Documents!O2:O1000, \"COMPLETED\", Documents!T2:T1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#E8F5E9"
      },
      {
        "label": "TỶ LỆ XỬ LÝ XONG",
        "formula": "=IFERROR(COUNTIFS(Documents!O2:O1000, \"COMPLETED\", Documents!T2:T1000, \"FALSE\") / IFERROR(COUNTIFS(Documents!A2:A1000, \"<>\", Documents!T2:T1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#FFF8E1"
      },
      {
        "label": "CHỈ ĐẠO CHƯA XONG",
        "formula": "=COUNTIFS(Directives!F2:F1000, \"<>COMPLETED\", Directives!L2:L1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#F3E5F5"
      },
      {
        "label": "CHỈ ĐẠO QUÁ HẠN",
        "formula": "=COUNTIFS(Directives!F2:F1000, \"OVERDUE\", Directives!L2:L1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#FFEBEE"
      }
    ],
    "charts": [
      {
        "title": "Phân Bổ Chiều Văn Bản (Đến/Đi/Nội bộ)",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "Documents!B1:B1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Trạng Thái Thực Hiện Ý Kiến Chỉ Đạo",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "Directives!F1:F1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
