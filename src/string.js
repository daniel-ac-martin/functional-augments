'use strict';

const augment = require('./lib/augment')(String);
const common = require('./lib/common');
const iterable = require('./lib/iterable');

augment('mempty', () => '');
augment('mappend', function mappend(v) {
  return this + v;
});

augment('reduce', iterable.reduce);
augment('map', common.map);
augment('filter', common.filter);
