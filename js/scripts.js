var num = [];

function userInput(input) {
  for (var i = 0; i < input; i++);
  console.log(input);
}

$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($("#sentence").val());
    //console.log(userInput);
  });
});