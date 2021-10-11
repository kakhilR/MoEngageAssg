const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    animeId:{type: 'string',required:true,trim:true},
    description:{type: 'string',required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},
{timestamps: true}
)

module.exports = mongoose.model('Review',reviewSchema)