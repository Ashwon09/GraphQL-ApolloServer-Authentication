"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("./configs");
function generateToken(username, role) {
    return jsonwebtoken_1.default.sign({ username, role }, configs_1.privateKey, {
        algorithm: configs_1.algorithmJWT,
        expiresIn: configs_1.expiresInOneDay,
    });
}
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map