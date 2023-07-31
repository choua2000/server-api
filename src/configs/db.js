const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'chouavang', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
    logging: false
})

sequelize.authenticate().then(() => {
    console.log('Server connected database successfully...');
}).catch((error) => {
    console.log(error)
})

sequelize.sync();
module.exports = sequelize;

