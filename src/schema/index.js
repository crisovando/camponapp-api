import { gql, makeExecutableSchema } from 'apollo-server';
import posts from './posts';
import user from './user';
import comment from './comment';

const typeDef = gql`
  type Query
  type Mutation
  scalar Date
`;

export default makeExecutableSchema({
  typeDefs: [
    typeDef, user.typeDef, posts.typeDef, comment.typeDef
  ],
  resolvers: [posts.postResolver, user.userResolver, comment.commentResolver]
});
