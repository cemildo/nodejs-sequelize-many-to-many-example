/**
 * if you want to get more information about facebook user
 * visit this link https://developers.facebook.com/docs/facebook-login/permissions
 * and add scope key below
 */

const facebook = require('../passport/facebook');
const twitter = require('../passport/twitter');
const google = require('../passport/google');

module.exports = function(app){
    // FACEBOOK
    app.get('/auth/facebook', 
            facebook.authenticate('facebook', 
            { scope: 'public_profile,email' }));

    app.get('/auth/facebook/callback',
            facebook.authenticate('facebook', 
                { 
                  successRedirect: '/',
                  failureRedirect: '/login' 
                }
            ));

    // TWITTER
    app.get('/auth/twitter', twitter.authenticate('twitter'));

    app.get('/auth/twitter/callback',
        twitter.authenticate('twitter', { 
             successRedirect: '/',
             failureRedirect: '/login' 
            })); 
            
    // GOOGLE
    app.get('/auth/google',
    google.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
 
    app.get('/auth/google/callback', 
        google.authenticate('google', 
        { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });        
};
