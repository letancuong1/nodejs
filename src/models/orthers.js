const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Orthers = new Schema({
  productID:{type:String},
  customersID: { type: String },
  employeeID: { type: String },
  shipeddate:{ type: String },
  shipname:{type:Number},
  shipadress:{type:String},
  quantity:{type:Number},
  otherdate:{type:Date,default:Date.now},
});

module.exports=mongoose.model('orthers',Orthers)