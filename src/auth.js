const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = {
    username: 'justinyum98',
    password: 'fakepassword',
};

module.exports = {
    passport,
};
