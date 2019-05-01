import { ApolloServer } from 'apollo-server';
import { schema } from './src/schema/index';
console.log(JSON.stringify(process.env));
const server = new ApolloServer({schema});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
 