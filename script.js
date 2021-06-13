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
  var c = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword ()  {
var passwordLength = prompt ("Please choose a number between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("The number can only be between 8 and 128");
    generatePassword();
//how to push lowercaseCharacters array into allCharacters arr  
  else if (
    var lowerCase = confirm ("Would you like to add a lowercase letter?"); 
      if (lowerCase === true) {
        var passwordText = lowerCaseCharacters.concat(allCharacters); 
      }
    )
  } 
//how to push uppercaseCharacters array into allCharacters arr
  else if (
    var upperCase = confirm ("Would you like to add a upperCase letter?"); 
      if (upperCase === true) {
        var passwordText = upperCaseCharacters.concat(allCharacters); 
        } 
      )
  //how to push uppercaseCharacters array into allCharacters arr
  else if (
    var numbers = confirm ("Would you like to add a number?"); {
      if (numbers === true) {
        var passwordText = numbersPass.concat(allCharacters); 
        }
    )
  }
 //how to push uppercaseCharacters array into allCharacters arr
  else if (
  var special = confirm ("Would you like to add a special character?"); 
    if (special === true) {
      var passwordText = specialCharacters.concat(allCharacters); 
      }
    ) 
  }
  


  else {
//generate the password with allCharacter array with the length user chose

}

}
//return the password generated
  return "Hey";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
