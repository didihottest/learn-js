// object
const kotak = {
  sudut: 4,
  luas: {
    panjang: 40,
    lebar: 60
  },
  totalLuas: function () {
    return this.luas.panjang * this.luas.lebar
  },
  deletedProperty: "delete saya"
}

// let sudutKotak = kotak.sudut
// console.log(sudutKotak);
// deconstructure
const { luas } = kotak
// deconstucture child
const { luas: { panjang } } = kotak

console.log(luas)

// console.log("kotak sebelum ubahan " + kotak.sudut)
// cara 1 ganti object
// kotak.sudut = 5
// cara 2 ganti object
// console.log(kotak)
// kotak['luas']['panjang'] = 30

// nambah property
// cara 1
// kotak.propertyTambahan = 10
// cara 2
// kotak['propertyTambahan'] = 10
// console.log(kotak)

// cara delete property pada object
// delete kotak.deletedProperty
// console.log(kotak)
// kotak = {
//   asdsad: "sdasdas"
// }

// console.log(kotak.sudut)
// console.log(kotak.luas.panjang)
// console.log(kotak.totalLuas())
// perulangan untuk object
// for (const key in kotak) {
//   if (kotak[key] >= 4) {
//     // console.log(key);
//   }

// }

function pabrikKotak(warna, panjang, lebar) {
  return {
    warna: warna,
    luas: {
      panjang: panjang,
      lebar: lebar
    },
    totalLuas: function () {
      return this.luas.panjang * this.luas.lebar
    }
  }
}

const kotakArray = [
  { warna: "merah", lebar: 30, panjang: 30 },
  { warna: "coklat", lebar: 50, panjang: 50 },
  { warna: "putih", lebar: 30, panjang: 30 },
  { warna: "hitam", lebar: 30, panjang: 30 },
]
const modifiedKotakArray = kotakArray.map((item) => {
  return pabrikKotak(item.warna, item.lebar, item.panjang)
})
// console.log(modifiedKotakArray)

// const kotakHijau = pabrikKotak("Hijau", 30, 30)
// const kotakMerah = pabrikKotak("merah", 40, 40)
// console.log(kotakHijau)
// console.log(kotakMerah)