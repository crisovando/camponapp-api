import { makeExecutableSchema } from 'graphql-tools';
import userQuery from './UserQuery';
import userResolver from './UserResolver';
import userType from './UserType';
import userMutation from './UserMutation';

export default makeExecutableSchema({
  typeDefs: [ userType, userQuery, userMutation ],
  resolvers: userResolver,
});