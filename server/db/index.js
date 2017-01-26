var Sequelize = require('sequelize');
var db = new Sequelize('rippl', 'root', '');

// we define the models we need using js
var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Score = db.define('Score', {
  twitterHandle: Sequelize.STRING,
  numTweets: Sequelize.INTEGER,
  sentimentScore: Sequelize.FLOAT,
});

// puts a UserId column on each Score instance
// also gives us the `.setUser` method available
// after creating a new instance of Score
Score.belongsTo(User);

// enables bi-directional associations between Users and Scores
User.hasMany(Score);


User.sync();
Score.sync();
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and Score tables and make new ones.

exports.User = User;
exports.Score = Score;