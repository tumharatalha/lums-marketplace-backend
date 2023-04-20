import { Connection, createConnection } from "typeorm";
import dbConfig from "../config";

let connection: Connection;

export const connectDatabase = async (): Promise<void> => {
  try {
    connection = await createConnection(dbConfig);
    console.log("Connected to database!");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await connection.close();
    console.log("Disconnected from database!");
  } catch (error) {
    console.error("Error disconnecting from database: ", error);
    process.exit(1);
  }
};
