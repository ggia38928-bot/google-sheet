/**
 * Pure calculation functions for F01: DaysLate, Overdue count, Completion rate, and KPIs.
 */

const { TaskStatus, EisenhowerQuadrant } = require('./types');

/**
 * Normalizes a date to midnight timestamp for date-only comparisons.
 */
function toMidnightTimestamp(dateInput) {
  if (!dateInput) return null;
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/**
 * Calculates days difference between two dates: date1 - date2.
 * Positive if date1 is after date2.
 */
function diffDays(date1, date2) {
  const ms1 = toMidnightTimestamp(date1);
  const ms2 = toMidnightTimestamp(date2);
  if (ms1 === null || ms2 === null) return 0;
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  return Math.round((ms1 - ms2) / MS_PER_DAY);
}

/**
 * Calculates DaysLate according to formula:
 * =IF(OR(A2="",F2="",G2="CANCELLED"),"",IF(G2="DONE",IF(I2="","",MAX(0,INT(I2)-F2)),MAX(0,TODAY()-F2)))
 * 
 * @param {Object} task
 * @param {string|Date} todayDate - Current date for evaluation
 * @returns {number|null} Days late or null if not applicable
 */
function calculateDaysLate(task, todayDate = new Date()) {
  if (!task.Title || !task.DueDate || task.Status === TaskStatus.CANCELLED) {
    return null;
  }

  if (task.Status === TaskStatus.DONE) {
    if (!task.CompletedAt) return null;
    const diff = diffDays(task.CompletedAt, task.DueDate);
    return Math.max(0, diff);
  }

  // TODO or DOING
  const diff = diffDays(todayDate, task.DueDate);
  return Math.max(0, diff);
}

/**
 * Calculates all KPIs for a collection of tasks.
 * 
 * @param {Array<Object>} tasks - List of task records
 * @param {string|Date} todayDate - Reference evaluation date
 * @returns {Object} KPI summary metrics
 */
function calculateTaskKPIs(tasks, todayDate = new Date()) {
  const activeTasks = tasks.filter(t => !t.Archived);
  const totalTasks = activeTasks.length;

  let completedCount = 0;
  let cancelledCount = 0;
  let openCount = 0; // TODO + DOING
  let overdueCount = 0;
  let totalDaysLate = 0;

  const todayMs = toMidnightTimestamp(todayDate);

  const eisenhower = {
    [EisenhowerQuadrant.Q1]: 0,
    [EisenhowerQuadrant.Q2]: 0,
    [EisenhowerQuadrant.Q3]: 0,
    [EisenhowerQuadrant.Q4]: 0
  };

  for (const t of activeTasks) {
    const status = t.Status || TaskStatus.TODO;

    if (status === TaskStatus.DONE) {
      completedCount++;
    } else if (status === TaskStatus.CANCELLED) {
      cancelledCount++;
    } else if (status === TaskStatus.TODO || status === TaskStatus.DOING) {
      openCount++;

      // Overdue check: DueDate exists, DueDate < today, and status is open
      if (t.DueDate) {
        const dueMs = toMidnightTimestamp(t.DueDate);
        if (dueMs !== null && dueMs < todayMs) {
          overdueCount++;
        }
      }
    }

    // Days late accumulation
    const daysLate = calculateDaysLate(t, todayDate);
    if (daysLate !== null && daysLate > 0) {
      totalDaysLate += daysLate;
    }

    // Eisenhower quadrant breakdown (for active, non-cancelled tasks)
    if (status !== TaskStatus.CANCELLED) {
      const isImportant = Boolean(t.Important);
      const isUrgent = Boolean(t.Urgent);
      if (isImportant && isUrgent) {
        eisenhower[EisenhowerQuadrant.Q1]++;
      } else if (isImportant && !isUrgent) {
        eisenhower[EisenhowerQuadrant.Q2]++;
      } else if (!isImportant && isUrgent) {
        eisenhower[EisenhowerQuadrant.Q3]++;
      } else {
        eisenhower[EisenhowerQuadrant.Q4]++;
      }
    }
  }

  // Completion rate: completed / (total - cancelled); 0 if denominator <= 0
  const nonCancelledCount = totalTasks - cancelledCount;
  const completionRate = nonCancelledCount > 0 
    ? Number((completedCount / nonCancelledCount).toFixed(4))
    : 0.0;

  return {
    totalTasks,
    completedCount,
    cancelledCount,
    openCount,
    overdueCount,
    totalDaysLate,
    completionRate, // 0.0 to 1.0 (e.g. 0.5 = 50.0%)
    completionRatePercent: `${(completionRate * 100).toFixed(1)}%`,
    eisenhower
  };
}

module.exports = {
  toMidnightTimestamp,
  diffDays,
  calculateDaysLate,
  calculateTaskKPIs
};
