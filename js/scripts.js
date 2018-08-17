// business logic
var numbersWithZero = "Beep!";
var numbersWithOne = "Boop!";
var numbersDivisThree = "I'm sorry Dave. I'm afraid I can't do that.";
console.log(numbersWithZero, numbersWithOne, numbersDivisThree);

var numberTransform = function(userInput) {
  var rangeShown = [];
  if (userInput < 0) {
    alert("Please enter a positive number.");
  }

  for (var i = 0; i <= userInput; i++) {
    if (userInput % 3 === 0) {
      var subNumber = numbersDivisThree;
    }
    // console.log(userInput);
    else if (userInput.toString().includes("1")) {
      var subNumber = numbersWithOne;
    } else if (userInput.toString().includes("0")) {
      var subNumber = numbersWithZero;
    } else {
      rangeShown.push(i);
      var subNumber = (rangeShown.toString()).split(",").join(", ");
    }
  }
  return subNumber;

};


// user-interface logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += numberTransform(userInput);
    $("#finalOutput").text(result);
    $("#results").show();
  });
});
