const mongoose=require('mongoose')
const noteSchema=new mongoose.Schema({
    project_title:{
        type: String,
    },
    author:{
        type: String,
    },
    description:{
        type:String,
    },
    tech_used:{
        type:String,
    },
    created:{
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('Project',noteSchema)