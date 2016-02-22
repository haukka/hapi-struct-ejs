var Hapi = require('hapi');
var router = require('./route/routes');

var server = new Hapi.Server();
server.connection({
    port: 3000,
    host: 'localhost',
    labels: ["authent-app"]
});

server.register([require('hapi-auth-cookie'), require('vision')], function (err) {
    if (err) {
        throw err;
    }

    server.auth.strategy('session', 'cookie', {
        password: 'secret',
        cookie: 'session',
        isSecure: false,
        ttl: 24* 60 * 60 * 1000
    });

    server.views({
        engines: {
            ejs: require('ejs')
        },
	relativeTo: __dirname,
	layoutPath: './views/layout',
        path: 'views',
	layout: true
    });
});

server.route(router.listRoutes);

server.start(function(err) {
    if (err) {
	throw err;
    }
    console.log("Hapi start on port: 3000");
});
