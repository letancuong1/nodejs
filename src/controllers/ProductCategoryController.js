const Product=require('../models/product')
const Orthers=require('../models/orthers')
const Category=require('../models/category')
const Seller=require('../models/seller')

const {mongonoObject}=require('../util/mongooes')
class productCategoryController{
	list(req,res,next){
		Category.find({categoryparent:req.body.category})
		.then(item=>{
			res.json(item)
		})
	}
	list1(req,res,next){
		Category.find({_id:req.body.id})
		.then(item=>{
			res.json(item)
		})

	}
	async product(req,res,next){
		var b=[]
		for(var i=0;i<req.body[0].length;i++){
			await Product.find({CategoryID:req.body[0][i]._id})
			.then(item=>{
				if(item[0]){
					b.push(item)
				}
			})
		}
		
		await res.json(b)
	}
	similar(req,res,next){
		Product.find({CategoryID:req.body.id})
		.then(item=>{
			res.json(item)
		})
	}
}
module.exports=new productCategoryController;