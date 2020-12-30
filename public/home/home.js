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