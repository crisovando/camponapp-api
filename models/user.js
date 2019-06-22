import Sequelize from 'sequelize';
import { dbConnector } from '../services/connectors';

const User = dbConnector.define(
  'users',
  {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dni: Sequelize.INTEGER,
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    password: Sequelize.STRING,
    foto: Sequelize.STRING,
    telefono: Sequelize.BIGINT,
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt',
      defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: 'users',
    timestamps: true,
  },
);

export default User;
