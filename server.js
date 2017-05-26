'use strict';

require('./src/express/app').instance()
    .session('my-spa-express4')       // session context
    .middleWare()                     // local stateful store and all
    .httpHeaders()                    // custom headers
    .viewsStatic(__dirname + '/html') // static html w. assets
    .apiRoutes('/api')                // /api for AJAX
    .run();                           // off we go...
