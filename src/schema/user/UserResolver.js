
import UserModel from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    singup: async (_, { dni, nombre, apellido, telefono, password }) => {
      const user = await UserModel.create({
        dni, nombre, apellido, telefono,
        password: await bcrypt.hash(password, 10)
      });
      return jwt.sign(
        { id: user.user_id, dni: user.dni },
        'finding-pet', // secret key
        { expiresIn: '1y' }
      )
      return res;
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
        { id: user.user_id, dni: user.dni },
        'finding-pet', // secret key
        { expiresIn: '1d' }
      )
    }
  },
};
