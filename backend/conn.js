var mysql=require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    port:'3306',
    user:"root",
    password:"Knc@9177",
    database:"sweetshop"
});
conn.connect(function(err){
if(err){
    console.log("not connected");
}
else{
 console.log("connected successfully......");
}
});
module.exports=conn;