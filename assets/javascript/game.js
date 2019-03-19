$(document).ready(function() { 

// Global Variables

var counter = 0;
var wins = 0;
var losses = 0;

$("#score-number").text(counter);

// Target Number behavior

var targetNumber = 19 + Math.floor(Math.random() * 101);
$("#target-number").text(targetNumber);

// Variables for my crystal values
    
    var blueGemValue = 2 + Math.floor(Math.random() * 3);
    var redGemValue = 5 + Math.floor(Math.random() * 3);        
    var greenGemValue = 7 + Math.floor(Math.random() * 4);
    var purpleGemValue = 10 + Math.floor(Math.random() * 4); 

    
    console.log(blueGemValue, redGemValue, greenGemValue, purpleGemValue);

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
      }

      function winLose(){
        if (counter === targetNumber) {
            wins++;
            $("#wins-text").text(wins);
            resetGame();
           }
       
           else if (counter > targetNumber){
            losses++;
            $("#lose-text").text(losses);
            resetGame();
           }
      }
 
//     $("#start-box").on("click", function(){
// });

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

// Reset Button

// $("#reset-box").on("click", function() {
//     resetGame();
// });

});