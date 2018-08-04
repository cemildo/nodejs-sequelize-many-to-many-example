// TODO: goto to twitters developer pages adn create an app get
// consumerKey and consumerSecret and replace them below

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const config = require('../config');

passport.use(new TwitterStrategy({
    consumerKey: 'TWITTER_CONSUMER_KEY',
    consumerSecret: 'TWITTER_CONSUMER_SECRET',
    callbackURL: `${config.host}:${config.port}/auth/twitter/callback`
  },
  function(token, tokenSecret, profile, done) {
     console.log('TWITTER', token, tokenSecret, profile, done);
  }
));

module.exports = passport;