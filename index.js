import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors';
import schema from './src/schema';
import config from './config/config';

const PORT = 4000

// create our express app
const app = express()

app.use(cors())
app.use('/graphql', bodyParser.json({limit: '50mb'}))

const server = new ApolloServer({
  schema
});
server.applyMiddleware({ app });

app.listen(config.server.port, () => {
  console.log(`The server is running on http://localhost:${PORT}/graphql`)
})