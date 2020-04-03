var num = [];



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($("#sentence").val());
    for (index = 0; index <= userInput; index++) {
      var array = []
      var newArray = index.toString();

      console.log(newArray);
    }
  });
});