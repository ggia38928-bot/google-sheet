/**
 * MINH TEMPLATES FACTORY — SKU CONFIG
 * SKU: F30 — Quản lý Công nợ & Phân bổ Thanh toán (Debt & Payment Allocation)
 */

module.exports = {
  sku: 'F30',
  name: 'Công nợ và phân bổ thanh toán',
  version: '1.0.0',
  description: 'Quản lý toàn diện công nợ phải thu, phải trả, phân bổ thanh toán nhiều đợt, xử lý chiết khấu giảm trừ (Credit Notes) và báo cáo tuổi nợ Aging Dashboard',
  tables: [
    {
      name: 'PARTIES',
      color: '#1565C0',
      headers: [
        'Mã đối tác', 'Tên khách hàng / Nhà cung cấp', 'Phân loại', 'Người liên hệ',
        'Số điện thoại', 'Email', 'Mã số thuế', 'Hạn mức nợ (VND)', 'Thời hạn nợ (ngày)',
        'Địa chỉ', 'Trạng thái'
      ],
      colWidths: [110, 260, 120, 150, 120, 180, 130, 160, 130, 240, 110],
      formats: [
        { range: 'H2:H1000', format: '#,##0 "₫"' },
        { range: 'I2:I1000', format: '#,##0' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['CUSTOMER', 'VENDOR', 'BOTH'] },
        { range: 'K2:K1000', type: 'list', values: ['ACTIVE', 'INACTIVE'] }
      ],
      demoRows: [
        ['PT-001', 'Công ty TNHH Thương Mại Toàn Cầu', 'CUSTOMER', 'Nguyễn Anh Tuấn', '0912345678', 'tuan.na@toancau.vn', '0102030405', 200000000, 30, '120 Cầu Giấy, Hà Nội', 'ACTIVE'],
        ['PT-002', 'Tập đoàn Sản Xuất Bao Bì Á Châu', 'VENDOR', 'Trần Thị Mai', '0987654321', 'mai.tt@achaupkg.com', '0304050607', 500000000, 45, 'KCN Sóng Thần, Bình Dương', 'ACTIVE'],
        ['PT-003', 'Công ty CP Công Nghệ & Dịch Vụ Nam Việt', 'CUSTOMER', 'Lê Hoàng Long', '0903112233', 'long.lh@namviet.com', '0405060708', 100000000, 15, '45 Lê Duẩn, Quận 1, TP.HCM', 'ACTIVE'],
        ['PT-004', 'Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh', 'BOTH', 'Phạm Quốc Bảo', '0938223344', 'baopq@phuthinh.vn', '0506070809', 150000000, 30, '78 Nguyễn Đình Chiểu, Đà Nẵng', 'ACTIVE']
      ]
    },
    {
      name: 'INVOICES',
      color: '#0277BD',
      headers: [
        'Mã hóa đơn/CT', 'Mã đối tác', 'Tên đối tác', 'Hướng công nợ', 'Ngày phát hành',
        'Hạn thanh toán', 'Tổng tiền HĐ (VND)', 'Nguồn phát sinh', 'Mã nguồn tham chiếu',
        'Đã phân bổ (VND)', 'Giảm trừ Credit (VND)', 'Còn phải thu/trả (VND)', 'Trạng thái', 'Ghi chú'
      ],
      colWidths: [130, 110, 240, 130, 110, 110, 160, 140, 140, 160, 160, 170, 120, 200],
      formats: [
        { range: 'E2:F1000', format: 'yyyy-mm-dd' },
        { range: 'G2:G1000', format: '#,##0 "₫"' },
        { range: 'J2:L1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'D2:D1000', type: 'list', values: ['RECEIVABLE', 'PAYABLE'] },
        { range: 'M2:M1000', type: 'list', values: ['OPEN', 'PARTIAL', 'PAID', 'CANCELLED'] }
      ],
      demoRows: [
        ['INV-2026-001', 'PT-001', 'Công ty TNHH Thương Mại Toàn Cầu', 'RECEIVABLE', '2026-08-01', '2026-08-31', 1000000, 'SalesOrder', 'SO-001', '', '', '', 'PARTIAL', 'Hóa đơn mẫu kiểm thử CODEX'],
        ['INV-2026-002', 'PT-001', 'Công ty TNHH Thương Mại Toàn Cầu', 'RECEIVABLE', '2026-08-15', '2026-09-15', 50000000, 'SalesOrder', 'SO-002', '', '', '', 'OPEN', 'Đơn hàng máy tính xách tay'],
        ['INV-2026-003', 'PT-003', 'Công ty CP Công Nghệ & Dịch Vụ Nam Việt', 'RECEIVABLE', '2026-07-01', '2026-07-15', 35000000, 'SalesOrder', 'SO-003', '', '', '', 'OPEN', 'Hợp đồng bảo trì hệ thống phần mềm (Quá hạn)'],
        ['INV-2026-004', 'PT-002', 'Tập đoàn Sản Xuất Bao Bì Á Châu', 'PAYABLE', '2026-08-10', '2026-09-25', 120000000, 'PurchaseOrder', 'PO-001', '', '', '', 'OPEN', 'Nhập nguyên vật liệu sản xuất đợt 1'],
        ['INV-2026-005', 'PT-004', 'Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh', 'PAYABLE', '2026-08-20', '2026-09-20', 40000000, 'PurchaseOrder', 'PO-002', '', '', '', 'OPEN', 'Thiết bị phụ trợ văn phòng']
      ],
      rowFormulas: [
        {
          col: 10,
          formulaFn: "\'=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$C$2:$C$1000, A\' + r + \')\'"
        },
        {
          col: 11,
          formulaFn: "\'=SUMIFS(CREDIT_NOTES!$C$2:$C$1000, CREDIT_NOTES!$B$2:$B$1000, A\' + r + \', CREDIT_NOTES!$F$2:$F$1000, \"APPLIED\")\'"
        },
        {
          col: 12,
          formulaFn: "\'=MAX(0, G\' + r + \' - J\' + r + \' - K\' + r + \')\'"
        }
      ]
    },
    {
      name: 'PAYMENTS',
      color: '#2E7D32',
      headers: [
        'Mã thanh toán', 'Mã đối tác', 'Chiều giao dịch', 'Ngày thanh toán', 'Số tiền TT (VND)',
        'Đã phân bổ (VND)', 'Chưa phân bổ (VND)', 'Hình thức / Tham chiếu', 'Trạng thái', 'Ghi chú'
      ],
      colWidths: [130, 110, 130, 120, 160, 160, 160, 180, 120, 200],
      formats: [
        { range: 'D2:D1000', format: 'yyyy-mm-dd' },
        { range: 'E2:G1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['INCOMING', 'OUTGOING'] },
        { range: 'I2:I1000', type: 'list', values: ['POSTED', 'VOID'] }
      ],
      demoRows: [
        ['PAY-2026-001', 'PT-001', 'INCOMING', '2026-08-10', 1000000, '', '', 'VCB-FT2608101', 'POSTED', 'Thanh toán tiền hàng qua ngân hàng'],
        ['PAY-2026-002', 'PT-001', 'INCOMING', '2026-08-25', 20000000, '', '', 'VCB-FT2608252', 'POSTED', 'Tạm ứng đợt 1 đơn hàng máy tính'],
        ['PAY-2026-003', 'PT-002', 'OUTGOING', '2026-08-28', 50000000, '', '', 'TCB-FT2608281', 'POSTED', 'Thanh toán tạm ứng nhà cung cấp bao bì']
      ],
      rowFormulas: [
        {
          col: 6,
          formulaFn: "\'=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$B$2:$B$1000, A\' + r + \')\'"
        },
        {
          col: 7,
          formulaFn: "\'=MAX(0, E\' + r + \' - F\' + r + \')\'"
        }
      ]
    },
    {
      name: 'ALLOCATIONS',
      color: '#E65100',
      headers: [
        'Mã phân bổ', 'Mã thanh toán', 'Mã hóa đơn', 'Số tiền phân bổ (VND)', 'Ngày phân bổ', 'Ghi chú'
      ],
      colWidths: [130, 130, 130, 170, 120, 240],
      formats: [
        { range: 'D2:D1000', format: '#,##0 "₫"' },
        { range: 'E2:E1000', format: 'yyyy-mm-dd' }
      ],
      demoRows: [
        ['ALC-001', 'PAY-2026-001', 'INV-2026-001', 400000, '2026-08-10', 'Phân bổ 400.000đ theo CODEX Acceptance Test'],
        ['ALC-002', 'PAY-2026-002', 'INV-2026-002', 20000000, '2026-08-25', 'Phân bổ thanh toán tạm ứng máy tính'],
        ['ALC-003', 'PAY-2026-003', 'INV-2026-004', 50000000, '2026-08-28', 'Phân bổ trả trước nhà cung cấp Á Châu']
      ]
    },
    {
      name: 'CREDIT_NOTES',
      color: '#6A1B9A',
      headers: [
        'Mã giảm trừ', 'Mã hóa đơn', 'Số tiền giảm trừ (VND)', 'Ngày lập', 'Lý do giảm trừ', 'Trạng thái'
      ],
      colWidths: [130, 130, 170, 120, 260, 120],
      formats: [
        { range: 'C2:C1000', format: '#,##0 "₫"' },
        { range: 'D2:D1000', format: 'yyyy-mm-dd' }
      ],
      validations: [
        { range: 'F2:F1000', type: 'list', values: ['APPLIED', 'VOID'] }
      ],
      demoRows: [
        ['CR-001', 'INV-2026-001', 100000, '2026-08-12', 'Chiết khấu thương mại bổ sung theo CODEX Acceptance Test', 'APPLIED']
      ]
    },
    {
      name: 'OPENING_BALANCES',
      color: '#455A64',
      headers: [
        'Mã số dư', 'Mã đối tác', 'Hướng công nợ', 'Ngày chốt số dư', 'Số dư ban đầu (VND)', 'Ghi chú'
      ],
      colWidths: [130, 120, 140, 130, 170, 240],
      formats: [
        { range: 'D2:D1000', format: 'yyyy-mm-dd' },
        { range: 'E2:E1000', format: '#,##0 "₫"' }
      ],
      validations: [
        { range: 'C2:C1000', type: 'list', values: ['RECEIVABLE', 'PAYABLE'] }
      ],
      demoRows: [
        ['OP-001', 'PT-001', 'RECEIVABLE', '2026-01-01', 0, 'Số dư đầu kỳ năm 2026'],
        ['OP-002', 'PT-003', 'RECEIVABLE', '2026-01-01', 15000000, 'Số dư nợ cũ chuyển sang']
      ]
    }
  ],
  settings: {
    rows: [
      ['Đơn vị quản lý công nợ:', 'CÔNG TY TNHH GIẢI PHÁP SỐ MINH'],
      ['Kỳ công nợ mặc định:', '30 ngày kể từ ngày xuất hóa đơn'],
      ['Chính sách chiết khấu thanh toán sớm:', '1% nếu thanh toán trong vòng 7 ngày'],
      ['Đầu mối phụ trách kế toán công nợ:', 'Kế toán trưởng - ktcn@minhtemplates.vn'],
      ['Cảnh báo nợ quá hạn:', 'Tự động gắn cờ đỏ khi quá hạn trên 30 ngày']
    ]
  },
  dashboard: {
    title: 'BẢNG ĐIỀU HÀNH CÔNG NỢ & PHÂN BỔ THANH TOÁN (F30)',
    subtitle: 'Theo dõi nợ phải thu • Nợ phải trả • Phân tích tuổi nợ Aging • Tiền chưa phân bổ',
    kpiCards: [
      {
        label: 'TỔNG NỢ PHẢI THU CÒN LẠI',
        formula: '=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "RECEIVABLE", INVOICES!$M$2:$M$1000, "<>CANCELLED")',
        format: '#,##0 "₫"',
        note: 'Khoản tiền khách hàng còn nợ',
        bg: '#E3F2FD',
        textColor: '#0D47A1',
        valColor: '#1565C0'
      },
      {
        label: 'TỔNG NỢ PHẢI TRẢ CÒN LẠI',
        formula: '=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "PAYABLE", INVOICES!$M$2:$M$1000, "<>CANCELLED")',
        format: '#,##0 "₫"',
        note: 'Khoản tiền phải trả cho nhà cung cấp',
        bg: '#FFEBEE',
        textColor: '#B71C1C',
        valColor: '#C62828'
      },
      {
        label: 'NỢ PHẢI THU QUÁ HẠN',
        formula: '=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "RECEIVABLE", INVOICES!$F$2:$F$1000, "<"&TODAY(), INVOICES!$L$2:$L$1000, ">0")',
        format: '#,##0 "₫"',
        note: 'Công nợ đã vượt quá hạn thanh toán',
        bg: '#FFF3E0',
        textColor: '#E65100',
        valColor: '#EF6C00'
      },
      {
        label: 'TIỀN THU CHƯA PHÂN BỔ',
        formula: '=SUMIFS(PAYMENTS!$G$2:$G$1000, PAYMENTS!$C$2:$C$1000, "INCOMING", PAYMENTS!$I$2:$I$1000, "POSTED")',
        format: '#,##0 "₫"',
        note: 'Tiền đã nhận nhưng chưa gán hóa đơn',
        bg: '#E8F5E9',
        textColor: '#1B5E20',
        valColor: '#2E7D32'
      }
    ]
  }
};
