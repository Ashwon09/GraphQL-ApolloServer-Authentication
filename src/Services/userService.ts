import { GraphQLError } from "graphql";
import User, { IUser } from "../Models/User";
import * as bcrypt from "bcrypt";
import { UserInput, UserLogin } from "../Schemas/userSchemas";
import { saltRounds } from "./configs";
import { generateToken } from "./authorizationService";

export async function getAllUsers(): Promise<IUser[]> {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function register(user: UserInput): Promise<IUser> {
  try {
    const { username, email, password } = user.input;
    const newUser = await createUserObject(username, email, password);
    console.log("New user to add:", newUser);
    const addedUser = await newUser.save();
    return addedUser;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

export async function login(loginDetails: UserLogin) {
  try {
    const { username, password } = loginDetails.input;
    const userDetails = await getUserWithUsername(username);
    await verifyPassword(userDetails.password, password);
    return {
      accessToken: generateToken(userDetails.username, userDetails.role),
    };
  } catch (error) {
    console.log(error);
  }
}

export async function userDetails(username: string) {
  return await getUserWithUsername(username);
}

async function hashPassword(password: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
}

async function verifyPassword(
  hashedPassword: string,
  password: string
): Promise<void> {
  try {
    const match: boolean = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      throw new GraphQLError(`Your username or password is incorrect`, {
        extensions: {
          code: "INVALID_LOGIN_CREDENTIALS",
        },
      });
    }
  } catch (error) {
    throw error;
  }
}

async function createUserObject(
  username: string,
  email: string,
  password: string
) {
  return new User({
    username,
    email,
    password: await hashPassword(password),
  });
}

async function getUserWithUsername(username: string) {
  const userDetails = await User.findOne({ username });
  if (!userDetails) {
    throw new GraphQLError(`User with ${username} not found`, {
      extensions: {
        code: "USER_NOT_FOUND",
      },
    });
  }
  return userDetails;
}
