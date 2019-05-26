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
    descripcion: Sequelize.STRING,
    titulo: Sequelize.STRING,
    fecha_creacion: Sequelize.DATE,
    usuario_id: Sequelize.INTEGER,
  },
  {
    tableName: 'post',
  },
);

export default Post;
