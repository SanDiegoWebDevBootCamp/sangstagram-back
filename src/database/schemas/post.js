const { Schema } = require('mongoose');
const UserSchema = require('./user');
const CommentSchema = require('./comment');

const PostSchema = new Schema({
    user: {
        type: UserSchema,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dateAdded: {
        type: Date,
        default: Date.now(),
    },
    comments: [CommentSchema],
});

module.exports = PostSchema;
