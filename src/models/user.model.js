const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : { type: String,required: true},
    middleName: {type:String},
    lastName: {type:String, required:true},
    age: {type: Number,required:true},
    email : {type: String, required:true},
    address : {type:String,required:true},
    gender : {type:String,default:"Female"},
    type: {type: String, default:"Customer"},
    relationManager : {
        type: mongoose.Schema.Types.ObjectId,
        path:'User',
        required:true
    }

},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('User',userSchema);