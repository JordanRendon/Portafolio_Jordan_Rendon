const navMenuLogo = document.querySelector('.nav-menu-logo')
const navMenu = document.querySelector('.nav-menu')

navMenuLogo.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
})
