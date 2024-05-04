'use strict'

const Post  = require ('../models/post');

const createPost = async ( req, res ) => {

    const post = new Post ({
        postId: req.body.postId,
        title: req.body.title,
        text: req.body.text,
        author: req.body.author
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({message: err.message})
        
    }
};

module.exports = {
    createPost
}