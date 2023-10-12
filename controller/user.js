const modal= require('../model/user')
const modal1=require('../model/contactUs')
const bcrypt=require('bcryptjs')


async function signup(req,res)
{
    const data={
       UserName:req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword
    }
         const check= await modal.findOne({Email:req.body.Email})
            if(check){res.send("already register")}
    else{
        try{
    const info = await modal.create(data)
    console.log(info)
    res.status(200).json({
        statusCode: 200,
        success: true,
        data: info,
        message: "data is inserted"})
}catch(error){
    res.status(400).json({
    statusCode: 400,
    success: false,
    message: error})}
}
}

async function login(req,res)
{
    const info= await modal.findOne({Email:req.body.Email})
    if(!info)
        {
            res.status(400).json({
                success: false,
                message: "no email id found"
            })
        }
    else
    {
        try{
            const finduser= await bcrypt.compare(req.body.Password,info.Password)
            if(finduser)
            res.status(200).json({
            success:true,
            message:"login succesfull"
            })
            else
            {
            res.status(400).json({
            success:false,
            message:"Password is incorrect"
    })}
        }catch(error)
        {
          res.status(400).json({
            message:error
          })
        }
    }
}

async function Contactus(req,res)
{
const data={
    Name:req.body.Name,
    Email:req.body.Email,
    Country:req.body.Country,
    City:req.body.City,
    MobileNumber:req.body.MobileNumber,
    Message:req.body.Message
}
try{
const info= await modal1.create(data)
console.log(info)
res.status(200).json({
    data:info,
    message:"response have been submited"
})
}catch(error)
{
    res.status(400).json({
        message:error
    })
}

}


module.exports={signup,login,Contactus};