// array non-associative
const laptop = ['asus', 'hp', 'dell', 'lenovo']
// laptop = ['viewsonic', "gigabyte"]
// console.log(laptop[0])
// console.log(laptop[1])
// console.log(laptop[2])
// console.log(laptop)
// assign data to nonassociative array
// laptop[0] = 'mac';
// laptop.push("gigabyte")
// laptop.sort()
// laptop.reverse()
// console.log(laptop.length)
// console.log(laptop.splice(2, 2))
// delete laptop[0]

// console.log(laptop.slice(0, 2))
// const deletedLaptop = laptop.slice(1, 4)
// console.log(deletedLaptop)
// console.log(laptop)

// const fileteredLaptop = laptop.filter((function (item) { return item !== "asus" }))

// console.log(fileteredLaptop)

// array associative
const mobil = []
mobil['merah'] = "mobil berwarna merah"
mobil['hijau'] = "mobil berwarna hijau"
mobil['biru'] = "mobil berwarna biru"
// assign data to associative array
mobil['merah'] = "mobil merah jambu"
// console.log(mobil)
// console.log(mobil)
// console.log(mobil['merah'])
// console.log(mobil['biru'])

// console.log(typeof laptop)

// cara nambah array


let numbers = [10, 20, 100, 60, 30]
let totalNumbers = 0
// looping menggunakan method array.forEach
// numbers.forEach((number) => {
//   // console.log(totalNumbers)
//   totalNumbers += number
// })
// console.log(totalNumbers);

for (let index = 0; index < numbers.length; index++) {
  // console.log(index);
  // console.log(numbers[index])
  // numbers[0]
  totalNumbers += numbers[index]
}
// console.log(totalNumbers);
console.log(numbers.sort(function (a, b) { return b - a }))
// console.log(numbers.sort())