
class Kotak {
  constructor(panjang, lebar, warna) {
    this.panjang = panjang
    this.lebar = lebar
    this.warna = warna
    let luas = () => {
      return this.panjang * this.lebar
    }
    this.kotakDescription = () => {
      return `Kotak ini memiliki panjang ${this.panjang} dan lebar ${this.lebar} serta luas ${luas()}`
    }
  }
}

const kotakMerah = new Kotak(6, 6, "merah")
const luasKotakMerah = kotakMerah.kotakDescription()
// console.log(luasKotakMerah)
console.log(Kotak)