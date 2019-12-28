const createGoogleOAuthStrategy = require('./googleOAuth');
const createJwtStrategy = require('./jwt');

const initializeStrategies = (passport, findUser) => {
    const createStrategies = [createGoogleOAuthStrategy, createJwtStrategy];

    createStrategies.map((createStrategy) => {
        const strategy = createStrategy(passport, findUser);
        passport.use(strategy);
    });

    return passport;
};

module.exports = initializeStrategies;
