var twitter = require('../utility/util-twtr.js');
var haven = require('../utility/util-haven.js');

module.exports = {
  getAnalysis: function(req, res, next) {
    // Control get requests 
      // Ping twitter API for tweets (save info in database?)
      // Run sentiment analysis via HavenOD API
    // Respond with sentiment
    res.status(200).end();

  }
};