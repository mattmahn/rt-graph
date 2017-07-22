const express = require('express');
const twitter = require('./twitter');

let router = express.Router();

// TODO
router.get('/hi', (req, res) => {
    res.send('Greetings');
});

router.get('/twitter', async (req, res) => {
    try {
        res.json(await twitter.getAllRetweeters('819714525519872000'));
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
