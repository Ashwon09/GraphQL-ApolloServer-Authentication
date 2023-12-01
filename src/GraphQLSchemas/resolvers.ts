import { UserInput, UserLogin } from "../Schemas/userSchemas";
import { register, getAllUsers, login } from "../Services/userService";

// resolvers.ts

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    users: () => {
      return getAllUsers();
    },
  },
  Mutation: {
    register: (_: any, args: UserInput) => {
      console.log(args);
      return register(args);
    },
    login: (_: any, args: UserLogin) => {
      return login(args);
    },
  },
};

export default resolvers;
