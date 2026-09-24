/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * syntaxChecker.js: Kiểm tra cú pháp mã nguồn Apps Script phát sinh trước khi ghi file
 */

const vm = require('vm');

/**
 * Kiểm tra cú pháp của một đoạn mã Apps Script (ECMAScript)
 * @param {string} code Chuỗi mã nguồn JavaScript / Apps Script
 * @param {string} filename Tên file ảo phục vụ debug (mặc định 'setup.gs')
 * @returns {{ valid: boolean, error: object|null }}
 */
function checkGasSyntax(code, filename = 'setup.gs') {
  if (typeof code !== 'string' || !code.trim()) {
    return {
      valid: false,
      error: {
        message: 'Mã nguồn rỗng hoặc không phải là chuỗi string',
        line: 1,
        column: 1
      }
    };
  }

  try {
    new vm.Script(code, { filename, displayErrors: true });
    return { valid: true, error: null };
  } catch (err) {
    return {
      valid: false,
      error: {
        message: err.message,
        stack: err.stack,
        line: err.lineNumber || null,
        column: err.columnNumber || null
      }
    };
  }
}

/**
 * Ném lỗi trực tiếp nếu cú pháp không hợp lệ (Fail-fast)
 * @param {string} code Chuỗi mã nguồn JavaScript / Apps Script
 * @param {string} filename Tên file ảo
 * @returns {boolean} true nếu hợp lệ
 */
function assertGasSyntax(code, filename = 'setup.gs') {
  const result = checkGasSyntax(code, filename);
  if (!result.valid) {
    const err = new Error(`[SYNTAX ERROR] Mã Apps Script trong "${filename}" không hợp lệ: ${result.error.message}`);
    err.syntaxDetail = result.error;
    throw err;
  }
  return true;
}

module.exports = {
  checkGasSyntax,
  assertGasSyntax
};
