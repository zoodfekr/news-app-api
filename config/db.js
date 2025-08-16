import mongoose from "mongoose";

const dburl = process.env.MONGODB_URI;
const dbport = process.env.MONGODB_PORT;

export const connectDb = () => {
  mongoose
    .connect(`${dburl}:${dbport}/${process.env.MONGODB_DB}`)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
