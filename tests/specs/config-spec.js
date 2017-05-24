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

    it('API values', function () {

        expect(config.app.client.ID).toBe('coding_test');

        expect(config.app.url.Base).toBe('https://staging-auth.wallstreetdocs.com');
        expect(config.app.url.Authorization).toBe('/oauth/authorize');
        expect(config.app.url.Token).toBe('/oauth/token');
        expect(config.app.url.Callback).toBe('http://localhost:' + config.express.port);

        expect(config.name).toBe('config');
        expect(config.version).toBe('0.0.1');
        expect(config.published).toBe('2017-05-18');
        expect(config.md5).toBe('37ea4a46d5d378b449418534a2569867');
    });
});


