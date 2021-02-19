// getting element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Setting our golobal variables
var characterLength;
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
var special =[ "!", "#", "$", "%", "&", ")", "(", "*", "+", "?", "@", "~" ];
var chosenArrays = [];
var newPassword = "";


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



//Start password generation on button click
function generatePassword() {
  //run the length prompt function
  if (lengthPrompt()) {
    //run the lowercase function
    lowerCasePrompt();
    //   run the uppercase function
    upperCasePrompt();
    // run the numbers function
    numbersPrompt();
    // run the special char function
    specialCharPrompt();
    // run the function to generate a random output
    getRandomOutput();

    passwordText.value = "Your password is: " + newPassword

  } else {
    return;
  }

};

// functions to put inside generate function

var lengthPrompt = function() {
  var userChoice = prompt("Enter a number between 8 - 128 characters:");
  // If user pressed Cancel, immediately end function
  if (userChoice === null) {
    return false;
  }


  userChoice = parseInt(userChoice);
  if (isNaN(userChoice) || userChoice < 8 || userChoice > 128) {
    window.alert("Invalid entry! Must be a number between 8 - 128");
    generatePassword();
  } else {
    characterLength = userChoice;
    return true;
  }
};
var lowerCasePrompt = function() {
  var answer = confirm("Include lowercase letters?");
  if (answer) {
    chosenArrays = chosenArrays.concat(lowerCase);
  }
};

var upperCasePrompt = function() {
   var answer = confirm("Include uppercase letters?");
  if (answer) {
    chosenArrays = chosenArrays.concat(upperCase);
  }
};


var numbersPrompt = function() {
  var answer = confirm("Include numbers?");
  if (answer) {
    chosenArrays = chosenArrays.concat(numbers);
  }
};
var specialCharPrompt = function() {
 var answer = confirm("Include special characters?");
  if (answer) {
    chosenArrays = chosenArrays.concat(special);
  }
};

// function to loop through the chosen arrays (now one array) to get a random output

function getRandomOutput() {
  for (var index = 0; index < characterLength; index++) {
    var randomIndex = Math.floor(Math.random() * chosenArrays.length);
    newPassword += chosenArrays[randomIndex];
 }
}
