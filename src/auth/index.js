const passport = require('passport');
const { generateJwt } = require('./token');
const initializeStrategies = require('./strategies');
const { findOrCreateUser } = require('../database/dataAccess/user');

const scope = [
    'profile',
    'email',
];

const initializeAuth = (app) => {
    app.use(passport.initialize());
    initializeStrategies(passport, findOrCreateUser);

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
