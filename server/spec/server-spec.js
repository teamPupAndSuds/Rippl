/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;
var axios = require('axios');
var {twitter} = require('../utility/util-twtr.js');
var Promise = require('bluebird');


var twtrVerifyCredentialsAsync = Promise.promisify(twitter.verifyCredentials, {context: twitter, multiArgs: true});

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'rippl'
    });
    dbConnection.connect();

    var tablename = 'scores'; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    // dbConnection.query('truncate ' + tablename);
    // dbConnection.query('truncate users');
    // dbConnection.query('truncate sessions', done);

    // Verify user and pull access tokens
    this.timeout(8000);
    axios.get('http://127.0.0.1:3000/testuser')
    .then(function() {
      return axios.get('http://127.0.0.1:3000/verify');
    })
    .then(function() {
      console.log('Test user verified');
      done();
    })
    .catch(function(err) {
      console.error('Test user creation error!', err);
      done();
    });
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should verify a user', function(done) {
    // Post the user to the chat server.
    var accessToken = twitter.accessToken;
    var accessTokenSecret = twitter.accessTokenSecret;
    var results = twitter.results;
    
    twtrVerifyCredentialsAsync(accessToken, accessTokenSecret, results)
    .spread(function(data, response) {
      expect(data).to.not.equal(undefined);
      done();
    });
  });

  it('Should insert posted scores to the DB', function(done) {
    // Post the user to the chat server.
    var twitterHandleTest = 'AnnaKendrick47'; // Feel free to change this for funsies
    this.timeout(8000);

    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3000/analyze?handle=' + twitterHandleTest,
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'GET',
        uri: 'http://127.0.0.1:3000/rippl/user/RippleMaster',
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM scores';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have more than one result:
          expect(results.length).to.not.equal(0);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].twitterHandle).to.equal(twitterHandleTest);

          done();
        });
      });
    });
  });

  // it('Should output all messages from the DB', function(done) {
  //   // Let's insert a message into the db
  //   var queryString = 'insert into messages (id_users, message, roomname) values (?,?,?)';
  //   var queryArgs = [1, 'Men like you can never change!', 'main'];
  //   // TODO - The exact query string and query args to use
  //   // here depend on the schema you design, so I'll leave
  //   // them up to you. */

  //   dbConnection.query(queryString, queryArgs, function(err) {
  //     if (err) { throw err; }

  //     // Now query the Node chat server and see if it returns
  //     // the message we just inserted:
  //     request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //       var messageLog = JSON.parse(body);
  //       expect(messageLog.results[0].message).to.equal('Men like you can never change!');
  //       expect(messageLog.results[0].roomname).to.equal('main');
  //       done();
  //     });
  //   });
  // });
});
