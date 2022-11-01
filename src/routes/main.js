const express=require('express')
const {route} = require('express/lib/application') 


const routes=express.Router()

routes.get("/", (req, res)=>{
    res.render("index")
})

routes.get('/brocher', (req, res)=>{
    res.render("brocher")
})

routes.get('/product', (req, res)=>{
    res.render("product")
})

routes.get('/about', (req, res)=>{
    res.render("about")
})

routes.get('/cart', (req, res)=>{
    res.render("cart")
})

module.exports=routes