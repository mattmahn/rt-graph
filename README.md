# rt-graph

Visualize the network of retweeters for any given tweet.

I made this because [Casey Liss][casey] [mentioned][blog] that he wanted some
way to browse the retweeters of his [tweet][]. So I decided to make that.

***Turns out Twitter doesn't make the required information available through
their API, so this is dead in the water.***


## Usage

1. Get the ID of the tweet. (It's the 819714525519872000 in
   https://twitter.com/caseyliss/status/819714525519872000)
1. Go to http://mattmahn.github.io/rt-graph
1. Enter the tweet ID
1. Click "Graph!"
1. Be amazed


## Development

### Dependencies

- Node ≥8
- Yarn


### Getting Started

```sh
git clone git@github.com:mattmahn/rt-graph
cd rt-graph
yarn install
yarn run start
```


## TODO

- Everything.
- Only show verified users
- Make sure styling is still pretty


## License

MIT, see LICENSE.


[casey]: https://github.com/cliss
[blog]: https://www.caseyliss.com/2017/1/14/that-escalated-quickly
[tweet]: https://twitter.com/caseyliss/status/819714525519872000
