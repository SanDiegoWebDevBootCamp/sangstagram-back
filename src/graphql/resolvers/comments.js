const faker = require('faker');
const { buildComments } = require('./utils');

const getComments = () => buildComments(faker.random.number(10));

module.exports = {
    getComments,
};
