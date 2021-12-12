const epress=require('express')
const router=epress.Router()
const newController=require('../controllers/NewController')
router.use('/',newController.index)
module.exports=router