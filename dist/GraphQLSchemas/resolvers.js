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
        register: (_, args) => {
            console.log(args);
            return (0, userService_1.register)(args);
        },
        login: (_, args) => {
            return (0, userService_1.login)(args);
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map