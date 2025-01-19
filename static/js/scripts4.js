let x = 4;
{
  let x = 5;
  console.log(x )
}
// let x = 5; //inilah yang disebut redeclare
x = 3; //ini yang disebut reassign
x = "ddan"
console.log(x)

function myHobbies(){
  this.sport = "jogging";
  this.art = "guitar";
  this.technology = "programming";
}

const hobi = new myHobbies();
myHobbies.prototype.other = "Knowing well something that viral"

console.log(hobi)
console.log(typeof hobi)