#!/usr/bin/env node

const config = require('config');
const request = require('request');

function getBearerToken() {
    let encConsumerKey = encodeURIComponent(config.get('twitter.consumer_key'));
    let encConsumerSecret =
        encodeURIComponent(config.get('twitter.consumer_secret'));
    let b64Secret =
        Buffer.from(`${encConsumerKey}:${encConsumerSecret}`).toString('base64');

    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: 'https://api.twitter.com/oauth2/token',
            headers: {
                'Authorization': `Basic ${b64Secret}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: 'grant_type=client_credentials'
        }, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return reject(`${response.statusCode}: ${error || body}`);
            }
            body = JSON.parse(body);
            return resolve(body.access_token);
        });
    });
}

getBearerToken().then(bt => {
    console.log(bt); // eslint-disable-line no-console
});
