$(document).ready(function () {
    var randomNumber, currentScore, wins = 0, losses = 0;
    var crys1_val, crys2_val, crys3_val, crys4_val;

    init();
    $("#crystal1").click(function () {
        compute_score(crys1_val);
    });

    $("#crystal2").click(function () {
        compute_score(crys2_val);
    });

    $("#crystal3").click(function () {
        compute_score(crys3_val);
    });

    $("#crystal4").click(function () {
        compute_score(crys4_val);
    });

    function compute_score(crys_val) {
        currentScore = currentScore + crys_val;
        $("#total-score").text("Current Score: " + currentScore);
        if (currentScore === randomNumber) {
            wins++;
            init();
        }
        if (currentScore > randomNumber) {
            losses++;
            init();
        }
    }

    function init() {
        currentScore = 0;
        randomNumber = Math.floor(Math.random() * 101) + 19; //19 to 120 has 101 numbers
        $("#random-guess").text("Come on!! Try to match me!!: " + randomNumber);
        $("#winner-score").text(" Wins: " + wins);
        $("#losser-score").text(" Losses: " + losses);
        $("#total-score").text(" Score: " + currentScore);
        crys1_val = Math.floor(Math.random() * 11) + 1;
        crys2_val = Math.floor(Math.random() * 11) + 1;
        crys3_val = Math.floor(Math.random() * 11) + 1;
        crys4_val = Math.floor(Math.random() * 11) + 1;

    }
});

