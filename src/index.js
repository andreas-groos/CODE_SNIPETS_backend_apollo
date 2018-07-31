const express = require("express");
import chalk from "chalk";
import cors from "cors";
const bodyParser = require("body-parser");
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
import resolvers from './Resolvers'
import typeDefs from './typeDefs'

import {
  User
} from "./Schema";
require("dotenv").config();
import mongoConnect from './utils/mongoConnect'

const {
  PORT
} = process.env;

const startServer = async () => {
  // Initialize the app
  const app = express();
  app.use(cors());
  let msg = await mongoConnect()
  console.log(chalk.green(msg + '\n'))

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => ({
      token: req.headers['authorization'],
    })
  });

  server.applyMiddleware({
    app
  });

  app.listen({
      port: PORT
    }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`),
  );
}

startServer();