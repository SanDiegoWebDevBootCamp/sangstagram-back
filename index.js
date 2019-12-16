const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const { passport } = require('./src/auth');

const PORT = process.env.PORT || 5000;

const { register: registerRoutes } = require('./src/routes');

const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

const app = express();

// TODO: Use environment variable
const whitelist = process.env.CORS_WHITELIST.split(',');
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
app.use(passport.initialize());

app.get('/auth/google', passport.authenticate('google-oauth-jwt', {
    callbackUrl: 'http://localhost:5000/auth/google/callback',
    scope: 'email',
}));

app.get('/auth/google/callback', passport.authenticate('google-oauth-jwt', {
    callbackUrl: 'http://localhost:5000/auth/google/callback',
}), (req, res) => {
    const token = jwt.sign({
        email: 'justinyum98@gmail.com',
    }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    });
    res.json({
        jwt: token,
    });
});

registerRoutes(app);


server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
