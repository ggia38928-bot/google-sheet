/**
 * Tầng 1: Domain Unit Test (Chạy độc lập trên môi trường local)
 */

const { TestReporter } = require('../assertions');
const {
  TaskStatus,
  TaskPriority,
  TaskEventType,
  transitionTask,
  calculateDaysLate,
  calculateTaskKPIs,
  calculateRecurrenceOccurrences,
  RecurrenceFrequency
} = require('../../../domain/src/f01');
const { sanitizeFormulaInjection, sanitizeTextWithLeadingZeros } = require('../../../schema/src/validator');

function runDomainTests() {
  const reporter = new TestReporter('TẦNG 1: DOMAIN UNIT TESTS (F01)');
  console.log('\n======================================================================');
  console.log('BẮT ĐẦU CHẠY: TẦNG 1 - DOMAIN UNIT TESTS');
  console.log('======================================================================\n');

  // -------------------------------------------------------------
  // 1. Test State Machine: Chuyển trạng thái & Ghi nhận sự kiện
  // -------------------------------------------------------------
  const initialTask = {
    ID: 'TASK-001',
    Title: 'Thiết kế giao diện F01',
    Status: TaskStatus.TODO,
    Progress: 0,
    CompletedAt: null,
    RowVersion: 1
  };

  // Transition: TODO -> DOING
  const startRes = transitionTask(initialTask, 'START', 'engineer@minhtemplates.com', 'Bắt đầu triển khai');
  reporter.assert({
    description: 'Chuyển trạng thái: TODO -> DOING qua action START',
    expected: TaskStatus.DOING,
    actual: startRes.task.Status
  });
  reporter.assert({
    description: 'Tăng RowVersion lên 2 sau khi bắt đầu',
    expected: 2,
    actual: startRes.task.RowVersion
  });
  reporter.assert({
    description: 'Ghi nhận TaskEvent với EventType START',
    expected: TaskEventType.START,
    actual: startRes.event.EventType
  });

  // Transition: DOING -> DONE
  const completeTimestamp = '2026-09-05T10:00:00.000Z';
  const completeRes = transitionTask(startRes.task, 'COMPLETE', 'engineer@minhtemplates.com', 'Hoàn tất nghiệm thu', completeTimestamp);
  reporter.assert({
    description: 'Chuyển trạng thái: DOING -> DONE qua action COMPLETE',
    expected: TaskStatus.DONE,
    actual: completeRes.task.Status
  });
  reporter.assert({
    description: 'Thiết lập CompletedAt khi việc hoàn thành',
    expected: completeTimestamp,
    actual: completeRes.task.CompletedAt
  });
  reporter.assert({
    description: 'Tiến độ cập nhật thành 1.0 (100%) khi hoàn thành',
    expected: 1.0,
    actual: completeRes.task.Progress
  });

  // Transition: DONE -> TODO (REOPEN)
  const reopenRes = transitionTask(completeRes.task, 'REOPEN', 'manager@minhtemplates.com', 'Cần bổ sung tiêu chí');
  reporter.assert({
    description: 'Chuyển trạng thái: DONE -> TODO qua action REOPEN',
    expected: TaskStatus.TODO,
    actual: reopenRes.task.Status
  });
  reporter.assert({
    description: 'Reset CompletedAt thành null khi mở lại việc',
    expected: null,
    actual: reopenRes.task.CompletedAt
  });
  reporter.assert({
    description: 'Reset Progress thành 0 khi mở lại việc đã hoàn thành',
    expected: 0.0,
    actual: reopenRes.task.Progress
  });
  reporter.assert({
    description: 'Ghi nhận sự kiện TaskEvent REOPEN cùng email actor',
    expected: { type: TaskEventType.REOPEN, actor: 'manager@minhtemplates.com' },
    actual: { type: reopenRes.event.EventType, actor: reopenRes.event.ActorEmail }
  });

  // Invalid transition test
  let invalidTransitionThrew = false;
  try {
    transitionTask({ Status: TaskStatus.CANCELLED }, 'START', 'test@minhtemplates.com');
  } catch (err) {
    invalidTransitionThrew = true;
  }
  reporter.assert({
    description: 'Từ chối chuyển trạng thái bất hợp lệ (CANCELLED -> START) và ném ngoại lệ',
    expected: true,
    actual: invalidTransitionThrew
  });

  // -------------------------------------------------------------
  // 2. Test Tính toán: Các ca biên DaysLate và KPI
  // -------------------------------------------------------------
  const todayRef = '2026-09-07T00:00:00.000Z';

  // Ca biên 1: Task không có DueDate -> DaysLate = null
  const taskNoDue = { Title: 'Họp nội bộ định kỳ', DueDate: null, Status: TaskStatus.TODO };
  const daysLateNoDue = calculateDaysLate(taskNoDue, todayRef);
  reporter.assert({
    description: 'Task không có hạn chót (DueDate = null) -> DaysLate bằng null',
    expected: null,
    actual: daysLateNoDue
  });

  // Ca biên 2: Task đã hủy (CANCELLED) -> DaysLate = null
  const taskCancelled = { Title: 'Dự án đã dừng', DueDate: '2026-09-01', Status: TaskStatus.CANCELLED };
  const daysLateCancelled = calculateDaysLate(taskCancelled, todayRef);
  reporter.assert({
    description: 'Task đã bị hủy (CANCELLED) -> DaysLate bằng null',
    expected: null,
    actual: daysLateCancelled
  });

  // Ca biên 3: Task hoàn thành đúng hạn (DueDate = 2026-09-05, CompletedAt = 2026-09-05) -> DaysLate = 0
  const taskDoneOnTime = {
    Title: 'Nộp báo cáo thuế',
    DueDate: '2026-09-05',
    CompletedAt: '2026-09-05T08:30:00.000Z',
    Status: TaskStatus.DONE
  };
  reporter.assert({
    description: 'Task hoàn thành đúng hạn -> DaysLate bằng 0',
    expected: 0,
    actual: calculateDaysLate(taskDoneOnTime, todayRef)
  });

  // Ca biên 4: Task hoàn thành sau hạn 4 ngày (DueDate = 2026-09-01, CompletedAt = 2026-09-05) -> DaysLate = 4
  const taskDoneLate = {
    Title: 'Gửi bảng khảo sát',
    DueDate: '2026-09-01',
    CompletedAt: '2026-09-05T08:30:00.000Z',
    Status: TaskStatus.DONE
  };
  reporter.assert({
    description: 'Task hoàn thành trễ hạn (1/9 -> 5/9) -> DaysLate dương = 4 ngày',
    expected: 4,
    actual: calculateDaysLate(taskDoneLate, todayRef)
  });

  // Ca biên 5: Task đang mở quá hạn (DueDate = 2026-09-01, Today = 2026-09-07) -> DaysLate = 6
  const taskTodoOverdue = {
    Title: 'Cập nhật hệ thống kho',
    DueDate: '2026-09-01',
    Status: TaskStatus.TODO
  };
  reporter.assert({
    description: 'Task TODO quá hạn tại ngày hiện hành (1/9 -> 7/9) -> DaysLate = 6 ngày',
    expected: 6,
    actual: calculateDaysLate(taskTodoOverdue, todayRef)
  });

  // -------------------------------------------------------------
  // 3. Test Quy tắc chuyển giao tháng an toàn (Recurrence Month-end Clamp)
  // -------------------------------------------------------------
  const ruleMonthEnd = {
    ID: 'RULE-31ST',
    TaskTemplateID: 'TASK-TEMPLATE-01',
    Frequency: RecurrenceFrequency.MONTHLY,
    Interval: 1,
    MonthDay: 31, // Lặp vào ngày 31 hàng tháng
    Active: true
  };
  const occurrences = calculateRecurrenceOccurrences(ruleMonthEnd, '2026-01-01', '2026-04-30');
  const scheduledDates = occurrences.map(o => o.ScheduledDate);
  reporter.assert({
    description: 'Quy tắc lặp ngày 31: Tháng 1 có 31 ngày, Tháng 2 năm không nhuận kẹp về 28, Tháng 3 có 31, Tháng 4 kẹp về 30',
    expected: ['2026-01-31', '2026-02-28', '2026-03-31', '2026-04-30'],
    actual: scheduledDates
  });

  // -------------------------------------------------------------
  // 4. Test Xử lý chuỗi & Bảo mật đầu vào
  // -------------------------------------------------------------
  // Tiếng Việt có dấu đầy đủ
  const vietnameseTitle = 'Đồng bộ hóa dữ liệu bảng tính & Phân loại việc khẩn cấp';
  reporter.assert({
    description: 'Bảo toàn nguyên vẹn chuỗi tiếng Việt có dấu và ký tự đặc biệt',
    expected: vietnameseTitle,
    actual: sanitizeTextWithLeadingZeros(vietnameseTitle)
  });

  // Số điện thoại giữ số 0 đầu
  const rawPhone = '0987654321';
  reporter.assert({
    description: 'Bảo toàn số điện thoại giữ nguyên chữ số 0 ở đầu dưới dạng chuỗi Text',
    expected: '0987654321',
    actual: sanitizeTextWithLeadingZeros(rawPhone)
  });

  // Khoảng trắng thừa
  const rawSpaced = '   Công việc cần làm   ';
  reporter.assert({
    description: 'Tự động cắt bỏ khoảng trắng thừa ở hai đầu chuỗi',
    expected: 'Công việc cần làm',
    actual: sanitizeTextWithLeadingZeros(rawSpaced)
  });

  // Anti-Formula Injection test
  const dangerousInputs = [
    '=SUM(A1:A10)',
    '+12345678',
    '-cmd| /C calc',
    '@HYPERLINK("http://evil.com")'
  ];
  const sanitizedOutputs = dangerousInputs.map(sanitizeFormulaInjection);
  reporter.assert({
    description: 'Bảo vệ chống Formula Injection: Tự động thêm dấu nháy đơn vào trước chuỗi bắt đầu bằng =, +, -, @',
    expected: [
      "'=SUM(A1:A10)",
      "'+12345678",
      "'-cmd| /C calc",
      "'@HYPERLINK(\"http://evil.com\")"
    ],
    actual: sanitizedOutputs
  });

  reporter.printSummary();
  return reporter;
}

if (require.main === module) {
  runDomainTests();
}

module.exports = {
  runDomainTests
};
