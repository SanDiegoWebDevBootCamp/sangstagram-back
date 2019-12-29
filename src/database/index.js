const mongoose = require('mongoose');
const { find } = require('lodash');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        // we're connected
        console.log('I am connected');
    });
};

const usersDb = [];

const findOrCreateUser = (user, done) => {
    const userInDb = find(usersDb, { email: user.email });
    if (!userInDb) {
        usersDb.push(user);
    }
    return done(null, user);
};

const getUser = (email) => find(usersDb, { email });

module.exports = {
    connectDatabase,
    findOrCreateUser,
    getUser,
};
