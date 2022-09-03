const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mModel = mongoose.model;
const User = ('./userModel.js');
const UserKyc = ('./userKycModel.js')


//* Schema for all deposits done on the platform.
const depositSchema = new Schema({
    amount: { type: Number, min: '5000' },
    currency: { type: Schema.Types.ObjectId, ref: 'UserKyc' },
    date: { type: Date, default: Date.now },
    status:  String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Deposit = mModel ('deposit', depositSchema);
module.exports = Deposit;

const investmentSchema = new Schema({
    amount: { type: String, min: '5000' },
    currency: { type: Schema.Types.ObjectId, ref: 'UserKyc' },
    date: { type: Date, default: Date.now },
    status: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Invest = mModel('invest', investmentSchema);
module.exports = Invest;

//* Schema for all withdrawals done on the platform.
const withdrawalSchema = new Schema({
    amount: { type: String, min: '5000' },
    // currency: { type: Schema.Types.ObjectId, ref: 'UserKyc' },
    date: { type: Date, default: Date.now },
    status: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Withdrawal = mModel('withdrawal', withdrawalSchema);
module.exports = Withdrawal;


//* Schema for users account details.
const accountSchema = new Schema({
    accountNumber: { type: String, require: true },
    bankName: { type: String, require: true },
    accountName: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Account = mModel('account', accountSchema);
module.exports = Account;


//*Cash Flow for User and Admin Dashboard
const cashFlowSchema = new Schema({
    accountBal: { type: Number },
    usdtBal: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    deposits: [depositSchema],
    investments: [investmentSchema],
    withdrawals: [withdrawalSchema],
    account: {accountSchema},
});

const CashFlow = mModel('cashFlow', cashFlowSchema);
module.exports = CashFlow;

