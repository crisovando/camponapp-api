import Sequelize from 'sequelize';

export const dbConnector = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    dialect: 'postgres',
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: true,
    },
    host: process.env.HOST_DB,
    logging: false,
  },
);