
  // Acceptance Needs To Be Done //////////////////////////////////
  // 1. Prompt the User for the password criteria
  // a. password length 8 < 128 characters long
  // b. Lowercase, uppercase, numbers, special characters //
  // 2. Validate Input //


  // Assignment code here // 

  // Define generatePassword with a function ////////
  function generatePassword () {
    // a console log to check that the button is working ////////
    console.log('Generating password with ' + charactersLength + randomUppercaseLetter + randomLowerCaseLetter + randomSymbol + '. ');

    // Establish character amount for passwords, between 8 - 128 // //
    var characterAmount = passwordCharacterAmount();


    // Completed Password, with ALL password rules met ////////
    var completedPassword = completedPassword();

    // Generate letters, upper and lower case // //
    var letters = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz";

    var letter = letters [0]; // "A"
    var randomLetter = letters[Math.floor(Math.random() * characters.length)]; // random letter ;)

    // Generate Random Number to put in with upper case and lower case letters // //
    var randomNumber = function() {
      Math.floor(Math.random() * 98);
    }

   // Generate a Special Symbol to improve security/guess-ability //////////////////////////////////
    var specialSymbol = [
     "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
     "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"
    ];



   // Randomized selection of indicated password rules // //
    var passwordText = "";
    var selection = 0;
    for (var i = 0; i < charactersLength; i++) {
       // keep running this until landing on one of the selected rules // //
      var selected = false;

        while (!selected) {
          var characterType = Math.floor(Math.random() * (128 - 8 + 1) ) + 8;
         if (completedPassword.includes(characterType)) {
          switch (characterType) {
            case w:
             // random number function example: function getRndInteger(min, max) {
             // return Math.floor(Math.random() * (max - min + 1) ) + min;
         
            selection = Math.floor(Math.random() * (128 - 8 + 1) ) + 8;
          
            case x: 
             selection = Math.floor(Math.random() * specialCharacters.length); 
             passwordText += String.fromCharCode(selection);
            break;
  
            default:
            break;
          }
          selected = true;
         }
        }

    }
   return passwordText;

  };



    /* Switch example:
   switch(expression) {
    case x:
      // code block
    break;
    case y:
      // code block
    break;
    default:
    // code block

    */



    // get password with p-word rules // 
    var getPasswordCompleted = function () {
        // make sure user has all password rules // //
        var confirmUpperCase = confirm("Please include uppercase letters");
        var confirmLowerCase = confirm("Please include lowercase letters");
        var confirmNumbers = confirm("Indicate if you would like numbers in your password");
        var confirmSpecial = confirm("Indicate if you would like special characters like !@#$% in your password");

      // Make a list with a number for each rule select (numbers, lower, upper, special) //

        var passwordCompleted = [];
          if (confirmUpperCase) {
            passwordCriteria.push(0);
          }
          if (confirmLowerCase) {
            passwordCriteria.push(1);
          }
          if (confirmNumbers) {
            passwordCriteria.push(2);
          }
          if (confirmSpecial) {
            passwordCriteria.push(3);
          }

      // re-do password criteria check if no rules are selected // 
      if (passwordCompleted.length === 0) {
      alert("Error: Your password must have at least one rule selected");
        return getPasswordCriteria();
      }
   
    return passwordCompleted;
  }


   // Randomize parameters of the password, randomize character selection // //
    var passwordText = "";
    var selection = 0;
    for (i = 0; i < passwordCriteria.length; i++) {

    // Generate random number to act as password character length // //

  

    var getPasswordLength = function () {
      // Ask user to make a password with required characters amount // //
      var passwordLength = parsInt(
        prompt("Enter a password with 8 or more characters, max 128 in length")
      );

      // if the password is has too few or too many characters, warn user with a prompt // //
      if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Error! You must have a password with at least 8 characters or more; 128 characters max");

        return getPasswordLength();
      }

      // Display password to the page, which is the return ! // 
     return completedPassword;
      // a test console.log // 
      console.log("Generated password will go here! Beep Boop");
    };
  

    // #generate element // //
     var generateBtn = document.querySelector("#generate");


     // Write password to the #password input
    function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button //
   generateBtn.addEventListener("click", writePassword);

  }