const faker = require('faker');
const { buildUsers } = require('./utils');

const getFollowing = () => buildUsers(faker.random.number(10));

module.exports = {
    getFollowing,
};
