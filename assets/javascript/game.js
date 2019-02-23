var randomResult; // the random number we want to reach
var losses = 0; // # of losses
var wins = 0; // # of wins
var totalScore = 0; // our number we are trying to change
var crystal1Number;
var crystal2Number;
var crystal3Number;
var crystal4Number;

var startGame = function() {

    randomResult = Math.floor(Math.random() * 110) + 20; // givrs a random number to the crystal number we want to obtain
    $("#result").html(randomResult); // this posts the number of crystals we want to obtain in our html

    crystal1Number = Math.floor(Math.random() * 12) + 1; // adds a number to crystal 1
    crystal2Number = Math.floor(Math.random() * 12) + 1; // adds a number to crystal 2
    crystal3Number = Math.floor(Math.random() * 12) + 1; // adds a number to crystal 3
    crystal4Number = Math.floor(Math.random() * 12) + 1; // adds a number to crystal 4
    console.log(crystal1Number, crystal2Number, crystal3Number, crystal4Number);

    $("#crystal1").attr("data-randomcrystalnumber", crystal1Number); // tying the data-randomcrystalnumber to the
    $("#crystal2").attr("data-randomcrystalnumber", crystal2Number); // ID on the image so when the player
	$("#crystal3").attr("data-randomcrystalnumber", crystal3Number); // click on the image the data is tied to
	$("#crystal4").attr("data-randomcrystalnumber", crystal4Number); // img 
    
}

startGame();

$(".crystalimg").hover(function() {
    $(this).css({opacity: 0.7});
},
function() {
    $(this).css({opacity: 1});
});


$(".crystalimg").on("click", function() {

    var crystalNumber = $(this).attr("data-randomcrystalnumber");
    // console.log(this);
    crystalNumber = parseInt(crystalNumber);
    totalScore += crystalNumber;
    // console.log(totalScore); 
    $("#totalScore").text(totalScore);

    if (totalScore > randomResult) {
        losses++; // if the total score is more than the random result then you lose
        console.log("You lose.");
        $("#losses").html(losses); // apply the losses to losses ID
        totalScore = 0; // resets total score to 0 when you lose
        startGame();
    }

    else if(totalScore === randomResult){
        wins++; // if the total score is the same as the random result then you win
        console.log("You win.");
        $("#wins").html(wins); // apply the wins to the win ID
        totalScore = 0; // resets total score to 0 when you win
        startGame();
    }

    
});
