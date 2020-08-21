import { gql, makeExecutableSchema } from 'apollo-server';
import videos from './videos';

const typeDef = gql`
  scalar Date
  scalar Upload
  type Query
  type Mutation
`;

export default makeExecutableSchema({
  typeDefs: [
    typeDef, videos.typeDef
  ],
  resolvers: [videos.videoResolver]
});
