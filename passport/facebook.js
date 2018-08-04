 
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config');

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID  ,
    clientSecret: config.facebook.clientSecret,
    callbackURL: `${config.host}:${config.port}/auth/facebook/callback`
  },
  function(accessToken, refreshToken, profile, done) {
      console.log('FACEBOOK', accessToken, refreshToken, profile, done);
      /*
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
    */
  }
));

module.exports = passport;