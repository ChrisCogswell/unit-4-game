$(document).ready(function() { 

// Global Variables

var counter = 0;
var wins = 0;
var losses = 0;

// Target Number behavior

var targetNumber = 19 + Math.floor(Math.random() * 101);

$("#target-number").text(targetNumber);

// Variables for my crystal values

var blueGemValue = 2 + Math.floor(Math.random() * 3);
var redGemValue = 5 + Math.floor(Math.random() * 3);        
var greenGemValue = 7 + Math.floor(Math.random() * 4);
var purpleGemValue = 10 + Math.floor(Math.random() * 4); 

console.log(blueGemValue, redGemValue, greenGemValue, purpleGemValue);



$("#blue-gem").on("click", function(){


    var increment = blueGemValue;
        
    counter += increment;
    $("#score-number").text(counter);


    if (counter === targetNumber) {

    alert("you win");
    wins++;
    $("#wins-text").text(wins);
    }

    else if (counter > targetNumber){
    alert("you lose");
    losses++;
    $("#lose-text").text(losses);
    }

    
});

$("#red-gem").on("click", function(){

    var increment = redGemValue;

    counter += increment;
    $("#score-number").text(counter);


    if (counter === targetNumber) {

    alert("you win");
    wins++;
    $("#wins-text").text(wins);
    }

    else if (counter > targetNumber){
    alert("you lose");
    losses++;
    $("#lose-text").text(losses);
    }

    
});

$("#green-gem").on("click", function(){

    var increment = greenGemValue;

    counter += increment;
    $("#score-number").text(counter);


    if (counter === targetNumber) {

    alert("you win");
    wins++;
    $("#wins-text").text(wins);
    }

    else if (counter > targetNumber){
    alert("you lose");
    losses++;
    $("#lose-text").text(losses);
    }

    
});

$("#purple-gem").on("click", function(){

    var increment = purpleGemValue;

    counter += increment;
    $("#score-number").text(counter);


    if (counter === targetNumber) {

    alert("you win");
    wins++;
    $("#wins-text").text(wins);
    }

    else if (counter > targetNumber){
    alert("you lose");
    losses++;
    $("#lose-text").text(losses);
    }

    
});
});