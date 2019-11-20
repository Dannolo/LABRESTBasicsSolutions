const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const item = require("./Model/Item")

function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele.name != value;
    });
 
 }
 

let cart = []

app.route("/cart")
    .get(function(req, res){
        res.json(cart)
        })
    .post(function(req, res){
        let new_item = new item(req.body.name, req.body.type)
        cart.push(new_item)
        res.json(cart)
    });

app.route("/cart/:itemName")
    .put(function(req, res){
        cart.forEach(function(item){
            if(item.name === req.params.itemName)
            item.type = req.body.type
        } 
        )
        res.json(cart)
    })
    .delete(function(req, res){
        cart = arrayRemove(cart, req.params.itemName);
        res.json(cart)
    })

app.use(function(req, res){
    res.status(404).send("BAD REQUEST")
})

app.listen(port)
console.log("Server up on port " + port)
