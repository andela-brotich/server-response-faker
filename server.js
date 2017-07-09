const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler(req, res) {
    res('SImple http reposnse faker');
  }
});

server.route({
  method: 'GET',
  path: '/login',
  handler(req, res) {
    let actor = req.query.actor;
    let redirect_url = req.query.redirect_url;

    let response = res({ghgg: 'tesr'});

    if (redirect_url) {
      response.redirect(redirect_url);
    } else {
      response.code(200);
    }

    return response.type('application/json')
            .header('Set-Cookie', 'jwt-token=sample-token-here;path=/;');
  }
});

// Start the server
server.start( err => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});