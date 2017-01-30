// Utility functions for pulling messages from twitter API
var request = require('request');
var axios = require('axios');
var twitterAccessTokens = require('../config/twitter.js');
var Promise = require('bluebird');

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
  consumerKey: twitterAccessTokens['consumer_key'],
  consumerSecret: twitterAccessTokens['consumer_secret'],
  callback: 'http://127.0.0.1:3000/oauth'
});

var twtrGetReqTokenAsync = Promise.promisify(twitter.getRequestToken, {context: twitter, multiArgs: true});
var twtrGetAccessTokenAsync = Promise.promisify(twitter.getAccessToken, {context: twitter, multiArgs: true});
var twtrVerifyCredentialsAsync = Promise.promisify(twitter.verifyCredentials, {context: twitter, multiArgs: true});

module.exports = {
  getTweets: function(username) {
    
    
  },

  getRequestToken: function(req, res) {

    twtrGetReqTokenAsync()
    .spread((requestToken, requestTokenSecret, results) => {
      twitter['requestToken'] = requestToken;
      twitter['requestTokenSecret'] = requestTokenSecret;
      let url = twitter.getAuthUrl(requestToken);
      console.log('URL', url);
      // return axios.get(url).then((resp) => {

      // });
      res.redirect(url);
    })
    .then((response) => {
      console.log('REDIRECTION');
      res.status(200).end('successful redirection');
    })
    .catch((err) => {
      console.error('Request Token Error');
    });

  },

  getAccessToken: function(req, res, oAuthVerifier) {
    
    twtrGetAccessTokenAsync(requestToken, requestTokenSecret, oAuthVerifier)
    .spread((accessToken, accessTokenSecret, results) => {
      console.log(accessToken);
      console.log(accessTokenSecret);
      console.log(results);
      return twtrVerifyCredentialsAsync(accessToken, accessTokenSecret, results);
    })
    .spread((data, response) => {
      console.log(data['screen_name']);
    })
    .catch((err) => {
      console.error('twitter request token error', err);
      return err;
    });
  }
};