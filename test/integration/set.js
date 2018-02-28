'use strict';

require('../../');

describe('Set', () => {
  describe('.reduce()', () => {
    const set = new Set([1, 2, 3]);

    it('Is NOT enumerable', () => Set.prototype.propertyIsEnumerable('reduce').should.equal(false));
    it('Is a method', () => (typeof set.reduce).should.equal('function'));
    it('Takes two argument', () => set.reduce.should.have.lengthOf(2));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(set.reduce).to.throw());
      it('Throws a ReferenceError', () => expect(set.reduce).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => set.reduce(true)).to.throw());
      it('Throws a TypeError', () => expect(() => set.reduce(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = set.reduce((acc, v) => acc + v);
      });

      it('Reduces the Set', () => result.should.equal(6));
    });

    describe('When called with a function argument and an initial value', () => {
      let result;

      before(() => {
        result = set.reduce((acc, v) => acc + v, 'ZERO');
      });

      it('Reduces the Set', () => result.should.equal('ZERO123'));
    });
  });

  describe('.map()', () => {
    const set = new Set([1, 2, 3]);

    it('Is NOT enumerable', () => Set.prototype.propertyIsEnumerable('map').should.equal(false));
    it('Is a method', () => (typeof set.map).should.equal('function'));
    it('Takes one argument', () => set.map.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(set.map).to.throw());
      it('Throws a ReferenceError', () => expect(set.map).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => set.map(true)).to.throw());
      it('Throws a TypeError', () => expect(() => set.map(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = set.map(v => v + 1);
      });

      it('Returns a Set', () => (result instanceof Set).should.equal(true));
      it('Returns a new Set', () => result.should.not.equal(set));
      it('Returns a new Set with the function applied to each property', () => {
        result.has(1).should.equal(false);
        result.has(2).should.equal(true);
        result.has(3).should.equal(true);
        result.has(4).should.equal(true);
        result.has(5).should.equal(false);
      });
    });
  });

  describe('.filter()', () => {
    const set = new Set([1, 2, 3]);

    it('Is NOT enumerable', () => Set.prototype.propertyIsEnumerable('filter').should.equal(false));
    it('Is a method', () => (typeof set.filter).should.equal('function'));
    it('Takes one argument', () => set.filter.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(set.filter).to.throw());
      it('Throws a ReferenceError', () => expect(set.filter).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => set.filter(true)).to.throw());
      it('Throws a TypeError', () => expect(() => set.filter(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = set.filter(v => v % 2 === 0);
      });

      it('Returns a Set', () => (result instanceof Set).should.equal(true));
      it('Returns a new Set', () => result.should.not.equal(set));
      it('Returns a filtered Set', () => {
        result.has(1).should.equal(false);
        result.has(2).should.equal(true);
        result.has(3).should.equal(false);
      });
    });
  });
});
