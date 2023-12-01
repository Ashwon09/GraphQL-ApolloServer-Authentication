import { ApolloServer } from "apollo-server";
import typeDefs from "./GraphQLSchemas/type-defs";
import resolvers from "./GraphQLSchemas/resolvers";
import { connectDB } from "./dbConfig";
import { config } from "dotenv";

config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Here, you can access the request headers and include them in the context
    const headers = req.headers;
    return { headers };
  },
});

const PORT = process.env.PORT || 4000;

connectDB();

server.listen(PORT).then(({ url }) => {
  console.log("API is running in", url);
});
