// Worked with my studygroup on writing this. .
// Thanks to the cooperation of Amy Haerr, Kortnie Heidel, Haylee McClemore.

$(document).ready(function () {

    // Set Global variable for target random number between 19 and 120 and other globa variables:
    var targetRandomNum = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;


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

    // start game and reset game
    function startGame() {
        targetRandomNum = Math.floor(Math.random() * 102 + 19);
        crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal4.value = Math.floor(Math.random() * 12 + 1);

        $("#number-to-guess").text(targetRandomNum).css('text-align', 'center');
        $("#wins-num").text(wins).css('text-align', 'center');
        $("#losses-num").text(losses).css('text-align', 'center');
        $("#score-counter").text(counter).css('text-align', 'center');

        counter = 0;
    };
    //  FUNCTIONS

    // Will tell player if they win or lose plus will restart the game after
    function scoreboard() {
        if (counter > targetRandomNum) {
            alert("Sorry mate! You lose!");
            losses++;
            $("#losses-num").text(losses);
            // start game over if player losses
            startGame();
        }
        else if (counter === targetRandomNum) {
            alert("Mate! You win!");
            wins++;
            $("#wins-num").text(wins);
            // start game over if player wins
            startGame();
        };
    }

    startGame();

    // Counting crystal clicks
    $("#blue").on("click", function () {
        counter = counter + crystals.crystal1.value;
        console.log(counter);
        $("#score-counter").text(counter);
        scoreboard();
    });

    $("#green").on("click", function () {
        counter = counter + crystals.crystal2.value;
        console.log(counter);
        $("#score-counter").text(counter);
        scoreboard();
    });

    $("#yellow").on("click", function () {
        counter = counter + crystals.crystal3.value;
        console.log(counter);
        $("#score-counter").text(counter);
        scoreboard();
    });

    $("#red").on("click", function () {
        counter = counter + crystals.crystal4.value;
        console.log(counter);
        $("#score-counter").text(counter);
        scoreboard();
    });

})
