const express = require('express');
const path = require('path');
const bp= require('body-parser');
const mysql = require('mysql2');
const app= express();
const port= 5000;
console.log(mysql)
const pageRoutes=require(path.join(__dirname,'routes','pages'));
app.use(bp.json());
app.use(bp.urlencoded({extended:true}))
app.use('/',pageRoutes);

const db = mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE

})
db.connect();

app.listen(port,()=>{
    console.log(`app running on port ${port}😅 🤔 📷 🐒 💺`)
});
