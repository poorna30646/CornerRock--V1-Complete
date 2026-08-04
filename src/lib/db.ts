import mongoose from "mongoose";

interface MongooseConnectionCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseConnectionCache;
};

const cached = globalWithMongoose.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = cached;
}

export async function connectToDatabase() {
  console.log("[db] Attempting to connect to MongoDB...");
  console.log("[db] Current MongoDB connection state:", mongoose.connection.readyState);

  const mongoUri = process.env.MONGODB_URI;
  console.log("[db] MONGODB_URI configured:", Boolean(mongoUri));

  if (!mongoUri) {
    const error = new Error("MONGODB_URI environment variable is not set");
    console.error("[db] Missing MONGODB_URI environment variable", error);
    throw error;
  }

  if (cached.conn?.connection?.readyState === 1) {
    console.log("[db] Reusing existing MongoDB connection.");
    return cached.conn;
  }

  if (cached.promise) {
    console.log("[db] MongoDB connection is already in progress. Waiting for it...");
    return cached.promise;
  }

  try {
    cached.promise = mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      maxPoolSize: 10,
      bufferCommands: false,
    });

    const connection = await cached.promise;
    cached.conn = connection;
    console.log("[db] MongoDB connected successfully.");
    console.log("[db] Final MongoDB connection state:", mongoose.connection.readyState);
    return connection;
  } catch (error) {
    console.error("[db] MongoDB connection failed with full error:", error);
    cached.conn = null;
    cached.promise = null;
    throw error;
  }
}
