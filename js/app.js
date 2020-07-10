// Scroll menu

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav')
  const img = document.querySelector('.nav__logo img')
  nav.classList.toggle('sticky', window.scrollY > 100)
  if(window.scrollY > 100) {
    img.setAttribute('src', './img/logo/dashHelpColor.svg')
  } else {
    img.setAttribute('src', './img/logo/dashHelpWhite.svg')
  }
})