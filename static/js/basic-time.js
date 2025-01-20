const person = {
  name: "John Doe",
  age: 25,
  stock() {
    if (this.age < 25) {
      return "Haven't married";
    } else {
      return "Married";
    }
  },
};

console.log(person.stock());
person.age = 20;
console.log(person.stock());

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
  console.log(fruit, value);
}

console.log(typeof person.name.values());