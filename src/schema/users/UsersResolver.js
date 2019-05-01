
import UserModel from '../../../models/user';


export default {
  Query: {
    users: async () => await UserModel.findAll()
  },
  Mutation: {
    addUser: async (obj, args) => {
      const res = await UserModel.create({...args});
      return res;
    },
  },
};
