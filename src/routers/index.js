const newsRouter=require('./new')
const siteRouter=require('./site')
const coursesRouter=require('./courses')
const mystoreRouter=require('./mystore')
const accountsRouter=require('./accounts')
const productsRouter=require('./product')
const productCategoryRouter=require('./productcategory')
function route(app) {
	app.use('/news',newsRouter)	
	app.use('/courses',coursesRouter)
	app.use('/my/store',mystoreRouter)
	app.use('/account',accountsRouter)
	app.use('/products',productsRouter)
	app.use('/product-category',productCategoryRouter)
	app.use('/',siteRouter)
	
}
module.exports=route