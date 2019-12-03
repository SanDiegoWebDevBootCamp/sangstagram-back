const faker = require('faker');
const { range } = require('lodash');

const buildUser = () => ({
    id: faker.random.number(),
    ...faker.helpers.userCard(),
    avatar: faker.image.avatar(),
});

const buildComments = (numberOfComments) => range(0, numberOfComments).map(() => (
    {
        user: buildUser(),
        id: faker.random.number(),
        comment: faker.lorem.paragraph(),
        date: faker.date.past(),
    }
));

const buildPosts = (numberOfPosts) => range(0, numberOfPosts).map(() => (
    {
        id: faker.random.number(),
        user: buildUser(),
        photoUrl: faker.image.nature(),
        caption: faker.lorem.paragraph(),
        datePublished: faker.date.past(),
        likes: faker.random.number(),
        comments: buildComments(Math.round(Math.random() * 10)),
    }
));

const getPosts = () => (buildPosts(Math.ceil(Math.random() * 10)));

module.exports = {
    getPosts,
};
