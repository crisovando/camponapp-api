
import { post as PostModel} from '../../../models';
import { user as UserModel} from '../../../models';
import { comment as CommentModel} from '../../../models';
import { cloudinary } from '../../../services/connectors';


export default {
  Query: {
    posts: async () => PostModel.findAll(),
    detailPost: async (_, args) => PostModel.findOne({
      include: [{
        model: UserModel
      }, {
        model: CommentModel,
        include: UserModel
      }],
      where: { id: args.postId }
    })
  },
  Mutation: {
    addPost: async (obj, args) => {
      const post = {}

      const eager_options = {
        width: 200, height: 150, crop: 'scale', format: 'jpg'
      };

      // File upload (example for promise api)
      if (args.fotos.length > 0) {
        const promises = [];
        args.fotos.forEach(async foto => {
          promises.push(cloudinary.uploader.upload(foto.thumbUrl, { tags:'finding-pet', eager: eager_options}));
        })
        const values = await Promise.all(promises)
        post.fotos = values.map(image => image.url);
      }

      const res = await PostModel.create({...args, ...post});
      return res;
    },
  },
};
