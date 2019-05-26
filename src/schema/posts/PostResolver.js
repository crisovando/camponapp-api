
import PostModel from '../../../models/post';
import posts from '../../../db/post';


export default {
  Query: {
    posts: async () => posts,
  },
  Mutation: {
    addPost: async (obj, args) => {
      const res = await PostModel.create({...args});
      return res;
    },
  },
};
