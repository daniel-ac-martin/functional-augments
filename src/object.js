'use strict';

const augment = require('./lib/augment')(Object);
const common = require('./lib/common');

augment('mempty', () => ({}));
augment('mappend', function mappend(v, k) {
  this[k] = v;
  return this;
});

augment('reduce', function reduce(f, init) {
  if (f === undefined) {
    throw new ReferenceError('Missing argument, f');
  } else if (typeof f !== 'function') {
    throw new TypeError('Argument is not a function');
  }

  const reducer = (acc, cur) => f(acc, this[cur], cur);

  let keys = Object.keys(this);

  if(init === undefined) {
    init = this[keys.shift()];
  }

  return keys.reduce(reducer, init);
});

augment('map', common.map);
augment('filter', common.filter);
