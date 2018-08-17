// business logic

function numberTransform(userInput) {}
var numbersWithZero =
var numbersWithOne =
var numbersDivisThree =

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
