const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema({
    balance : {type:Number,required:true},
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        path:'User',
        required:true
    },
    branch : {
        type:mongoose.Schema.Types.ObjectId,
        path:'BranchDetail',
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('MasterAccount',masterAccountSchema);