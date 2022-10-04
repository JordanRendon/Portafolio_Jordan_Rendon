const navMenuLogo = document.querySelector('.nav-menu-logo')
const navMenu = document.querySelector('.nav-menu')
const btnIrArriba = document.querySelector('.btn-ir-arriba')
const btnModoOscuro = document.querySelector('#switch')

navMenuLogo.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
})

btnIrArriba.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY < 500){
        btnIrArriba.style.right = -100 + 'px'
    }else{
        btnIrArriba.style.right = 5 + 'px'
    }
})

btnModoOscuro.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    
    btnModoOscuro.classList.toggle('active')
})