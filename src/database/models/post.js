const mongoose = require('mongoose');
const PostSchema = require('../schemas/post');

module.exports = mongoose.model('Post', PostSchema);
