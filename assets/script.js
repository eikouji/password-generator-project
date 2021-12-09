
   // Acceptance Needs To Be Done //////////////////////////////////
  // 1. Prompt the User for the password criteria, https://www.w3schools.com/jsref/met_win_confirm.asp
  // a. password length 8 < 128 characters long
  // b. Lowercase, uppercase, numbers, special characters //
  // 2. Validate Input //


  // Assignment code here // 
  
  // Variables
// Creating a low to high function to create the decimals for the characters in an ASCII table 
// https://www.asciitable.com/

var lowerCaseLetters = arrayFromLowToHigh(97, 122);
var upperCaseLetters = arrayFromLowToHigh(65, 90);
var numberCharacters = arrayFromLowToHigh(48, 57);
var specialCharacters = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));


console.log(
  lowerCaseLetters,
  upperCaseLetters,
  numberCharacters,
  specialCharacters
);
// Concatenating the special character arrays as they are not consecutive decimal values in the ASCII table

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
// Change the value of the low decimal value until it reaches the high value within the array

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordCharacters = [];

  var passwordCharacterLength = window.prompt(
    "Your password needs at least a length of characters from 8 - 128"
  );
  if (passwordCharacterLength < 8) {
    passwordCharacterLength = 8;
    alert("Default min length set to 8 characters");
  } else if (passwordCharacterLength > 128) {
    passwordCharacterLength = 128;
    alert("Default max length set to 128 characters");
  }
  // Setting a default length if the user sets a value less than 8 characters or more than 128 characters

  if (window.confirm("Would you like your password to have lower case letters? ")) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
    console.log(passwordCharacters);
  }

  if (window.confirm("Would you like your password to have UPPER CASE letters?")) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
    console.log(passwordCharacters);
  }

  if (window.confirm("Would you like your password to have numbers (1234567890)?")) {
    passwordCharacters = passwordCharacters.concat(numberCharacters);
    console.log(passwordCharacters);
  }

  if (window.confirm("Would you like to select special characters like =![]{}|()-_^;*:<>@#$%& ?")) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    console.log(passwordCharacters);
  }
  // concatenating the character arrays together based on what the user selects for the password needs //
  let completedPasswordResult = [];
  console.log(passwordCharacters);
  for (let i = 0; i < passwordCharacterLength; i++) {
    var index = Math.floor(Math.random() * passwordCharacters.length);
    completedPasswordResult[i] = passwordCharacters[index];
    completedPasswordResult[i] = String.fromCharCode(completedPasswordResult[i]);
  }

  return completedPasswordResult.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
