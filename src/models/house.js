const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const House = new Schema({
  name: { type: String },
  destription:{ type: String },
  video:{ type: String },
  img:{type:String},
  createAt:{type:Date},
});


module.exports=mongoose.model('courses',House)