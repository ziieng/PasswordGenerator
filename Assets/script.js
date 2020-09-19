///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompts and confirms

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

//Function for random numbers recycled from class activity; assume min of 1, so removed it from parameters
function getRandom(max) {
  var min = 1
  max = math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Establish modified variables - character string to draw from, password as it's built
//Prompt user for length (declare var in it)
//Verify length is between 8 and 128

//Ask user if they want lowercase, add to deck if yes
//Ask user if they want uppercase, add to deck if yes
//Ask user if they want numbers, add to deck if yes
//Ask user if they want special characters, add to deck if yes
//Verify at least 1 type of characters selected (loop while deck empty?)

//Generate password with (length) characters randomly drawn from (deck)
//Verify all requested character types are present?

//Alert done, write password to page