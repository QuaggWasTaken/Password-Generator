// Assignment code here
function generatePassword() {
  var charset = ""
  var lowercase = "qwertyuiopasdfghjklzxcvbnm"
  var uppercase = lowercase.toUpperCase()
  var numeric = "0123456789"
  var special = ` !"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
  var length = parseInt(prompt("How many characters long should the password be? Between 8 and 128 please", "0"), 10)
  if (length < 8 || length > 128) {
    alert("Please use a valid length, between 8 and 128 characters")
    return ""
  }
  if (window.confirm("Do you want lowercase letters?")) {
    charset += lowercase
  }

  if (window.confirm("Do you want uppercase letters?")) {
    charset += uppercase
  }

  if (window.confirm("Do you want numbers?")) {
    charset += numeric
  }

  if (window.confirm("Do you want special charactes?")) {
    charset += special
  }

  if (charset === "") {
    alert("Please select at least one type of character")
    return ""
  }
  var result = ""
  for (let index = 0; index < length; index++) {
    result += charset[Math.floor(Math.random() * Math.floor(charset.length-1))]
  }
  return result
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
