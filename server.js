"use strict";
const express = require("express");
const app = express();
const port = 3000;
let cart = require('./routes');

app.use(express.json());
app.use('/cart-items', cart);
//404 fallback must be last
app.get('*',(req,res)=>{
    res.send('<h1>Ummm maybe you should ask for directions</h1>');
})

app.listen(port, ()=>{console.log(`server listening on port ${port}`)});