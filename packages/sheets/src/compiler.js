/**
 * Formula and Named Functions compiler for Google Sheets
 */

const FORMULA_TEMPLATES = {
  DAYS_LATE: (rowIdx) => 
    `=IF(OR(A${rowIdx}="",F${rowIdx}="",G${rowIdx}="CANCELLED"),"",IF(G${rowIdx}="DONE",IF(I${rowIdx}="","",MAX(0,INT(I${rowIdx})-F${rowIdx})),MAX(0,TODAY()-F${rowIdx})))`,

  OVERDUE_COUNT: (sheetName = 'Tasks', maxRow = 10001) =>
    `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!F2:F${maxRow},">0",${sheetName}!F2:F${maxRow},"<"&TODAY(),${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED")`,

  COMPLETION_RATE: (sheetName = 'Tasks', maxRow = 10001) =>
    `=IFERROR(COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"DONE")/COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>CANCELLED"),0)`,

  OPEN_TASKS_COUNT: (sheetName = 'Tasks', maxRow = 10001) =>
    `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED")`,

  EISENHOWER_QUADRANT: (quadrant, sheetName = 'Tasks', maxRow = 10001) => {
    switch (quadrant) {
      case 'Q1': // Important=TRUE, Urgent=TRUE
        return `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED",${sheetName}!L2:L${maxRow},TRUE,${sheetName}!M2:M${maxRow},TRUE)`;
      case 'Q2': // Important=TRUE, Urgent=FALSE
        return `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED",${sheetName}!L2:L${maxRow},TRUE,${sheetName}!M2:M${maxRow},FALSE)`;
      case 'Q3': // Important=FALSE, Urgent=TRUE
        return `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED",${sheetName}!L2:L${maxRow},FALSE,${sheetName}!M2:M${maxRow},TRUE)`;
      case 'Q4': // Important=FALSE, Urgent=FALSE
        return `=COUNTIFS(${sheetName}!A2:A${maxRow},"<>",${sheetName}!G2:G${maxRow},"<>DONE",${sheetName}!G2:G${maxRow},"<>CANCELLED",${sheetName}!L2:L${maxRow},FALSE,${sheetName}!M2:M${maxRow},FALSE)`;
      default:
        return '';
    }
  }
};

/**
 * Named Function definitions (can be registered in Google Sheets)
 */
const NAMED_FUNCTIONS = [
  {
    name: 'MINH_DAYS_LATE',
    description: 'Tính số ngày trễ hạn của một công việc theo chuẩn F01',
    argumentNames: ['title', 'dueDate', 'status', 'completedAt'],
    formula: 'IF(OR(title="",dueDate="",status="CANCELLED"),"",IF(status="DONE",IF(completedAt="","",MAX(0,INT(completedAt)-dueDate)),MAX(0,TODAY()-dueDate)))'
  },
  {
    name: 'MINH_COMPLETION_RATE',
    description: 'Tính tỷ lệ hoàn thành công việc loại trừ các việc đã bị hủy',
    argumentNames: ['idRange', 'statusRange'],
    formula: 'IFERROR(COUNTIFS(idRange,"<>",statusRange,"DONE")/COUNTIFS(idRange,"<>",statusRange,"<>CANCELLED"),0)'
  }
];

module.exports = {
  FORMULA_TEMPLATES,
  NAMED_FUNCTIONS
};
