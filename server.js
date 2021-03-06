// require express and other modules
const express = require('express');
const app = express();



// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

 app.get('/api/movies', (req, res) => {
  db.Movie.find({}, (err, movies) => {
    if(err){
      console.log(err);
    }
    res.json({data:movies})
  })
});




 app.post('/api/movies', (req, res) =>{
   let moviesData = req.body

   console.log('THIS IS THE MOVIE DATA!!!!!' + moviesData);
   db.Movie.create(moviesData, (err, savedMovie) => {
    if (err){console.log(err)}
      res.json({data:savedMovie})
   })
 })

 app.get('/api/profile', (req, res) => {
  db.Profile.find({}, (err, profile) => {
    if(err){
      console.log(err);
    }
    res.json({data:profile})
  })
 });

 app.delete(`/api/movies/:id`, (req, res) => {
  let movieId = req.params.id;
  console.log(movieId)
  db.Movie.deleteOne({_id: movieId}, (err, deletedMovie) => {
    
    if (err) {
      return console.log(err)
    }

    res.json(deletedMovie)
  })
});



// app.put('/api/movies', (req, res) => {
//   db.Movie.findOneAndUpdate
// })



// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/craiglymus/Personal-API",
    baseUrl: "https://dashboard.heroku.com/apps/craigs-personal-api", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/movies", description: "Details about movie"}, 
      {method: "POST", path: "/api/movies", description: "Creates a new movie"} // CHANGE ME
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
