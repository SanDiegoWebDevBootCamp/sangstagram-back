const passport = require('passport');
const { generateJwt } = require('./token');
const User = require('../database/models/user');
const initializeStrategies = require('./strategies');

const scope = [
    'profile',
    'email',
];

const findUser = (userInfo, done) => {
    User.findOrCreate(userInfo.email, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        return done(null, false);
        // or you could create a new account
    });
};

const initializeAuth = (app) => {
    app.use(passport.initialize());
    initializeStrategies(passport, findUser);

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    app.get('/auth/google', passport.authenticate('google', { scope }));
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.cookie('jwt', generateJwt(req.user));
        // TODO: Redirect to failure URL when failure
        res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_REDIRECT_URL);
    });

    return passport;
};

module.exports = {
    initializeAuth,
};
