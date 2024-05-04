const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema( {

    name: {
        type: String,
        require:true
    },
    age: {
        type: String,
    },
    email: {
        type: String,
        require: true
    },
    birthDate: String,
    desctiption: String,
});

module.exports = mongoose.model("Authors", AuthorsSchema);