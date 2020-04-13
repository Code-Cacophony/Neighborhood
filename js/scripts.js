var num = ["1", "2", "3"];

/*var num1 = 1;
var num2 = 2;
var num3 = 3; */



/*const num1 = "1";
const num2 = "2";
const num3 = "3";*/

const sentence = num;


console.log(`The number "${num}" ${sentence.includes(num) ? 'is' : 'is not'} in the sentence`);


$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();
    //var userInput = parseInt($("#sentence").val());
    var userInput = $("#sentence").val();
    for (index = 0; index <= userInput; index++) {
      // var array = []
      var newArray = index.toString();



      var numArray = newArray.replace("Beep!");



      console.log(numArray);

    }
  });
});