const UserModel = require('../models/user');

const getUser = (username) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ username }, (err, user) => {
            if (err) reject(err);
            resolve(user);
        });
    });
};

const createUser = ({ username, email }) => {
    return new Promise((resolve, reject) => {
        UserModel.create({ username, email }, (err, user) => {
            if (err) reject(err);
            resolve(user);
        });
    });
};

const findOrCreateUser = ({ username, email }) => {
    return new Promise((resolve, reject) => {
        getUser(username)
            .then((userInDb) => {
                if (userInDb != null) resolve(userInDb);

                return createUser({ username, email })
                    .then(resolve)
                    .catch(reject);
            })
            .catch(reject);
    });
};

module.exports = {
    getUser,
    createUser,
    findOrCreateUser,
};
