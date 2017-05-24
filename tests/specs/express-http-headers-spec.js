require('./../../src/sign-test')(__filename);

var httpHdrs = require('./../../src/express-http-headers'),
    pckg     = require('./../../package.json');

describe('Expected headers', function () {
    it('are set from config', function () {
        expect(typeof httpHdrs['applicationName']).not.toBe('undefined');
        expect(typeof httpHdrs['applicationVersion']).not.toBe('undefined');
        expect(typeof httpHdrs['Access-Control-Allow-Origin']).not.toBe('undefined');

        expect(httpHdrs['applicationName']).toBe(pckg.name);       // package.json
        expect(httpHdrs['applicationVersion']).toBe(pckg.version); // via config
        expect(httpHdrs['Access-Control-Allow-Origin']).toBe('*');
    });
});


