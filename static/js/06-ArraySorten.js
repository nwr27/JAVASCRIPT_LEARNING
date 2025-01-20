const myGirlFriends = [
  { name: "Chelsea", age: 30 },
  { name: "Zee", age: 20 },
  { name: "Inara", age: 32 },
  { name: "Zoe", age: 19 },
];
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const sort1 = fruits.sort();
// console.log(sort1);

function sortByProperty(myList, key) {
  let newList = [];
  for (let i = 0; i < myList.length; i++) {
    if (key === "name") {
      newList.push(myList[i].name);
    } else if (key === "age") {
      newList.push(myList[i].age);
    }
  }
  newList = newList.sort();
  const newObjectList = [];
  for (let i = 0; i < newList.length; i++) {
    for (let j = 0; j < myList.length; j++) {
      if (myList[j][key] === newList[i]) {
        newObjectList.push(myList[j]);
        break;
      }
    }
  }
  return newObjectList;
}

const x = sortByProperty(myGirlFriends, "age");
console.log(x);
