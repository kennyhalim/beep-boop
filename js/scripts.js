//Business Logic
var beepBoop = function(number){
  var arrayOfNumbers = [];
  var finishedList = "";

  for (var i = 0;i <= number; i++){
    arrayOfNumbers.push(i.toString());
  }

  finishedList += "Beep!" + "<br>"; //always starts with 0, so add "Beep!"

  for (var index = 1; index < arrayOfNumbers.length;index++){
    if (index % 3 === 0) {
      finishedList += "I'm sorry, Dave. I'm afraid I can't do that." + "<br>";
    } else if (arrayOfNumbers[index].includes("1")){
      finishedList += "Boop!" + "<br>";
    } else if (arrayOfNumbers[index].includes("0")){
      finishedList += "Beep!" + "<br>";
    } else {
      finishedList += index + "<br>";
    }
  }

  return finishedList;
};

//User Interface
$(document).ready(function(){
  $("form#input").submit(function(event){
    $("#intro").hide();
    $("#userInput").hide();
    $("#userOutput").show();
    $("#result").empty();

    var number = $("input#numberInput").val();

    var result = beepBoop(number);

    $("#boopResult").append(result);

    event.preventDefault();
  });

  $("button#btnStart").click(function(){
    $("#intro").hide();
    $("#userInput").show();
  });

  $("button#goBack").click(function(){
    location.reload();
  });
});
