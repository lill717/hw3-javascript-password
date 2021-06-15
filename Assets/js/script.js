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
    // for ( var i = 0; i < passwordLength; i++)  { 
    //   result += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)  ] ;
    // }
    // for ( var i = 0; i < passwordLength; i++)  { 
    //   result += numbersPass[Math.floor(Math.random() * numbersPass.length) ] ;
    // }
    // for ( var i = 0; i < passwordLength; i++)  { 
    //   result += specialCharacters[Math.floor(Math.random() * specialCharacters.length) ];
    // }
    console.log(result);
    return result;
  }


  console.log(passwordArr);  // this is the array of all characters to choose from in the final password
  passwordText(passwordArr, length);
}

generatePassword();

    //generate the password with allCharacter array with the length user chose  
