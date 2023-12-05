import { UserInput, UserLogin, getUser } from "../Schemas/userSchemas";
import {
  register,
  getAllUsers,
  login,
  getUserByID,
} from "../Services/userService";

// resolvers.ts

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    users: () => {
      return getAllUsers();
    },
    user: (_: any, args: getUser) => {
      try {
        return getUserByID(args.id);
      } catch (error) {
        throw error;
      }
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
