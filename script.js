// Establish global variables

var passwordLength = 0;
var numbersQ = false;
var symbols = false;
var capLetters = false;
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specials = ["!","@","#","$","%","^","&","*","-"];


// Set criteria for password characters and length

var numbersQ = confirm("Would you like to include numbers in your password?");
var capLetters = confirm("Would you like to include capital letters in your password?");
var symbols = confirm("Would you like to include special characters in your password?");

function passwordCriteria(){


  passwordLength = prompt("How long would you like your new password to be?");

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be between 8 and 128 characters.");
  
  
  }
  else return passwordLength;
}

// Call on function
passwordCriteria();
// Create function for generating the password using concat to merge the character arrays if the confirm conditions are met
function generatePassword() {

  
//Set variable for the results of the confirms
  var passwordChars = [];
// Because "lowers" wasn't an array needing a result from the confirms === true is not needed.
  if (lowers) {
    passwordChars = passwordChars.concat(lowers)
  }

  if (numbersQ === true) {
    passwordChars = passwordChars.concat(numbers)
  }

  if (capLetters === true) {
    passwordChars = passwordChars.concat(uppers)
  }

  if (symbols === true) {
    passwordChars = passwordChars.concat(specials)
  }
  
  //Set variable for the random password
  var random = "";
// Use Math.random to combine to results from the concat arrays to randomly generate characters from each 
  for (var i = 0; i < passwordLength; i++) {
    random = random + passwordChars[Math.floor(Math.random() * passwordChars.length)]
  }
// Return the password
  return random;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)