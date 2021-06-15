// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseCharacters = ("abcdefghijklmnopqrs†uvwxyz").split("");
var upperCaseCharacters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbersPass = ("1234567890").split("");
var specialCharacters = ("!@#$%^&*_").split("");
var allCharacters = [];
var result = "";


// Write password to the #password input
function writePassword() {
  var passwordArr = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword()  {
  var passwordLength = prompt("Please choose a number between 8 and 128");
  var passwordArr = [];
  var length = parseInt(passwordLength)
  
  if (length < 8 || length > 128) {
    alert ("The number can only be between 8 and 128");
    generatePassword();
  }

  //how to push lowercaseCharacters array into allCharacters arr  
  var lowerCase = confirm("Would you like to add a lowercase letter?"); 
  if (lowerCase === true) {
    passwordArr = passwordArr.concat(lowerCaseCharacters); 
  }
  
  //how to push uppercaseCharacters array into allCharacters arr
  var upperCase = confirm("Would you like to add a upperCase letter?"); 
  if (upperCase === true) {
    passwordArr = passwordArr.concat(upperCaseCharacters); 
  } 
    
  //how to push uppercaseCharacters array into allCharacters arr
  var numbers = confirm("Would you like to add a number?"); 
  if (numbers === true) {
    passwordArr = passwordArr.concat(numbersPass); 
  }
  
  //how to push uppercaseCharacters array into allCharacters arr
  var special = confirm("WouldI you like to add a special character?"); 
  if (special === true) {
    passwordArr = passwordArr.concat(specialCharacters); 
  }

  function passwordText(allCharacters, passwordLength) {
 
    for ( var i = 0; i < passwordLength; i++)  { 
      result += allCharacters[Math.floor(Math.random() * allCharacters.length) ] ;
    }
    
    function writePassword() {
      var result = generatedPassword();

      // result = result.replace(“[#password]“, “”);
      var passwordText.value = document.querySelector(“password”);
      passwordText.value = result;
      }



    // function generatePassword() {
    //   passwordText = passwordText.replace(password, "");
    //   // result.value = document.querySelector(“#password”);
    //   function writePassword() {
    //     var result = generatePassword();
    //     result = result.replace[document.querySelector(“#password”)];
    // }

      console.log(result);
      return result;
  }

  // this is the array of all characters to choose from in the final password
  console.log(passwordArr);  
  passwordText(passwordArr, length);
}
// document.getElementById(“password”).textContent = “This is your secure password:  ” + passwordText

generatePassword();

    //generate the password with allCharacter array with the length user chose  
