// ==================== HANDLE HEADER SECTION ==================== //
const headerSection = document.querySelector('.header__section')
const btnToTop = document.querySelector('.btn__toTop')

// Config button to top
window.onscroll = () => {
    const st = window.scrollY
    if(st > 120) {
        headerSection.classList.add('active')
    } else {
        headerSection.classList.remove('active')
    }

    if(st > 200) {
        btnToTop.classList.add('active')
    } else {
        btnToTop.classList.remove('active')
    }
}

// ================= ANIMATION IMAGE HERO ================= //
const imgHeros = document.getElementsByClassName('hero__img')
const heroContent = document.querySelector('.hero__content')
const heroTagImg1 = document.querySelector('.hero__img1-tag')

window.onload = () => {
    Array.from(imgHeros).forEach(imgHero => {
        imgHero.classList.add('active')
    })
    Array.from(heroContent.children).forEach(chil => {
        chil.classList.add('active')
    })
    heroTagImg1.classList.add('active')
}