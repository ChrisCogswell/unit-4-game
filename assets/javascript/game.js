// Global Variables

var counter = 0;
var wins = 0;
var losses = 0;


// Target Number behavior

var targetNumber = 42 + Math.floor(Math.random() * 65);

$("#target-number").text(targetNumber);

// Variables for my crystal values

var numberOptions = [4, 6, 9, 10];
// var increment = numberOptions[Math.round(Math.random())];

for (var i = 0; i < numberOptions.length; i++) {

}

$(".gem-pics").on("click", function(){

    counter += increment;
    $("#score-number").text(counter);

    // need to create a for loop somewhere

    if (counter === targetNumber) {

    alert("you win");
    }

    else if (counter > targetNumber){
        alert("you lose");
    }
});

