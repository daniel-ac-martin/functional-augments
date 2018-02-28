'use strict';

module.exports = o => (p, m) =>
  Object.defineProperty(o.prototype, p, {
    configuable: true,
    enumerable: false,
    value: m,
    writable: true
  });
