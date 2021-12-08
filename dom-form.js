function getName() {
  event.preventDefault()
  let firstName = document.querySelector(".first_name").value
  let lastName = document.getElementsByName("last_name")[0].value
  let email = firstName + "." + lastName + "@mail.com"
  document.getElementsByName("email")[0].value = email
}

function getGenderValue() {
  let male = document.getElementById('male').checked
  let female = document.getElementById('female').checked
  if (male == true) {
    document.getElementById('output').innerText = "Anda telah memilih gender Pria"
  } else if (female == true) {
    document.getElementById('output').innerText = "Anda telah memilih Gender Wanita"

  } else {
    alert("harap pilih gener")
    document.getElementById('output').innerText = "Anda Tidak Memilih Gender"
  }
}

class Player {
  constructor(name, history)
}

class HumanPlayer extends Player {
  userManualChoice() {
    console.log("user memilih rock")
  }
}

class ComputerPlayer extends Player {
  computerRandomChoice() {
    console.log('komputer random pilih kertas')
  }
}

class PlayGame {
  match(inputPlayer, inputCom) {
    console.log(match)
  }
}