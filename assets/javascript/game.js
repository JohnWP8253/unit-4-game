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

    // variable with 4 crystals as objects which will be random numbers from 1 - 12
    var crystals = {
        crystal1: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal2: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal3: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal4: {
            points: Math.floor(Math.random() * 12 + 1),
        }
    }

// Reset game
function reset() {
    var targetRandomNum = Math.floor(Math.random() * 102 + 19);
    $("#number-to-guess").text(targetRandomNum).css('text-align', 'center');
    var crystals = {
        crystal1: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal2: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal3: {
            points: Math.floor(Math.random() * 12 + 1),
        },
        crystal4: {
            points: Math.floor(Math.random() * 12 + 1),
        }
    }
    var counter = 0;
    $("#score-counter").append(counter).css('text-align', 'center');

}
// Functions




}) 


