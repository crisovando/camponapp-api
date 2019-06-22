import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { v2 as cloudinaryApi} from 'cloudinary';

dotenv.config();

export const dbConnector = new Sequelize(
  process.env.NAME_DB || 'd5ri6uu91nfa1o',
  process.env.USER_DB || 'jjsffhneybudmp',
  process.env.PASS_DB || '22ed6c9eda1ed092a20a16306feaae2b18e2d6255741a9166163c4a03c435cf6',
  {
    dialect: 'postgres',
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: true,
    },
    host: process.env.HOST_DB || 'ec2-54-243-197-120.compute-1.amazonaws.com',
    logging: true,
  },
);

cloudinaryApi.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const cloudinary = cloudinaryApi;
