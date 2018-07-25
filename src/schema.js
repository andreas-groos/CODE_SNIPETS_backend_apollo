import mongoose from "mongoose";

const Schema = mongoose.Schema;

let recordSchema = new Schema({
  name: String
});

let Record = mongoose.model("Record", recordSchema);

export { recordSchema, Record };
