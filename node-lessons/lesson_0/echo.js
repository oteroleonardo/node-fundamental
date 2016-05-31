
var http = require('net');
var NL = '\r\n';
var RED = '\033[31m';
var YELLOW = '\033[33m';
var GREEN = '\033[32m';
var BLUE = '\033[34m';
var DEFAULT_COLOR = '\033[39m';
var WELCOME = [
  NL,
  GREEN,
  "     _/  _/    _/_/_/            _/                " + NL,
  "  _/_/_/_/_/  _/        _/_/_/  _/_/_/     _/_/_/  " + NL,
  "   _/  _/    _/_/_/  _/        _/    _/  _/    _/  " + NL,
  "_/_/_/_/_/  _/      _/        _/    _/  _/    _/   " + NL,
  " _/  _/    _/_/_/    _/_/_/  _/    _/   _/_/_/     " + NL,
  NL,
  BLUE,
  "This is an ",
  RED,
  "ECHO ",
  BLUE,
  "service implemented with ",
  GREEN,
  "NODE.JS",
  YELLOW,
  NL + NL
]

var server = http.createServer(function (socket) {
  socket.write(WELCOME.join(''));
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');

