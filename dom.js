// console.log("hello world")
// const h1 = document.getElementById('main-title')
const h1 = document.querySelector('#main-title')
// console.log(h1)
// lihat isi konten
// console.log(h1.innerText)
// console.log(h1.innerHTML)
// console.log(h1.textContent)

// console.log(h1.id)
// console.log(h1.className)

// ganti isi text dari elemen
// h1.innerText = "Ganti Judul"
// h1.innerHTML = "ganti lagi"
// h1.textContent = "ganti pakai text content"

// h1.className = "first-title"
// h1.id = "test-ganti-id"
// h1.innerText = "ganti elemen yang id nya sudah dirubah"

// hasil array
//getElementByTag 
//getElementByClass
//querySelectorAll
// hasil nya single element
// getElementById 
// querySelector


// h1.style.color = "white"
// h1.style.backgroundColor = "red"

const listItemElement = document.querySelectorAll('li')
// console.log(listItemElement)
// console.log(listItemElement[0].innerText)
// console.log(listItemElement[1].innerText)
// console.log(listItemElement[2].innerText)

// console.dir(listItemElement)
// nodelist tidak bisa looping pakai map
// listItemElement.map((item) => {
//   console.log()
// })

// looping element menggunakan foreach
// listItemElement.forEach((item) => {
//   console.log(item.innerText)
// })

// for (const element of listItemElement) {
//   // console.log(element.innerText)
//   element.innerText = "ganti semua"
// }
// for (const index in listItemElement) {
//   const element = listItemElement[index]
//   if (index == 1 || index == 2) {
//     element.innerText = "ganti element 2 dan 3"
//   }
// }

// for (const index in listItemElement) {
//   const element = listItemElement[index]
//   if (index > 0 && index <= 2) {
//     element.innerText = "ganti element 2 dan 3"
//   }
// }

// for (let index = 1; index < listItemElement.length; index++) {
//   const element = listItemElement[index];
//   element.innerText = "ganti element 2 dan 3"

// }

const ul = document.querySelector('ul')
// select by index
// console.log(ul.children[1])
// selet all ul child
// console.log(ul.children)
// first child of ul
// console.log(ul.firstElementChild)
// last child of ul
// console.log(ul.lastElementChild)

const firstLi = document.querySelector('li')
// console.log(firstLi.parentElement.innerHTML)
// firstLi.parentElement.innerHTML = "<h1>Ganti Li ke h1</h1>"
// firstLi.parentElement.innerText = "<h1>Ganti Li ke h1</h1>"
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

const section = document.querySelector('section')
// section.style.backgroundColor = "blue"
// section.className = ""

const button = document.querySelector('button')

button.addEventListener('click', () => {
  // toggle menggunakan if 
  // if (section.className === "red-bg visible") {
  //   section.className = "invisible"
  // } else {
  //   section.className = "red-bg visible"

  // }

  section.classList.toggle('visible')
  section.classList.toggle('invisible')
})

// console.log(section.classList[1])

// section.classList.add("invisible")
// section.classList.remove("invisible")
// section.classList.replace("red-bg", "blue-bg")

// creating element with html

// section.innerHTML = "<h1>Jadi h1</h1>"
// ul.insertAdjacentHTML('afterbegin', "<li>Item 0</li>")
// ul.insertAdjacentHTML('beforeend', "<li id="item-4">Item 4</li>")
// ul.insertAdjacentHTML('beforebegin', "<p>Paragraph sebelum ul</p>")
// ul.insertAdjacentHTML('afterend', "<p>Paragraph setelah ul</p>")
// queryselector('#item-4')

// create element paka document.createelement
// const newLi = document.createElement('li')
// const newLi2 = document.createElement('li')
// newLi2.textContent = "Item 0"
// newLi.textContent = "Item 4"
// ul.appendChild(newLi)
// ul.prepend(newLi2)

// remove element
// ul.remove()