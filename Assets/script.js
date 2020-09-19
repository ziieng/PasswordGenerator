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

//Function for random numbers recycled from class activity; minimum of 0, maximum of (max-1) for use in charAt(index) later.
function getRandom(max) {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1));
}


function generatePassword() {
  //Establish modified variables - string (or deck) of characters to draw from, password as it's built, password length
  var charDeck = ""
  var passBuild = ""
  var pLength = 0

  //Prompt user for length
  while (pLength == 0) {
    var testLen = prompt("Please specify length for password. \n Note: minimum length is 8 characters, maximum is 128.", "");
    //Verify length is between 8 and 128
    if (testLen >= 8 && testLen <= 128) {
      pLength = testLen;
    } else {
      alert("Invalid length. Password length must be between 8 and 128.");
    }
  }

  while (charDeck == "") {
    //Ask user if they want lowercase, add to deck if yes
    var lower = confirm("Include lowercase characters?")
    if (lower) {
      charDeck = charDeck + "abcdefghijklmnopqrstuvwxyz"
    }
    //Ask user if they want uppercase, add to deck if yes
    var upper = confirm("Include uppercase characters?")
    if (upper) {
      charDeck = charDeck + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    //Ask user if they want numbers, add to deck if yes
    var nums = confirm("Include numbers?")
    if (nums) {
      charDeck = charDeck + "1234567890"
    }
    //Ask user if they want special characters, add to deck if yes
    var specs = confirm("Include special characters?")
    if (specs) {
      charDeck = charDeck + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~890"
    }
    //Alert user if deck is empty, then loop back through choices
    if (charDeck == "") {
      alert("Must use at least one set of characters.")
    }
  }

  //set up loop for verification  
  var passChecked = false
  while (passChecked == false) {
    passBuild = ""
    //Generate password with (length) characters randomly drawn from (deck)
    for (i = 1; i <= pLength; i++) {
      passBuild = passBuild + charDeck.charAt(getRandom(charDeck.length))
    }
    //Verify all requested character types are present
let checkPass = 0
    //Test if there's a lowercase
    if (lower == true) {
      var testStr = "abcdefghijklmnopqrstuvwxyz"
      for (i = 0; i < pLength; i++) {
        if (testStr.includes(passBuild.charAt(i))) {
          checkPass = checkPass + 1
          break
        }
      }
    } else {
      checkPass = checkPass + 1
    }

    //Test if there's an uppercase
    if (upper == true) {
      var testStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      for (i = 0; i < pLength; i++) {
        if (testStr.includes(passBuild.charAt(i))) {
          checkPass = checkPass + 1
          break
        }
      }
    } else {
      checkPass = checkPass + 1
    }

    //Test if there's a number
    if (nums == true) {
      var testStr = "1234567890"
      for (i = 0; i < pLength; i++) {
        if (testStr.includes(passBuild.charAt(i))) {
          checkPass = checkPass + 1
          break
        }
      }
    } else {
      checkPass = checkPass + 1
    }

    //Test if there's a special character
    if (specs == true) {
      var testStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~890"
      for (i = 0; i < pLength; i++) {
        if (testStr.includes(passBuild.charAt(i))) {
          checkPass = checkPass + 1
          break
        }
      }
    } else {
      checkPass = checkPass + 1
    }
    if (checkPass == 4) {
      passChecked = true
    }
  }
  //Alert done, write password to page
  alert("Password generated!")
  return passBuild
}