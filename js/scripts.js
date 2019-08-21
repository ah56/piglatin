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
  }else {
    var firstVowel = userString.length;
    vowels.forEach(function(vowel){
      var indexVowel = userString.indexOf(vowel);
      if (indexVowel !== -1 && indexVowel < firstVowel){
        firstVowel = indexVowel;
      }
    });
    userString = userString.slice(firstVowel)+userString.slice(0,firstVowel)+"ay";

  }



 return userString;
}
