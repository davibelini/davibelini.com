function typewriter(el) {
  const textoArray = el.innerHTML.split('')
  el.innerHTML = ''
  textoArray.forEach((letter, i) => {
    setTimeout(() => {
      el.innerHTML += letter
    }, i * 27.5);
  });
}
typewriter(document.querySelectorAll('.title')[1])

const photosParent = document.querySelector(".slide")
const photos = document.querySelectorAll(".slide-content")
const elements = [...photos]
let elIndex = 0
const selected = elements[elIndex]

photos.forEach((photo) => {
  if(photo == selected) {
    return;
  }
  else {
    photo.remove()
  }
})