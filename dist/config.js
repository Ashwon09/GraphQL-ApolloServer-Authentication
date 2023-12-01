"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default
        .connect("mongodb+srv://Ecommerce:Ecommerce@cluster0.y788xyy.mongodb.net/graphQL")
        .then(() => console.log("Database connected Successfully!"));
};
exports.connectDB = connectDB;
//# sourceMappingURL=config.js.map