// business logic
var numbersWithZero = "Beep!";
var numbersWithOne = "Boop!";
var numbersDivisThree = "I'm sorry Dave. I'm afraid I can't do that."

var numberTransform = function(userInput) {
  var rangeShown = [];
  if (userInput < 0) {
    alert("Please enter a positive number.");
    return false;
  } else {
      for (var i = 0, i <= userInput; i++) {
        if (userInput === 666) {
        rangeShown.push(i);
      }
    }
  }
var numberRange = (" ".concat(rangeShown.toString()).append(", "));
return numberRange;

};





// user-interface logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += numberTransform(userInput);
    $("finalOutput").text(result);
    $("#results").show();
  });
});
