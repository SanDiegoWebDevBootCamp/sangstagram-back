const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const buildApolloServer = () => new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

module.exports = {
    buildApolloServer,
};