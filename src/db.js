import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost/socketscrud");
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
};
