const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input The Number : ", (myNumber) => {
  let status = "";
  // myNumber = parseInt(myNumber);
  if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    status = "FizzBuzz";
  } else if (myNumber % 3 === 0) {
    status = "Fizz";
  } else if (myNumber % 5 === 0) {
    status = "Buzz";
  } else {
    status = myNumber;
  }
  console.log(status);
  rl.close();
});
