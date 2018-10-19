const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(path.resolve('./src/json/accounts.json'), 'utf-8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.resolve('./src/json/users.json'), 'utf-8');
const users = JSON.parse(userData);


const writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.resolve('./src/json/accounts.json'), accountsJSON, 'utf8');
};

module.exports = {
    accounts: accounts,
    users: users,
    writeJSON: writeJSON
};
