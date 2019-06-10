
import PostModel from '../../../models/post';


export default {
  Query: {
    posts: async () => PostModel.findAll(),
  },
  Mutation: {
    addPost: async (obj, args) => {
      const res = await PostModel.create({...args});
      return res;
    },
  },
};
