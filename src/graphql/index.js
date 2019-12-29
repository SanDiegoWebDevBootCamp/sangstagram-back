const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { getUser } = require('../database');
const { decodeJwt } = require('../auth/token');

const buildApolloServer = () => new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // get the user token from the headers
        const token = req.headers.authorization.split(' ')[1] || '';
        const { email } = decodeJwt(token);
        // try to retrieve a user with the token
        const user = getUser(email);

        // add the user to the context
        return { user };
    },
    introspection: true,
    playground: true,
});

module.exports = {
    buildApolloServer,
};
