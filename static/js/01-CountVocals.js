const myWords = "saya adalah kamu";
let count = 0;

for (let char of myWords.toLowerCase()) {
  if ( ["a", "i", "u", "e", "o"].includes(char)) {
    count++;
  }
}
console.log(count)