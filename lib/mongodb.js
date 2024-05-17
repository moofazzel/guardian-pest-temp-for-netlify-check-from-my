import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }

  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/guardian-pest"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Successfully connected to db🔋🔋");
  } catch (error) {
    console.error("Error connecting to db: ", error);
    throw new Error("Failed to connect to the database.");
  }
};

export default dbConnect;
