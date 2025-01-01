console.log("ini adalah javascript eksternal");

// 1. Variabel dengan awalan 'let'
let name = "Nana Wartana";
console.log(name);
{
    let name = "Troppo Lungo";
    console.log(name);
}
console.log(name);

// 2. Variabel dengan awalan 'var' (jika tanpa awalan: job = "ABC" ini sama dengan var)
var job = "Electrical Engineer";
console.log(job);
{
    var job = "AI Engineer";
    console.log(job);
}
console.log(job);

// 3. Variabel dengan awalan 'const'
const piValue = 3.14;
console.log(piValue);
{
  const piValue = 22;
  console.log(piValue);
}
// piValue = 23; // jika di uncomment, akan error 
console.log(piValue);

// 4. Tipe data
let a = "abc";
let b = 123;
let c = false;
let d;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

// 5. Escaping string (sama seperti python '""',\n, \t, \\, dll)
// 6. Literal string
let namaDepan = "Nana";
let namaBelakang = "Wartana";
let umur = 22;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);
console.log(typeof namaLengkap);
let biodata = `${namaDepan} ${namaBelakang} berumur ${umur}`;
console.log(biodata);
console.log(typeof biodata);