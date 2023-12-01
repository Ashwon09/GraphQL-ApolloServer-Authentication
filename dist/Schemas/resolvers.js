"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../Services/userService");
// resolvers.ts
const resolvers = {
    Query: {
        hello: () => "Hello, World!",
        users: () => {
            return (0, userService_1.getAllUsers)();
        },
    },
    Mutation: {
        createUser: (_, args) => {
            console.log(args);
            return (0, userService_1.createUser)(args);
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map