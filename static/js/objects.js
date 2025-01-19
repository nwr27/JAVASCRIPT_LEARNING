// {
//   const { JSDOM } = require("jsdom");
//   const dom = new JSDOM(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Learn Objects</title>
// </head>
// <body>
//   <h1 id="home"></h1>
//   <div class="container">
//     <div class="ul">
//       <li><h2 id="first"></h2></li>
//       <li><h2 id="second"></h2></li>
//       <li><h2 id="third"></h2></li>
//       <li><h2 id="fourth"></h2></li>
//     </div>
//   </div>

//   <script src="static/js/objects.js"></script>
// </body>
// </html>`);
//   var document = dom.window.document;
// }

const car = {
  name: "Honda",
  model: "Civic",
  year: 2015,
  price: 15000.0,
  speed: function (oil) {
    if (oil == "diesel") {
      return 120;
    } else if (oil == 80) {
      return 80;
    }
  },
  color: (size) => {
    if (size === 8) {
      return "red";
    } else {
      ("blue");
    }
  },
};

console.log(car);

console.log(car.name);

car.series = "Turbo";
console.log(car);

const myCar = car;
myCar["name"] = "toyota";
myCar["model"] = "yaris";
delete myCar.series;
console.log(car);
console.log(myCar);

document.getElementById("home").innerHTML = myCar.name;
document.getElementById("first").innerHTML = myCar.model;
document.getElementById("second").innerHTML = myCar.year;
document.getElementById("third").innerHTML = myCar.price;
document.getElementById("fourth").innerHTML = myCar;
document.write(myCar.model);
// alert(myCar.model)
document.write(myCar.speed("80"));
// alert(myCar.color("8"))

document.write("<br>");
document.write("<br>");
let text = "";

for (let [key, value] of Object.entries(car)) {
  text += key + " : " + value + "<br>";
}
document.write(text);

jsonCar = JSON.stringify(car);
console.log(jsonCar);
