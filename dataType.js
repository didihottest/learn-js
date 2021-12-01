// tipe data string
let firstWord = "Hello"
let secondWord = "World"

// console.log(firstWord);
// console.log(secondWord);

//concatenation
let kalimat = firstWord + secondWord
// console.log(kalimat);
// nambah spasi
kalimat = firstWord + ' ' + secondWord
// console.log(kalimat);

// template literal
let kalimatTemplateLiteral = `${firstWord} ditengah ${secondWord}`
// console.log(kalimatTemplateLiteral);
console.log("jumlah karakter dari kalimatTemplateLiteral " + kalimatTemplateLiteral.length)
let hurufKecil = kalimatTemplateLiteral.toLowerCase()
// console.log(hurufKecil);
let hurufBesar = kalimatTemplateLiteral.toUpperCase()
// console.log(hurufBesar);
let nomorHp = "08111111"
let convertToNumber = parseInt(nomorHp)
// console.log(typeof nomorHp)
// console.log(typeof convertToNumber)
let replaceValue = kalimatTemplateLiteral.replace('Hello', 'Halo')
// console.log(replaceValue);
let stringKosong = ""
// console.log(typeof stringKosong);

// tipe data number
let diskon = 50.5
// console.log(typeof diskon);
let price = 200000
let hargaSetelahDiskon = price / diskon
// console.log(hargaSetelahDiskon);
let perkalian = 100 * 5
// console.log(perkalian);
let NaNvar = parseInt(" asdasddsa")
// console.log(NaNvar);
let convertToString = price.toString()
// console.log(typeof convertToString);
let akar = Math.sqrt(64)
// console.log(akar);
let angkaFloat = 4.7
let buletinKeKeatas = Math.ceil(angkaFloat)
// console.log(buletinKeKeatas);
let buletinKeBawah = Math.floor(angkaFloat)
// console.log(buletinKeBawah);
let randomNumber = Math.random()
// console.log(randomNumber);
let random1to10 = Math.floor((Math.random() * 3) + 1)
let random1to20 = Math.ceil((Math.random() * 20) + 1)
// console.log(random1to20);

let max = Math.max(1, 5, 10)
// console.log(max);
let min = Math.min(1, 5, 10)
// console.log(min);

let nullVariable = null
/* console.log(typeof nullVariable);
console.log(nullVariable); */


// address, province, city
// alamat, null, bogor

// tipe data date (tanggal)
let tanggal = new Date()
// console.log(tanggal);
let tanggalKemarin = new Date("2021-11-28")
// console.log(tanggalKemarin);
let tahun = tanggal.getFullYear()
// console.log(tahun);
let bulan = tanggal.getMonth()
// console.log(bulan)
let utcMonth = tanggal.getUTCMonth()
// console.log(utcMonth);
let tanggalString = tanggal.toDateString()
// console.log(tanggalString);
let tanggalStringLokal = tanggal.toLocaleDateString("id-ID")
// console.log(tanggalStringLokal);

let dataUndefined;
// console.log(dataUndefined);

// boolean

let booleanTrue = true
// console.log(booleanTrue);
let booleanFalse = false
// console.log(booleanFalse);
let booleanToAngka = Number(booleanTrue)
let booleanToAngkaFalse = Number(booleanFalse)
console.log(booleanToAngka);
console.log(booleanToAngkaFalse);