const dropDown = document.getElementsByClassName('drop-down')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

dropDown.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})