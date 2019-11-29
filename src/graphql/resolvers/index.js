const books = require('../data/books');

module.exports = {
  Query: {
    books: () => books,
  }
}