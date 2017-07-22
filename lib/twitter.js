const config = require('config');
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: config.get('twitter.consumer_key'),
    consumer_secret: config.get('twitter.consumer_secret'),
    bearer_token: config.get('twitter.bearer_token')
});

function getRetweetsPage(id) {
    return new Promise((resovlve, reject) => {
        client.get(`/statuses/retweets/${id}`, (error, retweets, response) => {
            if (error) reject(error);

            resovlve({
                retweets,
                response
            });
        });
    });
}

/**
 * Gets a list of all users who retweeted the specified tweet
 *
 * @param {string} id the tweet ID
 * @returns {string[]} user IDs of all retweeters of a tweet
 */
async function getAllRetweeters(id) {
    console.log('I made it in getAllRetweeters');
    let retweeters = [];
    let cursor = '-1';
    while (cursor !== '0') {
        let data = await _getCursoredRetweets(id, cursor);
        retweeters = retweeters.concat(data.ids);
        cursor = data.next_cursor;
        console.log(cursor);
    }
    return retweeters;
}

function _getCursoredRetweets(id, cursor=-1) {
    return client.get('statuses/retweeters/ids', {
        count: 100,
        cursor,
        id,
        stringify_ids: true
    }).then(data => {
        return {
            ids: data.ids,
            next_cursor: data.next_cursor_str
        };
    });
}

/**
 * pruneRetweets
 *
 * @param {Object[]} retweets raw retweet objects from Twitter API
 * @returns {Object[]} pruned retweet objects
 */
function pruneRetweets(retweets) {
    let pruned = [];
    retweets.forEach(retweet => {
        pruned.push({
            id: retweet.id_str,
            name: retweet.user.name,
            screen_name: retweet.screen_name
        });
    });
}


module.exports = {
    getRetweetsPage,
    getAllRetweeters
};
