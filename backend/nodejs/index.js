"use strict"

const express = require('express');
const mongo = require('mongoose');

const Authors = require('./models/author');
const Posts = require('./models/post');
const bodyParser = require('body-parser');

const { createPost, getAllPost, getPostByCategory, getPostByAuthor, getByTitle } = require('./controller/post');
const { getAllAuthors, createAuthor } = require('./controller/author');

mongo.connect('mongodb://212.39.67.141:80/blog')

const app = express();

app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.status(200).send('Hello Blogger')
});

app.get('/authors/all', getAllAuthors);


app.get('/posts/all', getAllPost);
app.get('/posts/byTitle',  getByTitle);
app.get('/posts/category', getPostByCategory);
app.get('/posts/getByAuthor', getPostByAuthor);


app.post('/author/create', createAuthor)
app.post('/post/create', createPost);

app.listen(3000, () => {

    console.log("Server Started");
})