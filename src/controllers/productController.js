const Product=require('../models/product')
const Customers=require('../models/customers')
const Orthers=require('../models/orthers')
const Category=require('../models/category')
const Seller=require('../models/seller')
const Comment=require('../models/comments')
const {mongonoObject}=require('../util/mongooes')
class productController{
	add(req,res,next){
		
		// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    const products=new Product(req.body);
	    products.save()
		res.json("thêm sản phẩm thành công")
		.catch(next)

	}
	async listproduct(req,res,next){
		await Product.find({})
		.then(product=>{
			res.json(product)
		})
	}
	async orther(req,res,next){
		var b=null
		const orther=new Orthers(req.body)
		await Orthers.find({customersID:req.body.customersID})
		// await orther.save()
		// res.json('thêm vào giỏ hàng thành công')
		.then(a=>{
			for(var i=0;i<a.length;i++){
				if(a[i].productID==req.body.productID){
					b=1
				}
			}
		})
		.catch(next)
		if(b==1){
			res.json('đã tồn tại vào giỏ hàng để nhập số lượng')
		}else{
			orther.save()
			res.json('thêm vào giỏ hàng thành công')
		}
		// // 
	}
	async showorther(req,res,next){
		var value=null
		var array=[]
		await Orthers.find({customersID:req.body.id})
		.then(a=>{
			value=a
			// for(var i=0;i<a.length;i++){
			// 	// Product.find({_id:a[i].productID})
			// 	// .then(c=>{
			// 	// 	bien.push("haaa")
			// 	// })
			// 	bien.push('hhhh')

			// }
		})
		
		for(var i=0;i<value.length;i++){
			await Product.find({_id:value[i].productID})
			.then(c=>{
				array.push(c)
			})
		}
		await res.json(array)
	}
	category(req,res,next){
		const category=new Category(req.body)
		category.save()
		res.json('thêm category thành công')
	}
	showcategory(req,res,next){
		Category.find({})
		.then(category=>{
			res.json(category)
		})
	}
	seller(req,res,next){
		const seller=new Seller(req.body)
		seller.save()
		res.json('thêm người bán thành công')
	}
	async showseller(req,res,next){
		var a=0
		var b=null
		await Seller.find({nameseller:req.body.nameseller})
		.then(seller=>{
			// res.json(seller)
			if(seller[0]){
				a=a+1
				b=seller
			}
		})
		await Seller.find({passwordseller:req.body.passwordseller})
		.then(sell=>{
			if(sell[0]){
				a=a+1
			}
		})
		if(a==2){
			await res.json(b)
		}

	}
	sellerdemo(req,res,next){
		if(req.body.id){
			Seller.findOne({_id:req.body.id})
			.then(seller=>{
				res.json(seller)
			})
		}
	}
	comment(req,res,next){
		const comment=new Comment(req.body)
		comment.save()
		res.json('thêm bình luận thành công')
		
	}
	showcomment(req,res,next){
		Comment.find({productID:req.body.productID})
		.then(item=>{
			res.json(item)
		})
	}
	async showcustomer(req,res,next){
		var a=[]
		for(var i=0;i<req.body.customerID.length;i++){
			await Customers.findOne({_id:req.body.customerID[i]})
			.then(item=>{
				a.push(item)
				// res.json(item)
			})
		}

		
		await res.json(a)
	}
}
module.exports=new productController