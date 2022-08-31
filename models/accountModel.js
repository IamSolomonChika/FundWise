const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mModel = mongoose.model;
const { User, UserKyc} = ('./userModel.js')


//*Cash Flow for User and Admin Dashboard
const cashFlowSchema = new Schema({
    accountBal: {type: longNumber},
    usdtBal: {type: longNumber},
    user: {type: Schema.Types.id, ref: User},
    deposits: [{type: Schema.Types.id, ref: 'Deposit'}],
    withdrawals: [{type: Schema.Types.id, ref: 'Withdrawal'}],
    account: {type: Schema.Types.id, ref: 'Account'}
});

const CashFlow = mModel('cashFlow', cashFlowSchema);
model.exports = CashFlow;

//* Schema for all deposits done on the platform.
const depositSchema = new Schema({
    amount: {type: String, min: '5000'},
    currency: {type: Schema.Types.baseCurrency, ref: UserKyc},
    date: {type: Date, default: Date.now},
    user: {type: Schema.Types.id, ref: User},
});

const Deposit = mModel('deposit', depositSchema);
model.exports = Deposit;


//* Schema for all withdrawals done on the platform.
const withdrawalSchema = new Schema({
    amount: {type: String, min: '5000'},
    currency: {type: Schema.Types.baseCurrency, ref: UserKyc},
    date: {type: Date, default: Date.now},
    user: {type: Schema.Types.id, ref: User},
});

const Withdrawal = mModel('withdrawal', withdrawalSchema);
model.exports = Withdrawal;


//* Schema for users account details.
const accountSchema = new Schema({
    accountNumber: {type: String, require: true},
    bankName: {type: String, require: true},
    accountName: { type: String},
    user: {type: Schema.Types.id, ref: User},
});

const Account = mModel('account', withdrawalSchema);
model.exports = Account;
