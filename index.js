'use strict';

Object.prototype.reduce = function reduce(f, init) {
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
};

Object.prototype.map = function map(f) {
  if (f === undefined) {
    throw new ReferenceError('Missing argument, f');
  } else if (typeof f !== 'function') {
    throw new TypeError('Argument is not a function');
  }

  const reducer = (acc, cur, k) => {
    const v = f(cur, k);

    if (v !== undefined) {
      acc[k] = v;
    }

    return acc;
  };

  return this.reduce(reducer, {});
};

Object.prototype.filter = function filter(f) {
  if (f === undefined) {
    throw new ReferenceError('Missing argument, f');
  } else if (typeof f !== 'function') {
    throw new TypeError('Argument is not a function');
  }

  return this.map((v, k) => f(v, k) ? v : undefined);
};
