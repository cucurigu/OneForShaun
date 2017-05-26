var myApp = require('./src/express/app').instance();

myApp.httpHeaders().viewsStatic(__dirname + '/html').apiRoutes('/api').run();

