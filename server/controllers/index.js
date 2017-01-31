var twitterUtil = require('../utility/util-twtr.js');
var havenUtil = require('../utility/util-haven.js');
var Promise = require('bluebird');

var Score = require('../db/index.js').Score;

var getTweetsAsync = Promise.promisify(twitterUtil.getTweets, {context: twitterUtil, multiArgs: true});

module.exports = {
  getAnalysis: function(req, res, next) {
    // Using hardcoded twitter handle for testing purposes, default currently pulls 5 most recent tweets
    let twitterHandle = 'TweetsByTutt';
    getTweetsAsync(twitterHandle)
    .spread((data, response) => {
      let tweetString = twitterUtil.getTweetString(data);
      return Score.create({twitterHandle: twitterHandle, numTweets: data.length, tweetText: tweetString});
      // res.status(200).json(data);
    })
    .then((newScore) => {
      console.log(newScore);
      res.status(200).json(newScore);
    })
    .catch((err) => {
      console.error('Analysis error ', err);
      res.status(404).end();
    });
  },

  getRequestToken: function(req, res, next) {
    twitterUtil.getRequestToken(req, res);
  },

  getAccessToken: function(req, res, next) {
    // Receives callback that contains oAuth verifier
    // Pull verifier from query parameters
    // Send oAuth verifier through utility function and user promises to verify consumer keys
    let oAuthVerifier = req.query.oauth_verifier;
    twitterUtil.getAccessToken(req, res, oAuthVerifier);
  }

};