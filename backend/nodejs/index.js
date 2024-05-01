"use strict"

const express = require('express');
const mongoose = require('mongoose');

const Authors = require('./models/author');
const Posts = require('./models/post');

const app = express();





app.listen(3000, () => {

    console.log("Server Started");
})