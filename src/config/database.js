import mongoose from "mongoose";
import tls from "tls";

// Fix OpenSSL 3.5+ (Arch Linux) — disable post-quantum key exchange
const origCreateSecureContext = tls.createSecureContext;
tls.createSecureContext = function (options) {
  const ctx = origCreateSecureContext.call(this, options);
  if (!options?.ecdhCurve) ctx.context.setGroups?.("X25519:P-256:P-384:P-521");
  return ctx;
};

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "learn_rest_api";

export async function connectDB() {
  try {
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
      tls: true,
      tlsAllowInvalidCertificates: true,
    });
    console.log(`✅ Connected to MongoDB → ${DB_NAME}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}
