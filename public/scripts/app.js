console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

});

$('form').on('submit', function(e){
   console.log('form click');
   $.ajax({
   method: 'POST',
   url: '/api/movies',
   data: $(this).serialize(),
 });
})


