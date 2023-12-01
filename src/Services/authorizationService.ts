import jwt from "jsonwebtoken";
import { privateKey, expiresInOneDay, algorithmJWT } from "./configs";

export function generateToken(username: string, role: string): string {
  return jwt.sign({ username, role }, privateKey, {
    algorithm: algorithmJWT,
    expiresIn: expiresInOneDay,
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, privateKey);
}
