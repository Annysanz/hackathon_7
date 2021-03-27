const express = require('express')
const rtUsers = express.Router()
const daoUsers = require('../dao/daoUsers')

rtUsers.post('/signup',(req,res)=>{
    console.log(req.body)
    daoUsers.signup(req.body)
    
        .then(user=>res.json(user))
})

rtUsers.post('/guardar',(req,res)=>{
    daoUsers.signup(req.body)
        .then(user=>res.json(user))
})

rtUsers.get('/listar',(req,res)=>{
    daoUsers.listar()
        .then(users=>res.json(users))
})

rtUsers.get('/get',(req,res)=>{ 
    daoUsers.findByEmail(req.query.email)
        .then(user=>res.json(user))
})

rtUsers.post('/delete/:id',(req,res)=>{
    daoUsers.delete(req.params.id)
    res.json({res: 'ok'})
})

rtUsers.post('/login',(req,res)=>{
    console.log(req.body.email,req.body.password)
    daoUsers.signin(req.body.email,req.body.password)
        .then(data=>res.json(data))
    })


module.exports= rtUsers