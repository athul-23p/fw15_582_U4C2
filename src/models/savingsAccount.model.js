const mongoose = require('mongoose');

const savingsAccountSchema = new mongoose.Schema({
    account_number: {type:Number,required:true,unique:true},
    balance : {type:Number,required:true},
    interestRate : {type:Number,required:true},
    masterAccount : {
        type: mongoose.Schema.Types.ObjectId,
        path: 'MasterAccount',
        required: true
    }
},{
    versionKey:false,
    timestamps:true
})


module.export = mongoose.model('SavingsAccount',savingsAccountSchema);