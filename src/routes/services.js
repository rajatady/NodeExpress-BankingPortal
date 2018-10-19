const express = require('express');
const {accounts, users, writeJSON} = require('../data');
const router = express.Router();

router.get('/transfer', (req, res) => {
    res.render('transfer', {user: users[0]})
});

router.get('/payment', (req, res) => {
    res.render('payment', {account: accounts.credit})
});

router.post('/transfer', (req, res) => {
    accounts[req.body.to].balance += parseInt(req.body.amount);
    accounts[req.body.from].balance -= parseInt(req.body.amount);
    writeJSON();
    res.render('transfer', {message: "Transfer Completed"});
});

router.post('/payment', (req, res) => {
    accounts.credit.available += parseInt(req.body.amount);
    accounts.credit.balance -= parseInt(req.body.amount);
    writeJSON();
    res.render('payment', {message: "Payment Successful", account: accounts.credit});
});


module.exports = router;
