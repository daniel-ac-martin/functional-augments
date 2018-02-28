'use strict';

require('../../');

describe('String', () => {
  describe('.reduce()', () => {
    const string = 'foo';

    it('Is NOT enumerable', () => String.prototype.propertyIsEnumerable('reduce').should.equal(false));
    it('Is a method', () => (typeof string.reduce).should.equal('function'));
    it('Takes two argument', () => string.reduce.should.have.lengthOf(2));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(string.reduce).to.throw());
      it('Throws a ReferenceError', () => expect(string.reduce).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => string.reduce(true)).to.throw());
      it('Throws a TypeError', () => expect(() => string.reduce(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = string.reduce((acc, v) => acc + v.toUpperCase());
      });

      it('Reduces the string', () => result.should.equal('fOO'));
    });

    describe('When called with a function argument and an initial value', () => {
      let result;

      before(() => {
        result = string.reduce((acc, v) => acc + v.toUpperCase(), 'x');
      });

      it('Reduces the string', () => result.should.equal('xFOO'));
    });
  });

  describe('.map()', () => {
    const string = 'foo';

    it('Is NOT enumerable', () => String.prototype.propertyIsEnumerable('map').should.equal(false));
    it('Is a method', () => (typeof string.map).should.equal('function'));
    it('Takes one argument', () => string.map.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(string.map).to.throw());
      it('Throws a ReferenceError', () => expect(string.map).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => string.map(true)).to.throw());
      it('Throws a TypeError', () => expect(() => string.map(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = string.map(v => v.toUpperCase());
      });

      it('Returns a string', () => (typeof result).should.equal('string'));
      it('Returns a new string', () => result.should.not.equal(string));
      it('Returns a new string with the function applied to each character', () => result.should.equal('FOO'));
    });
  });

  describe('.filter()', () => {
    const string = '123';

    it('Is NOT enumerable', () => String.prototype.propertyIsEnumerable('filter').should.equal(false));
    it('Is a method', () => (typeof string.filter).should.equal('function'));
    it('Takes one argument', () => string.filter.should.have.lengthOf(1));

    describe('When called with no arguments', () => {
      it('Throws an error', () => expect(string.filter).to.throw());
      it('Throws a ReferenceError', () => expect(string.filter).to.throw(ReferenceError));
    });

    describe('When called with a non-function argument', () => {
      it('Throws an error', () => expect(() => string.filter(true)).to.throw());
      it('Throws a TypeError', () => expect(() => string.filter(true)).to.throw(TypeError));
    });

    describe('When called with a function argument', () => {
      let result;

      before(() => {
        result = string.filter(v => v % 2 === 0);
      });

      it('Returns an string', () => (typeof result).should.equal('string'));
      it('Returns a new string', () => result.should.not.equal(string));
      it('Returns a filtered string', () => result.should.equal('2'));
    });
  });
});
