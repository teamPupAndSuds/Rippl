var twitter = require('../utility/util-twtr.js');
var haven = require('../utility/util-haven.js');

module.exports = {
  getAnalysis: function(req, res, next) {
    // Control get requests 
      // Ping twitter API for tweets (save info in database?)
      // Run sentiment analysis via HavenOD API
    // Respond with sentiment
    var tweets = twitter.getTweets('TweetsByTutt');
    console.log(tweets);
    if (tweets) {
      res.status(200).json(tweets);
    } else {
      res.status(404).end();
    }
  },

  getRequestToken: function(req, res, next) {
    twitter.getRequestToken(req, res);
  },

  getAccessToken: function(req, res, next) {
    // Receives callback that contains oAuth verifier
    // Sent oAuth verifier through utility function and user promises to verify consumer keys
    let oAuthVerifier = req.query.oAuthVerifier;
    console.log(req.query);
    // twitter.getAccessToken(req, res, oAuthVerifier);
  }

};