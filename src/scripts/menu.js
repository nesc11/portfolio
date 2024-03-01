const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const body = document.body
hamburger.addEventListener('click', () => {
    body.classList.toggle('overflow-hidden')
    navLinks.classList.toggle('expanded')
	hamburger.classList.toggle('expanded')
})