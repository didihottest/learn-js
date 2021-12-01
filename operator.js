let age = 11
// age = age * 2
// bentuk singkat perkalian
// age *= 2
// bentuk singkat pembagian
// age = age / 7
// age /= 7
// bentuk singkat pertambahan
// age = age + 5
// age += 5
// bentuk singkat pengurangan
// age = age - 5
// age -= 5
// konversi string ke number
// age = +age
// age = Number(age)
// modulus adalah sisa hasil bagi
// age = age % 6 // output = 6 

// console.log(age == 21)

// if (age > 10) {
//   console.log("masuk")
// } else if (age < 20) {
//   console.log("dilarang masuk")


// } else {
//   console.log("hubungi satpam untuk izin masuk")
// }

// if (age >= 10) {
//   console.log("umur nya 10 tahun");
// }

// if (age == 21) {
//   console.log("umurnya 21")
// }



// console.log(age > 20)
// ternary operator
// bentuk singkat if else 
// if (true) {

// } else {

// }
// let statusMasuk = age >= 20 ? "masuk" : "dilarang masuk"
// let statusMasuk2 = age <= 20 ? "masuk" : "dilarang masuk"
// let statusMasuk3 = !(age <= 20) ? "masuk" : "dilarang masuk"

// // terneray dua kondisi
// let ternaryElseIf = age > 10 ? age < 15 ? console.log("umur kurang dari 15") : console.log("umur lebih dari 15") : console.log("umur kurang dari 10")
// // if yang setara dengan kondisi ternary diatas
// if (age > 10) {
//   if (age < 15) {
//     console.log("umur kurang dari 15")
//   } else {
//     console.log("umur lebih dari 15")
//   }
// } else {
//   console.log("umur kurang dari 10")
// }

// if (age > 1 && age < 10) {
//   console.log("umur diantara lebih dari satu tahun dan kurang dari 10 tahun")
// }

// if (age > 1 || age < 7) {
//   console.log("umur lebih dari 1 tahun atau kurang dari 7 tahun")
// }

// if (!(age > 1)) {
//   console.log("age kurang dari 1")
// }

// if (age !== 10) {
//   console.log("umur bukan 10 tahun")
// }

// if (true) {

// } else if (false) {

// }
// let variabel1 = 1
// let variabel2 = 2

// let variabelOr = variabel1 || variabel2
// console.log(variabelOr)

// switch (true) {
//   // kondisi dibawah sama dengan if (age === 10)
//   case (age == 10):
//     console.log("age = 10")
//     break;
//   // kondisi yang ini sama dengan if (age === (age > 10)) yang artinya if (9 === "true")
//   case (age > 10):
//     console.log("age > 10")
//     break;
//   default:
//     console.log("semuanya tidak memenuhi kondisi")
//     break;
// }
// console()
// switch case
// let job = "guru"

// switch (job) {
//   case "guru":
//     console.log("pekerjaannya guru")
//     break;
//   case ("nelayan"):
//     console.log("pekerjaannya nelayan")
//     break;
//   default:
//     console.log("pekerjaan tidak terdaftar")
//     break;
// }
// let choosenPlayer2 = ""
// let randomChoose = Math.floor((Math.random() * 3) + 1)
// if (randomChoose === 1) {
//   choosenPlayer2 = "batu"
// } else if (randomChoose === 2) {
//   choosenPlayer2 = "kertas"
// } else {
//   choosenPlayer2 = "gunting"
// }

// let choosenPlayer1 = "kertas"
// let playersChoosen = choosenPlayer1 + choosenPlayer2


// console.log(playersChoosen)
// switch (playersChoosen) {
//   case "guntingkertas":
//     console.log("Player 1 Win")
//     break;
//   case "guntingbatu":
//     console.log("Player 2 Win")
//     break;
//   case "guntinggunting":
//     console.log("draw")
//     break;
//   case "kertaskertas":
//     console.log("Draw")
//     break;
//   case "kertasbatu":
//     console.log("Player 1 Win")
//     break;
//   case "kertasgunting":
//     console.log("Player 2 Win")
//     break;
//   case "batukertas":
//     console.log("Player 2 Win")
//     break;
//   case "batubatu":
//     console.log("Draw")
//     break;
//   case "batugunting":
//     console.log("Player 1 Win")
//     break;
//   default:
//     break;
// }

// console.log(statusMasuk3)
// let input = ""
// while (input !== "quit" || input !== "q") {
//   console.log(input);
//   if (input !== "quit") {
//     input = "asdasd"
//   }
// }

// console.log(input);