const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.get("/",(req,res)=>{
    //console.log("Hello World");
    res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    var result = Number(req.body.n1) + Number(req.body.n2);
    res.send("ddition value is :"+result);
})

app.get("/bmiCalculator",(req,res)=>{
    
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmiCalculator",(req,res)=>{
    var result = (parseFloat(req.body.weight)) /( parseFloat(req.body.height)*parseFloat(req.body.height));
    res.send("BMI is :"+result +"kg/m^2");
})

app.listen(port,()=>{
    console.log('server started at port 3000');
})