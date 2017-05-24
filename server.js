var router     = null,
    express    = require('express'),
    app        = express(),
    //bodyParser = require('body-parser'),
    config     = require('./src/config'),
    cfg        = config.express;





app.use(function(req, res, next) {
    var httpHeaders = require('./src/express-http-headers');
    for (var k in httpHeaders) {
        res.setHeader(k, httpHeaders[k]);
    }
    res.removeHeader('X-Powered-By'); // good practice
    return next();
});
app.use(express.static(__dirname + '/html'));

// api/ routing
router = express.Router();

router.get('/', function(req, res){
    res.json({
        path: '/',
        error: false,
        message: 'Application ' + cfg.appname + ' is up on port ' + cfg.port
    });
});

// start
app.use('/api', router); // API only
app.listen(cfg.port);

// console.info while running
console.info(cfg.appname + ' is running on port ' + cfg.port);
console.info('Open: http://127.0.0.1:' + cfg.port +'/');
