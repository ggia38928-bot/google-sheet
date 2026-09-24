/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F21 — Form nhập liệu & Phân quyền cấu hình (Dynamic Forms & Access Control)
 * Nguồn đặc tả chính thức: BUILD_ALL_TEMPLATES_CODEX.md (Mục 11, dòng 973–998)
 * Nguồn đối chiếu: G007, G030, G033, G037, G038, G050, G084, G085, G086, G089, G090, G171, G198
 */

module.exports = {
  "sku": "F21",
  "name": "Form nhập liệu & Phân quyền cấu hình",
  "version": "1.0.0",
  "description": "Hệ thống định nghĩa bảng biểu mẫu động, cấu hình cột và kiểu dữ liệu, phân quyền truy cập người dùng (CRUD) và khóa bản ghi theo quy trình",
  "tables": [
    {
      "name": "TABLE_DEFINITIONS",
      "color": "#004D40",
      "headers": [
        "Mã bảng (TableID)",
        "Tên bảng hiển thị",
        "Mô tả nghiệp vụ",
        "Nhóm danh mục",
        "Thứ tự hiển thị",
        "Trạng thái"
      ],
      "colWidths": [
        150,
        220,
        320,
        160,
        120,
        120
      ],
      "validations": [
        {
          "range": "F2:F100",
          "type": "list",
          "values": [
            "ACTIVE",
            "DRAFT",
            "ARCHIVED"
          ]
        }
      ],
      "demoRows": [
        [
          "TBL-01",
          "Phiếu Đăng Ký Khách Hàng",
          "Thu thập thông tin khách hàng tiềm năng tại quầy/sự kiện",
          "Bán hàng",
          1,
          "ACTIVE"
        ],
        [
          "TBL-02",
          "Báo Cáo Sự Cố Thiết Bị",
          "Ghi nhận hư hỏng và yêu cầu bảo trì tài sản văn phòng",
          "Kỹ thuật",
          2,
          "ACTIVE"
        ],
        [
          "TBL-03",
          "Đề Xuất Mua Sắm Vật Tư",
          "Biểu mẫu phê duyệt mua vật tư, trang thiết bị nội bộ",
          "Hành chính",
          3,
          "ACTIVE"
        ],
        [
          "TBL-04",
          "Khảo Sát Hài Lòng Khách Hàng",
          "Đánh giá chất lượng dịch vụ sau khi bàn giao sản phẩm",
          "CSKH",
          4,
          "ACTIVE"
        ]
      ]
    },
    {
      "name": "COLUMN_DEFINITIONS",
      "color": "#00695C",
      "headers": [
        "Mã cột (ColumnID)",
        "Mã bảng (TableID)",
        "Tên cột",
        "Kiểu dữ liệu (Type)",
        "Bắt buộc (Required)",
        "Quy tắc xác thực (ValidationSpec)",
        "Bảng tham chiếu (RefTable)",
        "Cột cha phụ thuộc (ParentCol)"
      ],
      "colWidths": [
        150,
        140,
        200,
        150,
        130,
        260,
        180,
        180
      ],
      "validations": [
        {
          "range": "D2:D500",
          "type": "list",
          "values": [
            "TEXT",
            "NUMBER",
            "MONEY",
            "DATE",
            "DATETIME",
            "BOOLEAN",
            "ENUM",
            "REF",
            "EMAIL",
            "FILE"
          ]
        },
        {
          "range": "E2:E500",
          "type": "list",
          "values": [
            "TRUE",
            "FALSE"
          ]
        }
      ],
      "demoRows": [
        [
          "COL-01",
          "TBL-01",
          "Họ và tên khách hàng",
          "TEXT",
          "TRUE",
          "LEN(val) >= 2",
          "",
          ""
        ],
        [
          "COL-02",
          "TBL-01",
          "Số điện thoại",
          "TEXT",
          "TRUE",
          "REGEXMATCH(val, \"^0[0-9]{9}$\")",
          "",
          ""
        ],
        [
          "COL-03",
          "TBL-01",
          "Email liên hệ",
          "EMAIL",
          "FALSE",
          "IS_VALID_EMAIL(val)",
          "",
          ""
        ],
        [
          "COL-04",
          "TBL-01",
          "Tỉnh / Thành phố",
          "ENUM",
          "TRUE",
          "LIST(\"Hà Nội\", \"TP.HCM\", \"Đà Nẵng\")",
          "",
          ""
        ],
        [
          "COL-05",
          "TBL-02",
          "Mã tài sản thiết bị",
          "REF",
          "TRUE",
          "",
          "ASSETS",
          ""
        ],
        [
          "COL-06",
          "TBL-02",
          "Mô tả chi tiết sự cố",
          "TEXT",
          "TRUE",
          "LEN(val) >= 10",
          "",
          ""
        ],
        [
          "COL-07",
          "TBL-02",
          "Mức độ nghiêm trọng",
          "ENUM",
          "TRUE",
          "LIST(\"THẤP\", \"TRUNG BÌNH\", \"KHẨN CẤP\")",
          "",
          ""
        ],
        [
          "COL-08",
          "TBL-03",
          "Tên vật tư cần mua",
          "TEXT",
          "TRUE",
          "",
          "",
          ""
        ],
        [
          "COL-09",
          "TBL-03",
          "Số lượng dự kiến",
          "NUMBER",
          "TRUE",
          "val > 0",
          "",
          ""
        ],
        [
          "COL-10",
          "TBL-03",
          "Đơn giá ước tính (VND)",
          "MONEY",
          "TRUE",
          "val >= 0",
          "",
          ""
        ]
      ]
    },
    {
      "name": "FORM_DEFINITIONS",
      "color": "#00897B",
      "headers": [
        "Mã biểu mẫu (FormID)",
        "Mã bảng (TableID)",
        "Tiêu đề biểu mẫu",
        "Quy cách bố cục (LayoutSpec)",
        "Số cột giao diện",
        "Trạng thái"
      ],
      "colWidths": [
        160,
        140,
        260,
        240,
        130,
        120
      ],
      "validations": [
        {
          "range": "F2:F100",
          "type": "list",
          "values": [
            "PUBLISHED",
            "DRAFT",
            "CLOSED"
          ]
        }
      ],
      "demoRows": [
        [
          "FRM-01",
          "TBL-01",
          "Form Thu Thập Khách Hàng Tiềm Năng",
          "SINGLE_PAGE_GRID",
          2,
          "PUBLISHED"
        ],
        [
          "FRM-02",
          "TBL-02",
          "Phiếu Báo Hỏng & Yêu Cầu Sửa Chữa",
          "STEP_WIZARD",
          1,
          "PUBLISHED"
        ],
        [
          "FRM-03",
          "TBL-03",
          "Đề Xuất Mua Vật Tư Văn Phòng",
          "COMPACT_FORM",
          2,
          "PUBLISHED"
        ]
      ]
    },
    {
      "name": "PERMISSIONS",
      "color": "#00796B",
      "headers": [
        "Mã quyền",
        "Email người dùng (UserEmail)",
        "Mã bảng (TableID)",
        "Quyền thao tác (Operation)",
        "Phạm vi (Scope)",
        "Trạng thái"
      ],
      "colWidths": [
        110,
        220,
        140,
        160,
        140,
        110
      ],
      "validations": [
        {
          "range": "D2:D200",
          "type": "list",
          "values": [
            "CREATE",
            "READ",
            "UPDATE",
            "DELETE",
            "ADMIN"
          ]
        },
        {
          "range": "E2:E200",
          "type": "list",
          "values": [
            "ALL",
            "OWNER_ONLY",
            "DEPARTMENT"
          ]
        },
        {
          "range": "F2:F200",
          "type": "list",
          "values": [
            "ACTIVE",
            "REVOKED"
          ]
        }
      ],
      "demoRows": [
        [
          "PRM-01",
          "admin@company.vn",
          "TBL-01",
          "ADMIN",
          "ALL",
          "ACTIVE"
        ],
        [
          "PRM-02",
          "sales@company.vn",
          "TBL-01",
          "CREATE",
          "OWNER_ONLY",
          "ACTIVE"
        ],
        [
          "PRM-03",
          "sales@company.vn",
          "TBL-01",
          "READ",
          "DEPARTMENT",
          "ACTIVE"
        ],
        [
          "PRM-04",
          "technician@company.vn",
          "TBL-02",
          "UPDATE",
          "ALL",
          "ACTIVE"
        ],
        [
          "PRM-05",
          "staff@company.vn",
          "TBL-03",
          "CREATE",
          "OWNER_ONLY",
          "ACTIVE"
        ]
      ]
    },
    {
      "name": "VIEW_DEFINITIONS",
      "color": "#26A69A",
      "headers": [
        "Mã View",
        "Mã bảng (TableID)",
        "Tên chế độ xem",
        "Kiểu hiển thị (Type)",
        "Bộ lọc điều kiện (FilterSpec)",
        "Quy tắc sắp xếp (SortSpec)"
      ],
      "colWidths": [
        110,
        140,
        220,
        140,
        260,
        200
      ],
      "validations": [
        {
          "range": "D2:D100",
          "type": "list",
          "values": [
            "TABLE",
            "KANBAN",
            "CALENDAR",
            "CARD_DECK"
          ]
        }
      ],
      "demoRows": [
        [
          "VW-01",
          "TBL-01",
          "Danh sách khách theo Tỉnh thành",
          "TABLE",
          "Status=\"ACTIVE\"",
          "CreatedAt DESC"
        ],
        [
          "VW-02",
          "TBL-02",
          "Kanban xử lý sự cố thiết bị",
          "KANBAN",
          "Status<>\"RESOLVED\"",
          "Severity DESC"
        ],
        [
          "VW-03",
          "TBL-03",
          "Đề xuất chờ duyệt mua sắm",
          "TABLE",
          "Status=\"PENDING_APPROVAL\"",
          "SubmissionDate ASC"
        ]
      ]
    },
    {
      "name": "FORM_RECORDS",
      "color": "#4DB6AC",
      "headers": [
        "Mã bản ghi (RecordID)",
        "Mã bảng (TableID)",
        "Dữ liệu bản ghi (Payload)",
        "Người gửi (CreatedBy)",
        "Thời gian tạo",
        "Trạng thái duyệt"
      ],
      "colWidths": [
        150,
        130,
        360,
        200,
        150,
        150
      ],
      "formats": [
        {
          "range": "E2:E1000",
          "format": "yyyy-mm-dd hh:mm"
        }
      ],
      "validations": [
        {
          "range": "F2:F1000",
          "type": "list",
          "values": [
            "APPROVED",
            "PENDING_APPROVAL",
            "REJECTED"
          ]
        }
      ],
      "demoRows": [
        [
          "REC-001",
          "TBL-01",
          "{\"name\": \"Trần Văn Bình\", \"phone\": \"0912345678\", \"city\": \"TP.HCM\"}",
          "sales01@company.vn",
          "2026-09-10 08:30",
          "APPROVED"
        ],
        [
          "REC-002",
          "TBL-01",
          "{\"name\": \"Lê Thị Mai\", \"phone\": \"0988776655\", \"city\": \"Hà Nội\"}",
          "sales02@company.vn",
          "2026-09-10 09:15",
          "APPROVED"
        ],
        [
          "REC-003",
          "TBL-02",
          "{\"asset\": \"PRN-01\", \"issue\": \"Máy in kẹt giấy liên tục khay 2\", \"severity\": \"TRUNG BÌNH\"}",
          "staff01@company.vn",
          "2026-09-10 10:00",
          "PENDING_APPROVAL"
        ],
        [
          "REC-004",
          "TBL-03",
          "{\"item\": \"Mực máy in Canon 2900\", \"qty\": 3, \"estimated_price\": 750000}",
          "staff02@company.vn",
          "2026-09-10 11:20",
          "PENDING_APPROVAL"
        ]
      ]
    },
    {
      "name": "LOCKED_ROWS",
      "color": "#37474F",
      "headers": [
        "Mã khóa (LockID)",
        "Mã bảng (TableID)",
        "Mã bản ghi (RecordID)",
        "Khóa bởi (LockedBy)",
        "Thời điểm khóa",
        "Lý do khóa"
      ],
      "colWidths": [
        130,
        130,
        150,
        200,
        150,
        260
      ],
      "formats": [
        {
          "range": "E2:E100",
          "format": "yyyy-mm-dd hh:mm"
        }
      ],
      "demoRows": [
        [
          "LCK-01",
          "TBL-03",
          "REC-004",
          "manager@company.vn",
          "2026-09-10 11:30",
          "Đang đối chiếu báo giá từ nhà cung cấp trước khi duyệt"
        ]
      ]
    }
  ],
  "settings": {
    "rows": [
      [
        "Tên đơn vị quản trị:",
        "HỆ THỐNG BIỂU MẪU ĐỘNG MINH FORMS"
      ],
      [
        "Mã hóa đơn giản (Token):",
        "MF-SECURE-2026"
      ],
      [
        "Cơ chế bảo vệ dữ liệu:",
        "Chặn sửa ngoài quyền (Strict Permissions Enforced)"
      ],
      [
        "Quy tắc công thức:",
        "Chặn vòng lặp tham chiếu (No Circular Formulas)"
      ],
      [
        "Quản trị viên hệ thống:",
        "admin@minhtemplates.vn"
      ]
    ]
  },
  "dashboard": {
    "title": "BẢNG ĐIỀU HÀNH HỆ THỐNG BIỂU MẪU & PHÂN QUYỀN (F21)",
    "subtitle": "Theo dõi tổng số bảng & biểu mẫu động • Kiểm soát lượt nhập liệu • Quản lý phân quyền và khóa dữ liệu",
    "kpiCards": [
      {
        "label": "TỔNG SỐ BẢNG ĐÃ ĐỊNH NGHĨA",
        "formula": "=COUNTIF(TABLE_DEFINITIONS!$F$2:$F$100, \"ACTIVE\")",
        "format": "#,##0 \" bảng\"",
        "note": "Bảng dữ liệu đang hoạt động",
        "bg": "#E0F2F1",
        "textColor": "#004D40",
        "valColor": "#00695C"
      },
      {
        "label": "TỔNG SỐ BẢN GHI ĐÃ THU THẬP",
        "formula": "=COUNTA(FORM_RECORDS!$A$2:$A$1000)",
        "format": "#,##0 \" bản ghi\"",
        "note": "Dữ liệu đã nạp qua biểu mẫu",
        "bg": "#E8F5E9",
        "textColor": "#1B5E20",
        "valColor": "#2E7D32"
      },
      {
        "label": "BẢN GHI CHỜ DUYỆT (PENDING)",
        "formula": "=COUNTIF(FORM_RECORDS!$F$2:$F$1000, \"PENDING_APPROVAL\")",
        "format": "#,##0 \" bản ghi\"",
        "note": "Cần kiểm tra trước khi áp dụng",
        "bg": "#FFF8E1",
        "textColor": "#F57F17",
        "valColor": "#F57F17"
      },
      {
        "label": "TỔNG SỐ QUYỀN ĐÃ THIẾT LẬP",
        "formula": "=COUNTIF(PERMISSIONS!$F$2:$F$200, \"ACTIVE\")",
        "format": "#,##0 \" quyền\"",
        "note": "Chính sách bảo mật người dùng",
        "bg": "#E3F2FD",
        "textColor": "#0D47A1",
        "valColor": "#1565C0"
      },
      {
        "label": "BẢN GHI ĐANG BỊ KHÓA",
        "formula": "=COUNTA(LOCKED_ROWS!$A$2:$A$100)",
        "format": "#,##0 \" bản ghi\"",
        "note": "Đang khóa chống chỉnh sửa",
        "bg": "#FFEBEE",
        "textColor": "#B71C1C",
        "valColor": "#C62828"
      }
    ],
    "subTables": [
      {
        "title": "BẢNG THEO DÕI SỐ LƯỢNG BẢN GHI THEO TỪNG BIỂU MẪU",
        "titleRange": "A8:E8",
        "headerBg": "#B2DFDB",
        "headerTextColor": "#004D40",
        "colHeaderBg": "#00897B",
        "startRow": 9,
        "startCol": 1,
        "headers": [
          "Mã bảng",
          "Tên bảng",
          "Nhóm",
          "Số bản ghi",
          "Chờ duyệt"
        ],
        "rowFormulas": [
          {
            "fromIdx": 2,
            "toIdx": 5,
            "rowOffset": 8,
            "cells": [
              {
                "col": 1,
                "formulaFn": "'=IF(TABLE_DEFINITIONS!A' + i + '<>\"\",\"TABLE_DEFINITIONS!A' + i + '\",\"\")'"
              },
              {
                "col": 2,
                "formulaFn": "'=IF(TABLE_DEFINITIONS!B' + i + '<>\"\",\"TABLE_DEFINITIONS!B' + i + '\",\"\")'"
              },
              {
                "col": 3,
                "formulaFn": "'=IF(TABLE_DEFINITIONS!D' + i + '<>\"\",\"TABLE_DEFINITIONS!D' + i + '\",\"\")'"
              },
              {
                "col": 4,
                "formulaFn": "'=IF(A' + r + '<>\"\",\"COUNTIF(FORM_RECORDS!$B$2:$B$1000, A' + r + ')\",\"\")'"
              },
              {
                "col": 5,
                "formulaFn": "'=IF(A' + r + '<>\"\",\"COUNTIFS(FORM_RECORDS!$B$2:$B$1000, A' + r + ', FORM_RECORDS!$F$2:$F$1000, \"PENDING_APPROVAL\")\",\"\")'"
              }
            ]
          }
        ],
        "formats": [
          {
            "range": "D10:E13",
            "format": "#,##0"
          }
        ]
      }
    ],
    "charts": [
      {
        "title": "Phân Bổ Bản Ghi Theo Bảng Biểu Mẫu",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "A9:D13"
        ],
        "row": 8,
        "col": 7,
        "width": 520,
        "height": 260
      }
    ]
  }
};
