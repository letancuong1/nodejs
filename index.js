const express = require('express')
var morgan = require('morgan')
const app = express()
const path =require('path')
var exphbs  = require('express-handlebars');
var route=require('./src/routers/index')
const db=require('./confing/db')

const port = 3000
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })
//var slug = require('mongoose-slug-generator');
var mongoose = require('mongoose');
var methodOverride = require('method-override')
var cors = require('cors')
// // const { createProxyMiddleware } = require('http-proxy-middleware');
// // app.use('/account/register', createProxyMiddleware({ target: 'http://localhost:3000/', changeOrigin: true }));
app.use(cors())

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

// app.use(bodyParser.urlencoded({
//   parameterLimit: 100000,
//   limit: '50mb',
//   extended: true
// }));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(bodyParser());

app.use(methodOverride('_methods'))
//mongoose.plugin(slug);
// app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.engine('handlebars',
  exphbs({
    extname:'.handlebars',
    helpers:{
      sum:(a,b)=>a+b,
    }
  })
);


app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')));
db.connect()
app.use(express.json());
app.use(express.urlencoded());
route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
