const { getBooks } = require('./books');
const { getPosts } = require('./posts');

module.exports = {
    Query: {
        books: getBooks,
        posts: getPosts,
    },
};
