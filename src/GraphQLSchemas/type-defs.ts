// schema.ts
import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Token {
    accessToken: String!
    refreshToken: String
  }

  type Query {
    hello: String
    users: [User]!
    user(id: ID): User
  }

  input UserCreateInput {
    username: String!
    email: String!
    password: String!
  }

  input Login {
    username: String!
    password: String!
  }

  type Mutation {
    register(input: UserCreateInput!): User!
    login(input: Login!): Token!
  }
`;

export default typeDefs;
