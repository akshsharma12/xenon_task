const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const path=require("path")
const templatepath=path.join(__dirname,'./tempelates')
var cons = require('consolidate');
const router=require('./router/routes')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/xenostack')
try{
    console.log("mongodb connected")
}catch(error){
    console.log(error)
}

app.use(express.json())
app.engine('html', cons.swig)
app.set("view engine","html")
app.set("views",templatepath)
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)


app.get("/",(req,res)=>{
    res.render("home") //homee
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/login",(req,res)=>{
   res.render("login")
})

app.get("/contact",(req,res)=>{
    res.render("contactUS")
})
app.listen(4000,()=>{
    console.log("port connected at 4000")
})
