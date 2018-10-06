console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

});

$('form').on('submit', function(e){
   $.ajax({
   method: 'POST',
   url: '/api/movies',
   data: $(this).serialize(),
 });
})

$.ajax({
	method: 'GET',
	url: '/api/movies',
	success: moviesAppend,
	error: mistake,
})

function mistake(error){
	console.log(error);
};

function moviesAppend(success){
	for (var i = 0; i < success.data.length; i++){
		let movie = success.data[i]
		console.log(movie) 
		$('.list-container').append(`<h1>${movie.title} ${movie.director} ${movie.yearOfRelease}</h1>`)
	}
	console.log(success);
};


