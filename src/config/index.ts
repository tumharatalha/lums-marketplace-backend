import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI || "mongodb://localhost:27017/lums-marketplace",
  },
};
