'use strict';

const augment = require('./lib/augment')(Map);
const common = require('./lib/common');
const keyedIterable = require('./lib/keyed-iterable');

augment('mempty', () => new Map());
augment('mappend', function mappend(v, k) {
  this.set(k, v);
  return this;
});

augment('reduce', keyedIterable.reduce);
augment('map', common.map);
augment('filter', common.filter);
