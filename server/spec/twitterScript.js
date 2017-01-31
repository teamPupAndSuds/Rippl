var axios = require('axios');

// Run this file using node to pull tweets from the 5 twitter handles below and store it in the database
// Oprah
// realDonaldTrump
// jk_rowling
// AnnaKendrick47
// VancityReynolds

var getOprah = function() {
  axios.get('http://127.0.0.1:3000/analyze', {
    params: {
      handle: 'Oprah'
    }
  });
};

var getRealDonaldTrump = function() {
  axios.get('http://127.0.0.1:3000/analyze', {
    params: {
      handle: 'realDonaldTrump'
    }
  });
};

var getJkRowling = function() {
  axios.get('http://127.0.0.1:3000/analyze', {
    params: {
      handle: 'jk_rowling'
    }
  });
};

var getAnnaKendrick = function() {
  axios.get('http://127.0.0.1:3000/analyze', {
    params: {
      handle: 'AnnaKendrick47'
    }
  });
};

var getRyanReynolds = function() {
  axios.get('http://127.0.0.1:3000/analyze', {
    params: {
      handle: 'VancityReynolds'
    }
  });
};

// Verify current user
axios.get('http://127.0.0.1:3000/verify')
.then(function() {
  return axios.all([getOprah(), getRealDonaldTrump(), getJkRowling(), getAnnaKendrick(), getRyanReynolds()]);
})
.then(axios.spread(function(oprah, trump, jkrowling, anna, ryan) {
  console.log('All requests successful');
}))
.catch(function(err) {
  console.log('Twitter script error ', err);
});