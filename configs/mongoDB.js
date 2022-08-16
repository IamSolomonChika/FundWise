const mongoose = require('mongoose');

const connection = {};

async function connect() {
    if (connection.isConnected ) {
        return
    }
    const db = await mongoose.connect(process.env.MONGODB_URL)

    connection.isConnected = db.connections[0].readyState;
};

module.exports = connect;