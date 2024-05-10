'use strict'

const Post  = require ('../models/post');

const createPost = async ( req, res ) => {

    const post = new Post ({
        postId: req.body.postId,
        title: (req.body.title).toLowerCase(),
        text: req.body.text,
        category: req.body.category,
        author: req.body.author
    })
    try {
        const newPost = await post.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({message: err.message})
        
    }
};

const getAllPost = async(req,res) => {
    Post.find()
        .then((post) => {
            res.json(post)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

const getByTitle = async(req,res) => {
    Post.find({title: req.query.title})
        .then((post) => {
            res.json(post)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

const getPostByCategory = async (req, res) => {
    Post.find({category: req.query.category})
        .then((post) => {
            res.json(post)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

const getPostByAuthor = async (req, res) => {
    Post.find({author: req.query.author})
        .then((post) => {
            res.json(post)
        })
        .catch((err) =>{
            res.status(400).json({message: err.message})
        })
};


module.exports = {
    createPost,
    getAllPost,
    getPostByCategory,
    getPostByAuthor,
    getByTitle,
}