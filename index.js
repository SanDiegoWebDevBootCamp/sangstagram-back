const express = require('express');
const { connectDatabase } = require('./src/database');
const { passport } = require('./src/auth');
const { buildApolloServer } = require('./src/graphql');
const { register: registerRoutes } = require('./src/routes');
const { initializeCors } = require('./src/cors');
const { generateJwt } = require('./src/token');

const PORT = process.env.PORT || 5000;

const app = express();

connectDatabase();

app.use(express.static('public'));
app.use(initializeCors());
app.use(passport.initialize());

app.get('/auth/google', passport.authenticate('google-oauth-jwt', {
    callbackUrl: process.env.GOOGLE_OAUTH_CALLBACK_URL,
    scope: 'email',
}));
app.get('/auth/google/callback', passport.authenticate('google-oauth-jwt', {
    callbackUrl: process.env.GOOGLE_OAUTH_CALLBACK_URL,
}), (req, res) => {
    res.cookie('jwt', generateJwt());
    res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_REDIRECT_URL);
});
registerRoutes(app);

const apolloServer = buildApolloServer();

apolloServer.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`));
