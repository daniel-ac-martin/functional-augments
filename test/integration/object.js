'use strict';

require('../../');

describe('Object', () => {
  describe('.reduce()', () => {
    const object = {
      one: 1,
      two: 2,
      three: 3
    };

    it('Is NOT enumerable', () => Object.prototype.propertyIsEnumerable('reduce').should.equal(false));
    it('Is a method', () => (typeof object.reduce).should.equal('function'));
    it('Takes two argument', () => object.reduce.should.have.lengthOf(2));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(object.reduce).to.throw());
      it('Throws a ReferenceError', () => expect(object.reduce).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => object.reduce(true)).to.throw());
      it('Throws a TypeError', () => expect(() => object.reduce(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = object.reduce((acc, v) => acc + v);
      });

      it('Reduces the object', () => result.should.equal(6));
    });

    describe('When called with a function argument and an initial value', () => {
      let result;

      before(() => {
        result = object.reduce((acc, v, k) => acc + k + v, 'ZERO');
      });

      it('Reduces the object', () => result.should.equal('ZEROone1two2three3'));
    });
  });

  describe('.map()', () => {
    const object = {
      one: 1,
      two: 2,
      three: 3
    };

    it('Is NOT enumerable', () => Object.prototype.propertyIsEnumerable('map').should.equal(false));
    it('Is a method', () => (typeof object.map).should.equal('function'));
    it('Takes one argument', () => object.map.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(object.map).to.throw());
      it('Throws a ReferenceError', () => expect(object.map).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => object.map(true)).to.throw());
      it('Throws a TypeError', () => expect(() => object.map(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = object.map((v, k) => k + (v + 1));
      });

      it('Returns an object', () => (typeof result).should.equal('object'));
      it('Returns a new object', () => result.should.not.equal(object));
      it('Returns a new object with the function applied to each property', () => result.should.deep.equal({
        one: 'one2',
        two: 'two3',
        three: 'three4'
      }));
    });
  });

  describe('.filter()', () => {
    const object = {
      one: 1,
      two: 2,
      three: 3
    };

    it('Is NOT enumerable', () => Object.prototype.propertyIsEnumerable('filter').should.equal(false));
    it('Is a method', () => (typeof object.filter).should.equal('function'));
    it('Takes one argument', () => object.filter.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(object.filter).to.throw());
      it('Throws a ReferenceError', () => expect(object.filter).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => object.filter(true)).to.throw());
      it('Throws a TypeError', () => expect(() => object.filter(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = object.filter((v, k) => (v % 2 === 0) && k === 'two');
      });

      it('Returns an object', () => (typeof result).should.equal('object'));
      it('Returns a new object', () => result.should.not.equal(object));
      it('Returns a filtered object', () => result.should.deep.equal({
        two: 2
      }));
    });
  });
});
