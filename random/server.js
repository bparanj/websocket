const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  var clientRandomNumberUpdater;
  var sendRandomNumbers = function(ws) {
	var randomNum = Math.floor(Math.random() * 11);  
	ws.send(randomNum.toString());	  
  }
  clientRandomNumberUpdater = setInterval(function(){
	  sendRandomNumbers(ws);
  }, 1000);  
});