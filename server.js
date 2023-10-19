const net = require('net');
const client = new net.Socket();

client.connect(8989, '192.168.1.79', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    const receivedData = data.toString().trim();
    console.log('Received: ' + receivedData);
});

