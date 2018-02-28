'use strict';

require('../../');

describe('Map', () => {
  describe('.reduce()', () => {
    const map = new Map([
      ['one', 1],
      ['two', 2],
      ['three', 3]
    ]);

    it('Is NOT enumerable', () => Map.prototype.propertyIsEnumerable('reduce').should.equal(false));
    it('Is a method', () => (typeof map.reduce).should.equal('function'));
    it('Takes two argument', () => map.reduce.should.have.lengthOf(2));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(map.reduce).to.throw());
      it('Throws a ReferenceError', () => expect(map.reduce).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => map.reduce(true)).to.throw());
      it('Throws a TypeError', () => expect(() => map.reduce(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = map.reduce((acc, v) => acc + v);
      });

      it('Reduces the Map', () => result.should.equal(6));
    });

    describe('When called with a function argument and an initial value', () => {
      let result;

      before(() => {
        result = map.reduce((acc, v, k) => acc + k + v, 'ZERO');
      });

      it('Reduces the Map', () => result.should.equal('ZEROone1two2three3'));
    });
  });

  describe('.map()', () => {
    const map = new Map([
      ['one', 1],
      ['two', 2],
      ['three', 3]
    ]);

    it('Is NOT enumerable', () => Map.prototype.propertyIsEnumerable('map').should.equal(false));
    it('Is a method', () => (typeof map.map).should.equal('function'));
    it('Takes one argument', () => map.map.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(map.map).to.throw());
      it('Throws a ReferenceError', () => expect(map.map).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => map.map(true)).to.throw());
      it('Throws a TypeError', () => expect(() => map.map(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = map.map((v, k) => k + (v + 1));
      });

      it('Returns a Map', () => (result instanceof Map).should.equal(true));
      it('Returns a new Map', () => result.should.not.equal(map));
      it('Returns a new Map with the function applied to each property', () => {
        result.get('one').should.equal('one2');
        result.get('two').should.equal('two3');
        result.get('three').should.equal('three4');
      });
    });
  });

  describe('.filter()', () => {
    const map = new Map([
      ['one', 1],
      ['two', 2],
      ['three', 3]
    ]);

    it('Is NOT enumerable', () => Map.prototype.propertyIsEnumerable('filter').should.equal(false));
    it('Is a method', () => (typeof map.filter).should.equal('function'));
    it('Takes one argument', () => map.filter.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(map.filter).to.throw());
      it('Throws a ReferenceError', () => expect(map.filter).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => map.filter(true)).to.throw());
      it('Throws a TypeError', () => expect(() => map.filter(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = map.filter((v, k) => (v % 2 === 0) && k === 'two');
      });

      it('Returns a Map', () => (result instanceof Map).should.equal(true));
      it('Returns a new Map', () => result.should.not.equal(map));
      it('Returns a filtered Map', () => {
        should.equal(result.get('one'), undefined);
        should.equal(result.get('two'), 2);
        should.equal(result.get('three'), undefined);
      });
    });
  });
});
