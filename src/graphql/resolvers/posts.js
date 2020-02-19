const faker = require('faker');
const { upload } = require('../../images');
const { createPost } = require('../../database/dataAccess/post');
const { buildPosts } = require('./utils');

const getPosts = () => {
    return buildPosts(faker.random.number(10));
};

const addNewPost = async (parent, args, context) => {
    const { user } = context;

    try {
        const file = await args.photo;
        const uploadResult = await upload(file.stream);

        return createPost({
            user,
            photoUrl: uploadResult.secureUrl,
            caption: args.caption,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getPosts,
    addNewPost,
};
