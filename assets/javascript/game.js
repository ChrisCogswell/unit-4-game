
var targetNumber = 55;

$("#target-number").text(targetNumber);

var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];

var counter = 0;
$(".gem-pics").on("click", function(){

    counter += increment;
    alert("Your new score is " + counter);

    if (counter === targetNumber) {

    alert("you win");
    }

    else if (counter > targetNumber){
        alert("you lose");
    }
});

