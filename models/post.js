import Sequelize from 'sequelize';
import { dbConnector } from '../services/connectors';

const Post = dbConnector.define(
  'post',
  {
    post_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: Sequelize.STRING,
    title: Sequelize.STRING,
    created_date: Sequelize.DATE,
    user_id: Sequelize.INTEGER,
  },
  {
    tableName: 'post',
  },
);

export default Post;
