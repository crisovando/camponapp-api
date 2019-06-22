
import { user as UserModel } from '../../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cloudinary } from '../../../services/connectors';

export default {
  Query: {
    users: async () => UserModel.find(),
    // fetch the profile of currently authenticated user
    async me (_, args, { user }) {
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      // user is authenticated
      return await UserModel.findOne({ where: { user_id: user.id}})
    }
  },
  Mutation: {
    singup: async (_, { dni, nombre, apellido, telefono, password, foto }) => {
      const eager_options = {
        width: 200, height: 150, crop: 'scale', format: 'jpg'
      };
      // File upload (example for promise api)
      if (foto) {
        const image = await cloudinary.uploader.upload(foto.thumbUrl,{ tags:'finding-pet', eager: eager_options}); 
        foto = image.url;
      }

      const user = await UserModel.create({
        dni, nombre, apellido, telefono, foto,
        password: await bcrypt.hash(password, 10)
      });
      return jwt.sign(
        { id: user.user_id, dni: user.dni },
        'finding-pet', // secret key
        { expiresIn: '1y' }
      )
    },
    async login (_, { dni, password }) {
      const user = await UserModel.findOne({ where: { dni } })

      if (!user) {
        throw new Error('No existe usuario con ese dni')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Password incorrecto')
      }

      // return json web token
      return jwt.sign(
        { id: user.user_id, dni: user.dni, foto: user.foto, nombre: user.nombre },
        'finding-pet', // secret key
        { expiresIn: '1d' }
      )
    }
  },
};
