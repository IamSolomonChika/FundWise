const express = require('express');
const { Account, Deposit, Withdrawal, CashFlow } = require('../models/accountModel');
const { User, UserKyc } = require('../models/usersModel')
const got = require('got')
const { customAlphabet: generate } = require("nanoid");
const Flutterwave = require('flutterwave-node-v3');

const CHARACTER_SET =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const TAXREF_LENGTH = 7;

const taxRef = generate(CHARACTER_SET, TAXREF_LENGTH);

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

// Make deposit 
exports.Deposit = async (req, res, next) => {

    const depositAmount = req.body.amount;
    const url = "";
    const customerName = UserKyc.firstName + " " + UserKyc.lastName;

    try {
        const response = await got.post('https://api.flutterwave.com/v3/payments', {
            headers: {
                Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
            },
            json: {
                tx_ref: taxRef,
                amount: depositAmount,
                currency: UserKyc.baseCurrency,
                redirect_url: url,
                meta: {
                    consumer_id: "...",
                    consumer_mac: "...."
                },
                customer: {
                    email: User.email,
                    phonenumber: UserKyc.phoneNumber,
                    name: customerName,

                },
                customizations: {
                    title: "FundWise Payments",
                    logo: "...",
                }
            }
        });

        flw.Transaction.verify({ id: transactionId })
            .then((response) => {
                if (
                    response.data.status === "successful"
                    && response.data.amount === expectedAmount
                    && response.data.currency === expectedCurrency) {
                    // Success! Confirm the customer's payment
                    Deposit.create(response).then(function (deposit) {
                        res.send(deposit)
                    });
                }
            })


    } catch (err) {
        console.log(err.code);
        console.log(err.response.body);
    }
}


exports.Withdraw = async (req, res) => {
    const details = {
        account_bank: Account.bankName,
        account_number: Account.accountNumber,
        amount: Withdrawal.amount,
        narration: "Income withdrawal",
        currency: UserKyc.baseCurrency,
        reference: generateTransactionReference(),
        callback_url: "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
        debit_currency: UserKyc.baseCurrency
    };

    if (details.amount <= CashFlow.accountBal && UserKyc === isDone) {
        flw.Transfer.initiate(details)
            .then(console.log)
            .catch(console.log);
    }
}