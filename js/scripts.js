// business logic
var numbersWithZero = "Beep!";
var numbersWithOne = "Boop!";
var numbersDivisThree = "I'm sorry Dave. I'm afraid I can't do that."
console.log(numbersWithZero, numbersWithOne, numbersDivisThree);

var numberTransform = function(userInput) {
  var rangeShown = [];
  var userInputAsString = userInput.toString();
  // console.log(rangeShown);
  console.log(userInputAsString);

  if (userInput < 0) {
    return alert("Please enter a positive number.");
  }
  for (var i = 0; i <= userInput; i++) {
    if (user) {
      var showBeep = numbersWithZero;
      rangeShown.push(i);
    }
  }
}
var numberRange = (" ".concat(rangeShown.toString()).split(",").join(", "));
return numberRange;

};





// user-interface logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result = numberTransform(userInput);
    $("#finalOutput").text(result);
    $("#results").show();
  });
});
