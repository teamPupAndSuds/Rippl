// Utility functions for pulling messages from twitter API
var request = require('request');
var axios = require('axios');
var twitterAccessTokens = require('../config.twitter.js');

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
  consumerKey: 'your consumer Key',
  consumerSecret: 'your consumer secret',
  callback: 'http://yoururl.tld/something'
});

module.exports = {
  getTweets: function() {
    axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
      'screen_name': 'TweetsByTutt',
      count: 10,
      headers: {}
    }).then(function(json) {
      console.log('JSON received');
      console.log(json);
    }).catch(function(err) {
      console.log('Twitter API call FAILURE');
      console.error(err);
    });
  }
};