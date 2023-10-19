const net = require('net');
const client = new net.Socket();

client.connect(8989, '192.168.1.79', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    const receivedData = data.toString().trim();
    console.log('Received: ' + receivedData);

    // Send the received data to the Homebridge plugin
    sendToHomebridgePlugin(receivedData);
});

function sendToHomebridgePlugin(data) {
    // Set up a connection to the Homebridge plugin's IP and port
    const homebridgePluginClient = new net.Socket();
	setTimeout(() => {
		homebridgePluginClient.connect(9000, '127.0.0.1', function() {
			console.log('Connected');
			homebridgePluginClient.write('Hello, server! Love, Client.');
		});
	}, 5000); 
}
