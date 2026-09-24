/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F10 — Khách sạn, homestay và đặt phòng
 * Múi giờ: Asia/Ho_Chi_Minh | Locale: vi-VN | Currency: VND
 */

module.exports = {
  "sku": "F10",
  "name": "Khách sạn, homestay và đặt phòng",
  "version": "1.0.0",
  "description": "Quản lý đặt phòng homestay, khách sạn, tính đêm lưu trú chính xác theo [check-in, check-out), chống overbooking, theo dõi cọc và dọn phòng",
  "timeZone": "Asia/Ho_Chi_Minh",
  "locale": "vi-VN",
  "currency": "VND",
  "tables": [
    {
      "name": "Properties",
      "color": "#5D4037",
      "headers": [
        "ID",
        "PropertyCode",
        "Name",
        "Address",
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
        130,
        220,
        240,
        130,
        90,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "PROP-001",
          "MINH-VILLA-01",
          "Minh Luxury Homestay Đà Lạt",
          "12 Khe Sanh, Đà Lạt",
          "0901234567",
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PROP-002",
          "MINH-HOTEL-02",
          "Minh Boutique Hotel Nha Trang",
          "36 Trần Phú, Nha Trang",
          "0907654321",
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
      "name": "Rooms",
      "color": "#4E342E",
      "headers": [
        "ID",
        "PropertyID",
        "RoomNumber",
        "RoomType",
        "Capacity",
        "PricePerNight",
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
        120,
        140,
        100,
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
            "STANDARD",
            "DELUXE",
            "SUITE",
            "FAMILY_VILLA"
          ]
        }
      ],
      "demoRows": [
        [
          "RM-101",
          "PROP-001",
          "Villa 101",
          "DELUXE",
          2,
          800000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RM-102",
          "PROP-001",
          "Villa 102",
          "SUITE",
          4,
          1500000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RM-201",
          "PROP-002",
          "Deluxe Ocean 201",
          "DELUXE",
          2,
          1200000,
          "TRUE",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "RM-202",
          "PROP-002",
          "Standard Mountain 202",
          "STANDARD",
          2,
          700000,
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
      "name": "Guests",
      "color": "#3E2723",
      "headers": [
        "ID",
        "GuestCode",
        "FullName",
        "Phone",
        "Email",
        "IdCard",
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
        140,
        200,
        160,
        160,
        180,
        90,
        80
      ],
      "demoRows": [
        [
          "GST-001",
          "KH-001",
          "Nguyễn Thị Hồng Hạnh",
          "0911223344",
          "hanh@gmail.com",
          "001198000123",
          "Khách quen",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "GST-002",
          "KH-002",
          "Trần Đình Trọng",
          "0922334455",
          "trong@gmail.com",
          "001199000456",
          "Check-in trễ sau 20h",
          "2026-09-02T08:00:00Z",
          "2026-09-02T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Bookings",
      "color": "#00695C",
      "headers": [
        "ID",
        "BookingCode",
        "PropertyID",
        "RoomID",
        "GuestID",
        "CheckInDate",
        "CheckOutDate",
        "Nights",
        "PricePerNight",
        "RoomSubtotal",
        "DepositAmount",
        "RemainingAmount",
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
        110,
        80,
        130,
        140,
        130,
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
          "range": "F2:G1000",
          "format": "yyyy-mm-dd"
        },
        {
          "range": "I2:L1000",
          "format": "#,##0 \"₫\""
        }
      ],
      "validations": [
        {
          "range": "M2:M1000",
          "type": "list",
          "values": [
            "PENDING",
            "CONFIRMED",
            "CHECKED_IN",
            "CHECKED_OUT",
            "CANCELLED"
          ]
        }
      ],
      "demoRows": [
        [
          "BK-001",
          "BK-260901",
          "PROP-001",
          "RM-101",
          "GST-001",
          "2026-10-10",
          "2026-10-12",
          2,
          800000,
          1600000,
          500000,
          1100000,
          "CONFIRMED",
          "2026-09-01T08:00:00Z",
          "2026-09-01T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "BK-002",
          "BK-260902",
          "PROP-001",
          "RM-102",
          "GST-002",
          "2026-10-12",
          "2026-10-15",
          3,
          1500000,
          4500000,
          1500000,
          3000000,
          "CHECKED_IN",
          "2026-09-02T08:00:00Z",
          "2026-09-02T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "BK-003",
          "BK-260903",
          "PROP-002",
          "RM-201",
          "GST-001",
          "2026-10-05",
          "2026-10-07",
          2,
          1200000,
          2400000,
          1000000,
          0,
          "CHECKED_OUT",
          "2026-09-03T08:00:00Z",
          "2026-10-07T12:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "BK-004",
          "BK-260904",
          "PROP-002",
          "RM-202",
          "GST-002",
          "2026-10-01",
          "2026-10-03",
          2,
          700000,
          1400000,
          0,
          0,
          "CANCELLED",
          "2026-09-04T08:00:00Z",
          "2026-09-05T08:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Payments",
      "color": "#004D40",
      "headers": [
        "ID",
        "BookingID",
        "PaymentType",
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
          "range": "D2:D1000",
          "format": "#,##0 \"₫\""
        },
        {
          "range": "F2:F1000",
          "format": "yyyy-mm-dd hh:mm:ss"
        }
      ],
      "validations": [
        {
          "range": "C2:C1000",
          "type": "list",
          "values": [
            "DEPOSIT",
            "SETTLEMENT",
            "SURCHARGE",
            "REFUND"
          ]
        },
        {
          "range": "E2:E1000",
          "type": "list",
          "values": [
            "CASH",
            "BANK_TRANSFER",
            "VNPAY",
            "CREDIT_CARD"
          ]
        }
      ],
      "demoRows": [
        [
          "PMT-001",
          "BK-001",
          "DEPOSIT",
          500000,
          "BANK_TRANSFER",
          "2026-09-01 10:00:00",
          "Tiền đặt cọc phòng 101",
          "2026-09-01T10:00:00Z",
          "2026-09-01T10:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PMT-002",
          "BK-002",
          "DEPOSIT",
          1500000,
          "BANK_TRANSFER",
          "2026-09-02 11:00:00",
          "Tiền cọc phòng 102",
          "2026-09-02T11:00:00Z",
          "2026-09-02T11:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PMT-003",
          "BK-003",
          "DEPOSIT",
          1000000,
          "BANK_TRANSFER",
          "2026-09-03 12:00:00",
          "Tiền cọc phòng 201",
          "2026-09-03T12:00:00Z",
          "2026-09-03T12:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "PMT-004",
          "BK-003",
          "SETTLEMENT",
          1400000,
          "CASH",
          "2026-10-07 12:00:00",
          "Tất toán khi check-out (không nhân đôi cọc)",
          "2026-10-07T12:00:00Z",
          "2026-10-07T12:00:00Z",
          "reception@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Housekeeping",
      "color": "#33691E",
      "headers": [
        "ID",
        "PropertyID",
        "RoomID",
        "LogDate",
        "Status",
        "StaffEmail",
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
        120,
        110,
        120,
        200,
        200,
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
            "CLEAN",
            "DIRTY",
            "CLEANING",
            "INSPECTED"
          ]
        }
      ],
      "demoRows": [
        [
          "HSK-001",
          "PROP-001",
          "RM-101",
          "2026-10-10",
          "CLEAN",
          "housekeeper@minhtemplates.com",
          "Sẵn sàng đón khách",
          "2026-10-10T08:00:00Z",
          "2026-10-10T08:00:00Z",
          "housekeeper@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "HSK-002",
          "PROP-002",
          "RM-201",
          "2026-10-07",
          "DIRTY",
          "housekeeper@minhtemplates.com",
          "Khách vừa check-out cần dọn",
          "2026-10-07T12:30:00Z",
          "2026-10-07T12:30:00Z",
          "housekeeper@minhtemplates.com",
          1,
          "FALSE"
        ]
      ]
    },
    {
      "name": "Settings",
      "color": "#37474F",
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
          "STANDARD_CHECKIN_TIME",
          "14:00",
          "Giờ nhận phòng tiêu chuẩn",
          "2026-01-01T08:00:00Z",
          "2026-01-01T08:00:00Z",
          "admin@minhtemplates.com",
          1,
          "FALSE"
        ],
        [
          "STANDARD_CHECKOUT_TIME",
          "12:00",
          "Giờ trả phòng tiêu chuẩn",
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
    "title": "BÁO CÁO VẬN HÀNH KHÁCH SẠN & HOMESTAY",
    "subtitle": "Theo dõi doanh thu phòng, công suất đêm lưu trú, tiền cọc và buồng phòng",
    "kpiCards": [
      {
        "label": "DOANH THU PHÒNG",
        "formula": "=SUMIFS(Bookings!J2:J1000, Bookings!M2:M1000, \"<>CANCELLED\", Bookings!R2:R1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#E8F5E9"
      },
      {
        "label": "TỔNG ĐÊM ĐÃ BÁN",
        "formula": "=SUMIFS(Bookings!H2:H1000, Bookings!M2:M1000, \"<>CANCELLED\", Bookings!R2:R1000, \"FALSE\")",
        "format": "#,##0",
        "bg": "#E3F2FD"
      },
      {
        "label": "GIÁ BÁN BÌNH QUÂN (ADR)",
        "formula": "=IFERROR(SUMIFS(Bookings!J2:J1000, Bookings!M2:M1000, \"<>CANCELLED\", Bookings!R2:R1000, \"FALSE\") / IFERROR(SUMIFS(Bookings!H2:H1000, Bookings!M2:M1000, \"<>CANCELLED\", Bookings!R2:R1000, \"FALSE\"), 1), 0)",
        "format": "#,##0 \"₫\"",
        "bg": "#FFF8E1"
      },
      {
        "label": "TIỀN CỌC ĐANG GIỮ",
        "formula": "=SUMIFS(Bookings!K2:K1000, Bookings!M2:M1000, \"CONFIRMED\", Bookings!R2:R1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#F3E5F5"
      },
      {
        "label": "CÔNG NỢ CÒN THU",
        "formula": "=SUMIFS(Bookings!L2:L1000, Bookings!M2:M1000, \"<>CANCELLED\", Bookings!R2:R1000, \"FALSE\")",
        "format": "#,##0 \"₫\"",
        "bg": "#FFEBEE"
      }
    ],
    "charts": [
      {
        "title": "Tỷ Lệ Trạng Thái Booking",
        "type": "SpreadsheetApp.ChartType.PIE",
        "ranges": [
          "Bookings!M1:M1000"
        ],
        "row": 10,
        "col": 1
      },
      {
        "title": "Doanh Thu Theo Loại Phòng",
        "type": "SpreadsheetApp.ChartType.COLUMN",
        "ranges": [
          "Rooms!D1:D1000",
          "Rooms!F1:F1000"
        ],
        "row": 10,
        "col": 5
      }
    ]
  }
};
