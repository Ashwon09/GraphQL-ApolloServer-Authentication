"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("./configs");
function generateToken(username, role) {
    return jsonwebtoken_1.default.sign({ username, role }, configs_1.privateKey, {
        algorithm: configs_1.algorithmJWT,
        expiresIn: configs_1.expiresInOneDay,
    });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, configs_1.privateKey);
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=authorizationService.js.map