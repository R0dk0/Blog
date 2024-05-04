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
    author:{
        type:String,
        required:true
    },
    PostDate:{
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('Posts', PostSchema);