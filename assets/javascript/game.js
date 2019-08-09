$( document ).ready(function() {

    var random1 = Math.floor(Math.random() * 12 + 1);
    var random2 = Math.floor(Math.random() * 12 + 1);
    var random3 = Math.floor(Math.random() * 12 + 1);
    var random4 = Math.floor(Math.random() * 12 + 1);
    randomStart = Math.floor(Math.random() * 120 + 19);
    wins = 0;
    losses = 0;
    totalScore = 0;
    
   
$("#random").append(randomStart);




$("#crystal1").on("click", function(){

    
    $("#totalScore").text(totalScore += random1)


});
$("#crystal2").on("click", function(){

    
    $("#totalScore").text(totalScore += random2)


});
$("#crystal3").on("click", function(){

    
    $("#totalScore").text(totalScore += random3)


});
$("#crystal4").on("click", function(){

    
    $("#totalScore").text(totalScore += random4)


});

if (totalScore === randomStart) {
    $("#wins").text("Wins: " + wins++);
}
else if (totalScore > randomStart){
    $("#losses").text("Losses: " + losses++);
};


});