const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/typeDefs/index');
const resolvers = require('./src/graphql/resolvers/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();

// TODO: Use environment variable
var whitelist = ['http://localhost:5000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
