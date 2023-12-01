"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const type_defs_1 = __importDefault(require("./GraphQLSchemas/type-defs"));
const resolvers_1 = __importDefault(require("./GraphQLSchemas/resolvers"));
const dbConfig_1 = require("./dbConfig");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server = new apollo_server_1.ApolloServer({
    typeDefs: type_defs_1.default,
    resolvers: resolvers_1.default,
    context: ({ req }) => {
        // Here, you can access the request headers and include them in the context
        const headers = req.headers;
        return { headers };
    },
});
const PORT = process.env.PORT || 4000;
(0, dbConfig_1.connectDB)();
server.listen(PORT).then(({ url }) => {
    console.log("API is running in", url);
});
//# sourceMappingURL=server.js.map