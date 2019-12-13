const faker = require('faker');
const { buildPosts } = require('./utils')

const getPosts = () => buildPosts(faker.random.number(10));

module.exports = {
    getPosts,
};
