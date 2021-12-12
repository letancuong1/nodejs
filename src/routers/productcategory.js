const epress=require('express')
const router=epress.Router()
const productCategoryController=require('../controllers/ProductCategoryController')
router.post('/list',productCategoryController.list)
router.post('/list1',productCategoryController.list1)
router.post('/similar',productCategoryController.similar)
router.post('/product',productCategoryController.product)
module.exports=router