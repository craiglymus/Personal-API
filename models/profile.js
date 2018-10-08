const mongoose = require('mongoose'),
Schema = mongoose.Schema

const profileSchema = new Schema ({ 
	name: 'Craig',
	githubUsername: 'craiglymus',
	githubLink: 'https://github.com/craiglymus/Personal-API'
});

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;


name - a string
githubUsername - a string
githubLink - a url to your github profile
githubProfileImage - the url of your github profile image
personalSiteLink - a link to your personal site.
currentCity
pets - an array of your pets
e.g. [{name: "foo", type: "Cat", breed: "Siamese"}, {name: "bar", type: "Dog", breed: "Dalmation"}]
if you do not have any pets, please get creative, or use hobbies instead