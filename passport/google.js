var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '591370138095-0k0b7krc41lipeapg1fjletannct135f.apps.googleusercontent.com',
    clientSecret: 'vx4Jsc4pobbBgrNtnUMWtKJz',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('GOOGLE', accessToken, refreshToken, profile, done);
  }
));

module.exports = passport;