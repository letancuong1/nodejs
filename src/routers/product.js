const epress=require('express')
const router=epress.Router()
const productController=require('../controllers/productController')
// router.get('/add',productController.add)
const multer  = require('multer')
const upload = multer({ dest: './' })
router.post('/add',productController.add)
router.get('/listproduct',productController.listproduct)
router.post('/orther',productController.orther)
router.post('/showorther',productController.showorther)
router.post('/category',productController.category)
router.post('/showcategory',productController.showcategory)
router.post('/seller',productController.seller)
router.post('/showseller',productController.showseller)
router.post('/sellerdemo',productController.sellerdemo)
router.post('/comment',productController.comment)
router.post('/showcomment',productController.showcomment)
router.post('/showcustomer',productController.showcustomer)
module.exports=router