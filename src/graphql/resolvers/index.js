const { getBooks } = require('./books');
const { getPosts } = require('./posts');
const { getComments } = require('./comments');
const { getFollowing } = require('./following');
const { getUser } = require('./users');
const { buildPost } = require('./utils');

module.exports = {
    Query: {
        books: getBooks,
        posts: getPosts,
        following: getFollowing,
    },
    Mutation: {
        addPost: () => {
            return buildPost();
        },
        addComment: () => 'new comment added',
        deletePost: () => 'post deleted',
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
