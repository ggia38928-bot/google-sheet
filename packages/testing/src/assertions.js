/**
 * Test Assertion & Reporting utility
 * Formats every assertion with clear "EXPECTED vs ACTUAL" logs.
 */

class TestReporter {
  constructor(suiteName) {
    this.suiteName = suiteName;
    this.passed = 0;
    this.failed = 0;
    this.results = [];
  }

  assert({ description, expected, actual, condition }) {
    const isPass = condition !== undefined ? Boolean(condition) : (JSON.stringify(expected) === JSON.stringify(actual));
    
    if (isPass) {
      this.passed++;
      console.log(`  [PASS] ${description}`);
      console.log(`         Expected: ${JSON.stringify(expected)}`);
      console.log(`         Actual:   ${JSON.stringify(actual)}`);
    } else {
      this.failed++;
      console.error(`  [FAIL] ${description}`);
      console.error(`         Expected: ${JSON.stringify(expected)}`);
      console.error(`         Actual:   ${JSON.stringify(actual)}`);
    }

    this.results.push({
      description,
      expected,
      actual,
      passed: isPass
    });

    return isPass;
  }

  printSummary() {
    console.log(`\n--- BÁO CÁO SUITE: ${this.suiteName} ---`);
    console.log(`Tổng số ca: ${this.passed + this.failed} | PASS: ${this.passed} | FAIL: ${this.failed}`);
    if (this.failed > 0) {
      console.error(`KẾT QUẢ: KHÔNG ĐẠT (CÓ ${this.failed} CA THẤT BẠI)`);
    } else {
      console.log(`KẾT QUẢ: 100% ĐẠT TIÊU CHUẨN XUẤT XƯỞNG`);
    }
    console.log('--------------------------------------------------\n');
  }
}

module.exports = {
  TestReporter
};
