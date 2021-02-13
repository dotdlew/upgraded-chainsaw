// Assignment code here
function generatePassword() {
  // terrible generator
  let r = Math.random().toString(36).substring(5);
  return r;
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
