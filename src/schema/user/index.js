import _ from 'lodash';
import userQuery from './UserQuery';
import userResolver from './UserResolver';
import userType from './UserType';
import userMutation from './UserMutation';

export default {
  typeDef: userType.concat(userMutation, userQuery),
  userResolver
};