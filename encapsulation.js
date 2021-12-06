// non encapsulation
let jari_jari = 20

const hitungLuasBulat = (jari_jari) => {
  return jari_jari * jari_jari * 3.14
}

console.log(hitungLuasBulat(20))

//encapsulation
class Bulat {
  constructor(jari_jari) {
    this.jari_jari = jari_jari
  }
  hitungLuasBulat() {
    return this.jari_jari * this.jari_jari * 3.14
  }
}

const newBulat = new Bulat()

console.log(newBulat.hitungLuasBulat())