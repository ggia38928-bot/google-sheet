/**
 * Mock Google Workspace APIs (SpreadsheetApp, LockService, Session)
 * For offline testing and verification without requiring live Google credentials.
 */

class MockRange {
  constructor(sheet, row, col, numRows = 1, numCols = 1) {
    this.sheet = sheet;
    this.row = row;
    this.col = col;
    this.numRows = numRows;
    this.numCols = numCols;
  }

  getValue() {
    return this.sheet.data[this.row - 1]?.[this.col - 1] ?? '';
  }

  setValue(val) {
    if (!this.sheet.data[this.row - 1]) {
      this.sheet.data[this.row - 1] = [];
    }
    this.sheet.data[this.row - 1][this.col - 1] = val;
    return this;
  }

  getValues() {
    const res = [];
    for (let r = 0; r < this.numRows; r++) {
      const rowArr = [];
      for (let c = 0; c < this.numCols; c++) {
        rowArr.push(this.sheet.data[this.row - 1 + r]?.[this.col - 1 + c] ?? '');
      }
      res.push(rowArr);
    }
    return res;
  }
}

class MockSheet {
  constructor(name) {
    this.name = name;
    this.data = []; // 2D array
  }

  getLastRow() {
    return this.data.length;
  }

  getRange(a1OrRow, col, numRows, numCols) {
    if (typeof a1OrRow === 'string') {
      // Simple A1 parse, e.g. "B8", "A2:A10001"
      const match = a1OrRow.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
      if (match) {
        const colLetters = match[1];
        const startRow = parseInt(match[2], 10);
        const colIdx = colLetters.split('').reduce((acc, char) => acc * 26 + char.charCodeAt(0) - 64, 0);
        return new MockRange(this, startRow, colIdx, 1, 1);
      }
      return new MockRange(this, 1, 1, 1, 1);
    }
    return new MockRange(this, a1OrRow, col, numRows || 1, numCols || 1);
  }

  appendRow(rowValues) {
    this.data.push([...rowValues]);
  }
}

class MockSpreadsheet {
  constructor(title = 'Mock Spreadsheet') {
    this.title = title;
    this.sheets = new Map();
  }

  getSheetByName(name) {
    return this.sheets.get(name) || null;
  }

  insertSheet(name) {
    const sheet = new MockSheet(name);
    this.sheets.set(name, sheet);
    return sheet;
  }
}

class MockLock {
  constructor() {
    this.locked = false;
  }

  waitLock(timeoutMs) {
    if (this.locked) {
      throw new Error('Lock acquisition timeout in mock environment.');
    }
    this.locked = true;
    return true;
  }

  releaseLock() {
    this.locked = false;
  }
}

class MockLockService {
  constructor() {
    this.documentLock = new MockLock();
    this.scriptLock = new MockLock();
  }

  getDocumentLock() {
    return this.documentLock;
  }

  getScriptLock() {
    return this.scriptLock;
  }
}

class MockSession {
  constructor(email = 'admin@minhtemplates.com') {
    this.email = email;
  }

  getActiveUser() {
    return {
      getEmail: () => this.email
    };
  }
}

module.exports = {
  MockSpreadsheet,
  MockSheet,
  MockRange,
  MockLockService,
  MockSession
};
