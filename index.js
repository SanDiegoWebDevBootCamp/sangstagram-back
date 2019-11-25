const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = process.env.PORT || 5000

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const options = {
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
}

const server = new ApolloServer(options);

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
