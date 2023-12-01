import mongoose from "mongoose";

export const connectDB = () => {
  const dburl = process.env.DBURL;

  if (!dburl) {
    console.error("DBURL is not defined in the environment variables.");
    return;
  }
  mongoose
    .connect(dburl)
    .then(() => console.log("Database connected Successfully!"));
};
