var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { google } = require('../config');
 
passport.use(new GoogleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('GOOGLE', accessToken, refreshToken, profile, done);
  }
));

module.exports = passport;