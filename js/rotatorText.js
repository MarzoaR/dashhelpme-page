let text = document.getElementById("text")
let word = text.getElementsByTagName("span")

let i = 0

function rotator() {
  word[i].style.opacity = 0
  i = (i + 1) % word.length
  word[i].style.opacity = 1
}

setInterval(rotator, 4000)