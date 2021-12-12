const {mongonoObject}=require('../util/mongooes')
const {mongooesToObject}=require('../util/mongooes')
const Customers=require('../models/customers')
class accountController{
	register(req,res,next){
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000/register');

	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);
	 //    let name=req.body.name
		// let password=req.body.password
		// let adress=req.body.adress
		// let phone=req.body.phone
		// let img=req.body.img
	 //    return res.status(200).json({
	 //    	name:'helo',
	 //    	email:email
	 //    })
		const customers=new Customers(req.body)
		customers.save()
		res.json("đăng kí thành công")
		.catch(next)
		// }
		
	}
	login(req,res,next){
		var data=req.body
		Customers.findOne({
			name:data.name,
			password:data.password,
		})
		.then(customer=>{
			res.json(customer)
		})
		.catch(next)

	}
}
// 
module.exports=new accountController