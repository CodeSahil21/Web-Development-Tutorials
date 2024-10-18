const mongoose = require("mongoose");
 /*
 Todo{
 title:string,
 decription:string,
 completed:boolean
 }
 */
mongoose.connect('your mongoose url');
const todoSchema = mongoose.Schema({
  title:String,
  description: String,
  completed:Boolean
});
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
} 