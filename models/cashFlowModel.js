const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mModel = mongoose.model;
const User = ('./userModel.js');
const { Deposit, Invest, Withdrawal, Account } = ('./accountModel.js');

//*Cash Flow for User and Admin Dashboard
const cashFlowSchema = new Schema({
    accountBal: { type: Number },
    usdtBal: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    deposits: [{ type: Schema.Types.ObjectId, ref: 'Deposit' }],
    investments: [{ type: Schema.Types.ObjectId, ref: 'Invest' }],
    withdrawals: [{ type: Schema.Types.ObjectId, ref: 'Withdrawal' }],
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
});

const CashFlow = mModel('cashFlow', cashFlowSchema);
module.exports = CashFlow;
