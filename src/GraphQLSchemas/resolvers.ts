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
      try {
        return register(args);
      } catch (error) {
        throw error;
      }
    },
    login: (_: any, args: UserLogin) => {
      try {
        return login(args);
      } catch (error) {
        throw error;
      }
    },
  },
};

export default resolvers;
