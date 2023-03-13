const closeMenu = document.getElementById('close-menu')
const openMenu = document.getElementById('open-menu')
const menus = document.getElementById('menus')
const siteBody = document.getElementById('body')
const arrowDown = './src/assets/svg/icon-arrow-down.svg'
const arrowUp = './src/assets/svg/icon-arrow-up.svg'

menus.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link')) {
    e.target.firstElementChild.getAttribute('src') === arrowDown
      ? e.target.firstElementChild.setAttribute('src', arrowUp)
      : e.target.firstElementChild.setAttribute('src', arrowDown)
    e.target.nextElementSibling.classList.toggle('active-menu')
  } else if (e.target.classList.contains('sub-menu-button')) {
    e.target.getAttribute('src') === arrowDown
      ? e.target.setAttribute('src', arrowUp)
      : e.target.setAttribute('src', arrowDown)
    e.target.parentElement.nextElementSibling.classList.toggle('active-menu')
  }
})

openMenu.addEventListener('click', () => {
  menus.classList.add('active-menu')
  siteBody.classList.add('active-filter')
})

closeMenu.addEventListener('click', () => {
  menus.classList.remove('active-menu')
  siteBody.classList.remove('active-filter')
})

window.addEventListener('load', () => {
  siteBody.classList.remove('active-filter')
})
