"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// schema.ts
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String
  }

  type Query {
    hello: String
    users: [User]!
  }

  input UserCreateInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserCreateInput!): User!
  }
`;
//   user(id: ID!): User
exports.default = typeDefs;
//# sourceMappingURL=type-defs.js.map