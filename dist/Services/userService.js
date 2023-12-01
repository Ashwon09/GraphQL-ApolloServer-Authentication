"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = exports.login = exports.register = exports.getAllUsers = void 0;
const graphql_1 = require("graphql");
const User_1 = __importDefault(require("../Models/User"));
const bcrypt = __importStar(require("bcrypt"));
const configs_1 = require("./configs");
const authorizationService_1 = require("./authorizationService");
async function getAllUsers() {
    try {
        const users = await User_1.default.find();
        return users;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}
exports.getAllUsers = getAllUsers;
async function register(user) {
    try {
        const { username, email, password } = user.input;
        const newUser = await createUserObject(username, email, password);
        console.log("New user to add:", newUser);
        const addedUser = await newUser.save();
        return addedUser;
    }
    catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}
exports.register = register;
async function login(loginDetails) {
    try {
        const { username, password } = loginDetails.input;
        const userDetails = await getUserWithUsername(username);
        await verifyPassword(userDetails.password, password);
        return {
            accessToken: (0, authorizationService_1.generateToken)(userDetails.username, userDetails.role),
        };
    }
    catch (error) {
        console.log(error);
    }
}
exports.login = login;
async function userDetails(username) {
    return await getUserWithUsername(username);
}
exports.userDetails = userDetails;
async function hashPassword(password) {
    try {
        const hash = await bcrypt.hash(password, configs_1.saltRounds);
        return hash;
    }
    catch (error) {
        throw error;
    }
}
async function verifyPassword(hashedPassword, password) {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        if (!match) {
            throw new graphql_1.GraphQLError(`Your username or password is incorrect`, {
                extensions: {
                    code: "INVALID_LOGIN_CREDENTIALS",
                },
            });
        }
    }
    catch (error) {
        throw error;
    }
}
async function createUserObject(username, email, password) {
    return new User_1.default({
        username,
        email,
        password: await hashPassword(password),
    });
}
async function getUserWithUsername(username) {
    const userDetails = await User_1.default.findOne({ username });
    if (!userDetails) {
        throw new graphql_1.GraphQLError(`User with ${username} not found`, {
            extensions: {
                code: "USER_NOT_FOUND",
            },
        });
    }
    return userDetails;
}
//# sourceMappingURL=userService.js.map