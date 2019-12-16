const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth-jwt').GoogleOauthJWTStrategy;

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
    (accessToken, loginInfo, refreshToken, done) => {
        const user = {
            username: 'justinyum98',
            password: 'fakepassword',
            email: loginInfo.email,
        };
        return done(null, user);
    },
));

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

module.exports = {
    passport,
};
