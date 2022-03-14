const express = require('express');
const { appendFile } = require('fs');
const Branch = require('../models/branchDetail.model');
const MasterAccount = require('../models/masterAccount.model');
const router = express.Router();

router.post('/branch',async(req,res) =>{
    try {
        let branch = await Branch.create(req.body);
        return res.status(200).send(branch);


    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post("/masteraccount", async (req, res) => {
  try {
    let masAcc = await MasterAccount.create(req.body);
    return res.status(200).send(masAcc);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get('/masteraccount/:accountId',async (req,res) => {
    
    try {
        let accountId = req.params.accountId;
        console.log(accountId);
        let ma = MasterAccount.findById(accountId);
      return res.status(200).send(ma);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }

})
module.exports = router;