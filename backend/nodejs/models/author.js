const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema( {

    name: {
        type: String,
        require:true
    },
    
})