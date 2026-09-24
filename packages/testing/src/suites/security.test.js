/**
 * Tầng 3: Security, Concurrency & Idempotency Test
 */

const { TestReporter } = require('../assertions');
const { F01RpcService } = require('../../../gas/src/f01/rpcRouter');

function runSecurityTests() {
  const reporter = new TestReporter('TẦNG 3: SECURITY, CONCURRENCY & IDEMPOTENCY TESTS');
  console.log('\n======================================================================');
  console.log('BẮT ĐẦU CHẠY: TẦNG 3 - SECURITY, CONCURRENCY & IDEMPOTENCY TESTS');
  console.log('======================================================================\n');

  // Khởi tạo bộ nhớ giả lập cho Service
  const storage = {
    tasks: [],
    taskEvents: [],
    auditLog: [],
    jobs: [],
    users: [
      { Email: 'owner@minhtemplates.com', Role: 'OWNER', Active: true },
      { Email: 'staff@minhtemplates.com', Role: 'STAFF', Active: true }
    ],
    settings: []
  };

  const rpcService = new F01RpcService(storage);

  // -------------------------------------------------------------
  // 1. Test Idempotency (Chống ghi trùng qua RequestID)
  // -------------------------------------------------------------
  const createPayload = {
    Title: 'Gửi báo giá cho khách hàng',
    Priority: 'CAO',
    DueDate: '2026-09-10',
    Status: 'TODO'
  };
  const fixedRequestId = 'REQ-UUID-8888-9999';

  // Lần gửi 1
  const res1 = rpcService.handleRequest({
    method: 'f01.createTask',
    payload: createPayload,
    requestId: fixedRequestId
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Lần gửi 1: Tạo mới công việc thành công',
    expected: true,
    actual: res1.success
  });
  reporter.assert({
    description: 'Số lượng bản ghi trong Tasks sau lần gửi 1 là 1',
    expected: 1,
    actual: storage.tasks.length
  });
  reporter.assert({
    description: 'Số lượng bản ghi trong AuditLog sau lần gửi 1 là 1',
    expected: 1,
    actual: storage.auditLog.length
  });

  // Lần gửi 2 với CÙNG RequestID
  const res2 = rpcService.handleRequest({
    method: 'f01.createTask',
    payload: createPayload,
    requestId: fixedRequestId
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Lần gửi 2: Yêu cầu trả về thành công dưới dạng bản phát lại (Idempotent Replay)',
    expected: true,
    actual: res2.isIdempotentReplay
  });
  reporter.assert({
    description: 'Lần gửi 2: Trả về chính xác ID của công việc từ lần gửi 1',
    expected: res1.data.ID,
    actual: res2.data.ID
  });
  reporter.assert({
    description: 'Lần gửi 2: Số lượng bản ghi trong Tasks VẪN LÀ 1 (Tuyệt đối không nhân đôi)',
    expected: 1,
    actual: storage.tasks.length
  });
  reporter.assert({
    description: 'Lần gửi 2: Số lượng bản ghi trong AuditLog VẪN LÀ 1',
    expected: 1,
    actual: storage.auditLog.length
  });

  // -------------------------------------------------------------
  // 2. Test Optimistic Locking (Kiểm soát đồng thời qua RowVersion)
  // -------------------------------------------------------------
  const createdTaskId = res1.data.ID;
  const initialRowVersion = res1.data.RowVersion; // = 1

  // Giả lập Client A đọc task có RowVersion = 1 và cập nhật tiến độ
  const clientARes = rpcService.handleRequest({
    method: 'f01.updateTask',
    payload: {
      ID: createdTaskId,
      Title: 'Gửi báo giá cho khách hàng (Đã liên hệ)',
      Progress: 0.5
    },
    expectedRowVersion: initialRowVersion,
    requestId: 'REQ-CLIENT-A-001'
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Client A cập nhật thành công với expectedRowVersion = 1',
    expected: true,
    actual: clientARes.success
  });
  reporter.assert({
    description: 'RowVersion của task được tự động tăng lên 2 sau khi Client A cập nhật',
    expected: 2,
    actual: storage.tasks[0].RowVersion
  });

  // Giả lập Client B (trước đó cũng đọc được RowVersion = 1) đồng thời gửi yêu cầu cập nhật
  const clientBRes = rpcService.handleRequest({
    method: 'f01.updateTask',
    payload: {
      ID: createdTaskId,
      Title: 'Gửi báo giá cho khách hàng (Ghi chú mới)',
      Progress: 0.8
    },
    expectedRowVersion: 1, // Vẫn gửi 1 do chưa biết Client A đã ghi đè
    requestId: 'REQ-CLIENT-B-002'
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Client B bị từ chối do xung đột phiên bản (Optimistic Locking Conflict)',
    expected: false,
    actual: clientBRes.success
  });
  reporter.assert({
    description: 'Mã lỗi trả về là ERROR_CONCURRENCY_CONFLICT',
    expected: 'ERROR_CONCURRENCY_CONFLICT',
    actual: clientBRes.errorCode
  });
  reporter.assert({
    description: 'Thông điệp lỗi tiếng Việt cảnh báo dữ liệu đã bị sửa bởi người khác',
    expected: true,
    actual: clientBRes.message.includes('Xung đột phiên bản dữ liệu'),
    condition: clientBRes.message.includes('Xung đột phiên bản dữ liệu')
  });

  // -------------------------------------------------------------
  // 3. Test Authorization & Whitelisting
  // -------------------------------------------------------------
  // 3.1. Gọi phương thức không nằm trong Whitelist
  const badMethodRes = rpcService.handleRequest({
    method: 'f01.dropDatabase',
    payload: {},
    requestId: 'REQ-ILLEGAL-01'
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Từ chối phương thức ngoài Whitelist',
    expected: false,
    actual: badMethodRes.success
  });
  reporter.assert({
    description: 'Mã lỗi METHOD_NOT_ALLOWED kèm thông báo tiếng Việt',
    expected: 'METHOD_NOT_ALLOWED',
    actual: badMethodRes.errorCode
  });

  // 3.2. Gửi trường không nằm trong Whitelist (Field Whitelisting)
  const badFieldRes = rpcService.handleRequest({
    method: 'f01.createTask',
    payload: {
      Title: 'Nhiệm vụ hợp lệ',
      Priority: 'CAO',
      IsAdminSecretHackedField: 'TRUE' // Illegal field
    },
    requestId: 'REQ-ILLEGAL-FIELD-01'
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' });

  reporter.assert({
    description: 'Từ chối payload chứa trường ngoài Whitelist (Field Whitelisting)',
    expected: false,
    actual: badFieldRes.success
  });
  reporter.assert({
    description: 'Mã lỗi VALIDATION_FAILED thông báo trường không nằm trong Whitelist',
    expected: 'VALIDATION_FAILED',
    actual: badFieldRes.errorCode
  });

  // 3.3. Staff cố ý sửa task thuộc sở hữu của người khác
  const foreignTask = rpcService.createTask({
    Title: 'Kế hoạch chiến lược của Giám đốc',
    Priority: 'CAO',
    OwnerEmail: 'owner@minhtemplates.com'
  }, { email: 'owner@minhtemplates.com', role: 'OWNER' }, 'REQ-OWNER-PRIVATE-01');

  const staffTamperRes = rpcService.handleRequest({
    method: 'f01.updateTask',
    payload: {
      ID: foreignTask.ID,
      Title: 'Staff cố ý đổi tiêu đề'
    },
    expectedRowVersion: foreignTask.RowVersion,
    requestId: 'REQ-STAFF-TAMPER-01'
  }, { email: 'staff@minhtemplates.com', role: 'STAFF' });

  reporter.assert({
    description: 'Từ chối khi nhân viên (STAFF) sửa công việc của người khác',
    expected: false,
    actual: staffTamperRes.success
  });
  reporter.assert({
    description: 'Mã lỗi PERMISSION_DENIED kèm thông báo tiếng Việt',
    expected: 'PERMISSION_DENIED',
    actual: staffTamperRes.errorCode
  });

  reporter.printSummary();
  return reporter;
}

if (require.main === module) {
  runSecurityTests();
}

module.exports = {
  runSecurityTests
};
