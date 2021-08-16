const path = require('path');
const fs = require('fs');
const connection = require('../config/connection');

const query = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();

function buildDB(){
    connection.query(query)
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}

buildDB();