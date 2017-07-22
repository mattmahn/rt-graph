# rt-graph

Visualize the network of retweeters for any given tweet.

I made this because [Casey Liss][casey] [mentioned][blog] that he wanted some
way to browse the retweeters of his [tweet][]. So I decided to make that.


## Usage

1. Get the ID of the tweet. (It's the 819714525519872000 in
   https://twitter.com/caseyliss/status/819714525519872000)
1. Go to http://mattmahn.github.io/rt-graph
1. Enter the tweet ID
1. Click "Graph!"
1. Be amazed


## Development / Deployment

### Dependencies

- Node ≥8
- Yarn


### Getting Started

1. Fetch the application:
   ```sh
   git clone git@github.com:mattmahn/rt-graph
   cd rt-graph
   yarn install
   ```
1. [Create a new Twitter app](https://apps.twitter.com).
1. Set the consumer key & secret either in `config/local.toml` or as the
   `TWITTER_CONSUMER_KEY` and `TWITTER_CONSUMER_SECRET` environment variables.
1. Get your app's bearer token by running `scripts/fetch_bearer_token.js` and
   set it like above.
1. Start the application: `yarn start`


## TODO

- [ ] Everything.
- [ ] Make sure styling is still pretty
- [ ] Option to only show verified users
- [ ] Open tweet in new tab when clicking on node
- [ ] Show additional meta information about [re]tweets when hovering over
  nodes
- [ ] [Security best practices](http://expressjs.com/en/advanced/best-practice-security.html)
- [ ] [Performance best practices](http://expressjs.com/en/advanced/best-practice-performance.html)


## License

MIT, see LICENSE.


[casey]: https://github.com/cliss
[blog]: https://www.caseyliss.com/2017/1/14/that-escalated-quickly
[tweet]: https://twitter.com/caseyliss/status/819714525519872000
