'use strict';

module.exports = {
  map: function map(f) {
    if (f === undefined) {
      throw new ReferenceError('Missing argument, f');
    } else if (typeof f !== 'function') {
      throw new TypeError('Argument is not a function');
    }

    const reducer = (acc, cur, k) => {
      const v = f(cur, k);

      if (v !== undefined) {
        acc = acc.mappend(v, k);
      }

      return acc;
    };

    return this.reduce(reducer, this.mempty());
  },

  filter: function filter(f) {
    if (f === undefined) {
      throw new ReferenceError('Missing argument, f');
    } else if (typeof f !== 'function') {
      throw new TypeError('Argument is not a function');
    }

    return this.map((v, k) => f(v, k) ? v : undefined);
  }
};
