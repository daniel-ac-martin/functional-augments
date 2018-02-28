'use strict';

module.exports = {
  reduce: function reduce(f, init) {
    if (f === undefined) {
      throw new ReferenceError('Missing argument, f');
    } else if (typeof f !== 'function') {
      throw new TypeError('Argument is not a function');
    }

    const iter = this[Symbol.iterator]();

    let acc = init === undefined ? iter.next().value[1] : init;
    let next = iter.next();

    while (!next.done) {
      acc = f(acc, next.value[1], next.value[0]);
      next = iter.next();
    }

    return acc;
  }
};
