import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
