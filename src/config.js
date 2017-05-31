'use strict';

var nvl    = require('./nvl'),
    unique = require('./unique'),
    myport = nvl(process.env['PORT'], 9080);

module.exports = {
    name: 'config',
    package: require('./../package.json'),
    node_env: nvl(process.env['NODE_ENV'], 'development'),
    oAuthRevalidateTTL: nvl(process.env['REVALIDATE_OAUTH'], 60), // 60 secs = 1 min over external oAuth
    app: {
        client: {
            ID: 'coding_test',
            Secret: nvl(process.env['API_SECRET'], 'is-not-defined')
        },
        url: {
            Base: 'https://staging-auth.wallstreetdocs.com',
            Authorization: '/oauth/authorize',
            Token: '/oauth/token',
            Callback: 'http://localhost:' + myport
        }
    },
    express: {
        cookie_prefix: 'myapp',
        cors: true,
        appname: 'MyAPI',
        port: myport
    },
    version: '0.0.1',
    published: '2017-05-18',
    md5: require('md5-file').sync(__filename),
    cookiePrefix: function () { return this.express.cookie_prefix; },
    cookieUniqueWPrefix: function () { return unique(this.cookiePrefix()); }
};

