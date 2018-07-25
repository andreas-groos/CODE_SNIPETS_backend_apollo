import mongoose from "mongoose";

const Schema = mongoose.Schema;

let userSchema = new Schema({
  displayName: String,
  uid: String,
  dateCreated: Date,
  dateUpdated: Date
});

let User = mongoose.model("User", userSchema);

export {
  User,
  userSchema
};