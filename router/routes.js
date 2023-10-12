const {signup,login,Contactus}=require('../controller/user')
const express=require('express')
const router=express.Router()

router.post('/signup',signup);
router.post('/login',login);
router.post('/contact',Contactus)

module.exports=router;