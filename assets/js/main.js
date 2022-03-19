// ==================== HANDLE HEADER SECTION ==================== //
const headerSection = document.querySelector('.header__section')
const btnToTop = document.querySelector('.btn__toTop')
let prevScroll

window.onscroll = () => {
    const st = window.scrollY
    if(st > 120) {
        headerSection.classList.add('active')
    } else {
        headerSection.classList.remove('active')
    }

    if(st < prevScroll && st > 200) {
        console.log('up')
        btnToTop.classList.add('active')
    } else {
        console.log('down')
        btnToTop.classList.remove('active')
    }
    prevScroll = st
}