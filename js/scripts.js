var num = [];



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($("#sentence").val());
    for (index = 0; index <= 4; index += 1) {
      alert(index);
    }
  });
});