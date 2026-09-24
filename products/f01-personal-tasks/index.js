/**
 * Product Module: F01 - Việc cá nhân và ưu tiên
 * Standalone product descriptor linking core packages and presets.
 */

const { F01_SCHEMA } = require('../../packages/schema/src/f01');
const domain = require('../../packages/domain/src/f01');
const { buildF01SheetWorkbook } = require('../../packages/sheets/src/f01/builder');
const appsheet = require('../../packages/appsheet/src/f01/spec');
const gas = require('../../packages/gas/src/f01/rpcRouter');

const PRODUCT_METADATA = {
  familyId: 'F01',
  name: 'Việc cá nhân và ưu tiên',
  version: '1.0.0',
  presets: [
    {
      sku: 'F01-LITE',
      name: 'Bản Tiêu Chuẩn (Lite)',
      description: 'Google Sheets thuần công thức, theo dõi việc cá nhân, ma trận Eisenhower, tính số ngày trễ tự động, không cần cài đặt Apps Script.',
      platforms: ['SHEET']
    },
    {
      sku: 'F01-PRO',
      name: 'Bản Nâng Cao (Pro)',
      description: 'Bao gồm toàn bộ tính năng Lite + Google Apps Script Web App, phân quyền người dùng, tự động chốt mốc hoàn thành, nhắc việc tự động qua email/bot.',
      platforms: ['SHEET', 'WEB']
    },
    {
      sku: 'F01-BILINGUAL',
      name: 'Bản Song Ngữ (Bilingual Vi-En)',
      description: 'Toàn bộ giao diện Dashboard, danh mục, thông báo hỗ trợ song ngữ Việt - Anh.',
      platforms: ['SHEET', 'WEB', 'APPSHEET']
    }
  ]
};

module.exports = {
  PRODUCT_METADATA,
  schema: F01_SCHEMA,
  domain,
  sheetBuilder: buildF01SheetWorkbook,
  appsheet,
  gas
};
