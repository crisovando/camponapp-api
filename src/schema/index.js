import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { PostQuery, PostResolver, PostType, PostMutation } from './posts';

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [ PostType, PostQuery, PostMutation ],
  resolvers: merge(resolvers, PostResolver),
});
