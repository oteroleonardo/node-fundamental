
var http = require('http');

var PORT = process.env.PORT || 8080;
var HOSTNAME = process.env.HOSTNAME || 'localhost';
var NODE_ENV = process.env.NODE_ENV || 'development';
var counter=0;

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<!DOCTYPE "html">');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>Hello Node Page</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('Hello Node.js ' + counter + ' running as ' + NODE_ENV + '!');
  response.write('</body>');
  response.write('</html>');
  response.end();
  console.log('counter: ' + counter + ' request url: ' + request.url);
  counter++;
});

server.listen(PORT, HOSTNAME);
console.log('Server is listening at PORT:' + PORT);

