var express = require("express");
var app=express();
app.get("/",function (req,resp){
    resp.send("Sever is ONN");
})
app.listen(3030);
console.log("sever chalu zala re-------");
