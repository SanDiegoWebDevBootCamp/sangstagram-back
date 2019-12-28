const { Strategy } = require('passport-google-oauth2');

const createStrategy = (password, findUser) => {
    return new Strategy({
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
        passReqToCallback: true,
    }, (request, accessToken, refreshToken, profile, done) => {
        const userInfo = {
            googleId: profile.id,
        };
        findUser(userInfo, done);
    });
};

module.exports = createStrategy;
