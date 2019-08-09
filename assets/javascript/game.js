wins = 1;
losses = 1;
totalScore = 0;

$(document).ready(function() {

    var random1 = Math.floor(Math.random() * 12 + 1);
    var random2 = Math.floor(Math.random() * 12 + 1);
    var random3 = Math.floor(Math.random() * 12 + 1);
    var random4 = Math.floor(Math.random() * 12 + 1);
    randomStart = Math.floor(Math.random() * 120 + 19);
     $("#random").text(randomStart);

    function reset(){
    random1 = Math.floor(Math.random() * 12 + 1);
    random2 = Math.floor(Math.random() * 12 + 1);
    random3 = Math.floor(Math.random() * 12 + 1);
    random4 = Math.floor(Math.random() * 12 + 1);
    randomStart = Math.floor(Math.random() * 120 + 19);
    $("#totalScore").text(totalScore)
  


    $("#random").text(randomStart);
    }

    function winner() {
        if (totalScore === randomStart) {
            totalScore = 0;
            $("#wins").text("Wins: " + wins++);
            $("#winslose").text("You win!!!");
            reset();
            
            
    
    
        }
        else if (totalScore > randomStart) {
            totalScore = 0;
            $("#losses").text("Losses: " + losses++);
            $("#winslose").text("You lose!!!!!");
            $("totalScore").text("0")
            reset();
        }
    }   

 




    $("#crystal1").on("click", function () {

        $("#totalScore").text(totalScore += random1)
        winner();

    });

    $("#crystal2").on("click", function () {

        $("#totalScore").text(totalScore += random2)
        winner();

    });

    $("#crystal3").on("click", function () {

        $("#totalScore").text(totalScore += random3)
        winner();

    });
    $("#crystal4").on("click", function () {

        $("#totalScore").text(totalScore += random4)
        winner();

    });




});



