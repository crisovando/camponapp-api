import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { UsersQuery, UsersResolver, UsersType, UsersMutation } from './users';

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [ UsersType, UsersQuery, UsersMutation ],
  resolvers: merge(resolvers, UsersResolver),
});