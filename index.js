import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express'
import jwt from 'express-jwt';
import schema from './src/schema';

const PORT = 4000

 // auth middleware
 const auth = jwt({
  secret: 'finding-pet',
  credentialsRequired: false
})

// create our express app
const app = express()

app.use('/graphql', bodyParser.json(), auth)

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    user: req.user
  })
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}/graphql`)
})