'use strict';

const fixture = require('../../../../products/KD_BAO_GIA_DON_HANG/fixtures/demo_data.json');

const clone = value => JSON.parse(JSON.stringify(value));

function createFixtureRepository(seed = fixture) {
  const data = clone(seed);
  data.GIAO_HANG = [];

  return {
    snapshot() { return clone(data); },
    customers() { return clone(data.KHACH_HANG); },
    products() { return clone(data.SAN_PHAM); },
    quotes() { return clone(data.BAO_GIA); },
    quoteLines() { return clone(data.CHI_TIET_BAO_GIA); },
    orders() { return clone(data.DON_HANG); },
    orderLines() { return clone(data.CHI_TIET_DON_HANG); },
    payments() { return clone(data.THANH_TOAN); },
    shipments() { return clone(data.GIAO_HANG); },
    replace(table, rows) { data[table] = clone(rows); },
    append(table, row) { data[table].push(clone(row)); return clone(row); },
    update(table, predicate, change) {
      const index = data[table].findIndex(predicate);
      if (index < 0) return null;
      data[table][index] = { ...data[table][index], ...clone(change) };
      return clone(data[table][index]);
    }
  };
}

module.exports = { createFixtureRepository };
