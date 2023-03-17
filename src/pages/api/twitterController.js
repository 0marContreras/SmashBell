var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'JeCS4DTF2cHcLzJJzWLLIOb2Y',
    consumer_secret: 'pLgTnBOX07nB87hRZNC7gNS6eHfplb6Da9Xzj5gFx6yfVn3w6T',
    access_token_key: '1437909112709332992-yr5z1edtQYS2FLxZHOqvw5vHovlI4S',
    access_token_secret: 'OHiSXtdOT6ZCJI7SYDPqRVChj8xcAd36Zaw3KIVyvhID6'
  });

  export default function handler(req, res) {
   
    client.get('search/tweets', {q: 'MKLeo'}, function(error, tweets, response) {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        // Obtener la URL de cada tweet
        //console.log(response)
        const urls = tweets.statuses.map((tweet) => {
          return `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
        });
        res.status(200).json(urls);
      }
    });
  }