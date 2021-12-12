const epress=require('express')
const router=epress.Router()
const courseController=require('../controllers/CourseController')
router.get('/create',courseController.create)
router.post('/store',courseController.store)
router.get('/:id/edit',courseController.edit)
router.put('/:id',courseController.update)
router.delete('/:id',courseController.delete)
router.get('/garbage',courseController.showgarbage)
router.get('/:name',courseController.show)

module.exports=router