require('./../../src/sign-test')(__filename);

var reflect = require('./../../src/reflect');

function NamedObject () {
    this.internalMethod = function() {

    };
}
function namedFunction() {

}

describe('Can tell type', function () {
    it('of primitives', function () {
        expect(reflect(1).type).toBe('number');
        expect(reflect(1).name).toBe('');
        expect(reflect('Hello World!').type).toBe('string');
        expect(reflect(true).type).toBe('boolean');
        expect(reflect(true).name).toBe('');
        expect(reflect(null).type).toBe('null');
        expect(reflect(null).name).toBe('');
    });
    it('of arrays', function () {
        expect(reflect(new Array(12, 34, 56, 78)).type).toBe('object');
        expect(reflect(new Array(12, 34, 56, 78)).name).toBe('Array');
        expect(reflect([12, 34, 56, 78]).type).toBe('object');
        expect(reflect([12, 34, 56, 78]).name).toBe('Array');
    });
    it('of generic objects', function () {
        expect(reflect({ hello: 'World'}).type).toBe('object');
        expect(reflect({ hello: 'World'}).name).toBe('');
    });
    it('of named objects with methods', function () {
        expect(reflect((new NamedObject())).type).toBe('object');
        expect(reflect((new NamedObject())).name).toBe('NamedObject');
        expect(reflect((new NamedObject().internalMethod)).type).toBe('function');
        expect(reflect((new NamedObject().internalMethod)).name).toBe('');
    });
    it('of named functions', function () {
        expect(reflect(namedFunction).type).toBe('function');
        expect(reflect(namedFunction).name).toBe('namedFunction');
    });
    it('of anonymous functions', function () {
        expect(reflect(function() { }).type).toBe('function');
        expect(reflect(function() { }).name).toBe('');
    });
});


