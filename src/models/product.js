const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Products = new Schema({
  ProductName: { type: String },
  SellerID: { type: String },
  CategoryID:{ type: String },
  Quantity:{type:Number},
  Img:{type:String},
  Img1:{type:String},
  Img2:{type:String},
  Img3:{type:String},
  Img4:{type:String},
  Description:{type:String},
  Price:{type:Number},
  Pricereduce:{type:Number},
  ParameterHeader:{type:String},
  ParameterContent:{type:String},
  Origin:{type:String},
  Trademark:{type:String},
  createAt:{type:Date,default:Date.now},
});
module.exports=mongoose.model('product',Products)