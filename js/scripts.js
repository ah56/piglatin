$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#input").val();
    var pigLatin = toPigLatin(userInput);
    $("span#output").text(pigLatin);

  });
});

function toPigLatin(userString){
  var vowels =["a", "e", "i", "o", "u"];
  if (vowels.includes(userString[0].toLowerCase())){
    userString += "way";
  }



 return userString;
}
