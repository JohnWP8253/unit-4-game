// Worked with my studygroup on writing this. .
// Thanks to the cooperation of Amy Haerr, Kortnie Evans, Haylee McClemore, Chelsey Masood.

$(document).ready(function(){

    // Set Global variable for target random number between 19 and 120 and other globa variables:
    var targetRandomNum = Math.floor(Math.random() * 102 + 19);
    var counter = 0;
    var wins = 0;
    var losses = 0;
    
    // Declaring variables for scores
    $("#number-to-guess").text(targetRandomNum).css('text-align', 'center');
    $("#wins-num").append(wins).css('text-align', 'center');
    $("#losses-num").append(losses).css('text-align', 'center');
    $("#score-counter").append(counter).css('text-align', 'center');

    // variable with 4 crystals as objects with values of 0
    var crystals = {
        crystal1: {
            value: 0,
        },
        crystal2: {
            value: 0,
        },
        crystal3: {
            value: 0,
        },
        crystal4: {
            value: 0,
        }
    };
    // rewriting the 0 value with random numbers
    crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal4.value = Math.floor(Math.random() * 12 + 1); 

// Reset game
function reset() {
    var targetRandomNum = Math.floor(Math.random() * 102 + 19);
    $("#number-to-guess").text(targetRandomNum).css('text-align', 'center');
    var crystals = {
        crystal1: {
            value: 0,
        },
        crystal2: {
            value: 0,
        },
        crystal3: {
            value: 0,
        },
        crystal4: {
            value: 0,
        }
    }
    crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal4.value = Math.floor(Math.random() * 12 + 1); 

    var counter = 0;
    $("#score-counter").append(counter).css('text-align', 'center');
};
//  FUNCTIONS

// Counting crystal clicks
$("#blue").on("click", function() {
    counter = counter + crystals.crystal1.value;
    console.log(counter);
    $("#score-counter").text(counter);
});

$("#green").on("click", function() {
    counter = counter + crystals.crystal2.value;
    console.log(counter);
    $("#score-counter").text(counter);
});

$("#yellow").on("click", function() {
    counter = counter + crystals.crystal3.value;
    console.log(counter);
    $("#score-counter").text(counter);
});

$("#red").on("click", function() {
    counter = counter + crystals.crystal4.value;
    console.log(counter);
    $("#score-counter").text(counter);
});

// Check if the player won or lost
var checkScore = function() {
    if (counter > targetRandomNum) {
        alert("Sorry mate! You lose!");
    }
}
   
}) 


