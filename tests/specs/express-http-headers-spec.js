require('./../../src/sign-test')(__filename);

function mockExpressRequest() {
    this.class = 'request';
}

function mockExpressResponse() {
    this.class  = 'response';
    this.lookup = {};
    this.setHeader = function(key, value) {
        this.lookup[key] = value;
    };
    this.getHeader = function(key) {
        return !this.lookup[key] ? null : this.lookup[key];
    };
}

var httpHdrs = null,
    conf     = require('./../../src/config'),
    pckg     = require('./../../package.json'),
    mockRes  = new mockExpressResponse(),
    mockReq  = new mockExpressRequest();

httpHdrs = require('./../../src/express-http-headers')(mockReq, mockRes, function() {});

describe('Expected headers', function () {
    it('are set from config', function () {
        expect(typeof mockRes.getHeader('applicationName')).not.toBe('undefined');
        expect(typeof mockRes.getHeader('applicationVersion')).not.toBe('undefined');
        expect(typeof mockRes.getHeader('Access-Control-Allow-Origin')).not.toBe('undefined');

        expect(mockRes.getHeader('applicationName')).toBe(pckg.name);       // package.json
        expect(mockRes.getHeader('applicationVersion')).toBe(pckg.version); // via config
        expect(mockRes.getHeader('Access-Control-Allow-Origin')).toBe(conf.app.url.Callback);
    });
});


