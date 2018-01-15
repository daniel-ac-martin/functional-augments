Functional Augments for ES6 objects
===================================

This package augments the Object.prototype to provide ES6 objects with methods
for functional programming similar to Arrays. Currently the following methods
are provided:

* filter()
* map()
* reduce()


Installation
------------

```bash
$ npm install --save functional-augments-object
```


Usage
-----

```js
'use strict';

require('functional-augments-object');

const object = {
  one: 1,
  two: 2,
  three: 3
};

const reduction = object.reduce((acc, v) => acc + v);

console.log(reduction); // 6
```
