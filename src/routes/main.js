const express=require('express')
const {route} = require('express/lib/application') 


const routes=express.Router()

routes.get("/", (req, res)=>{
    res.render("home")
})

routes.get('/menu', (req, res)=>{
    res.render("menu")
})

routes.get('/contact', (req, res)=>{
    res.render("contact")
})

routes.get('/about', (req, res)=>{
    res.render("about")
})

routes.get('/cart', (req, res)=>{
    res.render("cart")
})

module.exports=routes