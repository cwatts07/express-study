"use strict";
const express = require('express');
const route = express.Router();
let nextId = 5;
let snackItems = [
    {id: 1, product: 'Twizzlers', price: 4.99, quantity: 2},
    {id: 2, product: 'Snickers', price: 3.50, quantity: 1},
    {id: 3, product: 'Cheetos', price: 4.50, quantity: 99999},
    {id: 4, product: 'Gummy Worms', price: 1.10, quantity: 4},
]

route.get('/', (req, res)=>{
   res.json(snackItems);
})
route.get('/paged',(req,res)=>{
    if(req.query.size){
        const size = parseInt(req.query.size);
        if(size <= snackItems.length){
            res.json(snackItems);
        }else{
            res.json(snackItems.slice(0,size-1))
        }
    }
})
route.get('/:id', (req, res)=>{
   let item = snackItems.find((snack)=>snack.id === parseInt(req.params.id))
   if(!item){
       res.status(404).send('Nothing here')
   }
   res.status(200)
   res.json(item);
})
route.post('/', (req,res)=>{
    if(req.body && req.body.product && req.body.price && req.body.quantity){
        const newSnack = {
            id: nextId++,
            product:req.body.product,
            price: req.body.price,
            quantity: req.body.quantity
        }
        
        snackItems.push(newSnack);
        res.status(201).json(newSnack);
    }else{
        res.sendStatus(400)
    }
})
route.put('/:id', (req,res)=>{
    
})
route.delete('/:id', (req,res)=>{
    
})
module.exports = route;