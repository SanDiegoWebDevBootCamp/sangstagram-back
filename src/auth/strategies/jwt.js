const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: 'sangstagram.com',
    audience: 'sangstagram.com',
};

const createStrategy = (passport, findOrCreateUser) => {
    return new Strategy(opts, (jwtPayload, done) => {
        findOrCreateUser(jwtPayload)
            .then((user) => done(null, user))
            .catch(done);
    });
};

module.exports = createStrategy;
