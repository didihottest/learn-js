class Mobil {
  constructor(roda, body, transmisi) {
    this.roda = roda
    this.body = body
    this.transmisi = transmisi
  }

  deskripsiMobil() {
    console.log(`mobil ini memiliki ${this.roda} roda, dengan tipe body ${this.body} dan memiliki transmisi ${this.transmisi}`)
  }
}

const mobilSedan = new Mobil(4, "sedan", "matic")
// mobilSedan.deskripsiMobil()
// console.log((mobilSedan.deskripsiKecepatan))

class MobilBalap extends Mobil {
  constructor(roda, body, transmisi, top_speed) {
    super(roda, body, transmisi)
    this.top_speed = top_speed
  }

  deskripsiKecepatan() {
    console.log(`Mobil balap ini memiliki kecepatan maksimal ${this.top_speed} KM/h`)
  }
}

const mobilBalapBaru = new MobilBalap(4, "F1", "Manual", 50)
// console.log(mobilBalapBaru.roda)
// console.log(mobilBalapBaru.body)
// console.log(mobilBalapBaru.transmisi)
// console.log(mobilBalapBaru.top_speed)
// mobilBalapBaru.deskripsiMobil()
// mobilBalapBaru.deskripsiKecepatan()

class Player {
  constructor(nama, pilihan) {
    this.nama = nama
    this.pilihan = pilihan
  }
  pilihanPlayer() {
    if (this.pilihan == 1) {
      return "batu"
    } else if (this.pilihan == 2) {
      return "kertas"
    } else if (this.pilihan == 3) {
      return "gunting"
    }
    // console.log("fungsi pilihan");
  }
}

const player1 = new Player("player1", 1)

class PlayGame extends Player {
  constructor(nama, pilihan1) {
    super(nama)
    this.pilihanPlayer = pilihan1
    let randomChoose = Math.floor((Math.random() * 3) + 1)
    this.choosenPlayer2
    if (randomChoose === 1) {
      this.choosenPlayer2 = "batu"
    } else if (randomChoose === 2) {
      this.choosenPlayer2 = "kertas"
    } else {
      this.choosenPlayer2 = "gunting"
    }
  }

  playGame() {
    console.log(this);
    let { choosenPlayer2, nama, pilihanPlayer } = this
    let bothChoice = pilihanPlayer + choosenPlayer2
    switch (bothChoice) {
      case "guntingkertas":
        return ("Player 1 Win")
      case "guntingbatu":
        return ("Player 2 Win")
      case "guntinggunting":
        return ("draw")
      case "kertaskertas":
        return ("Draw")
      case "kertasbatu":
        return ("Player 1 Win")
      case "kertasgunting":
        return ("Player 2 Win")
      case "batukertas":
        return ("Player 2 Win")
      case "batubatu":
        return ("Draw")
      case "batugunting":
        return ("Player 1 Win")
      default:
        return ("error")
    }
  }

  panggilMethodPlaygame() {
    return this.playGame()
  }
}
console.log(player1.pilihanPlayer())

const gameBaru = new PlayGame(null, player1.pilihanPlayer())
console.log(gameBaru.panggilMethodPlaygame())