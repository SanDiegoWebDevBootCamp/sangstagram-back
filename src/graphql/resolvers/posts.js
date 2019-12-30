const faker = require('faker');
const { buildPosts } = require('./utils');

const getPosts = (obj, args, context, info) => {
    console.log({ obj, args, context, info });

    return buildPosts(faker.random.number(10));
};

module.exports = {
    getPosts,
};
