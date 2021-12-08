
  // Acceptance Needs To Be Done //////////////////////////////////
  // 1. Prompt the User for the password criteria, https://www.w3schools.com/jsref/met_win_confirm.asp
  // a. password length 8 < 128 characters long
  // b. Lowercase, uppercase, numbers, special characters //
  // 2. Validate Input //


  // Assignment code here // 
  
  // Components of a strong password // 
  
  // Character amount in password between 8 and 128 characters for increased password strength // 
  var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


    /* var allPasswordComponents = 
    [
      upperCaseLetters +
      lowerCaseLetters +
      numberCharacters +
      specialCharacters
    ];
    document.getElementById("strong password").innerHTML = allPasswordComponents;

    take array of all allPassword Components and spit them onto the password screen somehow magically.
    */

  // a console log to check on all the password components // 
  console.log (
    upperCaseLetters,
    lowerCaseLetters,
    numberCharacters,
    specialCharacters
  );

  // Concatenating the special character arrays in a sequential manner // 
  function arrayFromLowToHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
  }
 
 // Assignment Code // //
 let generateBtn = document.querySelector("#generate");

 // Write password to the #password input //
 function writePassword() {
   let password = generatePassword();
   let passwordText = document.querySelector("#password");

   passwordText.value = password;
 }
 

  // Define generatePassword with a function ////////
  function generatePassword () {
    var passwordCharacters = [];
    
    // Establish character amount for passwords, between 8 - 128 // //
    var passwordCharacterLength = window.prompt(
      "Your password needs at least 8 characters, no more than 128 characters"
    );
    if (passwordCharacterLength < 8) {
      passwordCharacterLength = 8;
      alert("Default minimum password length is 8 characters!");
    } else if (passwordCharacterLength > 128) {
      passwordCharacterLength = 128;
      alert("Default max password length is 128 characters!")
    }

    // Upper Case Letter password addition // 
    if (window.confirm("Would you like to add UPPER CASE letters to your password?")) {
      passwordCharacters = passwordCharacters.concat(upperCaseLetters);
      console.log(passwordCharacters);
    }
    // lower case letter password addition // 
    if (window.confirm("Would you like to add lower case letters to your password?")) {
      passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
      console.log(passwordCharacters);
    }
    // Adding numbers to the password // 
    if (window.confirm("Would you like to add numbers to your password? (1234567890")) {
      passwordCharacters = passwordCharacters.concat(numberCharacters);
      console.log(passwordCharacters);
    }
    // adding special characters to the password // 

    if (window.confirm("Would you like to add special characters to your password?")) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
      console.log(passwordCharacters);
    }

    // Completed Password, based on what user wanted in their password ////////
    var completedPassword = [];
    console.log(passwordCharacters);
    for (let i = 0; i < passwordCharacters.length; i++) {
      var index = Math.floor(Math.random() * passwordCharacters.length);
      completedPassword[i] = passwordCharacters[index];
      completedPassword[i] = String.fromCharCode(completedPassword[i]);
    }

    return completedPassword.join("");

  }


    // Add event listener to generate button //
   generateBtn.addEventListener("click", generate);
  
   // additional ideas: a log to keep previous passwords.
   // copy-to-clipboard feature