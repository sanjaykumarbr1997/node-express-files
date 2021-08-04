const express = require("express");
const app = express();
const port =3000;
 
app.get("/",function(req,res){
    //console.log(request);
    //res.send("hello")
    res.send("<h1>Hello ,world!</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("contact me at snjkumarbr@gmail.com");
})

app.get("/about",(req,res)=>{
    res.send("currenty pursing my training");
})
app.get("/location",(req,res)=>{
    res.send("india");
})

app.listen(port,function(){
    console.log("server started at port 3000");
});

