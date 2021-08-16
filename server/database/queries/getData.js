const connection = require('../config/connection');
const query = 'select * from users;';

const getData = () => {
    return connection.query(query);
};


module.exports = getData;