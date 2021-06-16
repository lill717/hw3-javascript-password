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
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  allCharacters = generatePassword();
}

function generatePassword()  {
  var passwordLength = prompt("Please choose a number between 8 and 128");
  var length = parseInt(passwordLength)
  // console.log("generate") 
  
  if (length < 8 || length > 128) {
    alert ("The number can only be between 8 and 128");
    generatePassword();
  }

  //how to push lowercaseCharacters array into allCharacters arr  
  var lowerCase = confirm("Would you like to add a lowercase letter?"); 
  if (lowerCase === true) {
    allCharacters = allCharacters.concat(lowerCaseCharacters); 
  }
  
  //how to push uppercaseCharacters array into allCharacters arr
  var upperCase = confirm("Would you like to add a upperCase letter?"); 
  if (upperCase === true) {
    allCharacters = allCharacters.concat(upperCaseCharacters); 
  } 
    
  //how to push uppercaseCharacters array into allCharacters arr
  var numbers = confirm("Would you like to add a number?"); 
  if (numbers === true) {
    allCharacters = allCharacters.concat(numbersPass); 
  }
  
  //how to push uppercaseCharacters array into allCharacters arr
  var special = confirm("Would you like to add a special character?"); 
  if (special === true) {
    allCharacters = allCharacters.concat(specialCharacters); 
  }

  for ( var i = 0; i < passwordLength; i++)  { 
    result += allCharacters[Math.floor(Math.random() * allCharacters.length) ] ;
  }
    result = allCharacters.join("");
      console.log(result);
      return result;

      // result();
      
  // function passwordText(allCharacters, passwordLength) {
    // function passwordText(allCharacters, passwordLength) {
      console.log(passwordText);
      // var passwordString = allCharacters.join("");
      // var passwordStr = "";
    

      // generatePassword();

}

  // return passwordText(allCharacters, length);



    
  //   return allCharacters;

  //   function writePassword() {
  //     var result = generatedPassword();

  //     passwordText.value = document.querySelector(allCharacters);
  //     allCharacters.value = result;
  //     }



  // generatePassword();
  


//generate the password with allCharacter array with the length user chose 

