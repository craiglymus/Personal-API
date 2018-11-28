console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

});

$('form').on('submit', function(e){
	e.preventDefault()
	console.log($(this).serialize())
   $.ajax({
   method: 'POST',
   url: '/api/movies',
   data: $(this).serialize(),
   success: moviesAppend(),
   error: mistake(),
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
		$('.list-container').append(`<div><h1>${movie.title} ${movie.director} ${movie.yearOfRelease}</h1><button class="delete">Delete</button></div>`)
	}
	
};


$('ul').on('click', '.delete', function (event) {
        var deleteId = $(this).attr('data-id');
        const baseUrl = 'api/movies'
            $.ajax({
                method: 'DELETE',
                url: baseUrl + '/' + deleteId,
                success: window.location.reload()        
            });
        });
    var deleteMovies = function() {
        allMovies.forEach(function(movie){    
        })
    }




// const baseUrl = 'api/movies'
// const allMovies = [];
// let theId;


// $.ajax({
//     method: 'GET',
//     url: '/api/movies',
//     success: function getMovies(e) {
//         e.data.forEach(element => {
//             allMovies.push(element);
//         });
//         listMovies();
//         }
        
//     });

    


//     var listMovies = function(){
//     allMovies.forEach(function(movie){
//         $('ul').append(`<li class="listItem">${movie.title} ${movie.director} ${movie.yearOfRelease}.</li><button data-id="${movie._id}" class="delete">DELETE</button>`)
//     });
//     }
    


    
//         $('ul').on('click', '.delete', function (event) {
        


//         var deleteId = $(this).attr('data-id');

//             $.ajax({
//                 method: 'DELETE',
//                 url: baseUrl + '/' + deleteId,
//                 success: window.location.reload()
                    
                
//             });
//         });



//     var deleteMovies = function() {
//         allMovies.forEach(function(movie){
            
//         })
//     }





//         $('form').on('submit', function(e) {
    
//             $.ajax({
//                 method: 'POST',
//                 url: '/api/movies/',
//                 data: $(this).serialize(),
        
//             })
        
//         })
// });



