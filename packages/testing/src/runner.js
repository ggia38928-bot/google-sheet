/**
 * Master Test Runner for Minh Templates Factory
 * Executes all 3 testing layers with detailed EXPECTED vs ACTUAL reporting.
 */

const { runDomainTests } = require('./suites/domain.test');
const { runFormulaTests } = require('./suites/formulas.test');
const { runSecurityTests } = require('./suites/security.test');

function runAllSuites() {
  console.log('######################################################################');
  console.log('  MINH TEMPLATES FACTORY - BỘ TEST RUNNER TỰ ĐỘNG XUẤT XƯỞNG (F01)');
  console.log('  Thời gian thực thi: ' + new Date().toISOString());
  console.log('######################################################################\n');

  const rep1 = runDomainTests();
  const rep2 = runFormulaTests();
  const rep3 = runSecurityTests();

  const totalTests = rep1.passed + rep1.failed + rep2.passed + rep2.failed + rep3.passed + rep3.failed;
  const totalPassed = rep1.passed + rep2.passed + rep3.passed;
  const totalFailed = rep1.failed + rep2.failed + rep3.failed;

  console.log('\n======================================================================');
  console.log('                 TỔNG KẾT TOÀN BỘ BỘ KIỂM THỬ (TEST HARNESS)');
  console.log('======================================================================');
  console.log(`  Tầng 1 (Domain Unit Tests):          ${rep1.passed}/${rep1.passed + rep1.failed} PASS`);
  console.log(`  Tầng 2 (Formulas & Acceptance Test): ${rep2.passed}/${rep2.passed + rep2.failed} PASS`);
  console.log(`  Tầng 3 (Security & Idempotency):     ${rep3.passed}/${rep3.passed + rep3.failed} PASS`);
  console.log('----------------------------------------------------------------------');
  console.log(`  TỔNG CỘNG:                           ${totalPassed}/${totalTests} PASS (${((totalPassed/totalTests)*100).toFixed(1)}%)`);
  console.log('======================================================================\n');

  if (totalFailed > 0) {
    console.error(`[CẢNH BÁO] CÓ ${totalFailed} BÀI KIỂM THỬ KHÔNG ĐẠT. KHÔNG ĐỦ TIÊU CHUẨN XUẤT XƯỞNG!`);
    process.exit(1);
  } else {
    console.log('[XÁC NHẬN] 100% CÁC BÀI KIỂM THỬ ĐÃ VƯỢT QUA. F01 ĐỦ TIÊU CHUẨN ĐÓNG GÓI THƯƠNG MẠI.');
  }

  return {
    totalTests,
    totalPassed,
    totalFailed
  };
}

if (require.main === module) {
  runAllSuites();
}

module.exports = {
  runAllSuites
};
