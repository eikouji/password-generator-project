
  // Acceptance Needs To Be Done //////////////////////////////////
  // 1. Prompt the User for the password criteria, https://www.w3schools.com/jsref/met_win_confirm.asp
  // a. password length 8 < 128 characters long
  // b. Lowercase, uppercase, numbers, special characters //
  // 2. Validate Input //


  // Assignment code here // 
  
  // Components of a strong password // 
  // Character amount in password between 8 and 128 characters for increased password strength // 

  var characterAmount = passwordCharacterAmount()
  var letters = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz";
  var numbers = "123456789"
  
  // A Special Symbol variable to improve security/guess-ability //////////////////////////////////
  var specialSymbol = [
      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
      "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"
     ];
 
 // Assignment Code // //
 let generateBtn = document.querySelector("#generateBtn");");

 // Write password to the #password input //
 function writePassword() {
   let password = generatePassword();
   let passwordText = document.querySelector("#password");

   passwordText.value = password;
 }
 

  // Define generatePassword with a function ////////
  function generatePassword () {
    var passwordCharacters = [];

    // a console log to check that the button is working ////////
    console.log(
      'Generating password with ' + 
      charactersLength + 
      randomUppercaseLetter + 
      randomLowerCaseLetter + 
      randomSymbol + '. '
      );


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


    // Completed Password, with ALL password rules met ////////
    var completedPassword = completedPassword();


    var letter = letters [0]; // "A"
    var randomLetter = letters[Math.floor(Math.random() * characters.length)]; // random letter ;)

    // Generate Random Number to put in with upper case and lower case letters // //
    var randomNumber = function() {
      Math.floor(Math.random() * 98);
    }



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
            getPasswordCompleted.push(0);
          }
          if (confirmLowerCase) {
            getPasswordCompleted.push(1);
          }
          if (confirmNumbers) {
            getPasswordCompleted.push(2);
          }
          if (confirmSpecial) {
            getPasswordCompleted.push(3);
          }

      // re-do password criteria check if no rules are selected // 
      if (passwordCompleted.length === 0) {
      alert("Error: Your password must have at least one rule selected");
        return getPasswordCompleted();
      }
   
    return passwordCompleted;
  }


   // Randomize parameters of the password, randomize character selection // //
    var passwordText = "";
    var selection = 0;
    for (i = 0; i < getPasswordCompleted.length; i++) {

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
  

    // #generate element, to get references // //
     var generateBtn = document.querySelector("#generate");
     var regenBtn = document.querySelector("#regen");

     // re-generate button is disabled upon page load // 
     regenBtn.disabled = true;


     function generate() {
       regen = false;
       writePassword():
       // Regenerate Button is clickable as soon as password rules are followed // 
       regenBtn.disabled = false;
     }
     function regenerate() {
       regen = true;
       writePassword();
     }


     // Write password to the #password input
    function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }
    }

    // Add event listener to generate button //
   generateBtn.addEventListener("click", generate);
   regenBtn.addEventListener("click", regenerate);