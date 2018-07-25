import mongoose from "mongoose";
import chalk from "chalk";
require("dotenv").config();
import { Record } from "./schema";

const { PORT, DB_NAME } = process.env;

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`).then(res => {
  //   mongoose.connection.db.dropDatabase();
  console.log(chalk.green(`connected to ${DB_NAME}`));
});
