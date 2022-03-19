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