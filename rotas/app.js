const express = require('express')
const app = express()

app.get("/", function(req,res){
    res.send("Minha primeira página")
})

app.get("/sobre", function(req,res){
    res.send("Minha página sobre")
})

app.get("/historia", function(req,res){
    res.send("Minha página de história")
})

app.get("/caneca", function(req,res){
    res.sendFile(__dirname + "/html/caneca.html")
})

app.get("/copo", function(req,res){
    res.sendFile(__dirname + "/html/copo.html")
})

app.listen(8081, function(req,res){
    console.log("Servidor funcionando!")
})
