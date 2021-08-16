const connection = require('../config/connection');


const postData = (user) => {
    return connection.query(`insert into users (name,location) values($1, $2);`, [user.name,user.location]);
};


module.exports = postData;