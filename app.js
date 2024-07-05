import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';
const app = express();

//to link router
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import  subCategoryRouter from './routes/subcatagoery.routes.js' 
import shipmentRouter from './routes/shipmentroutes.js';
import BidRouter from './routes/bid.routes.js'
//to overcome cross origin problem
app.use(cors());
app.use(fileupload()); 
//to extract body data from request 
//(POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware for url routing
app.use("/user",UserRouter); 
app.use("/category",CategoryRouter); 
app.use("/subcategory",subCategoryRouter)
app.use("/ship",shipmentRouter)
app.use("/bid",BidRouter)
app.listen(3001);
console.log("Server invoked at link http://localhost:3001");