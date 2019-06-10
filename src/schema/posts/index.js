import { makeExecutableSchema } from 'graphql-tools';
import postQuery from './PostQuery';
import postResolver from './PostResolver';
import postType from './PostType';
import postMutation from './PostMutation';

export default makeExecutableSchema({
  typeDefs: [ postType, postQuery, postMutation ],
  resolvers: postResolver,
});