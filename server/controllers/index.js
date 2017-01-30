var twitterUtil = require('../utility/util-twtr.js');
var havenUtil = require('../utility/util-haven.js');
var Promise = require('bluebird');

var getTweetsAsync = Promise.promisify(twitterUtil.getTweets, {context: twitterUtil, multiArgs: true});

module.exports = {
  getAnalysis: function(req, res, next) {
    // Using hardcoded twitter handle for testing purposes, default currently pulls 5 most recent tweets
    getTweetsAsync('TweetsByTutt')
    .spread((data, response) => {
      res.status(200).json(data);
    })
    .catch((err) => {
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