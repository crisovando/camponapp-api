
import { comment as CommentModel} from '../../../models';

export default {
  Query: {
    comments: async (_, args) => CommentModel.findAll({ where: { post_id: args.post_id } }),
  },
  Mutation: {
    addComment: async (obj, args) => {
      const res = await CommentModel.create({...args});
      return res;
    },
  },
};
