var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('../config');
 
passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: `${config.host}:${config.port}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('GOOGLE', profile);
  }
));

module.exports = passport;

/**
 * it returns something like, you can use this info to save a user
 * 
 * _json:
   { kind: 'plus#person',
     etag: '"XXXXXXXXXX"',
     gender: 'XXXXXXXXXX',
     objectType: 'person',
     id: 'XXXXXXXXXX',
     displayName: 'XXXXXXXXXX XXXXXXXXXX',
     name: { familyName: 'XXXXXXXXXX', givenName: 'XXXXXXXXXX' },
     url: 'XXXXXXXXXX',
     image:
      { url: 'XXXXXXXXXX',
        isDefault: true },
     isPlusUser: true,
     language: 'XXXXXXXXXX',
     circledByCount: 10,
     verified: false }
 * 
 */