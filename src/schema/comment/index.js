import commentQuery from './CommentQuery';
import commentResolver from './CommentResolver';
import commentType from './CommentType';
import commentMutation from './CommentMutation';

export default {
  typeDef: commentQuery.concat(commentType, commentMutation),
  commentResolver
};