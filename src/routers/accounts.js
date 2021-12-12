const epress=require('express')
const router=epress.Router()
const accountController=require('../controllers/accountController')
router.get('/register',accountController.register)
router.post('/register',accountController.register)
router.get('/login',accountController.login)
router.post('/login',accountController.login)
module.exports=router