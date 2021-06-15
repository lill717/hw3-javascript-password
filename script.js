// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseCharacters = ("abcdefghijklmnopqrs†uvwxyz").split("");
var upperCaseCharacters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbersPass = ("1234567890").split("");
var specialCharacters = ("!@#$%^&*_").split("");
var allCharacters = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword ()  {
  var passwordLength = prompt ("Please choose a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
      alert ("The number can only be between 8 and 128");
      generatePassword();
    }

  //how to push lowercaseCharacters array into allCharacters arr  
      var lowerCase = confirm ("Would you like to add a lowercase letter?"); 
      if (lowerCase === true) {
        var passwordText = lowerCaseCharacters.concat(allCharacters); 
      }
  
  //how to push uppercaseCharacters array into allCharacters arr
    var upperCase = confirm ("Would you like to add a upperCase letter?"); 
      if (upperCase === true) {
        var passwordText = upperCaseCharacters.concat(allCharacters); 
      } 
    
  //how to push uppercaseCharacters array into allCharacters arr
    var numbers = confirm ("Would you like to add a number?"); 
      if (numbers === true) {
        var passwordText = numbersPass.concat(allCharacters); 
      }
  
  //how to push uppercaseCharacters array into allCharacters arr
    var special = confirm ("Would you like to add a special character?"); 
      if (special === true) {
        var passwordText = specialCharacters.concat(allCharacters); 
      }
  }
  
//generate the password with allCharacter array with the length user chose
    var passwordText =  allCharacters + generatePassword;
      console.log (passwordText);

/*

//Randomize the characters


//return the password generated
  return "Hey";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

/* 
6/13 Draft 1 - added initial js.
6/14 9am (Draft 2) Debugged and fixed the var and prompts.
6/14 7pm Draft 3 - prompts working and adding randomizer





