require('./../../src/sign-test')(__filename);

var config = require('./../../src/config');

describe('Config', function () {

    it('is and object', function () {
        expect(typeof config).toBe('object');
        expect(typeof config.package).toBe('object');
        expect(typeof config.package).toBe('object');
        expect(typeof config.app.client).toBe('object');
        expect(typeof config.app.url).toBe('object');
    });

    it('default/fall-back variables', function () {
        expect(typeof config.package.name).not.toBe('undefined');
        expect(typeof config.package.version).not.toBe('undefined');
        expect(typeof config.app.client.Secret).not.toBe('undefined');
        expect(typeof config.app.client.Secret).toBe('string');
        expect(config.app.client.Secret).toBe('is-not-defined');
        expect(config.package.name).toBe('OneForShaun');
        expect(config.package.version).toBe('0.0.1');
    });

    it('default/fall-back NODE_ENV', function () {
        expect(config.node_env).toBe('test'); // set my jasmine
    });

    it('revalidate ttl', function () {
        expect(config.oAuthRevalidateTTL).toBe(60); // default 1 min
    });

    it('API values', function () {

        expect(config.app.client.ID).toBe('coding_test');

        expect(config.app.url.Base).toBe('https://staging-auth.wallstreetdocs.com');
        expect(config.app.url.Authorization).toBe('/oauth/authorize');
        expect(config.app.url.Token).toBe('/oauth/token');
        expect(config.app.url.Callback).toBe('http://localhost:' + config.express.port);

        expect(config.cookiePrefix()).toBe('myapp');
        expect(config.cookieUniqueWPrefix().substr(0, 6)).toBe('myapp-');
        expect(config.cookieUniqueWPrefix().length).toBe(38);

        expect(config.name).toBe('config');
        expect(config.version).toBe('0.0.1');
        expect(config.published).toBe('2017-05-18');
        expect(config.md5).toBe('fa63e4feeb64686b758ebc90b0a5ced9');
    });
});


