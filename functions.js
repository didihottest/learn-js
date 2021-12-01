function test() {
  console.log("hello world")
}

// test();

function testCamelCase() {
  console.log("hello camel case")
}

// testCamelCase()

function TestPascalCase() {
  console.log("function pascal case")
}

// TestPascalCase()

const hasilDariFunction = function () {
  return "hasil proses fungsi"
}

// console.log(hasilDariFunction())

function division(parameter1, parameter2) {
  if (typeof parameter1 === "number" && typeof parameter2 === "number") {
    return parameter1 / parameter2
  } else {
    console.log("Please insert number value")
  }
}

// division(100, 50)

let hasilBagi = division(100, 50)
// console.log(hasilBagi);

function gabungKata(word1, word2) {
  return `${word1} ${word2}`
}

let hasilGabunganKata = gabungKata("World", "Hello")
// console.log(hasilGabunganKata);

// fungsi penambahan 3 parameter
function tambah3(n1, n2, n3) {
  return n1 + n2 + n3
}

let hasiltambah3 = tambah3(5, 6, 15)
// console.log(hasiltambah3)

// fungsi gabung kata 3 parameter
function gabungTigaKata(kata1, kata2, kata3) {
  return `${kata1} ${kata2} ${kata3}`
}

let hasilGabungTigaKata = gabungTigaKata("Halo", "apa", "kabar")
// console.log(hasilGabungTigaKata);

// function recursive
function pangkat(n1, n2) {
  if (n2 == 1) {
    return n1
  } else {
    return n1 = n1 * pangkat(n1, n2 - 1)
  }
}

// let hasilPangkat = pangkat(3, 3)
// console.log(hasilPangkat)
function countDown(fromNumber) {
  // console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber >= -5) {
    countDown(nextNumber);
  }
}
const hitungMundur = countDown(3);
// console.log(hitungMundur);



let hasilTambahDefaultValue = defaultValue(null, 10)
// console.log(hasilTambahDefaultValue);

function perkenalan(nama = "anonymous") {
  return `perkenalkan saya adalah ${nama}`
}

const hasilPerkenalan = perkenalan()
// console.log(hasilPerkenalan);

function defaultValue(num1 = 0, num2 = 0) {
  return num1 + num2
}

function functionInFunction(num1, num2) {
  return defaultValue(num1, num2) + defaultValue(num1, num2)
}

const hasilFunctionInFunction = functionInFunction(2, 3)
console.log(hasilFunctionInFunction)