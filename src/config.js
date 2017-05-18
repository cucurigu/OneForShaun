'use strict';

/**
 * NVL no value
 * @param mixed val      If not set
 * @param mixed fallback This one is returned
 * @returns mixed
 */
function nvl(val, fallback) {
    return (typeof val === 'undefined') ? fallback : val;
}

module.exports = {
    name: 'config',
    app: {
        client: {
            ID: 'coding_test',
            Secret: nvl(process.env['API_SECRET'], 'is-not-defined')
        },
        url: {
            Base: 'https://staging-auth.wallstreetdocs.com',
            Authorization: '/oauth/authorize',
            Token: '/oauth/token',
            Callback: 'http://localhost:3000'
        }
    },
    version: '0.0.1',
    published: '2017-05-18',
    md5: require('md5-file').sync(__filename)
};

