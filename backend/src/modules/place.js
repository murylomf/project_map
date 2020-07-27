const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    year: String,
    description: String,
});

module.exports =  mongoose.model('Place', PlaceSchema) 