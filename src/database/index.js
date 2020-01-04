const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI;

const connectDatabase = () => {
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('once', () => console.log('I am connected'));
};

const disconnectDatabase = () => {
    mongoose.close();
};

module.exports = {
    connectDatabase,
    disconnectDatabase,
};
