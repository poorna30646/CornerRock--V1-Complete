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

function getSafeErrorMetadata(error: unknown) {
  if (!error || typeof error !== "object") {
    return { errorName: "UnknownError" };
  }

  const { name, code } = error as { name?: unknown; code?: unknown };
  const metadata: { errorName: string; code?: string | number } = {
    errorName: typeof name === "string" ? name : "UnknownError",
  };

  if (typeof code === "string" || typeof code === "number") {
    metadata.code = code;
  }

  return metadata;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  const mongoUri = process.env.MONGODB_URI?.trim();

  console.info("[db] MONGODB_URI configured:", Boolean(mongoUri));

  if (!mongoUri) {
    console.error("[db] MONGODB_URI environment variable is not configured.");
    throw new Error("MONGODB_URI environment variable is not set");
  }

  if (cached.conn?.connection?.readyState === 1) {
    console.info("[db] Reusing cached MongoDB connection.");
    return cached.conn;
  }

  if (mongoose.connection.readyState === 1) {
    cached.conn = mongoose;
    console.info("[db] Reusing active MongoDB connection.");
    return cached.conn;
  }

  if (cached.promise) {
    console.info("[db] Waiting for an in-progress MongoDB connection.");
    return cached.promise;
  }

  cached.conn = null;

  try {
    console.info("[db] Connecting to MongoDB.");
    cached.promise = mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      maxPoolSize: 5,
      bufferCommands: false,
    });

    const connection = await cached.promise;
    cached.conn = connection;
    console.info("[db] MongoDB connected successfully.");
    return connection;
  } catch (error) {
    console.error("[db] MongoDB connection failed.", getSafeErrorMetadata(error));
    cached.conn = null;
    throw error;
  } finally {
    cached.promise = null;
  }
}
