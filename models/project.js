const mongoose = require('mongoose')


const projectSchema = new mongoose.Schema({
    name:{
     type: String,
     required:true
    },

    projectDate:{
        type:Date,
        default:Date.now

    },
    course:{
       type:String,
       required:true
    }
    
})
module.exports = mongoose.model('project', projectSchema)


