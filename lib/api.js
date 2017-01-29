let express = require('express');

let router = express.Router();

// TODO
router.get('/hi', (req, res) => {
  res.send('Greetings');
});

module.exports = router;
