const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongooseDelete = require('mongoose-delete');
const Comment = new Schema({
  productID:{type:String},
  customerID:{type:String},
  commentText:{type:String},
  commentImg:[{type:String}],
  commentVideo:{type:String},
  createDate:{type:Date,default:Date.now}
});
Comment.plugin(mongooseDelete,{ overrideMethods: 'all' });

module.exports=mongoose.model('Comments',Comment)