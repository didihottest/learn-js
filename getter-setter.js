// getter dan setter
class Persegi {
  constructor(panjang, lebar) {
    this.panjang = panjang
    this.lebar = lebar
  }

  get luas() {
    return this.panjang * this.lebar
  }
  // untuk mengubah nilai property pada class yang sudah di inisiasi
  set luas(luas) {
    this.panjang = Math.sqrt(luas)
    this.lebar = this.panjang
  }

  static checkPersegi(panjang, lebar) {
    if (panjang === lebar) {
      console.log("Ini adalah Persegi")
    } else {
      console.log("Ini Bukan Persegi")
    }
  }
}

const persegi4x4 = new Persegi(4, 4)
// console.log(persegi4x4.luas)
// console.log(persegi4x4.panjang)
// console.log(persegi4x4.lebar)

// static method tidak bisa dipanggil oleh object hasil inisiasi class
// persegi4x4.checkPersegi()

// persegi4x4.luas = 36

// console.log(persegi4x4.luas)
// console.log(persegi4x4.panjang)
// console.log(persegi4x4.lebar)
// static method bisa langsung dipanggil dari class nya
// Persegi.checkPersegi(4, 4)