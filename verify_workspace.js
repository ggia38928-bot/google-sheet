const fs = require('fs');
const path = require('path');

console.log('=== AUDIT MINH TEMPLATES FACTORY FILES ===');

const expectedFiles = [
  'BUILD_ALL_TEMPLATES_CODEX.md',
  'PRODUCT_CATALOG.json',
  'SOURCE_MAP.csv',
  'ARCHITECTURE.md',
  'BUILD_QUEUE.md',
  'PROGRESS.md',
  'ASSUMPTIONS.md',
  'BLOCKERS.md',
  'package.json',
  'generate_catalog.js',
  // packages/schema
  'packages/schema/src/baseline.js',
  'packages/schema/src/validator.js',
  'packages/schema/src/f01.js',
  'packages/schema/src/index.js',
  // packages/domain
  'packages/domain/src/f01/types.js',
  'packages/domain/src/f01/stateMachine.js',
  'packages/domain/src/f01/recurrence.js',
  'packages/domain/src/f01/calculations.js',
  'packages/domain/src/f01/index.js',
  'packages/domain/src/index.js',
  // packages/sheets
  'packages/sheets/src/f01/builder.js',
  'packages/sheets/src/compiler.js',
  'packages/sheets/src/index.js',
  // packages/gas
  'packages/gas/src/f01/rpcRouter.js',
  'packages/gas/src/f01/code.gs',
  'packages/gas/src/index.js',
  // packages/appsheet
  'packages/appsheet/src/generator.js',
  'packages/appsheet/src/f01/spec.js',
  'packages/appsheet/src/index.js',
  // packages/testing
  'packages/testing/src/assertions.js',
  'packages/testing/src/mockGoogle.js',
  'packages/testing/src/suites/domain.test.js',
  'packages/testing/src/suites/formulas.test.js',
  'packages/testing/src/suites/security.test.js',
  'packages/testing/src/runner.js',
  // products
  'products/f01-personal-tasks/index.js',
  'products/f01-personal-tasks/package.json',
  // utilities
  'utilities/README.md',
  // releases/F01/1.0.0
  'releases/F01/1.0.0/RELEASE_MANIFEST.json',
  'releases/F01/1.0.0/installer.js',
  'releases/F01/1.0.0/clean/workbook.json',
  'releases/F01/1.0.0/clean/Tasks.csv',
  'releases/F01/1.0.0/demo/workbook.json',
  'releases/F01/1.0.0/demo/Tasks.csv',
  'releases/F01/1.0.0/appsheet/tables.csv',
  'releases/F01/1.0.0/appsheet/columns.csv',
  'releases/F01/1.0.0/appsheet/views.csv',
  'releases/F01/1.0.0/appsheet/actions.csv',
  'releases/F01/1.0.0/appsheet/bots.md',
  'releases/F01/1.0.0/appsheet/APPSHEET_SETUP.md',
  'releases/F01/1.0.0/docs/README.md',
  'releases/F01/1.0.0/docs/FAQ.md',
  'releases/F01/1.0.0/docs/TROUBLESHOOTING.md'
];

let missing = 0;
expectedFiles.forEach(f => {
  const p = path.resolve(f);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`[FOUND] ${f} (${stat.size} bytes)`);
  } else {
    console.log(`[MISSING] ${f}`);
    missing++;
  }
});

console.log(`\nAudit completed: ${expectedFiles.length - missing}/${expectedFiles.length} files exist. Missing: ${missing}`);
