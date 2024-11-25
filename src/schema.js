const { gql } = require('apollo-server');

const typeDefs = gql`
  type App {
    id: ID!
    name: String!
    sensitiveData: Boolean!
    queriesMade: Int!
    analysis: AppAnalysis  # Analysis field with AppAnalysis type
  }

  type AppAnalysis {
    riskLevel: String!
    queriesRisk: String!
  }

  type Query {
    hello: String
    getAllApps: [App!]!           # Returns all apps with analysis data
    appAnalysis(id: ID!): App     # Returns a specific app with analysis data
  }

  type Mutation {
    createApp(name: String!, sensitiveData: Boolean!): App!
    incrementQueries(id: ID!): App
  }
`;

module.exports = typeDefs;
