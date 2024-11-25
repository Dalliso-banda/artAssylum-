const express = require('express');
const router = express.Router();
router.use(express.static('../clientSide'));
router.post('/createAccount',(req,res)=>{        
     const {username,email,pwd}=req.body;
    let fields =[username,email,pwd]
    console.log(fields);
    res.send('account created');
})
module.exports=router;