// Assignment code here
function generatePassword() {
  const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const upperChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const specialChar = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  let possibleChar = [];

  // validate input
  charLimit = prompt("Choose between 8-128 characters.");
  if (charLimit < 8 || charLimit > 128) {
    return "Choose between 8-128 characters.";
  } else if (isNaN(charLimit)) {
    charLimit = prompt("value is not a number");
  }

  checkLower = confirm("enable lowercase?");
  if (checkLower) {
    alert("lowercase enabled");
    console.log("lowercase", checkLower);
  }

  checkUpper = confirm("enable uppercase?");
  if (checkUpper) {
    alert("uppercase enabled");
    console.log("uppercase", checkUpper);
  }

  checkNumber = confirm("enable numbers?");
  if (checkNumber) {
    alert("numbers enabled");
    console.log("numbers", checkNumber);
  }

  checkSpecial = confirm("enable special?");
  if (checkSpecial) {
    alert("special enabled");
    console.log("special", checkSpecial);
  }

  if (
    checkLower === false &&
    checkUpper === false &&
    checkNumber === false &&
    checkSpecial === false
  ) {
    return "please select at least one character type";
  }

  // group characters
  if (checkLower) {
    possibleChar = possibleChar.concat(lowerChar);
  }

  if (checkUpper) {
    possibleChar = possibleChar.concat(upperChar);
  }

  if (checkNumber) {
    possibleChar = possibleChar.concat(numberChar);
  }

  if (checkSpecial) {
    possibleChar = possibleChar.concat(specialChar);
  }

  // add some randomization
  const output = [];
  for (let i = 0; i < charLimit; i++) {
    const random =
      possibleChar[Math.floor(Math.random() * possibleChar.length)];
    output.push(random);
  }

  return output.join("");
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
