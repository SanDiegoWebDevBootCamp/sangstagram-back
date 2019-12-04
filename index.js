const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const { ApolloServer } = require('apollo-server-express');
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
const whitelist = ['http://localhost:3000', 'http://localhost:5000'];
const corsOptions = {
    origin: (origin, callback) => {
        console.log('origin', origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

registerRoutes(app);

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
