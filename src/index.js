const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000);