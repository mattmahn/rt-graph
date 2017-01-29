let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');

let api = require('./lib/api');

const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
