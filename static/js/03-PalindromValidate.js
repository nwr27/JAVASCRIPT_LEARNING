const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input your word : ", (myWord) => {
  let myWordList = [];
  let myWordReversedList = [];

  for (let char of myWord) {
  // console.log(char);
    myWordList.push(char);
  }

  for (let i = 1; i <= myWord.length; i++) {
    myWordReversedList.push(myWordList[myWord.length - i].toLowerCase());
  }
  let myWordReversed = myWordReversedList.join("");

  console.log(`This word is a palindrome: `, myWord.toLowerCase() === myWordReversed);

  rl.close();
});
