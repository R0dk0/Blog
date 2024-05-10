"use strict"

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type:String,
        required:true
    },
    text: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    PostDate: {
        type: String,

        // default: Date.now,
        default:  () => {
            const date = new Date()
            const formatDate = date.toString().slice(0,24);
            return formatDate;
        },
    }
});

module.exports = mongoose.model('Posts', PostSchema);