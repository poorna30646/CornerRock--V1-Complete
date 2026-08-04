import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
