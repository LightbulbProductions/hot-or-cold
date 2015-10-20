$(document).ready(function() {
 window.onload = function(){
    document.getElementById("userGuess").focus();
    guessCount = 0;
    initGuessList();
};
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
  	$("input#guessButton").click(function(event) {
  		event.preventDefault();
  		feedback();
  		addGuessToList();
  		
  	});
  var initGuessList = function() {
  $("span#count").text('0');
  
  };
  
  $(".new").click(function(event) {
  	newGame();
  	setSecretNumber();
  	initGuessList();
  });
  	
});

  //Declare variable functions
  var newGame;
  var secretNumber = Math.floor(Math.random()*100); 
  var userGuess;
  var guessCount;

  var userCount;
  var feedback;
  var guessCountBox;
  var clearUserGuess;
  
  
var newGame = function() {
		setSecretNumber();
		guessCount = 0;
		clearUserGuess();
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
    $("span#count").text($("ul#guessList > li").size());
    $("#userGuess").val('');
    
};

var clearUserGuess = function () {
		$("#userGuess").val("");
		$("ul#guessList").empty();
		$("#feedback").text('Make your Guess!');
	};
	
var feedback = function() {
		setUserGuess();
	
		var difference = Math.abs(userGuess-secretNumber);
		var postFeedback = function(message) {
			$('#feedback').text(message);
		};
		
	    if (userGuess === secretNumber) {
			postFeedback("You are correct!");
	
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