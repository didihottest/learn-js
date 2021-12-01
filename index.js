var text = "Hello World"
var number = 80
var angkaString = "80"
// console.log(typeof text)
// console.log(typeof number)
// console.log(typeof angkaString)

var camelCase = "ini cara penulisan camel case"
var iniAdalahCamelCase;
var ini_adalah_snake_case;
var user_address = "penamaan untuk tabel database"
var PascalCase = "ini adalah pascal case"
var kebabCase = { "kebab-case": "ini adalah kebabcase" }
var email;
email = "email@gmail.com"
// console.log(email)

hp = 6289122211
var hp
// console.log(hp)

var hp = 0811111111
// console.log(hp)

// let tidak bisa redeclare variable yang sudah ada
// let hp = 082222222
// console.log(hp)

// contoh salah penggunaaan let
// let tidak bisa hoisting

// address = "bogor"
// let address
// console.log(address)

// let address = "bogor"
// console.log(address)
// let address = "jakarta"

// assign variable baru valuenya (bisa)
let address;
// console.log(address)
let adressComplete = "jl. baru " + address

address = "banten"
// console.log(address);

// let adressComplete = "jl. baru " + address
// console.log(adressComplete)

var data = 1
// console.log(data)
if (true) {
  var data = 2
  // console.log(data)
}
// console.log(data)

// global scope
let dataLet = 1
// console.log(dataLet)

if (true) {
  // localscope
  let dataLet = 2
  // console.log(dataLet)

}
// console.log(dataLet)

const dataPermanent = "gak bisa diubah"
// const gak bisa diganti value nya
// dataPermanent = "coba ganti ah"
// console.log(dataPermanent);

// asssign variable tapi gak dikasih valuenya jadi error
// const dataBelomAdaValue;
// dataBelomAdaValue = "jadi ada valuenya"
// console.log(dataBelomAdaValue);

// constHoisting = "valuenya ditulis dulu valuenya nanti"
// const constHoisting;

const PAID = "PAID"
const PENDING = "PENDING"
const REJECT = "REJECT"
const NUMBER = 89
const FLOAT = 64.5
console.log(typeof FLOAT);

let paid = PAID
console.log(paid);