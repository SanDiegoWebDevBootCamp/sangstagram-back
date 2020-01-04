const { Schema } = require('mongoose');
const UserSchema = require('./user');

const CommentSchema = new Schema({
    user: {
        type: UserSchema,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = CommentSchema;