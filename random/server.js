var WebSocketServer = require('ws').Server

var wss = new WebSocketServer( { port: 8080 } );

wss.on('connection', function(ws) {
  console.log('Connected to server');  
  
  var clientRandomNumberUpdater;
  var sendRandomNumbers = function(ws) {
	  if(ws.readyState == 1) {
	  	var randomNum = Math.floor(Math.random() * 11);  
	  	ws.send(randomNum.toString());	  
	  }
  }
  clientRandomNumberUpdater = setInterval(function(){
	  sendRandomNumbers(ws);
  }, 1000);  
  
  ws.on('message', function(message){
	  sendRandomNumbers(ws);
  });
});









