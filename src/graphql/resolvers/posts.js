const faker = require('faker');
const { upload } = require('../../images');
const { createPost } = require('../../database/dataAccess/post');
const { buildPosts } = require('./utils');

const getPosts = () => {
    return buildPosts(faker.random.number(10));
};

const addNewPost = (parent, args, context) => {
    const { photo, caption } = args;
    const { user } = context;

    return photo.then((file) => {
        return upload(file)
            .then((result) => {
                const post = {
                    user,
                    photoUrl: result.secureUrl,
                    caption,
                };

                return createPost(post);
            });
    });
};

module.exports = {
    getPosts,
    addNewPost,
};
