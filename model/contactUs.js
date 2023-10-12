const mongoose=require('mongoose')

const ContactUsSchema= mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Country:{
        type:String,
        require:true
    },
    City:{
        type:String,
        require:true,
    },
    MobileNumber:{
        type:String,
       
    },
    Message:{
        type:String,
    }
})

const contact= new mongoose.model('conatactUs',ContactUsSchema)
module.exports=contact