const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ProblemsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user' 
    },

    problemName:{
        type:String,
        required:true
    },
    
    platformName:{
        type:String,
        default:"NA"
    },

    topic:{
        type:String,
        default:"NA"
    },

    description:{
        type:String,
        default:"NA" 
    },

    websiteURL:{
        type:String,
        required:true
        
    },

    date:{ 
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('problems', ProblemsSchema);