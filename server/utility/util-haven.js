// Utility functions for sending twitter info through Haven On Demand API
var request = require('request');
var havenAPIKey = require('../config/haven.js');
var Promise = require('bluebird');
var axios = require('axios');

var Score = require('../db/index.js').Score;

module.exports = {
  getSentiment: (twitterHandle, tweets) => {
    axios.get('https://api.havenondemand.com/1/api/sync/analyzesentiment/v2', {
      params: {
        apikey: havenAPIKey['apikey'],
        text: tweets
      }
    })
    .then((response) => {
      Score.update({
        sentimentScore: response.data.sentiment_analysis[0].aggregate.score
      }, {
        where: {
          twitterHandle: twitterHandle
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
};