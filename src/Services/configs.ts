import { Algorithm } from "jsonwebtoken";

export const saltRounds = process.env.SALTROUNDS ?? 10;
export const privateKey = process.env.PRIVATEKEY || "R@Nd0mPrIv@TeKeY";
export const expiresInOneDay = 60 * 60 * 24;
export const algorithmJWT: Algorithm = checkAlgorithmExists(
  process.env.ALGORITHMJWT
)
  ? process.env.ALGORITHMJWT
  : "HS256";

function checkAlgorithmExists(algorithm: any): algorithm is Algorithm {
  return typeof algorithm === "string";
}
