
exports.index = {
    auth: {
	mode: 'try',
	strategy: 'session'
    },
    handler: function (request, reply) {
	
	if (request.auth.isAuthenticated) {
	    return reply.redirect('/home');
	}
	return reply.view('index');
    }
};

exports.login = {
    auth: {
	mode: 'try',
	strategy: 'session'
    },
    handler: function (request, reply) {
	if (request.auth.isAuthenticated) {
	    return reply.redirect('/home');
	}
	return reply.view('login', {
	    errorMessage: ''
        });
    }
};

exports.register = {
    auth: {
	mode: 'try',
	strategy: 'session'
    },
    handler: function (request, reply) {
	if (request.auth.isAuthenticated) {
	    return reply.redirect('/home');
	}
	return reply.view('register');
    }
};

exports.home = {
    auth: 'session',
    handler: function (request, reply) {
	return reply.view('home', {
	    email: request.auth.credentials.email
	});
    }
};
