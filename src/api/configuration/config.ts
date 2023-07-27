export default () => ({
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_NAME_USR,
    password: process.env.DB_PWD_USER,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
  },
});
