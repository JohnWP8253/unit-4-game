// Worked with my studygroup on writing this. 

$(document).ready(function(){

    // Set variable for target random number
    var targetRandomNum = Math.floor(Math.random() * 102 + 19);
    console.log(targetRandomNum);

    // Make sure to put div with #number-to-guess
    // $("number-to-guess").text(targetRandomNum)

    var counter = 0;
    console.log(counter);

   
    // variable with 4 crystals as objects
    var crystals = {
        crystalOne: {
            points: Math.floor(Math.random() * 12 + 1),
            // image: 
        },

        crystalTwo: {
            points: Math.floor(Math.random() * 12 + 1),
            // image: 
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
        var imgCrystal_1 = $("<img>");
    }



}) 


