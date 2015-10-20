$(document).ready(function() {
   window.onload = function() {
  document.getElementById("userGuess").focus();
};

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
  	$("#guessButton").click(function(event) {
  		feedback();
  		addGuessToList();
  		clearUserGuess(;)
  		/*preventDefault();*/
  	});

  	
  $(".new").click(function(event) {
  	newGame();
  	setSecretNumber();
  });
  	
});

  //Declare variable functions
  var newGame;
  var secretNumber = Math.floor(Math.random()*100); 
  var userGuess;
  var guessCount = 0;
  var feedback;
  var clearUserGuess;
  //The new game button
  
var newGame = function() {
		setSecretNumber();
};
  

var setSecretNumber = function() {
  		secretNumber = Math.floor(Math.random()*100);
  		console.log("secret number: " + secretNumber);
 };

var setUserGuess = function() {
  		userGuess = $("#userGuess").val();
  		  		console.log(userGuess);
};

var addGuessToList = function () {
	$("#guessList").append("<li>"+userGuess+"</li>");
};

var clearUserGuess = function () {
		$("#userGuess").val("");
		console.log(userGuess);
	};
	
var feedback = function() {
		setUserGuess();
	
		var difference = Math.abs(userGuess-secretNumber);
		var postFeedback = function(message) {
			$('#feedback').text(message);
		};
		
	    if (userGuess === secretNumber) {
			postFeedback("You are correct!");
			updateGuessInfo();
			secretNumber = "guessed";
		}
		else if(difference >= 1 && difference <= 10) {
			postFeedback("You're on fire!");
		}
		else if(difference >= 11 && difference <= 20) {
			postFeedback("Ooh! Getting hotter!");
		}
		else if(difference >= 21 && difference <= 30) {
			postFeedback("Hmm... Rather tepid. Whomp Whomp");
		}
		else if (difference >= 31 && difference <= 50) {
			postFeedback("It's getting chilly over here!");
		}
		else {
			postFeedback("Aww! Cold as a popsicle! ");
		}
	
};
