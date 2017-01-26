var WebSocketServer = require('ws').Server

var wss = new WebSocketServer( { port: 8080 } );

wss.on('connection', function(ws) {
  console.log('Connected to server');
  var randomNum;  
  
  for (var i = 0; i < 10; i++) {
	// integer between 0 and 10 inclusive
	randomNum = Math.floor(Math.random() * 11);  
	ws.send(randomNum.toString());
  }
});

