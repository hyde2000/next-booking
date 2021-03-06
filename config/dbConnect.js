import { connect, connection } from "mongoose";

export const dbConnect = () => {
  if (connection.readyState > 1) {
    return;
  }
  connect(process.env.DB_URI, {
    useNewUrlParser: true,
  });
};
