// tanpa parameter
// class Bulat {
//   constructor() {
//     this.jari_jari = 20
//     this.warna = "hijau"
//   }
// }

// const bulatBaru = new Bulat()
// console.log(bulatBaru.warna)

// dengan parameter
class Bulat {
  constructor(jari_jari, warna) {
    this.jari_jari = jari_jari
    this.warna = warna
  }

  hitungLuas() {
    return this.jari_jari * this.jari_jari * 3.14
  }

  deskripsiBulat() {
    return `bentuk bulat ini memiliki jari-jari ${this.jari_jari} dan berwarna ${this.warna}`
  }
}

const bulatMerah = new Bulat(7, "merah")
const bulatBiru = new Bulat(8, "biru")
// console.log(bulatMerah.warna)
// console.log(bulatMerah.jari_jari)

// console.log("warna bulat biru adalah " + bulatBiru.warna)
// console.log("jari jari bulat biru adalah " + bulatBiru.jari_jari)

const luasBulatMerah = bulatMerah.hitungLuas()
const luasBulatBiru = bulatBiru.hitungLuas()
const deskripsiBulatMerah = bulatMerah.deskripsiBulat()
const deskripsiBulatBiru = bulatBiru.deskripsiBulat()
console.log(luasBulatMerah)
console.log(luasBulatBiru)
console.log(deskripsiBulatMerah)
console.log(deskripsiBulatBiru)