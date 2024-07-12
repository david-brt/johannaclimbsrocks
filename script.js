const titles = [
  "Klettern? 👉🥺👈",
  "5h sind Warmup",
  "Haut ist überbewertet 💅🩸",
  "Boulderhallelele 🗣️",
  "Was sind Hobbies 🏃"
]

const headings = [
  "Bitte 🤲",
  "Bitte bitte bitte 🙏",
  "Ich weiß dass du willst 🙌",
  "Für den Strandkörper 💪",
  "Mach deine Eltern stolz ✊",
  "Ich geb dir auch Mensa aus 🍽️",
  "Und ich dachte wir wären Freunde 🥲",
  "Schade, vielleicht klappt es ja beim nächsten Mal 😓"
]

function padHorizontal(el, padding) {
    el.style.paddingLeft = padding
    el.style.paddingRight = padding
}

function padVertical(el, padding) {
    el.style.paddingTop = padding
    el.style.paddingBottom = padding
}

const titleTag = document.getElementsByTagName("title")[0]
const random = Math.floor(Math.random() * titles.length)
titleTag.innerHTML = titles[random]

let paddingHorizontal = 5;
let paddingVertical = 2
let i = 0

window.onload = () => {
  const h1Tag = document.getElementsByTagName("h1")[0]
  const yesButton = document.getElementById("yes")
  const noButton = document.getElementById("no")

  noButton.addEventListener("click", () => {
    h1Tag.innerHTML = headings[i]
    if (i >= headings.length-1) {
      yesButton.remove()
      noButton.remove()
      return
    }
    paddingHorizontal *= 1.5
    paddingVertical *= 1.2
    padHorizontal(yesButton, paddingHorizontal + "em")
    padVertical(yesButton, paddingVertical + "em")
    i++
  })

  yesButton.addEventListener("click", () => {
    yesButton.remove()
    noButton.remove()
    const pedro = document.getElementById("pedro")
    pedro.style.display = "block"
    h1Tag.innerHTML = "So und nicht anders."
  })
}
