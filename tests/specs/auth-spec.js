require('./../../src/sign-test')(__filename);

var auth = require('./../../src/auth');

describe('Auth', function () {
    it('is and object and implements interfaces', function () {
        expect(auth.name).not.toBe('undefined');
        expect(auth.version).not.toBe('undefined');
        expect(auth.published).not.toBe('undefined');
        expect(auth.md5).not.toBe('undefined');

        expect(auth.name).toBe('auth');
        expect(auth.version).toBe('0.0.1');
        expect(auth.published).toBe('2017-05-18');
        expect(auth.md5).toBe('c1715cc2a27b4599b4dd89405dfbc8af');

        expect(auth.mock).not.toBe('undefined');
        expect(auth.orize).not.toBe('undefined');
        expect(auth.token).not.toBe('undefined');

        expect(typeof auth).toBe('object');
        expect(typeof auth.orize).toBe('function');
        expect(typeof auth.token).toBe('function');
        expect(typeof auth.mock).toBe('function');
        expect(typeof auth.mock()).toBe('boolean');
    });
});

