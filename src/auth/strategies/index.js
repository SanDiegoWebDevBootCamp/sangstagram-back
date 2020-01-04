const createGoogleOAuthStrategy = require('./googleOAuth');
const createJwtStrategy = require('./jwt');

const initializeStrategies = (passport, findOrCreateUser) => {
    const createStrategies = [createGoogleOAuthStrategy, createJwtStrategy];

    createStrategies.map((createStrategy) => {
        const strategy = createStrategy(passport, findOrCreateUser);
        passport.use(strategy);
    });

    return passport;
};

module.exports = initializeStrategies;
