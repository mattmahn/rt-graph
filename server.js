const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const stylus = require('stylus');

const api = require('./lib/api');

const PORT = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(stylus.middleware(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  // eslint-disable-line
});
