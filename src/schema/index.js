import { mergeSchemas } from 'graphql-tools';
import posts from './posts';
import user from './user';

const schemas = [ posts, user ];

export default mergeSchemas({
  schemas
});
