const epress=require('express')
const router=epress.Router()
const mystoreController=require('../controllers/mystoreController')
router.use('/',mystoreController.manage)
module.exports=router