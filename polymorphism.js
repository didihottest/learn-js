class CivitasAkademika {
  constructor(nama, umur) {
    this.nama = nama
    this.umur = umur
  }

  perkenalan() {
    console.log(`${this.nama} adalah seorang yang bekerja di sekolah dan berumur ${this.umur}`)
  }
}

class Guru extends CivitasAkademika {
  constructor(nama, umur, mataPelajaran) {
    super(nama, umur)
    this.mataPelajaran = mataPelajaran
  }

  perkenalan() {
    console.log(`${this.nama} adalah seorang guru ${this.mataPelajaran} yang bekerja di sekolah`)
  }

  perkenalanUmum() {
    super.perkenalan()
  }
}

const GuruFisika = new Guru("Randy", 26, "Fisika")
GuruFisika.perkenalan()
GuruFisika.perkenalanUmum()