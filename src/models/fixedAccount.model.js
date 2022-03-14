const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
    masterAccount: {
      type: mongoose.Schema.Types.ObjectId,
      path: "MasterAccount",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.export = mongoose.model("FixedAccount", fixedAccountSchema);
