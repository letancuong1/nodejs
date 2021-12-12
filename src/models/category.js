const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Category = new Schema({
  categoryparent:{type:String},
  categoryname:{type:String},
  date:{type:Date,default:Date.now},
});

module.exports=mongoose.model('categorys',Category)