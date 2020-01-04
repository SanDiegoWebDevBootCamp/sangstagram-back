const PostModel = require('../models/post');

const createPost = ({ user, caption, photoUrl }) => {
    return new Promise((resolve, reject) => {
        PostModel.create({
            user,
            photoUrl,
            caption,
        }, (err, post) => {
            if (err) reject(err);
            resolve(post);
        });
    });
};

module.exports = {
    createPost,
};
