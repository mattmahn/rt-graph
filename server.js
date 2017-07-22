const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const serveStatic = require('serve-static');
const stylus = require('stylus');

const api = require('./lib/api');
const websocket = require('./lib/websocket');

let app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// load Stylus middleware before setting public directory, so the correct CSS is served
app.use(stylus.middleware(path.join(__dirname, 'public/stylesheets')));
app.use(serveStatic(path.join(__dirname, 'public')));

app.use('/api', api);

const server = http.createServer(app);
websocket(server);

server.listen(config.get('server.port'), config.get('server.host'), () => {
    const { address, port } = server.address();
    console.log(`Server is running at http://${address}:${port}`);  // eslint-disable-line
});
