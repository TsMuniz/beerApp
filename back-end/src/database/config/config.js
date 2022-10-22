// require('dotenv/config')

// const options = {
//   host: process.env.PGHOST,
//   port: Number(process.env.PGPORT),
//   database: process.env.PGDATABASE,    
//   username: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   dialect: 'postgres',
//   define: {
//     timestamps: true
//   },
//   logging: false,
// };

// module.exports = {
//   development: {
//     ...options,
//   },
//   test: {
//     ...options,
//   },
//   production: {
//     ...options,
//   },
// };

require('dotenv').config();

const options = {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
