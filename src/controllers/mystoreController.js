const Housedb=require('../models/house')
const {mongooesToObject}=require('../util/mongooes')
class SiteController{
	manage(req,res,next){
		Housedb.find({})
		.then(course=>{
			res.render('mystore',{courses:mongooesToObject(course)})
		})
	}
}
module.exports=new SiteController;