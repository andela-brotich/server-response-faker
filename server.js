const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/',
  handler(req, res) {
    res({
      message: 'Welcome to request server faker'
    });
  }
});

// Start the server
server.start((error) => {
  if (error) {
    throw error;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
