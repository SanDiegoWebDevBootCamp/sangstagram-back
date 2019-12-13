const { getBooks } = require('./books');
const { getPosts } = require('./posts');
const { getComments } = require('./comments');
const { getFollowing } = require('./following');
const { getUser } = require('./users');

module.exports = {
    Query: {
        books: getBooks,
        posts: getPosts,
        following: getFollowing,
    },
    Post: {
        user: getUser,
        comments: getComments,
    },
    User: {
        following: getFollowing,
    },
    Comment: {
        user: getUser,
    },
};
