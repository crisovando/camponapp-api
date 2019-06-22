import postQuery from './PostQuery';
import postResolver from './PostResolver';
import postType from './PostType';
import postMutation from './PostMutation';

export default {
  typeDef: postQuery.concat(postType, postMutation),
  postResolver
};