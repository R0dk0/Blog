const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema( {

    authorId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
    },
    email: {
        type: String,
        require: true
    },
    birthDate: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Authors", AuthorsSchema);