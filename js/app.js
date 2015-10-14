
$(document).ready(function() {
	
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
//Keeps bothering me about the global var grrr
  var secretNumber = Math.floor(Math.random()*100); 
  var userGuess;
  //The new game button
var newGame = function() {
		setSecretNumber();
  var setSecretNumber = function() {
  		secretNumber = Math.floor(Math.random()*100);
  	};	
};
  var setUserGuess = function() {
  		userGuess = $("#userGuess").val();
  		console.log(userGuess);
  	};
