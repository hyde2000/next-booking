import { connect, connection, Error } from "mongoose";

export const dbConnect = (): void => {
  if (connection.readyState > 1) {
    return;
  }
  const uri: string | undefined = process.env.DB_URI;

  if (!uri) {
    throw new Error("DB_URI is not set");
  }

  connect(uri);
};
