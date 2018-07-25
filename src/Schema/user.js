import mongoose from "mongoose";

const Schema = mongoose.Schema;

let userSchema = new Schema({
  displayName: String,
  uid: String,
  createdAt: Date,
  updatedAt: Date
});

userSchema.pre('save', function(next) {
 this.updatedAt = new Date() 
 if (!this.createdAt) {
   this.createdAt = new Date()
 }
 next()
});

let User = mongoose.model("User", userSchema);

export {
  User,
  userSchema
};