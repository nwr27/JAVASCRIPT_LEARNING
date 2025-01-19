// 1. charAt
let dataString = "Troppo";
let dataChar = dataString.charAt(1);
console.log(`Karaketer ke indeks ${1} adalah ${dataChar}`);

// 2. concat
let namaDepan = "Troppo";
let namaBelakang = "Lungo";
let namaLengkap = namaDepan.concat(" ", namaBelakang, " adalah nama samaranku");
console.log(namaLengkap);

// 3. indexOf
console.log(namaLengkap.indexOf("o"));

// 4. substring
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(5,12));

// 5. slice
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5));

// 6. replace
namaLengkap = namaLengkap.replace("Troppo Lungo", "Zayyan Maliki");
console.log(namaLengkap);

// 7. toLowerCase
console.log(namaLengkap.toLowerCase());

// 8. toUpperCase
console.log(namaLengkap.toUpperCase());

// 9. parseInt
let dataStringAngka = "1234567890";
let dataAngka = parseInt(dataStringAngka);
console.log(dataAngka);
console.log(typeof dataAngka);

// 10. parseFloat
let dataStringFloat = "12.34567890";
let dataFloat = parseFloat(dataStringFloat);
console.log(dataFloat);
console.log(typeof dataFloat);
