const mongoose = require('mongoose'),
Schema = mongoose.Schema

const movieSchema = new Schema ({ 
	title: String,
	director: String,
	yearOfRelease: String
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;