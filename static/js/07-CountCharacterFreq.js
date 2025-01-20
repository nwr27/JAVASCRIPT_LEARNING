const myWords = "Nana Wartana";
const charList = [];
const countChar = {};

for (let char of myWords.toLowerCase()) {
  if (char !== " ") {
    if (!charList.includes(char)) {
      charList.push(char);
    }
    countChar[char] = (countChar[char] || 0) + 1;
  }
}

console.log(countChar);
