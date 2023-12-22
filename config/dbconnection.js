const { sequelize } = require('../models/');

async function main() {
    try {
        await sequelize.sync();
        console.log('Database connection successful!');
        
        
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

module.exports = { main }