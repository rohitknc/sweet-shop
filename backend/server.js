const express=require("express");
const conn=require("./conn");
const sweetshop=require("./ap");
const cors=require("cors");
const bodyparser=require("body-parser");
const app=express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',sweetshop);
port=process.env.PORT||3010;
app.listen(port,()=>{
	console.log("application is running on the http://localhost:3010");
});