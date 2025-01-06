import sql from "mssql";

const config = {
  user: "sa",
  password: "Password@123",
  database: "master",
  server: "localhost",
  options: {
    trustServerCertificate: true, // If you are using a local server
  },
};

let pool;

export const getDbConnection = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};
