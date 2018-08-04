 
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { facebook } = require('../config');

passport.use(new FacebookStrategy({
    clientID: facebook.clientID  ,
    clientSecret: facebook.clientSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
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