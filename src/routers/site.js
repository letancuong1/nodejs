const epress=require('express')
const router=epress.Router()
const SiteController=require('../controllers/SiteController')
router.use('/',SiteController.index)
module.exports=router