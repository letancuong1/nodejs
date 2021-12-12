const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Customers = new Schema({
  name: { type: String },
  password: { type: String },
  adress:{ type: String },
  phone:{type:Number},
  img:{type:String},
  createAt:{type:Date},
});
module.exports=mongoose.model('customers',Customers)