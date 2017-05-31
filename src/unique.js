'use strict';

/**
 * unique string
 * @param mixed  prefix Prefix
 * @returns mixed
 */
module.exports = function unique(prefix) {
    var expected = { 'string' : true, 'number': true };
    prefix = (prefix === null || !expected[typeof prefix]) ? '' : prefix;
    return [
        (prefix === '') ? '' : (prefix + '-'),
        require('md5')(require('uuid').v1())
    ].join('');
};
