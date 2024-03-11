class RevoXMLSender {
    constructor(url) {
        this.url = url;
        this.socket = new WebSocket(url);
        this.socket.onopen = () => {
            console.log('Connected to server');
        };
        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    sendXML(xmlData) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(xmlData);
            console.log('XML data sent successfully');
        } else {
            console.error('WebSocket is not open');
        }
    }

    close() {
        this.socket.close();
        console.log('Connection closed');
    }
}

class XMLReceiver {
    constructor(url) {
        this.url = url;
        this.socket = new WebSocket(url);
        this.socket.onopen = () => {
            console.log('Connected to server');
        };
        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    receiveXML(callback) {
        this.socket.onmessage = (event) => {
            console.log('Received XML data:', event.data);
            if (callback && typeof callback === 'function') {
                callback(event.data);
            }
        };
    }

    close() {
        this.socket.close();
        console.log('Connection closed');
    }
}

// Example usage
// Sender
const sender = new RevoXMLSender('ws://localhost:3000');
const xmlToSend = '<data>Hello, this is XML data!</data>';
sender.sendXML(xmlToSend);

// Receiver
const receiver = new XMLReceiver('ws://localhost:3000');
receiver.receiveXML((xmlData) => {
    console.log('Received XML:', xmlData);
});
