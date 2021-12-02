// Assignment code here
var generateBtn = document.querySelector("#generate");

// define generatePassword with a function ////////
  function generatePassword() {
    // a console log to check that the button is working ////////
    console.log("You've clicked this button! It's working beep boop.");


// parameters for password generation //////////////////////////////////
  

//Certain number of characters in password. More than 8, no more than 28 //////////////////////////////////
 var characterNumber =


// Generate Random Upper Case Letters //////////////////////////////////
 var randomUpperCaseLetter = 

// Generate Random Lower Case Letters // 
 var randomLowerCaseLetter =

// Generate Symbol to improve security/guess-ability //////////////////////////////////
 var randomSymbol =

// console log the result of the password, what it should look like when the right password is generated ////////////
//console.log(characterNumber + randomUppercaseLetter + randomLowerCaseLetter + randomSymbol);



// Acceptance Needs To Be Done //////////////////////////////////
// 1. Prompt the User for the password criteria
  // a. password length 8 < 128 characters long
  // b. Lowercase, uppercase, numbers, special characters //
// 2. Validate Input //


// 3. Display password to the page, which is the return ! // 
    return "Generated password will go here! Beep Boop";
  }
  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


