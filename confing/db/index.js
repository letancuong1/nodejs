const mongoose = require('mongoose');
async function connect(){
	try{
		await mongoose.connect('mongodb://localhost:27017/cuongdb');
		console.log('connect sussecfully')
	}
	catch(err){
		console.log('connect falura')
	}
}

module.exports={connect};