import PostModel from './post';
import UserModel from './user';
import CommentModel from './comments';

PostModel.belongsTo(UserModel, {foreignKey: 'user_id', sourceKey: 'user_id'});
PostModel.hasMany(CommentModel, {foreignKey: 'post_id', sourceKey: 'id'});
CommentModel.belongsTo(PostModel, {foreignKey: 'post_id', targetKey: 'id'});
CommentModel.belongsTo(UserModel, {foreignKey: 'user_id', sourceKey: 'user_id'});

export const post = PostModel;
export const user = UserModel;
export const comment = CommentModel;
