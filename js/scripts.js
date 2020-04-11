var num = [1, 2, 3];
var num1 = 1;
var num2 = 2;
var num3 = 3;

const str = [1, "2", "3"];


$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    //var userInput = parseInt($("#sentence").val());
    var userInput = $("#sentence").val();
    for (index = 0; index <= userInput; index++) {
      // var array = []
      var newArray = index.toString();

      if (index === num1) {
        var beep = index.replace("Beep!")
      }

      if (index === num3) {
        var neighbor = index.replace("Will you be my neighbor?")
      }


      console.log(newArray);
      console.log(beep);
    }
  });
});