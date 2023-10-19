let net = require('net');
let client = new net.Socket();

client.connect(8989, '192.168.1.79', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on("error", (error) => {
    console.log(`Socket Error: ${error.message}`);
});

// client.on('close', function() {
// 	console.log('Connection closed');
// });

