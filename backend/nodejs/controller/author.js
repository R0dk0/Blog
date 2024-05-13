'use strict'

const Author = require ('../models/author');

const getAllAuthors = async (req, res) => {
        Author.find()
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const createAuthor = async (req,res) => {

    const author = new Author ({
        authorId: req.body.authorId,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        birthDate: req.body.birthDate,
        description: req.body.description,
    })
    try {
        const newAuthor = await author.save();
        res.status(201).json(newAuthor)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
};

const getAuthorByAge = async (req,res) =>{

    Author.find({age: req.query.age}) //#gt, gte, lt , lte {req.query.age} - в сайта на монгоосе документацията кое какво е 
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

const getAuthorByName = async (req, res) => {

    Author.findOne({name: req.query.name})
        .then((author) =>{
            res.json(author)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

const getAuthorByEmail = async (req, res) => {

    Author.findOne({email: req.query.email})
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
};

module.exports = {
    getAllAuthors,
    createAuthor,
    getAuthorByAge,
    getAuthorByName,
    getAuthorByEmail,
}