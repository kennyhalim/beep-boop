var beepBoop = function(number){
  var finishedList = "";

  for (var i = 0;i <= number; i++){
    finishedList += i + ", ";
  }

  return finishedList;
};




$(document).ready(function(){
  $("form#input").submit(function(event){

    $("#result").empty();
    var number = $("input#numberInput").val();

    var result = beepBoop(number);

    $("#boopResult").append(result);

    event.preventDefault();
  });

});
