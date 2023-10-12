const mongoose= require('mongoose')
const bcrypt= require('bcryptjs')

const userschema=new mongoose.Schema({
    UserName:{
        type:String,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    ConfirmPassword:{
        type:String,
        required:true,
    }
   })


userschema.pre('save',async function(next)
{
    this.Password=await bcrypt.hash(this.Password,10)
    next()
})


const user=new mongoose.model('task',userschema)

module.exports=user;