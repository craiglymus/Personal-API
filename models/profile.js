const mongoose = require('mongoose'),
Schema = mongoose.Schema

const profileSchema = new Schema ({ 
	name: 'Craig',
	githubUsername: 'craiglymus',
	githubLink: 'https://github.com/craiglymus/Personal-API',
	currentCity: 'San Francisco',
	hobbies: [{name: 'eating', frequency: 'often', favoritFood: 'not sure'}, {name: 'coding', frequency: 'often', favoriteAspect: 'creativity'}]
});

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;

