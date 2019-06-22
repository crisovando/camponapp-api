import Sequelize from 'sequelize';
import { dbConnector } from '../services/connectors';

const Comment = dbConnector.define(
  'comments',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: Sequelize.STRING,
    user_id: {
      type: Sequelize.INTEGER,
    },
    post_id: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt',
      defaultValue: Sequelize.literal('NOW()')
    },
  },
  {
    tableName: 'comments',
    timestamps: false
  },
);

export default Comment;
