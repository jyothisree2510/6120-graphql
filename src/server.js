const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');      // Import schema
const resolvers = require('./resolvers');  // Import resolvers

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
