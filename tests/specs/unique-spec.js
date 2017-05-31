require('./../../src/sign-test')(__filename);

var udf, unq = require('./../../src/unique');

describe('unique', function () {

    var id = {
        one: unq(),
        two: unq(),
        three: unq()
    };

    it('just ids', function () {
        expect(typeof id.one).toBe('string');
        expect(typeof id.two).toBe('string');
        expect(typeof id.three).toBe('string');

        expect(id.one.length).toBe(32);
        expect(id.two.length).toBe(32);
        expect(id.three.length).toBe(32);

        expect(id.one).not.toBe(id.two);
        expect(id.three).not.toBe(id.two);
        expect(id.one).not.toBe(id.three);
    });

    var withPrefix = {
        empty: {
            generated: '',
            prefix: null
        },
        str: {
            generated: '',
            prefix: 'mine'
        },
        num: {
            generated: '',
            prefix: 3456
        },
    };

    withPrefix.empty.generated = unq(withPrefix.empty.prefix);
    withPrefix.str.generated = unq(withPrefix.str.prefix);
    withPrefix.num.generated = unq(withPrefix.num.prefix);

    it('with prefix', function () {

        expect(typeof withPrefix.empty.generated).toBe('string');
        expect(withPrefix.empty.generated.length).toBe(32);

        expect(typeof withPrefix.str.generated).toBe('string');
        expect(withPrefix.str.generated.length).toBe(37);
        expect(withPrefix.str.generated.substr(0, 5)).toBe('mine-');

        expect(typeof withPrefix.num.generated).toBe('string');
        expect(withPrefix.num.generated.length).toBe(37);
        expect(withPrefix.num.generated.substr(0, 5)).toBe('3456-');

    });
});