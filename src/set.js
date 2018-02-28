'use strict';

const augment = require('./lib/augment')(Set);
const common = require('./lib/common');
const iterable = require('./lib/iterable');

augment('mempty', () => new Set());
augment('mappend', function mappend(v) {
  this.add(v);
  return this;
});

augment('reduce', iterable.reduce);
augment('map', common.map);
augment('filter', common.filter);
