const faker = require('faker');
const { range } = require('lodash');

const buildUser = () => (
    {
        id: faker.random.number(),
        ...faker.helpers.userCard(),
        avatar: faker.image.avatar(),
    }
);

const buildUsers = (numberOfUsers) => range(0, numberOfUsers).map(() => buildUser());

const buildComment = () => ({
    id: faker.random.number(),
    comment: faker.lorem.paragraph(),
    date: faker.date.past(),
});

const buildComments = (numberOfComments) => range(0, numberOfComments).map(() => buildComment());

const buildPost = () => ({
    id: faker.random.number(),
    photoUrl: faker.image.nature(),
    caption: faker.lorem.paragraph(),
    datePublished: faker.date.past(),
    likes: faker.random.number(),
});

const buildPosts = (numberOfPosts) => range(0, numberOfPosts).map(() => buildPost());

module.exports = {
    buildUser,
    buildUsers,
    buildComments,
    buildPosts,
    buildPost,
};
