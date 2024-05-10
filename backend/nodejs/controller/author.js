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

module.exports = {
    getAllAuthors,
    createAuthor,
}