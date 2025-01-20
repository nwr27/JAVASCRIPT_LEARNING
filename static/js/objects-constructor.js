document.write("Code is Started<br><br>");

function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

const Nana = new Person('Nana', 'Sue', 30, 'blue');
// document.write(Nana);
const NanaJson = JSON.stringify(Nana)
document.write(NanaJson);
console.log(Nana)
console.log(NanaJson)

Nana.age = 22;
console.log(Nana);

Person.eye = "Sharingan"
console.log(Nana);

Person.prototype.eye = "Mangekyou";
console.log("4", Nana);
console.log(Person.eye);
console.log(Person.prototype.eye);

// masih bingung untuk apa property