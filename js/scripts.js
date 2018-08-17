// business logic
var numbersWithZero = "Beep!";
var numbersWithOne = "Boop!";
var numbersDivisThree = "I'm sorry Dave. I'm afraid I can't do that.";


var numberInsert = function(userInput) {
  var rangeShown = [];
  if (userInput < 0) {
    alert("Please enter a positive number.");
  }
  for (var i = 0; i <= userInput; i++) {
    if (i > 0 && i % 3 === 0) {
      rangeShown.push(numbersDivisThree);
    } else if (i.toString().includes("1")) {
      rangeShown.push(numbersWithOne);
    } else if (i.toString().includes("0")) {
      rangeShown.push(numbersWithZero);
    } else {
      rangeShown.push(i);
    }
  }
  return rangeShown.toString().split(",").join(", ");
};
// user-interface logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += numberInsert(userInput);
    $("#finalOutput").text(result);
    $("#results").show();
  });
});
