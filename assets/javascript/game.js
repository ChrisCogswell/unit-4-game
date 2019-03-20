$(document).ready(function() { 

// Global Variables

    var counter = 0;
    var wins = 0;
    var losses = 0;

$("#score-number").text(counter);

// Wins and Lose sound effects

    var audioElement = document.createElement("audio");

    audioElement.setAttribute("src", "./assets/sound/sms-alert-3-daniel_simon.mp3");

    var audioElement2 = document.createElement("audio");

    audioElement2.setAttribute("src", "./assets/sound/sms-alert-5-daniel_simon.mp3");

// Target Number behavior

    var targetNumber = 19 + Math.floor(Math.random() * 101);
    $("#target-number").text(targetNumber);

// Variables for my crystal values
    
    var blueGemValue = 2 + Math.floor(Math.random() * 3);
    var redGemValue = 5 + Math.floor(Math.random() * 3);        
    var greenGemValue = 7 + Math.floor(Math.random() * 4);
    var purpleGemValue = 10 + Math.floor(Math.random() * 4); 

    
    console.log(blueGemValue, redGemValue, greenGemValue, purpleGemValue);

// This function resets the game when you win or lose

    function resetGame() {
        counter = 0;
        targetNumber = 19 + Math.floor(Math.random() * 101);
        blueGemValue = 2 + Math.floor(Math.random() * 3);
        redGemValue = 5 + Math.floor(Math.random() * 3);
        greenGemValue = 7 + Math.floor(Math.random() * 4);
        purpleGemValue = 10 + Math.floor(Math.random() * 4);

        console.log(blueGemValue, redGemValue, greenGemValue, purpleGemValue);

        $("#target-number").text(targetNumber);
        $("#score-number").text(counter);
      };

// This function determines how you win or lose

      function winLose(){
        if (counter === targetNumber) {
            wins++;
            $("#wins-text").text(wins);
            audioElement.play();
            resetGame();
           }
       
           else if (counter > targetNumber){
            losses++;
            $("#lose-text").text(losses);
            audioElement2.play();
            resetGame();
           }
      };
 
// Blue Gem

$("#blue-gem").on("click", function(){


    var increment = blueGemValue;
        
    counter += increment;
    $("#score-number").text(counter);

    winLose();

});

// Red Gem

$("#red-gem").on("click", function(){

    var increment = redGemValue;

    counter += increment;
    $("#score-number").text(counter);

    winLose();

});

// Green Gem

$("#green-gem").on("click", function(){

    var increment = greenGemValue;

    counter += increment;
    $("#score-number").text(counter);

    winLose();

});

// Purple Gem

$("#purple-gem").on("click", function(){

    var increment = purpleGemValue;

    counter += increment;
    $("#score-number").text(counter);

    winLose();
});

});