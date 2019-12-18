const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth-jwt').GoogleOauthJWTStrategy;
const User = require('./database/models/user');

passport.use(new GoogleStrategy(
    {
        clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
    (accessToken, loginInfo, refreshToken, done) => {
        User.findOrCreate({
            email: loginInfo.email,
        }, (err, user) => done(err, user));
    },
));

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

module.exports = {
    passport,
};
