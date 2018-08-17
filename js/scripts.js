// business logic
// var numbersWithZero =
// var numbersWithOne =
// var numbersDivisThree =

function numberTransform(userInput) {}
var numberRange = "";
if (userInput < 0)
  alert("Please enter a positive number.");
  return false;
  console.log(userInput);





// user-interface logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("userInput").val());
    var result = "";
    result += numberTransform(userInput);
    $("finalOutput").text(result);
    $("results").show();
  });
});
