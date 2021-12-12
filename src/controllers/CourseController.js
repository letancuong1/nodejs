const Housedb=require('../models/house')
const {mongonoObject}=require('../util/mongooes')
const {mongooesToObject}=require('../util/mongooes')
class SiteController{
	show(req,res,next){
		Housedb.findOne({name:req.params.name})
		.then(courses=>{
			res.render('detailsourse',{courses:mongonoObject(courses)})
		})
		.catch(next)
	}
	create(req,res,next){
		res.render('createsourse')
	}
	store(req,res,next){
		const formData=req.body
		formData.img=`https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`
		const courses=new Housedb(formData)
		courses.save()
		res.send("save sussesse")
		.catch(next)

	}
	edit(req,res,next){
		Housedb.findOne({id:req.params.id})
		.then(courses=>{
			res.render('edit',{courses:mongonoObject(courses)})
		})
		.catch(next)
	}
	update(req,res,next){
		Housedb.updateOne({_id:req.params.id},req.body)
		.then(()=>res.redirect('../my/store/courses'))
		
	}
	delete(req,res,next){
		Housedb.delete({_id:req.params.id},req.body)
		.then(()=>res.send('đã xóa'))
		
	}
	showgarbage(req,res,next){
		Housedb.findDeleted({})
		.then(courses=>{
			res.render('garbage',{courses:mongooesToObject(courses)})
		})
	}

}
module.exports=new SiteController;