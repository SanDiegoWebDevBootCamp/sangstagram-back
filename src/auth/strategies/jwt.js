const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: 'sangstagram.com',
    audience: 'sangstagram.com',
};

const createStrategy = (passport, findUser) => {
    return new Strategy(opts, (jwtPayload, done) => findUser(jwtPayload, done));
};

module.exports = createStrategy;
