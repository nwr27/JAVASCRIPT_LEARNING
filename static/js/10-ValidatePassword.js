function lenCheck(word) {
  return word.length >= 8;
}

function CaseCheck(word) {
  let countUpper = 0;
  let countLower = 0;
  for (let char of word) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      countUpper++;
    }
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      countLower++;
    }
  }
  return countUpper > 0 && countLower > 0;
}

function numberCheck(word) {
  let countNumber = 0;
  for (let char of word) {
    if (char >= "0" && char <= "9") {
      countNumber++;
    }
  }
  return countNumber > 0;
}

function symbolCheck(word) {
  let countSymbol = 0;
  for (let char of word) {
    if (/[^a-zA-Z0-9]/.test(char)) {
      // Memeriksa simbol
      countSymbol++;
    }
  }
  return countSymbol > 0;
}

function validatePassword(password) {
  let req, result;
  if (lenCheck(password) && CaseCheck(password) && numberCheck(password) && symbolCheck(password)) {
    req = "Valid";
    result = true;
  } else {
    req = "Invalid";
    result = false;
  }
  return `${password} is ${req} because of ${result}`;
}

console.log(validatePassword("Password1!")); // Valid
console.log(validatePassword("password1!")); // Invalid
console.log(validatePassword("Password!")); // Invalid
console.log(validatePassword("Password1")); // Invalid
console.log(validatePassword("pass")); // Invalid
