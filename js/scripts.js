var num = ["1", "2", "3"];

$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($("#sentence").val());
    console.log(userInput);
  });
});