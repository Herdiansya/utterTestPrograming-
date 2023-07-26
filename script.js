// DOM GET ELEMENT FROM DOCUMENT
var result = document.getElementById("result");
var button = document.getElementById("submit");
var input = document.getElementById("sentence");

// ADD EVENT
input.addEventListener(
  "keydown",
  function (e) {
    if (!e) {
      var e = window.event;
    }

    if (e.keyCode == 13) {
      e.preventDefault();
      submit();
    }
  },
  false
);

button.addEventListener("click", function () {
  submit();
});

function submit() {
  var value = input.value;
  findLongestWord(value);
}

//  LOGIC TO FIND THE LONGEST WORD IN THE SENTENCE
function findLongestWord(str) {
  var arr = str.split(" "); // Splits string into words and creates new array
  var n = arr.length; // Finds th length of the array
  var biggest = 0; // Set the biggest variable with value 0
  for (var i = 0; i < n; i++) {
    // For loop with array length value as a maximum iteraion limiter
    if (biggest < arr[i].length) {
      // Compares biggest with array element's lenght
      biggest = arr[i].length; // Rewrites biggest if array element's length was bigger
      var word = arr[i];
    }
  }
  return displayResult(word);
}

function displayResult(word) {
  if (word) {
    result.innerHTML = "The longest word " + "'" + word + "'" + " is " + word.length + " characters long."; // Returns biggest word
  } else {
    button.style.background = "rgba(255,0,0,.3)";
    result.innerHTML = "Try to put your sentence first :) ";
    setTimeout(function () {
      result.innerHTML = "";
      button.style.background = "rgba(255,255,255,.3)";
    }, 3000);
  }
}
