// Assignment code here


// define generatePassword with a function ////////
  function generatePassword() {
    // a console log to check that the button is working ////////
    console.log("You've clicked this button! It's working beep boop.")

    return "Generated password will go here! Beep Boop"
  }
  

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// parameters for password generation //////////////////////////////////
  

//Certain number of characters in password. More than 8, no more than 28 //////////////////////////////////
// var characterNumber 


// Generate Random Upper Case Letters //////////////////////////////////
// var randomUpperCaseLetter = 

// Generate Random Lower Case Letters // 
// var randomLowerCaseLetter =

// Generate Symbol to improve security/guess-ability //////////////////////////////////
// var randomSymbol =

// console log the result of the password, what it should look like when the right password is generated ////////////
//console.log(
  //characterNumber + randomUppercaseLetter + randomLowerCaseLetter + randomSymbol
  //);




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


