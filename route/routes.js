var Authent = require('../controllers/authentication');
var Connect = require('../controllers/login');

exports.listRoutes = [
    { method: 'GET', path: '/', config: Connect.index },
    { method: 'GET', path: '/login', config: Connect.login },
    { method: 'GET', path: '/register', config: Connect.register },
    { method: 'GET', path: '/home', config: Connect.home },
    { method: 'POST', path: '/login', config: Authent.login },
    { method: 'GET', path: '/logout', config: Authent.logout },
    { method: 'POST', path: '/register', config: Authent.register }
];
