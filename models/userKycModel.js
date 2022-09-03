const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./usersModel.js');


const userKycSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String, unique: true },
    address: { type: String },
    city: { type: String },
    zip: { type: Number },
    state: { type: String },
    Country: { type: String },
    baseCurrency: { type: String },
    isDone: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});

const UserKyc = mongoose.model('userKyc', userKycSchema);
module.exports = UserKyc;
