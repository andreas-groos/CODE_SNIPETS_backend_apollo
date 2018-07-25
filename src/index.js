const express = require("express");
import chalk from "chalk";
import cors from "cors";
const bodyParser = require("body-parser");
import mongoose from "mongoose";
import {
  Record
} from "./schema";
require("dotenv").config();
import mongoConnect from './utils/mongoConnect'

// import {
//   saveRecord,
//   getRecord,
//   getAllRecords
// } from "./Resolvers";
const {PORT} = process.env;


const startServer = async () => {
  // Initialize the app
  const app = express();
  app.use(cors());
  let msg = await mongoConnect()
  console.log(chalk.green(msg + '\n'))
  const server = await app.listen(PORT)
  if (server) {
    console.log(chalk.green(`Server listening at ${PORT}`));
  }
}

startServer();