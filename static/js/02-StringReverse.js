const myName = "Nana Wartana";
const myNameLists = [];
const myNameReversedLists = [];
// console.log(myName.length);

for (let char of myName) {
  // console.log(char);
  myNameLists.push(char);
}

// console.log(myNameLists)
for (let i = 1; i <= myName.length; i++) {
  // console.log(myNameLists[myName.length - i]);
  myNameReversedLists.push(myNameLists[myName.length - i]);
}

// console.log(myNameReversedLists);
const myNameReversed = myNameReversedLists.join("").toLowerCase();

// console.log(myNameReversed);
const words = myNameReversed.split(" ");

/* reduce way*/
const capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

/* complex way*/
// const capitalizedWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1);
// });

console.log(capitalizedWords.join(" "));
