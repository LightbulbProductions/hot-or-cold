
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});
//Secret number computed between 1-100
//Declare the global vars
  var secretNumber = Math.floor(Math.random()*100); 
  var userGuess;
  

