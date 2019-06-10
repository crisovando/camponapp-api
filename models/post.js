import Sequelize from 'sequelize';
import { dbConnector } from '../services/connectors';

const Post = dbConnector.define(
  'posts',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: Sequelize.STRING,
    titulo: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    foto: Sequelize.STRING,
    lat: Sequelize.BIGINT,
    long: Sequelize.BIGINT,
    user_id: Sequelize.INTEGER,
  },
  {
    tableName: 'posts',
  },
);

export default Post;
