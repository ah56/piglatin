$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#input").val();
    var finalOutput = multipleWords(userInput);
    $("span#output").text(finalOutput);

  });
});
function multipleWords(sentence){
  var words = sentence.split(" ");
  var finalOutput= words.map(word => toPigLatin(word));
  return finalOutput.join(" ");
}



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
    if (userString[firstVowel -1 ].toLowerCase() === "q" && userString[firstVowel] === "u"){
      userString  =userString.slice(firstVowel + 1) + userString.slice(0, firstVowel+1)+"ay";
    }
    else{

      userString = userString.slice(firstVowel)+userString.slice(0,firstVowel)+"ay";
    }
  }



 return userString;
}
