"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.algorithmJWT = exports.expiresInOneDay = exports.privateKey = exports.saltRounds = void 0;
exports.saltRounds = process.env.SALTROUNDS ?? 10;
exports.privateKey = process.env.PRIVATEKEY || "R@Nd0mPrIv@TeKeY";
exports.expiresInOneDay = 60 * 60 * 24;
exports.algorithmJWT = checkAlgorithmExists(process.env.ALGORITHMJWT)
    ? process.env.ALGORITHMJWT
    : "HS256";
function checkAlgorithmExists(algorithm) {
    return typeof algorithm === "string";
}
//# sourceMappingURL=configs.js.map