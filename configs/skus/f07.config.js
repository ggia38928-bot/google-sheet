/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F07 — Hợp đồng, phụ lục và phát sinh
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F07",
  "name": "Hợp đồng, phụ lục và phát sinh",
  "version": "1.0.0",
  "description": "Quản lý hợp đồng thương mại, phụ lục điều chỉnh giá trị, mốc nghiệm thu và thanh toán độc lập, cảnh báo hạn hợp đồng",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Contracts",
      "color": "#0D47A1",
      "headers": [
        "ID",
        "ContractNumber",
        "Title",
        "Counterparty",
        "SignedDate",
        "StartDate",
        "EndDate",
        "BaseAmount",
        "ApprovedVariations",
        "CurrentAmount",
        "Currency",
        "Status",
        "CreatedAt",
        "UpdatedAt",
        "CreatedBy",
        "RowVersion",
        "Archived"
      ],
      "colWidths": [
        120,
        130,
        220,
        180,
        110,
        110,
        110,
        140,
        140,
        140,
        90,
        120,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "E2:G1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "H2:J1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "L2:L1000",
          "type": "list",
          "values": [
            "DRAFT",
            "ACTIVE",
            "COMPLETED",
            "TERMINATED",
            "EXPIRED"
          ]
        }
      ],
      "demoRows": [
        [
          "CTR-001",
          "HD-2026/01",
          "Hợp đồng Cung cấp Phần mềm Quản trị",
          "Công ty TNHH Giải pháp Á Châu",
          "2026-01-15",
          "2026-01-15",
          "2026-12-31",
          100000000,
          20000000,
          120000000,
          "VND",
          "ACTIVE",
          "2026-01-15T08:00:00Z",
          "2026-01-15T08:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CTR-002",
          "HD-2026/02",
          "Hợp đồng Bảo trì Hệ thống Máy chủ",
          "Công ty Cổ phần Hạ tầng Việt",
          "2026-02-01",
          "2026-02-01",
          "2026-09-30",
          60000000,
          0,
          60000000,
          "VND",
          "ACTIVE",
          "2026-02-01T08:00:00Z",
          "2026-02-01T08:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CTR-003",
          "HD-2026/03",
          "Hợp đồng Thiết kế Thương hiệu số",
          "Công ty TNHH Sáng tạo Minh Media",
          "2026-03-10",
          "2026-03-10",
          "2026-06-30",
          45000000,
          5000000,
          50000000,
          "VND",
          "COMPLETED",
          "2026-03-10T08:00:00Z",
          "2026-06-30T10:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Amendments",
      "color": "#1565C0",
      "headers": [
        "ID",
        "ContractID",
        "AmendmentNumber",
        "SignedDate",
        "ValueChange",
        "Reason",
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
        140,
        110,
        140,
        220,
        120,
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
        },
        {
          "range": "E2:E1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "G2:G1000",
          "type": "list",
          "values": [
            "DRAFT",
            "SUBMITTED",
            "APPROVED",
            "REJECTED"
          ]
        }
      ],
      "demoRows": [
        [
          "AMD-001",
          "CTR-001",
          "PL-01/HD-2026/01",
          "2026-03-01",
          20000000,
          "Bổ sung module mobile app (Đã duyệt)",
          "APPROVED",
          "2026-03-01T08:00:00Z",
          "2026-03-01T08:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "AMD-002",
          "CTR-001",
          "PL-02/HD-2026/01",
          "2026-06-15",
          -5000000,
          "Giảm trừ phạm vi module SMS (Chưa duyệt)",
          "SUBMITTED",
          "2026-06-15T08:00:00Z",
          "2026-06-15T08:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "AMD-003",
          "CTR-003",
          "PL-01/HD-2026/03",
          "2026-04-10",
          5000000,
          "Mở rộng hạng mục thiết kế ấn phẩm sự kiện",
          "APPROVED",
          "2026-04-10T08:00:00Z",
          "2026-04-10T08:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Milestones",
      "color": "#1976D2",
      "headers": [
        "ID",
        "ContractID",
        "MilestoneName",
        "DueDate",
        "Amount",
        "AcceptedAt",
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
        200,
        110,
        140,
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
          "range": "D2:D1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "E2:E1000",
          "format": "#,##0 \"₫\""
        },
        {
          "range": "F2:F1000",
          "format": "yyyy-mm-dd"
        }
      ],
      "validations": [
        {
          "range": "G2:G1000",
          "type": "list",
          "values": [
            "PENDING",
            "ACCEPTED",
            "OVERDUE"
          ]
        }
      ],
      "demoRows": [
        [
          "MLS-001",
          "CTR-001",
          "Giai đoạn 1: Bàn giao thiết kế & SRS",
          "2026-03-31",
          40000000,
          "2026-03-30",
          "ACCEPTED",
          "2026-01-15T08:00:00Z",
          "2026-03-30T10:00:00Z",
          "pm@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "MLS-002",
          "CTR-001",
          "Giai đoạn 2: Bàn giao phiên bản UAT",
          "2026-07-31",
          40000000,
          "",
          "PENDING",
          "2026-01-15T08:00:00Z",
          "2026-01-15T08:00:00Z",
          "pm@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "MLS-003",
          "CTR-001",
          "Giai đoạn 3: Nghiệm thu vận hành Go-Live",
          "2026-11-30",
          40000000,
          "",
          "PENDING",
          "2026-01-15T08:00:00Z",
          "2026-01-15T08:00:00Z",
          "pm@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "MLS-004",
          "CTR-003",
          "Bàn giao trọn gói bộ nhận diện",
          "2026-06-15",
          50000000,
          "2026-06-10",
          "ACCEPTED",
          "2026-03-10T08:00:00Z",
          "2026-06-10T10:00:00Z",
          "pm@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "ContractPayments",
      "color": "#1E88E5",
      "headers": [
        "ID",
        "ContractID",
        "MilestoneID",
        "Amount",
        "PaidAt",
        "PaymentMethod",
        "Reference",
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
        140,
        110,
        130,
        160,
        160,
        160,
        180,
        90,
        80
      ],
      "formats": [
        {
          "range": "D2:D1000",
          "format": "#,##0 \"₫\""
        },
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
            "BANK_TRANSFER",
            "CASH",
            "CREDIT_LETTER"
          ]
        }
      ],
      "demoRows": [
        [
          "CPY-001",
          "CTR-001",
          "MLS-001",
          30000000,
          "2026-01-20",
          "BANK_TRANSFER",
          "UNC-260120-01 (Tạm ứng ký HĐ)",
          "2026-01-20T08:00:00Z",
          "2026-01-20T08:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CPY-002",
          "CTR-001",
          "MLS-001",
          20000000,
          "2026-04-05",
          "BANK_TRANSFER",
          "UNC-260405-02 (Thanh toán sau GĐ 1)",
          "2026-04-05T08:00:00Z",
          "2026-04-05T08:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CPY-003",
          "CTR-003",
          "MLS-004",
          50000000,
          "2026-06-25",
          "BANK_TRANSFER",
          "UNC-260625-01 (Tất toán HĐ 03)",
          "2026-06-25T08:00:00Z",
          "2026-06-25T08:00:00Z",
          "ketoan@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "ContractFiles",
      "color": "#2196F3",
      "headers": [
        "ID",
        "ContractID",
        "FileName",
        "Version",
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
        220,
        90,
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
          "CFL-001",
          "CTR-001",
          "HopDong_KiemToan_GiaiPhapAChau_Signed.pdf",
          "v1.0",
          "drive.google.com/file/d/12345",
          "2026-01-15T09:00:00Z",
          "2026-01-15T09:00:00Z",
          "2026-01-15T09:00:00Z",
          "phapche@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "CFL-002",
          "CTR-001",
          "PhuLuc_01_MobileApp_Signed.pdf",
          "v1.1",
          "drive.google.com/file/d/67890",
          "2026-03-01T10:00:00Z",
          "2026-03-01T10:00:00Z",
          "2026-03-01T10:00:00Z",
          "phapche@minhtemplates.com",
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
          "EXPIRY_WARNING_DAYS",
          "30",
          "Số ngày cảnh báo trước khi hợp đồng hết hiệu lực",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "ENABLE_INDEPENDENT_RECONCILIATION",
          "TRUE",
          "Mốc nghiệm thu và thanh toán hoàn toàn độc lập",
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
    "title": "BÁO CÁO QUẢN TRỊ HỢP ĐỒNG & PHÁT SINH",
    "subtitle": "Theo dõi giá trị hợp đồng, phụ lục điều chỉnh, tiến độ nghiệm thu và giải ngân",
    "kpiCards": [
      {
        "label": "TỔNG GIÁ TRỊ HIỆN HÀNH",
        "formula": "=SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, \"<>TERMINATED\", Contracts!Q2:Q1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#E8F5E9"
      },
      {
        "label": "ĐÃ NGHIỆM THU",
        "formula": "=SUMIFS(Milestones!E2:E1000, Milestones!G2:G1000, \"ACCEPTED\", Milestones!L2:L1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#E3F2FD"
      },
      {
        "label": "ĐÃ THANH TOÁN",
        "formula": "=SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#FFF8E1"
      },
      {
        "label": "TỶ LỆ GIẢI NGÂN",
        "formula": "=IFERROR(SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, \"FALSE\") / IFERROR(SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, \"<>TERMINATED\", Contracts!Q2:Q1000, \"FALSE\"), 1), 0)",
        "format": "0.0%",
        "bg": "#F3E5F5"
      },
      {
        "label": "HỢP ĐỒNG HIỆU LỰC",
        "formula": "=COUNTIFS(Contracts!L2:L1000, \"ACTIVE\", Contracts!Q2:Q1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#FFEBEE"
      }
    ],
    "charts": [
      {
        "title": "Giá Trị Hợp Đồng Theo Trạng Thái",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "Contracts!L1:L1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Nghiệm Thu vs Thanh Toán Thực Tế",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "Milestones!C1:C1000",
          "Milestones!E1:E1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
