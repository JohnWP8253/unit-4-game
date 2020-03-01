// Worked with my studygroup on writing this. .
// Thanks to the cooperation of Amy Haerr, Kortnie Evans, Haylee McClemore, Chelsey Masood.

$(document).ready(function(){

    // Set variable for target random number
    var targetRandomNum = Math.floor(Math.random() * 102 + 19);
    console.log(targetRandomNum);

    // Make sure to put div with #number-to-guess
    // $("number-to-guess").text(targetRandomNum)

    var counter = 0;
    console.log(counter);
    var wins = 0;
    console.log(wins);
    var losses = 0;
    console.log(losses);

   
    // variable with 4 crystals as objects
    var crystals = {
        crystalOne: {
            points: Math.floor(Math.random() * 12 + 1),
        },

        crystalTwo: {
            points: Math.floor(Math.random() * 12 + 1),
        },

        crystalThree: {
            points: Math.floor(Math.random() * 12 + 1),
        },

        crystalFour: {
            points: Math.floor(Math.random() * 12 + 1),
        }
    }
    console.log(crystals);

    for (var i in crystals) {
        var imgCrystalOne = $("<img>");
        var imgCrystalTwo = $("<img>");
        var imgCrystalThree = $("<img>");
        var imgCrystalFour = $("<img>");
    }



}) 


