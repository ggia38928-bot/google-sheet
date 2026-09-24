/**
 * Schema validator, Field Whitelist enforcer, and String Sanitizer
 */

const crypto = require('crypto');

function generateStableId(prefix = '') {
  const uuid = crypto.randomUUID();
  return prefix ? `${prefix}-${uuid}` : uuid;
}

/**
 * Anti Formula Injection: Escape string starting with =, +, -, @
 * to prevent formula execution in spreadsheet environments.
 */
function sanitizeFormulaInjection(value) {
  if (typeof value !== 'string') return value;
  const dangerousPrefixes = ['=', '+', '-', '@'];
  if (dangerousPrefixes.some(p => value.startsWith(p))) {
    return `'${value}`;
  }
  return value;
}

/**
 * Ensures phone numbers, order codes, etc. retain leading zeros as text.
 */
function sanitizeTextWithLeadingZeros(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

/**
 * Validates a payload against an entity schema and field whitelist.
 */
function validateEntity(entityName, data, schemaTable, isUpdate = false) {
  const errors = [];
  const sanitized = {};

  const allowedFields = new Set(schemaTable.columns.map(c => c.name));
  const columnMap = new Map(schemaTable.columns.map(c => [c.name, c]));

  // Check for unknown / unwhitelisted fields
  for (const key of Object.keys(data)) {
    if (!allowedFields.has(key)) {
      errors.push(`Trường '${key}' không nằm trong danh sách trường được phép (Whitelist) của bảng '${entityName}'.`);
    }
  }

  // Validate required fields and types
  for (const col of schemaTable.columns) {
    let val = data[col.name];

    // Check required on insert (skip system-managed baseline fields, use default if available)
    const isSystemField = ['ID', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived', 'DaysLate'].includes(col.name);
    if (!isUpdate && (val === undefined || val === null || val === '') && col.default !== undefined) {
      val = col.default;
    }
    if (!isUpdate && col.required && !isSystemField && (val === undefined || val === null || val === '')) {
      errors.push(`Trường '${col.name}' là bắt buộc đối với bảng '${entityName}'.`);
      continue;
    }

    if (val === undefined) continue;

    // Type coercion & validation
    switch (col.type) {
      case 'text':
      case 'email':
        if (typeof val !== 'string' && val !== null) {
          val = String(val);
        }
        if (typeof val === 'string') {
          val = sanitizeFormulaInjection(val.trim());
        }
        break;

      case 'number':
        if (val !== null && val !== '') {
          const num = Number(val);
          if (isNaN(num)) {
            errors.push(`Trường '${col.name}' phải là giá trị số hợp lệ.`);
          } else {
            val = num;
          }
        }
        break;

      case 'percent':
        if (val !== null && val !== '') {
          const p = Number(val);
          if (isNaN(p) || p < 0 || p > 1) {
            errors.push(`Trường '${col.name}' (Tỷ lệ phần trăm) phải là số thực từ 0.0 đến 1.0.`);
          } else {
            val = p;
          }
        }
        break;

      case 'date':
      case 'datetime':
        if (val !== null && val !== '') {
          const d = new Date(val);
          if (isNaN(d.getTime())) {
            errors.push(`Trường '${col.name}' phải là ngày giờ hợp lệ.`);
          } else {
            val = d.toISOString();
          }
        }
        break;

      case 'yesno':
      case 'boolean':
        if (val !== null && val !== '') {
          val = (val === true || val === 'true' || val === 'TRUE' || val === 1 || val === 'YES' || val === 'Có');
        }
        break;

      case 'enum':
        if (val !== null && val !== '') {
          if (!col.values.includes(val)) {
            errors.push(`Trường '${col.name}' có giá trị '${val}' không hợp lệ. Cho phép: [${col.values.join(', ')}].`);
          }
        }
        break;
    }

    sanitized[col.name] = val;
  }

  return {
    valid: errors.length === 0,
    errors,
    data: sanitized
  };
}

module.exports = {
  generateStableId,
  sanitizeFormulaInjection,
  sanitizeTextWithLeadingZeros,
  validateEntity
};
