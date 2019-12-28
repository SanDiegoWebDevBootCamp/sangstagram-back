const express = require('express');
const { connectDatabase } = require('./src/database');
const { buildApolloServer } = require('./src/graphql');
const { register: registerRoutes } = require('./src/routes');
const { initializeCors } = require('./src/cors');
const { initializeAuth } = require('./src/auth');

const PORT = process.env.PORT || 5000;

const app = express();

connectDatabase();

app.use(express.static('public'));
app.use(initializeCors());

initializeAuth(app);
registerRoutes(app);

const apolloServer = buildApolloServer();

apolloServer.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`));
