const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Seller = new Schema({
  nameseller:{type:String},
  passwordseller:{type:String},
  imgseller:{type:String},
  background:{type:String},
  slide1:{type:String},
  slide2:{type:String},
  slide3:{type:String},
  description:{type:String},
  follow:{type:Number,default:0},

});

module.exports=mongoose.model('sellers',Seller)