const House=require('../models/house')
const {mongooesToObject}=require('../util/mongooes')
class SiteController{
	index(req,res,next){
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
		House.find({})
		// .then(courses=>{
		// 	res.render('home',{
		// 		courses:mongooesToObject(courses)
		// 	})
		// })
		
		.then(courses=>{
			res.json(courses)
		})
		
	}
}
module.exports=new SiteController;