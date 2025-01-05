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