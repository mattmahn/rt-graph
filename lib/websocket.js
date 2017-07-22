const WebSocket = require('ws');

module.exports = function(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        /*
         * keep alive good connections
         */
        ws.isAlive = true;
        ws.on('pong', function hearbeat() {
            this.isAlive = true;
        });

        ws.on('message', message => {
            console.log(`received: ${message}`);
        });
    });

    /*
     * ping websocket clients to detect dead connections
     */
    setInterval(() => {
        wss.clients.forEach(ws => {
            if (!ws.isAlive)
                return ws.terminate();

            ws.isAlive = false;
            ws.ping('', false, true);
        });
    }, 30000);
};
