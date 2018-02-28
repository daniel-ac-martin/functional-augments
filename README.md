Functional Augments for ES6 objects
===================================
[![Build Status][ci-badge]][ci]

This package augments the prototypes of the following collections in ES6 with
methods for functional programming similar to Arrays:

* Map
* Object
* Set
* String

Currently the following methods are provided:

* filter()
* map()
* reduce()

Functions provided to methods on keyed collections take an optional third
parameter for the key.


Installation
------------

```bash
$ npm install --save functional-augments
```


Usage
-----

```js
'use strict';

require('functional-augments');

const object = {
  one: 1,
  two: 2,
  three: 3
};

const reduction = object.reduce((acc, v) => acc + v);

console.log(reduction); // 6
```

[ci]: https://travis-ci.org/daniel-ac-martin/functional-augments
[ci-badge]: https://travis-ci.org/daniel-ac-martin/functional-augments.svg?branch=master
