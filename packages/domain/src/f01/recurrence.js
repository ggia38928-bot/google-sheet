/**
 * Recurrence calculation engine with safe month-end policy
 */

const crypto = require('crypto');
const { RecurrenceFrequency } = require('./types');

/**
 * Returns the maximum days in a given month of a given year (1-indexed month: 1=Jan, 12=Dec).
 */
function getDaysInMonth(year, month) {
  // Day 0 of next month is the last day of current month
  return new Date(year, month, 0).getDate();
}

/**
 * Clamps a day-of-month to the maximum valid day for the given year and month.
 */
function clampDayOfMonth(year, month, targetDay) {
  const maxDay = getDaysInMonth(year, month);
  return Math.min(targetDay, maxDay);
}

/**
 * Formats a Date object to YYYY-MM-DD.
 */
function formatDateOnly(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Generates scheduled occurrences for a recurrence rule within a date window.
 * 
 * @param {Object} rule - RecurrenceRule entity
 * @param {string|Date} startDate - Start of calculation window (inclusive)
 * @param {string|Date} endDate - End of calculation window (inclusive)
 * @returns {Array<Object>} Generated occurrences
 */
function calculateRecurrenceOccurrences(rule, startDate, endDate) {
  if (!rule.Active) return [];

  const start = new Date(startDate);
  const end = new Date(endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);

  const occurrences = [];
  const interval = Math.max(1, Number(rule.Interval) || 1);

  if (rule.Frequency === RecurrenceFrequency.DAILY) {
    const current = new Date(start);
    while (current <= end) {
      occurrences.push({
        ID: crypto.randomUUID(),
        RuleID: rule.ID,
        ScheduledDate: formatDateOnly(current),
        TaskID: rule.TaskTemplateID,
        CreatedAt: new Date().toISOString()
      });
      current.setDate(current.getDate() + interval);
    }
  } else if (rule.Frequency === RecurrenceFrequency.WEEKLY) {
    // Weekdays format: e.g. "MON,WED,FRI" or numbers "1,3,5" (0=Sun, 1=Mon, ..., 6=Sat)
    const weekdayMap = { SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6 };
    let allowedDays = [];
    if (rule.Weekdays) {
      allowedDays = rule.Weekdays.split(',').map(d => {
        const trimmed = d.trim().toUpperCase();
        return isNaN(trimmed) ? weekdayMap[trimmed] : Number(trimmed);
      }).filter(d => d !== undefined && !isNaN(d));
    }
    if (allowedDays.length === 0) {
      allowedDays = [start.getDay()]; // default to start day of week
    }

    const current = new Date(start);
    while (current <= end) {
      if (allowedDays.includes(current.getDay())) {
        occurrences.push({
          ID: crypto.randomUUID(),
          RuleID: rule.ID,
          ScheduledDate: formatDateOnly(current),
          TaskID: rule.TaskTemplateID,
          CreatedAt: new Date().toISOString()
        });
      }
      current.setDate(current.getDate() + 1);
    }
  } else if (rule.Frequency === RecurrenceFrequency.MONTHLY) {
    // Target day of month (e.g. 31)
    const targetDay = Number(rule.MonthDay) || start.getDate();

    let curYear = start.getFullYear();
    let curMonth = start.getMonth() + 1; // 1-indexed

    while (true) {
      const validDay = clampDayOfMonth(curYear, curMonth, targetDay);
      const curDate = new Date(curYear, curMonth - 1, validDay);

      if (curDate > end) break;
      if (curDate >= start) {
        occurrences.push({
          ID: crypto.randomUUID(),
          RuleID: rule.ID,
          ScheduledDate: formatDateOnly(curDate),
          TaskID: rule.TaskTemplateID,
          CreatedAt: new Date().toISOString()
        });
      }

      // Increment by interval months
      curMonth += interval;
      while (curMonth > 12) {
        curMonth -= 12;
        curYear += 1;
      }
    }
  }

  return occurrences;
}

module.exports = {
  getDaysInMonth,
  clampDayOfMonth,
  formatDateOnly,
  calculateRecurrenceOccurrences
};
