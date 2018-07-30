
import mongoose from "mongoose";

const Schema = mongoose.Schema;

let snippetSchema = new Schema({
  snippetName: String,
  _id: String,
  tags: String,
  description: String,
  category: String,
  language: String,
  code: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
});

snippetSchema.pre('save', function(next) {
 this.updatedAt = new Date() 
 if (!this.createdAt) {
   this.createdAt = new Date()
 }
 next()
});

let Snippet= mongoose.model("Snippet", snippetSchema);

export {
  Snippet, snippetSchema
};