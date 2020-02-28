$(document).ready(function(){

    // 
    var targetRandomNum = Math.floor(Math.random() * 155 + 46)
    console.log(targetRandomNum);

    // Make sure to put div with #number-to-guess
    // $("number-to-guess").text(targetRandomNum)

    var counter = 0;
    console.log(counter);

   

    var crystals = {
        crystal_1: {
            points: Math.floor(Math.random() * 16 + 5),
            image: 
        },

        crystal_2: {
            points: Math.floor(Math.random() * 11 + 5),
            image: 
        },

        crystal_3: {
            points: Math.floor(Math.random() * 31 + 5),
        },

        crystal_4: {
            points: Math.floor(Math.random() * 25+ 6),
        }
    }
    console.log(crystals);

    for (var i in crystals) {
        var imgCrystal_1 = $("<img>");
    }



}) 


